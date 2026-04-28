import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { getChapters, getSections } from '../utils/supabase';
import { STATIC_CHAPTERS } from '../data/curriculum';
import ChapterIllustration from '../components/ChapterIllustration';
import { useChapterProgress } from '../hooks/useChapterProgress';
import type { ReactElement } from 'react';

interface Chapter {
  id: number;
  part_id: number;
  chapter_number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Section {
  id: number;
  chapter_id: number;
  title: string;
  content: string;
  sort_order: number;
}

const ChapterDetail = (): ReactElement => {
  const { language } = useLanguage();
  const { chapterNumber } = useParams<{ chapterNumber: string }>();

  const [chapters, setChapters] = useState<Chapter[]>(STATIC_CHAPTERS as Chapter[]);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chapterNum = chapterNumber ? parseInt(chapterNumber, 10) : 0;
  const { completedSections, markComplete } = useChapterProgress();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const chaptersData = await getChapters();
      setChapters(chaptersData as Chapter[]);
    };
    load();
  }, []);

  const currentChapter = chapters.find(ch => ch.chapter_number === chapterNum);

  const sortedChapters = [...chapters].sort(
    (a, b) => a.chapter_number - b.chapter_number,
  );
  const currentIndex = sortedChapters.findIndex(
    ch => ch.chapter_number === chapterNum,
  );
  const prevChapter =
    currentIndex > 0 ? sortedChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < sortedChapters.length - 1
      ? sortedChapters[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!currentChapter) {
      setSections([]);
      return;
    }
    const loadSections = async () => {
      setLoading(true);
      const data = await getSections(currentChapter.id);
      setSections(data as Section[]);
      setLoading(false);
      setActiveSection(0);
    };
    loadSections();
  }, [currentChapter?.id]);

  // IntersectionObserver to detect visible section
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(
              entry.target.getAttribute('data-section-index'),
            );
            if (!isNaN(idx)) setActiveSection(idx);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  if (chapters.length > 0 && !currentChapter && !loading) {
    return (
      <section className="section">
        <div
          className="container"
          style={{ textAlign: 'center', padding: '4rem 1rem' }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {language === 'ko'
              ? '챕터를 찾을 수 없습니다'
              : 'Chapter Not Found'}
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}
          >
            {language === 'ko'
              ? `Chapter ${chapterNum}에 해당하는 콘텐츠가 없습니다.`
              : `No content found for Chapter ${chapterNum}.`}
          </p>
          <Link to="/chapters" className="btn btn-primary">
            {language === 'ko' ? '챕터 목록으로' : 'Back to Chapters'}
          </Link>
        </div>
      </section>
    );
  }

  if (loading || !currentChapter) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const chapterColor = currentChapter.color || '#0D1B3E';

  return (
    <>
      <SEOHead
        title={`Ch.${currentChapter.chapter_number} ${currentChapter.title}`}
        description={currentChapter.description}
        path={`/chapters/${currentChapter.chapter_number}`}
      />

      <section className="section">
        <div
          className="container"
          style={{ maxWidth: '1340px', margin: '0 auto' }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Link
              to="/"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              {language === 'ko' ? '홈' : 'Home'}
            </Link>
            {' / '}
            <Link
              to="/chapters"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              {language === 'ko' ? '학습하기' : 'Chapters'}
            </Link>
            {' / '}
            <span style={{ color: 'var(--text-primary)' }}>
              Ch.{currentChapter.chapter_number}
            </span>
          </nav>

          {/* Chapter Header */}
          <div
            style={{
              marginBottom: '2rem',
              padding: '2rem',
              borderRadius: '16px',
              backgroundColor: `${chapterColor}08`,
              border: `1px solid ${chapterColor}20`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <ChapterIllustration
                chapterNumber={currentChapter.chapter_number}
                color={chapterColor}
                size={120}
              />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: chapterColor,
                    fontWeight: 600,
                  }}
                >
                  Chapter {currentChapter.chapter_number}
                </span>
                <h1
                  style={{
                    fontSize: '1.6rem',
                    margin: '0.25rem 0 0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {currentChapter.title}
                </h1>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {currentChapter.description}
                </p>
              </div>
            </div>
          </div>

          {/* 2-Column Layout: Sidebar + Content */}
          <div className="chapter-layout">
            {/* Left Sidebar TOC */}
            {sections.length > 0 && (
              <aside className="chapter-sidebar">
                <nav className="chapter-toc">
                  <h3 className="chapter-toc-title">
                    <span style={{ marginRight: '0.4rem' }}>📑</span>
                    {language === 'ko' ? '목차' : 'Contents'}
                  </h3>
                  <ul className="chapter-toc-list">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <button
                          className={`chapter-toc-item${activeSection === index ? ' active' : ''}`}
                          onClick={() => scrollToSection(index)}
                          style={
                            {
                              '--toc-color': chapterColor,
                            } as React.CSSProperties
                          }
                        >
                          <span className="chapter-toc-num">{index + 1}</span>
                          <span className="chapter-toc-text">
                            {section.title}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Right Content */}
            <div className="chapter-content">
              <h2
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                }}
              >
                {language === 'ko' ? '학습 내용' : 'Sections'}
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 400,
                    marginLeft: '0.5rem',
                  }}
                >
                  ({sections.length}
                  {language === 'ko' ? '개 섹션' : ' sections'})
                </span>
              </h2>

              {sections.length > 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {sections.map((section, index) => (
                    <div
                      key={section.id}
                      ref={el => {
                        sectionRefs.current[index] = el;
                      }}
                      data-section-index={index}
                      id={`section-${index}`}
                      className="section-card"
                      style={{
                        borderRadius: '12px',
                        scrollMarginTop: '80px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: chapterColor,
                            backgroundColor: `${chapterColor}15`,
                            padding: '0.25rem 0.6rem',
                            borderRadius: '6px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {index + 1}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            style={{
                              fontSize: '1.05rem',
                              marginBottom: '0.5rem',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {section.title}
                          </h3>
                          <div
                            className="section-content-body"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                        </div>
                      </div>

                      {/* Section complete toggle */}
                      <div style={{ textAlign: 'right', marginTop: '0.75rem' }}>
                        <button
                          onClick={() =>
                            markComplete(chapterNum, section.id)
                          }
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            background: completedSections[`${chapterNum}-${section.id}`]
                              ? '#059669'
                              : 'var(--bg-secondary, #f3f4f6)',
                            color: completedSections[`${chapterNum}-${section.id}`]
                              ? 'white'
                              : 'var(--text-secondary)',
                            fontWeight: 600,
                            transition: 'all 0.2s',
                          }}
                        >
                          {completedSections[`${chapterNum}-${section.id}`]
                            ? (language === 'ko' ? '학습 완료' : 'Completed')
                            : (language === 'ko' ? '완료 표시' : 'Mark Done')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    padding: '2rem 0',
                  }}
                >
                  {language === 'ko'
                    ? '이 챕터에 등록된 학습 내용이 없습니다.'
                    : 'No sections available for this chapter.'}
                </p>
              )}

              {/* Previous/Next Chapter Navigation */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid var(--border-color)',
                  flexWrap: 'wrap',
                }}
              >
                {prevChapter ? (
                  <Link
                    to={`/chapters/${prevChapter.chapter_number}`}
                    className="btn btn-outline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>&#8592;</span>
                    <div style={{ textAlign: 'left' }}>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {language === 'ko' ? '이전 챕터' : 'Previous'}
                      </div>
                      <div style={{ fontSize: '0.9rem' }}>
                        Ch.{prevChapter.chapter_number} {prevChapter.title}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextChapter ? (
                  <Link
                    to={`/chapters/${nextChapter.chapter_number}`}
                    className="btn btn-outline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginLeft: 'auto',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {language === 'ko' ? '다음 챕터' : 'Next'}
                      </div>
                      <div style={{ fontSize: '0.9rem' }}>
                        Ch.{nextChapter.chapter_number} {nextChapter.title}
                      </div>
                    </div>
                    <span style={{ fontSize: '1.1rem' }}>&#8594;</span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Back button */}
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  to="/chapters"
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                  }}
                >
                  📋 {language === 'ko' ? '전체 챕터 목록' : 'All Chapters'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChapterDetail;
