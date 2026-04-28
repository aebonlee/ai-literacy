import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const PracticePrompt = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '프롬프트 엔지니어링 실습' : 'Prompt Engineering Practice'}
        description="프롬프트 엔지니어링 가이드 - 패턴, 실전 예시, 연습 문제"
        path="/practice/prompt"
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">{language === 'ko' ? '홈' : 'Home'}</Link>
            <span className="sep">/</span>
            <Link to="/practice">{language === 'ko' ? 'AI 실습' : 'Practice'}</Link>
            <span className="sep">/</span>
            <span>{language === 'ko' ? '프롬프트 엔지니어링' : 'Prompt Engineering'}</span>
          </div>
          <div className="page-header-icon">
            💻
          </div>
          <h2 className="page-title">
            {language === 'ko' ? '프롬프트 엔지니어링 실습' : 'Prompt Engineering Practice'}
          </h2>
          <p className="page-subtitle">
            {language === 'ko'
              ? '효과적인 AI 활용을 위한 프롬프트 작성법'
              : 'How to write effective prompts for AI'}
          </p>
          <div className="page-header-line"></div>
        </div>
      </section>

      {/* Content */}
      <section className="practice-detail">
        <div className="container practice-content">
          {/* 프롬프트 패턴 */}
          <h3>
            <span style={{ color: '#7C3AED', marginRight: '0.5rem' }}>🧩</span>
            프롬프트 패턴
          </h3>
          <p>
            효과적인 프롬프트는 일정한 패턴을 따릅니다. 아래 핵심 패턴을 이해하면
            어떤 AI 도구에서도 더 좋은 결과를 얻을 수 있습니다.
          </p>

          {/* Pattern Flow */}
          <div className="flow-diagram">
            <div className="flow-step">
              <span className="flow-icon">👔</span>
              <span className="flow-label">역할 부여</span>
              <span className="flow-desc">전문가 역할</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="flow-icon">📄</span>
              <span className="flow-label">맥락 제공</span>
              <span className="flow-desc">배경 정보</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="flow-icon">🎯</span>
              <span className="flow-label">목표 명시</span>
              <span className="flow-desc">구체적 요청</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="flow-icon">📋</span>
              <span className="flow-label">형식 지정</span>
              <span className="flow-desc">출력 포맷</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="flow-icon">⚙️</span>
              <span className="flow-label">제약 조건</span>
              <span className="flow-desc">범위/길이</span>
            </div>
          </div>

          {/* 기법 소개 */}
          <div className="compare-grid" style={{ marginTop: '1.5rem' }}>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#3B82F6' }}>
                🔗
              </div>
              <div className="compare-title">Chain-of-Thought</div>
              <div className="compare-desc">"단계별로 생각해보세요"로 추론 과정 유도</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#059669' }}>
                📝
              </div>
              <div className="compare-title">Few-shot</div>
              <div className="compare-desc">예시를 제공하여 원하는 패턴을 학습시키기</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#DC2626' }}>
                🚫
              </div>
              <div className="compare-title">Negative Prompting</div>
              <div className="compare-desc">"~하지 마세요"로 원치 않는 결과 방지</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#7C3AED' }}>
                🔀
              </div>
              <div className="compare-title">Self-consistency</div>
              <div className="compare-desc">여러 번 생성 후 일관된 답변 선택</div>
            </div>
          </div>

          {/* 실전 예시 */}
          <h3>
            <span style={{ color: '#059669', marginRight: '0.5rem' }}>✏️</span>
            실전 예시
          </h3>

          <div className="info-box warning">
            <div className="info-icon">⚠️</div>
            <div className="info-content">
              <b>나쁜 프롬프트</b>
              "AI에 대해 알려줘"<br />
              - 너무 광범위하고, 역할/형식/길이 지정 없음
            </div>
          </div>

          <div className="info-box example">
            <div className="info-icon">✅</div>
            <div className="info-content">
              <b>좋은 프롬프트 (역할 + 맥락 + 형식)</b>
              "당신은 대학교 컴퓨터과학 교수입니다. AI 리터러시 수업을 듣는 비전공 1학년 학생에게 인공지능의 핵심 개념 5가지를 설명해주세요. 각 개념은 (1) 한 줄 정의, (2) 일상생활 예시로 구성하고, 전문 용어는 최소화해주세요. 표 형태로 작성해주세요."
            </div>
          </div>

          <div className="info-box tip">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <b>Chain-of-Thought 예시</b>
              "다음 문제를 풀어주세요. 답을 바로 말하지 말고, 단계별로 논리적 추론 과정을 보여주세요:<br />
              한 회사의 매출이 전년 대비 15% 증가했고, 비용은 10% 감소했습니다. 순이익률이 어떻게 변하는지 분석하세요."
            </div>
          </div>

          <div className="info-box example">
            <div className="info-icon">✅</div>
            <div className="info-content">
              <b>Few-shot 예시</b>
              "다음 패턴을 참고하여 제품 설명을 작성해주세요:<br /><br />
              예시 1: [제품: 무선 이어폰] → '하루 종일 끊김 없는 사운드. 12시간 배터리와 능동 소음 차단으로 나만의 음악 세계에 빠져보세요.'<br /><br />
              예시 2: [제품: 스마트워치] → '손목 위의 건강 파트너. 24시간 심박수 모니터링과 50가지 운동 모드로 더 건강한 하루를 시작하세요.'<br /><br />
              이제 [제품: AI 스피커]에 대한 설명을 같은 형식으로 작성해주세요."
            </div>
          </div>

          {/* 연습 문제 */}
          <h3>
            <span style={{ color: '#DC2626', marginRight: '0.5rem' }}>📋</span>
            연습 문제
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>연습 1: 역할 + 형식 조합</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                아래 요소를 모두 포함하는 프롬프트를 작성하세요:<br />
                - 역할: 마케팅 컨설턴트<br />
                - 주제: AI 도구를 활용한 소규모 사업 마케팅 전략<br />
                - 형식: 3단계 실행 계획서 (표 형태)<br />
                - 제약: 500자 이내, 초보자 대상
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>연습 2: 나쁜 프롬프트 개선</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                다음 프롬프트를 개선하세요:<br />
                원본: "파이썬 코드 짜줘"<br />
                힌트: 목적, 입출력, 사용 라이브러리, 코드 스타일 등을 구체적으로 지정하세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>연습 3: Chain-of-Thought 적용</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                AI에게 복잡한 의사결정 문제를 제시하고, Chain-of-Thought 기법을 적용하여
                단계별 추론을 유도하는 프롬프트를 작성하세요. 주제: "대학 졸업 후 취업 vs 대학원 진학 비교 분석"
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>연습 4: 3개 AI 도구 비교</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                동일한 프롬프트를 ChatGPT, Claude, Gemini에 각각 입력하고 결과를 비교하세요.
                어떤 도구가 어떤 유형의 작업에 더 적합한지 분석 보고서를 작성하세요.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color, #e5e7eb)' }}>
            <Link to="/practice/gemini" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
              ← Gemini 실습
            </Link>
            <Link to="/practice" style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              AI 실습 목록 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticePrompt;
