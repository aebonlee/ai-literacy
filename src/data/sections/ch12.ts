/**
 * Chapter 12: AI의 미래와 사회적 영향
 * AGI/ASI, 규제, 환경, 불평등, 국가경쟁력, 인간 공존, 미래 시나리오, AI 리터러시의 미래
 */
export const CH12_SECTIONS = [
  {
    id: 1201,
    chapter_id: 12,
    title: '12.1 AGI와 ASI',
    sort_order: 1,
    content: `
<h3>범용 인공지능(AGI)과 초인공지능(ASI)</h3>
<p>현재의 AI는 특정 과제에 특화된 '좁은 AI(Narrow AI)'입니다. 그러나 AI 연구의 궁극적 목표 중 하나는 인간 수준의 범용적 지능을 가진 AGI와, 나아가 인간을 초월하는 ASI의 개발입니다. 이 개념은 AI의 미래를 이해하는 데 핵심적입니다.</p>

<h3>AI의 발전 단계</h3>
<table>
<thead>
<tr><th>단계</th><th>명칭</th><th>특성</th><th>현재 상태</th></tr>
</thead>
<tbody>
<tr><td>1단계</td><td>좁은 AI<br/>(Narrow AI / ANI)</td><td>특정 과제만 수행 가능. 바둑, 번역, 이미지 인식 등 하나의 영역에 특화</td><td>현재 수준. 대부분의 AI 기술이 여기에 해당</td></tr>
<tr><td>2단계</td><td>범용 인공지능<br/>(AGI)</td><td>인간처럼 다양한 과제를 이해하고 학습하며 수행 가능. 전이 학습, 상식적 추론 포함</td><td>아직 달성되지 않음. 활발히 연구 중</td></tr>
<tr><td>3단계</td><td>초인공지능<br/>(ASI)</td><td>모든 지적 영역에서 인간을 크게 초월하는 지능. 자기 개선 능력 보유</td><td>이론적 단계. 실현 여부와 시기 불확실</td></tr>
</tbody>
</table>

<h3>AGI의 핵심 특성</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>현재 AI (Narrow AI)</h4>
<ul>
<li>특정 과제에만 뛰어남</li>
<li>학습한 영역 밖에서는 무능</li>
<li>상식적 추론 능력 부족</li>
<li>인간의 지속적 감독 필요</li>
<li>목표를 스스로 설정하지 못함</li>
</ul>
</div>
<div class="compare-item">
<h4>범용 인공지능 (AGI)</h4>
<ul>
<li>다양한 과제를 유연하게 수행</li>
<li>새로운 상황에 스스로 적응</li>
<li>상식과 맥락을 이해</li>
<li>자율적 학습과 추론 가능</li>
<li>목표를 스스로 설정하고 계획 수립</li>
</ul>
</div>
</div>

<h3>AGI 달성 시기에 대한 전문가 전망</h3>
<div class="info-box">
<strong>다양한 예측</strong><br/>
<ul>
<li><strong>낙관적 전망 (10~20년 내)</strong>: 레이 커즈와일, 일부 AI 기업 CEO들은 2030~2040년경 AGI 실현을 예측</li>
<li><strong>신중한 전망 (30~50년 이상)</strong>: 대다수 AI 연구자들은 근본적인 기술적 돌파구가 필요하다고 판단</li>
<li><strong>회의적 전망</strong>: 일부 학자들은 AGI 자체가 달성 불가능하거나, 지능의 정의 자체를 재검토해야 한다고 주장</li>
</ul>
</div>

<h3>ASI와 기술적 특이점</h3>
<p>'기술적 특이점(Technological Singularity)'은 AI가 인간의 지능을 초월하여 자기 자신을 지속적으로 개선하기 시작하는 시점을 의미합니다. 이 지점 이후의 변화는 인간이 예측할 수 없을 정도로 급격할 것으로 예상됩니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>현재</strong><br/>좁은 AI<br/>특정 과제 수행</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>미래</strong><br/>AGI<br/>인간 수준의 범용 지능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이론적</strong><br/>ASI<br/>인간 초월 지능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>가설</strong><br/>특이점<br/>자기 개선의 폭발적 가속</div>
</div>

<div class="info-box warning">
<strong>AGI/ASI에 대한 균형 잡힌 시각</strong><br/>
AGI와 ASI에 대해서는 과도한 낙관도, 과도한 두려움도 경계해야 합니다. 중요한 것은 현재 AI 기술의 발전 방향을 이해하고, 안전하고 유익한 방향으로 기술이 발전할 수 있도록 사회적 논의와 준비를 하는 것입니다.
</div>
    `
  },
  {
    id: 1202,
    chapter_id: 12,
    title: '12.2 AI 규제와 거버넌스',
    sort_order: 2,
    content: `
<h3>글로벌 AI 규제 현황</h3>
<p>AI 기술의 급속한 발전에 따라, 전 세계적으로 AI의 개발과 사용을 규제하기 위한 법적, 제도적 프레임워크가 구축되고 있습니다. AI 거버넌스는 AI가 안전하고 윤리적이며 공정하게 개발되고 사용되도록 보장하는 전반적인 관리 체계를 의미합니다.</p>

<h3>주요 AI 규제 모델</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>규칙 기반 규제 (EU 모델)</h4>
<ul>
<li>구체적인 법률과 규칙으로 AI를 규제</li>
<li>EU AI Act가 대표적</li>
<li>위험 기반 분류 체계 적용</li>
<li>강제적 이행과 처벌 규정</li>
<li>장점: 명확한 기준, 강력한 보호</li>
<li>단점: 기술 발전 속도에 뒤처질 수 있음</li>
</ul>
</div>
<div class="compare-item">
<h4>원칙 기반 규제 (미국 모델)</h4>
<ul>
<li>광범위한 원칙과 가이드라인 제시</li>
<li>산업별 자율 규제 장려</li>
<li>NIST AI 위험 관리 프레임워크</li>
<li>혁신 친화적 접근</li>
<li>장점: 유연성, 혁신 촉진</li>
<li>단점: 구속력 약함, 일관성 부족</li>
</ul>
</div>
<div class="compare-item">
<h4>국가 주도 규제 (중국 모델)</h4>
<ul>
<li>정부가 AI 개발과 규제를 주도</li>
<li>분야별 세부 규정 신속 제정</li>
<li>알고리즘, 딥페이크, 생성형 AI 규정</li>
<li>국가 안보와 사회 안정 중시</li>
<li>장점: 빠른 대응, 강력한 통제</li>
<li>단점: 혁신 저해, 국제 기준과 차이</li>
</ul>
</div>
</div>

<h3>AI 거버넌스의 핵심 요소</h3>
<table>
<thead>
<tr><th>요소</th><th>내용</th><th>실천 방안</th></tr>
</thead>
<tbody>
<tr><td>투명성</td><td>AI 시스템의 작동 원리와 의사결정 과정 공개</td><td>알고리즘 공개, 모델 카드, 영향 평가 공개</td></tr>
<tr><td>책임성</td><td>AI의 결과에 대한 명확한 책임 체계</td><td>책임 주체 지정, 감사 체계, 피해 구제</td></tr>
<tr><td>공정성</td><td>AI가 특정 집단을 차별하지 않도록 보장</td><td>편향 테스트, 공정성 지표 모니터링</td></tr>
<tr><td>안전성</td><td>AI 시스템의 안전한 작동 보장</td><td>안전 테스트, 인증, 사후 모니터링</td></tr>
<tr><td>프라이버시</td><td>개인정보 수집과 활용의 적절한 관리</td><td>데이터 최소화, 동의 절차, 익명화</td></tr>
</tbody>
</table>

<h3>AI 규제의 도전과제</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>속도 문제</strong><br/>기술 발전이<br/>규제보다 빠름</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>범위 문제</strong><br/>AI의 정의와<br/>적용 범위 설정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>국제 조화</strong><br/>국가 간 규제<br/>일관성 확보</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>균형 문제</strong><br/>혁신 촉진과<br/>위험 방지의 균형</div>
</div>

<div class="info-box">
<strong>한국의 AI 규제 동향</strong><br/>
한국은 'AI 기본법' 제정을 추진하며, AI의 개발과 활용에 관한 기본 원칙, 고위험 AI에 대한 관리 체계, AI 윤리 위원회 설치 등을 주요 내용으로 하고 있습니다. 혁신 촉진과 안전 확보의 균형을 추구하는 한국형 AI 거버넌스 모델을 구축하고 있습니다.
</div>
    `
  },
  {
    id: 1203,
    chapter_id: 12,
    title: '12.3 AI와 환경',
    sort_order: 3,
    content: `
<h3>AI의 환경적 영향</h3>
<p>AI 기술은 환경 문제 해결에 도움을 줄 수 있지만, 동시에 AI 시스템 자체가 상당한 환경 비용을 발생시킵니다. AI의 환경적 영향을 이해하고 지속 가능한 AI 개발 방향을 모색하는 것이 중요합니다.</p>

<h3>AI의 에너지 소비</h3>
<div class="info-box warning">
<strong>AI 훈련의 탄소 발자국</strong><br/>
대규모 AI 모델 한 개를 훈련하는 데 드는 에너지는 자동차 5대가 일생 동안 배출하는 CO2와 맞먹는 양을 발생시킬 수 있습니다. GPT-4 규모의 모델 훈련에는 수천 개의 GPU가 수개월간 가동되며, 이에 따른 전력 소비가 막대합니다.
</div>

<table>
<thead>
<tr><th>AI 활동</th><th>에너지 소비 수준</th><th>비교 기준</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT 질의 1회</td><td>구글 검색의 약 10배 전력</td><td>구글 검색 1회 ≈ 0.3Wh</td></tr>
<tr><td>GPT-3 훈련 (2020)</td><td>약 1,287 MWh</td><td>미국 가정 120가구 연간 전력량</td></tr>
<tr><td>대규모 모델 훈련 (2024~)</td><td>수천~수만 MWh</td><td>소규모 도시 수준의 전력 소비</td></tr>
<tr><td>AI 데이터센터 (글로벌)</td><td>전 세계 전력의 1~2%</td><td>2030년 3~4%로 증가 전망</td></tr>
</tbody>
</table>

<h3>AI가 환경에 미치는 양면적 영향</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>부정적 영향 (환경 비용)</h4>
<ul>
<li><strong>탄소 배출</strong>: 모델 훈련과 추론에 막대한 전력 소비</li>
<li><strong>물 소비</strong>: 데이터센터 냉각에 대량의 물 사용</li>
<li><strong>전자 폐기물</strong>: GPU 등 하드웨어의 빠른 교체 주기</li>
<li><strong>희귀 광물 채굴</strong>: AI 칩 제조를 위한 자원 채굴</li>
</ul>
</div>
<div class="compare-item">
<h4>긍정적 영향 (환경 해결)</h4>
<ul>
<li><strong>에너지 최적화</strong>: 건물, 공장, 전력망의 에너지 효율 개선</li>
<li><strong>기후 예측</strong>: 정확한 기후 모델링과 재해 예측</li>
<li><strong>스마트 농업</strong>: 물과 비료 사용 최적화</li>
<li><strong>환경 모니터링</strong>: 산림, 해양, 대기 실시간 감시</li>
</ul>
</div>
</div>

<h3>그린 AI(Green AI) 전략</h3>
<p>그린 AI는 AI의 환경적 영향을 최소화하면서도 성능을 유지하는 지속 가능한 AI 개발 접근법입니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>효율적 모델</strong><br/>모델 경량화<br/>지식 증류<br/>가지치기(Pruning)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>효율적 연산</strong><br/>전용 하드웨어<br/>혼합 정밀도 연산<br/>분산 학습 최적화</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>재생 에너지</strong><br/>데이터센터<br/>재생에너지 전환<br/>탄소 중립 목표</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>측정과 보고</strong><br/>탄소 발자국 추적<br/>효율성 지표 공개<br/>환경 영향 보고</div>
</div>

<div class="info-box">
<strong>AI 기업들의 환경 대응</strong><br/>
구글, 마이크로소프트, 메타 등 주요 AI 기업들은 2030년까지 탄소 중립 또는 탄소 네거티브(순배출 제로 이하)를 선언하고 있습니다. 그러나 AI 모델의 규모가 기하급수적으로 커지면서, 에너지 효율 개선 속도보다 총 에너지 소비 증가 속도가 빠른 '리바운드 효과'가 우려되고 있습니다.
</div>
    `
  },
  {
    id: 1204,
    chapter_id: 12,
    title: '12.4 AI와 사회적 불평등',
    sort_order: 4,
    content: `
<h3>AI와 불평등의 관계</h3>
<p>AI 기술은 사회의 효율성과 생산성을 높이는 동시에, 기존의 불평등을 심화시키거나 새로운 형태의 불평등을 만들어낼 수 있습니다. AI의 혜택이 모든 사회 구성원에게 공평하게 돌아갈 수 있도록 하는 것은 중요한 사회적 과제입니다.</p>

<h3>AI가 심화시킬 수 있는 불평등</h3>
<table>
<thead>
<tr><th>불평등 유형</th><th>현상</th><th>구체적 사례</th></tr>
</thead>
<tbody>
<tr><td>경제적 불평등</td><td>AI로 인한 부의 집중과 일자리 양극화</td><td>AI 활용 기업의 초과 수익, 자동화로 인한 중산층 일자리 감소</td></tr>
<tr><td>디지털 격차<br/>(Digital Divide)</td><td>AI 기술 접근성의 차이</td><td>도시-농촌, 세대, 소득 수준에 따른 AI 접근 격차</td></tr>
<tr><td>AI 격차<br/>(AI Divide)</td><td>AI 활용 능력의 차이</td><td>AI 리터러시 수준에 따른 생산성 및 기회의 격차</td></tr>
<tr><td>글로벌 격차</td><td>국가 간 AI 역량 차이</td><td>선진국과 개발도상국의 AI 기술 및 인프라 차이</td></tr>
<tr><td>알고리즘 불평등</td><td>AI 시스템의 편향으로 인한 차별</td><td>채용, 대출, 형사 사법 등에서의 AI 편향</td></tr>
</tbody>
</table>

<h3>디지털 격차의 계층</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1차 격차</strong><br/>접근 격차<br/>인터넷/기기 보유 여부</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2차 격차</strong><br/>활용 격차<br/>디지털 기술 활용 능력</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3차 격차</strong><br/>결과 격차<br/>디지털 활용의 실제 혜택 차이</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 격차</strong><br/>AI 리터러시<br/>AI 활용 능력의 차이</div>
</div>

<h3>불평등 완화를 위한 접근</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정책적 대응</h4>
<ul>
<li><strong>AI 교육 보편화</strong>: 모든 시민이 AI 리터러시를 갖출 수 있도록 교육 기회 제공</li>
<li><strong>디지털 인프라 확충</strong>: 농촌, 소외 지역의 디지털 접근성 개선</li>
<li><strong>사회 안전망 강화</strong>: AI로 인한 실직자를 위한 재교육과 사회 보장</li>
<li><strong>AI 공정성 규제</strong>: AI 시스템의 편향과 차별을 방지하는 법적 장치</li>
</ul>
</div>
<div class="compare-item">
<h4>기술적 대응</h4>
<ul>
<li><strong>공정한 AI 개발</strong>: 다양한 데이터와 관점을 반영한 AI 모델 개발</li>
<li><strong>오픈소스 AI</strong>: AI 기술의 민주화를 위한 오픈소스 생태계</li>
<li><strong>접근성 높은 AI 도구</strong>: 비전문가도 사용할 수 있는 AI 인터페이스</li>
<li><strong>다국어/다문화 AI</strong>: 영어 중심이 아닌 다양한 언어와 문화를 지원하는 AI</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>AI 격차의 복합적 성격</strong><br/>
AI 격차는 기존의 경제적, 교육적, 지역적 격차와 결합하여 증폭되는 경향이 있습니다. 예를 들어, 저소득층은 AI 교육 기회가 적고 → AI 활용 능력이 낮으며 → AI 시대의 좋은 일자리를 얻기 어렵고 → 소득 격차가 더 벌어지는 악순환이 발생할 수 있습니다. 이러한 복합적 불평등을 해소하기 위해서는 교육, 복지, 기술 정책이 통합적으로 설계되어야 합니다.
</div>
    `
  },
  {
    id: 1205,
    chapter_id: 12,
    title: '12.5 AI와 국가 경쟁력',
    sort_order: 5,
    content: `
<h3>국가 전략 기술로서의 AI</h3>
<p>AI는 21세기 국가 경쟁력을 결정짓는 핵심 전략 기술로 부상했습니다. 전 세계 주요 국가들은 AI를 국가 안보, 경제 성장, 사회 혁신의 핵심 동력으로 인식하고, 대규모 투자와 전략적 정책을 추진하고 있습니다.</p>

<h3>글로벌 AI 경쟁 현황</h3>
<table>
<thead>
<tr><th>국가</th><th>AI 전략</th><th>주요 강점</th><th>투자 규모</th></tr>
</thead>
<tbody>
<tr><td>미국</td><td>National AI Initiative<br/>민간 주도 혁신</td><td>빅테크 기업, 대학 연구, 벤처 생태계</td><td>민간 투자 세계 최대</td></tr>
<tr><td>중국</td><td>차세대 AI 발전 계획<br/>2030년 AI 세계 1위 목표</td><td>대규모 데이터, 정부 주도 투자, 빠른 실행</td><td>정부 + 민간 대규모 투자</td></tr>
<tr><td>EU</td><td>AI Act + 투자 확대<br/>인간 중심 AI</td><td>규제 선도, 윤리적 AI 프레임워크</td><td>2030년까지 €200억 목표</td></tr>
<tr><td>한국</td><td>AI 국가전략<br/>AI 강국 도약</td><td>반도체, IT 인프라, 디지털 전환 역량</td><td>정부 주도 + 민간 협력</td></tr>
<tr><td>일본</td><td>Society 5.0<br/>AI + 로봇 융합</td><td>로보틱스, 제조업 AI, 고령화 대응</td><td>정부 + 대기업 투자</td></tr>
</tbody>
</table>

<h3>AI 경쟁력의 핵심 요소</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>하드 파워</h4>
<ul>
<li><strong>컴퓨팅 인프라</strong>: GPU/TPU, 슈퍼컴퓨터, 클라우드</li>
<li><strong>데이터</strong>: 대규모 고품질 데이터 확보 능력</li>
<li><strong>반도체</strong>: AI 칩 설계 및 제조 역량</li>
<li><strong>투자</strong>: 연구개발 투자 규모</li>
</ul>
</div>
<div class="compare-item">
<h4>소프트 파워</h4>
<ul>
<li><strong>인재</strong>: AI 연구자, 엔지니어 양성과 유치</li>
<li><strong>생태계</strong>: 스타트업, 대학, 기업의 혁신 네트워크</li>
<li><strong>규제 환경</strong>: 혁신 친화적이면서 안전한 규제</li>
<li><strong>사회적 수용</strong>: AI에 대한 국민의 이해와 수용도</li>
</ul>
</div>
</div>

<h3>한국의 AI 전략과 과제</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>강점</strong><br/>세계 1위 반도체<br/>높은 디지털 인프라<br/>빠른 기술 도입</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>약점</strong><br/>AI 핵심 인재 부족<br/>대형 AI 모델 격차<br/>데이터 규모 제한</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>기회</strong><br/>AI 반도체 시너지<br/>제조업 AI 전환<br/>K-AI 콘텐츠</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>위협</strong><br/>미중 기술 패권 경쟁<br/>인재 해외 유출<br/>규제 지연</div>
</div>

<div class="info-box">
<strong>AI 주권(AI Sovereignty)</strong><br/>
AI 주권은 국가가 자체적인 AI 역량을 보유하고, 핵심 AI 기술과 데이터에 대한 자율성을 유지하는 것을 의미합니다. AI 기술이 소수 국가와 기업에 집중되면서, 많은 국가들이 AI 주권 확보를 국가적 과제로 설정하고 있습니다. 한국도 한국어 대규모 언어 모델 개발, AI 반도체 자립 등을 통해 AI 주권 확보를 추진하고 있습니다.
</div>
    `
  },
  {
    id: 1206,
    chapter_id: 12,
    title: '12.6 AI와 인간의 공존',
    sort_order: 6,
    content: `
<h3>인간-AI 공존의 시대</h3>
<p>AI와 인간의 관계를 '대체'가 아닌 '공존'과 '협력'의 관점에서 바라보는 것이 중요합니다. '증강 지능(Augmented Intelligence)'이라는 개념은 AI가 인간의 지능을 대체하는 것이 아니라 확장하고 보완하는 역할을 한다는 관점을 강조합니다.</p>

<h3>인간-AI 협업 모델</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>AI가 잘하는 것</h4>
<ul>
<li>대량 데이터의 빠른 처리와 패턴 인식</li>
<li>24시간 지치지 않는 연속 작업</li>
<li>일관성 있는 반복 업무 수행</li>
<li>다국어 동시 처리</li>
<li>위험 환경에서의 작업</li>
</ul>
</div>
<div class="compare-item">
<h4>인간이 잘하는 것</h4>
<ul>
<li>맥락 이해와 상식적 판단</li>
<li>공감과 감성적 소통</li>
<li>윤리적 가치 판단</li>
<li>창의적 발상과 혁신</li>
<li>복잡한 사회적 상호작용</li>
</ul>
</div>
</div>

<h3>인간-AI 협업의 단계</h3>
<table>
<thead>
<tr><th>단계</th><th>협업 형태</th><th>인간의 역할</th><th>AI의 역할</th><th>사례</th></tr>
</thead>
<tbody>
<tr><td>1단계</td><td>도구적 활용</td><td>주도적 의사결정</td><td>단순 보조 도구</td><td>AI 맞춤법 검사기</td></tr>
<tr><td>2단계</td><td>의사결정 지원</td><td>최종 판단 및 결정</td><td>분석 및 추천 제공</td><td>의료 AI 진단 보조</td></tr>
<tr><td>3단계</td><td>협력적 파트너</td><td>방향 설정, 감독</td><td>독립적 업무 수행</td><td>자율주행차 (인간 감독)</td></tr>
<tr><td>4단계</td><td>자율적 위임</td><td>목표 설정, 예외 처리</td><td>자율적 실행</td><td>완전 자동화 시스템</td></tr>
</tbody>
</table>

<h3>공존을 위한 원칙</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>인간 중심</strong><br/>AI는 인간을 위한<br/>도구이자 파트너</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>상호 보완</strong><br/>각자의 강점을<br/>극대화하는 협업</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>인간 통제</strong><br/>중요한 결정에서<br/>인간의 최종 판단</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>지속적 적응</strong><br/>기술 변화에 따른<br/>관계 재정립</div>
</div>

<h3>분야별 인간-AI 협업 사례</h3>
<ol>
<li><strong>의료</strong>: AI가 영상 판독과 데이터 분석을 수행하고, 의사가 환자와의 소통과 최종 진단을 담당</li>
<li><strong>법률</strong>: AI가 판례 검색과 문서 분석을 수행하고, 변호사가 전략 수립과 법정 변론을 담당</li>
<li><strong>교육</strong>: AI가 개인화된 학습 경로와 평가를 제공하고, 교사가 동기 부여와 멘토링을 담당</li>
<li><strong>예술</strong>: AI가 아이디어 발상과 초안 생성을 보조하고, 예술가가 최종 창작과 감성 표현을 담당</li>
</ol>

<div class="info-box">
<strong>증강 지능(Augmented Intelligence)</strong><br/>
증강 지능은 AI를 '인간 지능의 대체재'가 아닌 '인간 지능의 확장'으로 바라보는 관점입니다. 안경이 시력을 보완하듯, AI는 인간의 인지 능력, 분석 능력, 의사결정 능력을 보완하고 확장하는 도구입니다. 이 관점은 인간이 AI 시대에도 중심적 역할을 유지할 수 있다는 희망적 비전을 제시합니다.
</div>
    `
  },
  {
    id: 1207,
    chapter_id: 12,
    title: '12.7 AI 미래 시나리오',
    sort_order: 7,
    content: `
<h3>AI 미래의 세 가지 시나리오</h3>
<p>AI의 미래는 기술의 발전 방향, 사회적 대응, 규제 정책, 국제 협력 등 다양한 요인에 의해 결정됩니다. 여기서는 낙관적, 현실적, 비관적 세 가지 시나리오를 통해 AI의 미래 가능성을 탐색합니다.</p>

<h3>시나리오 비교</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>낙관적 시나리오</h4>
<p><em>"AI가 인류의 가장 큰 도전들을 해결한다"</em></p>
<ul>
<li>AI가 의료, 교육, 환경 문제를 혁신적으로 해결</li>
<li>개인 맞춤형 의료로 질병 조기 발견과 치료</li>
<li>AI 교육으로 교육 격차 해소</li>
<li>AI 기반 기후변화 대응 기술 발전</li>
<li>새로운 일자리가 사라지는 일자리보다 많음</li>
<li>인간은 창의적이고 의미 있는 일에 집중</li>
</ul>
</div>
<div class="compare-item">
<h4>현실적 시나리오</h4>
<p><em>"기회와 도전이 공존하는 전환의 시대"</em></p>
<ul>
<li>AI가 많은 분야에서 생산성을 크게 향상</li>
<li>일부 직업은 사라지지만 새 직업도 생성</li>
<li>사회적 적응 과정에서 일시적 혼란과 갈등</li>
<li>규제와 기술 발전의 지속적인 조율 필요</li>
<li>AI 혜택의 불균등한 분배에 대한 지속적 논의</li>
<li>점진적인 사회 제도와 교육 체계의 변화</li>
</ul>
</div>
<div class="compare-item">
<h4>비관적 시나리오</h4>
<p><em>"통제되지 않는 AI가 사회적 위기를 초래한다"</em></p>
<ul>
<li>대규모 일자리 대체로 실업률 급증</li>
<li>AI 기술의 소수 기업 독점으로 부의 극심한 집중</li>
<li>딥페이크와 허위 정보로 사회적 신뢰 붕괴</li>
<li>AI 무기와 감시 기술의 확산</li>
<li>프라이버시 침해와 디지털 감시 사회</li>
<li>AI 사고로 인한 대규모 피해</li>
</ul>
</div>
</div>

<h3>미래 결정 요인</h3>
<table>
<thead>
<tr><th>요인</th><th>긍정적 방향</th><th>부정적 방향</th></tr>
</thead>
<tbody>
<tr><td>규제 정책</td><td>혁신과 안전의 균형 잡힌 규제</td><td>과도한 규제 또는 무규제</td></tr>
<tr><td>교육 체계</td><td>AI 리터러시 보편 교육</td><td>교육 격차 확대</td></tr>
<tr><td>국제 협력</td><td>AI 안전에 대한 글로벌 합의</td><td>AI 군비 경쟁 심화</td></tr>
<tr><td>사회 안전망</td><td>전환기 노동자 보호 체계</td><td>사회적 갈등과 불평등 심화</td></tr>
<tr><td>기업 윤리</td><td>책임감 있는 AI 개발</td><td>이익만 추구하는 무분별한 개발</td></tr>
</tbody>
</table>

<h3>바람직한 미래를 위한 행동</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>개인</strong><br/>AI 리터러시 함양<br/>평생 학습<br/>비판적 AI 활용</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>기업</strong><br/>책임감 있는 AI 개발<br/>직원 재교육<br/>윤리적 AI 활용</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>정부</strong><br/>균형 잡힌 규제<br/>교육 투자<br/>사회 안전망 구축</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>국제사회</strong><br/>글로벌 협력<br/>AI 안전 합의<br/>기술 격차 해소</div>
</div>

<div class="info-box">
<strong>우리의 선택이 미래를 결정한다</strong><br/>
AI의 미래는 정해진 것이 아닙니다. 기술 자체는 중립적이며, 그 결과는 우리가 기술을 어떻게 개발하고, 규제하고, 활용하는지에 달려 있습니다. 정보에 기반한 시민의 참여, 책임감 있는 기업의 노력, 현명한 정책 결정이 합쳐질 때 AI는 인류에게 진정한 이익을 가져다줄 수 있습니다.
</div>
    `
  },
  {
    id: 1208,
    chapter_id: 12,
    title: '12.8 AI 리터러시의 미래',
    sort_order: 8,
    content: `
<h3>평생 AI 학습의 시대</h3>
<p>AI 기술은 빠르게 진화하고 있으며, 이에 따라 AI 리터러시도 고정된 지식이 아니라 지속적으로 업데이트해야 하는 동적 역량입니다. AI 리터러시의 미래는 평생 학습, 비판적 사고, 윤리적 인식의 지속적인 발전에 달려 있습니다.</p>

<h3>AI 리터러시의 발전 방향</h3>
<table>
<thead>
<tr><th>현재</th><th>가까운 미래 (3~5년)</th><th>중장기 미래 (5~10년 이상)</th></tr>
</thead>
<tbody>
<tr><td>AI 기본 개념 이해</td><td>AI 도구의 숙련된 활용</td><td>AI와의 자연스러운 협업</td></tr>
<tr><td>생성형 AI 체험적 활용</td><td>목적별 AI 전략적 활용</td><td>AI 에이전트와 일상적 상호작용</td></tr>
<tr><td>AI 윤리의 기초 인식</td><td>AI 윤리의 실천적 적용</td><td>AI 거버넌스 참여와 시민적 감시</td></tr>
<tr><td>데이터 기초 이해</td><td>데이터 기반 의사결정</td><td>AI-인간 협력적 의사결정</td></tr>
</tbody>
</table>

<h3>미래 AI 리터러시의 핵심 요소</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>기술적 이해</h4>
<ul>
<li>새로운 AI 기술의 원리와 한계 파악</li>
<li>멀티모달 AI, AI 에이전트 등 새로운 형태의 AI 이해</li>
<li>AI 도구의 효과적 선택과 활용</li>
<li>AI 결과물의 품질 평가 능력</li>
</ul>
</div>
<div class="compare-item">
<h4>비판적 리터러시</h4>
<ul>
<li>AI 생성 콘텐츠의 진위 판별</li>
<li>AI 편향과 한계의 인식</li>
<li>AI 의존성에 대한 자기 성찰</li>
<li>AI 정보와 인간 판단의 균형</li>
</ul>
</div>
<div class="compare-item">
<h4>윤리적 인식</h4>
<ul>
<li>AI 사용의 윤리적 함의 고려</li>
<li>AI 시대의 디지털 시민의식</li>
<li>AI 정책에 대한 시민적 참여</li>
<li>다음 세대를 위한 AI 윤리 교육</li>
</ul>
</div>
</div>

<h3>AI 리터러시 유지를 위한 전략</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>정보 추적</strong><br/>AI 뉴스, 논문<br/>동향 정기 확인</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>실습 학습</strong><br/>새로운 AI 도구<br/>직접 체험</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>커뮤니티 참여</strong><br/>학습 모임<br/>온라인 커뮤니티</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>성찰과 적용</strong><br/>배운 것을<br/>일상에 적용</div>
</div>

<h3>추천 AI 리터러시 학습 자원</h3>
<ol>
<li><strong>온라인 강좌</strong>: Coursera, edX, K-MOOC의 AI 관련 과정</li>
<li><strong>뉴스레터</strong>: AI 관련 국내외 뉴스레터 구독</li>
<li><strong>팟캐스트/유튜브</strong>: AI 전문가의 해설 콘텐츠</li>
<li><strong>서적</strong>: AI 리터러시 관련 교양 서적</li>
<li><strong>실습</strong>: AI 도구를 일상 업무에 직접 적용해보기</li>
</ol>

<div class="info-box">
<strong>AI 리터러시는 여정이다</strong><br/>
AI 리터러시는 한 번 배우면 끝나는 것이 아니라, 평생에 걸친 학습 여정입니다. 중요한 것은 완벽한 전문가가 되는 것이 아니라, AI 기술의 변화에 관심을 갖고, 새로운 것을 배우려는 자세를 유지하며, 비판적이고 윤리적인 AI 활용 습관을 기르는 것입니다. 이 과정을 통해 우리는 AI 시대의 능동적 시민으로 성장할 수 있습니다.
</div>
    `
  },
  {
    id: 1209,
    chapter_id: 12,
    title: '12.9 학습 정리',
    sort_order: 9,
    content: `
<h3>Chapter 12 학습 정리: AI의 미래와 사회적 영향</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
AI의 미래는 기술의 발전 방향뿐 아니라 사회적 선택에 의해 결정됩니다. AGI/ASI의 가능성, 규제와 거버넌스, 환경적 영향, 사회적 불평등, 국가 경쟁력, 인간과의 공존 등 다양한 측면을 종합적으로 이해하고, 바람직한 미래를 위해 적극적으로 참여하는 것이 중요합니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>AGI와 ASI</td><td>현재의 좁은 AI에서 범용 AI(AGI), 초인공지능(ASI)으로의 발전 가능성. 실현 시기와 가능성에 대해 전문가 의견이 분분합니다.</td></tr>
<tr><td>AI 규제와 거버넌스</td><td>규칙 기반(EU), 원칙 기반(미국), 국가 주도(중국) 등 다양한 규제 모델이 존재합니다. 혁신과 안전의 균형이 핵심 과제입니다.</td></tr>
<tr><td>AI와 환경</td><td>AI는 환경 문제 해결에 기여하지만, AI 시스템 자체가 상당한 에너지와 자원을 소비합니다. 그린 AI 전략이 필요합니다.</td></tr>
<tr><td>AI와 불평등</td><td>경제적 불평등, 디지털 격차, AI 격차, 알고리즘 차별 등 다양한 형태의 불평등이 심화될 수 있습니다.</td></tr>
<tr><td>AI와 국가 경쟁력</td><td>AI는 국가 전략 기술로, 인재, 인프라, 데이터, 규제 환경, 생태계가 핵심 경쟁 요소입니다.</td></tr>
<tr><td>인간-AI 공존</td><td>증강 지능 관점에서 AI는 인간 능력의 확장 도구입니다. 각자의 강점을 살리는 협업 모델이 핵심입니다.</td></tr>
<tr><td>미래 시나리오</td><td>낙관적, 현실적, 비관적 시나리오가 존재하며, 우리의 선택이 미래를 결정합니다.</td></tr>
<tr><td>AI 리터러시의 미래</td><td>AI 리터러시는 평생 학습 역량으로, 기술적 이해, 비판적 사고, 윤리적 인식의 지속적 발전이 필요합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>ANI (Artificial Narrow Intelligence)</strong>: 좁은 AI, 특정 과제에 특화된 현재 수준의 AI</li>
<li><strong>AGI (Artificial General Intelligence)</strong>: 범용 인공지능, 인간 수준의 범용적 지능을 가진 AI</li>
<li><strong>ASI (Artificial Super Intelligence)</strong>: 초인공지능, 모든 영역에서 인간을 초월하는 AI</li>
<li><strong>기술적 특이점</strong>: AI가 자기 자신을 개선하기 시작하는 전환점</li>
<li><strong>AI 거버넌스</strong>: AI의 개발과 사용을 관리하는 정책, 규제, 제도 체계</li>
<li><strong>그린 AI</strong>: 환경적 영향을 최소화하는 지속 가능한 AI 개발 접근법</li>
<li><strong>AI 격차(AI Divide)</strong>: AI 활용 능력의 차이로 인한 새로운 형태의 디지털 격차</li>
<li><strong>AI 주권</strong>: 국가가 핵심 AI 기술과 데이터에 대한 자율성을 유지하는 것</li>
<li><strong>증강 지능</strong>: AI를 인간 지능의 확장 도구로 바라보는 관점</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>닉 보스트롬 — 《슈퍼인텔리전스》</li>
<li>스튜어트 러셀 — 《어떻게 인공지능과 공존할 것인가》</li>
<li>한국정보화진흥원 — AI 시대의 사회적 영향 보고서</li>
<li>OECD AI Policy Observatory</li>
</ul>
    `
  },
  {
    id: 1210,
    chapter_id: 12,
    title: '12.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h3>Chapter 12 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 AI의 미래와 사회적 영향에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. AGI와 ANI</h4>
<div class="info-box">
<p>현재의 AI 기술 수준에 대한 설명으로 <strong>올바른</strong> 것은?</p>
<ol type="a">
<li>이미 AGI(범용 인공지능)가 실현되었다</li>
<li>현재 AI는 대부분 ANI(좁은 AI)로, 특정 과제에만 특화되어 있다</li>
<li>ASI(초인공지능)가 이미 인간의 지능을 초월했다</li>
<li>기술적 특이점이 이미 도달했다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>현재의 AI는 대부분 ANI(Artificial Narrow Intelligence)로, 바둑, 번역, 이미지 인식 등 특정 과제에만 뛰어난 성능을 발휘합니다. AGI와 ASI는 아직 실현되지 않았으며, 기술적 특이점도 도달하지 않았습니다.</p>
</details>
</div>

<h4>문제 2. AI 규제 모델</h4>
<div class="info-box">
<p>EU AI Act의 접근 방식으로 올바른 것은?</p>
<ol type="a">
<li>모든 AI를 동일한 수준으로 규제한다</li>
<li>AI 사용을 전면 금지한다</li>
<li>위험 수준에 따라 AI를 분류하여 차등 규제한다</li>
<li>AI 기업의 자율 규제에만 의존한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>EU AI Act는 위험 기반 접근법(Risk-based Approach)을 채택하여 AI 시스템을 허용 불가 위험, 고위험, 제한적 위험, 최소 위험의 4단계로 분류하고, 각 단계에 맞는 차등적 규제를 적용합니다.</p>
</details>
</div>

<h4>문제 3. AI와 환경</h4>
<div class="info-box">
<p>AI의 환경적 영향에 대한 설명으로 <strong>적절하지 않은</strong> 것은?</p>
<ol type="a">
<li>대규모 AI 모델 훈련에는 막대한 전력이 소비된다</li>
<li>AI 데이터센터는 냉각에 대량의 물을 사용한다</li>
<li>AI는 환경에 부정적 영향만 미치므로 사용을 줄여야 한다</li>
<li>그린 AI는 모델 경량화와 재생에너지 활용 등을 통해 환경 영향을 줄이는 접근법이다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI는 환경에 부정적 영향(에너지 소비, 탄소 배출)을 미치지만, 동시에 에너지 최적화, 기후 예측, 스마트 농업 등을 통해 환경 문제 해결에도 기여합니다. 부정적 영향만 강조하는 것은 균형 잡힌 시각이 아닙니다.</p>
</details>
</div>

<h4>문제 4. AI와 사회적 불평등</h4>
<div class="info-box">
<p>AI 기술 접근성과 활용 능력의 차이로 인해 발생하는 새로운 형태의 불평등을 무엇이라 하는가?</p>
<ol type="a">
<li>소득 불평등 (Income Inequality)</li>
<li>AI 격차 (AI Divide)</li>
<li>세대 갈등 (Generational Conflict)</li>
<li>정보 비대칭 (Information Asymmetry)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>AI 격차(AI Divide)는 AI 기술에 대한 접근성과 활용 능력의 차이로 인해 발생하는 새로운 형태의 불평등입니다. 기존의 디지털 격차(Digital Divide)의 확장된 개념으로, AI 리터러시 수준에 따른 생산성, 소득, 기회의 차이를 포괄합니다.</p>
</details>
</div>

<h4>문제 5. 인간-AI 공존</h4>
<div class="info-box">
<p>AI를 인간 지능의 '대체'가 아닌 '확장'으로 바라보는 관점을 무엇이라 하는가?</p>
<ol type="a">
<li>범용 인공지능 (AGI)</li>
<li>초인공지능 (ASI)</li>
<li>증강 지능 (Augmented Intelligence)</li>
<li>인공 신경망 (ANN)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>증강 지능(Augmented Intelligence)은 AI를 인간 지능의 대체가 아닌 확장 도구로 바라보는 관점입니다. 안경이 시력을 보완하듯, AI는 인간의 인지, 분석, 의사결정 능력을 보완하고 확장하는 역할을 합니다.</p>
</details>
</div>
    `
  }
];
