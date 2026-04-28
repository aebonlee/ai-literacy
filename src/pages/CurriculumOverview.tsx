import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { getParts, getChapters } from '../utils/supabase';
import { STATIC_PARTS, STATIC_CHAPTERS } from '../data/curriculum';
import ChapterIllustration from '../components/ChapterIllustration';
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

const PART_COLORS = ['#3B82F6', '#DC2626', '#059669', '#7C3AED'];
const PART_BG_COLORS = [
  'rgba(59,130,246,0.08)',
  'rgba(220,38,38,0.08)',
  'rgba(5,150,105,0.08)',
  'rgba(124,58,237,0.08)',
];

const CurriculumOverview = (): ReactElement => {
  const { t, language } = useLanguage();
  const [parts, setParts] = useState<Part[]>(STATIC_PARTS);
  const [chapters, setChapters] = useState<Chapter[]>(STATIC_CHAPTERS as Chapter[]);

  useEffect(() => {
    getParts().then(data => setParts(data as Part[]));
    getChapters().then(data => setChapters(data as Chapter[]));
  }, []);

  const totalSections = chapters.length * 3;

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '교과 개요' : 'Curriculum Overview'}
        description="AI Literacy 커리큘럼 개요 - 4개 파트, 12개 챕터의 체계적인 AI 리터러시 학습"
        path="/curriculum"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <span>{t('site.nav.curriculum')}</span>
          </div>
          <div className="page-header-icon">
            📖
          </div>
          <h2 className="page-title">
            {language === 'ko' ? '교과 개요' : 'Curriculum Overview'}
          </h2>
          <p className="page-subtitle">
            {language === 'ko'
              ? 'AI 리터러시를 체계적으로 학습하는 커리큘럼'
              : 'A systematic curriculum for AI literacy'}
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Curriculum Summary */}
      <section className="section">
        <div className="container">
          <div className="curriculum-summary">
            <div className="summary-item">
              <span className="summary-number">{parts.length || 4}</span>
              <span className="summary-label">Parts</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">{chapters.length || 12}</span>
              <span className="summary-label">Chapters</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">~{totalSections || 36}</span>
              <span className="summary-label">Sections</span>
            </div>
          </div>

          {/* Parts Grid */}
          <div className="parts-grid">
            {parts.map((part, idx) => {
              const partChapters = chapters.filter(ch => ch.part_id === part.id);
              const partColor = PART_COLORS[idx % PART_COLORS.length];
              const partBg = PART_BG_COLORS[idx % PART_BG_COLORS.length];

              return (
                <div key={part.id} className="part-card">
                  <div className="part-card-header">
                    <span
                      className="part-badge"
                      style={{
                        background: partBg,
                        color: partColor,
                        border: `1px solid ${partColor}30`,
                      }}
                    >
                      Part {part.sort_order}
                    </span>
                    <span className="part-chapter-count">
                      {partChapters.length}
                      {language === 'ko' ? '개 챕터' : ' chapters'}
                    </span>
                  </div>
                  <h3 className="part-title">{part.title}</h3>
                  <p className="part-description">{part.description}</p>
                  <div className="chapter-list">
                    {partChapters.map(ch => (
                      <Link
                        key={ch.id}
                        to={`/chapters/${ch.chapter_number}`}
                        className="chapter-item"
                      >
                        <ChapterIllustration
                          chapterNumber={ch.chapter_number}
                          color={ch.color || partColor}
                          size={28}
                        />
                        <span className="chapter-name">
                          Ch.{ch.chapter_number} {ch.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="curriculum-cta">
            <Link
              to="/chapters"
              className="btn btn-primary"
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '10px',
                fontWeight: 600,
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                color: 'white',
                border: 'none',
              }}
            >
              ▶️{' '}
              {language === 'ko' ? '학습 시작하기' : 'Start Learning'}
            </Link>
            <Link
              to="/practice"
              className="btn btn-outline"
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '10px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1.5px solid var(--border-color, #d1d5db)',
                color: 'var(--text-primary)',
              }}
            >
              🧪{' '}
              {language === 'ko' ? 'AI 실습하기' : 'AI Practice'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CurriculumOverview;
