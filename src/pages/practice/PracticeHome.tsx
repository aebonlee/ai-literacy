import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

interface ToolCard {
  title: string;
  description: string;
  path: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

const TOOL_CARDS: ToolCard[] = [
  {
    title: 'ChatGPT',
    description: 'OpenAI의 대화형 AI 도구 활용법과 실습 가이드',
    path: '/tools/chatgpt',
    icon: '💬',
    bgColor: 'rgba(16,163,127,0.1)',
    iconColor: '#10A37F',
  },
  {
    title: 'Claude',
    description: 'Anthropic의 안전한 AI 어시스턴트 활용법과 실습 가이드',
    path: '/tools/claude',
    icon: '🛡️',
    bgColor: 'rgba(204,120,74,0.1)',
    iconColor: '#CC784A',
  },
  {
    title: 'Gemini',
    description: 'Google의 멀티모달 AI 도구 활용법과 실습 가이드',
    path: '/tools/gemini',
    icon: '💎',
    bgColor: 'rgba(66,133,244,0.1)',
    iconColor: '#4285F4',
  },
];

const PracticeHome = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? 'AI 도구활용' : 'AI Tools'}
        description="AI 도구 활용 - ChatGPT, Claude, Gemini 가이드"
        path="/tools"
      />

      <div className="tools-home-header">
        <h2>{language === 'ko' ? 'AI 도구활용' : 'AI Tools'}</h2>
        <p>
          {language === 'ko'
            ? '다양한 AI 도구를 직접 체험하고 활용법을 학습하세요'
            : 'Experience various AI tools and learn how to use them'}
        </p>
      </div>

      <div className="tools-home-grid">
        {TOOL_CARDS.map(card => (
          <Link key={card.path} to={card.path} className="tools-home-card">
            <div
              className="tools-home-card-icon"
              style={{ backgroundColor: card.bgColor }}
            >
              <span style={{ color: card.iconColor }}>{card.icon}</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>

      <div className="tools-home-tip">
        <div className="info-box tip">
          <div className="info-icon">💡</div>
          <div className="info-content">
            <b>{language === 'ko' ? '학습 팁' : 'Learning Tip'}</b>
            {language === 'ko'
              ? ' 각 AI 도구의 특징을 이해하고, 프롬프트 엔지니어링 기법을 활용하면 더 좋은 결과를 얻을 수 있습니다. 먼저 프롬프트 엔지니어링을 학습한 후 각 도구를 실습하는 것을 추천합니다.'
              : ' Understanding each AI tool\'s features and applying prompt engineering techniques will help you get better results.'}
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeHome;
