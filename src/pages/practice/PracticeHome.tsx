import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

interface PracticeCard {
  title: string;
  description: string;
  path: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

const PRACTICE_CARDS: PracticeCard[] = [
  {
    title: 'ChatGPT',
    description: 'OpenAI의 대화형 AI 도구 활용법과 실습 가이드',
    path: '/practice/chatgpt',
    icon: 'fa-solid fa-comments',
    bgColor: 'rgba(16,163,127,0.1)',
    iconColor: '#10A37F',
  },
  {
    title: 'Claude',
    description: 'Anthropic의 안전한 AI 어시스턴트 활용법과 실습 가이드',
    path: '/practice/claude',
    icon: 'fa-solid fa-shield-halved',
    bgColor: 'rgba(204,120,74,0.1)',
    iconColor: '#CC784A',
  },
  {
    title: 'Gemini',
    description: 'Google의 멀티모달 AI 도구 활용법과 실습 가이드',
    path: '/practice/gemini',
    icon: 'fa-solid fa-diamond',
    bgColor: 'rgba(66,133,244,0.1)',
    iconColor: '#4285F4',
  },
  {
    title: '프롬프트 엔지니어링',
    description: '효과적인 프롬프트 작성법과 고급 기법 실습',
    path: '/practice/prompt',
    icon: 'fa-solid fa-terminal',
    bgColor: 'rgba(124,58,237,0.1)',
    iconColor: '#7C3AED',
  },
];

const PracticeHome = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? 'AI 실습' : 'AI Practice'}
        description="AI 도구 실습 - ChatGPT, Claude, Gemini, 프롬프트 엔지니어링 가이드"
        path="/practice"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <span>{language === 'ko' ? 'AI 실습' : 'AI Practice'}</span>
          </div>
          <div className="page-header-icon">
            <i className="fa-solid fa-flask"></i>
          </div>
          <h2 className="page-title">
            {language === 'ko' ? 'AI 실습' : 'AI Practice'}
          </h2>
          <p className="page-subtitle">
            {language === 'ko'
              ? '다양한 AI 도구를 직접 체험하고 활용법을 학습하세요'
              : 'Experience various AI tools and learn how to use them'}
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Practice Grid */}
      <section className="section">
        <div className="container">
          <div className="practice-grid">
            {PRACTICE_CARDS.map(card => (
              <Link
                key={card.path}
                to={card.path}
                className="practice-card"
              >
                <div
                  className="practice-card-icon"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <i
                    className={card.icon}
                    style={{ color: card.iconColor }}
                  ></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>

          {/* Guide */}
          <div
            className="info-box tip"
            style={{ maxWidth: '700px', margin: '2.5rem auto 0' }}
          >
            <div className="info-icon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div className="info-content">
              <b>{language === 'ko' ? '학습 팁' : 'Learning Tip'}</b>
              {language === 'ko'
                ? '각 AI 도구의 특징을 이해하고, 프롬프트 엔지니어링 기법을 활용하면 더 좋은 결과를 얻을 수 있습니다. 먼저 프롬프트 엔지니어링을 학습한 후 각 도구를 실습하는 것을 추천합니다.'
                : 'Understanding each AI tool\'s features and applying prompt engineering techniques will help you get better results. We recommend learning prompt engineering first before practicing with each tool.'}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeHome;
