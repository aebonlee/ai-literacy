export const CH03_SECTIONS = [
  {
    id: 301,
    chapter_id: 3,
    title: 'AI의 탄생',
    content: `
<h3>AI의 탄생: 다트머스 회의와 초기 연구</h3>
<p>
  인공지능의 역사는 <strong>1950년대</strong>로 거슬러 올라갑니다. AI라는 개념이 학문적으로 정립되기 이전에도
  "기계가 생각할 수 있는가?"라는 질문은 수많은 과학자와 철학자들의 관심사였습니다.
  이 질문에 최초로 과학적 접근을 시도한 인물이 바로 <strong>앨런 튜링(Alan Turing)</strong>입니다.
</p>

<h4>앨런 튜링과 "기계의 사고"</h4>
<p>
  1950년, 영국의 수학자 앨런 튜링은 논문 <em>"Computing Machinery and Intelligence"</em>를 발표하며
  "기계가 생각할 수 있는가?"라는 역사적 질문을 던졌습니다. 그는 이 질문에 답하기 위해
  <strong>튜링 테스트(Turing Test)</strong>를 제안했습니다. 인간 심사관이 기계와 대화를 나눌 때
  상대방이 기계인지 인간인지 구별할 수 없다면, 그 기계는 "지능적"이라 간주할 수 있다는 것이었습니다.
</p>

<div class="info-box">
  <strong>앨런 튜링 (1912-1954):</strong> 현대 컴퓨터 과학의 아버지로 불리며, 2차 세계대전 중
  독일군의 에니그마(Enigma) 암호를 해독하여 전쟁 종결에 기여했습니다. 그의 "튜링 머신" 개념은
  현대 컴퓨터의 이론적 토대가 되었습니다.
</div>

<h4>다트머스 회의 (1956)</h4>
<p>
  1956년 여름, 미국 다트머스 대학교에서 열린 <strong>다트머스 회의(Dartmouth Conference)</strong>는
  AI 역사의 가장 중요한 이정표입니다. <strong>존 매카시(John McCarthy)</strong>가 주도하고,
  <strong>마빈 민스키(Marvin Minsky)</strong>, <strong>클로드 섀넌(Claude Shannon)</strong>,
  <strong>나다니엘 로체스터(Nathaniel Rochester)</strong> 등이 참여한 이 회의에서
  "인공지능(Artificial Intelligence)"이라는 용어가 공식적으로 탄생했습니다.
</p>

<table>
  <thead>
    <tr>
      <th>인물</th>
      <th>소속</th>
      <th>주요 공헌</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>존 매카시</strong></td>
      <td>다트머스 대학</td>
      <td>"인공지능" 용어 제안, LISP 언어 개발</td>
    </tr>
    <tr>
      <td><strong>마빈 민스키</strong></td>
      <td>MIT</td>
      <td>신경망 연구, MIT AI 연구소 설립</td>
    </tr>
    <tr>
      <td><strong>클로드 섀넌</strong></td>
      <td>벨 연구소</td>
      <td>정보 이론의 창시자</td>
    </tr>
    <tr>
      <td><strong>앨런 뉴웰 & 허버트 사이먼</strong></td>
      <td>카네기멜런 대학</td>
      <td>Logic Theorist -- 최초의 AI 프로그램</td>
    </tr>
  </tbody>
</table>

<div class="flow-diagram">
  <div class="flow-step">튜링 테스트 제안 (1950)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">다트머스 회의 (1956)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">"인공지능" 용어 탄생</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 연구 본격화</div>
</div>

<div class="info-box">
  <strong>다트머스 회의의 의의:</strong> 이 회의는 AI를 독립적인 학문 분야로 확립하고, 향후 수십 년간
  AI 연구의 방향을 결정지었습니다. 참가자들은 "기계가 언어를 사용하고, 추상적 개념을 형성하며,
  인간만이 할 수 있는 문제를 풀 수 있을 것"이라는 낙관적 전망을 공유했습니다.
</div>
    `,
    sort_order: 1
  },
  {
    id: 302,
    chapter_id: 3,
    title: 'AI의 첫 번째 황금기',
    content: `
<h3>AI의 첫 번째 황금기 (1950s-1960s)</h3>
<p>
  다트머스 회의 이후 AI 연구는 강력한 낙관론과 함께 첫 번째 황금기를 맞이했습니다.
  정부와 군사 기관의 대규모 연구 자금이 투입되었고, 초기 AI 프로그램들이
  놀라운 성과를 보여주면서 연구자들은 "곧 인간 수준의 AI가 실현될 것"이라 확신했습니다.
</p>

<h4>초기 AI 프로그램들</h4>
<table>
  <thead>
    <tr>
      <th>프로그램</th>
      <th>연도</th>
      <th>개발자</th>
      <th>기능</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Logic Theorist</strong></td>
      <td>1956</td>
      <td>뉴웰 & 사이먼</td>
      <td>수학 정리를 자동으로 증명 -- 최초의 AI 프로그램</td>
    </tr>
    <tr>
      <td><strong>GPS</strong></td>
      <td>1957</td>
      <td>뉴웰 & 사이먼</td>
      <td>General Problem Solver -- 범용 문제 해결기</td>
    </tr>
    <tr>
      <td><strong>Perceptron</strong></td>
      <td>1958</td>
      <td>프랭크 로젠블랫</td>
      <td>최초의 인공 신경망 모델</td>
    </tr>
    <tr>
      <td><strong>ELIZA</strong></td>
      <td>1966</td>
      <td>조셉 와이젠바움</td>
      <td>최초의 챗봇 -- 심리 상담사를 모방</td>
    </tr>
    <tr>
      <td><strong>SHRDLU</strong></td>
      <td>1968</td>
      <td>테리 위노그래드</td>
      <td>제한된 세계에서 자연어를 이해하고 행동</td>
    </tr>
  </tbody>
</table>

<h4>ELIZA: 최초의 대화형 AI</h4>
<p>
  <strong>ELIZA</strong>는 MIT의 조셉 와이젠바움(Joseph Weizenbaum)이 1966년에 개발한 프로그램으로,
  칼 로저스(Carl Rogers)의 내담자 중심 심리 상담 기법을 모방했습니다. ELIZA는 사용자의 입력에서
  핵심 단어를 인식하고, 미리 정해진 패턴에 따라 응답을 생성하는 단순한 규칙 기반 시스템이었지만,
  많은 사용자들이 ELIZA가 실제로 자신을 이해한다고 느꼈습니다.
</p>

<div class="info-box">
  <strong>ELIZA 효과:</strong> 사람들이 컴퓨터 프로그램에 인간적 감정과 이해 능력을 부여하는 현상을
  "ELIZA 효과"라고 합니다. 이는 오늘날 ChatGPT와 같은 AI 챗봇에 대한 사용자 반응에서도
  동일하게 관찰되는 현상입니다.
</div>

<h4>퍼셉트론: 최초의 인공 신경망</h4>
<p>
  1958년 프랭크 로젠블랫(Frank Rosenblatt)이 개발한 <strong>퍼셉트론(Perceptron)</strong>은
  인간 뇌의 뉴런을 모방한 최초의 인공 신경망 모델이었습니다. 간단한 패턴 인식이 가능했으며,
  당시 뉴욕 타임즈는 "해군이 생각하는 기계의 씨앗을 보여주었다"고 보도했습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">Logic Theorist (1956)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">퍼셉트론 (1958)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">ELIZA (1966)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">SHRDLU (1968)</div>
</div>

<div class="info-box warning">
  <strong>낙관론의 그림자:</strong> 초기 성과에 고무된 연구자들은 과도한 약속을 남발했습니다.
  허버트 사이먼은 1965년 "20년 내에 기계가 인간이 할 수 있는 모든 일을 해낼 것"이라 예측했고,
  마빈 민스키는 "한 세대 안에 AI 문제가 해결될 것"이라 주장했습니다.
  이러한 과도한 낙관은 이후 큰 실망으로 이어지게 됩니다.
</div>
    `,
    sort_order: 2
  },
  {
    id: 303,
    chapter_id: 3,
    title: '첫 번째 AI 겨울',
    content: `
<h3>첫 번째 AI 겨울 (1970s)</h3>
<p>
  1950-60년대의 낙관적 전망과 달리, AI 연구는 1970년대에 들어 심각한 벽에 부딪혔습니다.
  초기 AI 시스템들의 <strong>근본적 한계</strong>가 드러나면서, 연구 자금이 대폭 삭감되고
  AI 분야 전체가 침체기에 빠지게 됩니다. 이 시기를 <strong>"첫 번째 AI 겨울(First AI Winter)"</strong>이라 부릅니다.
</p>

<h4>한계가 드러난 핵심 영역</h4>

<div class="compare-grid">
  <div class="compare-item">
    <h4>기술적 한계</h4>
    <ul>
      <li>컴퓨터 연산 능력의 절대적 부족</li>
      <li>자연어 처리의 근본적 어려움</li>
      <li>상식 추론(Common Sense Reasoning)의 불가능</li>
      <li>조합 폭발(Combinatorial Explosion) 문제</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>사회적 한계</h4>
    <ul>
      <li>과도한 약속과 기대에 미치지 못하는 결과</li>
      <li>정부 및 군사 연구 자금 대폭 삭감</li>
      <li>학계와 산업계의 AI 연구 관심 저하</li>
      <li>연구자들의 이탈과 사기 저하</li>
    </ul>
  </div>
</div>

<h4>퍼셉트론의 한계 -- 민스키와 패퍼트의 비판</h4>
<p>
  1969년, <strong>마빈 민스키(Marvin Minsky)</strong>와 <strong>시무어 패퍼트(Seymour Papert)</strong>는
  저서 <em>"Perceptrons"</em>에서 단층 퍼셉트론의 근본적 한계를 수학적으로 증명했습니다.
  특히 <strong>XOR 문제</strong>(배타적 논리합)를 해결할 수 없다는 점을 지적하면서,
  신경망 연구에 치명적인 타격을 가했습니다.
</p>

<div class="info-box warning">
  <strong>XOR 문제:</strong> 단층 퍼셉트론은 선형적으로 분리 가능한 문제만 해결할 수 있습니다.
  XOR(배타적 논리합)처럼 비선형적 분류가 필요한 문제는 처리할 수 없었으며,
  이 한계가 신경망 연구의 침체를 가속화했습니다. 이 문제는 이후 다층 퍼셉트론(MLP)으로 해결됩니다.
</div>

<h4>라이트힐 보고서 (1973)</h4>
<p>
  영국의 수학자 <strong>제임스 라이트힐(James Lighthill)</strong>은 1973년 영국 과학연구위원회의 의뢰로
  작성한 보고서에서 AI 연구의 성과가 초기 약속에 크게 미치지 못한다고 결론지었습니다.
  이 보고서는 영국 내 AI 연구 자금의 전면적 삭감으로 이어졌으며,
  미국에서도 DARPA(국방고등연구계획국)의 AI 연구 지원이 축소되었습니다.
</p>

<table>
  <thead>
    <tr>
      <th>사건</th>
      <th>연도</th>
      <th>영향</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>"Perceptrons" 출간</strong></td>
      <td>1969</td>
      <td>신경망 연구 급격히 위축</td>
    </tr>
    <tr>
      <td><strong>라이트힐 보고서</strong></td>
      <td>1973</td>
      <td>영국 AI 연구 자금 전면 삭감</td>
    </tr>
    <tr>
      <td><strong>DARPA 자금 축소</strong></td>
      <td>1974</td>
      <td>미국 AI 연구 규모 대폭 감소</td>
    </tr>
    <tr>
      <td><strong>기계 번역 실패</strong></td>
      <td>1966-1974</td>
      <td>자연어 처리 연구 투자 중단</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>AI 겨울의 교훈:</strong> 첫 번째 AI 겨울은 과도한 기대와 약속이
  실제 기술 수준과 괴리될 때 발생하는 "기대 거품(Hype Bubble)"의 전형적 사례입니다.
  이 교훈은 오늘날 AI 기술에 대한 기대를 설정할 때도 여전히 유효합니다.
</div>
    `,
    sort_order: 3
  },
  {
    id: 304,
    chapter_id: 3,
    title: '전문가 시스템의 시대',
    content: `
<h3>전문가 시스템의 시대 (1980s)</h3>
<p>
  1980년대에 들어 AI는 <strong>전문가 시스템(Expert System)</strong>이라는 새로운 패러다임으로 부활했습니다.
  전문가 시스템은 특정 분야의 전문가 지식을 규칙(Rule) 형태로 컴퓨터에 입력하여,
  해당 분야의 의사결정을 지원하는 시스템입니다. 이 접근법은 실용적인 성과를 보여주며
  AI의 두 번째 황금기를 열었습니다.
</p>

<h4>전문가 시스템의 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">지식 베이스 (Knowledge Base)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">추론 엔진 (Inference Engine)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">사용자 인터페이스</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">전문가 수준의 판단</div>
</div>

<h4>대표적인 전문가 시스템</h4>
<table>
  <thead>
    <tr>
      <th>시스템</th>
      <th>연도</th>
      <th>분야</th>
      <th>성과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>DENDRAL</strong></td>
      <td>1965-1970s</td>
      <td>화학</td>
      <td>화학 구조를 분석하여 분자식 추론 -- 최초의 전문가 시스템</td>
    </tr>
    <tr>
      <td><strong>MYCIN</strong></td>
      <td>1972-1976</td>
      <td>의료</td>
      <td>혈액 감염 진단 및 항생제 처방 -- 약 69% 정확도로 전문의 수준</td>
    </tr>
    <tr>
      <td><strong>XCON (R1)</strong></td>
      <td>1980</td>
      <td>제조</td>
      <td>DEC 컴퓨터 주문 구성 자동화 -- 연간 수천만 달러 절감</td>
    </tr>
    <tr>
      <td><strong>PROSPECTOR</strong></td>
      <td>1983</td>
      <td>지질학</td>
      <td>광물 탐사 지원 -- 실제 몰리브덴 광맥 발견에 기여</td>
    </tr>
  </tbody>
</table>

<h4>전문가 시스템의 장점과 한계</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>장점</h4>
    <ul>
      <li>전문가 지식의 체계적 보존 및 전달</li>
      <li>일관된 의사결정 지원</li>
      <li>24시간 운영 가능</li>
      <li>의사결정 과정의 투명한 설명 가능</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>한계</h4>
    <ul>
      <li>지식 획득의 어려움 (Knowledge Acquisition Bottleneck)</li>
      <li>새로운 상황에 대한 적응 불가</li>
      <li>유지보수 비용 급증</li>
      <li>상식 추론 능력 부재</li>
    </ul>
  </div>
</div>

<h4>일본의 제5세대 컴퓨터 프로젝트</h4>
<p>
  1982년, 일본 통산성(MITI)은 <strong>제5세대 컴퓨터 프로젝트</strong>를 시작했습니다.
  10년간 약 8억 5천만 달러를 투자하여 자연어를 이해하고, 병렬 처리가 가능한 AI 컴퓨터를
  개발하려 했습니다. 이 프로젝트는 미국과 유럽에서도 AI 연구 투자 경쟁을 촉발했지만,
  결과적으로 당초 목표를 달성하지 못했습니다.
</p>

<div class="info-box">
  <strong>상업적 성공과 교훈:</strong> 전문가 시스템은 AI의 첫 번째 상업적 성공 사례로,
  1980년대 중반 전 세계적으로 수십억 달러 규모의 산업을 형성했습니다.
  그러나 시스템의 확장성과 유연성 부족은 결국 두 번째 AI 겨울을 초래하게 됩니다.
</div>
    `,
    sort_order: 4
  },
  {
    id: 305,
    chapter_id: 3,
    title: '두 번째 AI 겨울',
    content: `
<h3>두 번째 AI 겨울 (1990s)</h3>
<p>
  1980년대 후반부터 1990년대 중반까지, AI 산업은 다시 한번 심각한 침체기를 겪었습니다.
  전문가 시스템의 한계가 드러나고 상업적 실패가 연이어 발생하면서,
  <strong>"두 번째 AI 겨울(Second AI Winter)"</strong>이 찾아왔습니다.
</p>

<h4>전문가 시스템의 붕괴</h4>
<p>
  전문가 시스템은 초기의 기대와 달리 여러 가지 근본적 문제에 직면했습니다.
  규칙 기반 접근법의 한계가 명확해지면서, 기업들은 막대한 투자 손실을 입었습니다.
</p>

<table>
  <thead>
    <tr>
      <th>문제점</th>
      <th>설명</th>
      <th>결과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>지식 획득 병목</strong></td>
      <td>전문가의 지식을 규칙으로 변환하는 과정이 매우 어렵고 비용이 많이 듦</td>
      <td>시스템 구축 비용 급증</td>
    </tr>
    <tr>
      <td><strong>취약성</strong></td>
      <td>규칙에 없는 새로운 상황에 전혀 대응 불가</td>
      <td>실무 적용 시 잦은 오류</td>
    </tr>
    <tr>
      <td><strong>유지보수 불가</strong></td>
      <td>규칙이 수만 개로 늘어나면 상호 모순과 충돌 발생</td>
      <td>시스템 관리 포기</td>
    </tr>
    <tr>
      <td><strong>하드웨어 의존성</strong></td>
      <td>LISP 머신 등 고가의 전용 하드웨어 필요</td>
      <td>저렴한 PC에 밀려 경쟁력 상실</td>
    </tr>
  </tbody>
</table>

<h4>AI 겨울의 주요 사건들</h4>
<div class="flow-diagram">
  <div class="flow-step">LISP 머신 시장 붕괴 (1987)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 기업 대량 도산 (1988-1993)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">제5세대 프로젝트 실패 (1992)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 연구 자금 최저점</div>
</div>

<p>
  1987년, LISP 머신 시장이 갑작스럽게 붕괴하면서 AI 전문 기업들이 대량으로 도산했습니다.
  Symbolics, Lisp Machines Inc., IntelliCorp 등의 기업이 파산하거나 규모를 대폭 축소했습니다.
  동시에 일본의 제5세대 컴퓨터 프로젝트도 목표를 달성하지 못한 채 종료되었습니다.
</p>

<div class="info-box warning">
  <strong>"AI"라는 이름의 낙인:</strong> 두 번째 AI 겨울 동안 "인공지능"이라는 용어 자체가
  부정적 낙인이 되었습니다. 많은 연구자들은 자신의 연구가 AI로 분류되는 것을 피하고자
  "기계학습(Machine Learning)", "패턴 인식(Pattern Recognition)", "지능 시스템(Intelligent Systems)" 등
  대체 용어를 사용하기 시작했습니다.
</div>

<h4>겨울 속에서 피어난 씨앗</h4>
<p>
  그러나 두 번째 AI 겨울 동안에도 일부 중요한 연구 성과가 있었습니다:
</p>
<ul>
  <li><strong>역전파 알고리즘(Backpropagation)</strong>의 재발견 (1986, 루멜하트 & 힌턴)</li>
  <li><strong>서포트 벡터 머신(SVM)</strong>의 개발 (1990s, 바프닉)</li>
  <li><strong>통계적 자연어 처리</strong> 연구의 기초 마련</li>
  <li><strong>랜덤 포레스트</strong> 등 앙상블 기법 발전</li>
  <li><strong>IBM 딥블루</strong>의 체스 세계 챔피언 격파 (1997)</li>
</ul>

<div class="info-box">
  <strong>교훈:</strong> 두 번의 AI 겨울은 "과도한 기대 -> 실망 -> 투자 축소"라는 기술 발전의
  전형적 패턴을 보여줍니다. 하지만 각 겨울 이후 AI는 더 견고한 기반 위에서 다시 성장했으며,
  겨울 동안 축적된 연구 성과가 다음 도약의 밑거름이 되었습니다.
</div>
    `,
    sort_order: 5
  },
  {
    id: 306,
    chapter_id: 3,
    title: '머신러닝의 부상',
    content: `
<h3>머신러닝의 부상 (2000s)</h3>
<p>
  2000년대에 들어 AI 연구는 새로운 전환점을 맞이했습니다. 규칙 기반 접근에서
  <strong>데이터 기반의 통계적 학습</strong>으로 패러다임이 전환되면서,
  <strong>머신러닝(Machine Learning)</strong>이 AI의 주류 방법론으로 부상했습니다.
  인터넷의 폭발적 성장으로 대규모 데이터가 축적되고, 컴퓨팅 파워가 향상된 것이 핵심 동력이었습니다.
</p>

<h4>패러다임 전환: 규칙 기반 -> 데이터 기반</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>규칙 기반 AI (과거)</h4>
    <ul>
      <li>인간 전문가가 규칙을 직접 작성</li>
      <li>지식 획득 병목 문제</li>
      <li>새로운 상황 대응 불가</li>
      <li>전문가 시스템 시대의 주류</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>데이터 기반 AI (2000s~)</h4>
    <ul>
      <li>대규모 데이터에서 패턴을 자동 학습</li>
      <li>데이터가 많을수록 성능 향상</li>
      <li>다양한 상황에 적응 가능</li>
      <li>머신러닝, 통계적 학습의 주류화</li>
    </ul>
  </div>
</div>

<h4>핵심 알고리즘과 기술</h4>
<table>
  <thead>
    <tr>
      <th>알고리즘/기술</th>
      <th>등장</th>
      <th>특징</th>
      <th>활용 분야</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>서포트 벡터 머신 (SVM)</strong></td>
      <td>1990s-2000s</td>
      <td>최적의 결정 경계를 찾는 분류기</td>
      <td>텍스트 분류, 이미지 인식</td>
    </tr>
    <tr>
      <td><strong>랜덤 포레스트</strong></td>
      <td>2001</td>
      <td>다수의 결정 트리를 조합하는 앙상블 기법</td>
      <td>의료 진단, 금융 분석</td>
    </tr>
    <tr>
      <td><strong>부스팅 (Boosting)</strong></td>
      <td>2000s</td>
      <td>약한 분류기를 순차적으로 결합</td>
      <td>광고 클릭 예측, 추천 시스템</td>
    </tr>
    <tr>
      <td><strong>베이즈 네트워크</strong></td>
      <td>2000s</td>
      <td>확률적 추론 모델</td>
      <td>스팸 필터, 진단 시스템</td>
    </tr>
  </tbody>
</table>

<h4>머신러닝 부상의 세 가지 동력</h4>
<div class="flow-diagram">
  <div class="flow-step">빅데이터의 등장</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">컴퓨팅 파워 향상</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">알고리즘 혁신</div>
</div>

<ul>
  <li><strong>빅데이터</strong>: 인터넷, SNS, 전자상거래의 폭발적 성장으로 학습에 필요한 대규모 데이터 확보</li>
  <li><strong>컴퓨팅 파워</strong>: CPU 성능 향상과 클라우드 컴퓨팅으로 대규모 연산 가능</li>
  <li><strong>알고리즘 혁신</strong>: SVM, 앙상블 기법 등 효과적인 학습 알고리즘 개발</li>
</ul>

<h4>실용적 성과</h4>
<p>
  2000년대 머신러닝은 실생활에서 눈에 띄는 성과를 내기 시작했습니다:
</p>
<ul>
  <li><strong>구글 검색 엔진</strong>: PageRank + 머신러닝으로 검색 품질 혁신</li>
  <li><strong>넷플릭스 추천</strong>: 2006년 넷플릭스 프라이즈(100만 달러 상금) 대회 개최</li>
  <li><strong>스팸 필터</strong>: 베이지안 필터링으로 이메일 스팸 탐지 실용화</li>
  <li><strong>음성 인식</strong>: 통계적 모델로 음성 인식 정확도 크게 향상</li>
</ul>

<div class="info-box">
  <strong>조용한 혁명:</strong> 2000년대 머신러닝의 부상은 1950-60년대처럼 화려한 약속이 아닌,
  실질적인 성과에 기반한 "조용한 혁명"이었습니다. "AI"라는 용어 대신 "머신러닝", "데이터 마이닝"이라는
  이름으로 불리며, 실용적 문제 해결에 집중한 것이 이전 시기와의 가장 큰 차이점입니다.
</div>
    `,
    sort_order: 6
  },
  {
    id: 307,
    chapter_id: 3,
    title: '딥러닝 혁명',
    content: `
<h3>딥러닝 혁명 (2010s)</h3>
<p>
  2010년대는 AI 역사에서 가장 극적인 전환점으로, <strong>딥러닝(Deep Learning)</strong>이
  거의 모든 AI 분야에서 혁명적 성과를 달성한 시기입니다. 이 혁명의 시작점은
  2012년 <strong>ImageNet 대회에서의 AlexNet의 압도적 승리</strong>였습니다.
</p>

<h4>AlexNet과 ImageNet (2012)</h4>
<p>
  2012년, 토론토 대학의 <strong>제프리 힌턴(Geoffrey Hinton)</strong> 교수 연구팀의 알렉스 크리체프스키(Alex Krizhevsky)가
  개발한 <strong>AlexNet</strong>이 ImageNet Large Scale Visual Recognition Challenge(ILSVRC)에서
  기존 방법보다 <strong>10%p 이상</strong> 높은 정확도로 우승했습니다. 이 사건은 딥러닝 혁명의 서막이었습니다.
</p>

<div class="info-box">
  <strong>ImageNet 충격:</strong> AlexNet 이전에는 전통적 컴퓨터 비전 기법(SIFT, HOG 등)이 주류였으며,
  오류율은 약 26%에 머물렀습니다. AlexNet은 오류율을 15.3%로 대폭 낮추며 CNN(합성곱 신경망)의
  잠재력을 전 세계에 증명했습니다. 이후 매년 딥러닝 모델이 우승하면서 2015년에는
  인간의 인식 능력(오류율 약 5%)을 초월했습니다.
</div>

<h4>딥러닝 혁명의 핵심 동력</h4>
<table>
  <thead>
    <tr>
      <th>동력</th>
      <th>설명</th>
      <th>핵심 사건</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPU 활용</strong></td>
      <td>NVIDIA GPU를 신경망 학습에 활용, 병렬 연산 속도 10-100배 향상</td>
      <td>CUDA 프레임워크 공개 (2007)</td>
    </tr>
    <tr>
      <td><strong>빅데이터</strong></td>
      <td>ImageNet (1,400만 장), 위키피디아, 웹 크롤링 데이터 등 대규모 학습 데이터</td>
      <td>ImageNet 데이터셋 공개 (2009)</td>
    </tr>
    <tr>
      <td><strong>알고리즘 혁신</strong></td>
      <td>ReLU 활성화 함수, 드롭아웃, 배치 정규화 등 학습 기법 개선</td>
      <td>AlexNet 우승 (2012)</td>
    </tr>
    <tr>
      <td><strong>오픈소스 프레임워크</strong></td>
      <td>TensorFlow, PyTorch 등으로 딥러닝 접근성 대폭 향상</td>
      <td>TensorFlow 공개 (2015)</td>
    </tr>
  </tbody>
</table>

<h4>2010년대 주요 AI 이정표</h4>
<div class="flow-diagram">
  <div class="flow-step">AlexNet 우승 (2012)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">GAN 발명 (2014)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AlphaGo 승리 (2016)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">트랜스포머 발표 (2017)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">BERT/GPT 등장 (2018)</div>
</div>

<ul>
  <li><strong>2014년</strong>: 이안 굿펠로우(Ian Goodfellow)가 <strong>GAN(생성적 적대 신경망)</strong> 발명</li>
  <li><strong>2016년</strong>: 구글 딥마인드의 <strong>AlphaGo</strong>가 이세돌 9단을 4:1로 격파</li>
  <li><strong>2017년</strong>: 구글 연구팀이 <strong>"Attention Is All You Need"</strong> 논문 발표, 트랜스포머 아키텍처 등장</li>
  <li><strong>2018년</strong>: 구글의 <strong>BERT</strong>, OpenAI의 <strong>GPT-1</strong> 발표 -- LLM 시대의 서막</li>
</ul>

<h4>딥러닝 3대 선구자</h4>
<p>
  2018년 튜링상은 딥러닝의 선구자 세 사람에게 수여되었습니다:
</p>
<ul>
  <li><strong>제프리 힌턴(Geoffrey Hinton)</strong> -- 역전파 알고리즘 발전, 볼츠만 머신</li>
  <li><strong>얀 르쿤(Yann LeCun)</strong> -- CNN 개발, LeNet</li>
  <li><strong>요슈아 벤지오(Yoshua Bengio)</strong> -- 순환 신경망 발전, 주의집중 메커니즘 연구</li>
</ul>

<div class="info-box">
  <strong>딥러닝 혁명의 의의:</strong> 2010년대 딥러닝 혁명은 AI가 실험실을 넘어 산업 전반에
  실질적 영향을 미치기 시작한 전환점이었습니다. 이미지 인식, 음성 인식, 자연어 처리,
  게임, 의료 등 거의 모든 분야에서 딥러닝은 기존 방법을 압도하며 AI의 새 시대를 열었습니다.
</div>
    `,
    sort_order: 7
  },
  {
    id: 308,
    chapter_id: 3,
    title: '생성형 AI의 시대',
    content: `
<h3>생성형 AI의 시대 (2020s)</h3>
<p>
  2020년대는 <strong>생성형 AI(Generative AI)</strong>가 세상을 근본적으로 변화시키기 시작한 시대입니다.
  특히 2022년 11월 <strong>ChatGPT</strong>의 공개는 AI 역사상 가장 강력한 대중적 충격을 안겼으며,
  불과 2개월 만에 1억 명의 사용자를 확보하는 전례 없는 기록을 세웠습니다.
</p>

<h4>생성형 AI의 진화 과정</h4>
<div class="flow-diagram">
  <div class="flow-step">GPT-3 (2020)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">DALL-E (2021)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">ChatGPT (2022.11)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">GPT-4 / Claude / Gemini (2023~)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">멀티모달 AI (2024~)</div>
</div>

<h4>주요 생성형 AI 모델의 발전</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>연도</th>
      <th>개발사</th>
      <th>혁신점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>2020</td>
      <td>OpenAI</td>
      <td>1,750억 파라미터, Few-shot Learning으로 다양한 작업 수행</td>
    </tr>
    <tr>
      <td><strong>DALL-E</strong></td>
      <td>2021</td>
      <td>OpenAI</td>
      <td>텍스트로 이미지를 생성하는 최초의 대규모 모델</td>
    </tr>
    <tr>
      <td><strong>Stable Diffusion</strong></td>
      <td>2022</td>
      <td>Stability AI</td>
      <td>오픈소스 이미지 생성 모델, 접근성 혁신</td>
    </tr>
    <tr>
      <td><strong>ChatGPT</strong></td>
      <td>2022.11</td>
      <td>OpenAI</td>
      <td>RLHF 기반 대화형 AI, 2개월 만에 1억 사용자</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>2023.3</td>
      <td>OpenAI</td>
      <td>멀티모달(텍스트+이미지), 전문가 수준 추론 능력</td>
    </tr>
    <tr>
      <td><strong>Claude 3</strong></td>
      <td>2024</td>
      <td>Anthropic</td>
      <td>Constitutional AI, 안전성과 성능의 균형</td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>2023.12</td>
      <td>Google</td>
      <td>네이티브 멀티모달, 다양한 크기 모델 제공</td>
    </tr>
    <tr>
      <td><strong>Sora</strong></td>
      <td>2024</td>
      <td>OpenAI</td>
      <td>텍스트로 고품질 동영상 생성</td>
    </tr>
  </tbody>
</table>

<h4>생성형 AI의 사회적 영향</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>긍정적 영향</h4>
    <ul>
      <li>창작과 생산성의 민주화</li>
      <li>교육 및 학습 방식의 혁신</li>
      <li>프로그래밍 접근성 확대</li>
      <li>의료/과학 연구 가속화</li>
      <li>다국어 소통 장벽 해소</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>도전과 우려</h4>
    <ul>
      <li>일자리 대체와 노동 시장 변화</li>
      <li>딥페이크와 허위 정보 확산</li>
      <li>저작권과 지적 재산권 논란</li>
      <li>AI 편향과 공정성 문제</li>
      <li>에너지 소비와 환경 영향</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>AI 기술 발전의 가속:</strong> 2020년대 생성형 AI의 발전 속도는 전례가 없습니다.
  GPT-3에서 GPT-4까지 불과 3년, ChatGPT 공개 후 1년 만에 수십 개의 경쟁 모델이 등장했습니다.
  이제 AI는 특정 전문가들의 도구가 아닌, 모든 사람의 일상 도구가 되었으며,
  교육, 의료, 법률, 창작, 코딩 등 거의 모든 영역에서 혁신을 이끌고 있습니다.
</div>

<div class="info-box warning">
  <strong>현재 진행형:</strong> 생성형 AI의 시대는 아직 시작 단계에 불과합니다.
  AI 에이전트, 멀티모달 통합, 소형화된 온디바이스 AI 등 새로운 기술이 빠르게 발전하고 있으며,
  이 기술이 사회에 미치는 영향은 앞으로 더욱 확대될 것으로 예상됩니다.
</div>
    `,
    sort_order: 8
  },
  {
    id: 309,
    chapter_id: 3,
    title: '참고문헌 및 추가 자료',
    content: `
<h3>참고문헌 및 추가 자료</h3>
<p>Chapter 3에서 다룬 AI의 역사와 발전에 대해 더 깊이 알아보기 위한 자료입니다.</p>

<h4>추천 도서</h4>
<table>
  <thead>
    <tr>
      <th>도서명</th>
      <th>저자</th>
      <th>내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AI 슈퍼파워</strong></td>
      <td>리카이푸 (Lee Kai-Fu)</td>
      <td>미국과 중국의 AI 경쟁 구도와 AI의 미래 전망</td>
    </tr>
    <tr>
      <td><strong>마스터 알고리즘</strong></td>
      <td>페드로 도밍고스</td>
      <td>머신러닝의 다섯 가지 학파와 통합 알고리즘을 향한 여정</td>
    </tr>
    <tr>
      <td><strong>인공지능: 현대적 접근방식</strong></td>
      <td>스튜어트 러셀 & 피터 노빅</td>
      <td>AI 분야의 가장 권위 있는 교과서, AI 역사부터 최신 기술까지</td>
    </tr>
    <tr>
      <td><strong>딥러닝</strong></td>
      <td>이안 굿펠로우, 요슈아 벤지오, 에런 쿠르빌</td>
      <td>딥러닝의 이론적 기초와 실제 응용을 다룬 핵심 교재</td>
    </tr>
    <tr>
      <td><strong>튜링의 사과</strong></td>
      <td>이광근</td>
      <td>컴퓨터 과학의 역사와 앨런 튜링의 업적을 다룬 한국어 교양서</td>
    </tr>
  </tbody>
</table>

<h4>추천 온라인 강좌</h4>
<ul>
  <li><strong>Coursera -- AI For Everyone</strong> (앤드류 응): AI의 기초 개념과 역사를 비전공자 대상으로 설명</li>
  <li><strong>edX -- CS50's Introduction to AI</strong> (하버드): AI의 핵심 알고리즘과 역사적 맥락</li>
  <li><strong>K-MOOC -- 인공지능 개론</strong>: 한국어로 제공되는 AI 기초 강좌</li>
  <li><strong>YouTube -- 3Blue1Brown</strong>: 신경망과 딥러닝을 시각적으로 쉽게 설명</li>
</ul>

<h4>주요 참고 논문 및 보고서</h4>
<ul>
  <li>Turing, A. M. (1950). "Computing Machinery and Intelligence." <em>Mind</em>, 59(236), 433-460.</li>
  <li>McCarthy, J. et al. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."</li>
  <li>Minsky, M. & Papert, S. (1969). <em>Perceptrons</em>. MIT Press.</li>
  <li>Rumelhart, D. E. et al. (1986). "Learning representations by back-propagating errors." <em>Nature</em>, 323, 533-536.</li>
  <li>Krizhevsky, A. et al. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." <em>NeurIPS</em>.</li>
  <li>Vaswani, A. et al. (2017). "Attention Is All You Need." <em>NeurIPS</em>.</li>
</ul>

<h4>유용한 웹사이트</h4>
<ul>
  <li><strong>AI Index Report</strong> (Stanford HAI): 매년 발간되는 AI 발전 현황 보고서</li>
  <li><strong>Papers With Code</strong>: 최신 AI 논문과 코드를 함께 제공</li>
  <li><strong>Our World in Data -- AI</strong>: AI 발전의 역사적 데이터를 시각화</li>
  <li><strong>AI Timeline (Future of Life Institute)</strong>: AI 역사의 주요 이정표를 타임라인으로 정리</li>
</ul>

<div class="info-box">
  <strong>학습 팁:</strong> AI의 역사를 이해하는 것은 단순한 교양을 넘어,
  현재 AI 기술의 강점과 한계를 올바르게 판단하는 데 필수적입니다.
  특히 두 번의 AI 겨울을 통해 과도한 기대와 현실의 괴리가 가져오는 결과를 이해하면,
  현재의 AI 열풍을 더 균형 잡힌 시각으로 바라볼 수 있습니다.
</div>
    `,
    sort_order: 9
  },
  {
    id: 310,
    chapter_id: 3,
    title: '학습 확인 문제',
    content: `
<h3>Chapter 3 학습 확인 문제</h3>
<p>이번 장에서 학습한 AI의 역사와 발전에 대한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>"인공지능(Artificial Intelligence)"이라는 용어가 공식적으로 탄생한 사건은 무엇인가요?</strong></p>
  <ol type="a">
    <li>앨런 튜링의 논문 발표 (1950)</li>
    <li>다트머스 회의 (1956)</li>
    <li>ELIZA 개발 (1966)</li>
    <li>ImageNet 대회 (2012)</li>
  </ol>
  <p><em>정답: b) 다트머스 회의 (1956). 존 매카시가 주도한 이 회의에서 "인공지능"이라는 용어가 공식적으로 사용되었으며, AI가 독립적인 학문 분야로 확립되었습니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>첫 번째 AI 겨울의 주요 원인으로 올바르지 않은 것은?</strong></p>
  <ol type="a">
    <li>퍼셉트론의 XOR 문제 한계 (민스키 & 패퍼트)</li>
    <li>라이트힐 보고서에 의한 연구 자금 삭감</li>
    <li>컴퓨팅 파워의 절대적 부족</li>
    <li>딥러닝 알고리즘의 실패</li>
  </ol>
  <p><em>정답: d) 딥러닝 알고리즘의 실패. 딥러닝은 2010년대에 등장한 기술로, 1970년대 첫 번째 AI 겨울과는 관련이 없습니다. 나머지는 모두 첫 번째 AI 겨울의 실제 원인입니다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>1980년대 AI 부활의 핵심이었던 "전문가 시스템"의 작동 원리로 올바른 것은?</strong></p>
  <ol type="a">
    <li>대규모 데이터에서 패턴을 자동으로 학습한다</li>
    <li>전문가의 지식을 규칙(Rule) 형태로 입력하여 의사결정을 지원한다</li>
    <li>인공 신경망을 통해 이미지를 인식한다</li>
    <li>강화학습을 통해 게임에서 승리한다</li>
  </ol>
  <p><em>정답: b) 전문가 시스템은 특정 분야 전문가의 지식을 IF-THEN 규칙으로 컴퓨터에 입력하여 해당 분야의 의사결정을 지원하는 시스템입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>2012년 딥러닝 혁명의 시작점이 된 사건은 무엇인가요?</strong></p>
  <ol type="a">
    <li>AlphaGo의 이세돌 격파</li>
    <li>ChatGPT의 출시</li>
    <li>AlexNet의 ImageNet 대회 우승</li>
    <li>트랜스포머 논문 발표</li>
  </ol>
  <p><em>정답: c) AlexNet이 ImageNet 대회에서 기존 방법보다 10%p 이상 높은 정확도로 우승하며, CNN과 딥러닝의 잠재력을 증명한 것이 딥러닝 혁명의 시작점이었습니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>AI 역사를 시간 순서대로 올바르게 나열한 것은?</strong></p>
  <ol type="a">
    <li>다트머스 회의 -> 전문가 시스템 -> 첫 번째 AI 겨울 -> 딥러닝 혁명</li>
    <li>튜링 테스트 -> 다트머스 회의 -> 첫 번째 AI 겨울 -> 전문가 시스템 -> 두 번째 AI 겨울 -> 딥러닝 혁명</li>
    <li>다트머스 회의 -> 딥러닝 혁명 -> 전문가 시스템 -> ChatGPT</li>
    <li>ELIZA -> 튜링 테스트 -> AlphaGo -> 전문가 시스템</li>
  </ol>
  <p><em>정답: b) 튜링 테스트(1950) -> 다트머스 회의(1956) -> 첫 번째 AI 겨울(1970s) -> 전문가 시스템(1980s) -> 두 번째 AI 겨울(1990s) -> 딥러닝 혁명(2010s)이 올바른 순서입니다.</em></p>
</div>

<h4>문제 6</h4>
<div class="info-box">
  <p><strong>2018년 딥러닝의 선구자로서 튜링상을 공동 수상한 세 사람은?</strong></p>
  <ol type="a">
    <li>앨런 튜링, 존 매카시, 마빈 민스키</li>
    <li>제프리 힌턴, 얀 르쿤, 요슈아 벤지오</li>
    <li>일론 머스크, 샘 올트먼, 데미스 허사비스</li>
    <li>앤드류 응, 이안 굿펠로우, 알렉스 크리체프스키</li>
  </ol>
  <p><em>정답: b) 제프리 힌턴, 얀 르쿤, 요슈아 벤지오. 이 세 사람은 수십 년간 신경망과 딥러닝 연구를 지속하며 현대 AI 발전의 토대를 마련한 공로로 "컴퓨터 과학의 노벨상"이라 불리는 튜링상을 공동 수상했습니다.</em></p>
</div>

<h4>문제 7</h4>
<div class="info-box">
  <p><strong>ChatGPT가 2개월 만에 달성한 사용자 수와, 이를 가능하게 한 핵심 기술은?</strong></p>
  <ol type="a">
    <li>1,000만 명, 전문가 시스템</li>
    <li>5,000만 명, CNN</li>
    <li>1억 명, RLHF(인간 피드백 기반 강화학습)</li>
    <li>10억 명, 규칙 기반 AI</li>
  </ol>
  <p><em>정답: c) 1억 명, RLHF. ChatGPT는 GPT-3.5에 RLHF를 적용하여 인간의 대화 스타일에 맞게 미세조정한 모델로, 출시 2개월 만에 1억 명의 사용자를 확보하며 역사상 가장 빠르게 성장한 소비자 애플리케이션이 되었습니다.</em></p>
</div>
    `,
    sort_order: 10
  }
];
