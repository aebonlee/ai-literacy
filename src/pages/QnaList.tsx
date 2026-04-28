import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { getQnaPosts } from '../utils/supabase';
import { STATIC_QNA } from '../data/community';
import type { ReactElement } from 'react';

interface QnaPost {
  id: number;
  title: string;
  date: string;
  category: string;
  answered: boolean;
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  '질문': { bg: 'rgba(59,130,246,0.08)', color: '#3B82F6' },
  '자료': { bg: 'rgba(5,150,105,0.08)', color: '#059669' },
  '토론': { bg: 'rgba(124,58,237,0.08)', color: '#7C3AED' },
  '건의': { bg: 'rgba(245,158,11,0.08)', color: '#D97706' },
};

const QnaList = (): ReactElement => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<QnaPost[]>(STATIC_QNA as QnaPost[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await getQnaPosts();
      setPosts(data as QnaPost[]);
      setLoading(false);
    };
    load();
  }, []);

  // Sort by date desc
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <SEOHead
        title="Q&A"
        description="AI Literacy Q&A - 학습 관련 질문과 답변을 확인하세요"
        path="/community/qna"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <span>Q&A</span>
          </div>
          <div className="page-header-icon">
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <h2 className="page-title">Q&A</h2>
          <p className="page-subtitle">
            {language === 'ko'
              ? '학습 관련 질문과 답변을 확인하세요'
              : 'Check questions and answers about learning'}
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
          ) : sortedPosts.length > 0 ? (
            <div className="board-list">
              {sortedPosts.map(post => {
                const catStyle = CATEGORY_COLORS[post.category] || {
                  bg: 'rgba(107,114,128,0.08)',
                  color: '#6B7280',
                };
                return (
                  <div key={post.id} className="board-item">
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: catStyle.bg,
                        color: catStyle.color,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="item-title">{post.title}</span>
                    {post.answered && (
                      <span
                        style={{
                          background: '#059669',
                          color: 'white',
                          padding: '0.1rem 0.5rem',
                          borderRadius: '999px',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          marginLeft: '0.5rem',
                          flexShrink: 0,
                        }}
                      >
                        {language === 'ko' ? '답변완료' : 'Answered'}
                      </span>
                    )}
                    {!post.answered && (
                      <span
                        style={{
                          background: 'rgba(245,158,11,0.1)',
                          color: '#D97706',
                          padding: '0.1rem 0.5rem',
                          borderRadius: '999px',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          marginLeft: '0.5rem',
                          flexShrink: 0,
                        }}
                      >
                        {language === 'ko' ? '대기중' : 'Pending'}
                      </span>
                    )}
                    <span className="item-date">{post.date}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <i
                className="fa-solid fa-comments"
                style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.3 }}
              ></i>
              <p>
                {language === 'ko'
                  ? '등록된 Q&A가 없습니다.'
                  : 'No Q&A posts available.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default QnaList;
