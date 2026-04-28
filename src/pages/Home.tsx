import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import site from '../config/site';
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

const Home = (): ReactElement => {
  const { t } = useLanguage();
  const [parts, setParts] = useState<Part[]>(STATIC_PARTS);
  const [chapters, setChapters] = useState<Chapter[]>(STATIC_CHAPTERS as Chapter[]);

  useEffect(() => {
    getParts().then(data => setParts(data as Part[]));
    getChapters().then(data => setChapters(data as Chapter[]));
  }, []);

  const topicChips = [
    { label: 'AI 기초', color: '#60A5FA', bg: 'rgba(96,165,250,0.18)', border: 'rgba(96,165,250,0.4)' },
    { label: '윤리', color: '#34D399', bg: 'rgba(52,211,153,0.18)', border: 'rgba(52,211,153,0.4)' },
    { label: '프롬프트', color: '#C4B5FD', bg: 'rgba(196,181,253,0.18)', border: 'rgba(196,181,253,0.4)' },
    { label: '데이터', color: '#93C5FD', bg: 'rgba(147,197,253,0.18)', border: 'rgba(147,197,253,0.4)' },
    { label: '미래', color: '#FCD34D', bg: 'rgba(252,211,77,0.15)', border: 'rgba(252,211,77,0.35)' },
    { label: '활용', color: '#F9A8D4', bg: 'rgba(249,168,212,0.18)', border: 'rgba(249,168,212,0.4)' },
  ];

  return (
    <>
      <SEOHead
        title={`${site.name} | ${site.nameKo}`}
        description={site.description}
      />

      {/* Hero Section */}
      <section className="hero-section aisw-hero">
        <div className="container hero-content">
          <div className="hero-badge">AI 시대 필수 교양</div>
          <h1 className="hero-title">AI Literacy</h1>
          <p className="hero-subtitle">{t('site.home.subtitle')}</p>
          <p className="hero-description">{t('site.home.welcome')}</p>
          <div className="hero-chips">
            {topicChips.map(chip => (
              <span
                key={chip.label}
                className="topic-chip"
                style={{
                  backgroundColor: chip.bg,
                  color: chip.color,
                  borderColor: chip.border,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>
          <p className="hero-meta">{t('site.home.description')}</p>
          <div className="hero-actions">
            <Link to="/curriculum" className="btn btn-primary">
              커리큘럼 보기
            </Link>
            <Link to="/chapters" className="btn btn-outline">
              학습 시작
            </Link>
          </div>
        </div>
        <div className="hero-divider"></div>
      </section>

      {/* Parts & Chapters Overview */}
      {parts.length > 0 && (
        <section className="section aisw-parts-section">
          <div className="container">
            <h2 className="section-title">교과 구성</h2>
            <p className="section-subtitle">
              4개 파트, 12개 챕터로 구성된 체계적인 AI 리터러시 커리큘럼
            </p>
            <div className="parts-grid">
              {parts.map(part => (
                <div key={part.id} className="part-card">
                  <h3 className="part-title">{part.title}</h3>
                  <p className="part-description">{part.description}</p>
                  <div className="chapter-list">
                    {chapters
                      .filter(ch => ch.part_id === part.id)
                      .map(ch => (
                        <Link
                          key={ch.id}
                          to={`/chapters/${ch.chapter_number}`}
                          className="chapter-item"
                        >
                          <ChapterIllustration
                            chapterNumber={ch.chapter_number}
                            color={ch.color || '#0D1B3E'}
                            size={32}
                          />
                          <span className="chapter-name">
                            Ch.{ch.chapter_number} {ch.title}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">학습 기능</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3>AI 이해</h3>
              <p>AI의 원리와 개념을 기초부터 체계적으로 학습</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h3>실전 활용</h3>
              <p>ChatGPT, Claude, Gemini를 활용한 AI 실습</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h3>AI 윤리</h3>
              <p>책임 있는 AI 사용을 위한 윤리와 안전 교육</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>미래 설계</h3>
              <p>AI 시대의 진로와 미래 사회 전망</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="section aisw-instructor-section">
        <div className="container">
          <div className="instructor-card">
            <div className="instructor-info">
              <h3>{t('site.home.instructor')}</h3>
              <p>경영학 박사 · IT 교육 전문가</p>
              <p className="instructor-desc">
                AI 리터러시와 디지털 역량 교육을 통해 AI 시대를 준비하는
                인재를 양성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
