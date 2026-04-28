export const CH01_SECTIONS = [
  {
    id: 101,
    chapter_id: 1,
    title: '인공지능의 정의',
    content: `
<h3>인공지능(AI)이란 무엇인가?</h3>
<p>
  <strong>인공지능(Artificial Intelligence, AI)</strong>은 인간의 학습, 추론, 지각, 판단, 언어 이해 등의 지적 능력을
  컴퓨터 시스템으로 구현하는 기술 및 학문 분야를 말합니다. 1956년 다트머스 회의(Dartmouth Conference)에서
  존 매카시(John McCarthy)가 처음으로 "인공지능"이라는 용어를 공식적으로 사용하였으며, 이후 컴퓨터 과학의
  핵심 분야로 발전해 왔습니다.
</p>

<div class="info-box">
  <strong>핵심 정의:</strong> 인공지능은 기계가 인간처럼 사고하고, 학습하며, 문제를 해결할 수 있도록 만드는
  컴퓨터 과학의 한 분야입니다. 단순한 규칙 기반 프로그래밍을 넘어, 경험에서 학습하고 새로운 상황에
  적응하는 능력을 포함합니다.
</div>

<h4>튜링 테스트(Turing Test)</h4>
<p>
  1950년 영국의 수학자 <strong>앨런 튜링(Alan Turing)</strong>은 논문 "Computing Machinery and Intelligence"에서
  기계의 지능을 판별하는 방법을 제안했습니다. <em>튜링 테스트</em>는 인간 심사관이 기계와 대화를 나눌 때,
  상대방이 기계인지 인간인지 구별할 수 없다면 그 기계는 "지능적"이라고 판단하는 방법입니다.
</p>
<ul>
  <li><strong>심사관</strong>: 텍스트 기반으로 질문을 던지는 인간</li>
  <li><strong>응답자 A</strong>: 인간 참가자</li>
  <li><strong>응답자 B</strong>: 컴퓨터 프로그램</li>
  <li>심사관이 A와 B를 구별하지 못하면, B는 튜링 테스트를 통과한 것으로 간주</li>
</ul>

<h4>지능(Intelligence)의 개념</h4>
<p>
  지능이란 무엇인지에 대한 정의는 학자마다 다양합니다. 일반적으로 지능은 다음과 같은 능력을 포함합니다:
</p>
<ol>
  <li><strong>학습 능력</strong> — 경험을 통해 새로운 지식과 기술을 습득하는 능력</li>
  <li><strong>추론 능력</strong> — 기존 지식을 바탕으로 새로운 결론을 도출하는 능력</li>
  <li><strong>문제 해결 능력</strong> — 주어진 조건에서 목표를 달성하기 위한 전략을 수립하는 능력</li>
  <li><strong>적응 능력</strong> — 새로운 환경이나 상황에 유연하게 대처하는 능력</li>
  <li><strong>창의성</strong> — 기존에 없던 새로운 아이디어나 산출물을 만들어내는 능력</li>
</ol>

<div class="info-box warning">
  <strong>주의:</strong> 현재의 AI는 특정 영역에서는 인간을 뛰어넘는 성능을 보이지만,
  인간과 같은 범용적 지능(General Intelligence)을 갖추고 있지는 않습니다.
  AI의 "지능"과 인간의 "지능"은 본질적으로 다른 개념임을 이해해야 합니다.
</div>
    `,
    sort_order: 1
  },
  {
    id: 102,
    chapter_id: 1,
    title: 'AI의 유형',
    content: `
<h3>인공지능의 분류</h3>
<p>
  인공지능은 그 능력 범위와 수준에 따라 크게 세 가지 유형으로 분류됩니다.
  각 유형은 현재 기술 수준과 미래 가능성에서 근본적인 차이를 보입니다.
</p>

<h4>1. 약인공지능 (Narrow AI / Weak AI)</h4>
<p>
  <strong>약인공지능(ANI: Artificial Narrow Intelligence)</strong>은 특정 작업이나 제한된 영역에서만
  인간 수준 또는 그 이상의 성능을 발휘하는 AI입니다. 현재 우리가 사용하는 모든 AI 시스템이
  이 범주에 해당합니다.
</p>
<ul>
  <li>음성 인식 시스템 (Siri, Alexa, 빅스비)</li>
  <li>이미지 분류 및 객체 인식</li>
  <li>체스/바둑 AI (Deep Blue, AlphaGo)</li>
  <li>추천 알고리즘 (Netflix, YouTube, 쿠팡)</li>
  <li>자율 주행 자동차의 인식 시스템</li>
</ul>

<h4>2. 범용인공지능 (General AI / Strong AI)</h4>
<p>
  <strong>범용인공지능(AGI: Artificial General Intelligence)</strong>은 인간과 동등한 수준의
  지적 능력을 갖춘 AI를 말합니다. 어떤 지적 작업이든 인간처럼 이해하고 학습하며 수행할 수 있는
  시스템으로, 아직 실현되지 않은 이론적 개념입니다.
</p>

<h4>3. 초인공지능 (Super AI / Superintelligence)</h4>
<p>
  <strong>초인공지능(ASI: Artificial Super Intelligence)</strong>은 모든 영역에서 인간의 지능을
  크게 능가하는 AI를 의미합니다. 과학적 창의성, 사회적 지능, 일반적 지혜까지 포함하여
  인간보다 우월한 지적 능력을 보유한 시스템입니다.
</p>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>약인공지능 (ANI)</th>
      <th>범용인공지능 (AGI)</th>
      <th>초인공지능 (ASI)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>능력 범위</strong></td>
      <td>특정 작업에 한정</td>
      <td>인간 수준의 범용 능력</td>
      <td>모든 영역에서 인간 초월</td>
    </tr>
    <tr>
      <td><strong>학습 방식</strong></td>
      <td>주어진 데이터에서 학습</td>
      <td>자율적 학습 및 전이</td>
      <td>자기 개선 및 진화</td>
    </tr>
    <tr>
      <td><strong>현재 상태</strong></td>
      <td>이미 실현됨</td>
      <td>연구 중 (미실현)</td>
      <td>이론적 단계</td>
    </tr>
    <tr>
      <td><strong>대표 사례</strong></td>
      <td>ChatGPT, AlphaGo, Siri</td>
      <td>해당 없음</td>
      <td>해당 없음</td>
    </tr>
    <tr>
      <td><strong>자의식</strong></td>
      <td>없음</td>
      <td>가능성 논의 중</td>
      <td>가능성 있음 (이론)</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>참고:</strong> 2026년 현재, ChatGPT나 Claude와 같은 대규모 언어모델(LLM)이
  매우 뛰어난 성능을 보이지만, 이들은 여전히 약인공지능(ANI)으로 분류됩니다.
  범용인공지능(AGI)의 실현 시기에 대해서는 전문가들 사이에서도 의견이 분분합니다.
</div>
    `,
    sort_order: 2
  },
  {
    id: 103,
    chapter_id: 1,
    title: 'AI의 핵심 기술',
    content: `
<h3>인공지능을 구성하는 핵심 기술</h3>
<p>
  인공지능은 단일 기술이 아니라 여러 핵심 기술들의 융합으로 이루어집니다.
  각 기술은 고유한 역할을 수행하며, 서로 결합하여 강력한 AI 시스템을 구축합니다.
</p>

<h4>1. 머신러닝 (Machine Learning)</h4>
<p>
  <strong>머신러닝</strong>은 명시적으로 프로그래밍하지 않아도 데이터에서 패턴을 학습하고
  예측을 수행하는 기술입니다. AI의 가장 핵심적인 기반 기술로, 지도학습, 비지도학습,
  강화학습의 세 가지 주요 유형이 있습니다.
</p>

<h4>2. 딥러닝 (Deep Learning)</h4>
<p>
  <strong>딥러닝</strong>은 인간 뇌의 신경망 구조를 모방한 <em>인공 신경망(Artificial Neural Network)</em>을
  활용하는 머신러닝의 하위 분야입니다. 여러 층(Layer)의 신경망을 통해 데이터의 복잡한 패턴을
  자동으로 학습합니다.
</p>

<h4>3. 자연어 처리 (Natural Language Processing, NLP)</h4>
<p>
  <strong>자연어 처리</strong>는 인간의 언어(자연어)를 컴퓨터가 이해하고, 해석하며, 생성할 수 있도록
  하는 기술입니다. 번역, 요약, 감정 분석, 챗봇 등에 활용됩니다.
</p>
<ul>
  <li><strong>형태소 분석</strong>: 문장을 의미 있는 최소 단위로 분리</li>
  <li><strong>구문 분석</strong>: 문장의 문법적 구조를 파악</li>
  <li><strong>의미 분석</strong>: 단어와 문장의 의미를 이해</li>
  <li><strong>감정 분석</strong>: 텍스트에 담긴 감정이나 의견을 파악</li>
</ul>

<h4>4. 컴퓨터 비전 (Computer Vision)</h4>
<p>
  <strong>컴퓨터 비전</strong>은 디지털 이미지나 비디오에서 의미 있는 정보를 추출하고 이해하는 기술입니다.
  얼굴 인식, 자율 주행, 의료 영상 분석 등에 핵심적으로 활용됩니다.
</p>

<h4>5. 로보틱스 (Robotics)</h4>
<p>
  <strong>로보틱스</strong>는 AI 기술을 물리적 로봇에 적용하여 자율적으로 환경을 인식하고 행동하는
  시스템을 구현하는 분야입니다. 제조업, 물류, 의료, 서비스 등 다양한 산업에서 활용됩니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">머신러닝/딥러닝</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">NLP / 컴퓨터 비전</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 서비스/로봇</div>
</div>

<div class="info-box">
  <strong>기술 간 관계:</strong> 딥러닝은 머신러닝의 하위 분야이며, 자연어 처리와 컴퓨터 비전은
  딥러닝 기술을 핵심 엔진으로 활용합니다. 로보틱스는 이 모든 기술을 물리적 세계에 적용하는
  통합 분야입니다.
</div>
    `,
    sort_order: 3
  },
  {
    id: 104,
    chapter_id: 1,
    title: 'AI의 응용 분야',
    content: `
<h3>AI가 변화시키는 주요 산업 분야</h3>
<p>
  인공지능은 거의 모든 산업 분야에서 혁신을 이끌고 있습니다.
  각 분야에서 AI가 어떻게 활용되고 있는지 살펴보겠습니다.
</p>

<h4>1. 의료/헬스케어 (Healthcare)</h4>
<p>
  AI는 의료 분야에서 진단 정확도를 높이고 신약 개발을 가속화하는 데 기여하고 있습니다.
</p>
<ul>
  <li><strong>의료 영상 분석</strong>: X-ray, CT, MRI 영상에서 질환을 자동으로 탐지 (폐암, 유방암 조기 발견)</li>
  <li><strong>신약 개발</strong>: AI를 통한 분자 구조 예측 및 약물 후보 물질 탐색 (AlphaFold)</li>
  <li><strong>맞춤형 치료</strong>: 환자의 유전 정보와 병력을 분석하여 개인 맞춤 치료 계획 수립</li>
  <li><strong>원격 진료</strong>: AI 챗봇을 활용한 초기 증상 분석 및 환자 분류</li>
</ul>

<h4>2. 금융 (Finance)</h4>
<p>
  금융 산업에서 AI는 리스크 관리, 사기 탐지, 투자 전략 수립에 핵심적인 역할을 합니다.
</p>
<ul>
  <li><strong>이상 거래 탐지</strong>: 실시간으로 의심스러운 금융 거래를 감지하여 사기를 예방</li>
  <li><strong>신용 평가</strong>: 다양한 데이터를 활용한 정교한 신용도 분석</li>
  <li><strong>로보어드바이저</strong>: AI 기반 자동 투자 자문 및 포트폴리오 관리</li>
  <li><strong>알고리즘 트레이딩</strong>: 시장 데이터를 분석하여 자동으로 매매를 실행</li>
</ul>

<h4>3. 교육 (Education)</h4>
<ul>
  <li><strong>적응형 학습</strong>: 학생의 수준과 학습 속도에 맞춘 맞춤형 교육 콘텐츠 제공</li>
  <li><strong>자동 채점</strong>: 에세이, 서술형 답안의 AI 기반 자동 평가</li>
  <li><strong>학습 분석</strong>: 학생의 학습 패턴을 분석하여 취약점 파악 및 개선 방향 제시</li>
  <li><strong>AI 튜터</strong>: 24시간 질의응답이 가능한 AI 학습 도우미</li>
</ul>

<h4>4. 제조업 (Manufacturing)</h4>
<ul>
  <li><strong>품질 검사</strong>: 컴퓨터 비전을 활용한 제품 불량 자동 검출</li>
  <li><strong>예측 유지보수</strong>: 설비 고장을 사전에 예측하여 다운타임 최소화</li>
  <li><strong>공정 최적화</strong>: 생산 데이터 분석을 통한 효율성 극대화</li>
  <li><strong>공급망 관리</strong>: 수요 예측과 재고 최적화</li>
</ul>

<h4>5. 엔터테인먼트 (Entertainment)</h4>
<ul>
  <li><strong>콘텐츠 추천</strong>: Netflix, Spotify 등의 개인화 추천 시스템</li>
  <li><strong>게임 AI</strong>: 지능적인 NPC(Non-Player Character) 설계</li>
  <li><strong>콘텐츠 생성</strong>: AI를 활용한 음악, 그림, 영상 제작</li>
  <li><strong>실시간 번역</strong>: 다국어 콘텐츠의 실시간 번역 및 더빙</li>
</ul>

<div class="info-box">
  <strong>산업 전망:</strong> McKinsey에 따르면, AI는 2030년까지 전 세계 GDP에 약 13조 달러의
  추가 가치를 창출할 것으로 전망됩니다. 특히 의료, 금융, 제조 분야에서의 AI 적용이
  가장 큰 경제적 효과를 가져올 것으로 예상됩니다.
</div>
    `,
    sort_order: 4
  },
  {
    id: 105,
    chapter_id: 1,
    title: 'AI와 인간의 차이',
    content: `
<h3>인공지능과 인간 지능의 비교</h3>
<p>
  인공지능과 인간의 지능은 근본적으로 다른 방식으로 작동합니다.
  각각의 강점과 한계를 이해하는 것은 AI를 올바르게 활용하기 위해 매우 중요합니다.
</p>

<div class="compare-grid">
  <div class="compare-item">
    <h4>인간의 강점</h4>
    <ul>
      <li>창의적 사고와 상상력</li>
      <li>감정 이해와 공감 능력</li>
      <li>윤리적 판단과 도덕적 추론</li>
      <li>적은 데이터로도 학습 가능</li>
      <li>맥락과 뉘앙스 이해</li>
      <li>상식적 추론 (Common Sense)</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>AI의 강점</h4>
    <ul>
      <li>대량 데이터의 빠른 처리</li>
      <li>24시간 무중단 작업 가능</li>
      <li>일관된 성능 유지 (피로 없음)</li>
      <li>복잡한 수학적 계산</li>
      <li>패턴 인식 속도와 정확도</li>
      <li>대규모 정보 검색과 종합</li>
    </ul>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th>비교 항목</th>
      <th>인간</th>
      <th>AI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>처리 속도</strong></td>
      <td>상대적으로 느림</td>
      <td>초당 수십억 연산 가능</td>
    </tr>
    <tr>
      <td><strong>창의성</strong></td>
      <td>독창적 아이디어 생성 가능</td>
      <td>기존 패턴의 조합 및 변형</td>
    </tr>
    <tr>
      <td><strong>감정</strong></td>
      <td>감정을 경험하고 표현</td>
      <td>감정을 시뮬레이션할 수 있으나 경험하지 않음</td>
    </tr>
    <tr>
      <td><strong>학습 방식</strong></td>
      <td>소수의 예시로 일반화</td>
      <td>대량의 데이터 필요</td>
    </tr>
    <tr>
      <td><strong>에너지 소비</strong></td>
      <td>뇌: 약 20W</td>
      <td>대규모 AI: 수백 kW 이상</td>
    </tr>
    <tr>
      <td><strong>실수 패턴</strong></td>
      <td>피로, 감정에 의한 실수</td>
      <td>데이터 편향에 의한 체계적 오류</td>
    </tr>
    <tr>
      <td><strong>적응력</strong></td>
      <td>새로운 상황에 유연하게 대응</td>
      <td>학습 범위 밖의 상황에 취약</td>
    </tr>
  </tbody>
</table>

<h4>협력의 관점</h4>
<p>
  AI와 인간은 경쟁 관계가 아니라 <strong>상호 보완적 관계</strong>에 있습니다.
  인간의 창의성과 판단력, AI의 처리 속도와 정확성을 결합할 때 최상의 결과를 얻을 수 있습니다.
  예를 들어, 의료 분야에서 AI가 영상을 1차 분석하고, 의사가 최종 진단을 내리는 방식이
  각각 단독으로 진행하는 것보다 더 높은 정확도를 보입니다.
</p>

<div class="info-box">
  <strong>핵심 관점:</strong> AI 리터러시의 핵심은 AI를 두려워하거나 맹신하는 것이 아니라,
  AI의 강점과 한계를 정확히 이해하고, 인간의 능력과 적절히 결합하여 활용하는 것입니다.
  이를 <em>"인간-AI 협업(Human-AI Collaboration)"</em>이라 합니다.
</div>
    `,
    sort_order: 5
  },
  {
    id: 106,
    chapter_id: 1,
    title: 'AI 시스템의 구성 요소',
    content: `
<h3>AI 시스템을 구성하는 4대 요소</h3>
<p>
  모든 AI 시스템은 네 가지 핵심 구성 요소의 조합으로 이루어집니다.
  이 요소들이 어떻게 상호작용하는지 이해하면, AI 시스템의 작동 원리를
  보다 깊이 파악할 수 있습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">데이터 (Data)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">알고리즘 (Algorithm)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">컴퓨팅 파워 (Computing)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">인터페이스 (Interface)</div>
</div>

<h4>1. 데이터 (Data)</h4>
<p>
  데이터는 AI의 <strong>"연료"</strong>입니다. AI는 데이터로부터 패턴을 학습하므로,
  데이터의 품질과 양이 AI 성능을 좌우합니다.
</p>
<ul>
  <li><strong>정형 데이터</strong>: 표, 스프레드시트 등 구조화된 데이터 (매출 데이터, 고객 정보)</li>
  <li><strong>비정형 데이터</strong>: 텍스트, 이미지, 동영상, 음성 등 구조화되지 않은 데이터</li>
  <li><strong>반정형 데이터</strong>: JSON, XML 등 일부 구조를 가진 데이터</li>
</ul>

<div class="info-box warning">
  <strong>데이터 품질의 중요성:</strong> "Garbage In, Garbage Out(GIGO)" — 품질이 낮은 데이터를 입력하면
  결과도 신뢰할 수 없습니다. 편향된 데이터는 편향된 AI를 만들어 차별적 결과를 초래할 수 있습니다.
</div>

<h4>2. 알고리즘 (Algorithm)</h4>
<p>
  알고리즘은 AI의 <strong>"두뇌"</strong>입니다. 데이터를 처리하고 학습하는 방법론을 정의합니다.
</p>
<ul>
  <li><strong>지도학습 알고리즘</strong>: 정답이 있는 데이터로 학습 (분류, 회귀)</li>
  <li><strong>비지도학습 알고리즘</strong>: 정답 없이 패턴을 발견 (클러스터링, 차원 축소)</li>
  <li><strong>강화학습 알고리즘</strong>: 보상을 최대화하는 행동을 학습</li>
  <li><strong>딥러닝 아키텍처</strong>: CNN, RNN, Transformer 등 신경망 구조</li>
</ul>

<h4>3. 컴퓨팅 파워 (Computing Power)</h4>
<p>
  컴퓨팅 파워는 AI의 <strong>"근육"</strong>입니다. 대규모 데이터를 처리하고 복잡한 모델을 학습시키기
  위해서는 막대한 연산 능력이 필요합니다.
</p>
<ul>
  <li><strong>GPU (Graphics Processing Unit)</strong>: 병렬 연산에 특화된 프로세서, 딥러닝 학습의 핵심</li>
  <li><strong>TPU (Tensor Processing Unit)</strong>: Google이 AI 전용으로 개발한 프로세서</li>
  <li><strong>클라우드 컴퓨팅</strong>: AWS, GCP, Azure 등을 통한 대규모 연산 자원 활용</li>
  <li><strong>엣지 컴퓨팅</strong>: 기기 자체에서 AI 연산을 수행 (스마트폰 AI 칩)</li>
</ul>

<h4>4. 인터페이스 (Interface)</h4>
<p>
  인터페이스는 AI의 <strong>"얼굴"</strong>입니다. 사용자가 AI 시스템과 상호작용하는 접점을 제공합니다.
</p>
<ul>
  <li><strong>채팅 인터페이스</strong>: ChatGPT, Claude 등의 대화형 UI</li>
  <li><strong>음성 인터페이스</strong>: 시리, 알렉사 등의 음성 비서</li>
  <li><strong>API (Application Programming Interface)</strong>: 개발자가 AI 기능을 앱에 통합</li>
  <li><strong>시각적 대시보드</strong>: AI 분석 결과를 시각화하여 표시</li>
</ul>

<div class="info-box">
  <strong>종합:</strong> 우수한 AI 시스템은 양질의 데이터, 적합한 알고리즘, 충분한 컴퓨팅 파워,
  그리고 직관적인 인터페이스가 유기적으로 결합될 때 비로소 완성됩니다.
</div>
    `,
    sort_order: 6
  },
  {
    id: 107,
    chapter_id: 1,
    title: 'AI의 한계와 과제',
    content: `
<h3>현재 AI의 한계와 해결 과제</h3>
<p>
  인공지능이 눈부신 발전을 이루었지만, 여전히 극복해야 할 중요한 한계와 과제들이 존재합니다.
  AI를 올바르게 활용하기 위해서는 이러한 한계를 정확히 인식해야 합니다.
</p>

<h4>1. 데이터 의존성</h4>
<p>
  현재의 AI, 특히 딥러닝 모델은 <strong>대량의 고품질 데이터</strong>에 의존합니다.
  데이터가 부족하거나 편향되어 있으면 AI의 성능과 신뢰성이 크게 저하됩니다.
</p>
<ul>
  <li>학습 데이터에 포함되지 않은 상황에 대한 대응 능력 부족</li>
  <li>데이터 수집과 라벨링에 막대한 비용과 시간 소요</li>
  <li>개인정보 보호와 데이터 활용 사이의 균형 문제</li>
</ul>

<h4>2. 편향성 (Bias)</h4>
<p>
  AI는 학습 데이터에 존재하는 편향을 그대로 학습하고 증폭시킬 수 있습니다.
</p>
<ul>
  <li><strong>성별 편향</strong>: 채용 AI가 남성 지원자를 선호하는 사례 (아마존, 2018)</li>
  <li><strong>인종 편향</strong>: 얼굴 인식 시스템이 유색인종에 대해 낮은 정확도를 보이는 문제</li>
  <li><strong>언어 편향</strong>: 영어 중심으로 학습된 모델이 다른 언어에서 성능 저하</li>
</ul>

<div class="info-box warning">
  <strong>편향의 위험성:</strong> AI의 편향은 사회적 차별을 자동화하고 고착화할 수 있습니다.
  공정하고 포용적인 AI를 개발하기 위해서는 다양한 배경의 데이터를 확보하고,
  지속적으로 편향을 모니터링하며 수정하는 노력이 필요합니다.
</div>

<h4>3. 설명 가능성 (Explainability)</h4>
<p>
  딥러닝 모델은 흔히 <strong>"블랙박스(Black Box)"</strong>라 불립니다. 모델이 특정 결정을 내린 이유를
  인간이 이해할 수 있는 형태로 설명하기 어렵습니다. 이는 의료, 법률, 금융 등
  설명 가능성이 중요한 분야에서 심각한 문제가 됩니다.
</p>

<h4>4. 에너지 소비</h4>
<p>
  대규모 AI 모델의 학습과 운영에는 막대한 에너지가 소비됩니다.
  GPT-4와 같은 대규모 모델의 학습에는 수천 대의 GPU가 수개월간 가동되며,
  이에 따른 탄소 배출량도 상당합니다.
</p>

<h4>5. 환각 현상 (Hallucination)</h4>
<p>
  대규모 언어모델은 사실이 아닌 정보를 마치 사실인 것처럼 자신감 있게 생성하는
  <strong>"환각(Hallucination)"</strong> 현상을 보입니다. 이는 AI의 출력을 무비판적으로
  수용할 때 심각한 오류를 초래할 수 있습니다.
</p>

<h4>6. 윤리적 과제</h4>
<ul>
  <li><strong>일자리 대체</strong>: AI 자동화로 인한 일자리 구조 변화</li>
  <li><strong>프라이버시</strong>: AI를 활용한 대규모 감시와 개인정보 침해 우려</li>
  <li><strong>자율 무기</strong>: AI 기술의 군사적 활용에 대한 윤리적 논란</li>
  <li><strong>딥페이크</strong>: AI로 생성된 가짜 영상/음성의 악용 가능성</li>
</ul>

<div class="info-box">
  <strong>미래 방향:</strong> 이러한 한계를 극복하기 위해 "책임감 있는 AI(Responsible AI)",
  "설명 가능한 AI(Explainable AI, XAI)", "공정한 AI(Fair AI)" 등의 연구 분야가
  활발하게 발전하고 있습니다.
</div>
    `,
    sort_order: 7
  },
  {
    id: 108,
    chapter_id: 1,
    title: 'AI와 우리의 일상',
    content: `
<h3>일상 속의 인공지능</h3>
<p>
  AI는 이미 우리 생활 곳곳에 깊숙이 스며들어 있습니다. 많은 경우 AI가 작동하고 있다는 것을
  의식하지 못할 정도로 자연스럽게 일상의 일부가 되었습니다.
  일상에서 만나는 주요 AI 서비스를 살펴보겠습니다.
</p>

<h4>1. 음성 비서 (Voice Assistants)</h4>
<p>
  스마트폰과 스마트 스피커에 탑재된 음성 비서는 가장 대표적인 일상 속 AI입니다.
</p>
<ul>
  <li><strong>애플 시리(Siri)</strong>: 아이폰, 아이패드에서 음성 명령 처리</li>
  <li><strong>삼성 빅스비(Bixby)</strong>: 갤럭시 기기의 AI 비서</li>
  <li><strong>아마존 알렉사(Alexa)</strong>: 에코 스피커를 통한 스마트홈 제어</li>
  <li><strong>구글 어시스턴트</strong>: 안드로이드 기기 및 구글 홈 연동</li>
</ul>

<h4>2. 추천 시스템 (Recommendation Systems)</h4>
<p>
  온라인 서비스의 핵심 기능으로, 사용자의 취향과 행동 패턴을 분석하여 맞춤형 콘텐츠를 추천합니다.
</p>
<ul>
  <li><strong>YouTube</strong>: 시청 이력 기반 영상 추천</li>
  <li><strong>Netflix</strong>: 시청 패턴 분석을 통한 콘텐츠 추천 (매출의 80%가 추천에서 발생)</li>
  <li><strong>쿠팡/네이버</strong>: 구매 이력, 검색어 기반 상품 추천</li>
  <li><strong>Spotify/멜론</strong>: 음악 취향 분석을 통한 플레이리스트 자동 생성</li>
</ul>

<h4>3. 내비게이션과 지도 (Navigation)</h4>
<p>
  실시간 교통 정보 분석과 최적 경로 탐색에 AI가 핵심적으로 활용됩니다.
</p>
<ul>
  <li><strong>카카오맵/네이버맵</strong>: 실시간 교통량 분석, 도착 시간 예측</li>
  <li><strong>구글맵</strong>: 과거 교통 패턴 학습을 통한 최적 경로 제안</li>
  <li><strong>T맵</strong>: AI 기반 교통 예측 및 경로 안내</li>
</ul>

<h4>4. 카메라와 사진 (Photography)</h4>
<ul>
  <li><strong>얼굴 인식</strong>: 스마트폰 잠금 해제, 사진 자동 분류</li>
  <li><strong>야간 모드</strong>: AI가 여러 장의 사진을 합성하여 밝고 선명한 야간 사진 생성</li>
  <li><strong>배경 흐림(보케)</strong>: AI가 피사체를 인식하여 인물 모드 촬영</li>
</ul>

<h4>5. 자동 번역 (Machine Translation)</h4>
<ul>
  <li><strong>파파고/구글 번역</strong>: 신경망 기반 기계 번역으로 자연스러운 번역 제공</li>
  <li><strong>실시간 카메라 번역</strong>: 외국어 간판이나 메뉴판을 카메라로 비추면 실시간 번역</li>
</ul>

<h4>6. 스마트홈과 IoT</h4>
<ul>
  <li>AI 에어컨/냉장고: 사용 패턴 학습을 통한 자동 온도 조절</li>
  <li>로봇 청소기: 공간 매핑과 최적 청소 경로 계획</li>
  <li>스마트 조명: 시간대와 활동 패턴에 따른 자동 밝기 조절</li>
</ul>

<div class="info-box">
  <strong>생각해보기:</strong> 여러분이 하루 동안 사용하는 서비스 중 AI가 활용되고 있는 것들을
  찾아보세요. 아침에 일어나 스마트폰 잠금을 해제하는 순간부터, 밤에 넷플릭스 추천 영상을
  시청하는 순간까지, AI는 24시간 우리와 함께하고 있습니다.
</div>
    `,
    sort_order: 8
  },
  {
    id: 109,
    chapter_id: 1,
    title: '학습 정리',
    content: `
<h3>Chapter 1 학습 정리: AI란 무엇인가?</h3>
<p>이번 장에서 학습한 핵심 개념을 정리합니다.</p>

<div class="info-box">
  <h4>핵심 개념 요약</h4>
  <ol>
    <li><strong>인공지능(AI)</strong>은 인간의 지적 능력을 컴퓨터로 구현하는 기술이자 학문 분야입니다.</li>
    <li><strong>튜링 테스트</strong>는 기계의 지능을 판별하기 위해 앨런 튜링이 제안한 방법입니다.</li>
    <li>AI는 <strong>약인공지능(ANI)</strong>, <strong>범용인공지능(AGI)</strong>, <strong>초인공지능(ASI)</strong>으로 분류되며, 현재는 ANI 단계입니다.</li>
    <li>AI의 핵심 기술로는 <strong>머신러닝, 딥러닝, 자연어 처리, 컴퓨터 비전, 로보틱스</strong>가 있습니다.</li>
    <li>AI는 <strong>의료, 금융, 교육, 제조, 엔터테인먼트</strong> 등 다양한 분야에 적용됩니다.</li>
    <li>AI와 인간은 <strong>상호 보완적 관계</strong>이며, 협업할 때 최상의 결과를 얻을 수 있습니다.</li>
    <li>AI 시스템은 <strong>데이터, 알고리즘, 컴퓨팅 파워, 인터페이스</strong>의 4대 요소로 구성됩니다.</li>
    <li>AI의 주요 한계로는 <strong>데이터 의존성, 편향성, 설명 불가능성, 에너지 소비, 환각 현상</strong> 등이 있습니다.</li>
    <li>AI는 음성 비서, 추천 시스템, 내비게이션, 카메라 등 <strong>일상 곳곳에</strong> 활용되고 있습니다.</li>
  </ol>
</div>

<h4>핵심 용어 정리</h4>
<table>
  <thead>
    <tr>
      <th>용어</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>인공지능 (AI)</strong></td>
      <td>인간의 지적 능력을 컴퓨터로 구현하는 기술</td>
    </tr>
    <tr>
      <td><strong>머신러닝</strong></td>
      <td>데이터에서 패턴을 자동으로 학습하는 기술</td>
    </tr>
    <tr>
      <td><strong>딥러닝</strong></td>
      <td>인공 신경망을 활용한 머신러닝의 하위 분야</td>
    </tr>
    <tr>
      <td><strong>ANI</strong></td>
      <td>약인공지능 — 특정 영역에 특화된 AI</td>
    </tr>
    <tr>
      <td><strong>AGI</strong></td>
      <td>범용인공지능 — 인간 수준의 범용 지능 (미실현)</td>
    </tr>
    <tr>
      <td><strong>튜링 테스트</strong></td>
      <td>기계의 지능을 판별하는 대화 기반 테스트</td>
    </tr>
    <tr>
      <td><strong>환각(Hallucination)</strong></td>
      <td>AI가 사실이 아닌 정보를 생성하는 현상</td>
    </tr>
    <tr>
      <td><strong>편향(Bias)</strong></td>
      <td>데이터나 알고리즘에 내재된 체계적 오류</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>다음 장 미리보기:</strong> Chapter 2에서는 AI의 핵심 기술인 머신러닝과 딥러닝에 대해
  더 깊이 살펴보겠습니다. 지도학습, 비지도학습, 강화학습의 차이점과 신경망의 작동 원리,
  그리고 최신 트랜스포머 아키텍처까지 학습합니다.
</div>
    `,
    sort_order: 9
  },
  {
    id: 110,
    chapter_id: 1,
    title: '학습 확인 문제',
    content: `
<h3>Chapter 1 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>인공지능의 세 가지 유형 중, 현재 기술 수준에서 실현된 유형은 무엇인가요?</strong></p>
  <ol type="a">
    <li>범용인공지능 (AGI)</li>
    <li>초인공지능 (ASI)</li>
    <li>약인공지능 (ANI)</li>
    <li>양자인공지능 (QAI)</li>
  </ol>
  <p><em>정답: c) 약인공지능(ANI) — 현재 모든 AI 시스템은 특정 작업에 특화된 약인공지능입니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>튜링 테스트에 대한 설명으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>컴퓨터의 연산 속도를 측정하는 테스트이다</li>
    <li>인간 심사관이 대화를 통해 상대방이 기계인지 인간인지 판별하는 테스트이다</li>
    <li>AI의 에너지 효율성을 평가하는 테스트이다</li>
    <li>프로그래밍 언어의 성능을 비교하는 테스트이다</li>
  </ol>
  <p><em>정답: b) 인간 심사관이 대화를 통해 상대방이 기계인지 인간인지 판별하는 테스트이다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>AI 시스템의 4대 구성 요소에 해당하지 않는 것은?</strong></p>
  <ol type="a">
    <li>데이터 (Data)</li>
    <li>알고리즘 (Algorithm)</li>
    <li>감정 (Emotion)</li>
    <li>컴퓨팅 파워 (Computing Power)</li>
  </ol>
  <p><em>정답: c) 감정 — AI 시스템의 4대 요소는 데이터, 알고리즘, 컴퓨팅 파워, 인터페이스입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>대규모 언어모델이 사실이 아닌 정보를 마치 사실인 것처럼 생성하는 현상을 무엇이라 하나요?</strong></p>
  <ol type="a">
    <li>오버피팅 (Overfitting)</li>
    <li>환각 (Hallucination)</li>
    <li>언더피팅 (Underfitting)</li>
    <li>과적합 (Overlearning)</li>
  </ol>
  <p><em>정답: b) 환각(Hallucination) — AI가 사실이 아닌 정보를 자신감 있게 생성하는 현상입니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>다음 중 AI와 인간의 관계에 대한 설명으로 가장 적절한 것은?</strong></p>
  <ol type="a">
    <li>AI가 인간의 모든 능력을 대체할 수 있다</li>
    <li>인간은 AI보다 모든 면에서 우월하다</li>
    <li>AI와 인간은 상호 보완적 관계로, 협업할 때 최상의 결과를 얻을 수 있다</li>
    <li>AI는 인간에게 위협적인 존재이므로 개발을 중단해야 한다</li>
  </ol>
  <p><em>정답: c) AI와 인간은 상호 보완적 관계로, 협업할 때 최상의 결과를 얻을 수 있다.</em></p>
</div>
    `,
    sort_order: 10
  }
];
