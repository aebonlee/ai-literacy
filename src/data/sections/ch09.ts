/**
 * Chapter 9: AI 안전과 신뢰성
 * AI 안전 개념, 위험 유형, XAI, 환각, 보안, 규제
 */
export const CH09_SECTIONS = [
  {
    id: 901,
    chapter_id: 9,
    title: '9.1 AI 안전의 개념',
    sort_order: 1,
    content: `
<h3>AI 안전(AI Safety)이란?</h3>
<p>AI 안전(AI Safety)은 인공지능 시스템이 의도한 대로 작동하면서 인간과 사회에 해를 끼치지 않도록 보장하는 연구 및 실천 분야입니다. AI 기술이 급격히 발전함에 따라, 이 기술이 가져올 수 있는 위험을 사전에 식별하고 예방하는 것이 매우 중요해지고 있습니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
AI 안전은 AI 시스템이 설계 목적에 부합하게 작동하고, 예상치 못한 부작용이나 위험을 최소화하며, 인간의 가치와 의도에 부합하도록 보장하는 모든 노력을 포괄합니다.
</div>

<h3>AI 안전이 중요한 이유</h3>
<ul>
<li><strong>사회적 영향력 확대</strong>: AI가 의료, 금융, 교통, 법률 등 중요한 의사결정에 활용되면서 오류의 파급력이 커지고 있습니다.</li>
<li><strong>자율성 증가</strong>: AI 시스템이 더 많은 자율적 판단을 내리게 되면서, 인간의 통제 범위를 벗어날 가능성이 있습니다.</li>
<li><strong>복잡성과 불투명성</strong>: 딥러닝 모델의 의사결정 과정은 매우 복잡하여 왜 그런 결과를 내었는지 설명하기 어렵습니다.</li>
<li><strong>대규모 배포</strong>: 하나의 AI 시스템이 수억 명의 사용자에게 동시에 영향을 미칠 수 있습니다.</li>
</ul>

<h3>AI 안전의 핵심 원칙</h3>
<table>
<thead>
<tr><th>원칙</th><th>설명</th><th>적용 사례</th></tr>
</thead>
<tbody>
<tr><td>정렬(Alignment)</td><td>AI의 목표가 인간의 의도와 일치</td><td>보상 함수 설계 시 인간 가치 반영</td></tr>
<tr><td>견고성(Robustness)</td><td>예상치 못한 상황에서도 안전하게 작동</td><td>자율주행차의 악천후 대응 능력</td></tr>
<tr><td>모니터링(Monitoring)</td><td>AI 시스템의 지속적인 감시 및 평가</td><td>실시간 성능 추적 대시보드</td></tr>
<tr><td>통제 가능성(Controllability)</td><td>필요시 인간이 AI를 중단하거나 수정 가능</td><td>긴급 정지 버튼, 수동 개입 메커니즘</td></tr>
<tr><td>투명성(Transparency)</td><td>AI의 의사결정 과정을 이해할 수 있음</td><td>설명 가능한 AI(XAI) 기술 적용</td></tr>
</tbody>
</table>

<h3>AI 안전 연구의 역사</h3>
<div class="flow-diagram">
<div class="flow-step">2014년<br/>닉 보스트롬<br/>《슈퍼인텔리전스》 출간</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2015년<br/>오픈AI 설립<br/>AI 안전 연구 본격화</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2023년<br/>영국 AI 안전 정상회의<br/>블레츨리 선언</div>
<div class="flow-arrow">→</div>
<div class="flow-step">2024년~<br/>각국 AI 안전 기관<br/>설립 및 규제 강화</div>
</div>
    `
  },
  {
    id: 902,
    chapter_id: 9,
    title: '9.2 AI 시스템의 위험 유형',
    sort_order: 2,
    content: `
<h3>AI 시스템이 초래할 수 있는 위험</h3>
<p>AI 시스템은 다양한 방식으로 위험을 초래할 수 있습니다. 이러한 위험을 체계적으로 분류하고 이해하는 것은 안전한 AI 개발과 활용의 첫걸음입니다.</p>

<h3>위험의 3대 분류</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>1. 오용(Misuse)</h4>
<p>AI 기술이 악의적인 목적으로 의도적으로 사용되는 경우입니다.</p>
<ul>
<li>딥페이크를 이용한 허위 정보 생성</li>
<li>AI 기반 사이버 공격 자동화</li>
<li>감시 및 프라이버시 침해</li>
<li>AI를 이용한 대규모 피싱 사기</li>
</ul>
</div>
<div class="compare-item">
<h4>2. 사고(Accidents)</h4>
<p>개발자의 의도와 달리 AI 시스템이 예상치 못한 행동을 하는 경우입니다.</p>
<ul>
<li>자율주행차 사고 (우버, 테슬라 사례)</li>
<li>의료 AI의 오진으로 인한 환자 위험</li>
<li>채용 AI의 의도치 않은 차별</li>
<li>추천 알고리즘의 극단주의 콘텐츠 확산</li>
</ul>
</div>
<div class="compare-item">
<h4>3. 정렬 문제(Alignment)</h4>
<p>AI의 목표와 인간의 진정한 의도가 불일치하는 경우입니다.</p>
<ul>
<li>보상 해킹: 목표 지표를 편법으로 최적화</li>
<li>목표 일반화 실패: 훈련 환경과 실제 환경의 차이</li>
<li>가치 정렬 문제: 인간의 복잡한 가치 체계 반영 어려움</li>
<li>수단-목적 전도: 중간 목표를 최종 목표로 착각</li>
</ul>
</div>
</div>

<h3>위험 수준별 분류</h3>
<table>
<thead>
<tr><th>위험 수준</th><th>특성</th><th>사례</th><th>대응 방안</th></tr>
</thead>
<tbody>
<tr><td>낮은 위험</td><td>일상적 불편, 쉽게 복구 가능</td><td>챗봇의 부정확한 응답</td><td>사용자 피드백, 정기 업데이트</td></tr>
<tr><td>중간 위험</td><td>경제적 손실, 차별 발생</td><td>신용 평가 AI의 편향</td><td>편향 감사, 규제 준수</td></tr>
<tr><td>높은 위험</td><td>생명/안전 위협, 대규모 영향</td><td>자율주행차 사고, 의료 오진</td><td>엄격한 인증, 인간 감독 필수</td></tr>
<tr><td>실존적 위험</td><td>인류 전체에 영향</td><td>초지능 AI의 통제 불능</td><td>국제 협력, 안전 연구 투자</td></tr>
</tbody>
</table>

<div class="info-box warning">
<strong>주의: 연쇄적 위험</strong><br/>
AI 위험은 단독으로 발생하기보다 연쇄적으로 확산되는 경향이 있습니다. 예를 들어, 데이터 편향(사고) → 차별적 결과(사회적 위험) → 신뢰 상실(경제적 위험)로 이어질 수 있습니다. 따라서 개별 위험뿐만 아니라 시스템 전체의 위험을 종합적으로 평가해야 합니다.
</div>

<h4>실제 사례: AI 위험이 현실화된 경우</h4>
<ol>
<li><strong>아마존 채용 AI (2018)</strong>: 과거 데이터의 성별 편향으로 여성 지원자를 체계적으로 불리하게 평가</li>
<li><strong>마이크로소프트 Tay (2016)</strong>: 소셜 미디어 챗봇이 악의적 사용자에 의해 혐오 발언을 학습</li>
<li><strong>COMPAS 재범 예측 (2016)</strong>: 형사 사법 AI가 흑인에게 불리한 예측을 보여 인종 차별 논란 발생</li>
</ol>
    `
  },
  {
    id: 903,
    chapter_id: 9,
    title: '9.3 설명 가능한 AI (XAI)',
    sort_order: 3,
    content: `
<h3>설명 가능한 AI(Explainable AI, XAI)</h3>
<p>설명 가능한 AI(XAI)는 AI 시스템의 의사결정 과정과 결과를 인간이 이해할 수 있도록 설명하는 기술과 방법론을 의미합니다. 딥러닝과 같은 복잡한 모델이 "블랙박스"로 작동하는 문제를 해결하기 위해 등장했습니다.</p>

<div class="info-box">
<strong>왜 XAI가 필요한가?</strong><br/>
AI가 "이 환자는 암일 확률이 95%입니다"라고 진단했을 때, 의사와 환자는 <em>왜</em> 그런 판단을 내렸는지 알 권리가 있습니다. XAI는 이 "왜?"에 답하는 기술입니다.
</div>

<h3>설명 가능성의 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>사전 설명 가능성 (Ante-hoc)</h4>
<p>모델 자체가 해석 가능하도록 설계하는 접근법</p>
<ul>
<li>결정 트리(Decision Tree)</li>
<li>선형 회귀(Linear Regression)</li>
<li>규칙 기반 시스템(Rule-based)</li>
<li>장점: 직관적 이해 가능</li>
<li>단점: 복잡한 패턴 학습 한계</li>
</ul>
</div>
<div class="compare-item">
<h4>사후 설명 가능성 (Post-hoc)</h4>
<p>이미 학습된 복잡한 모델을 사후에 해석하는 접근법</p>
<ul>
<li>LIME (Local Interpretable Model-agnostic Explanations)</li>
<li>SHAP (SHapley Additive exPlanations)</li>
<li>Grad-CAM (시각적 설명)</li>
<li>장점: 복잡한 모델에 적용 가능</li>
<li>단점: 근사적 설명, 완벽하지 않을 수 있음</li>
</ul>
</div>
</div>

<h3>주요 XAI 기법 비교</h3>
<table>
<thead>
<tr><th>기법</th><th>원리</th><th>적용 대상</th><th>출력 형태</th></tr>
</thead>
<tbody>
<tr><td>LIME</td><td>개별 예측 주변을 단순 모델로 근사</td><td>모든 모델</td><td>특성별 중요도</td></tr>
<tr><td>SHAP</td><td>게임 이론 기반 특성 기여도 계산</td><td>모든 모델</td><td>특성별 기여값</td></tr>
<tr><td>Grad-CAM</td><td>그래디언트를 활용한 시각적 히트맵</td><td>CNN 모델</td><td>히트맵 이미지</td></tr>
<tr><td>Attention Visualization</td><td>어텐션 가중치 시각화</td><td>트랜스포머 모델</td><td>토큰별 가중치</td></tr>
<tr><td>Feature Importance</td><td>특성의 전체적 중요도 순위</td><td>트리 기반 모델</td><td>중요도 막대 그래프</td></tr>
</tbody>
</table>

<h3>XAI의 적용 분야</h3>
<div class="flow-diagram">
<div class="flow-step">의료<br/>진단 근거 제시<br/>의사 의사결정 지원</div>
<div class="flow-arrow">→</div>
<div class="flow-step">금융<br/>대출 거부 사유 설명<br/>규제 준수</div>
<div class="flow-arrow">→</div>
<div class="flow-step">법률<br/>판결 근거 투명화<br/>공정성 검증</div>
<div class="flow-arrow">→</div>
<div class="flow-step">자율주행<br/>사고 원인 분석<br/>책임 규명</div>
</div>

<h4>XAI와 규제</h4>
<p>EU의 GDPR(일반 데이터 보호 규정)은 "설명을 요구할 권리(Right to Explanation)"를 규정하고 있으며, 자동화된 의사결정에 대해 개인이 그 논리와 결과에 대한 설명을 요구할 수 있습니다. 이러한 법적 요구사항은 XAI 기술의 발전을 가속화하고 있습니다.</p>
    `
  },
  {
    id: 904,
    chapter_id: 9,
    title: '9.4 AI 환각과 오류',
    sort_order: 4,
    content: `
<h3>AI 환각(Hallucination)이란?</h3>
<p>AI 환각(Hallucination)은 AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신 있게 생성하는 현상을 말합니다. 특히 대규모 언어 모델(LLM)에서 빈번하게 발생하며, AI 신뢰성의 핵심 과제 중 하나입니다.</p>

<div class="info-box warning">
<strong>위험성 경고</strong><br/>
AI 환각은 단순한 오류가 아닙니다. AI가 완전히 그럴듯한 문장으로 거짓 정보를 제공하기 때문에, 사용자가 이를 사실로 받아들일 위험이 매우 높습니다. 특히 의료, 법률, 학술 분야에서 치명적인 결과를 초래할 수 있습니다.
</div>

<h3>AI 환각의 유형</h3>
<table>
<thead>
<tr><th>유형</th><th>설명</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>사실적 환각<br/>(Factual Hallucination)</td><td>존재하지 않는 사실을 생성</td><td>존재하지 않는 연구 논문이나 통계를 인용</td></tr>
<tr><td>충실도 환각<br/>(Faithfulness Hallucination)</td><td>입력 정보와 모순되는 출력 생성</td><td>원문 요약 시 원래 없던 내용 추가</td></tr>
<tr><td>추론 환각<br/>(Reasoning Hallucination)</td><td>논리적으로 잘못된 추론 수행</td><td>수학 문제에서 중간 과정의 논리적 오류</td></tr>
<tr><td>출처 환각<br/>(Source Hallucination)</td><td>존재하지 않는 출처를 제시</td><td>가짜 URL, 허위 저자명 생성</td></tr>
</tbody>
</table>

<h3>AI 환각의 원인</h3>
<ol>
<li><strong>훈련 데이터의 한계</strong>: 모델이 학습한 데이터에 오류나 편향이 포함되어 있을 수 있습니다.</li>
<li><strong>확률적 생성 방식</strong>: LLM은 다음 토큰의 확률을 기반으로 텍스트를 생성하므로, 통계적으로 그럴듯하지만 사실이 아닌 내용을 만들어냅니다.</li>
<li><strong>지식의 단절</strong>: 학습 데이터의 마감 시점 이후 정보를 알지 못하지만, 추측으로 답변을 생성합니다.</li>
<li><strong>일반화의 과잉</strong>: 학습한 패턴을 부적절하게 새로운 상황에 적용합니다.</li>
</ol>

<h3>환각 완화 전략</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 대응</h4>
<ul>
<li><strong>RAG(검색 증강 생성)</strong>: 외부 데이터베이스에서 관련 정보를 검색하여 답변 근거로 활용</li>
<li><strong>사실 검증 레이어</strong>: 생성된 답변을 자동으로 팩트체크하는 추가 모델 적용</li>
<li><strong>불확실성 표현</strong>: 모델이 확신이 없을 때 이를 명시적으로 표시</li>
<li><strong>RLHF</strong>: 인간 피드백을 통한 강화학습으로 환각 줄이기</li>
</ul>
</div>
<div class="compare-item">
<h4>사용자 대응</h4>
<ul>
<li><strong>교차 검증</strong>: AI 답변을 다른 신뢰할 수 있는 출처와 비교 확인</li>
<li><strong>출처 요청</strong>: AI에게 답변의 근거나 출처를 명시적으로 요청</li>
<li><strong>비판적 사고</strong>: AI 답변을 무비판적으로 수용하지 않는 습관</li>
<li><strong>전문가 검토</strong>: 중요한 의사결정에는 반드시 전문가 확인</li>
</ul>
</div>
</div>

<h4>실제 사례: 환각으로 인한 문제</h4>
<p>2023년 미국에서 한 변호사가 ChatGPT가 생성한 가짜 판례를 법정 서류에 인용하여 제재를 받은 사건이 화제가 되었습니다. 이 사건은 AI 환각의 위험성과 AI 결과물에 대한 인간의 검증 책임을 보여주는 대표적인 사례입니다.</p>
    `
  },
  {
    id: 905,
    chapter_id: 9,
    title: '9.5 AI 보안 위협',
    sort_order: 5,
    content: `
<h3>AI 시스템을 노리는 보안 위협</h3>
<p>AI 시스템은 전통적인 소프트웨어와는 다른 고유한 보안 취약점을 가지고 있습니다. 공격자들은 AI의 학습 과정, 입력 처리 방식, 의사결정 메커니즘을 악용하여 다양한 공격을 시도할 수 있습니다.</p>

<h3>주요 AI 보안 위협 유형</h3>
<table>
<thead>
<tr><th>공격 유형</th><th>설명</th><th>위험도</th><th>방어 난이도</th></tr>
</thead>
<tbody>
<tr><td>적대적 공격<br/>(Adversarial Attack)</td><td>입력 데이터에 미세한 변형을 가해 AI를 속임</td><td>높음</td><td>높음</td></tr>
<tr><td>프롬프트 인젝션<br/>(Prompt Injection)</td><td>악의적인 프롬프트로 AI의 안전장치를 우회</td><td>높음</td><td>중간</td></tr>
<tr><td>데이터 포이즈닝<br/>(Data Poisoning)</td><td>훈련 데이터를 오염시켜 모델 행동을 조작</td><td>매우 높음</td><td>높음</td></tr>
<tr><td>모델 추출<br/>(Model Extraction)</td><td>반복 쿼리를 통해 AI 모델을 복제</td><td>중간</td><td>중간</td></tr>
<tr><td>멤버십 추론<br/>(Membership Inference)</td><td>특정 데이터가 훈련에 사용되었는지 추론</td><td>중간</td><td>높음</td></tr>
</tbody>
</table>

<h3>주요 공격 상세 분석</h3>

<h4>1. 적대적 공격 (Adversarial Attack)</h4>
<p>인간의 눈에는 차이가 없지만 AI가 완전히 다르게 인식하도록 입력을 조작하는 공격입니다.</p>
<div class="info-box">
<strong>사례</strong>: 정지 표지판에 특정 스티커를 붙이면 자율주행차의 AI가 이를 속도 제한 표지판으로 잘못 인식하는 실험이 2018년에 보고되었습니다. 육안으로는 분명한 정지 표지판이지만, AI의 컴퓨터 비전 시스템은 쉽게 속을 수 있습니다.
</div>

<h4>2. 프롬프트 인젝션 (Prompt Injection)</h4>
<p>LLM 기반 서비스에서 사용자가 악의적인 지시를 입력하여 AI의 보안 가드레일을 우회하는 공격입니다.</p>
<ul>
<li><strong>직접 인젝션</strong>: 사용자가 직접 악의적 프롬프트를 입력</li>
<li><strong>간접 인젝션</strong>: 웹페이지나 문서에 숨겨진 지시를 AI가 읽도록 유도</li>
<li><strong>탈옥(Jailbreaking)</strong>: 역할극이나 가상 시나리오를 통해 안전장치를 우회</li>
</ul>

<h4>3. 데이터 포이즈닝 (Data Poisoning)</h4>
<p>AI 모델의 학습 데이터에 악의적인 데이터를 주입하여 모델의 행동을 근본적으로 조작하는 공격입니다.</p>
<div class="flow-diagram">
<div class="flow-step">공격자가<br/>오염된 데이터 삽입</div>
<div class="flow-arrow">→</div>
<div class="flow-step">모델이<br/>오염된 데이터로 학습</div>
<div class="flow-arrow">→</div>
<div class="flow-step">특정 조건에서<br/>조작된 결과 출력</div>
<div class="flow-arrow">→</div>
<div class="flow-step">정상 데이터에서는<br/>정상 작동 (탐지 어려움)</div>
</div>

<h3>AI 보안 방어 전략</h3>
<ul>
<li><strong>적대적 훈련(Adversarial Training)</strong>: 적대적 사례를 포함하여 모델을 훈련</li>
<li><strong>입력 검증(Input Validation)</strong>: 비정상적인 입력을 탐지하고 차단</li>
<li><strong>모델 모니터링</strong>: 운영 중인 모델의 행동을 실시간 감시</li>
<li><strong>차등 프라이버시(Differential Privacy)</strong>: 개별 데이터의 영향을 수학적으로 제한</li>
<li><strong>레드 팀(Red Team) 테스트</strong>: 전문 보안팀이 공격자 관점에서 취약점 탐색</li>
</ul>
    `
  },
  {
    id: 906,
    chapter_id: 9,
    title: '9.6 신뢰할 수 있는 AI 구축',
    sort_order: 6,
    content: `
<h3>신뢰할 수 있는 AI(Trustworthy AI)</h3>
<p>신뢰할 수 있는 AI는 기술적으로 견고하고, 윤리적으로 올바르며, 법적으로 적합한 AI 시스템을 의미합니다. EU의 고수준 전문가 그룹(HLEG)은 2019년 "신뢰할 수 있는 AI를 위한 윤리 지침"을 발표하여 이 개념을 체계화했습니다.</p>

<h3>신뢰할 수 있는 AI의 7대 요건 (EU HLEG)</h3>
<table>
<thead>
<tr><th>요건</th><th>설명</th><th>실천 방법</th></tr>
</thead>
<tbody>
<tr><td>인간의 주체성과 감독</td><td>인간이 AI 시스템을 통제할 수 있어야 함</td><td>인간-루프(Human-in-the-loop) 설계</td></tr>
<tr><td>기술적 견고성과 안전</td><td>예상치 못한 상황에서도 안정적으로 작동</td><td>테스트, 검증, 폴백(fallback) 계획</td></tr>
<tr><td>프라이버시와 데이터 거버넌스</td><td>개인정보 보호와 데이터 품질 보장</td><td>GDPR 준수, 데이터 최소화 원칙</td></tr>
<tr><td>투명성</td><td>AI의 기능과 제약 사항을 명확히 전달</td><td>XAI 기술, 사용자 공지, 문서화</td></tr>
<tr><td>다양성, 비차별, 공정성</td><td>편향을 방지하고 모든 사용자를 공정하게 대우</td><td>편향 테스트, 다양한 데이터 확보</td></tr>
<tr><td>사회적, 환경적 웰빙</td><td>사회와 환경에 긍정적 영향</td><td>환경 영향 평가, 사회적 가치 반영</td></tr>
<tr><td>책임성</td><td>AI 시스템의 결과에 대한 책임을 질 수 있음</td><td>감사 추적, 영향 평가, 보고 체계</td></tr>
</tbody>
</table>

<h3>견고한 AI 시스템 구축 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">요구사항 분석<br/>위험 평가<br/>윤리 검토</div>
<div class="flow-arrow">→</div>
<div class="flow-step">데이터 수집<br/>품질 검증<br/>편향 점검</div>
<div class="flow-arrow">→</div>
<div class="flow-step">모델 개발<br/>안전 테스트<br/>성능 검증</div>
<div class="flow-arrow">→</div>
<div class="flow-step">배포 및 모니터링<br/>피드백 수집<br/>지속적 개선</div>
</div>

<h3>신뢰성 확보를 위한 핵심 기술</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>모니터링 시스템</h4>
<ul>
<li><strong>성능 모니터링</strong>: 정확도, 지연 시간, 처리량 추적</li>
<li><strong>드리프트 탐지</strong>: 데이터 분포나 모델 성능의 변화 감지</li>
<li><strong>이상 탐지</strong>: 비정상적인 입출력 패턴 식별</li>
<li><strong>공정성 모니터링</strong>: 그룹 간 결과 차이 지속적 측정</li>
</ul>
</div>
<div class="compare-item">
<h4>테스트와 검증</h4>
<ul>
<li><strong>스트레스 테스트</strong>: 극단적 상황에서의 시스템 안정성 확인</li>
<li><strong>A/B 테스트</strong>: 새 모델과 기존 모델의 비교 평가</li>
<li><strong>레드 팀 테스트</strong>: 보안 취약점과 안전 문제 사전 발견</li>
<li><strong>사용자 테스트</strong>: 실제 사용 환경에서의 문제점 파악</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>모범 사례: 모델 카드(Model Card)</strong><br/>
구글이 제안한 모델 카드는 AI 모델의 성능, 한계, 의도된 사용 범위, 윤리적 고려사항 등을 문서화한 표준 양식입니다. 모델 카드를 통해 개발자, 사용자, 규제 기관 모두가 AI 시스템의 특성을 명확히 이해할 수 있습니다.
</div>
    `
  },
  {
    id: 907,
    chapter_id: 9,
    title: '9.7 AI 안전 규제와 정책',
    sort_order: 7,
    content: `
<h3>글로벌 AI 안전 규제 동향</h3>
<p>AI 기술의 급격한 발전에 따라 전 세계적으로 AI 안전에 대한 규제와 정책이 빠르게 형성되고 있습니다. 각국은 AI의 혜택을 최대화하면서 위험을 최소화하기 위한 법적, 제도적 프레임워크를 구축하고 있습니다.</p>

<h3>EU AI Act (인공지능법)</h3>
<p>EU AI Act는 세계 최초의 포괄적인 AI 규제 법률로, 2024년 발효되었습니다. 위험 기반 접근법(Risk-based Approach)을 채택하여 AI 시스템을 위험 수준에 따라 분류합니다.</p>

<table>
<thead>
<tr><th>위험 등급</th><th>규제 수준</th><th>해당 AI 시스템 예시</th></tr>
</thead>
<tbody>
<tr><td>허용 불가 위험<br/>(Unacceptable Risk)</td><td>전면 금지</td><td>사회적 점수 시스템, 실시간 원격 생체인식 감시, 무의식적 조작</td></tr>
<tr><td>고위험<br/>(High Risk)</td><td>엄격한 규제 및 인증</td><td>채용 AI, 신용 평가, 의료 진단, 교육 평가, 법 집행</td></tr>
<tr><td>제한적 위험<br/>(Limited Risk)</td><td>투명성 의무</td><td>챗봇(AI임을 고지), 딥페이크(표시 의무), 감정 인식 시스템</td></tr>
<tr><td>최소 위험<br/>(Minimal Risk)</td><td>자유로운 사용</td><td>스팸 필터, AI 게임, 추천 시스템</td></tr>
</tbody>
</table>

<h3>주요국 AI 정책 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>미국</h4>
<ul>
<li>2023년 AI 행정명령 (Executive Order)</li>
<li>NIST AI 위험 관리 프레임워크</li>
<li>분야별 자율 규제 중심</li>
<li>AI 안전 연구소(AISI) 설립</li>
</ul>
</div>
<div class="compare-item">
<h4>중국</h4>
<ul>
<li>생성형 AI 관리 임시 조치 (2023)</li>
<li>알고리즘 추천 관리 규정</li>
<li>딥 합성(딥페이크) 규정</li>
<li>정부 주도의 강력한 규제</li>
</ul>
</div>
<div class="compare-item">
<h4>한국</h4>
<ul>
<li>AI 기본법 제정 추진</li>
<li>AI 윤리 기준 (2020)</li>
<li>디지털 플랫폼 정부 정책</li>
<li>AI 안전성 평가 체계 구축</li>
</ul>
</div>
</div>

<h3>국제 협력 체계</h3>
<div class="flow-diagram">
<div class="flow-step">블레츨리 선언<br/>(2023.11)<br/>28개국 합의</div>
<div class="flow-arrow">→</div>
<div class="flow-step">서울 AI 정상회의<br/>(2024.05)<br/>안전 공약 확대</div>
<div class="flow-arrow">→</div>
<div class="flow-step">G7 AI 행동 강령<br/>히로시마 프로세스<br/>자발적 안전 지침</div>
<div class="flow-arrow">→</div>
<div class="flow-step">OECD AI 원칙<br/>국제 표준화<br/>지속적 협력</div>
</div>

<div class="info-box">
<strong>AI 안전 기관 현황</strong><br/>
영국 AI 안전 연구소(AISI), 미국 AI 안전 연구소, EU AI 사무소(AI Office) 등 전문 기관이 설립되어 AI 안전 연구, 평가, 정책 개발을 수행하고 있습니다. 한국도 2024년 AI 안전 연구원 설립을 추진하며 글로벌 협력에 동참하고 있습니다.
</div>
    `
  },
  {
    id: 908,
    chapter_id: 9,
    title: '9.8 AI 안전 실천 가이드',
    sort_order: 8,
    content: `
<h3>일반 사용자를 위한 AI 안전 실천 가이드</h3>
<p>AI 시스템을 안전하고 효과적으로 사용하기 위해서는 기술적 지식뿐만 아니라 올바른 사용 습관과 비판적 태도가 필요합니다. 다음은 일반 사용자가 일상에서 실천할 수 있는 구체적인 가이드입니다.</p>

<h3>AI 사용 전: 준비 단계</h3>
<ol>
<li><strong>AI 시스템의 목적과 한계를 이해하세요</strong>: 사용하려는 AI가 어떤 용도로 설계되었고, 어떤 한계가 있는지 파악합니다.</li>
<li><strong>개인정보 정책을 확인하세요</strong>: 입력한 데이터가 어떻게 저장되고 활용되는지 확인합니다.</li>
<li><strong>신뢰할 수 있는 서비스인지 검증하세요</strong>: 공식 서비스인지, 검증된 제공자인지 확인합니다.</li>
</ol>

<h3>AI 사용 중: 안전한 활용 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정보 입력 시 주의사항</h4>
<ul>
<li>주민등록번호, 비밀번호 등 민감 정보 입력 금지</li>
<li>기업 기밀이나 업무 기밀 정보 유의</li>
<li>타인의 개인정보를 AI에 입력하지 않기</li>
<li>의료, 법률 정보 입력 시 개인 식별 정보 제거</li>
</ul>
</div>
<div class="compare-item">
<h4>결과 활용 시 주의사항</h4>
<ul>
<li>AI 답변을 100% 신뢰하지 않기</li>
<li>중요한 정보는 반드시 교차 검증</li>
<li>AI 생성물의 저작권 문제 인식</li>
<li>AI 결과를 자신의 것처럼 제출하지 않기</li>
</ul>
</div>
</div>

<h3>상황별 AI 안전 체크리스트</h3>
<table>
<thead>
<tr><th>사용 상황</th><th>확인 사항</th><th>위험 요소</th></tr>
</thead>
<tbody>
<tr><td>학습/과제 활용</td><td>학교/기관의 AI 사용 정책 확인</td><td>표절, 학문적 부정행위</td></tr>
<tr><td>업무 활용</td><td>회사의 AI 사용 가이드라인 준수</td><td>기밀 유출, 부정확한 결과</td></tr>
<tr><td>건강/의료 정보</td><td>반드시 전문 의료인과 상담</td><td>오진, 잘못된 건강 정보</td></tr>
<tr><td>법률 조언</td><td>반드시 법률 전문가 확인</td><td>잘못된 법률 해석, 판례 환각</td></tr>
<tr><td>금융 결정</td><td>전문가 자문 병행</td><td>부정확한 시장 분석, 투자 손실</td></tr>
<tr><td>콘텐츠 생성</td><td>저작권, 초상권 확인</td><td>법적 분쟁, 허위 정보 유포</td></tr>
</tbody>
</table>

<h3>AI 안전 사용 5대 원칙</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>검증</strong><br/>AI 결과를<br/>항상 확인</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>보호</strong><br/>개인정보를<br/>안전하게 관리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이해</strong><br/>AI의 한계를<br/>명확히 인식</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>책임</strong><br/>AI 활용 결과에<br/>사용자가 책임</div>
</div>

<div class="info-box">
<strong>기억하세요</strong><br/>
AI는 강력한 도구이지만, 최종적인 판단과 책임은 항상 인간에게 있습니다. AI를 현명하게 활용하는 것은 AI 리터러시의 핵심이며, 안전한 사용 습관은 AI 시대를 살아가는 모든 시민의 기본 역량입니다.
</div>
    `
  },
  {
    id: 909,
    chapter_id: 9,
    title: '9.9 학습 정리',
    sort_order: 9,
    content: `
<h3>Chapter 9 학습 정리: AI 안전과 신뢰성</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI 안전과 신뢰성은 AI 기술이 인간과 사회에 이로운 방향으로 발전하기 위한 필수적인 요소입니다. 기술적 안전성 확보, 규제 체계 구축, 사용자의 올바른 활용 능력 모두가 함께 어우러져야 합니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI 안전의 개념</td><td>AI가 의도대로 작동하면서 해를 끼치지 않도록 보장하는 연구와 실천. 정렬, 견고성, 통제 가능성, 투명성이 핵심 원칙입니다.</td></tr>
<tr><td>위험 유형</td><td>오용(악의적 사용), 사고(의도치 않은 행동), 정렬 문제(목표 불일치)로 분류. 낮은 위험부터 실존적 위험까지 다양한 수준이 존재합니다.</td></tr>
<tr><td>설명 가능한 AI</td><td>AI의 의사결정을 인간이 이해할 수 있도록 하는 기술. LIME, SHAP, Grad-CAM 등의 기법이 활용됩니다.</td></tr>
<tr><td>AI 환각</td><td>AI가 사실이 아닌 정보를 자신 있게 생성하는 현상. RAG, 사실 검증, 교차 검증으로 완화할 수 있습니다.</td></tr>
<tr><td>AI 보안 위협</td><td>적대적 공격, 프롬프트 인젝션, 데이터 포이즈닝 등 AI 고유의 보안 취약점이 존재합니다.</td></tr>
<tr><td>신뢰할 수 있는 AI</td><td>EU HLEG의 7대 요건(인간 감독, 견고성, 프라이버시, 투명성, 공정성, 사회적 웰빙, 책임성)을 충족하는 AI 시스템입니다.</td></tr>
<tr><td>AI 안전 규제</td><td>EU AI Act의 위험 기반 접근법, 각국의 규제 동향, 국제 협력 체계가 빠르게 발전하고 있습니다.</td></tr>
<tr><td>안전 실천 가이드</td><td>검증, 보호, 이해, 책임의 4대 원칙을 바탕으로 일상에서 AI를 안전하게 활용해야 합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>AI 안전(AI Safety)</strong>: AI 시스템이 안전하게 작동하도록 보장하는 분야</li>
<li><strong>정렬(Alignment)</strong>: AI의 목표를 인간의 의도와 가치에 일치시키는 것</li>
<li><strong>XAI</strong>: 설명 가능한 AI (Explainable AI)</li>
<li><strong>환각(Hallucination)</strong>: AI가 사실이 아닌 정보를 생성하는 현상</li>
<li><strong>적대적 공격</strong>: 입력을 미세하게 변형하여 AI를 속이는 공격</li>
<li><strong>프롬프트 인젝션</strong>: 악의적 프롬프트로 AI의 안전장치를 우회하는 공격</li>
<li><strong>데이터 포이즈닝</strong>: 훈련 데이터를 오염시켜 모델을 조작하는 공격</li>
<li><strong>RAG</strong>: 검색 증강 생성 (Retrieval-Augmented Generation)</li>
<li><strong>모델 카드</strong>: AI 모델의 성능, 한계, 윤리적 고려사항을 문서화한 표준 양식</li>
<li><strong>EU AI Act</strong>: 세계 최초의 포괄적 AI 규제 법률</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>NIST AI Risk Management Framework</li>
<li>EU Ethics Guidelines for Trustworthy AI</li>
<li>OECD AI Policy Observatory</li>
<li>한국 AI 윤리 기준 (과학기술정보통신부)</li>
</ul>
    `
  },
  {
    id: 910,
    chapter_id: 9,
    title: '9.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h3>Chapter 9 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 AI 안전과 신뢰성에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AI 안전의 핵심 원칙</h4>
<div class="info-box">
<p>다음 중 AI 안전의 핵심 원칙에 해당하지 <strong>않는</strong> 것은?</p>
<ol type="a">
<li>정렬(Alignment) — AI의 목표가 인간의 의도와 일치</li>
<li>견고성(Robustness) — 예상치 못한 상황에서도 안전하게 작동</li>
<li>최대 성능(Maximum Performance) — 항상 최고의 정확도를 달성</li>
<li>투명성(Transparency) — AI의 의사결정 과정을 이해할 수 있음</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>최대 성능은 AI 안전의 핵심 원칙이 아닙니다. AI 안전은 성능보다 안전성, 공정성, 투명성을 우선시합니다. 때로는 안전을 위해 성능을 일부 희생할 수도 있습니다.</p>
</details>
</div>

<h4>문제 2. AI 환각(Hallucination)</h4>
<div class="info-box">
<p>AI 환각에 대한 설명으로 <strong>올바른</strong> 것은?</p>
<ol type="a">
<li>AI 시스템의 하드웨어 오류로 인한 출력 이상</li>
<li>AI가 사실이 아닌 정보를 자신 있게 생성하는 현상</li>
<li>AI가 시각적 환상(optical illusion)을 인식하는 능력</li>
<li>AI가 학습 데이터를 그대로 복사하여 출력하는 현상</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 환각은 AI 모델이 사실이 아닌 정보를 마치 사실인 것처럼 자신 있게 생성하는 현상입니다. 이는 LLM의 확률적 텍스트 생성 방식에서 주로 발생합니다.</p>
</details>
</div>

<h4>문제 3. EU AI Act의 위험 분류</h4>
<div class="info-box">
<p>EU AI Act에서 "고위험(High Risk)"으로 분류되는 AI 시스템에 해당하는 것은?</p>
<ol type="a">
<li>AI 기반 스팸 필터</li>
<li>비디오 게임의 NPC AI</li>
<li>채용 과정에서의 이력서 심사 AI</li>
<li>음악 추천 알고리즘</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>채용 AI는 개인의 생계와 직접 관련되는 중요한 의사결정에 사용되므로 EU AI Act에서 고위험 시스템으로 분류됩니다. 스팸 필터, 게임 AI, 추천 시스템은 최소 위험으로 분류됩니다.</p>
</details>
</div>

<h4>문제 4. XAI(설명 가능한 AI)</h4>
<div class="info-box">
<p>다음 중 사후 설명 가능성(Post-hoc) 기법에 해당하는 것을 모두 고르세요.</p>
<ol type="a">
<li>결정 트리(Decision Tree)</li>
<li>LIME (Local Interpretable Model-agnostic Explanations)</li>
<li>선형 회귀(Linear Regression)</li>
<li>SHAP (SHapley Additive exPlanations)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b, d</strong><br/>LIME과 SHAP은 이미 학습된 복잡한 모델을 사후에 해석하는 Post-hoc 기법입니다. 결정 트리와 선형 회귀는 모델 자체가 해석 가능한 Ante-hoc(사전 설명 가능성) 접근법에 해당합니다.</p>
</details>
</div>

<h4>문제 5. AI 보안 위협</h4>
<div class="info-box">
<p>악의적인 사용자가 LLM 기반 서비스에 특수한 텍스트를 입력하여 AI의 안전장치를 우회하려는 공격 방식을 무엇이라 하는가?</p>
<ol type="a">
<li>데이터 포이즈닝 (Data Poisoning)</li>
<li>프롬프트 인젝션 (Prompt Injection)</li>
<li>모델 추출 (Model Extraction)</li>
<li>적대적 공격 (Adversarial Attack)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>프롬프트 인젝션은 악의적인 프롬프트를 통해 LLM의 보안 가드레일을 우회하는 공격입니다. 데이터 포이즈닝은 훈련 데이터 오염, 모델 추출은 모델 복제, 적대적 공격은 입력 데이터 변형을 통한 공격을 의미합니다.</p>
</details>
</div>
    `
  }
];
