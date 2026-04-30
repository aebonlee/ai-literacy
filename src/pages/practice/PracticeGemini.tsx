import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const PracticeGemini = (): ReactElement => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="Gemini 활용"
        description="Google Gemini 활용 가이드 - 멀티모달 기능, 사용법, 실습 과제"
        path="/tools/gemini"
      />

      <section className="practice-detail">
        <div className="container practice-content">
          {/* 소개 */}
          <h3>
            <span style={{ color: '#4285F4', marginRight: '0.5rem' }}>ℹ️</span>
            {language === 'ko' ? '소개' : 'Introduction'}
          </h3>
          <p>
            Gemini는 Google이 개발한 멀티모달 AI 모델로, 텍스트, 이미지, 코드, 오디오를
            동시에 이해하고 처리할 수 있습니다. Google 서비스(Gmail, Docs, Sheets 등)와의
            긴밀한 통합이 가장 큰 강점이며, 실시간 인터넷 검색 연동도 지원합니다.
          </p>

          <div className="info-box tip">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <b>접속 방법</b>
              <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4285F4' }}>
                gemini.google.com
              </a>에서 Google 계정으로 로그인하여 사용할 수 있습니다.
              Gemini Advanced는 Google One AI Premium 구독으로 이용 가능합니다.
            </div>
          </div>

          {/* 멀티모달 기능 */}
          <h3>
            <span style={{ color: '#4285F4', marginRight: '0.5rem' }}>📊</span>
            {language === 'ko' ? '멀티모달 기능' : 'Multimodal Features'}
          </h3>
          <p>
            Gemini의 가장 큰 차별점은 다양한 형태의 입력을 동시에 처리하는 멀티모달 능력입니다.
            텍스트뿐 아니라 이미지, 문서, 코드를 함께 분석할 수 있습니다.
          </p>
          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#EA4335' }}>🖼️</div>
              <div className="compare-title">이미지 분석</div>
              <div className="compare-desc">사진, 차트, 다이어그램의 내용을 이해하고 설명</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#4285F4' }}>🌍</div>
              <div className="compare-title">실시간 검색</div>
              <div className="compare-desc">최신 정보를 인터넷에서 검색하여 답변에 반영</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#34A853' }}>🔗</div>
              <div className="compare-title">Google 연동</div>
              <div className="compare-desc">Gmail, Docs, Drive 등 Google 서비스와 통합</div>
            </div>
            <div className="compare-card">
              <div className="compare-icon" style={{ color: '#FBBC04' }}>💻</div>
              <div className="compare-title">코드 실행</div>
              <div className="compare-desc">Python 코드를 직접 실행하고 결과 확인</div>
            </div>
          </div>

          {/* 사용법 */}
          <h3>
            <span style={{ color: '#3B82F6', marginRight: '0.5rem' }}>📚</span>
            {language === 'ko' ? '사용법' : 'How to Use'}
          </h3>
          <ol>
            <li><strong>Google 로그인</strong>: Google 계정으로 Gemini에 접속합니다.</li>
            <li><strong>프롬프트 입력</strong>: 텍스트, 이미지, 파일을 함께 입력할 수 있습니다.</li>
            <li><strong>이미지 분석</strong>: 카메라 아이콘을 클릭하여 이미지를 첨부하고 분석을 요청합니다.</li>
            <li><strong>확장 프로그램</strong>: Gmail, YouTube, Maps 등의 확장 프로그램을 활성화하여 활용합니다.</li>
            <li><strong>결과 공유</strong>: Google Docs로 내보내기, 링크 공유 등이 가능합니다.</li>
          </ol>

          {/* 팁 */}
          <h3>
            <span style={{ color: '#7C3AED', marginRight: '0.5rem' }}>✨</span>
            {language === 'ko' ? '효과적인 사용 팁' : 'Tips'}
          </h3>
          <div className="info-box example">
            <div className="info-icon">✅</div>
            <div className="info-content">
              <b>멀티모달 활용 예시</b>
              차트 이미지를 첨부하고 "이 차트에서 가장 중요한 트렌드 3가지를 분석하고,
              향후 전망을 예측해주세요"와 같이 요청하면 Gemini의 장점을 활용할 수 있습니다.
            </div>
          </div>
          <div className="info-box tip">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <b>Google Workspace 통합</b>
              "@Gmail 최근 받은 회의 관련 이메일을 요약해줘", "@YouTube AI 리터러시 관련
              동영상 추천해줘"와 같이 확장 프로그램을 활용해보세요.
            </div>
          </div>

          {/* 실습 과제 */}
          <h3>
            <span style={{ color: '#059669', marginRight: '0.5rem' }}>📋</span>
            {language === 'ko' ? '실습 과제' : 'Practice Tasks'}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 1: 이미지 분석</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                통계 차트나 인포그래픽 이미지를 Gemini에 첨부하고 내용 분석을 요청해보세요.
                분석 결과의 정확성을 직접 검증해보세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 2: 실시간 정보 활용</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                최신 뉴스나 트렌드에 대해 Gemini에게 질문하고, 실시간 검색 기능으로
                얻은 답변과 ChatGPT/Claude의 답변을 비교해보세요.
              </p>
            </div>
            <div className="section-card" style={{ borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>과제 3: Google 서비스 연동</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                Gemini의 확장 프로그램을 활성화하고, Google Docs에 보고서를 내보내거나
                YouTube 동영상 요약을 활용해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeGemini;
