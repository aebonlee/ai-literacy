/**
 * Chapter 11: 직장과 일상의 AI
 * 직업 변화, 자동화, 새로운 직업, 필수 역량, 업무/일상 활용, 교육, 커리어 전략
 */
export const CH11_SECTIONS = [
  {
    id: 1101,
    chapter_id: 11,
    title: '11.1 AI와 직업의 변화',
    sort_order: 1,
    content: `
<h3>AI가 바꾸는 직업 세계</h3>
<p>인공지능은 산업혁명 이래 가장 큰 직업 세계의 변화를 이끌고 있습니다. 자동화, 지능화, 디지털 전환이 가속화되면서 기존 직업의 성격이 변하고, 새로운 형태의 일자리가 등장하고 있습니다. 세계경제포럼(WEF)은 2025년까지 AI로 인해 8,500만 개의 일자리가 사라지지만 9,700만 개의 새로운 일자리가 생길 것으로 전망했습니다.</p>

<div class="info-box">
<strong>핵심 트렌드</strong><br/>
AI는 직업을 단순히 '대체'하는 것이 아니라, 직업의 '구성 요소'를 변화시킵니다. 대부분의 직업에서 일부 업무는 자동화되고, 인간은 더 높은 가치를 창출하는 업무에 집중하게 됩니다. 이를 '업무 재구성(Task Redesign)'이라 합니다.
</div>

<h3>산업혁명별 직업 변화 비교</h3>
<table>
<thead>
<tr><th>시대</th><th>핵심 기술</th><th>직업 변화 양상</th><th>새로운 직업 유형</th></tr>
</thead>
<tbody>
<tr><td>1차 산업혁명<br/>(18세기)</td><td>증기기관</td><td>수공업 → 공장 노동</td><td>공장 노동자, 기계 기술자</td></tr>
<tr><td>2차 산업혁명<br/>(19-20세기)</td><td>전기, 대량생산</td><td>가내공업 → 대규모 제조업</td><td>조립 라인 작업자, 전기 기사</td></tr>
<tr><td>3차 산업혁명<br/>(20세기 후반)</td><td>컴퓨터, 인터넷</td><td>아날로그 → 디지털 업무</td><td>프로그래머, 웹 디자이너</td></tr>
<tr><td>4차 산업혁명<br/>(현재)</td><td>AI, 빅데이터, IoT</td><td>반복 업무 → AI 자동화</td><td>AI 엔지니어, 데이터 사이언티스트</td></tr>
</tbody>
</table>

<h3>AI 도입에 따른 직업 변화 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>업무 자동화</h4>
<p>반복적이고 규칙적인 업무가 AI로 대체되는 현상</p>
<ul>
<li>데이터 입력 및 처리</li>
<li>문서 분류 및 정리</li>
<li>기본적인 고객 응대</li>
<li>정형화된 보고서 작성</li>
</ul>
</div>
<div class="compare-item">
<h4>업무 증강</h4>
<p>AI가 인간의 능력을 확장하고 보완하는 형태</p>
<ul>
<li>AI 진단 보조 도구를 활용하는 의사</li>
<li>AI 법률 검색으로 생산성을 높이는 변호사</li>
<li>AI 디자인 도구로 창작하는 디자이너</li>
<li>AI 분석으로 인사이트를 얻는 마케터</li>
</ul>
</div>
<div class="compare-item">
<h4>업무 창출</h4>
<p>AI로 인해 완전히 새로운 형태의 업무가 생기는 현상</p>
<ul>
<li>AI 모델 훈련 및 평가</li>
<li>AI 윤리 심사 및 감사</li>
<li>AI 프롬프트 엔지니어링</li>
<li>인간-AI 협업 설계</li>
</ul>
</div>
</div>

<h4>주요 통계와 전망</h4>
<p>맥킨지 글로벌 연구소에 따르면, 현재 직업 활동의 약 60%에서 최소 30%의 업무가 AI로 자동화 가능합니다. 그러나 완전히 자동화 가능한 직업은 전체의 5% 미만입니다. 이는 대부분의 직업이 사라지는 것이 아니라 변화한다는 것을 의미합니다.</p>
    `
  },
  {
    id: 1102,
    chapter_id: 11,
    title: '11.2 AI가 대체하는 직업',
    sort_order: 2,
    content: `
<h3>자동화 위험이 높은 직업</h3>
<p>AI와 자동화 기술의 발전으로 특정 유형의 직업은 상당 부분 자동화될 가능성이 높습니다. 어떤 직업이 위험한지 이해하고, 그에 따라 적절히 준비하는 것이 중요합니다.</p>

<h3>자동화 취약 업무의 특성</h3>
<div class="info-box">
<strong>자동화되기 쉬운 업무의 4가지 특성</strong><br/>
<ol>
<li><strong>반복적(Repetitive)</strong>: 동일한 작업을 반복 수행</li>
<li><strong>규칙적(Rule-based)</strong>: 명확한 규칙에 따라 처리</li>
<li><strong>예측 가능(Predictable)</strong>: 작업 환경과 결과가 예측 가능</li>
<li><strong>데이터 집약적(Data-intensive)</strong>: 대량의 데이터 처리 중심</li>
</ol>
</div>

<h3>직업군별 자동화 위험도</h3>
<table>
<thead>
<tr><th>직업군</th><th>자동화 위험도</th><th>영향받는 업무</th><th>변화 방향</th></tr>
</thead>
<tbody>
<tr><td>제조업 생산직</td><td>매우 높음</td><td>조립, 검수, 포장</td><td>로봇 감독, 품질 관리자로 전환</td></tr>
<tr><td>사무 행정직</td><td>높음</td><td>데이터 입력, 문서 처리, 일정 관리</td><td>전략 기획, 커뮤니케이션 중심으로 변화</td></tr>
<tr><td>금융 사무직</td><td>높음</td><td>회계 처리, 대출 심사, 보험 심사</td><td>컨설팅, 리스크 관리로 고도화</td></tr>
<tr><td>운송/물류</td><td>높음</td><td>화물 분류, 재고 관리, 경로 최적화</td><td>자율주행 관리, 물류 전략 수립</td></tr>
<tr><td>고객 서비스</td><td>중간~높음</td><td>FAQ 응대, 주문 처리, 기본 상담</td><td>복잡한 문제 해결, 감정 노동 중심</td></tr>
<tr><td>번역/통역</td><td>중간</td><td>일반 문서 번역, 자막 생성</td><td>고급 통번역, 문화적 맥락 해석</td></tr>
</tbody>
</table>

<h3>WEF 보고서의 주요 전망</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>빠르게 감소하는 직업</h4>
<ul>
<li>데이터 입력 사무원</li>
<li>경리 및 급여 관리 사무원</li>
<li>은행 창구 직원</li>
<li>우체국 직원</li>
<li>출납원 및 매표원</li>
<li>비서 및 행정 보조원</li>
</ul>
</div>
<div class="compare-item">
<h4>상대적으로 안전한 직업</h4>
<ul>
<li>돌봄 및 간호 전문가</li>
<li>교사 및 교육 전문가</li>
<li>사회복지사</li>
<li>예술가 및 공연 예술가</li>
<li>심리상담사</li>
<li>연구 과학자</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>중요한 시각: 직업이 아닌 업무가 대체된다</strong><br/>
자동화는 '직업' 단위가 아니라 '업무(task)' 단위로 발생합니다. 예를 들어, 의사라는 직업이 사라지는 것이 아니라, 영상 판독이나 데이터 분석 같은 특정 업무가 AI로 자동화되는 것입니다. 따라서 자신의 직업에서 AI로 대체될 수 있는 업무와 인간만이 할 수 있는 업무를 구분하여 역량을 개발하는 것이 핵심 전략입니다.
</div>

<h4>생성형 AI의 영향</h4>
<p>ChatGPT 등 생성형 AI의 등장으로 지식 노동(화이트칼라) 직업도 자동화 위험에 노출되었습니다. 글쓰기, 코딩, 디자인, 번역 등 이전에는 안전하다고 여겨졌던 창의적 업무도 AI의 영향을 받고 있어, 모든 직업군에서의 적응이 필요해졌습니다.</p>
    `
  },
  {
    id: 1103,
    chapter_id: 11,
    title: '11.3 AI가 만드는 새로운 직업',
    sort_order: 3,
    content: `
<h3>AI 시대의 신직업</h3>
<p>AI 기술의 발전은 기존 직업을 변화시키는 동시에, 이전에는 존재하지 않았던 완전히 새로운 직업을 만들어내고 있습니다. 이러한 신직업은 AI 기술의 개발, 운영, 관리, 윤리적 활용 등 다양한 영역에서 등장하고 있습니다.</p>

<h3>AI 관련 신직업 분류</h3>
<table>
<thead>
<tr><th>분류</th><th>직업명</th><th>주요 역할</th><th>필요 역량</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">AI 기술 개발</td><td>AI/ML 엔지니어</td><td>AI 모델 설계, 학습, 배포</td><td>프로그래밍, 수학, 머신러닝</td></tr>
<tr><td>데이터 사이언티스트</td><td>데이터 분석, 모델링, 인사이트 도출</td><td>통계, 프로그래밍, 도메인 지식</td></tr>
<tr><td>MLOps 엔지니어</td><td>AI 모델의 운영 및 자동화 관리</td><td>DevOps, 클라우드, ML 파이프라인</td></tr>
<tr><td rowspan="3">AI 활용/운영</td><td>프롬프트 엔지니어</td><td>AI에 최적의 지시를 설계</td><td>언어 능력, 논리적 사고, AI 이해</td></tr>
<tr><td>AI 트레이너</td><td>AI 모델의 학습 데이터 생성 및 품질 관리</td><td>도메인 전문성, 데이터 라벨링</td></tr>
<tr><td>AI 제품 매니저</td><td>AI 기반 제품/서비스 기획 및 관리</td><td>기술 이해, 비즈니스 감각, UX</td></tr>
<tr><td rowspan="3">AI 거버넌스</td><td>AI 윤리 전문가</td><td>AI의 윤리적 개발과 사용 감독</td><td>윤리학, 법학, 기술 이해</td></tr>
<tr><td>AI 감사관</td><td>AI 시스템의 편향, 공정성, 안전성 검사</td><td>통계, 법규, 기술 감사</td></tr>
<tr><td>AI 정책 분석가</td><td>AI 관련 법규 분석 및 정책 제안</td><td>정책학, 기술 이해, 국제 관계</td></tr>
</tbody>
</table>

<h3>주목할 신직업 상세</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>프롬프트 엔지니어</h4>
<p>생성형 AI에게 최적의 결과를 이끌어내기 위한 프롬프트(지시문)를 설계하는 전문가입니다.</p>
<ul>
<li>AI의 능력과 한계를 깊이 이해</li>
<li>체계적인 프롬프트 설계 방법론 활용</li>
<li>다양한 분야(마케팅, 교육, 법률 등)에 특화</li>
<li>연봉: 해외 기준 $100K~$300K 수준</li>
</ul>
</div>
<div class="compare-item">
<h4>AI 윤리 전문가</h4>
<p>AI 시스템이 윤리적으로 개발되고 사용되도록 감독하고 가이드라인을 제시하는 전문가입니다.</p>
<ul>
<li>AI 편향과 차별 방지 전략 수립</li>
<li>AI 윤리 정책 및 가이드라인 개발</li>
<li>AI 영향 평가(Impact Assessment) 수행</li>
<li>철학, 법학, 기술의 융합 역량 필요</li>
</ul>
</div>
</div>

<h3>AI 시대 직업의 성장 추세</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>데이터 관련</strong><br/>데이터 엔지니어<br/>데이터 분석가<br/>데이터 아키텍트</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 개발</strong><br/>AI 엔지니어<br/>NLP 전문가<br/>컴퓨터 비전 전문가</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 운영</strong><br/>MLOps 엔지니어<br/>AI 인프라 관리자<br/>AI QA 엔지니어</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 거버넌스</strong><br/>AI 윤리 전문가<br/>AI 감사관<br/>AI 법률 전문가</div>
</div>

<div class="info-box">
<strong>융합형 인재의 부상</strong><br/>
AI 시대에는 순수 기술 전문가보다 AI 기술과 특정 도메인(의료, 법률, 교육, 금융 등)을 결합한 '융합형 인재'의 수요가 빠르게 증가하고 있습니다. 예를 들어, 의료 AI 전문가(의학 + AI), 법률 AI 전문가(법학 + AI), 교육 AI 전문가(교육학 + AI) 등이 대표적입니다. 자신의 전문 분야에 AI 역량을 더하는 것이 가장 효과적인 커리어 전략이 될 수 있습니다.
</div>
    `
  },
  {
    id: 1104,
    chapter_id: 11,
    title: '11.4 AI 시대 필수 역량',
    sort_order: 4,
    content: `
<h3>AI 시대에 필요한 핵심 역량</h3>
<p>AI가 점점 더 많은 업무를 수행하게 되면서, 인간만이 가진 고유한 능력의 가치가 더욱 높아지고 있습니다. AI 시대에 성공하기 위해서는 기술적 역량과 인간적 역량의 균형 잡힌 개발이 필요합니다.</p>

<h3>AI 시대 역량 프레임워크</h3>
<table>
<thead>
<tr><th>역량 분류</th><th>세부 역량</th><th>설명</th><th>중요도</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">디지털 역량</td><td>AI 리터러시</td><td>AI의 원리, 활용법, 한계를 이해하고 활용하는 능력</td><td>필수</td></tr>
<tr><td>데이터 리터러시</td><td>데이터를 읽고, 분석하고, 활용하는 능력</td><td>필수</td></tr>
<tr><td>디지털 도구 활용</td><td>다양한 디지털 도구를 효과적으로 사용하는 능력</td><td>필수</td></tr>
<tr><td rowspan="3">인지적 역량</td><td>비판적 사고</td><td>정보와 주장을 논리적으로 평가하고 판단하는 능력</td><td>매우 높음</td></tr>
<tr><td>창의적 사고</td><td>새로운 아이디어와 해결책을 만들어내는 능력</td><td>매우 높음</td></tr>
<tr><td>복잡한 문제 해결</td><td>다양한 요소가 얽힌 문제를 체계적으로 해결하는 능력</td><td>매우 높음</td></tr>
<tr><td rowspan="3">사회적 역량</td><td>소통과 협업</td><td>효과적으로 의사소통하고 팀에서 협력하는 능력</td><td>매우 높음</td></tr>
<tr><td>감성 지능</td><td>자신과 타인의 감정을 이해하고 관리하는 능력</td><td>높음</td></tr>
<tr><td>리더십</td><td>비전을 제시하고 구성원을 이끄는 능력</td><td>높음</td></tr>
</tbody>
</table>

<h3>AI가 대체하기 어려운 인간 고유 능력</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>창의성과 상상력</h4>
<ul>
<li>완전히 새로운 개념과 아이디어 창출</li>
<li>예술적 표현과 미적 감각</li>
<li>혁신적 문제 해결 방법 발상</li>
<li>AI가 모방은 가능하지만 진정한 창의성과는 차이</li>
</ul>
</div>
<div class="compare-item">
<h4>공감과 감성 지능</h4>
<ul>
<li>타인의 감정을 진정으로 이해하고 공감</li>
<li>복잡한 인간관계에서의 갈등 해결</li>
<li>상황에 맞는 적절한 감정적 반응</li>
<li>돌봄, 상담, 교육에서의 인간적 유대</li>
</ul>
</div>
<div class="compare-item">
<h4>윤리적 판단력</h4>
<ul>
<li>도덕적 딜레마에 대한 가치 판단</li>
<li>사회적 맥락을 고려한 결정</li>
<li>공정성과 정의에 대한 감각</li>
<li>AI는 규칙을 따를 뿐 진정한 윤리적 판단 불가</li>
</ul>
</div>
</div>

<h3>평생 학습의 중요성</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>인식</strong><br/>변화하는 환경과<br/>필요 역량 파악</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>학습</strong><br/>온라인/오프라인<br/>다양한 학습 경로</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>적용</strong><br/>학습한 내용을<br/>업무에 실천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>성찰</strong><br/>결과를 평가하고<br/>다음 학습 계획</div>
</div>

<div class="info-box">
<strong>T자형 인재에서 π자형 인재로</strong><br/>
과거에는 하나의 깊은 전문성과 넓은 일반 지식을 가진 'T자형 인재'가 이상적이었습니다. AI 시대에는 여기에 AI 활용 능력이라는 두 번째 깊이가 추가된 'π(파이)자형 인재'가 요구됩니다. 자신의 전문 분야(첫 번째 기둥)에 AI 역량(두 번째 기둥)을 더하고, 다양한 분야에 대한 폭넓은 이해(가로 막대)를 갖추는 것이 AI 시대의 이상적인 인재상입니다.
</div>
    `
  },
  {
    id: 1105,
    chapter_id: 11,
    title: '11.5 업무에서의 AI 활용',
    sort_order: 5,
    content: `
<h3>업무 현장의 AI 도구</h3>
<p>AI는 이미 다양한 업무 영역에서 생산성을 높이고 업무 방식을 혁신하고 있습니다. 일정 관리부터 글쓰기, 데이터 분석, 고객 응대까지, AI 도구를 효과적으로 활용하면 업무 효율을 크게 향상시킬 수 있습니다.</p>

<h3>업무 영역별 AI 활용 사례</h3>
<table>
<thead>
<tr><th>업무 영역</th><th>AI 활용 사례</th><th>대표 도구</th><th>효과</th></tr>
</thead>
<tbody>
<tr><td>문서 작성</td><td>보고서 초안 작성, 이메일 작성, 회의록 정리</td><td>ChatGPT, Claude, Copilot</td><td>작성 시간 50~70% 단축</td></tr>
<tr><td>데이터 분석</td><td>데이터 정리, 패턴 발견, 시각화, 예측</td><td>Copilot in Excel, ChatGPT 코드 분석</td><td>분석 정확도 및 속도 향상</td></tr>
<tr><td>일정 관리</td><td>자동 일정 조정, 우선순위 설정, 리마인더</td><td>Microsoft Copilot, Google AI</td><td>시간 관리 효율성 증가</td></tr>
<tr><td>디자인</td><td>이미지 생성, 레이아웃 제안, 색상 추천</td><td>Midjourney, DALL-E, Canva AI</td><td>디자인 반복 시간 단축</td></tr>
<tr><td>프로그래밍</td><td>코드 생성, 디버깅, 코드 리뷰, 문서화</td><td>GitHub Copilot, Cursor, Claude</td><td>개발 생산성 30~50% 향상</td></tr>
<tr><td>고객 서비스</td><td>자동 응답, 문의 분류, 감정 분석</td><td>AI 챗봇, 감성 분석 도구</td><td>응답 시간 대폭 단축</td></tr>
<tr><td>마케팅</td><td>타겟팅, 카피 생성, A/B 테스트, 트렌드 분석</td><td>Jasper, Copy.ai, 분석 도구</td><td>마케팅 ROI 개선</td></tr>
</tbody>
</table>

<h3>효과적인 AI 활용 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI 활용이 효과적인 업무</h4>
<ul>
<li>대량의 정보를 빠르게 정리하고 요약하는 업무</li>
<li>반복적인 패턴이 있는 업무</li>
<li>초안 작성이나 아이디어 브레인스토밍</li>
<li>데이터 분석과 시각화</li>
<li>번역, 교정, 형식 변환</li>
</ul>
</div>
<div class="compare-item">
<h4>인간이 직접 해야 하는 업무</h4>
<ul>
<li>최종 의사결정과 판단</li>
<li>인간관계와 팀 협업</li>
<li>전략적 기획과 비전 수립</li>
<li>감정적 공감이 필요한 고객 응대</li>
<li>윤리적 판단이 필요한 업무</li>
</ul>
</div>
</div>

<h3>업무 AI 활용 워크플로우</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1. 업무 파악</strong><br/>AI에 적합한<br/>업무 식별</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2. 도구 선택</strong><br/>목적에 맞는<br/>AI 도구 선택</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3. 프롬프트 작성</strong><br/>명확하고 구체적인<br/>지시 작성</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4. 검토 및 수정</strong><br/>AI 결과를<br/>비판적으로 검토</div>
</div>

<div class="info-box warning">
<strong>업무 AI 활용 시 주의사항</strong><br/>
<ul>
<li>회사의 AI 사용 정책을 반드시 확인하고 준수하세요.</li>
<li>기밀 정보나 고객 개인정보를 외부 AI 서비스에 입력하지 마세요.</li>
<li>AI 결과물을 무비판적으로 사용하지 말고, 반드시 검토 후 활용하세요.</li>
<li>AI가 생성한 코드나 문서는 반드시 사람이 검증해야 합니다.</li>
</ul>
</div>
    `
  },
  {
    id: 1106,
    chapter_id: 11,
    title: '11.6 일상생활의 AI',
    sort_order: 6,
    content: `
<h3>생활 속 AI 기술</h3>
<p>AI는 이미 우리의 일상생활 깊숙이 들어와 있습니다. 아침에 일어나서 잠들기까지, 우리는 수많은 AI 기술의 도움을 받고 있습니다. 많은 경우 AI가 작동하고 있다는 사실을 인식하지 못할 정도로 자연스럽게 스며들어 있습니다.</p>

<h3>일상 영역별 AI 활용</h3>
<table>
<thead>
<tr><th>영역</th><th>AI 활용 사례</th><th>활용 기술</th></tr>
</thead>
<tbody>
<tr><td>스마트폰</td><td>음성 비서(시리, 빅스비), 얼굴 인식 잠금, 사진 보정, 키보드 자동 완성</td><td>NLP, 컴퓨터 비전, 예측 모델</td></tr>
<tr><td>스마트 홈</td><td>AI 스피커, 스마트 온도 조절, 로봇 청소기, 스마트 조명</td><td>IoT, 음성 인식, 학습 알고리즘</td></tr>
<tr><td>엔터테인먼트</td><td>넷플릭스/유튜브 추천, 음악 추천, AI 게임 NPC, 콘텐츠 생성</td><td>추천 알고리즘, 강화학습</td></tr>
<tr><td>건강/웰니스</td><td>스마트워치 건강 모니터링, 운동 추천, 수면 분석, 식단 관리</td><td>센서 데이터 분석, 패턴 인식</td></tr>
<tr><td>이동/교통</td><td>내비게이션 경로 최적화, 실시간 교통 예측, 카풀 매칭</td><td>경로 최적화, 수요 예측</td></tr>
<tr><td>쇼핑</td><td>개인화 추천, 가격 비교, 가상 피팅, 챗봇 상담</td><td>추천 시스템, 컴퓨터 비전</td></tr>
<tr><td>금융</td><td>자동 투자(로보어드바이저), 이상 거래 탐지, 신용 평가</td><td>예측 모델, 이상 탐지</td></tr>
</tbody>
</table>

<h3>하루 일과 속의 AI</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>아침</strong><br/>AI 알람<br/>날씨 예측<br/>뉴스 맞춤 추천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>출퇴근</strong><br/>내비게이션 AI<br/>실시간 교통 분석<br/>자율주행 기능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>일상</strong><br/>번역 AI<br/>사진/영상 편집<br/>AI 쇼핑 추천</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>저녁</strong><br/>콘텐츠 추천<br/>스마트 홈 제어<br/>수면 분석</div>
</div>

<h3>AI와 건강 관리</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인 건강 모니터링</h4>
<ul>
<li>스마트워치의 심박수, 혈중 산소 모니터링</li>
<li>수면 패턴 분석 및 수면 품질 개선 조언</li>
<li>운동량 추적 및 맞춤형 운동 프로그램</li>
<li>이상 징후 조기 감지 및 알림</li>
</ul>
</div>
<div class="compare-item">
<h4>의료 AI 서비스</h4>
<ul>
<li>AI 기반 증상 체커(초기 자가 진단)</li>
<li>피부 질환 AI 분석 앱</li>
<li>멘탈 헬스 AI 챗봇 상담</li>
<li>약물 상호작용 확인 앱</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>AI 추천의 필터 버블</strong><br/>
AI 추천 시스템은 사용자의 취향에 맞는 콘텐츠를 제공하지만, 이로 인해 '필터 버블(Filter Bubble)' 현상이 발생할 수 있습니다. 자신과 비슷한 의견, 비슷한 콘텐츠만 반복적으로 노출되면서 시야가 좁아지는 현상입니다. AI 추천에만 의존하지 않고, 의도적으로 다양한 관점과 콘텐츠를 탐색하는 노력이 필요합니다.
</div>
    `
  },
  {
    id: 1107,
    chapter_id: 11,
    title: '11.7 AI와 교육의 변화',
    sort_order: 7,
    content: `
<h3>AI가 변혁하는 교육</h3>
<p>AI 기술은 교육 분야에 혁명적인 변화를 가져오고 있습니다. 개인화 학습, 지능형 튜터링 시스템, 자동 평가, 교육 데이터 분석 등을 통해 교육의 질과 접근성을 크게 향상시키고 있습니다.</p>

<h3>교육 AI의 주요 활용 영역</h3>
<table>
<thead>
<tr><th>영역</th><th>AI 활용 방식</th><th>효과</th><th>대표 사례</th></tr>
</thead>
<tbody>
<tr><td>개인화 학습<br/>(Personalized Learning)</td><td>학습자 수준에 맞는 맞춤형 콘텐츠 제공</td><td>학습 효과 향상, 이탈률 감소</td><td>Khan Academy (Khanmigo)</td></tr>
<tr><td>지능형 튜터링<br/>(Intelligent Tutoring)</td><td>AI가 1:1 개인 교사 역할 수행</td><td>즉각적 피드백, 24시간 학습 지원</td><td>Duolingo (AI 대화), ChatGPT</td></tr>
<tr><td>자동 평가<br/>(Auto Grading)</td><td>과제, 시험 답안 자동 채점 및 피드백</td><td>교사 부담 경감, 신속한 피드백</td><td>Gradescope, Turnitin</td></tr>
<tr><td>학습 분석<br/>(Learning Analytics)</td><td>학습 데이터 분석으로 위험 학생 조기 식별</td><td>중도 탈락 예방, 교육과정 개선</td><td>대학 LMS 분석 시스템</td></tr>
<tr><td>콘텐츠 생성<br/>(Content Creation)</td><td>교육 자료, 문제, 시뮬레이션 자동 생성</td><td>교사의 교재 개발 시간 절약</td><td>AI 기반 문제 생성 도구</td></tr>
</tbody>
</table>

<h3>AI 시대 교육 패러다임의 전환</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>전통적 교육</h4>
<ul>
<li>교사 중심의 일방향 강의</li>
<li>획일적인 교육과정과 진도</li>
<li>정기적인 시험으로 평가</li>
<li>교실 공간에 제한</li>
<li>지식 전달 중심</li>
</ul>
</div>
<div class="compare-item">
<h4>AI 기반 교육</h4>
<ul>
<li>학습자 중심의 상호작용적 학습</li>
<li>개인 맞춤형 학습 경로</li>
<li>실시간 형성 평가와 즉각 피드백</li>
<li>시간과 장소에 제한 없는 학습</li>
<li>역량 개발 및 문제 해결 중심</li>
</ul>
</div>
</div>

<h3>AI 교육 도구의 발전</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1세대</strong><br/>드릴 & 연습<br/>(반복 학습 소프트웨어)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2세대</strong><br/>적응형 학습<br/>(학습자 수준 조절)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3세대</strong><br/>지능형 튜터링<br/>(개인 맞춤 교수)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4세대</strong><br/>생성형 AI 튜터<br/>(자유로운 대화형 학습)</div>
</div>

<div class="info-box warning">
<strong>AI 교육 활용의 과제</strong><br/>
<ul>
<li><strong>학문적 정직성</strong>: AI를 이용한 과제 대필과 표절 문제</li>
<li><strong>비판적 사고 약화</strong>: AI에 지나치게 의존하면 스스로 사고하는 능력이 저하될 수 있음</li>
<li><strong>디지털 격차</strong>: AI 교육 도구에 대한 접근성 차이가 교육 불평등을 심화시킬 우려</li>
<li><strong>데이터 프라이버시</strong>: 미성년 학습자의 학습 데이터 보호 문제</li>
</ul>
</div>
    `
  },
  {
    id: 1108,
    chapter_id: 11,
    title: '11.8 AI 시대 커리어 전략',
    sort_order: 8,
    content: `
<h3>AI 시대의 커리어 전략</h3>
<p>AI 기술의 발전은 직업 세계를 근본적으로 변화시키고 있습니다. 이 변화 속에서 경쟁력을 유지하고 성장하기 위해서는 전략적인 커리어 설계가 필요합니다. 단순히 AI를 두려워하는 것이 아니라, AI와 함께 성장하는 방법을 찾아야 합니다.</p>

<h3>커리어 전략 5단계 모델</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1. 진단</strong><br/>현재 역량 파악<br/>AI 영향도 분석</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2. 탐색</strong><br/>미래 수요 파악<br/>기회 영역 탐색</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3. 학습</strong><br/>필요 역량 개발<br/>AI 도구 습득</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4. 적용</strong><br/>실무에 AI 활용<br/>포트폴리오 구축</div>
</div>

<h3>직업 유형별 커리어 전략</h3>
<table>
<thead>
<tr><th>현재 직업 유형</th><th>AI 영향도</th><th>추천 전략</th><th>구체적 행동</th></tr>
</thead>
<tbody>
<tr><td>반복적 사무직</td><td>높음</td><td>디지털 전환 역량 강화</td><td>AI 도구 활용법 학습, 분석/기획 역량 개발</td></tr>
<tr><td>전문 지식직</td><td>중간</td><td>AI와 전문성 결합</td><td>AI를 활용한 업무 효율화, 도메인 전문성 심화</td></tr>
<tr><td>창의적 직업</td><td>중간</td><td>AI 도구를 창작에 활용</td><td>AI 생성 도구 숙달, 인간 고유 창의성 강화</td></tr>
<tr><td>대인 서비스직</td><td>낮음</td><td>인간적 가치 극대화</td><td>공감 능력, 커뮤니케이션 역량 심화</td></tr>
<tr><td>기술직</td><td>변동적</td><td>최신 기술 트렌드 추적</td><td>AI/ML 관련 기술 학습, 융합 역량 개발</td></tr>
</tbody>
</table>

<h3>AI 시대 핵심 커리어 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI를 활용하는 사람이 되라</h4>
<ul>
<li>AI를 경쟁자가 아닌 협력 도구로 인식</li>
<li>"AI가 대체하는 것은 사람이 아니라, AI를 사용하는 사람이 AI를 사용하지 않는 사람을 대체한다"</li>
<li>자신의 분야에서 AI를 가장 잘 활용하는 전문가가 되기</li>
</ul>
</div>
<div class="compare-item">
<h4>평생 학습자가 되라</h4>
<ul>
<li>기술 변화 속도에 맞춰 지속적으로 학습</li>
<li>온라인 강좌, 부트캠프, 자기 학습 활용</li>
<li>실험하고 실패하며 배우는 자세</li>
<li>학습 커뮤니티 참여와 네트워킹</li>
</ul>
</div>
</div>

<h3>추천 학습 경로</h3>
<ol>
<li><strong>AI 기초 이해</strong>: AI 리터러시 과정 수강, AI 원리와 활용법 학습</li>
<li><strong>AI 도구 실습</strong>: ChatGPT, Claude 등 생성형 AI 도구를 업무에 실제 적용</li>
<li><strong>데이터 역량 강화</strong>: 엑셀 고급 활용, 기초 통계, 데이터 시각화 학습</li>
<li><strong>전문 분야 심화</strong>: 자신의 분야에서 AI를 활용하는 고급 스킬 개발</li>
<li><strong>포트폴리오 구축</strong>: AI를 활용한 프로젝트 결과물을 포트폴리오로 정리</li>
</ol>

<div class="info-box">
<strong>핵심 메시지</strong><br/>
AI 시대의 커리어 성공은 특정 기술을 아는 것이 아니라, 변화에 적응하고 지속적으로 학습하는 능력에 달려 있습니다. 가장 중요한 역량은 '배우는 법을 배우는 것(Learning to Learn)'입니다.
</div>
    `
  },
  {
    id: 1109,
    chapter_id: 11,
    title: '11.9 학습 정리',
    sort_order: 9,
    content: `
<h3>Chapter 11 학습 정리: 직장과 일상의 AI</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI는 직업 세계와 일상생활 모든 측면에서 깊은 변화를 가져오고 있습니다. 일부 직업은 자동화되지만 새로운 직업이 더 많이 생겨나며, AI 시대에는 디지털 역량과 인간 고유 역량의 균형 있는 개발이 핵심입니다. AI를 도구로 활용하며 평생 학습하는 자세가 성공의 열쇠입니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI와 직업 변화</td><td>업무 자동화, 업무 증강, 업무 창출의 세 가지 방향으로 변화가 진행됩니다. 직업 자체보다 '업무(task)' 단위의 변화가 핵심입니다.</td></tr>
<tr><td>대체되는 직업</td><td>반복적이고 규칙적이며 예측 가능한 업무가 많은 직업이 자동화 위험이 높습니다. 생성형 AI로 지식 노동도 영향을 받습니다.</td></tr>
<tr><td>새로운 직업</td><td>AI 기술 개발, AI 활용/운영, AI 거버넌스 분야에서 새로운 직업이 등장합니다. 융합형 인재의 수요가 급증합니다.</td></tr>
<tr><td>필수 역량</td><td>AI 리터러시, 비판적 사고, 창의성, 공감 능력, 평생 학습 역량이 핵심입니다. T자형에서 π자형 인재로의 전환이 필요합니다.</td></tr>
<tr><td>업무 AI 활용</td><td>문서 작성, 데이터 분석, 디자인, 코딩 등 다양한 업무에서 AI 도구를 활용할 수 있습니다. 보안과 검증이 중요합니다.</td></tr>
<tr><td>일상의 AI</td><td>스마트폰, 스마트 홈, 엔터테인먼트, 건강, 교통 등 일상 전반에 AI가 활용됩니다. 필터 버블에 주의해야 합니다.</td></tr>
<tr><td>교육의 변화</td><td>개인화 학습, AI 튜터, 자동 평가 등으로 교육 패러다임이 전환되고 있습니다. 학문적 정직성과 디지털 격차가 과제입니다.</td></tr>
<tr><td>커리어 전략</td><td>AI를 협력 도구로 활용하고, 평생 학습하며, 자신의 전문성에 AI 역량을 결합하는 것이 핵심 전략입니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>업무 재구성(Task Redesign)</strong>: AI 도입에 따라 직업 내 업무 구성을 재설계하는 것</li>
<li><strong>업무 증강(Augmentation)</strong>: AI가 인간의 능력을 보완하고 확장하는 형태의 활용</li>
<li><strong>프롬프트 엔지니어</strong>: AI에 최적의 지시를 설계하는 전문가</li>
<li><strong>융합형 인재</strong>: 특정 도메인 전문성과 AI 역량을 함께 갖춘 인재</li>
<li><strong>π자형 인재</strong>: 두 개의 깊은 전문성과 넓은 일반 지식을 갖춘 인재상</li>
<li><strong>필터 버블</strong>: AI 추천으로 자신과 비슷한 콘텐츠만 반복 노출되는 현상</li>
<li><strong>에듀테크(EdTech)</strong>: 교육과 기술의 결합, AI 기반 교육 기술</li>
<li><strong>적응형 학습</strong>: 학습자 수준에 맞게 콘텐츠가 자동 조절되는 학습 방식</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>세계경제포럼(WEF) - Future of Jobs Report</li>
<li>OECD - AI and the Future of Skills</li>
<li>맥킨지 글로벌 연구소 - Jobs Lost, Jobs Gained</li>
<li>한국고용정보원 - AI와 일자리 변화 보고서</li>
</ul>
    `
  },
  {
    id: 1110,
    chapter_id: 11,
    title: '11.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h3>Chapter 11 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 직장과 일상의 AI에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AI와 직업 변화</h4>
<div class="info-box">
<p>AI로 인한 직업 변화에 대한 설명으로 가장 <strong>적절한</strong> 것은?</p>
<ol type="a">
<li>AI는 모든 직업을 완전히 대체할 것이다</li>
<li>AI는 직업 자체보다 직업 내 개별 업무(task) 단위로 변화를 가져온다</li>
<li>AI는 제조업만 영향을 미치고 서비스업은 안전하다</li>
<li>AI로 인한 직업 변화는 아직 먼 미래의 이야기이다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 자동화는 '직업' 단위가 아니라 '업무(task)' 단위로 발생합니다. 대부분의 직업에서 일부 업무는 자동화되고, 다른 업무는 인간이 계속 수행합니다. 완전히 자동화 가능한 직업은 전체의 5% 미만입니다.</p>
</details>
</div>

<h4>문제 2. AI 시대 필수 역량</h4>
<div class="info-box">
<p>다음 중 AI 시대에 인간이 AI보다 우위를 가지는 역량으로 가장 적절하지 <strong>않은</strong> 것은?</p>
<ol type="a">
<li>공감 능력과 감성 지능</li>
<li>대량 데이터의 빠른 계산과 패턴 인식</li>
<li>창의적 사고와 상상력</li>
<li>윤리적 판단과 가치 기반 의사결정</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>대량 데이터의 빠른 계산과 패턴 인식은 AI가 인간보다 월등히 우수한 영역입니다. 반면 공감 능력, 창의적 사고, 윤리적 판단력은 인간만이 가진 고유한 역량으로, AI 시대에 더욱 가치가 높아집니다.</p>
</details>
</div>

<h4>문제 3. 업무 AI 활용</h4>
<div class="info-box">
<p>업무에서 AI를 활용할 때 주의해야 할 사항으로 <strong>올바르지 않은</strong> 것은?</p>
<ol type="a">
<li>회사의 AI 사용 정책을 확인하고 준수한다</li>
<li>AI 결과물을 반드시 검토한 후 활용한다</li>
<li>업무 효율을 위해 고객 개인정보를 AI에 입력하여 분석한다</li>
<li>AI가 생성한 코드나 문서는 사람이 검증한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>고객 개인정보나 회사 기밀 정보를 외부 AI 서비스에 입력하는 것은 정보 유출 위험이 있어 절대 해서는 안 됩니다. AI 활용 시 데이터 보안과 개인정보 보호를 항상 최우선으로 고려해야 합니다.</p>
</details>
</div>

<h4>문제 4. 일상의 AI</h4>
<div class="info-box">
<p>AI 추천 시스템으로 인해 사용자가 자신과 비슷한 의견과 콘텐츠에만 반복적으로 노출되는 현상을 무엇이라 하는가?</p>
<ol type="a">
<li>데이터 마이닝 (Data Mining)</li>
<li>필터 버블 (Filter Bubble)</li>
<li>정보 과부하 (Information Overload)</li>
<li>디지털 디톡스 (Digital Detox)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>필터 버블(Filter Bubble)은 AI 추천 알고리즘이 사용자의 기존 선호와 행동 패턴에 맞는 콘텐츠만 보여줌으로써, 다양한 관점과 정보로부터 차단되는 현상입니다. 엘리 파리저(Eli Pariser)가 2011년에 처음 제시한 개념입니다.</p>
</details>
</div>

<h4>문제 5. AI 시대 커리어 전략</h4>
<div class="info-box">
<p>다음 중 AI 시대의 커리어 전략으로 가장 효과적인 것은?</p>
<ol type="a">
<li>AI와 관련 없는 전통적인 직업만 고수한다</li>
<li>프로그래밍만 배우면 AI 시대에 충분히 경쟁할 수 있다</li>
<li>자신의 전문 분야에 AI 활용 역량을 결합하고 평생 학습한다</li>
<li>AI가 발전하면 일자리가 없어지므로 준비할 필요가 없다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI 시대의 가장 효과적인 커리어 전략은 자신의 전문 분야(도메인 전문성)에 AI 활용 역량을 결합하는 '융합형 인재'가 되는 것입니다. 동시에 기술 변화에 맞춰 지속적으로 학습하는 평생 학습 자세가 필수적입니다.</p>
</details>
</div>
    `
  }
];
