import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const PracticeClaude = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="Claude 실습"
        description="Claude AI 활용 가이드 - Constitutional AI, 사용법, 실습 과제"
        path="/practice/claude"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <Link to="/practice">{language === 'ko' ? 'AI 실습' : 'Practice'}</Link>
            <span className="sep">/</span>
            <span>Claude</span>
          </div>
          <div className="page-header-icon">
            🛡️
          </div>
          <h2 className="page-title">Claude 실습 가이드</h2>
          <p className="page-subtitle">
            Anthropic의 안전하고 유용한 AI 어시스턴트를 활용하는 방법
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Content */}
      <section className="practice-detail">
        <div className="container practice-content">
          {/* 소개 */}
          <h3>
            <span style={{ color: '#CC784A', marginRight: '0.5rem' }}>ℹ️</span>
            소개
          </h3>
          <p>
            Claude는 Anthropic이 개발한 AI 어시스턴트로, 안전성과 유용성을 동시에 추구하는
            것이 특징입니다. Constitutional AI(헌법적 AI) 기법을 적용하여 더 안전하고
            정직한 응답을 제공하며, 매우 긴 문서의 처리와 정확한 분석에 강점이 있습니다.
          </p>

          <div className="info-box tip">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <b>접속 방법</b>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#CC784A' }}>
                claude.ai
              </a>에서 무료 계정을 생성하여 사용할 수 있습니다.
              Claude Pro 구독 시 더 많은 사용량과 최신 모델을 이용할 수 있습니다.
            </div>
          </div>

          {/* Constitutional AI 특징 */}
          <h3>
            <span style={{ color: '#CC784A', marginRight: '0.5rem' }}>🛡️</span>
            Constitutional AI 특징
          </h3>
          <p>
            Claude는 Constitutional AI라는 독자적인 학습 방법론을 사용합니다.
            AI가 스스로 윤리 원칙(헌법)에 따라 자신의 응답을 평가하고 수정하는 방식으로,
            유해한 출력을 줄이면서도 유용성을 유지합니다.
          </p>
          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#059669' }}>
                ✅
              </div>
              <div className="compare-title">정직함</div>
              <div className="compare-desc">모르는 것은 모른다고 솔직하게 답변</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#3B82F6' }}>
                📄
              </div>
              <div className="compare-title">긴 문서 처리</div>
              <div className="compare-desc">최대 200K 토큰의 대용량 컨텍스트 처리</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#7C3AED' }}>
                🔍
              </div>
              <div className="compare-title">정밀 분석</div>
              <div className="compare-desc">논문, 계약서 등 복잡한 문서 분석에 강점</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#DC2626' }}>
                🚫
              </div>
              <div className="compare-title">안전 거부</div>
              <div className="compare-desc">유해하거나 위험한 요청을 정중하게 거절</div>
            </div>
          </div>

          {/* 사용법 */}
          <h3>
            <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>📚</span>
            사용법
          </h3>
          <ol>
            <li><strong>계정 생성</strong>: claude.ai에서 이메일로 가입합니다.</li>
            <li><strong>새 대화 시작</strong>: "New conversation"을 클릭하여 대화를 시작합니다.</li>
            <li><strong>파일 첨부</strong>: PDF, 텍스트 파일 등을 첨부하여 분석을 요청할 수 있습니다.</li>
            <li><strong>구조화된 요청</strong>: XML 태그를 활용하면 더 정확한 결과를 얻을 수 있습니다.</li>
            <li><strong>Artifacts 활용</strong>: 코드, 차트, 문서 등을 별도 패널에서 확인할 수 있습니다.</li>
          </ol>

          {/* 팁 */}
          <h3>
            <span style={{ color: '#7C3AED', marginRight: '0.5rem' }}>✨</span>
            효과적인 사용 팁
          </h3>
          <div className="info-box example">
            <div className="info-icon">✅</div>
            <div className="info-content">
              <b>XML 태그 활용 예시</b>
              {'<document>여기에 분석할 텍스트</document>'}<br />
              {'<instructions>위 문서를 분석하여 핵심 내용 3가지를 요약하고, 각각에 대한 의견을 제시해주세요.</instructions>'}
            </div>
          </div>
          <div className="info-box tip">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <b>Claude의 강점 활용</b>
              긴 문서를 통째로 첨부하여 분석, 비교, 요약을 요청하면 Claude의 장점을 극대화할 수 있습니다.
              논문 리뷰, 계약서 검토, 코드 리뷰 등에 활용해보세요.
            </div>
          </div>

          {/* 실습 과제 */}
          <h3>
            <span style={{ color: '#059669', marginRight: '0.5rem' }}>📋</span>
            실습 과제
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 1: 논문 요약</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                관심 있는 학술 논문(PDF)을 Claude에 첨부하고, 핵심 내용 요약,
                방법론 분석, 한계점 정리를 요청해보세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 2: 안전성 테스트</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                ChatGPT와 Claude에게 동일한 민감한 주제(예: 건강 조언)에 대해 질문하고,
                응답의 안전성과 정확성을 비교 분석해보세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 3: 구조화된 프롬프트</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                XML 태그를 활용하여 Claude에게 비즈니스 제안서 작성을 요청해보세요.
                역할, 목표, 제약조건, 출력 형식을 태그로 구분하여 작성하세요.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color, #e5e7eb)' }}>
            <Link to="/practice/chatgpt" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← ChatGPT 실습
            </Link>
            <Link to="/practice/gemini" style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              Gemini 실습 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeClaude;
