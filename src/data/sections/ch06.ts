/**
 * Chapter 6: AI 활용 실습
 * AI 도구 준비, 텍스트/이미지/코드 생성, 데이터 분석, 번역, 문서 요약, 협업 워크플로우
 */
export const CH06_SECTIONS = [
  {
    id: 601,
    chapter_id: 6,
    title: '6.1 AI 활용 준비',
    sort_order: 1,
    content: `
<h2>AI 활용을 위한 준비</h2>
<p>AI 도구를 효과적으로 활용하기 위해서는 먼저 주요 AI 서비스에 대한 이해와 적절한 환경 설정이 필요합니다. 이 절에서는 대표적인 AI 도구의 특징과 계정 설정 방법을 알아봅니다.</p>

<h3>주요 AI 서비스 비교</h3>
<table>
<thead>
<tr><th>서비스</th><th>개발사</th><th>주요 기능</th><th>무료/유료</th><th>특장점</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT</td><td>OpenAI</td><td>대화, 코드, 이미지, 분석</td><td>무료(GPT-3.5) / 유료(GPT-4)</td><td>가장 대중적, 풍부한 플러그인 생태계</td></tr>
<tr><td>Claude</td><td>Anthropic</td><td>대화, 문서 분석, 코드</td><td>무료 / 유료(Pro)</td><td>긴 문서 처리 능력, 안전성 강조</td></tr>
<tr><td>Gemini</td><td>Google</td><td>대화, 검색 연동, 멀티모달</td><td>무료 / 유료(Advanced)</td><td>Google 서비스 통합, 실시간 검색</td></tr>
<tr><td>Copilot</td><td>Microsoft</td><td>코드, 문서, Office 통합</td><td>무료 / 유료(Pro)</td><td>VS Code, Office 365 통합</td></tr>
<tr><td>DALL-E 3</td><td>OpenAI</td><td>이미지 생성</td><td>ChatGPT Plus에 포함</td><td>자연어 프롬프트로 고품질 이미지 생성</td></tr>
<tr><td>Midjourney</td><td>Midjourney</td><td>이미지 생성</td><td>유료(구독)</td><td>예술적 품질이 뛰어난 이미지 생성</td></tr>
</tbody>
</table>

<h3>AI 도구 선택 가이드</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 목적 파악</h4>
<p>무엇을 하고 싶은가? (글쓰기, 코딩, 이미지, 분석)</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 예산 확인</h4>
<p>무료로 충분한가? 유료 플랜이 필요한가?</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 환경 확인</h4>
<p>웹 기반? 데스크톱 앱? 모바일?</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 시작</h4>
<p>계정 생성 후 간단한 테스트부터 시작</p>
</div>
</div>

<h3>계정 설정 시 주의사항</h3>
<div class="info-box warning">
<strong>보안 및 개인정보 주의사항</strong><br/>
<ul>
<li><strong>비밀번호 관리</strong>: AI 서비스마다 고유한 강력한 비밀번호를 사용하세요.</li>
<li><strong>개인정보 입력 금지</strong>: 주민등록번호, 카드 번호, 비밀번호 등 민감한 개인정보를 AI에 입력하지 마세요.</li>
<li><strong>기업 기밀</strong>: 회사 내부 문서, 미공개 정보를 AI에 업로드하지 마세요.</li>
<li><strong>대화 기록</strong>: AI 서비스가 대화 내용을 학습에 사용할 수 있으므로, 설정에서 학습 비허용 옵션을 확인하세요.</li>
<li><strong>2단계 인증</strong>: 가능하다면 2FA(Two-Factor Authentication)를 활성화하세요.</li>
</ul>
</div>

<div class="info-box">
<strong>실습 환경 추천</strong><br/>
본 교재의 실습은 ChatGPT(무료 버전)와 Claude(무료 버전)를 기본으로 진행합니다. 이미지 생성 실습은 Bing Image Creator(무료)를 사용합니다. 별도의 유료 구독 없이 모든 실습을 따라할 수 있습니다.
</div>
    `
  },
  {
    id: 602,
    chapter_id: 6,
    title: '6.2 텍스트 생성 실습',
    sort_order: 2,
    content: `
<h2>AI를 활용한 텍스트 생성</h2>
<p>생성형 AI의 가장 기본적이면서도 강력한 기능은 텍스트 생성입니다. 에세이, 보고서, 요약문, 이메일 등 다양한 유형의 텍스트를 AI의 도움으로 효율적으로 작성할 수 있습니다.</p>

<h3>실습 1: 에세이 작성</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"대학교 교양 과목 보고서를 작성합니다. 주제는 '인공지능이 교육에 미치는 영향'이며, 다음 구조로 작성해 주세요:<br/>
1. 서론 (200자): 주제 소개 및 논의의 필요성<br/>
2. 본론 1 (300자): AI 기반 개인 맞춤형 학습의 장점<br/>
3. 본론 2 (300자): AI 도입의 우려 사항 및 한계<br/>
4. 결론 (200자): 균형 잡힌 시각과 제언<br/>
학술적이지만 읽기 쉬운 문체로 작성하고, 구체적인 사례를 2개 이상 포함해 주세요."
</div>

<h3>실습 2: 보고서 요약</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 텍스트를 아래 형식으로 요약해 주세요:<br/>
- 한 줄 요약 (30자 이내)<br/>
- 핵심 포인트 3가지 (각 50자 이내)<br/>
- 시사점 (100자 이내)<br/>
원문의 핵심 논지를 왜곡하지 않도록 주의해 주세요."
</div>

<h3>텍스트 생성 유형별 프롬프트 전략</h3>
<table>
<thead>
<tr><th>유형</th><th>핵심 전략</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>학술 글쓰기</td><td>구조 명시, 학술적 톤, 인용 형식 지정</td><td>AI 생성 내용의 사실 확인 필수</td></tr>
<tr><td>비즈니스 문서</td><td>대상 독자, 목적, 톤 명확히 지정</td><td>기밀 정보 입력 금지</td></tr>
<tr><td>창작 글쓰기</td><td>장르, 분위기, 캐릭터 설정 제공</td><td>저작권과 독창성 검토 필요</td></tr>
<tr><td>SNS 콘텐츠</td><td>플랫폼 특성, 해시태그, 글자 수 제한 명시</td><td>팩트 체크 후 게시</td></tr>
</tbody>
</table>

<h3>실습 3: 이메일 작성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>공식 이메일</h4>
<p>"당신은 비즈니스 커뮤니케이션 전문가입니다. 거래처에 납품 일정 변경을 알리는 공식 이메일을 작성해 주세요. 기존 일정은 4월 15일이었으나, 원자재 수급 문제로 4월 25일로 변경됩니다. 정중하고 전문적인 톤으로 작성해 주세요."</p>
</div>
<div class="compare-item">
<h4>감사 이메일</h4>
<p>"인턴십을 마치고 멘토에게 보내는 감사 이메일을 작성해 주세요. 3개월간 마케팅 팀에서 인턴으로 근무했으며, 멘토로부터 데이터 분석과 고객 리서치를 배웠습니다. 진심 어린 감사와 함께 향후 연락 유지 의사를 표현해 주세요."</p>
</div>
</div>

<div class="info-box warning">
<strong>텍스트 생성 시 반드시 확인할 사항</strong><br/>
<ul>
<li>AI가 생성한 사실 관계(날짜, 수치, 인물, 사건)는 반드시 검증하세요.</li>
<li>학술 과제에 AI를 활용할 경우, 학교/교수의 AI 활용 정책을 먼저 확인하세요.</li>
<li>AI 생성 텍스트를 그대로 제출하지 말고, 자신의 관점으로 편집하고 보완하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 603,
    chapter_id: 6,
    title: '6.3 이미지 생성 실습',
    sort_order: 3,
    content: `
<h2>AI를 활용한 이미지 생성</h2>
<p>AI 이미지 생성 기술은 텍스트 프롬프트만으로 고품질의 이미지를 만들어낼 수 있습니다. 디자인 전문 지식이 없어도 프레젠테이션, 블로그, SNS 등에 활용할 수 있는 이미지를 생성할 수 있습니다.</p>

<h3>주요 이미지 생성 AI 도구</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>접근 방법</th><th>적합한 용도</th></tr>
</thead>
<tbody>
<tr><td>DALL-E 3</td><td>자연어 이해력 우수, ChatGPT 연동</td><td>ChatGPT Plus 구독</td><td>일러스트, 개념 이미지, 로고 초안</td></tr>
<tr><td>Midjourney</td><td>예술적 품질 최고 수준</td><td>Discord 기반, 유료 구독</td><td>예술 작품, 컨셉 아트, 광고 비주얼</td></tr>
<tr><td>Stable Diffusion</td><td>오픈소스, 로컬 실행 가능</td><td>로컬 설치 또는 웹 서비스</td><td>커스터마이징, 대량 생성, 연구</td></tr>
<tr><td>Bing Image Creator</td><td>무료, DALL-E 3 기반</td><td>Microsoft 계정</td><td>간단한 이미지, 프레젠테이션 소재</td></tr>
</tbody>
</table>

<h3>이미지 프롬프트 작성법</h3>
<div class="info-box">
<strong>이미지 프롬프트 구조</strong><br/>
<ol>
<li><strong>주제(Subject)</strong>: 무엇을 그릴 것인가? → "강아지가 공원에서 뛰어노는 장면"</li>
<li><strong>스타일(Style)</strong>: 어떤 화풍인가? → "수채화 스타일", "미니멀리스트", "사실적 사진"</li>
<li><strong>분위기(Mood)</strong>: 어떤 느낌인가? → "밝고 따뜻한", "신비로운", "전문적인"</li>
<li><strong>구도(Composition)</strong>: 어떤 각도/배치인가? → "클로즈업", "조감도", "대칭 구도"</li>
<li><strong>색감(Color)</strong>: 어떤 색조인가? → "파스텔 톤", "선명한 원색", "모노크롬"</li>
</ol>
</div>

<h3>실습: 프레젠테이션용 이미지 생성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기본 프롬프트</h4>
<p>"AI 기술 발전을 보여주는 이미지"</p>
<p>결과: 모호하고 일반적인 이미지가 생성될 가능성이 높습니다.</p>
</div>
<div class="compare-item">
<h4>개선된 프롬프트</h4>
<p>"미래 도시에서 인간과 로봇이 함께 협업하는 사무실 장면. 깔끔한 미니멀리스트 일러스트 스타일. 파란색과 흰색 중심 컬러. 16:9 비율. 프레젠테이션 배경으로 적합하게."</p>
<p>결과: 구체적이고 용도에 맞는 이미지가 생성됩니다.</p>
</div>
</div>

<h3>이미지 생성 시 주의사항</h3>
<div class="info-box warning">
<strong>법적·윤리적 고려사항</strong><br/>
<ul>
<li><strong>초상권</strong>: 실존 인물의 얼굴을 생성하는 것은 법적 문제를 야기할 수 있습니다.</li>
<li><strong>저작권</strong>: AI 생성 이미지의 저작권 귀속은 아직 법적으로 명확하지 않습니다. 상업적 사용 전 서비스 약관을 확인하세요.</li>
<li><strong>편향</strong>: AI 이미지 생성 모델은 학습 데이터의 편향을 반영할 수 있으므로, 다양성을 고려한 프롬프트를 작성하세요.</li>
<li><strong>딥페이크 악용 금지</strong>: 타인을 사칭하거나 허위 정보를 유포하기 위한 이미지 생성은 엄격히 금지됩니다.</li>
</ul>
</div>
    `
  },
  {
    id: 604,
    chapter_id: 6,
    title: '6.4 코드 작성 실습',
    sort_order: 4,
    content: `
<h2>AI를 활용한 코드 작성</h2>
<p>AI는 프로그래밍 보조 도구로서 탁월한 능력을 발휘합니다. 코드 작성, 디버깅, 리팩토링, 설명 등 개발 과정의 여러 단계에서 AI를 활용할 수 있습니다. 프로그래밍 경험이 없는 초보자도 AI를 통해 간단한 프로그램을 만들 수 있습니다.</p>

<h3>AI 코딩 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>사용 환경</th><th>주요 기능</th></tr>
</thead>
<tbody>
<tr><td>GitHub Copilot</td><td>코드 에디터 통합형</td><td>VS Code, JetBrains</td><td>실시간 코드 자동 완성, 함수 생성</td></tr>
<tr><td>ChatGPT</td><td>대화형 코드 생성</td><td>웹 브라우저</td><td>코드 작성, 설명, 디버깅, 리팩토링</td></tr>
<tr><td>Claude</td><td>긴 코드 분석에 강점</td><td>웹 브라우저</td><td>대규모 코드 분석, 문서화, 리뷰</td></tr>
<tr><td>Cursor</td><td>AI 네이티브 코드 에디터</td><td>데스크톱 앱</td><td>AI 기반 코드 편집, 채팅, 자동 완성</td></tr>
</tbody>
</table>

<h3>실습 1: 간단한 프로그램 작성</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"Python으로 간단한 할 일 목록(Todo List) 프로그램을 작성해 줘. 다음 기능을 포함해야 합니다:<br/>
1. 할 일 추가<br/>
2. 할 일 목록 보기<br/>
3. 할 일 완료 표시<br/>
4. 할 일 삭제<br/>
5. 프로그램 종료<br/>
메뉴 방식으로 동작하고, 각 함수에 한글 주석을 달아 주세요. 초보자가 이해할 수 있도록 간단한 코드로 작성해 주세요."
</div>

<h3>실습 2: 코드 디버깅</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 Python 코드에 오류가 있습니다. 오류를 찾아서 설명하고, 수정된 코드를 제공해 주세요. 왜 이 오류가 발생하는지 초보자도 이해할 수 있도록 설명해 주세요."<br/>
<p>이처럼 오류가 있는 코드를 AI에 제공하면, AI가 문제를 진단하고 해결책을 제시합니다.</p>
</div>

<h3>AI 코딩 활용 단계</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 요구사항 전달</h4>
<p>원하는 기능을 자연어로 설명</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 코드 생성</h4>
<p>AI가 코드를 생성하고 설명 제공</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 검토 및 테스트</h4>
<p>생성된 코드를 실행하고 검증</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 수정 요청</h4>
<p>문제점이나 추가 요구사항 피드백</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 코딩 시 주의사항</strong><br/>
<ul>
<li>AI가 생성한 코드를 반드시 직접 실행하여 테스트하세요. 문법 오류나 논리적 오류가 있을 수 있습니다.</li>
<li>보안에 민감한 코드(인증, 결제 등)는 AI 코드를 그대로 사용하지 말고 보안 전문가의 검토를 받으세요.</li>
<li>AI 코드를 복사·붙여넣기만 하지 말고, 각 줄이 무엇을 하는지 이해하려고 노력하세요.</li>
<li>라이선스 문제를 확인하세요. AI가 생성한 코드가 기존 오픈소스 코드와 유사할 수 있습니다.</li>
</ul>
</div>
    `
  },
  {
    id: 605,
    chapter_id: 6,
    title: '6.5 데이터 분석 실습',
    sort_order: 5,
    content: `
<h2>AI를 활용한 데이터 분석</h2>
<p>AI는 데이터 분석의 문턱을 크게 낮추었습니다. 전문적인 통계 지식이나 프로그래밍 기술 없이도, 자연어로 데이터 분석을 요청하고 인사이트를 도출할 수 있습니다.</p>

<h3>AI 데이터 분석 활용 영역</h3>
<table>
<thead>
<tr><th>분석 유형</th><th>설명</th><th>AI 활용 방법</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>기술 통계</td><td>데이터의 기본 특성 파악</td><td>"이 데이터의 평균, 중앙값, 표준편차를 구해 줘"</td><td>매출 데이터 기본 통계</td></tr>
<tr><td>추세 분석</td><td>시간에 따른 변화 패턴 파악</td><td>"월별 매출 추이를 분석하고 트렌드를 설명해 줘"</td><td>연간 매출 성장률</td></tr>
<tr><td>비교 분석</td><td>그룹 간 차이 비교</td><td>"A 제품과 B 제품의 판매 성과를 비교 분석해 줘"</td><td>제품별 시장 점유율</td></tr>
<tr><td>상관 분석</td><td>변수 간 관계 파악</td><td>"광고 비용과 매출 사이의 관계를 분석해 줘"</td><td>마케팅 ROI 분석</td></tr>
<tr><td>예측 분석</td><td>미래 값 예측</td><td>"이 추세로 보면 다음 분기 매출은 얼마일까?"</td><td>수요 예측</td></tr>
</tbody>
</table>

<h3>실습: 설문조사 결과 분석</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음은 대학생 100명의 AI 활용 현황 설문 결과입니다. 이 데이터를 분석하여:<br/>
1. 전체 응답의 기술 통계 요약<br/>
2. 성별/학년별 AI 활용 빈도 차이 분석<br/>
3. 가장 많이 사용하는 AI 도구 TOP 5<br/>
4. AI 만족도에 영향을 미치는 요인 분석<br/>
5. 분석 결과 시각화 제안 (어떤 차트를 사용하면 좋을지)<br/>
을 수행해 주세요. 결과를 비전공자가 이해할 수 있는 수준으로 설명해 주세요."
</div>

<h3>ChatGPT 데이터 분석 기능 활용</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>파일 업로드 분석</h4>
<p>ChatGPT Plus의 Code Interpreter(Advanced Data Analysis) 기능을 사용하면 CSV, Excel 파일을 직접 업로드하여 분석할 수 있습니다. AI가 Python 코드를 실행하여 통계 분석과 시각화를 자동으로 수행합니다.</p>
</div>
<div class="compare-item">
<h4>텍스트 기반 분석</h4>
<p>데이터를 텍스트로 붙여넣어 분석을 요청할 수도 있습니다. 소규모 데이터셋이나 요약된 통계 자료를 분석할 때 유용합니다. 무료 버전에서도 활용 가능합니다.</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 데이터 분석 시 주의사항</strong><br/>
<ul>
<li><strong>데이터 보안</strong>: 개인정보나 기업 기밀 데이터를 외부 AI 서비스에 업로드하지 마세요.</li>
<li><strong>결과 검증</strong>: AI의 분석 결과를 맹신하지 말고, 상식과 도메인 지식으로 검증하세요.</li>
<li><strong>맥락 제공</strong>: 데이터의 출처, 수집 방법, 변수의 의미 등 충분한 맥락을 제공하세요.</li>
<li><strong>한계 인식</strong>: AI는 상관관계를 인과관계로 잘못 해석할 수 있습니다. 통계적 해석에 주의하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 606,
    chapter_id: 6,
    title: '6.6 번역과 언어 학습',
    sort_order: 6,
    content: `
<h2>AI를 활용한 번역과 언어 학습</h2>
<p>AI 번역 기술은 최근 몇 년간 비약적으로 발전하여, 대부분의 일상적인 번역 작업에서 높은 품질을 제공합니다. 또한 AI는 개인 맞춤형 언어 학습 도우미로서도 활용될 수 있습니다.</p>

<h3>AI 번역 도구 비교</h3>
<table>
<thead>
<tr><th>도구</th><th>특징</th><th>장점</th><th>한계</th></tr>
</thead>
<tbody>
<tr><td>Google 번역</td><td>200+ 언어 지원, 실시간 번역</td><td>빠르고 접근성 좋음, 카메라 번역</td><td>문맥 파악 부족, 전문 용어 오역 가능</td></tr>
<tr><td>DeepL</td><td>유럽어 중심 고품질 번역</td><td>자연스러운 번역, 전문 문서에 강점</td><td>지원 언어 제한적</td></tr>
<tr><td>ChatGPT/Claude</td><td>대화형, 맥락 기반 번역</td><td>맥락 고려, 톤/스타일 조절 가능</td><td>속도 느림, 긴 문서 분할 필요</td></tr>
<tr><td>파파고</td><td>한국어 특화 번역</td><td>한국어 자연스러움 우수, 구어체 강점</td><td>전문 분야 정확도 편차</td></tr>
</tbody>
</table>

<h3>실습 1: 맥락을 고려한 번역</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 한국어 비즈니스 이메일을 영어로 번역해 주세요. 번역 시 다음 조건을 지켜 주세요:<br/>
- 공식적인 비즈니스 영어 톤 유지<br/>
- 한국식 표현(예: '수고하세요', '잘 부탁드립니다')을 영어권 비즈니스 관행에 맞게 자연스럽게 변환<br/>
- 존칭과 격식체를 적절한 영어 표현으로 변환<br/>
- 번역 후 주요 의역 부분에 대한 설명을 별도로 제공"
</div>

<h3>실습 2: AI 언어 학습 활용</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>회화 연습</h4>
<p>"당신은 일본어 원어민 친구입니다. 나와 일본어로 대화해 주세요. 카페에서 만난 상황입니다. 내가 문법 실수를 하면 올바른 표현을 알려주되, 대화 흐름은 끊지 마세요. N3 수준의 어휘를 사용해 주세요."</p>
</div>
<div class="compare-item">
<h4>문법 학습</h4>
<p>"영어 현재완료(Present Perfect)를 한국어로 설명해 줘. 한국어에는 없는 시제 개념이므로, 한국인 학습자가 자주 틀리는 사례 5가지를 포함하고, 각각 올바른 표현과 함께 비교 설명해 줘."</p>
</div>
</div>

<h3>AI 번역의 효과적 활용 전략</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1차: 초벌 번역</h4>
<p>Google 번역이나 DeepL로 빠르게 번역</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2차: 맥락 보정</h4>
<p>ChatGPT/Claude로 맥락, 톤, 스타일 조정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3차: 전문가 검토</h4>
<p>중요 문서는 전문 번역가/원어민 최종 검수</p>
</div>
</div>

<div class="info-box warning">
<strong>AI 번역 시 주의사항</strong><br/>
<ul>
<li>법률, 의료, 기술 문서의 AI 번역은 반드시 전문가 검수를 거치세요.</li>
<li>문화적 뉘앙스, 관용구, 유머 등은 AI가 정확히 전달하기 어려울 수 있습니다.</li>
<li>AI 번역을 언어 학습의 '정답'으로 맹신하지 마세요. 참고 자료로 활용하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 607,
    chapter_id: 6,
    title: '6.7 문서 요약과 분석',
    sort_order: 7,
    content: `
<h2>AI를 활용한 문서 요약과 분석</h2>
<p>방대한 양의 문서를 빠르게 이해하고 핵심을 파악하는 것은 학업과 업무에서 필수적인 능력입니다. AI는 긴 문서를 요약하고, 핵심 논점을 추출하며, 비판적으로 분석하는 데 강력한 도우미 역할을 합니다.</p>

<h3>AI 문서 분석 활용 유형</h3>
<table>
<thead>
<tr><th>활용 유형</th><th>설명</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>요약</td><td>핵심 내용 추출 및 축약</td><td>"이 논문의 핵심 내용을 300자로 요약해 줘"</td></tr>
<tr><td>핵심 논점 추출</td><td>주요 주장과 근거 식별</td><td>"이 기사의 주요 주장 3가지와 각각의 근거를 정리해 줘"</td></tr>
<tr><td>비교 분석</td><td>여러 문서의 공통점/차이점</td><td>"두 보고서의 결론을 비교하고 차이점을 표로 정리해 줘"</td></tr>
<tr><td>비판적 분석</td><td>논리적 허점, 편향 찾기</td><td>"이 주장의 논리적 약점이나 편향된 관점을 분석해 줘"</td></tr>
<tr><td>Q&A 생성</td><td>문서 기반 질의응답</td><td>"이 교재의 내용을 바탕으로 시험 문제 5개를 만들어 줘"</td></tr>
</tbody>
</table>

<h3>실습 1: 학술 논문 요약</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 논문을 아래 구조로 요약해 주세요:<br/>
1. 연구 목적 (2~3줄)<br/>
2. 연구 방법 (3~4줄)<br/>
3. 주요 결과 (핵심 발견 3가지, 불릿 포인트)<br/>
4. 결론 및 시사점 (2~3줄)<br/>
5. 한계점 (1~2줄)<br/>
전문 용어는 괄호 안에 쉬운 설명을 덧붙여 주세요."
</div>

<h3>실습 2: 보고서 비판적 분석</h3>
<div class="info-box">
<strong>실습 프롬프트</strong><br/>
"다음 보고서를 비판적으로 분석해 주세요:<br/>
1. 주장의 근거가 충분한가?<br/>
2. 데이터 해석에 오류는 없는가?<br/>
3. 다른 관점이나 반론은 무엇인가?<br/>
4. 결론이 논리적으로 타당한가?<br/>
5. 개선이 필요한 부분은 무엇인가?<br/>
건설적이고 객관적인 관점으로 분석해 주세요."
</div>

<h3>효과적인 문서 분석 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>단계적 분석</h4>
<p>긴 문서는 한 번에 분석하지 말고, 섹션별로 나누어 분석한 후 전체를 종합합니다. 먼저 목차와 결론을 분석하고, 이후 세부 내용을 다룹니다.</p>
</div>
<div class="compare-item">
<h4>다중 관점 분석</h4>
<p>AI에게 서로 다른 관점(찬성/반대, 낙관/비관, 이론/실무)에서 분석하도록 요청하면, 보다 균형 잡힌 이해를 얻을 수 있습니다.</p>
</div>
</div>

<div class="info-box warning">
<strong>주의사항</strong><br/>
<ul>
<li>AI가 요약한 내용이 원문의 핵심을 정확히 반영하는지 확인하세요. 중요한 세부 사항이 누락될 수 있습니다.</li>
<li>기밀 문서, 미공개 논문, 개인정보가 포함된 문서는 외부 AI에 업로드하지 마세요.</li>
<li>AI 요약을 인용할 때는 반드시 원문을 직접 확인한 후 인용하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 608,
    chapter_id: 6,
    title: '6.8 AI 협업 워크플로우',
    sort_order: 8,
    content: `
<h2>AI 협업 워크플로우</h2>
<p>AI를 단순한 도구가 아닌 협업 파트너로 활용하면, 업무 효율성을 크게 향상시킬 수 있습니다. 이 절에서는 AI를 일상적인 작업 프로세스에 체계적으로 통합하는 방법을 알아봅니다.</p>

<h3>AI 협업의 기본 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>인간의 역할</h4>
<ul>
<li>목표 설정과 방향 결정</li>
<li>창의적 아이디어와 전략 수립</li>
<li>윤리적 판단과 가치 결정</li>
<li>최종 검토와 품질 보증</li>
<li>이해관계자와의 소통</li>
</ul>
</div>
<div class="compare-item">
<h4>AI의 역할</h4>
<ul>
<li>초안 작성과 아이디어 확장</li>
<li>데이터 처리와 패턴 발견</li>
<li>반복 작업 자동화</li>
<li>다양한 대안 제시</li>
<li>정보 검색과 정리</li>
</ul>
</div>
</div>

<h3>업무 유형별 AI 워크플로우</h3>
<table>
<thead>
<tr><th>업무 단계</th><th>AI 활용 방법</th><th>인간의 역할</th></tr>
</thead>
<tbody>
<tr><td>기획/리서치</td><td>시장 조사, 트렌드 분석, 경쟁사 분석 초안</td><td>전략적 방향 설정, 핵심 인사이트 도출</td></tr>
<tr><td>콘텐츠 제작</td><td>초안 작성, 이미지 생성, 번역</td><td>톤/메시지 결정, 편집, 브랜드 일관성 확인</td></tr>
<tr><td>데이터 분석</td><td>데이터 정리, 통계 분석, 시각화</td><td>분석 목적 설정, 결과 해석, 의사결정</td></tr>
<tr><td>커뮤니케이션</td><td>이메일 초안, 보고서 구조화, 번역</td><td>관계 관리, 미묘한 뉘앙스 조정, 최종 승인</td></tr>
<tr><td>학습/교육</td><td>학습 자료 생성, 퀴즈 출제, 개념 설명</td><td>학습 목표 설정, 내용 검증, 피드백</td></tr>
</tbody>
</table>

<h3>실습: 프로젝트 보고서 작성 워크플로우</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1단계: 구조 설계</h4>
<p>AI에게 보고서 목차 초안 요청<br/>→ 인간이 수정·확정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2단계: 리서치</h4>
<p>AI에게 관련 데이터·사례 조사 요청<br/>→ 인간이 출처 검증</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3단계: 초안 작성</h4>
<p>AI에게 섹션별 초안 생성 요청<br/>→ 인간이 전문성 보강</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4단계: 검토·완성</h4>
<p>AI에게 문법·논리 검토 요청<br/>→ 인간이 최종 편집·승인</p>
</div>
</div>

<div class="info-box">
<strong>AI 협업 성공을 위한 팁</strong><br/>
<ul>
<li><strong>역할 분담</strong>: AI에게 맡길 작업과 인간이 직접 해야 할 작업을 명확히 구분하세요.</li>
<li><strong>반복 검증</strong>: AI 결과물을 항상 검증하는 습관을 들이세요.</li>
<li><strong>점진적 도입</strong>: 처음부터 모든 업무에 AI를 적용하지 말고, 간단한 작업부터 시작하세요.</li>
<li><strong>프롬프트 축적</strong>: 효과적인 프롬프트를 기록하고 팀과 공유하세요.</li>
<li><strong>지속 학습</strong>: AI 도구의 새로운 기능과 업데이트를 지속적으로 학습하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 609,
    chapter_id: 6,
    title: '6.9 학습 정리',
    sort_order: 9,
    content: `
<h2>Chapter 6 학습 정리</h2>
<p>이번 장에서는 다양한 AI 도구를 실제로 활용하는 방법을 실습했습니다. 각 영역별 핵심 내용을 정리합니다.</p>

<h3>영역별 핵심 요약</h3>
<table>
<thead>
<tr><th>활용 영역</th><th>대표 도구</th><th>핵심 포인트</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>텍스트 생성</td><td>ChatGPT, Claude</td><td>구조 지정, 톤 설정, 구체적 프롬프트</td><td>사실 확인 필수, 학교 AI 정책 확인</td></tr>
<tr><td>이미지 생성</td><td>DALL-E 3, Midjourney</td><td>주제+스타일+분위기+구도 명시</td><td>초상권, 저작권, 딥페이크 주의</td></tr>
<tr><td>코드 작성</td><td>Copilot, ChatGPT</td><td>요구사항 자연어 설명, 코드 이해 노력</td><td>반드시 테스트, 보안 코드 검수</td></tr>
<tr><td>데이터 분석</td><td>ChatGPT(Code Interpreter)</td><td>맥락 제공, 분석 유형 명시</td><td>데이터 보안, 결과 검증</td></tr>
<tr><td>번역</td><td>DeepL, ChatGPT, 파파고</td><td>맥락·톤·스타일 지정</td><td>전문 문서는 전문가 검수</td></tr>
<tr><td>문서 분석</td><td>Claude, ChatGPT</td><td>단계적 분석, 다중 관점 활용</td><td>원문 직접 확인 필수</td></tr>
</tbody>
</table>

<h3>AI 활용의 핵심 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>준비</h4>
<p>목적 파악, 적합한 도구 선택</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>입력</h4>
<p>효과적인 프롬프트 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>생성</h4>
<p>AI의 결과물 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>검증</h4>
<p>정확성, 품질, 윤리 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>활용</h4>
<p>편집, 보완하여 최종 결과물 완성</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 원칙</strong><br/>
<ul>
<li>AI는 도구입니다. 최종 판단과 책임은 항상 사용자에게 있습니다.</li>
<li>AI 결과물을 그대로 사용하지 말고, 반드시 검토하고 자신의 관점으로 보완하세요.</li>
<li>개인정보와 기밀 정보의 보호를 항상 최우선으로 고려하세요.</li>
<li>AI를 활용하되, 기본 역량(글쓰기, 분석, 코딩)을 스스로 기르는 것을 게을리하지 마세요.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 AI를 사용할 때 반드시 고려해야 할 <strong>AI 윤리와 책임</strong>에 대해 학습합니다. AI의 공정성, 투명성, 개인정보 보호, 저작권 등 핵심 윤리 이슈를 심도 있게 다룹니다.</p>
    `
  },
  {
    id: 610,
    chapter_id: 6,
    title: '6.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h2>학습 확인 문제</h2>
<p>Chapter 6에서 학습한 AI 활용 실습 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> AI 서비스를 사용할 때 절대 입력하면 안 되는 정보가 <u>아닌</u> 것은?<br/>
① 주민등록번호<br/>
② 신용카드 번호<br/>
③ 공개된 뉴스 기사 본문<br/>
④ 회사 내부 기밀 문서<br/>
<em>정답: ③ — 공개된 뉴스 기사는 이미 공개 정보이므로 AI에 입력해도 보안 문제가 없습니다. 나머지는 모두 민감한 정보로 AI에 입력해서는 안 됩니다.</em>
</div>

<div class="info-box">
<strong>문제 2.</strong> AI 이미지 생성 프롬프트 작성 시 포함해야 할 5가지 요소를 나열하시오.<br/>
<em>정답: (1) 주제(Subject) — 무엇을 그릴 것인가, (2) 스타일(Style) — 어떤 화풍인가, (3) 분위기(Mood) — 어떤 느낌인가, (4) 구도(Composition) — 어떤 각도/배치인가, (5) 색감(Color) — 어떤 색조인가</em>
</div>

<div class="info-box">
<strong>문제 3.</strong> AI로 생성한 코드를 실제 프로젝트에 사용하기 전에 반드시 수행해야 할 절차를 3가지 이상 설명하시오.<br/>
<em>모범 답안: (1) 코드를 직접 실행하여 정상 동작 여부를 테스트한다, (2) 각 줄의 코드가 무엇을 하는지 이해하고 검토한다, (3) 보안에 민감한 부분(인증, 결제 등)은 보안 전문가의 검토를 받는다, (4) 라이선스 문제를 확인하여 기존 오픈소스 코드와 유사하지 않은지 검증한다, (5) 엣지 케이스(예외 상황)에 대한 테스트를 수행한다.</em>
</div>

<div class="info-box">
<strong>문제 4.</strong> AI 번역의 효과적인 3단계 활용 전략을 설명하고, 각 단계에서 적합한 도구를 제시하시오.<br/>
<em>모범 답안: 1단계(초벌 번역) — Google 번역이나 DeepL을 사용하여 빠르게 전체 텍스트를 번역합니다. 2단계(맥락 보정) — ChatGPT 또는 Claude를 사용하여 번역된 텍스트의 맥락, 톤, 스타일을 조정합니다. 3단계(전문가 검토) — 중요한 문서의 경우 전문 번역가 또는 원어민이 최종 검수합니다.</em>
</div>

<div class="info-box">
<strong>문제 5.</strong> AI 협업 워크플로우에서 인간이 담당해야 할 역할과 AI에게 맡기기 적합한 역할을 각각 3가지 이상 비교 설명하시오.<br/>
<em>모범 답안: 인간의 역할 — (1) 프로젝트의 목표 설정과 전략적 방향 결정, (2) 윤리적 판단과 가치 기반 의사결정, (3) 최종 결과물의 품질 검토와 승인, (4) 이해관계자와의 감성적 소통과 협상. AI의 역할 — (1) 대량의 데이터 수집·정리 및 패턴 분석, (2) 초안 작성과 다양한 대안 생성, (3) 반복적인 작업(데이터 입력, 형식 변환 등)의 자동화, (4) 문법·맞춤법 검사 등 기계적 검토 수행.</em>
</div>
    `
  }
];
