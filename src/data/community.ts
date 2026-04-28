/**
 * AI Literacy — 정적 커뮤니티 데이터
 * Supabase 테이블 미생성 시 fallback으로 사용
 */

export const STATIC_NOTICES = [
  { id: 1, title: 'AI Literacy 사이트 오픈 안내', date: '2026-04-28', pinned: true, category: '공지' },
  { id: 2, title: '학습 콘텐츠 업데이트 안내', date: '2026-04-28', pinned: false, category: '안내' },
  { id: 3, title: 'AI 실습 가이드 추가', date: '2026-04-28', pinned: false, category: '안내' },
];

export const STATIC_QNA = [
  { id: 1, title: 'ChatGPT와 Claude의 차이점이 궁금합니다', date: '2026-04-28', category: '질문', answered: true },
  { id: 2, title: '프롬프트 엔지니어링 학습 순서 추천', date: '2026-04-28', category: '질문', answered: true },
  { id: 3, title: 'AI 윤리 관련 참고 자료', date: '2026-04-28', category: '자료', answered: false },
];
