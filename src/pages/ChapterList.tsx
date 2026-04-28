import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { getParts, getChapters } from '../utils/supabase';
import { STATIC_PARTS, STATIC_CHAPTERS } from '../data/curriculum';
import ChapterIllustration from '../components/ChapterIllustration';
import { useChapterProgress } from '../hooks/useChapterProgress';
import type { ReactElement } from 'react';

interface Part {
  id: number;
  title: string;
  description: string;
  sort_order: number;
}

interface Chapter {
  id: number;
  part_id: number;
  chapter_number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ChapterList = (): ReactElement => {
  const { language } = useLanguage();
  const location = useLocation();
  const params = useParams();
  const [parts, setParts] = useState<Part[]>(STATIC_PARTS);
  const [chapters, setChapters] = useState<Chapter[]>(STATIC_CHAPTERS as Chapter[]);
  const { getChapterProgress } = useChapterProgress();

  // Determine active part filter from URL
  const pathMatch = location.pathname.match(/\/chapters\/part(\d)/);
  const activePartNumber = pathMatch
    ? parseInt(pathMatch[1], 10)
    : params['*']
      ? 0
      : 0;

  useEffect(() => {
    getParts().then(data => setParts(data as Part[]));
    getChapters().then(data => setChapters(data as Chapter[]));
  }, []);

  // Filter chapters by part
  const filteredChapters =
    activePartNumber > 0
      ? chapters.filter(ch => {
          const part = parts.find(p => p.id === ch.part_id);
          return part && part.sort_order === activePartNumber;
        })
      : chapters;

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '학습하기' : 'Chapters'}
        description="AI Literacy 챕터 목록 - AI 기초부터 미래까지 체계적으로 학습하세요"
        path="/chapters"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <span>{language === 'ko' ? '학습하기' : 'Chapters'}</span>
          </div>
          <div className="page-header-icon">
            🎓
          </div>
          <h2 className="page-title">
            {language === 'ko' ? '학습하기' : 'Chapters'}
          </h2>
          <p className="page-subtitle">
            {activePartNumber > 0
              ? `Part ${activePartNumber} ${language === 'ko' ? '챕터 목록' : 'Chapters'}`
              : language === 'ko'
                ? '전체 12개 챕터를 학습하세요'
                : 'Study all 12 chapters'}
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          {/* Part Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/chapters"
              className="topic-chip"
              style={{
                textDecoration: 'none',
                backgroundColor:
                  activePartNumber === 0
                    ? 'rgba(59,130,246,0.15)'
                    : 'var(--bg-light-gray, #f3f4f6)',
                color:
                  activePartNumber === 0
                    ? '#3B82F6'
                    : 'var(--text-secondary)',
                border:
                  activePartNumber === 0
                    ? '1.5px solid rgba(59,130,246,0.4)'
                    : '1.5px solid var(--border-color, #e5e7eb)',
                fontWeight: activePartNumber === 0 ? 700 : 500,
              }}
            >
              {language === 'ko' ? '전체' : 'All'}
            </Link>
            {parts.map(part => {
              const isActive = part.sort_order === activePartNumber;
              return (
                <Link
                  key={part.id}
                  to={`/chapters/part${part.sort_order}`}
                  className="topic-chip"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: isActive
                      ? 'rgba(59,130,246,0.15)'
                      : 'var(--bg-light-gray, #f3f4f6)',
                    color: isActive
                      ? '#3B82F6'
                      : 'var(--text-secondary)',
                    border: isActive
                      ? '1.5px solid rgba(59,130,246,0.4)'
                      : '1.5px solid var(--border-color, #e5e7eb)',
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  Part {part.sort_order}
                </Link>
              );
            })}
          </div>

          {/* Chapter Cards */}
          <div className="parts-grid">
            {filteredChapters.map(ch => {
              const progress = getChapterProgress(ch.chapter_number);
              const isComplete = progress === 100;
              return (
                <Link
                  key={ch.id}
                  to={`/chapters/${ch.chapter_number}`}
                  className="part-card"
                  style={{ textDecoration: 'none', position: 'relative' }}
                >
                  {isComplete && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        background: '#059669',
                        color: 'white',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      {language === 'ko' ? '완료' : 'Done'}
                    </span>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <ChapterIllustration
                      chapterNumber={ch.chapter_number}
                      color={ch.color || '#0D1B3E'}
                      size={48}
                    />
                    <div>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                        }}
                      >
                        Chapter {ch.chapter_number}
                      </span>
                      <h3 className="part-title" style={{ marginBottom: 0 }}>
                        {ch.title}
                      </h3>
                    </div>
                  </div>
                  <p className="part-description">{ch.description}</p>
                </Link>
              );
            })}
          </div>

          {filteredChapters.length === 0 && (
            <div className="empty-state">
              <p>
                {language === 'ko'
                  ? '해당 파트에 챕터가 없습니다.'
                  : 'No chapters found for this part.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ChapterList;
