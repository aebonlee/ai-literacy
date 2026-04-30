/**
 * Chapter 7: AI 윤리와 책임
 * AI 윤리 정의, 원칙, 책임 있는 개발, 개인정보 보호, 저작권, 딥페이크, 가이드라인, 윤리적 사용자
 */
export const CH07_SECTIONS = [
  {
    id: 701,
    chapter_id: 7,
    title: '7.1 AI 윤리란?',
    sort_order: 1,
    content: `
<h2>AI 윤리의 정의와 중요성</h2>
<p>AI 윤리(AI Ethics)란 인공지능 기술의 개발, 배포, 사용 과정에서 발생할 수 있는 도덕적·사회적 문제를 다루는 학문 분야입니다. AI 시스템이 인간의 가치와 권리를 존중하며, 사회에 긍정적인 영향을 미치도록 보장하는 원칙과 실천 방안을 연구합니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
AI 윤리는 "AI 기술이 무엇을 할 수 있는가"가 아니라, "AI 기술이 무엇을 해야 하고 무엇을 하지 말아야 하는가"를 탐구하는 분야입니다.
</div>

<h3>AI 윤리가 중요한 이유</h3>
<table>
<thead>
<tr><th>측면</th><th>윤리적 문제</th><th>실제 사례</th></tr>
</thead>
<tbody>
<tr><td>의사결정 영향력</td><td>AI의 결정이 개인의 삶에 직접적 영향</td><td>AI 채용 시스템이 특정 성별을 차별한 사례(Amazon, 2018)</td></tr>
<tr><td>사회적 규모</td><td>AI가 수백만 명에게 동시에 영향</td><td>소셜 미디어 알고리즘이 허위 정보 확산에 기여</td></tr>
<tr><td>자동화된 편향</td><td>편향된 데이터가 편향된 결과를 생산</td><td>미국 형사사법 AI(COMPAS)의 인종 편향 논란</td></tr>
<tr><td>개인정보 침해</td><td>대규모 데이터 수집과 감시 가능성</td><td>얼굴 인식 기술의 무분별한 감시 활용</td></tr>
<tr><td>일자리 변화</td><td>자동화로 인한 직업 구조 변화</td><td>제조업, 고객 서비스, 번역 등 분야 변화</td></tr>
</tbody>
</table>

<h3>AI 윤리의 핵심 질문들</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 질문</h4>
<ul>
<li>AI의 결정 과정을 설명할 수 있는가?</li>
<li>AI 시스템의 편향을 탐지하고 수정할 수 있는가?</li>
<li>AI의 오류로 피해가 발생하면 누가 책임지는가?</li>
</ul>
</div>
<div class="compare-item">
<h4>사회적 질문</h4>
<ul>
<li>AI의 혜택이 사회 전체에 공정하게 분배되는가?</li>
<li>AI가 기존의 사회적 불평등을 심화시키지 않는가?</li>
<li>AI 발전에 따른 일자리 변화에 어떻게 대비하는가?</li>
</ul>
</div>
</div>

<h3>AI 윤리의 역사적 배경</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>초기 논의 (1950~2000)</h4>
<p>아시모프의 로봇 3원칙, 튜링의 철학적 질문 등 이론적 논의 중심</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>실용적 전환 (2010~2018)</h4>
<p>빅데이터·딥러닝 발전으로 실제 윤리 문제 부각, 편향·프라이버시 이슈 표면화</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>제도화 (2019~현재)</h4>
<p>EU AI Act, 유네스코 AI 윤리 권고, 각국 AI 윤리 가이드라인 수립</p>
</div>
</div>

<div class="info-box warning">
<strong>왜 모든 사람이 AI 윤리를 이해해야 하는가?</strong><br/>
AI 윤리는 기술자나 정책 입안자만의 문제가 아닙니다. AI를 사용하는 모든 사람이 윤리적 AI 사용자가 되어야 합니다. AI 서비스를 이용할 때 자신의 데이터가 어떻게 사용되는지, AI의 결과를 맹신하고 있지 않은지, AI를 통해 타인에게 피해를 주고 있지 않은지 항상 생각해야 합니다.
</div>
    `
  },
  {
    id: 702,
    chapter_id: 7,
    title: '7.2 AI 윤리 원칙',
    sort_order: 2,
    content: `
<h2>AI 윤리의 핵심 원칙</h2>
<p>전 세계 주요 기관과 기업이 제시하는 AI 윤리 원칙은 세부 내용에서 차이가 있지만, 핵심적인 원칙은 일관됩니다. 국제적으로 합의된 AI 윤리의 4대 원칙을 살펴보겠습니다.</p>

<h3>AI 윤리 4대 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>1. 공정성 (Fairness)</h4>
<p>AI 시스템이 특정 집단을 차별하지 않고, 모든 사용자에게 동등한 기회와 결과를 제공해야 합니다. 인종, 성별, 나이, 장애 여부 등에 따른 부당한 차별이 없어야 합니다.</p>
</div>
<div class="compare-item">
<h4>2. 투명성 (Transparency)</h4>
<p>AI 시스템의 작동 원리, 의사결정 과정, 사용되는 데이터에 대해 이해 가능한 수준의 정보가 공개되어야 합니다. "블랙박스" 문제를 해소하기 위한 설명 가능한 AI(XAI)가 중요합니다.</p>
</div>
<div class="compare-item">
<h4>3. 책임성 (Accountability)</h4>
<p>AI 시스템의 결정에 대해 명확한 책임 주체가 존재해야 합니다. AI의 오류로 피해가 발생했을 때, 개발자·운영자·사용자 중 누가 어떤 책임을 지는지 분명해야 합니다.</p>
</div>
<div class="compare-item">
<h4>4. 프라이버시 (Privacy)</h4>
<p>개인의 데이터가 동의 없이 수집·활용되지 않아야 하며, 수집된 데이터는 안전하게 관리되어야 합니다. 데이터 최소 수집 원칙과 목적 제한 원칙이 적용되어야 합니다.</p>
</div>
</div>

<h3>원칙의 실제 적용</h3>
<table>
<thead>
<tr><th>윤리 원칙</th><th>실천 방안</th><th>위반 사례</th></tr>
</thead>
<tbody>
<tr><td>공정성</td><td>다양한 집단의 데이터로 학습, 편향 감사(Bias Audit) 실시</td><td>Apple Card 신용 한도 알고리즘의 성별 차별 논란 (2019)</td></tr>
<tr><td>투명성</td><td>AI 사용 고지, 의사결정 근거 제공, 모델 카드(Model Card) 공개</td><td>소셜 미디어 추천 알고리즘의 불투명한 운영</td></tr>
<tr><td>책임성</td><td>AI 감사 체계 구축, 피해 구제 절차 마련, 책임 보험</td><td>자율주행 사고 시 책임 소재 불분명 (Uber, 2018)</td></tr>
<tr><td>프라이버시</td><td>데이터 암호화, 익명화, 동의 기반 수집, 삭제 권리 보장</td><td>Clearview AI의 무단 얼굴 이미지 수집 (2020)</td></tr>
</tbody>
</table>

<h3>추가적인 윤리 원칙</h3>
<div class="info-box">
<strong>확장된 윤리 원칙</strong><br/>
<ul>
<li><strong>안전성(Safety)</strong>: AI 시스템이 의도하지 않은 해로운 행동을 하지 않도록 보장</li>
<li><strong>신뢰성(Reliability)</strong>: AI 시스템이 일관되고 예측 가능하게 동작</li>
<li><strong>포용성(Inclusiveness)</strong>: 장애인, 소수자 등 모든 사람이 AI 혜택에 접근 가능</li>
<li><strong>지속가능성(Sustainability)</strong>: AI의 에너지 소비와 환경 영향을 최소화</li>
<li><strong>인간 중심성(Human-Centeredness)</strong>: AI가 인간의 자율성과 존엄성을 존중</li>
</ul>
</div>

<div class="info-box warning">
<strong>원칙 간 충돌</strong><br/>
AI 윤리 원칙들은 때때로 서로 충돌할 수 있습니다. 예를 들어, 투명성을 높이면 프라이버시가 침해될 수 있고, 공정성을 추구하면 정확도가 낮아질 수 있습니다. 이러한 상충 관계(trade-off)를 어떻게 조율할 것인지가 AI 윤리의 핵심 과제입니다.
</div>
    `
  },
  {
    id: 703,
    chapter_id: 7,
    title: '7.3 책임 있는 AI 개발',
    sort_order: 3,
    content: `
<h2>책임 있는 AI 개발 (Responsible AI)</h2>
<p>책임 있는 AI 개발이란 AI 시스템의 전체 생애 주기(설계, 개발, 배포, 운영, 폐기)에 걸쳐 윤리적 원칙을 체계적으로 적용하는 실천 방법론입니다. 단순히 윤리 원칙을 선언하는 것을 넘어, 구체적인 프로세스와 도구를 통해 실현합니다.</p>

<h3>책임 있는 AI 개발 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 윤리 영향 평가</h4>
<p>AI 프로젝트 시작 전 잠재적 윤리 리스크 사전 평가</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 공정한 데이터 수집</h4>
<p>다양성을 반영한 데이터 확보, 편향 점검</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 투명한 모델 개발</h4>
<p>설명 가능성 고려, 모델 카드 작성</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 편향 테스트</h4>
<p>다양한 집단에 대한 공정성 테스트 수행</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>5. 지속적 모니터링</h4>
<p>배포 후에도 성능·공정성 지속 관찰 및 개선</p>
</div>
</div>

<h3>주요 기업의 Responsible AI 사례</h3>
<table>
<thead>
<tr><th>기업/기관</th><th>접근 방식</th><th>주요 특징</th></tr>
</thead>
<tbody>
<tr><td>Google</td><td>AI Principles (2018)</td><td>7가지 원칙 수립, AI 무기 개발 금지 선언, 레드팀 운영</td></tr>
<tr><td>Microsoft</td><td>Responsible AI Standard (2022)</td><td>6가지 원칙 기반 내부 거버넌스, 영향 평가 도구 개발</td></tr>
<tr><td>Anthropic</td><td>Constitutional AI</td><td>AI가 헌법적 원칙을 따르도록 학습하는 방법론 개발</td></tr>
<tr><td>OpenAI</td><td>Safety & Alignment</td><td>인간의 의도에 부합하는 AI 정렬(Alignment) 연구</td></tr>
<tr><td>한국 정부</td><td>국가 AI 윤리 기준 (2020)</td><td>3대 기본 원칙, 10대 핵심 요건 제시</td></tr>
</tbody>
</table>

<h3>개발자의 윤리적 책임</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 책임</h4>
<ul>
<li>학습 데이터의 편향 검토 및 시정</li>
<li>모델의 설명 가능성 확보</li>
<li>적대적 공격에 대한 강건성 보장</li>
<li>정기적인 성능 및 공정성 감사</li>
</ul>
</div>
<div class="compare-item">
<h4>사회적 책임</h4>
<ul>
<li>AI의 사회적 영향을 사전에 고려</li>
<li>다양한 이해관계자의 의견 수렴</li>
<li>AI 사용 사실의 투명한 공개</li>
<li>피해 발생 시 신속한 대응 체계 구축</li>
</ul>
</div>
</div>

<div class="info-box">
<strong>윤리적 AI 개발 체크리스트</strong><br/>
<ul>
<li>학습 데이터에 특정 집단이 과소/과대 대표되지 않았는가?</li>
<li>AI 시스템의 의사결정 과정을 설명할 수 있는가?</li>
<li>잠재적 오남용 시나리오를 검토했는가?</li>
<li>피해 구제 및 이의 제기 절차가 마련되었는가?</li>
<li>AI 사용 사실을 사용자에게 고지하고 있는가?</li>
<li>정기적인 편향 감사 계획이 수립되었는가?</li>
</ul>
</div>
    `
  },
  {
    id: 704,
    chapter_id: 7,
    title: '7.4 AI와 개인정보 보호',
    sort_order: 4,
    content: `
<h2>AI와 개인정보 보호</h2>
<p>AI 시스템은 대량의 데이터를 필요로 하며, 이 과정에서 개인정보 보호가 중요한 이슈로 부상합니다. 얼굴 인식, 행동 추적, 감정 분석 등 AI의 능력이 고도화될수록 프라이버시 침해의 위험도 커지고 있습니다.</p>

<h3>AI와 관련된 개인정보 위험</h3>
<table>
<thead>
<tr><th>위험 유형</th><th>설명</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>무단 데이터 수집</td><td>동의 없이 개인 데이터를 수집하여 AI 학습에 활용</td><td>Clearview AI가 SNS에서 30억 장의 얼굴 사진을 무단 수집</td></tr>
<tr><td>과도한 감시</td><td>AI 기반 CCTV, 얼굴 인식으로 일상적 감시</td><td>일부 국가의 도시 전역 AI 감시 시스템 구축</td></tr>
<tr><td>프로파일링</td><td>개인의 행동 패턴을 분석하여 성향·취향을 예측</td><td>SNS 데이터로 정치 성향 예측(Cambridge Analytica)</td></tr>
<tr><td>데이터 유출</td><td>AI 모델에서 학습 데이터가 복원되는 위험</td><td>언어 모델에서 학습 데이터에 포함된 개인정보 유출</td></tr>
<tr><td>추론 공격</td><td>공개 데이터로부터 비공개 정보를 추론</td><td>구매 패턴으로 건강 상태, 임신 여부 등을 추론</td></tr>
</tbody>
</table>

<h3>주요 개인정보 보호 법규</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>EU GDPR</h4>
<p>유럽연합의 일반 데이터 보호 규정(2018). 세계에서 가장 엄격한 개인정보 보호법입니다.</p>
<ul>
<li><strong>동의 원칙</strong>: 데이터 수집 전 명시적 동의 필요</li>
<li><strong>잊힐 권리</strong>: 개인 데이터 삭제 요청 권리</li>
<li><strong>설명 요구권</strong>: AI 자동 결정에 대한 설명 요구 가능</li>
<li><strong>위반 시 벌금</strong>: 전 세계 매출의 4%까지</li>
</ul>
</div>
<div class="compare-item">
<h4>한국 개인정보보호법</h4>
<p>2020년 데이터 3법 개정으로 AI 시대에 맞게 강화되었습니다.</p>
<ul>
<li><strong>가명 처리</strong>: 통계·연구 목적으로 가명 데이터 활용 허용</li>
<li><strong>자동화된 결정 거부권</strong>: AI 자동 결정에 대한 거부 가능 (2023 개정)</li>
<li><strong>개인정보 영향 평가</strong>: 대규모 개인정보 처리 시 사전 평가 의무</li>
<li><strong>개인정보보호위원회</strong>: 독립 감독 기구 운영</li>
</ul>
</div>
</div>

<h3>프라이버시 보호 기술</h3>
<div class="info-box">
<strong>개인정보를 보호하면서 AI를 활용하는 기술</strong><br/>
<ul>
<li><strong>연합학습(Federated Learning)</strong>: 데이터를 중앙 서버로 보내지 않고, 각 기기에서 로컬로 학습한 후 모델 업데이트만 공유합니다.</li>
<li><strong>차등 프라이버시(Differential Privacy)</strong>: 데이터에 의도적으로 노이즈를 추가하여, 개인을 특정할 수 없으면서도 전체 통계는 유효하게 유지합니다.</li>
<li><strong>동형 암호화(Homomorphic Encryption)</strong>: 데이터를 암호화한 상태로 AI 연산을 수행하여, 원본 데이터를 노출하지 않습니다.</li>
<li><strong>합성 데이터(Synthetic Data)</strong>: 실제 데이터의 통계적 특성을 유지하면서 인공적으로 생성된 데이터로 AI를 학습시킵니다.</li>
</ul>
</div>

<div class="info-box warning">
<strong>개인 사용자의 프라이버시 보호 수칙</strong><br/>
<ul>
<li>AI 서비스 가입 시 개인정보 처리 방침을 반드시 확인하세요.</li>
<li>AI에 입력하는 정보가 학습에 사용될 수 있음을 인지하세요.</li>
<li>민감한 개인정보(건강, 금융, 위치 등)는 AI에 입력하지 마세요.</li>
<li>AI 서비스의 데이터 학습 비허용 옵션을 활성화하세요.</li>
</ul>
</div>
    `
  },
  {
    id: 705,
    chapter_id: 7,
    title: '7.5 AI 저작권과 지적재산권',
    sort_order: 5,
    content: `
<h2>AI 저작권과 지적재산권</h2>
<p>생성형 AI의 등장으로 저작권과 지적재산권 분야에서 전례 없는 법적 쟁점이 발생하고 있습니다. AI가 만든 콘텐츠의 저작권은 누구에게 있는가? AI 학습에 사용된 원작의 저작권은 보호되는가? 이러한 질문들이 현재 전 세계적으로 논의되고 있습니다.</p>

<h3>AI 저작권의 핵심 쟁점</h3>
<table>
<thead>
<tr><th>쟁점</th><th>찬성 측 주장</th><th>반대 측 주장</th><th>현재 상황</th></tr>
</thead>
<tbody>
<tr><td>AI 생성물의 저작권</td><td>AI 사용자/개발자에게 저작권 부여</td><td>인간의 창작 행위가 아니므로 저작권 불인정</td><td>대부분의 국가에서 AI 생성물 단독 저작권 불인정</td></tr>
<tr><td>AI 학습용 데이터</td><td>공정 이용(Fair Use)에 해당</td><td>원작자 동의 없는 사용은 저작권 침해</td><td>소송 진행 중(NYT vs OpenAI 등)</td></tr>
<tr><td>AI 결과물의 유사성</td><td>새로운 창작물로 인정</td><td>원작의 스타일/패턴 복제에 해당</td><td>사례별 판단 필요</td></tr>
</tbody>
</table>

<h3>주요 저작권 소송 사례</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>Getty Images vs Stability AI</h4>
<p>Getty Images가 이미지 생성 AI인 Stable Diffusion이 자사의 수백만 장 이미지를 허락 없이 학습에 사용했다고 소송을 제기했습니다. 생성된 이미지에 Getty 워터마크가 나타나는 사례도 보고되었습니다.</p>
</div>
<div class="compare-item">
<h4>New York Times vs OpenAI</h4>
<p>뉴욕타임스가 OpenAI를 상대로 자사 기사를 AI 학습에 무단 사용했다며 저작권 소송을 제기했습니다. ChatGPT가 NYT 기사를 거의 그대로 출력하는 사례가 증거로 제시되었습니다.</p>
</div>
</div>

<h3>각국의 AI 저작권 정책</h3>
<table>
<thead>
<tr><th>국가/지역</th><th>AI 생성물 저작권</th><th>AI 학습 데이터 정책</th></tr>
</thead>
<tbody>
<tr><td>미국</td><td>인간의 창작적 기여가 있는 경우만 인정</td><td>사례별 공정 이용 판단 (소송 진행 중)</td></tr>
<tr><td>EU</td><td>AI 단독 생성물은 저작권 불인정</td><td>AI Act으로 학습 데이터 출처 공개 의무화</td></tr>
<tr><td>한국</td><td>아직 명확한 법적 기준 없음</td><td>공정 이용 범위 논의 중</td></tr>
<tr><td>일본</td><td>AI 생성물의 저작권 불인정 경향</td><td>AI 학습 목적 데이터 이용 비교적 관대</td></tr>
<tr><td>영국</td><td>컴퓨터 생성 저작물 인정 (1988년 법)</td><td>상업적 AI 학습에 대한 규제 검토 중</td></tr>
</tbody>
</table>

<div class="info-box">
<strong>AI 콘텐츠 사용 시 실천 가이드</strong><br/>
<ul>
<li>AI로 생성한 콘텐츠를 상업적으로 사용할 때는 해당 AI 서비스의 이용 약관을 반드시 확인하세요.</li>
<li>AI 생성 콘텐츠를 자신의 독창적 창작물로 허위 표시하지 마세요.</li>
<li>학술 논문이나 보고서에 AI를 활용한 경우 이를 명시하세요.</li>
<li>AI가 생성한 이미지·텍스트가 기존 저작물과 지나치게 유사하지 않은지 확인하세요.</li>
<li>가능하면 AI 서비스의 상업적 이용이 허용된 플랜을 사용하세요.</li>
</ul>
</div>

<div class="info-box warning">
<strong>학술적 맥락에서의 AI 활용</strong><br/>
많은 대학과 학술지가 AI 활용 정책을 수립하고 있습니다. AI를 활용하여 논문이나 과제를 작성할 때는 반드시 소속 기관의 정책을 확인하고, AI 활용 사실을 투명하게 밝혀야 합니다. AI 생성 텍스트를 자신의 글로 제출하는 것은 학술 부정행위에 해당할 수 있습니다.
</div>
    `
  },
  {
    id: 706,
    chapter_id: 7,
    title: '7.6 AI 딥페이크와 허위정보',
    sort_order: 6,
    content: `
<h2>딥페이크와 AI 기반 허위정보</h2>
<p>딥페이크(Deepfake)는 딥러닝(Deep Learning)과 가짜(Fake)의 합성어로, AI를 이용하여 실제처럼 보이는 가짜 영상, 이미지, 음성을 만드는 기술입니다. 이 기술은 엔터테인먼트와 교육에 유용하게 사용될 수 있지만, 동시에 심각한 사회적 위험을 초래할 수 있습니다.</p>

<h3>딥페이크의 유형</h3>
<table>
<thead>
<tr><th>유형</th><th>설명</th><th>기술</th><th>위험도</th></tr>
</thead>
<tbody>
<tr><td>얼굴 교체</td><td>영상 속 인물의 얼굴을 다른 사람의 얼굴로 교체</td><td>GAN, Autoencoder</td><td>매우 높음</td></tr>
<tr><td>음성 합성</td><td>특정 인물의 목소리를 복제하여 가짜 발언 생성</td><td>TTS, Voice Cloning</td><td>높음</td></tr>
<tr><td>입술 동기화</td><td>음성에 맞게 영상 속 인물의 입 움직임을 조작</td><td>Lip-sync AI</td><td>높음</td></tr>
<tr><td>전신 합성</td><td>존재하지 않는 인물의 전신 영상을 생성</td><td>Full-body GAN</td><td>중간</td></tr>
<tr><td>텍스트 생성</td><td>실제처럼 보이는 가짜 뉴스 기사, 리뷰 등 생성</td><td>LLM</td><td>높음</td></tr>
</tbody>
</table>

<h3>딥페이크의 위험성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인에 대한 피해</h4>
<ul>
<li><strong>명예 훼손</strong>: 유명인이나 일반인의 허위 영상 유포</li>
<li><strong>사기</strong>: 음성 복제를 이용한 보이스 피싱</li>
<li><strong>성적 착취</strong>: 동의 없는 합성 성적 콘텐츠 제작</li>
<li><strong>신원 도용</strong>: 생체 인증 우회 시도</li>
</ul>
</div>
<div class="compare-item">
<h4>사회에 대한 피해</h4>
<ul>
<li><strong>선거 개입</strong>: 정치인의 가짜 발언 영상 유포</li>
<li><strong>허위 정보 확산</strong>: 가짜 뉴스의 신뢰도 향상</li>
<li><strong>사회적 신뢰 붕괴</strong>: 진짜와 가짜를 구별할 수 없는 상황</li>
<li><strong>역사 왜곡</strong>: 역사적 사건의 허위 영상 제작</li>
</ul>
</div>
</div>

<h3>딥페이크 탐지 방법</h3>
<div class="info-box">
<strong>주요 탐지 기술 및 방법</strong><br/>
<ul>
<li><strong>눈 깜빡임 분석</strong>: 초기 딥페이크는 자연스러운 눈 깜빡임을 구현하지 못하는 경우가 많았습니다.</li>
<li><strong>얼굴 경계 분석</strong>: 얼굴과 배경의 경계 부분에서 부자연스러운 블러나 색상 차이를 탐지합니다.</li>
<li><strong>AI 기반 탐지</strong>: 딥페이크를 탐지하도록 학습된 AI 모델을 사용합니다 (Microsoft Video Authenticator 등).</li>
<li><strong>메타데이터 분석</strong>: 영상의 메타데이터(촬영 기기, 날짜, 편집 이력)를 확인합니다.</li>
<li><strong>출처 확인</strong>: 콘텐츠의 최초 출처를 추적하여 진위를 검증합니다.</li>
</ul>
</div>

<h3>허위정보에 대응하는 자세</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>1. 멈추기 (Stop)</h4>
<p>자극적인 콘텐츠를 보면 즉시 반응하지 말고 멈추세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>2. 출처 확인 (Source)</h4>
<p>콘텐츠의 원래 출처가 신뢰할 수 있는 매체인지 확인하세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>3. 교차 검증 (Verify)</h4>
<p>다른 신뢰할 수 있는 출처에서도 같은 내용을 보도하는지 확인하세요</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>4. 전파 자제 (Don't Share)</h4>
<p>확인되지 않은 정보는 공유하지 마세요</p>
</div>
</div>

<div class="info-box warning">
<strong>법적 규제</strong><br/>
한국에서는 딥페이크를 이용한 성적 허위 영상 제작·유포를 처벌하는 법률이 시행되고 있습니다(성폭력처벌법 제14조의2). 딥페이크를 악의적으로 제작하거나 유포하는 행위는 형사 처벌의 대상이 됩니다.
</div>
    `
  },
  {
    id: 707,
    chapter_id: 7,
    title: '7.7 AI 윤리 가이드라인',
    sort_order: 7,
    content: `
<h2>국제 AI 윤리 가이드라인</h2>
<p>AI 기술의 급속한 발전에 따라, 국제기구와 각국 정부는 AI 윤리 가이드라인과 규제 프레임워크를 적극적으로 수립하고 있습니다. 주요 가이드라인의 내용과 특징을 살펴보겠습니다.</p>

<h3>주요 국제 AI 윤리 가이드라인</h3>
<table>
<thead>
<tr><th>기관/문서</th><th>연도</th><th>핵심 내용</th><th>구속력</th></tr>
</thead>
<tbody>
<tr><td>UNESCO AI 윤리 권고</td><td>2021</td><td>193개국 채택. 인권 중심 AI 개발 원칙. 비례성, 안전성, 공정성, 지속가능성</td><td>연성 규범 (비구속)</td></tr>
<tr><td>OECD AI 원칙</td><td>2019</td><td>투명성, 책임성, 보안, 인간 중심 가치. 42개국 채택</td><td>연성 규범 (비구속)</td></tr>
<tr><td>EU AI Act</td><td>2024</td><td>위험 등급별 AI 규제. 고위험 AI에 대한 엄격한 요건. 범용 AI 투명성 의무</td><td>법적 구속력</td></tr>
<tr><td>한국 AI 윤리 기준</td><td>2020</td><td>3대 기본 원칙(인간성, 사회공공성, 기술 합목적성), 10대 핵심 요건</td><td>자율 규범</td></tr>
<tr><td>미국 AI 권리장전 청사진</td><td>2022</td><td>안전하고 효과적인 시스템, 알고리즘 차별 방지, 데이터 프라이버시 등 5대 원칙</td><td>비구속 지침</td></tr>
</tbody>
</table>

<h3>EU AI Act의 위험 분류 체계</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>허용 불가 위험 (Unacceptable Risk)</h4>
<p>전면 금지됩니다.</p>
<ul>
<li>사회적 점수 시스템(Social Scoring)</li>
<li>무차별적 실시간 얼굴 인식 감시</li>
<li>인간 행동을 조작하는 AI</li>
<li>취약 계층 착취 AI</li>
</ul>
</div>
<div class="compare-item">
<h4>고위험 (High Risk)</h4>
<p>엄격한 규제 요건을 준수해야 합니다.</p>
<ul>
<li>채용, 교육, 신용 평가 AI</li>
<li>법 집행, 사법 분야 AI</li>
<li>의료 기기, 자율주행 관련 AI</li>
<li>필수 서비스 접근 결정 AI</li>
</ul>
</div>
</div>

<h3>한국의 AI 윤리 체계</h3>
<div class="info-box">
<strong>국가 AI 윤리 기준 — 3대 원칙, 10대 핵심 요건</strong><br/>
<p><strong>3대 기본 원칙:</strong></p>
<ol>
<li><strong>인간성(Human Dignity)</strong>: AI는 인간의 존엄성과 가치를 존중해야 합니다.</li>
<li><strong>사회의 공공선(Public Good)</strong>: AI는 사회 전체의 이익에 부합해야 합니다.</li>
<li><strong>기술의 합목적성(Purposefulness)</strong>: AI 기술은 인류에게 유익한 방향으로 개발되어야 합니다.</li>
</ol>
<p><strong>10대 핵심 요건:</strong> 인권 보장, 프라이버시 보호, 다양성 존중, 침해 금지, 공공성, 연대성, 데이터 관리, 책임성, 안전성, 투명성</p>
</div>

<div class="info-box warning">
<strong>가이드라인의 한계</strong><br/>
현재 대부분의 AI 윤리 가이드라인은 자율 규범이나 연성 규범의 형태로, 법적 구속력이 없습니다. EU AI Act가 최초의 포괄적 AI 법률로서 선도적 역할을 하고 있으며, 다른 국가들도 유사한 법규를 검토하고 있습니다. 가이드라인의 효과는 기업과 개인의 자발적 준수 의지에 크게 좌우됩니다.
</div>
    `
  },
  {
    id: 708,
    chapter_id: 7,
    title: '7.8 윤리적 AI 사용자 되기',
    sort_order: 8,
    content: `
<h2>윤리적 AI 사용자 되기</h2>
<p>AI 윤리는 개발자나 기업만의 책임이 아닙니다. AI를 사용하는 모든 사람이 윤리적 책임을 가지며, 일상적인 AI 활용에서 윤리적 판단을 실천해야 합니다. 이 절에서는 개인 사용자로서의 윤리적 AI 활용 방법을 알아봅니다.</p>

<h3>윤리적 AI 사용 원칙</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>인식 (Awareness)</h4>
<p>AI의 능력과 한계를 이해하고, 결과물을 맹신하지 않기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>책임 (Responsibility)</h4>
<p>AI를 사용한 결과에 대해 스스로 책임지기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>존중 (Respect)</h4>
<p>타인의 권리, 프라이버시, 저작권을 존중하기</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>투명성 (Transparency)</h4>
<p>AI 활용 사실을 적절히 밝히기</p>
</div>
</div>

<h3>상황별 윤리적 판단 가이드</h3>
<table>
<thead>
<tr><th>상황</th><th>윤리적 행동</th><th>비윤리적 행동</th></tr>
</thead>
<tbody>
<tr><td>학교 과제 작성</td><td>AI를 참고·보조 도구로 사용, 활용 사실을 밝힘</td><td>AI 생성물을 자신의 글로 그대로 제출</td></tr>
<tr><td>업무 보고서 작성</td><td>AI 초안을 검토·수정, 팩트 확인 후 활용</td><td>AI 결과를 검증 없이 의사결정에 사용</td></tr>
<tr><td>SNS 콘텐츠</td><td>AI 생성 이미지임을 표시, 사실 확인 후 공유</td><td>AI 생성 콘텐츠를 실제 사진/영상으로 위장</td></tr>
<tr><td>타인 관련 콘텐츠</td><td>본인의 동의를 받고, 존중하는 방식으로 활용</td><td>타인의 사진/음성으로 동의 없이 딥페이크 제작</td></tr>
<tr><td>정보 검색</td><td>AI 답변을 교차 검증, 출처 확인</td><td>AI 답변을 무비판적으로 사실로 받아들여 전파</td></tr>
</tbody>
</table>

<h3>AI 사용자 윤리 체크리스트</h3>
<div class="info-box">
<strong>AI를 사용하기 전에 확인하세요</strong><br/>
<ul>
<li>이 AI 활용이 누군가에게 해를 끼칠 수 있는가?</li>
<li>개인정보나 기밀 정보를 입력하고 있지 않은가?</li>
<li>AI 결과물을 자신의 독창적 창작물로 허위 표시하고 있지 않은가?</li>
<li>AI의 결과를 비판적으로 검토했는가?</li>
<li>AI 활용 사실을 밝혀야 하는 상황은 아닌가?</li>
<li>저작권이나 초상권을 침해하고 있지 않은가?</li>
<li>AI의 출력이 편향되거나 차별적인 내용을 포함하고 있지 않은가?</li>
</ul>
</div>

<div class="compare-grid">
<div class="compare-item">
<h4>비판적 AI 리터러시</h4>
<p>AI의 결과를 맹신하지 않고 비판적으로 평가하는 능력입니다. AI가 생성한 정보의 정확성, 편향성, 맥락 적합성을 항상 검토해야 합니다. "AI가 말했으니까 맞겠지"라는 태도는 가장 위험한 태도입니다.</p>
</div>
<div class="compare-item">
<h4>디지털 시민 의식</h4>
<p>온라인 공간에서 책임감 있게 행동하는 시민 의식입니다. AI 기술의 발전으로 허위정보 제작이 쉬워진 시대에, 정보를 공유하기 전에 확인하고, 타인의 권리를 존중하며, 사회적 책임을 다하는 태도가 더욱 중요해졌습니다.</p>
</div>
</div>
    `
  },
  {
    id: 709,
    chapter_id: 7,
    title: '7.9 학습 정리',
    sort_order: 9,
    content: `
<h2>Chapter 7 학습 정리</h2>
<p>이번 장에서는 AI 윤리와 책임에 대해 포괄적으로 학습했습니다. 핵심 내용을 정리합니다.</p>

<h3>핵심 개념 요약</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AI 윤리 정의</td><td>AI 기술의 개발·사용 과정에서 발생하는 도덕적·사회적 문제를 다루는 분야</td></tr>
<tr><td>4대 윤리 원칙</td><td>공정성(Fairness), 투명성(Transparency), 책임성(Accountability), 프라이버시(Privacy)</td></tr>
<tr><td>책임 있는 AI</td><td>AI 전체 생애 주기에 걸쳐 윤리 원칙을 적용하는 방법론</td></tr>
<tr><td>개인정보 보호</td><td>GDPR, 개인정보보호법 준수. 연합학습, 차등 프라이버시 등 보호 기술 활용</td></tr>
<tr><td>저작권</td><td>AI 생성물 저작권 논쟁. AI 학습 데이터의 공정 이용 논란. 투명한 활용 사실 공개</td></tr>
<tr><td>딥페이크</td><td>AI 기반 가짜 영상·음성 생성 기술. 출처 확인, 교차 검증으로 대응</td></tr>
<tr><td>가이드라인</td><td>UNESCO, OECD, EU AI Act 등 국제 기준. 한국 AI 윤리 기준 3대 원칙·10대 요건</td></tr>
<tr><td>윤리적 사용자</td><td>인식, 책임, 존중, 투명성의 4가지 원칙 실천</td></tr>
</tbody>
</table>

<h3>AI 윤리의 핵심 프레임워크</h3>
<div class="flow-diagram">
<div class="flow-step">
<h4>개인 차원</h4>
<p>비판적 사고, 책임 있는 사용, 프라이버시 보호</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>조직 차원</h4>
<p>윤리 가이드라인, 편향 감사, 투명성 확보</p>
</div>
<div class="flow-arrow">&rarr;</div>
<div class="flow-step">
<h4>사회 차원</h4>
<p>법률·규제, 국제 협력, 시민 교육</p>
</div>
</div>

<div class="info-box">
<strong>기억할 핵심 메시지</strong><br/>
<ul>
<li>AI 윤리는 모든 AI 사용자의 책임입니다.</li>
<li>기술의 발전 속도가 규제보다 빠르므로, 자율적 윤리 의식이 더욱 중요합니다.</li>
<li>AI의 결과물을 항상 비판적으로 검토하세요.</li>
<li>타인의 권리를 존중하고, AI를 사용한 사실을 투명하게 밝히세요.</li>
<li>AI 윤리는 고정된 것이 아니라, 기술과 사회의 변화에 맞게 지속적으로 발전합니다.</li>
</ul>
</div>

<h3>다음 장 미리보기</h3>
<p>다음 장에서는 AI 윤리의 핵심 이슈 중 하나인 <strong>AI 편향성과 공정성</strong>에 대해 심도 있게 다룹니다. AI 편향의 유형, 실제 사례, 탐지 방법, 완화 전략 등을 학습합니다.</p>
    `
  },
  {
    id: 710,
    chapter_id: 7,
    title: '7.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h2>학습 확인 문제</h2>
<p>Chapter 7에서 학습한 AI 윤리와 책임 내용을 확인해 봅시다.</p>

<div class="info-box">
<strong>문제 1.</strong> AI 윤리의 4대 핵심 원칙으로 옳지 않은 것은?<br/>
① 공정성 (Fairness)<br/>
② 수익성 (Profitability)<br/>
③ 투명성 (Transparency)<br/>
④ 책임성 (Accountability)<br/>
<details>
<summary>정답 확인</summary>
<p><strong>정답: ② — 수익성은 AI 윤리 원칙에 포함되지 않습니다. 4대 원칙은 공정성, 투명성, 책임성, 프라이버시입니다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 2.</strong> EU AI Act의 "허용 불가 위험(Unacceptable Risk)" 카테고리에 해당하여 전면 금지되는 AI 활용 사례를 2가지 이상 설명하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: (1) 사회적 점수 시스템(Social Scoring) — 개인의 사회적 행동을 기반으로 점수를 매기고 이에 따라 권리를 제한하는 시스템은 금지됩니다. (2) 무차별적 실시간 얼굴 인식 감시 — 공공장소에서 불특정 다수를 대상으로 하는 실시간 원격 생체 인식 시스템은 금지됩니다. (3) 인간 행동 조작 AI — 사람의 인지적 약점을 악용하여 행동을 조작하는 AI 시스템은 금지됩니다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 3.</strong> AI 생성 콘텐츠의 저작권에 관한 현재 국제적 동향을 설명하고, 학술 과제에서 AI를 활용할 때의 윤리적 가이드라인을 제시하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: 현재 대부분의 국가에서 AI가 단독으로 생성한 콘텐츠에 대한 저작권을 인정하지 않습니다. 미국은 인간의 창작적 기여가 있는 경우에만 제한적으로 인정하고, EU는 학습 데이터 출처 공개를 의무화하고 있습니다. 학술 과제에서의 가이드라인: (1) AI를 참고·보조 도구로만 활용하고, AI 생성 텍스트를 그대로 제출하지 않는다, (2) AI 활용 사실을 투명하게 밝힌다, (3) AI 결과물의 사실 관계를 직접 검증한다, (4) 소속 기관의 AI 활용 정책을 사전에 확인한다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 4.</strong> 딥페이크에 대응하기 위한 "멈추기-출처 확인-교차 검증-전파 자제" 4단계 대응법을 각 단계별로 구체적으로 설명하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: (1) 멈추기(Stop) — 자극적이거나 충격적인 영상·이미지를 보았을 때 감정적으로 즉각 반응하지 않고 잠시 멈춥니다. (2) 출처 확인(Source) — 해당 콘텐츠가 최초로 게시된 곳이 신뢰할 수 있는 매체(공식 뉴스, 공식 계정 등)인지 확인합니다. (3) 교차 검증(Verify) — 동일한 사건이나 내용을 다른 신뢰할 수 있는 매체에서도 보도하고 있는지 확인합니다. 한 곳에서만 나오는 정보는 주의가 필요합니다. (4) 전파 자제(Don't Share) — 사실 여부가 확인되지 않은 콘텐츠는 공유하거나 전달하지 않습니다.</strong></p>
</details>
</div>

<div class="info-box">
<strong>문제 5.</strong> "AI 윤리는 개발자만의 책임이다"라는 주장에 대해 반론을 제시하고, 일반 AI 사용자가 실천할 수 있는 윤리적 행동 5가지를 제시하시오.<br/>
<details>
<summary>모범 답안 확인</summary>
<p><strong>모범 답안: 반론 — AI 윤리는 개발자뿐만 아니라 AI를 사용하는 모든 사람의 공동 책임입니다. AI 시스템은 개발자가 만들지만, 실제로 사회에 영향을 미치는 것은 사용자의 활용 방식에 따라 결정됩니다. 사용자의 비윤리적 사용(딥페이크 제작, 허위정보 유포 등)은 개발자의 윤리적 개발만으로는 방지할 수 없습니다. 실천 방안: (1) AI 결과물을 항상 비판적으로 검토하고 사실 확인한다, (2) 개인정보와 기밀 정보를 AI에 입력하지 않는다, (3) AI 활용 사실을 투명하게 밝힌다, (4) AI 생성 콘텐츠로 타인에게 해를 끼치지 않는다, (5) 확인되지 않은 AI 생성 정보를 무분별하게 공유하지 않는다.</strong></p>
</details>
</div>
    `
  }
];
