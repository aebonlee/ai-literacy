import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/practice.css';
import type { ReactElement, ReactNode } from 'react';

interface NavItem {
  path: string;
  label: string;
  labelEn: string;
  icon: string;
  color: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: '/tools', label: 'AI 도구활용 홈', labelEn: 'AI Tools Home', icon: '🧪', color: '#3B82F6' },
  { path: '/tools/chatgpt', label: 'ChatGPT 활용', labelEn: 'ChatGPT', icon: '💬', color: '#10A37F' },
  { path: '/tools/claude', label: 'Claude 활용', labelEn: 'Claude', icon: '🛡️', color: '#CC784A' },
  { path: '/tools/gemini', label: 'Gemini 활용', labelEn: 'Gemini', icon: '💎', color: '#4285F4' },
];

interface ToolsLayoutProps {
  children: ReactNode;
}

const ToolsLayout = ({ children }: ToolsLayoutProps): ReactElement => {
  const location = useLocation();
  const { language } = useLanguage();

  return (
    <div className="tools-layout">
      <aside className="tools-sidebar">
        <h3>{language === 'ko' ? 'AI 도구활용' : 'AI Tools'}</h3>
        <nav className="tools-sidebar-nav">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`tools-sidebar-link${location.pathname === item.path ? ' active' : ''}`}
            >
              <span className="tools-sidebar-icon">{item.icon}</span>
              <span className="tools-sidebar-label">
                {language === 'ko' ? item.label : item.labelEn}
              </span>
              {location.pathname === item.path && (
                <span className="tools-sidebar-active-dot" style={{ background: item.color }} />
              )}
            </Link>
          ))}
        </nav>

        <div className="tools-sidebar-divider" />

        <div className="tools-sidebar-links">
          <Link to="/prompt/hub" className="tools-sidebar-cta">
            <i className="fas fa-pen-fancy" style={{ color: '#7C3AED' }} />
            <div>
              <strong>{language === 'ko' ? '프롬프트 실습' : 'Prompt Lab'}</strong>
              <span>{language === 'ko' ? '프롬프트 학습 & 테스트' : 'Learn & Test Prompts'}</span>
            </div>
          </Link>
        </div>
      </aside>
      <div className="tools-content">
        {children}
      </div>
    </div>
  );
};

export default ToolsLayout;
