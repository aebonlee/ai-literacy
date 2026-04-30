/**
 * Chapter 5: 프롬프트 엔지니어링 기초
 * 프롬프트 정의, 작성법, 패턴, 역할 지정, 구조화 출력, 반복 개선, 실전 팁, 활용 사례
 */
export const CH05_SECTIONS = [
  {
    id: 501,
    chapter_id: 5,
    title: '5.1 프롬프트란?',
    sort_order: 1,
    content: `
<h2>프롬프트의 정의와 중요성</h2>
<p>프롬프트(Prompt)란 사용자가 AI 시스템에 입력하는 텍스트 명령 또는 질문을 의미합니다. 생성형 AI의 출력 품질은 프롬프트의 품질에 의해 결정됩니다. 좋은 프롬프트는 AI로부터 정확하고 유용한 결과를 이끌어내며, 반대로 모호한 프롬프트는 부정확하거나 관련 없는 응답을 초래합니다.</p>

<div class="info-box">
<strong>핵심 개념</strong><br/>
프롬프트는 인간과 AI 사이의 인터페이스입니다. 프로그래밍 언어가 사람과 컴퓨터 사이의 소통 수단이듯, 프롬프트는 자연어를 통해 AI와 소통하는 방법입니다.
</div>

<h3>프롬프트의 구성 요소</h3>
<table>
<thead>
<tr><th>구성 요소</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>지시(Instruction)</td><td>AI가 수행해야 할 구체적인 작업</td><td>"다음 텍스트를 요약해 주세요"</td></tr>
<tr><td>맥락(Context)</td><td>작업에 필요한 배경 정보</td><td>"대학 신입생을 대상으로 작성된 교재입니다"</td></tr>
<tr><td>입력 데이터(Input)</td><td>처리할 실제 데이터나 텍스트</td><td>요약할 원문 텍스트</td></tr>
<tr><td>출력 형식(Output Format)</td><td>원하는 결과의 형태</td><td>"3개의 핵심 포인트로 정리해 주세요"</td></tr>
</tbody>
</table>

<h3>프롬프트 품질이 중요한 이유</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>나쁜 프롬프트</h4>
<p>"마케팅에 대해 알려줘"</p>
<p>결과: 너무 광범위하고 일반적인 정보를 제공하여, 실제 필요에 맞지 않는 응답이 생성됩니다.</p>
</div>
<div class="compare-item">
<h4>좋은 프롬프트</h4>
<p>"중소 IT기업의 SNS 마케팅 전략을 예산 100만원 이내로 실행 가능한 3가지 방안을 각각 장단점과 함께 표로 정리해 줘"</p>
<p>결과: 구체적이고 실행 가능한 정보를 체계적으로 제공합니다.</p>
</div>
</div>

<h3>프롬프트 엔지니어링이란?</h3>
<p>프롬프트 엔지니어링(Prompt Engineering)은 AI 모델로부터 원하는 출력을 효과적으로 얻기 위해 프롬프트를 설계하고 최적화하는 기술입니다. 이는 단순한 질문 작성을 넘어, AI의 작동 원리를 이해하고 체계적으로 프롬프트를 구성하는 전문 역량입니다.</p>

<div class="info-box warning">
<strong>주의</strong><br/>
프롬프트 엔지니어링은 AI를 "속이는" 기술이 아닙니다. AI의 능력 범위 내에서 최적의 결과를 이끌어내는 효과적인 의사소통 기술입니다. AI가 학습하지 않은 정보를 프롬프트만으로 생성할 수는 없습니다.
</div>
    `
  },
  {
    id: 502,
    chapter_id: 5,
    title: '5.2 효과적인 프롬프트 작성법',
    sort_order: 2,
    content: `
<h2>효과적인 프롬프트 작성의 원칙</h2>
<p>AI로부터 원하는 결과를 얻기 위해서는 프롬프트를 명확하고 구체적으로 작성해야 합니다. 프롬프트 작성의 핵심 원칙을 살펴보겠습니다.</p>

<h3>프롬프트 작성 5대 원칙</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 명확성(Clarity)</h4>
<p>모호하지 않은 명확한 언어 사용</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 구체성(Specificity)</h4>
<p>원하는 것을 구체적으로 명시</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 맥락(Context)</h4>
<p>충분한 배경 정보 제공</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 제약(Constraints)</h4>
<p>출력의 범위와 형식 지정</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5. 예시(Examples)</h4>
<p>원하는 출력의 예시 제공</p>
</div>
</div>

<h3>원칙별 적용 방법</h3>
<table>
<thead>
<tr><th>원칙</th><th>적용 전</th><th>적용 후</th></tr>
</thead>
<tbody>
<tr><td>명확성</td><td>"좋은 글 써 줘"</td><td>"대학교 경영학 수업 기말 보고서에 적합한 서론을 작성해 줘"</td></tr>
<tr><td>구체성</td><td>"짧게 요약해 줘"</td><td>"200자 이내로 3개의 핵심 포인트를 불릿 형식으로 요약해 줘"</td></tr>
<tr><td>맥락</td><td>"이것 분석해 줘"</td><td>"이 데이터는 2025년 1분기 국내 스타트업 투자 현황입니다. 산업별 투자 트렌드를 분석해 줘"</td></tr>
<tr><td>제약</td><td>"마케팅 전략 알려줘"</td><td>"B2B SaaS 기업을 위한 마케팅 전략을 5가지 추천하되, 각각 월 예산 50만원 이하로 실행 가능한 것만 포함해 줘"</td></tr>
<tr><td>예시</td><td>"제목 만들어 줘"</td><td>"'AI시대, 당신의 직업은 안전한가?' 같은 스타일로 관심을 끄는 블로그 제목 5개를 만들어 줘"</td></tr>
</tbody>
</table>

<h3>프롬프트 구조화 템플릿</h3>
<div class="info-box">
<strong>기본 구조 템플릿</strong><br/>
<ol>
<li><strong>역할 지정</strong>: "당신은 [전문가/역할]입니다."</li>
<li><strong>배경 설명</strong>: "[상황/맥락]에 대해..."</li>
<li><strong>구체적 지시</strong>: "[작업]을 수행해 주세요."</li>
<li><strong>제약 조건</strong>: "[형식/길이/조건]을 지켜 주세요."</li>
<li><strong>출력 형식</strong>: "[표/목록/단락] 형태로 정리해 주세요."</li>
</ol>
</div>

<div class="info-box warning">
<strong>흔한 실수</strong><br/>
<ul>
<li><strong>과도한 정보</strong>: 불필요한 정보를 너무 많이 포함하면 AI가 핵심을 놓칠 수 있습니다.</li>
<li><strong>모순된 지시</strong>: "짧지만 상세하게" 같은 모순된 요청은 AI를 혼란스럽게 합니다.</li>
<li><strong>부정문 남용</strong>: "하지 마세요" 보다 "~하세요"라는 긍정형 지시가 더 효과적입니다.</li>
<li><strong>한 번에 너무 많은 요청</strong>: 복잡한 작업은 단계별로 나누어 요청하는 것이 좋습니다.</li>
</ul>
</div>
    `
  },
  {
    id: 503,
    chapter_id: 5,
    title: '5.3 프롬프트 패턴',
    sort_order: 3,
    content: `
<h2>주요 프롬프트 패턴</h2>
<p>프롬프트 엔지니어링에는 다양한 패턴이 존재하며, 각 패턴은 특정 상황에서 AI의 성능을 극대화합니다. 대표적인 세 가지 패턴을 살펴보겠습니다.</p>

<h3>프롬프트 패턴 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>Zero-shot 프롬프팅</h4>
<p>예시를 제공하지 않고 지시만으로 AI에게 작업을 요청하는 방식입니다. AI의 사전 학습된 지식에 의존합니다.</p>
<p><strong>예시:</strong><br/>"다음 문장의 감정을 '긍정', '부정', '중립' 중 하나로 분류해 줘: '이 영화 정말 재미있었어!'"</p>
</div>
<div class="compare-item">
<h4>Few-shot 프롬프팅</h4>
<p>몇 개의 예시를 함께 제공하여 AI가 패턴을 학습한 후 새로운 입력에 적용하도록 하는 방식입니다.</p>
<p><strong>예시:</strong><br/>"감정 분류 예시:<br/>- '맛있다!' → 긍정<br/>- '별로다' → 부정<br/>- '보통이다' → 중립<br/>그렇다면 '최고의 경험이었습니다'는?"</p>
</div>
<div class="compare-item">
<h4>Chain-of-Thought (CoT)</h4>
<p>AI에게 단계적으로 추론하도록 유도하는 방식입니다. 복잡한 논리적 문제에서 특히 효과적입니다.</p>
<p><strong>예시:</strong><br/>"단계별로 생각해 봅시다. 사과 5개에서 3개를 먹고 2개를 더 사면..."</p>
</div>
</div>

<h3>패턴별 특성 비교</h3>
<table>
<thead>
<tr><th>특성</th><th>Zero-shot</th><th>Few-shot</th><th>Chain-of-Thought</th></tr>
</thead>
<tbody>
<tr><td>예시 필요</td><td>없음</td><td>2~5개</td><td>추론 과정 예시</td></tr>
<tr><td>적합한 작업</td><td>단순 분류, 번역</td><td>특정 형식/스타일 필요</td><td>수학, 논리, 복잡한 추론</td></tr>
<tr><td>프롬프트 길이</td><td>짧음</td><td>중간</td><td>길 수 있음</td></tr>
<tr><td>정확도</td><td>보통</td><td>높음</td><td>복잡한 문제에서 높음</td></tr>
<tr><td>토큰 소비</td><td>적음</td><td>중간</td><td>많음</td></tr>
</tbody>
</table>

<h3>Chain-of-Thought 상세 예시</h3>
<div class="info-box">
<strong>수학 문제 풀기</strong><br/>
<p><em>프롬프트:</em> "식당에 23명이 있었습니다. 점심시간에 15명이 더 왔고, 6명이 나갔습니다. 그 후 8명이 더 왔습니다. 현재 식당에 몇 명이 있습니까? 단계별로 풀어보세요."</p>
<p><em>AI 응답:</em><br/>
1단계: 초기 인원 = 23명<br/>
2단계: 15명 추가 → 23 + 15 = 38명<br/>
3단계: 6명 퇴장 → 38 - 6 = 32명<br/>
4단계: 8명 추가 → 32 + 8 = 40명<br/>
답: 현재 식당에 40명이 있습니다.</p>
</div>

<h3>고급 패턴</h3>
<ul>
<li><strong>Self-Consistency</strong>: 동일 문제를 여러 번 풀게 하고 다수결로 최종 답 선택</li>
<li><strong>Tree-of-Thought</strong>: 여러 추론 경로를 탐색하고 가장 유망한 경로를 선택</li>
<li><strong>ReAct(Reasoning + Acting)</strong>: 추론과 행동(도구 사용)을 교대로 수행</li>
<li><strong>Least-to-Most</strong>: 복잡한 문제를 작은 하위 문제로 분해하여 순차적으로 해결</li>
</ul>
    `
  },
  {
    id: 504,
    chapter_id: 5,
    title: '5.4 역할 지정 프롬프트',
    sort_order: 4,
    content: `
<h2>역할 지정 프롬프트 (Role Prompting)</h2>
<p>역할 지정 프롬프트는 AI에게 특정 전문가나 캐릭터의 역할을 부여하여 해당 관점에서 응답하도록 유도하는 기법입니다. 이를 통해 AI의 응답 스타일, 전문성 수준, 톤을 효과적으로 조절할 수 있습니다.</p>

<h3>역할 지정의 효과</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>역할 지정 없이</h4>
<p>"투자에 대해 알려줘"</p>
<p>결과: 일반적이고 백과사전식 설명이 나옵니다. 어떤 수준의 독자를 대상으로 하는지 불분명합니다.</p>
</div>
<div class="compare-item">
<h4>역할 지정 포함</h4>
<p>"당신은 20년 경력의 자산운용 전문가입니다. 투자를 처음 시작하는 대학생에게 월 30만원으로 시작할 수 있는 투자 전략을 설명해 주세요."</p>
<p>결과: 전문적이면서도 초보자 눈높이에 맞는 실용적인 조언이 나옵니다.</p>
</div>
</div>

<h3>역할 지정 유형과 예시</h3>
<table>
<thead>
<tr><th>역할 유형</th><th>프롬프트 예시</th><th>활용 상황</th></tr>
</thead>
<tbody>
<tr><td>전문가</td><td>"당신은 데이터 사이언티스트입니다"</td><td>기술적 분석, 전문 용어 설명</td></tr>
<tr><td>교육자</td><td>"당신은 초등학교 선생님입니다"</td><td>쉬운 설명, 교육 콘텐츠 제작</td></tr>
<tr><td>비평가</td><td>"당신은 엄격한 논문 심사위원입니다"</td><td>비판적 검토, 품질 평가</td></tr>
<tr><td>창작자</td><td>"당신은 베스트셀러 카피라이터입니다"</td><td>광고 문구, 마케팅 콘텐츠</td></tr>
<tr><td>컨설턴트</td><td>"당신은 McKinsey 출신 경영 컨설턴트입니다"</td><td>사업 전략, 문제 해결</td></tr>
<tr><td>번역가</td><td>"당신은 한영 동시통역 전문가입니다"</td><td>번역, 로컬라이제이션</td></tr>
</tbody>
</table>

<h3>효과적인 역할 지정 방법</h3>
<div class="info-box">
<strong>역할 지정 프레임워크</strong><br/>
<ol>
<li><strong>전문 분야 명시</strong>: "당신은 [분야]의 전문가입니다"</li>
<li><strong>경험 수준 설정</strong>: "[N]년 경력의 시니어 [직무]"</li>
<li><strong>대상 독자 지정</strong>: "[대상]에게 설명합니다"</li>
<li><strong>톤과 스타일 지정</strong>: "전문적이지만 친근한 어조로"</li>
<li><strong>금지 사항 명시</strong>: "전문 용어는 반드시 쉬운 설명을 덧붙여 주세요"</li>
</ol>
</div>

<h3>페르소나 결합 기법</h3>
<p>하나의 역할만 부여하는 것이 아니라, 여러 특성을 결합하여 더욱 정교한 페르소나를 만들 수 있습니다.</p>

<div class="info-box">
<strong>결합 예시</strong><br/>
"당신은 10년 경력의 UX 디자이너이자 심리학 석사 학위를 가진 전문가입니다. 사용자 행동 심리를 기반으로 모바일 앱의 온보딩 화면을 분석해 주세요. 비전공자도 이해할 수 있는 수준으로 설명하되, 학술적 근거를 함께 제시해 주세요."
</div>

<div class="info-box warning">
<strong>역할 지정 시 주의사항</strong><br/>
<ul>
<li>의사, 변호사 등 전문 자격이 필요한 역할의 경우, AI의 응답은 참고용일 뿐 전문가 상담을 대체하지 않습니다.</li>
<li>비현실적인 역할(예: "당신은 미래에서 온 사람입니다")은 정확한 정보 제공에 도움이 되지 않을 수 있습니다.</li>
<li>역할과 요청 내용이 일관성을 유지해야 합니다.</li>
</ul>
</div>
    `
  },
  {
    id: 505,
    chapter_id: 5,
    title: '5.5 구조화된 출력 요청',
    sort_order: 5,
    content: `
<h2>구조화된 출력 요청하기</h2>
<p>AI에게 단순히 텍스트를 생성하는 것을 넘어, 특정 구조와 형식을 갖춘 출력을 요청할 수 있습니다. 구조화된 출력은 정보를 체계적으로 정리하고 후속 작업에 바로 활용할 수 있다는 장점이 있습니다.</p>

<h3>주요 출력 형식</h3>
<table>
<thead>
<tr><th>출력 형식</th><th>적합한 상황</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>표(Table)</td><td>비교 분석, 데이터 정리</td><td>"다음 내용을 표로 정리해 줘. 열은 [항목, 장점, 단점, 비용]으로 구성해 줘"</td></tr>
<tr><td>번호 목록</td><td>순서가 있는 절차, 단계</td><td>"회원가입 절차를 번호 매긴 단계별로 작성해 줘"</td></tr>
<tr><td>불릿 목록</td><td>나열, 특징 요약</td><td>"핵심 특징을 불릿 포인트로 정리해 줘"</td></tr>
<tr><td>JSON</td><td>프로그래밍, API 연동</td><td>"다음 정보를 JSON 형식으로 출력해 줘"</td></tr>
<tr><td>마크다운</td><td>문서 작성, 블로그</td><td>"마크다운 형식으로 기술 블로그 글을 작성해 줘"</td></tr>
<tr><td>CSV</td><td>스프레드시트, 데이터 분석</td><td>"CSV 형식으로 데이터를 정리해 줘"</td></tr>
</tbody>
</table>

<h3>표 형식 출력 요청</h3>
<div class="info-box">
<strong>실습 예시</strong><br/>
<p><em>프롬프트:</em> "주요 AI 모델 5개를 비교하는 표를 만들어 줘. 열은 [모델명, 개발사, 출시년도, 주요 특징, 파라미터 수]로 구성해 줘."</p>
<p>이 프롬프트는 명확한 열 구조를 지정하여 AI가 일관된 형식의 표를 생성하도록 유도합니다.</p>
</div>

<h3>JSON 형식 출력 요청</h3>
<div class="info-box">
<strong>실습 예시</strong><br/>
<p><em>프롬프트:</em> "다음 도서 정보를 JSON 형식으로 변환해 줘. 각 도서는 title, author, year, isbn 필드를 포함해야 해. 배열 형태로 출력해 줘."</p>
<p>프로그래밍에서 AI 출력을 직접 활용할 때 특히 유용합니다. 데이터 파이프라인, API 응답 설계 등에 적용할 수 있습니다.</p>
</div>

<h3>복합 구조 요청</h3>
<p>여러 형식을 결합하여 복합적인 구조의 출력을 요청할 수도 있습니다.</p>
<div class="info-box">
<strong>복합 구조 예시</strong><br/>
<p><em>프롬프트:</em> "다음 보고서를 아래 구조로 작성해 줘:<br/>
1. 제목 (h1)<br/>
2. 요약 (3줄 이내)<br/>
3. 핵심 발견 사항 (불릿 5개)<br/>
4. 상세 분석 (소제목별 2~3단락)<br/>
5. 데이터 비교 (표 형식)<br/>
6. 결론 및 제언 (번호 목록)"</p>
</div>

<div class="info-box warning">
<strong>구조화 출력 시 주의사항</strong><br/>
<ul>
<li>너무 복잡한 구조를 한 번에 요청하면 AI가 일부를 누락할 수 있으므로, 필요시 단계별로 요청합니다.</li>
<li>JSON 출력 요청 시 "코드 블록 안에 넣어 줘"를 추가하면 형식이 깔끔해집니다.</li>
<li>표의 열이 너무 많으면 가독성이 떨어질 수 있으므로 5~7개 이내로 제한하는 것이 좋습니다.</li>
</ul>
</div>
    `
  },
  {
    id: 506,
    chapter_id: 5,
    title: '5.6 프롬프트 반복과 개선',
    sort_order: 6,
    content: `
<h2>프롬프트 반복과 개선 (Iterative Refinement)</h2>
<p>완벽한 프롬프트를 한 번에 작성하는 것은 매우 어렵습니다. 프롬프트 엔지니어링의 핵심은 반복적인 개선 과정을 통해 점진적으로 더 나은 결과를 얻는 것입니다. 이 과정을 "반복적 정련(Iterative Refinement)"이라고 합니다.</p>

<h3>반복 개선 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1단계: 초기 프롬프트</h4>
<p>기본적인 의도를 담은 프롬프트 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2단계: 결과 평가</h4>
<p>AI 응답의 품질, 정확성, 형식 확인</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3단계: 문제 분석</h4>
<p>부족한 점이나 오류의 원인 파악</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4단계: 프롬프트 수정</h4>
<p>분석 결과를 반영하여 프롬프트 개선</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5단계: 재시도</h4>
<p>개선된 프롬프트로 다시 요청 (만족할 때까지 반복)</p>
</div>
</div>

<h3>반복 개선 실전 예시</h3>
<table>
<thead>
<tr><th>반복 단계</th><th>프롬프트</th><th>문제점</th><th>개선 방향</th></tr>
</thead>
<tbody>
<tr><td>1차</td><td>"이력서 써 줘"</td><td>일반적인 템플릿만 제공</td><td>직무와 경력 정보 추가</td></tr>
<tr><td>2차</td><td>"마케팅 직무 신입 이력서를 작성해 줘"</td><td>구체적 경험이 부족</td><td>구체적 활동/성과 정보 제공</td></tr>
<tr><td>3차</td><td>"마케팅 직무 신입 이력서를 작성해 줘. SNS 마케팅 인턴 6개월 경험, 팔로워 200% 성장 달성. 경영학과 졸업 예정"</td><td>형식이 정해지지 않음</td><td>원하는 형식과 분량 지정</td></tr>
<tr><td>4차</td><td>(3차) + "A4 1페이지 분량으로, [경력사항], [학력], [자격증], [자기소개] 섹션으로 구분하여 작성. 각 성과는 수치로 표현"</td><td>만족스러운 결과</td><td>완료</td></tr>
</tbody>
</table>

<h3>디버깅 기법</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI에게 피드백 주기</h4>
<p>"좋은 답변이지만, 더 구체적인 수치를 포함해 줘", "세 번째 항목을 좀 더 상세하게 설명해 줘" 등 구체적인 피드백을 제공합니다.</p>
</div>
<div class="compare-item">
<h4>AI에게 자기 평가 요청</h4>
<p>"방금 작성한 답변의 부족한 점을 스스로 평가하고, 개선된 버전을 다시 작성해 줘"라고 요청하면 AI가 자체적으로 품질을 개선합니다.</p>
</div>
</div>

<div class="info-box">
<strong>프롬프트 버전 관리 팁</strong><br/>
<ul>
<li>효과적이었던 프롬프트는 별도로 저장하여 재사용합니다.</li>
<li>프롬프트 라이브러리를 구축하면 반복 작업의 효율을 높일 수 있습니다.</li>
<li>각 프롬프트에 버전 번호를 매기고 변경 이유를 기록하면 추후 참고에 유용합니다.</li>
<li>팀 작업 시 프롬프트를 공유하여 모범 사례를 확산합니다.</li>
</ul>
</div>
    `
  },
  {
    id: 507,
    chapter_id: 5,
    title: '5.7 프롬프트 엔지니어링 실전 팁',
    sort_order: 7,
    content: `
<h2>프롬프트 엔지니어링 실전 팁</h2>
<p>프롬프트 엔지니어링의 이론을 넘어, 실제 업무와 학습에서 바로 적용할 수 있는 실전 팁을 알아보겠습니다.</p>

<h3>Do's: 이렇게 하세요</h3>
<table>
<thead>
<tr><th>팁</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td>구분자 사용</td><td>입력 데이터와 지시를 명확히 구분</td><td>"---" 또는 """로 텍스트 영역을 구분합니다</td></tr>
<tr><td>단계적 요청</td><td>복잡한 작업을 여러 단계로 나누기</td><td>"1단계: 개요 작성 → 2단계: 각 항목 상세화 → 3단계: 최종 검토"</td></tr>
<tr><td>출력 길이 지정</td><td>원하는 분량을 명시</td><td>"300자 이내로", "A4 2페이지 분량으로"</td></tr>
<tr><td>대상 독자 지정</td><td>누구를 위한 콘텐츠인지 명시</td><td>"고등학생이 이해할 수 있는 수준으로"</td></tr>
<tr><td>톤 지정</td><td>문체와 분위기를 설정</td><td>"공식적인 비즈니스 어조로", "친근한 대화체로"</td></tr>
<tr><td>검증 요청</td><td>AI에게 자체 검증을 요청</td><td>"답변에 오류가 없는지 다시 확인해 줘"</td></tr>
</tbody>
</table>

<h3>Don'ts: 이것은 피하세요</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>모호한 표현</h4>
<p>"적당히", "잘", "좋게" 같은 모호한 표현은 피하세요. 대신 구체적인 기준을 제시합니다.</p>
<p><strong>피하기:</strong> "적당한 길이로 써 줘"<br/>
<strong>권장:</strong> "500자 내외로 써 줘"</p>
</div>
<div class="compare-item">
<h4>가정에 의존</h4>
<p>AI가 당신의 상황을 알고 있다고 가정하지 마세요. 필요한 맥락을 모두 프롬프트에 포함시킵니다.</p>
<p><strong>피하기:</strong> "아까 그 프로젝트에 대해 더 알려줘"<br/>
<strong>권장:</strong> "AI 기반 고객 서비스 챗봇 프로젝트의 데이터베이스 설계에 대해 알려줘"</p>
</div>
</div>

<h3>고급 실전 기법</h3>
<div class="info-box">
<strong>메타 프롬프팅</strong><br/>
AI에게 프롬프트를 작성해 달라고 요청하는 기법입니다. "나는 [목표]를 달성하고 싶어. 이를 위한 최적의 프롬프트를 작성해 줘"라고 요청하면, AI가 더 효과적인 프롬프트를 제안합니다.
</div>

<div class="info-box">
<strong>네거티브 프롬프팅</strong><br/>
원하지 않는 요소를 명시하는 기법입니다. "다음 내용을 포함하지 마세요: 전문 용어, 영어 단어, 개인적 의견"처럼 제외할 사항을 명확히 합니다.
</div>

<h3>프롬프트 체크리스트</h3>
<ul>
<li>목적이 명확한가?</li>
<li>충분한 맥락을 제공했는가?</li>
<li>출력 형식을 지정했는가?</li>
<li>대상 독자를 명시했는가?</li>
<li>분량/길이를 지정했는가?</li>
<li>불필요한 모호성은 없는가?</li>
<li>모순되는 지시는 없는가?</li>
</ul>
    `
  },
  {
    id: 508,
    chapter_id: 5,
    title: '5.8 프롬프트 활용 사례',
    sort_order: 8,
    content: `
<h2>프롬프트 활용 사례</h2>
<p>프롬프트 엔지니어링은 비즈니스, 교육, 창작 등 다양한 분야에서 실질적으로 활용됩니다. 각 분야별 구체적인 프롬프트 사례를 살펴보겠습니다.</p>

<h3>비즈니스 활용 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>시장 조사</h4>
<p><em>프롬프트:</em> "당신은 시장 분석 전문가입니다. 2025년 한국 이커머스 시장의 주요 트렌드 5가지를 분석하고, 각 트렌드별로 중소기업이 활용할 수 있는 전략을 표로 정리해 주세요."</p>
</div>
<div class="compare-item">
<h4>이메일 작성</h4>
<p><em>프롬프트:</em> "B2B 영업 담당자로서, 처음 연락하는 잠재 고객에게 보낼 콜드 이메일을 작성해 주세요. 우리 제품은 클라우드 기반 HR 솔루션이며, 50~200명 규모 기업이 대상입니다. 3~4문단, 전문적이지만 친근한 톤으로 작성해 주세요."</p>
</div>
</div>

<h3>교육 활용 사례</h3>
<table>
<thead>
<tr><th>활용 목적</th><th>프롬프트 예시</th></tr>
</thead>
<tbody>
<tr><td>강의 계획서 작성</td><td>"대학교 '데이터 분석 입문' 과목의 16주 강의 계획서를 작성해 줘. 각 주차별로 주제, 학습 목표, 수업 활동, 과제를 포함해 줘. 수강생은 비전공 2학년 학생입니다."</td></tr>
<tr><td>시험 문제 출제</td><td>"경영학원론 중간고사 문제를 10개 출제해 줘. 객관식 6문항(5지선다), 서술형 4문항으로 구성하고, 난이도는 중상으로 설정해 줘. 정답과 해설도 포함해 줘."</td></tr>
<tr><td>학습 자료 제작</td><td>"고등학생을 위한 '통계학 기초' 학습 자료를 만들어 줘. 평균, 중앙값, 최빈값을 실생활 예시(반 성적, 용돈 등)로 설명하고, 연습 문제 5개를 포함해 줘."</td></tr>
</tbody>
</table>

<h3>창작 활용 사례</h3>
<div class="info-box">
<strong>블로그 글 작성</strong><br/>
<p><em>프롬프트:</em> "기술 블로그 작가로서, '2025년 주목해야 할 AI 트렌드'라는 주제로 블로그 글을 작성해 줘. 다음 조건을 지켜 줘:<br/>
- 총 1500~2000자 분량<br/>
- 서론, 트렌드 5가지(각각 소제목 포함), 결론 구조<br/>
- 각 트렌드에 실제 기업/제품 사례 1개 이상 포함<br/>
- 비전문가도 이해할 수 있는 수준<br/>
- SEO를 고려한 자연스러운 키워드 배치"</p>
</div>

<h3>개인 생산성 활용 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>회의록 정리</h4>
<p>"다음 회의 내용을 정리해 줘. [참석자], [안건별 논의 내용], [결정 사항], [후속 조치(담당자, 기한)] 섹션으로 나누어 작성해 줘."</p>
</div>
<div class="compare-item">
<h4>데이터 정리</h4>
<p>"다음 비정형 텍스트에서 이름, 이메일, 전화번호를 추출하여 CSV 형식으로 정리해 줘. 누락된 정보는 'N/A'로 표시해 줘."</p>
</div>
</div>

<div class="info-box">
<strong>프롬프트 라이브러리 구축</strong><br/>
자주 사용하는 프롬프트를 카테고리별로 저장하고 관리하면, 반복 작업의 효율성을 크게 높일 수 있습니다. Notion, Google Docs, 또는 전용 프롬프트 관리 도구를 활용하여 팀 단위로 공유하는 것을 권장합니다.
</div>
    `
  },
  {
    id: 509,
    chapter_id: 5,
    title: '5.9 학습 정리',
    sort_order: 9,
    content: `
<h2>Chapter 5 학습 정리</h2>
<p>이번 장에서는 프롬프트 엔지니어링의 기초부터 실전 활용까지 체계적으로 학습했습니다. 핵심 내용을 정리합니다.</p>

<h3>핵심 개념 요약</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>프롬프트 정의</td><td>AI에 입력하는 텍스트 명령. 프롬프트 품질이 AI 출력 품질을 결정</td></tr>
<tr><td>프롬프트 구성 요소</td><td>지시(Instruction), 맥락(Context), 입력 데이터(Input), 출력 형식(Output Format)</td></tr>
<tr><td>작성 원칙</td><td>명확성, 구체성, 맥락 제공, 제약 조건, 예시 활용</td></tr>
<tr><td>프롬프트 패턴</td><td>Zero-shot, Few-shot, Chain-of-Thought 등 상황에 맞는 패턴 선택</td></tr>
<tr><td>역할 지정</td><td>AI에 전문가/캐릭터 역할을 부여하여 전문성과 톤을 조절</td></tr>
<tr><td>구조화 출력</td><td>표, JSON, 마크다운 등 원하는 형식을 명시하여 체계적 출력 확보</td></tr>
<tr><td>반복 개선</td><td>초기 프롬프트 → 평가 → 수정 → 재시도의 반복적 과정</td></tr>
</tbody>
</table>

<h3>프롬프트 엔지니어링 핵심 프레임워크</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>R - Role (역할)</h4>
<p>AI에게 적절한 역할을 부여합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>T - Task (작업)</h4>
<p>수행할 작업을 명확하게 지시합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>F - Format (형식)</h4>
<p>원하는 출력 형식을 지정합니다</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>C - Context (맥락)</h4>
<p>필요한 배경 정보를 제공합니다</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 포인트</strong><br/>
<ul>
<li>프롬프트 엔지니어링은 기술이면서 동시에 예술입니다. 반복 연습을 통해 향상됩니다.</li>
<li>모든 상황에 맞는 만능 프롬프트는 없습니다. 상황에 맞는 패턴을 선택하세요.</li>
<li>AI의 결과물은 항상 비판적으로 검토해야 합니다.</li>
<li>효과적인 프롬프트는 저장하고 공유하여 재사용하세요.</li>
<li>AI 모델마다 특성이 다르므로, 모델에 맞는 프롬프트 조정이 필요합니다.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 이번 장에서 학습한 프롬프트 엔지니어링 기법을 실제 AI 도구에 적용하는 <strong>AI 활용 실습</strong>을 진행합니다. 텍스트 생성, 이미지 생성, 코드 작성, 데이터 분석 등 다양한 영역에서의 실전 활용법을 다룹니다.</p>
    `
  },
  {
    id: 510,
    chapter_id: 5,
    title: '5.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h2>학습 확인 문제</h2>
<p>Chapter 5에서 학습한 프롬프트 엔지니어링 기초 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> 프롬프트의 4가지 구성 요소를 모두 포함하는 것은?<br/>
① "번역해 줘"<br/>
② "이 글을 영어로 번역해 줘"<br/>
③ "당신은 번역가입니다. 아래 비즈니스 이메일을 영어로 번역하되, 공식적인 톤을 유지하고 200단어 이내로 작성해 주세요."<br/>
④ "좋은 번역을 해 줘. 잘 부탁해."<br/>
<details>
<summary>정답 확인</summary>
<p><strong>정답: ③ — 역할(번역가), 맥락(비즈니스 이메일), 지시(영어 번역), 출력 형식(공식 톤, 200단어 이내)을 모두 포함합니다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 2.</strong> Few-shot 프롬프팅에 대한 설명으로 옳은 것은?<br/>
① 예시를 전혀 제공하지 않는 방식이다<br/>
② AI 모델을 추가로 학습시키는 방식이다<br/>
③ 몇 개의 예시를 제공하여 AI가 패턴을 파악하도록 유도하는 방식이다<br/>
④ AI에게 단계별로 추론하도록 요청하는 방식이다<br/>
<details>
<summary>정답 확인</summary>
<p><strong>정답: ③ — Few-shot은 2~5개의 입출력 예시를 제공하여 AI가 원하는 패턴을 학습하게 합니다. ①은 Zero-shot, ④는 Chain-of-Thought입니다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 3.</strong> 다음 프롬프트의 문제점을 2가지 이상 지적하고, 개선된 버전을 작성하시오.<br/>
"적당히 좋은 글을 써 줘. 아까 말한 주제로 하되 너무 길지 않게."<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: (1) "적당히 좋은"이라는 모호한 표현 사용 — 구체적인 품질 기준이 없음, (2) "아까 말한 주제"라는 맥락 미제공 — AI는 이전 대화를 기억하지 못할 수 있음, (3) "너무 길지 않게"라는 불명확한 분량 지정 — 구체적 글자수/단어수를 명시해야 함. 개선 버전: "대학생을 대상으로 '인공지능의 미래 전망'에 대한 에세이를 작성해 줘. 서론-본론-결론 구조로 800자 내외로 작성하되, 전문 용어에는 간단한 설명을 덧붙여 줘."</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 4.</strong> Chain-of-Thought(CoT) 프롬프팅이 특히 효과적인 작업 유형을 3가지 이상 설명하고, 각각에 대한 CoT 프롬프트 예시를 제시하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: (1) 수학 문제 — "단계별로 풀어보세요. 할인율 20%가 적용된 50,000원짜리 상품에 부가세 10%를 추가하면 최종 가격은?", (2) 논리적 추론 — "단계별로 추론해 보세요. A가 B보다 키가 크고, B가 C보다 키가 크며, D는 A보다 키가 작지만 C보다 크다면, 키 순서는?", (3) 복잡한 의사결정 — "장단점을 단계별로 분석해 보세요. 스타트업에서 첫 개발자를 정규직으로 채용할지, 프리랜서로 계약할지 결정해야 합니다."</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 5.</strong> 역할 지정 프롬프트(Role Prompting)의 장점을 설명하고, "AI 윤리"라는 주제에 대해 서로 다른 3가지 역할을 부여한 프롬프트를 각각 작성하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: 역할 지정의 장점 — AI의 응답 전문성, 톤, 관점을 효과적으로 조절할 수 있으며, 동일 주제라도 다양한 시각의 콘텐츠를 생성할 수 있습니다. 예시: (1) "당신은 AI 윤리학 교수입니다. 학부생을 대상으로 AI 윤리의 핵심 원칙 5가지를 학술적으로 설명해 주세요." (2) "당신은 IT 기업의 법무팀장입니다. AI 윤리 위반이 기업에 미치는 법적·재무적 리스크를 비즈니스 관점에서 분석해 주세요." (3) "당신은 기술 저널리스트입니다. 일반 독자들이 AI 윤리 문제를 쉽게 이해할 수 있도록 최근 사례 중심으로 기사를 작성해 주세요."</strong></p>
</details>
</div>
    `
  }
];
