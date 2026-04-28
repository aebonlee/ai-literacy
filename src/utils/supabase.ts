import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { OrderData, Order, PaymentStatus } from '../types';
import site from '../config/site';
import {
  STATIC_PARTS,
  STATIC_CHAPTERS,
  STATIC_SECTIONS,
} from '../data/curriculum';
import { STATIC_NOTICES, STATIC_QNA } from '../data/community';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase 테이블명 (site.dbPrefix 기반) */
export const TABLES = {
  // 커리큘럼
  parts: `${site.dbPrefix}parts`,
  chapters: `${site.dbPrefix}chapters`,
  sections: `${site.dbPrefix}sections`,
  // 진행/북마크
  progress: `${site.dbPrefix}progress`,
  bookmarks: `${site.dbPrefix}bookmarks`,
  // 커뮤니티
  notices: `${site.dbPrefix}notices`,
  qna: `${site.dbPrefix}qna`,
  comments: `${site.dbPrefix}comments`,
  // 결제
  orders: `${site.dbPrefix}orders`,
  order_items: `${site.dbPrefix}order_items`,
} as const;

// Supabase client singleton
let supabase: SupabaseClient | null = null;
let _memoryOrders: Order[] = [];

const getSupabase = (): SupabaseClient | null => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

/* ── 커리큘럼 조회 ── */

export const getParts = async () => {
  const client = getSupabase();
  if (client) {
    const { data, error } = await client
      .from(TABLES.parts)
      .select('*')
      .order('sort_order');
    if (!error && data && data.length > 0) return data;
  }
  return STATIC_PARTS;
};

export const getChapters = async (partId?: number) => {
  const client = getSupabase();
  if (client) {
    let query = client.from(TABLES.chapters).select('*').order('chapter_number');
    if (partId) query = query.eq('part_id', partId);
    const { data, error } = await query;
    if (!error && data && data.length > 0) return data;
  }
  const fallback = partId
    ? STATIC_CHAPTERS.filter(ch => ch.part_id === partId)
    : STATIC_CHAPTERS;
  return fallback;
};

export const getSections = async (chapterId: number) => {
  const client = getSupabase();
  if (client) {
    const { data, error } = await client
      .from(TABLES.sections)
      .select('*')
      .eq('chapter_id', chapterId)
      .order('sort_order');
    if (!error && data && data.length > 0) return data;
  }
  return STATIC_SECTIONS.filter(s => s.chapter_id === chapterId);
};

/* ── 커뮤니티 조회 ── */

export const getNotices = async () => {
  const client = getSupabase();
  if (client) {
    const { data, error } = await client
      .from(TABLES.notices)
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data && data.length > 0) return data;
  }
  return STATIC_NOTICES;
};

export const getQnaPosts = async () => {
  const client = getSupabase();
  if (client) {
    const { data, error } = await client
      .from(TABLES.qna)
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data && data.length > 0) return data;
  }
  return STATIC_QNA;
};

/* ── 학습 진행 ── */

export const getProgress = async (userId: string) => {
  const client = getSupabase();
  if (!client) return [];
  const { data, error } = await client
    .from(TABLES.progress)
    .select('*')
    .eq('user_id', userId);
  if (error) return [];
  return data || [];
};

export const getBookmarks = async (userId: string) => {
  const client = getSupabase();
  if (!client) return [];
  const { data, error } = await client
    .from(TABLES.bookmarks)
    .select('*')
    .eq('user_id', userId);
  if (error) return [];
  return data || [];
};

/* ── 결제 (템플릿 공용) ── */

// user_id 제외 — auth.users FK "permission denied" 방지
export const createOrder = async (orderData: OrderData): Promise<Order> => {
  const client = getSupabase();

  if (!client) {
    const order: Order = {
      id: crypto.randomUUID(),
      ...orderData,
      payment_status: 'pending',
      created_at: new Date().toISOString()
    };
    _memoryOrders.push(order);
    return order;
  }

  const orderPayload: Record<string, unknown> = {
    order_number: orderData.order_number,
    user_email: orderData.user_email,
    user_name: orderData.user_name,
    user_phone: orderData.user_phone,
    total_amount: orderData.total_amount,
    payment_method: orderData.payment_method
  };

  const { error: orderError } = await client
    .from(TABLES.orders)
    .insert(orderPayload);

  if (orderError) throw orderError;

  if (orderData.items && orderData.items.length > 0) {
    try {
      const { data: row } = await client
        .from(TABLES.orders)
        .select('id')
        .eq('order_number', orderData.order_number)
        .maybeSingle();

      if (row?.id) {
        await client
          .from(TABLES.order_items)
          .insert(
            orderData.items.map(item => ({
              order_id: row.id,
              product_title: item.product_title,
              quantity: item.quantity,
              unit_price: item.unit_price,
              subtotal: item.subtotal
            }))
          );
      }
    } catch {
      /* order_items 실패해도 결제 플로우는 계속 진행 */
    }
  }

  return { id: orderData.order_number, order_number: orderData.order_number } as unknown as Order;
};

