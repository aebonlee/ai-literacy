import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const PracticeChatGPT = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="ChatGPT 실습"
        description="ChatGPT 활용 가이드 - 사용법, 주요 기능, 실습 과제"
        path="/practice/chatgpt"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <Link to="/practice">{language === 'ko' ? 'AI 실습' : 'Practice'}</Link>
            <span className="sep">/</span>
            <span>ChatGPT</span>
          </div>
          <div className="page-header-icon">
            <i className="fa-solid fa-comments"></i>
          </div>
          <h2 className="page-title">ChatGPT 실습 가이드</h2>
          <p className="page-subtitle">
            OpenAI의 대화형 AI를 효과적으로 활용하는 방법
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Content */}
      <section className="practice-detail">
        <div className="container practice-content">
          {/* 소개 */}
          <h3>
            <i className="fa-solid fa-circle-info" style={{ color: '#10A37F', marginRight: '0.5rem' }}></i>
            소개
          </h3>
          <p>
            ChatGPT는 OpenAI가 개발한 대규모 언어모델(LLM) 기반 대화형 AI입니다.
            GPT-4를 기반으로 텍스트 생성, 코드 작성, 데이터 분석, 창작, 번역 등
            다양한 작업을 수행할 수 있습니다.
          </p>

          <div className="info-box tip">
            <div className="info-icon"><i className="fa-solid fa-lightbulb"></i></div>
            <div className="info-content">
              <b>접속 방법</b>
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" style={{ color: '#10A37F' }}>
                chat.openai.com
              </a>에서 무료 계정을 생성하여 사용할 수 있습니다.
              GPT-4는 유료 플랜(Plus)에서 사용 가능합니다.
            </div>
          </div>

          {/* 주요 기능 */}
          <h3>
            <i className="fa-solid fa-star" style={{ color: '#F59E0B', marginRight: '0.5rem' }}></i>
            주요 기능
          </h3>
          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#3B82F6' }}>
                <i className="fa-solid fa-pen-fancy"></i>
              </div>
              <div className="compare-title">텍스트 생성</div>
              <div className="compare-desc">보고서, 이메일, 블로그 등 다양한 텍스트 작성</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#7C3AED' }}>
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="compare-title">코드 작성</div>
              <div className="compare-desc">Python, JavaScript 등 프로그래밍 코드 생성 및 디버깅</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#059669' }}>
                <i className="fa-solid fa-chart-bar"></i>
              </div>
              <div className="compare-title">데이터 분석</div>
              <div className="compare-desc">데이터 요약, 트렌드 분석, 인사이트 도출</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#DC2626' }}>
                <i className="fa-solid fa-language"></i>
              </div>
              <div className="compare-title">번역 / 요약</div>
              <div className="compare-desc">다국어 번역과 긴 문서 요약</div>
            </div>
          </div>

          {/* 사용법 */}
          <h3>
            <i className="fa-solid fa-book" style={{ color: '#3B82F6', marginRight: '0.5rem' }}></i>
            사용법
          </h3>
          <ol>
            <li><strong>계정 생성</strong>: OpenAI 웹사이트에서 이메일 또는 Google 계정으로 가입합니다.</li>
            <li><strong>대화 시작</strong>: 채팅 입력창에 질문이나 요청을 작성합니다.</li>
            <li><strong>역할 지정</strong>: "당신은 마케팅 전문가입니다"와 같이 역할을 부여하면 더 전문적인 답변을 얻을 수 있습니다.</li>
            <li><strong>대화 이어가기</strong>: 이전 대화 맥락을 기억하므로 추가 질문이나 수정 요청이 가능합니다.</li>
            <li><strong>결과 활용</strong>: 생성된 결과를 검토하고 필요에 따라 수정하여 활용합니다.</li>
          </ol>

          {/* 팁 */}
          <h3>
            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: '#7C3AED', marginRight: '0.5rem' }}></i>
            효과적인 사용 팁
          </h3>
          <div className="info-box example">
            <div className="info-icon"><i className="fa-solid fa-check"></i></div>
            <div className="info-content">
              <b>좋은 프롬프트 예시</b>
              "당신은 경영학과 교수입니다. AI 리터러시의 중요성에 대해 대학교 1학년 학생을 대상으로 500자 분량의 쉬운 설명을 작성해주세요. 예시를 2개 이상 포함하세요."
            </div>
          </div>
          <div className="info-box warning">
            <div className="info-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
            <div className="info-content">
              <b>주의사항</b>
              ChatGPT는 때때로 사실이 아닌 내용을 자신있게 말할 수 있습니다(환각, Hallucination).
              중요한 사실은 반드시 검증하세요.
            </div>
          </div>

          {/* 실습 과제 */}
          <h3>
            <i className="fa-solid fa-clipboard-check" style={{ color: '#059669', marginRight: '0.5rem' }}></i>
            실습 과제
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 1: 자기소개서 작성</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                ChatGPT에게 역할을 부여하고 취업용 자기소개서 초안을 작성해보세요.
                자신의 전공과 강점을 포함한 프롬프트를 설계하세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 2: 데이터 분석 요청</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                간단한 매출 데이터를 ChatGPT에게 전달하고 트렌드 분석과 시각화 코드를 요청해보세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 3: 비교 분석</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                ChatGPT에게 두 가지 주제(예: 클라우드 vs 온프레미스)를 비교하는 표를 만들어달라고 요청하세요.
                출력 형식을 구체적으로 지정해보세요.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color, #e5e7eb)' }}>
            <Link to="/practice" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-arrow-left"></i> AI 실습 목록
            </Link>
            <Link to="/practice/claude" style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Claude 실습 <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeChatGPT;
