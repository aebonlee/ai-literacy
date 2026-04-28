import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { getNotices } from '../utils/supabase';
import { STATIC_NOTICES } from '../data/community';
import type { ReactElement } from 'react';

interface Notice {
  id: number;
  title: string;
  date: string;
  pinned: boolean;
  category: string;
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  '공지': { bg: 'rgba(220,38,38,0.08)', color: '#DC2626' },
  '안내': { bg: 'rgba(59,130,246,0.08)', color: '#3B82F6' },
  '이벤트': { bg: 'rgba(124,58,237,0.08)', color: '#7C3AED' },
  '업데이트': { bg: 'rgba(5,150,105,0.08)', color: '#059669' },
};

const NoticeList = (): ReactElement => {
  const { language } = useLanguage();
  const [notices, setNotices] = useState<Notice[]>(STATIC_NOTICES as Notice[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getNotices();
      setNotices(data as Notice[]);
      setLoading(false);
    };
    load();
  }, []);

  // Sort: pinned first, then by date desc
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '공지사항' : 'Notices'}
        description="AI Literacy 공지사항 - 최신 안내와 소식을 확인하세요"
        path="/community/notice"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <span>{language === 'ko' ? '공지사항' : 'Notices'}</span>
          </div>
          <div className="page-header-icon">
            <i className="fa-solid fa-bullhorn"></i>
          </div>
          <h2 className="page-title">
            {language === 'ko' ? '공지사항' : 'Notices'}
          </h2>
          <p className="page-subtitle">
            {language === 'ko'
              ? '최신 공지사항과 안내를 확인하세요'
              : 'Check the latest notices and announcements'}
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '3rem 0',
              }}
            >
              <div className="loading-spinner"></div>
            </div>
          ) : sortedNotices.length > 0 ? (
            <div className="board-list">
              {sortedNotices.map(notice => {
                const catStyle = CATEGORY_COLORS[notice.category] || {
                  bg: 'rgba(107,114,128,0.08)',
                  color: '#6B7280',
                };
                return (
                  <div key={notice.id} className="board-item">
                    {notice.pinned && <span className="pin-badge">PIN</span>}
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: catStyle.bg,
                        color: catStyle.color,
                      }}
                    >
                      {notice.category}
                    </span>
                    <span className="item-title">{notice.title}</span>
                    <span className="item-date">{notice.date}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <i
                className="fa-solid fa-inbox"
                style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.3 }}
              ></i>
              <p>
                {language === 'ko'
                  ? '등록된 공지사항이 없습니다.'
                  : 'No notices available.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NoticeList;