export const getOrderByNumber = async (orderNumber: string): Promise<Order | null> => {
  const client = getSupabase();

  if (!client) {
    return _memoryOrders.find(o => o.order_number === orderNumber) || null;
  }

  const { data: orders, error } = await client
    .from(TABLES.orders)
    .select('*')
    .eq('order_number', orderNumber)
    .limit(1);

  if (error) throw error;
  if (!orders || orders.length === 0) return null;

  const order = orders[0];

  const { data: items } = await client
    .from(TABLES.order_items)
    .select('*')
    .eq('order_id', order.id);

  return { ...order, items: items || [] } as Order;
};

export const updateOrderStatus = async (
  orderId: string,
  status: PaymentStatus,
  paymentId?: string,
  cancelReason?: string
): Promise<Order | null | undefined> => {
  const client = getSupabase();

  if (!client) {
    const idx = _memoryOrders.findIndex(o => o.id === orderId || o.order_number === orderId);
    if (idx >= 0) {
      _memoryOrders[idx].payment_status = status;
      if (paymentId) _memoryOrders[idx].portone_payment_id = paymentId;
      if (status === 'paid') _memoryOrders[idx].paid_at = new Date().toISOString();
      if (status === 'cancelled') {
        _memoryOrders[idx].cancelled_at = new Date().toISOString();
        if (cancelReason) _memoryOrders[idx].cancel_reason = cancelReason;
      }
    }
    return _memoryOrders[idx];
  }

  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-/.test(orderId);
  const filterCol = isUUID ? 'id' : 'order_number';

  const updatePayload: Record<string, unknown> = { payment_status: status };
  if (status === 'paid') updatePayload.paid_at = new Date().toISOString();
  if (status === 'cancelled') {
    updatePayload.cancelled_at = new Date().toISOString();
    if (cancelReason) updatePayload.cancel_reason = cancelReason;
  }

  const extras: Record<string, unknown> = {};
  if (paymentId) extras.portone_payment_id = paymentId;

  let result: Order[] | null = null;

  try {
    const { data, error } = await client
      .from(TABLES.orders)
      .update({ ...updatePayload, ...extras })
      .eq(filterCol, orderId)
      .select();

    if (error) throw error;
    result = data as Order[] | null;
  } catch {
    try {
      const { data, error } = await client
        .from(TABLES.orders)
        .update(updatePayload)
        .eq(filterCol, orderId)
        .select();

      if (error) throw error;
      result = data as Order[] | null;
    } catch {
      console.warn('updateOrderStatus: fallback update also failed for', filterCol, orderId);
      return null;
    }
  }

  if (!result || result.length === 0) {
    console.warn('updateOrderStatus: no rows updated for', filterCol, orderId);
    return null;
  }

  return result[0];
};

export const verifyPayment = async (
  paymentId: string,
  orderId: string
): Promise<{ verified: boolean }> => {
  const client = getSupabase();
  if (!client) {
    await updateOrderStatus(orderId, 'paid', paymentId);
    return { verified: true };
  }

  const { data, error } = await client.functions.invoke('verify-payment', {
    body: { paymentId, orderId }
  });

  if (error) throw error;
  return data as { verified: boolean };
};

export const getOrdersByUser = async (userId: string): Promise<Order[]> => {
  const client = getSupabase();
  if (!client) return [];

  const selectQuery = `*, ${TABLES.order_items}(*)`;
  const { data, error } = await client
    .from(TABLES.orders)
    .select(selectQuery)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getOrdersByUser error:', error);
    return [];
  }
  return (data || []) as unknown as Order[];
};

export default getSupabase;
