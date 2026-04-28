/**
 * Chapter 10: 데이터 리터러시
 * 데이터 유형, 수집, 분석, 시각화, 의사결정, 품질 관리
 */
export const CH10_SECTIONS = [
  {
    id: 1001,
    chapter_id: 10,
    title: '10.1 데이터 리터러시란?',
    sort_order: 1,
    content: `
<h3>데이터 리터러시의 정의</h3>
<p>데이터 리터러시(Data Literacy)란 데이터를 읽고, 이해하고, 분석하고, 활용하며, 이를 바탕으로 효과적인 의사소통을 할 수 있는 능력을 말합니다. AI 시대에 데이터 리터러시는 디지털 시민으로서 갖추어야 할 핵심 역량 중 하나입니다.</p>

<div class="info-box">
<strong>핵심 정의</strong><br/>
데이터 리터러시는 단순히 데이터를 다루는 기술적 능력을 넘어, 데이터의 맥락을 이해하고, 데이터 기반으로 비판적 사고를 수행하며, 윤리적으로 데이터를 활용하는 포괄적인 역량입니다.
</div>

<h3>데이터 리터러시의 구성 요소</h3>
<table>
<thead>
<tr><th>구성 요소</th><th>설명</th><th>관련 활동</th></tr>
</thead>
<tbody>
<tr><td>데이터 읽기<br/>(Data Reading)</td><td>데이터를 정확히 해석하고 의미를 파악하는 능력</td><td>표, 그래프, 통계 수치 이해</td></tr>
<tr><td>데이터 활용<br/>(Data Working)</td><td>데이터를 수집, 정리, 분석하는 실무 능력</td><td>스프레드시트, 데이터베이스 활용</td></tr>
<tr><td>데이터 분석<br/>(Data Analysis)</td><td>데이터에서 패턴과 인사이트를 도출하는 능력</td><td>통계 분석, 추세 파악, 상관관계 분석</td></tr>
<tr><td>데이터 논증<br/>(Data Argumentation)</td><td>데이터를 근거로 논리적 주장을 펼치는 능력</td><td>보고서 작성, 프레젠테이션, 의사결정</td></tr>
</tbody>
</table>

<h3>AI 시대에 데이터 리터러시가 중요한 이유</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>개인 차원</h4>
<ul>
<li>정보 홍수 속에서 올바른 판단을 위한 기초</li>
<li>개인 데이터 보호와 프라이버시 관리</li>
<li>가짜 뉴스와 허위 통계 식별 능력</li>
<li>AI 도구의 결과를 비판적으로 평가</li>
</ul>
</div>
<div class="compare-item">
<h4>직업 차원</h4>
<ul>
<li>데이터 기반 의사결정이 업무의 표준</li>
<li>거의 모든 직군에서 데이터 활용 능력 요구</li>
<li>데이터 분석 역량이 핵심 경쟁력</li>
<li>AI 도구와 협업하기 위한 기본 소양</li>
</ul>
</div>
<div class="compare-item">
<h4>사회 차원</h4>
<ul>
<li>민주주의 사회에서 정책 판단의 근거</li>
<li>디지털 격차 해소와 포용적 사회 구현</li>
<li>데이터 기반 거버넌스의 투명성 확보</li>
<li>과학적 사실에 기반한 공론장 형성</li>
</ul>
</div>
</div>

<h3>데이터 리터러시 수준 평가</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>초급</strong><br/>데이터를 읽고<br/>기본 해석 가능</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>중급</strong><br/>데이터를 수집하고<br/>분석할 수 있음</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>고급</strong><br/>데이터로 인사이트<br/>도출 및 의사결정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>전문가</strong><br/>데이터 전략 수립<br/>조직 문화 변혁 주도</div>
</div>
    `
  },
  {
    id: 1002,
    chapter_id: 10,
    title: '10.2 데이터의 유형과 구조',
    sort_order: 2,
    content: `
<h3>데이터의 다양한 유형</h3>
<p>데이터는 형태, 구조, 성격에 따라 여러 가지로 분류됩니다. 데이터의 유형을 이해하는 것은 적절한 저장, 처리, 분석 방법을 선택하는 데 필수적입니다.</p>

<h3>구조에 따른 데이터 분류</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>정형 데이터 (Structured Data)</h4>
<p>행(row)과 열(column)로 정리된 표 형태의 데이터</p>
<ul>
<li>관계형 데이터베이스(RDB)에 저장</li>
<li>SQL로 쿼리 가능</li>
<li>예: 고객 정보, 거래 내역, 성적표</li>
<li>전체 데이터의 약 20% 차지</li>
</ul>
</div>
<div class="compare-item">
<h4>반정형 데이터 (Semi-structured)</h4>
<p>일정한 구조를 가지지만 엄격한 스키마가 없는 데이터</p>
<ul>
<li>태그나 키-값 쌍으로 구성</li>
<li>유연한 구조 변경 가능</li>
<li>예: JSON, XML, HTML, 이메일</li>
<li>웹 데이터의 상당 부분 차지</li>
</ul>
</div>
<div class="compare-item">
<h4>비정형 데이터 (Unstructured Data)</h4>
<p>미리 정해진 구조가 없는 자유 형식의 데이터</p>
<ul>
<li>텍스트, 이미지, 영상, 음성 등</li>
<li>AI/딥러닝으로 분석 가능해짐</li>
<li>예: SNS 게시물, 뉴스 기사, 의료 영상</li>
<li>전체 데이터의 약 80% 차지</li>
</ul>
</div>
</div>

<h3>성격에 따른 데이터 분류</h3>
<table>
<thead>
<tr><th>분류 기준</th><th>유형</th><th>설명</th><th>예시</th></tr>
</thead>
<tbody>
<tr><td rowspan="2">측정 수준</td><td>질적 데이터(Qualitative)</td><td>범주나 특성을 나타내는 데이터</td><td>성별, 지역, 학과</td></tr>
<tr><td>양적 데이터(Quantitative)</td><td>수치로 측정 가능한 데이터</td><td>나이, 점수, 매출</td></tr>
<tr><td rowspan="2">수집 시점</td><td>횡단면 데이터(Cross-sectional)</td><td>특정 시점의 데이터</td><td>2024년 고객 만족도 조사</td></tr>
<tr><td>시계열 데이터(Time-series)</td><td>시간에 따른 데이터 변화</td><td>월별 매출, 주가 변동</td></tr>
<tr><td rowspan="2">출처</td><td>1차 데이터(Primary)</td><td>직접 수집한 원시 데이터</td><td>설문 조사, 실험 결과</td></tr>
<tr><td>2차 데이터(Secondary)</td><td>타인이 수집한 기존 데이터</td><td>공공 통계, 연구 보고서</td></tr>
</tbody>
</table>

<h3>데이터의 측정 척도</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>명목 척도</strong><br/>분류만 가능<br/>예: 혈액형, 성별</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>서열 척도</strong><br/>순서 구분 가능<br/>예: 학점, 만족도</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>등간 척도</strong><br/>간격이 동일<br/>예: 온도, IQ</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>비율 척도</strong><br/>절대 영점 존재<br/>예: 키, 무게, 소득</div>
</div>

<div class="info-box">
<strong>AI와 데이터 유형</strong><br/>
AI 모델은 데이터 유형에 따라 다른 처리 방식을 사용합니다. 정형 데이터에는 전통적 머신러닝이, 비정형 데이터에는 딥러닝(CNN, RNN, 트랜스포머 등)이 주로 적용됩니다. 최근에는 멀티모달 AI가 여러 유형의 데이터를 동시에 처리할 수 있게 되었습니다.
</div>
    `
  },
  {
    id: 1003,
    chapter_id: 10,
    title: '10.3 데이터 수집과 전처리',
    sort_order: 3,
    content: `
<h3>데이터 수집 방법</h3>
<p>데이터 분석의 첫 단계는 목적에 맞는 양질의 데이터를 수집하는 것입니다. 데이터 수집 방법은 연구 목적, 비용, 시간, 데이터 유형에 따라 선택됩니다.</p>

<h3>주요 데이터 수집 방법</h3>
<table>
<thead>
<tr><th>수집 방법</th><th>설명</th><th>장점</th><th>단점</th></tr>
</thead>
<tbody>
<tr><td>설문 조사</td><td>구조화된 질문을 통한 응답 수집</td><td>대량 수집 가능, 표준화</td><td>응답 편향, 낮은 응답률</td></tr>
<tr><td>인터뷰</td><td>대면/비대면 심층 면접</td><td>풍부한 질적 데이터</td><td>시간/비용 소요, 소규모</td></tr>
<tr><td>실험</td><td>통제된 환경에서의 데이터 생성</td><td>인과관계 파악 가능</td><td>인위적 환경, 윤리적 제약</td></tr>
<tr><td>관찰</td><td>자연 상태에서의 행동 기록</td><td>자연스러운 데이터</td><td>관찰자 편향, 시간 소요</td></tr>
<tr><td>웹 크롤링</td><td>웹사이트에서 자동으로 데이터 추출</td><td>대량의 웹 데이터 수집</td><td>법적 이슈, 데이터 품질</td></tr>
<tr><td>센서/IoT</td><td>장치를 통한 자동 실시간 수집</td><td>연속적, 객관적 데이터</td><td>장비 비용, 관리 필요</td></tr>
<tr><td>공공 데이터</td><td>정부/기관이 공개한 데이터 활용</td><td>무료, 신뢰성 높음</td><td>목적 불일치, 시점 차이</td></tr>
</tbody>
</table>

<h3>데이터 전처리(Data Preprocessing)</h3>
<p>수집된 원시 데이터(Raw Data)는 대부분 바로 분석에 사용할 수 없습니다. 결측값, 이상값, 형식 불일치 등 다양한 문제를 해결하는 전처리 과정이 필수적입니다.</p>

<div class="flow-diagram">
<div class="flow-step"><strong>데이터 정제</strong><br/>결측값 처리<br/>이상값 탐지<br/>중복 제거</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 변환</strong><br/>정규화/표준화<br/>인코딩<br/>형식 통일</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 통합</strong><br/>여러 소스 병합<br/>스키마 통합<br/>일관성 확보</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>데이터 축소</strong><br/>차원 축소<br/>샘플링<br/>특성 선택</div>
</div>

<h3>전처리 주요 기법 상세</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>결측값 처리</h4>
<ul>
<li><strong>삭제</strong>: 결측값이 있는 행 또는 열 제거</li>
<li><strong>대체(Imputation)</strong>: 평균, 중앙값, 최빈값으로 채우기</li>
<li><strong>예측 대체</strong>: 머신러닝 모델로 결측값 예측</li>
<li><strong>표시</strong>: 결측 여부를 별도 변수로 표시</li>
</ul>
</div>
<div class="compare-item">
<h4>이상값 처리</h4>
<ul>
<li><strong>통계적 탐지</strong>: Z-score, IQR 방법 활용</li>
<li><strong>시각적 탐지</strong>: 박스플롯, 산점도 활용</li>
<li><strong>처리 방법</strong>: 제거, 변환, 대체, 별도 분석</li>
<li><strong>주의</strong>: 이상값이 중요한 정보일 수 있음</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>전처리의 중요성: "Garbage In, Garbage Out"</strong><br/>
아무리 우수한 AI 모델도 품질이 낮은 데이터로는 좋은 결과를 낼 수 없습니다. 데이터 과학 프로젝트에서 전처리는 전체 작업의 60~80%를 차지할 정도로 중요하고 시간이 많이 걸리는 과정입니다. 전처리의 품질이 분석 결과의 품질을 결정합니다.
</div>
    `
  },
  {
    id: 1004,
    chapter_id: 10,
    title: '10.4 데이터 분석 기초',
    sort_order: 4,
    content: `
<h3>데이터 분석의 기초</h3>
<p>데이터 분석은 수집된 데이터에서 의미 있는 패턴, 추세, 인사이트를 발견하는 과정입니다. 기초 통계를 이해하는 것은 데이터 리터러시의 핵심 요소이며, AI가 데이터를 어떻게 학습하는지 이해하는 데도 도움이 됩니다.</p>

<h3>기술 통계(Descriptive Statistics)</h3>
<p>데이터의 특성을 수치로 요약하는 기본적인 통계 기법입니다.</p>

<table>
<thead>
<tr><th>분류</th><th>통계량</th><th>설명</th><th>활용 사례</th></tr>
</thead>
<tbody>
<tr><td rowspan="3">중심 경향</td><td>평균(Mean)</td><td>모든 값의 합 / 데이터 수</td><td>평균 매출, 평균 성적</td></tr>
<tr><td>중앙값(Median)</td><td>데이터를 크기순으로 정렬했을 때 중앙 값</td><td>소득 중앙값 (이상값에 강건)</td></tr>
<tr><td>최빈값(Mode)</td><td>가장 빈번하게 나타나는 값</td><td>가장 많이 판매된 제품</td></tr>
<tr><td rowspan="3">산포도</td><td>범위(Range)</td><td>최대값 - 최소값</td><td>온도 변동폭</td></tr>
<tr><td>분산(Variance)</td><td>평균으로부터의 편차 제곱 평균</td><td>투자 위험도 측정</td></tr>
<tr><td>표준편차(SD)</td><td>분산의 제곱근</td><td>시험 점수의 분포 정도</td></tr>
<tr><td rowspan="2">분포 형태</td><td>왜도(Skewness)</td><td>분포의 비대칭 정도</td><td>소득 분포 (우측 치우침)</td></tr>
<tr><td>첨도(Kurtosis)</td><td>분포의 뾰족한 정도</td><td>극단값 빈도 파악</td></tr>
</tbody>
</table>

<h3>상관 분석(Correlation Analysis)</h3>
<p>두 변수 간의 관계 강도와 방향을 파악하는 분석 방법입니다.</p>
<div class="compare-grid">
<div class="compare-item">
<h4>양의 상관관계</h4>
<p>한 변수가 증가할 때 다른 변수도 증가하는 관계</p>
<ul>
<li>상관계수: 0 ~ +1</li>
<li>예: 공부 시간 ↑ → 성적 ↑</li>
<li>예: 광고비 ↑ → 매출 ↑</li>
</ul>
</div>
<div class="compare-item">
<h4>음의 상관관계</h4>
<p>한 변수가 증가할 때 다른 변수가 감소하는 관계</p>
<ul>
<li>상관계수: -1 ~ 0</li>
<li>예: 운동량 ↑ → 체중 ↓</li>
<li>예: 결석 횟수 ↑ → 성적 ↓</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>주의: 상관관계 ≠ 인과관계</strong><br/>
두 변수 사이에 상관관계가 있다고 해서 하나가 다른 하나의 원인인 것은 아닙니다. 예를 들어, "아이스크림 판매량"과 "익사 사고 수"는 높은 양의 상관관계를 보이지만, 이는 둘 다 "여름(기온)"이라는 제3의 변수에 의한 것입니다. 이를 허위 상관(Spurious Correlation)이라 합니다.
</div>

<h3>분석의 4단계</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>기술적 분석</strong><br/>What happened?<br/>과거 데이터 요약</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>진단적 분석</strong><br/>Why did it happen?<br/>원인 분석</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>예측적 분석</strong><br/>What will happen?<br/>미래 예측 (AI 활용)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>처방적 분석</strong><br/>What should we do?<br/>최적 행동 제안</div>
</div>
    `
  },
  {
    id: 1005,
    chapter_id: 10,
    title: '10.5 데이터 시각화',
    sort_order: 5,
    content: `
<h3>데이터 시각화의 중요성</h3>
<p>데이터 시각화(Data Visualization)는 데이터를 그래프, 차트, 지도 등 시각적 형태로 표현하여 복잡한 정보를 직관적으로 이해할 수 있도록 하는 기술입니다. 인간의 뇌는 텍스트보다 시각적 정보를 약 6만 배 빠르게 처리하기 때문에, 효과적인 시각화는 데이터 커뮤니케이션의 핵심입니다.</p>

<h3>시각화 유형별 가이드</h3>
<table>
<thead>
<tr><th>시각화 유형</th><th>사용 목적</th><th>적합한 데이터</th><th>주의사항</th></tr>
</thead>
<tbody>
<tr><td>막대 그래프<br/>(Bar Chart)</td><td>범주별 값 비교</td><td>카테고리별 수량/금액</td><td>항목이 너무 많으면 가독성 저하</td></tr>
<tr><td>선 그래프<br/>(Line Chart)</td><td>시간에 따른 추세 파악</td><td>시계열 데이터</td><td>시간 간격의 일관성 유지</td></tr>
<tr><td>원형 그래프<br/>(Pie Chart)</td><td>전체 대비 비율 표시</td><td>구성 비율 데이터</td><td>5~7개 이내 항목 권장</td></tr>
<tr><td>산점도<br/>(Scatter Plot)</td><td>두 변수 간 관계 파악</td><td>두 연속형 변수</td><td>데이터 포인트 과밀 시 처리 필요</td></tr>
<tr><td>히트맵<br/>(Heat Map)</td><td>값의 크기를 색상으로 표현</td><td>행렬 데이터, 상관관계</td><td>적절한 색상 스케일 선택</td></tr>
<tr><td>박스플롯<br/>(Box Plot)</td><td>분포와 이상값 파악</td><td>그룹별 연속형 데이터</td><td>데이터 수가 적으면 부적절</td></tr>
<tr><td>히스토그램<br/>(Histogram)</td><td>분포 형태 파악</td><td>연속형 데이터의 빈도</td><td>적절한 구간(bin) 설정 필요</td></tr>
</tbody>
</table>

<h3>좋은 시각화의 원칙</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>명확성 (Clarity)</h4>
<ul>
<li>제목과 축 레이블을 명확히 표시</li>
<li>범례를 적절히 배치</li>
<li>불필요한 장식(chartjunk) 제거</li>
<li>하나의 차트에 하나의 메시지 전달</li>
</ul>
</div>
<div class="compare-item">
<h4>정확성 (Accuracy)</h4>
<ul>
<li>축의 시작점을 0으로 설정 (막대 그래프)</li>
<li>비례를 왜곡하지 않기</li>
<li>데이터 출처와 기준 시점 명시</li>
<li>오차 범위나 신뢰구간 표시</li>
</ul>
</div>
</div>

<h3>주요 시각화 도구</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>기초 도구</strong><br/>Excel<br/>Google Sheets<br/>한글/파워포인트</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>전문 도구</strong><br/>Tableau<br/>Power BI<br/>Looker Studio</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>프로그래밍</strong><br/>Python (Matplotlib, Seaborn)<br/>R (ggplot2)<br/>JavaScript (D3.js)</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>AI 기반</strong><br/>자연어로 차트 생성<br/>자동 시각화 추천<br/>인사이트 자동 탐지</div>
</div>

<div class="info-box warning">
<strong>시각화의 함정: 데이터 왜곡</strong><br/>
시각화는 데이터를 설득력 있게 전달하지만, 의도적 또는 비의도적으로 데이터를 왜곡할 수 있습니다. Y축 절단, 비율 왜곡, 부적절한 색상 사용, 선택적 데이터 표시 등은 대표적인 시각화 왜곡 기법입니다. 비판적 시각으로 시각화를 해석하는 능력이 데이터 리터러시의 핵심입니다.
</div>
    `
  },
  {
    id: 1006,
    chapter_id: 10,
    title: '10.6 데이터 기반 의사결정',
    sort_order: 6,
    content: `
<h3>데이터 기반 의사결정(Data-Driven Decision Making)</h3>
<p>데이터 기반 의사결정(DDDM)은 직관이나 경험 대신 객관적인 데이터 분석에 근거하여 비즈니스 및 조직 의사결정을 내리는 접근법입니다. 디지털 전환 시대에 조직의 경쟁력을 좌우하는 핵심 역량으로 자리잡고 있습니다.</p>

<div class="info-box">
<strong>데이터 기반 의사결정의 가치</strong><br/>
MIT 슬론 경영대학원의 연구에 따르면, 데이터 기반 의사결정을 실천하는 기업은 그렇지 않은 기업에 비해 생산성이 5~6% 높고, 수익성도 유의미하게 우수한 것으로 나타났습니다.
</div>

<h3>데이터 기반 의사결정 프로세스</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>1단계</strong><br/>문제 정의<br/>의사결정 목표 설정</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>2단계</strong><br/>관련 데이터<br/>수집 및 준비</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>3단계</strong><br/>데이터 분석<br/>인사이트 도출</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>4단계</strong><br/>의사결정 실행<br/>결과 모니터링</div>
</div>

<h3>KPI(핵심 성과 지표)</h3>
<p>KPI(Key Performance Indicator)는 조직의 목표 달성 정도를 측정하는 핵심 지표입니다. 데이터 기반 의사결정에서 KPI는 성과를 객관적으로 평가하고 개선 방향을 제시하는 나침반 역할을 합니다.</p>

<table>
<thead>
<tr><th>분야</th><th>주요 KPI</th><th>설명</th></tr>
</thead>
<tbody>
<tr><td>마케팅</td><td>고객 획득 비용(CAC), 전환율, ROI</td><td>마케팅 활동의 효율성과 효과성 측정</td></tr>
<tr><td>영업</td><td>매출 성장률, 고객 이탈률, 평균 거래 규모</td><td>영업 성과와 고객 관계 관리 수준 파악</td></tr>
<tr><td>운영</td><td>생산성, 불량률, 가동률</td><td>운영 효율성과 품질 수준 측정</td></tr>
<tr><td>인사</td><td>이직률, 직원 만족도, 교육 ROI</td><td>인적 자원 관리의 효과성 평가</td></tr>
<tr><td>교육</td><td>학습 완료율, 성취도, 만족도</td><td>교육 프로그램의 효과 측정</td></tr>
</tbody>
</table>

<h3>직관 vs 데이터 기반 의사결정</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>직관 기반 의사결정</h4>
<ul>
<li>경험과 감(感)에 의존</li>
<li>빠른 결정 가능</li>
<li>개인 편향에 취약</li>
<li>재현성과 설명력이 낮음</li>
<li>복잡한 상황에서 한계</li>
</ul>
</div>
<div class="compare-item">
<h4>데이터 기반 의사결정</h4>
<ul>
<li>객관적 증거에 의존</li>
<li>분석 시간이 필요</li>
<li>편향을 줄일 수 있음</li>
<li>재현 가능하고 설명 가능</li>
<li>복잡한 패턴 발견 가능</li>
</ul>
</div>
</div>

<div class="info-box warning">
<strong>주의: 데이터의 한계 인식</strong><br/>
데이터 기반 의사결정에도 한계가 있습니다. 데이터가 불완전할 수 있고, 과거 데이터가 미래를 보장하지 않으며, 수량화하기 어려운 가치(창의성, 기업 문화)도 있습니다. 최선의 의사결정은 데이터 분석과 인간의 판단력, 맥락 이해를 결합하는 것입니다.
</div>
    `
  },
  {
    id: 1007,
    chapter_id: 10,
    title: '10.7 데이터 품질과 거버넌스',
    sort_order: 7,
    content: `
<h3>데이터 품질(Data Quality)</h3>
<p>데이터 품질은 데이터가 의도된 용도에 얼마나 적합한지를 나타내는 척도입니다. 아무리 정교한 분석 도구와 AI 모델을 사용하더라도, 기반이 되는 데이터의 품질이 낮으면 신뢰할 수 있는 결과를 얻을 수 없습니다.</p>

<h3>데이터 품질의 6대 차원</h3>
<table>
<thead>
<tr><th>품질 차원</th><th>설명</th><th>측정 예시</th><th>낮은 품질의 영향</th></tr>
</thead>
<tbody>
<tr><td>정확성<br/>(Accuracy)</td><td>데이터가 현실을 정확히 반영하는 정도</td><td>오류율, 불일치율</td><td>잘못된 분석 결과와 의사결정</td></tr>
<tr><td>완전성<br/>(Completeness)</td><td>필요한 데이터가 빠짐없이 존재하는 정도</td><td>결측값 비율</td><td>편향된 분석, 불완전한 인사이트</td></tr>
<tr><td>일관성<br/>(Consistency)</td><td>동일 데이터가 여러 시스템에서 일치하는 정도</td><td>데이터 충돌 건수</td><td>혼란, 신뢰 저하, 중복 작업</td></tr>
<tr><td>적시성<br/>(Timeliness)</td><td>데이터가 필요한 시점에 사용 가능한 정도</td><td>데이터 업데이트 주기</td><td>시의성 없는 의사결정</td></tr>
<tr><td>유효성<br/>(Validity)</td><td>데이터가 정해진 규칙과 형식에 맞는 정도</td><td>형식 오류율</td><td>시스템 오류, 처리 실패</td></tr>
<tr><td>고유성<br/>(Uniqueness)</td><td>중복 데이터가 없는 정도</td><td>중복 레코드 비율</td><td>과대/과소 집계, 비용 낭비</td></tr>
</tbody>
</table>

<h3>데이터 거버넌스(Data Governance)</h3>
<p>데이터 거버넌스는 조직 내 데이터의 수집, 저장, 활용, 폐기 등 전체 생애주기를 체계적으로 관리하는 정책, 절차, 조직 체계를 말합니다.</p>

<div class="compare-grid">
<div class="compare-item">
<h4>데이터 거버넌스의 구성 요소</h4>
<ul>
<li><strong>정책과 표준</strong>: 데이터 관리 규칙과 품질 기준 정의</li>
<li><strong>조직과 역할</strong>: 데이터 소유자, 관리자, 사용자 역할 명확화</li>
<li><strong>프로세스</strong>: 데이터 수집, 가공, 활용, 폐기 절차</li>
<li><strong>기술</strong>: 데이터 카탈로그, 메타데이터 관리, 보안 도구</li>
</ul>
</div>
<div class="compare-item">
<h4>데이터 거버넌스의 목표</h4>
<ul>
<li><strong>가용성</strong>: 필요한 데이터를 쉽게 찾고 사용할 수 있도록</li>
<li><strong>무결성</strong>: 데이터의 정확성과 일관성 유지</li>
<li><strong>보안성</strong>: 무단 접근과 유출 방지</li>
<li><strong>규제 준수</strong>: 개인정보보호법 등 법적 요구사항 충족</li>
</ul>
</div>
</div>

<h3>데이터 생애주기 관리</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>생성/수집</strong><br/>데이터 발생<br/>수집 계획</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>저장/관리</strong><br/>안전한 저장<br/>접근 권한 관리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>활용/분석</strong><br/>분석 및 활용<br/>가치 창출</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>보관/폐기</strong><br/>보존 기간 관리<br/>안전한 폐기</div>
</div>

<div class="info-box">
<strong>데이터 품질의 비용</strong><br/>
IBM의 연구에 따르면, 미국 기업들이 데이터 품질 문제로 인해 연간 약 3.1조 달러의 비용을 지출하고 있습니다. 데이터 품질 문제는 발견 시점이 늦어질수록 수정 비용이 기하급수적으로 증가하므로, 초기 단계에서의 품질 관리가 매우 중요합니다.
</div>
    `
  },
  {
    id: 1008,
    chapter_id: 10,
    title: '10.8 개인 데이터 관리',
    sort_order: 8,
    content: `
<h3>개인 데이터와 디지털 발자국</h3>
<p>디지털 시대에 우리는 매일 방대한 양의 개인 데이터를 생성하고 있습니다. 웹 검색, SNS 활동, 온라인 쇼핑, 위치 정보 등 우리의 디지털 활동은 모두 데이터로 기록되며, 이를 '디지털 발자국(Digital Footprint)'이라 합니다.</p>

<h3>디지털 발자국의 유형</h3>
<div class="compare-grid">
<div class="compare-item">
<h4>능동적 발자국 (Active Footprint)</h4>
<p>사용자가 의도적으로 남기는 데이터</p>
<ul>
<li>SNS 게시물, 댓글, 좋아요</li>
<li>이메일, 메시지</li>
<li>온라인 회원 가입 정보</li>
<li>블로그 글, 리뷰 작성</li>
<li>온라인 설문 응답</li>
</ul>
</div>
<div class="compare-item">
<h4>수동적 발자국 (Passive Footprint)</h4>
<p>사용자의 인식 없이 자동 수집되는 데이터</p>
<ul>
<li>웹사이트 방문 기록, 쿠키</li>
<li>IP 주소, 기기 정보</li>
<li>위치 추적 데이터</li>
<li>앱 사용 패턴</li>
<li>검색 기록</li>
</ul>
</div>
</div>

<h3>개인정보 보호 법규</h3>
<table>
<thead>
<tr><th>법규</th><th>적용 지역</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>GDPR</td><td>EU</td><td>정보 주체의 권리 강화, 동의 원칙, 잊힐 권리, 데이터 이동성</td></tr>
<tr><td>개인정보보호법</td><td>한국</td><td>개인정보 처리 원칙, 정보 주체 권리, 안전성 확보 의무</td></tr>
<tr><td>CCPA/CPRA</td><td>미국 캘리포니아</td><td>소비자 프라이버시 권리, 데이터 판매 거부권</td></tr>
<tr><td>PIPL</td><td>중국</td><td>개인정보 처리 동의, 국외 이전 제한</td></tr>
</tbody>
</table>

<h3>개인 데이터 보호 실천 가이드</h3>
<ol>
<li><strong>개인정보 최소 제공 원칙</strong>: 서비스 이용에 꼭 필요한 정보만 제공하고, 선택 항목은 가급적 입력하지 않습니다.</li>
<li><strong>비밀번호 관리</strong>: 서비스마다 다른 강력한 비밀번호를 사용하고, 비밀번호 관리자(Password Manager)를 활용합니다.</li>
<li><strong>2단계 인증 활성화</strong>: 중요한 계정에는 반드시 2단계 인증(2FA)을 설정합니다.</li>
<li><strong>앱 권한 관리</strong>: 설치된 앱의 위치, 카메라, 연락처 등 접근 권한을 정기적으로 점검합니다.</li>
<li><strong>개인정보 처리방침 확인</strong>: 새로운 서비스 가입 시 개인정보가 어떻게 사용되는지 확인합니다.</li>
</ol>

<div class="info-box">
<strong>AI 서비스와 개인 데이터</strong><br/>
AI 서비스를 사용할 때 입력하는 데이터(프롬프트)도 주의가 필요합니다. 일부 AI 서비스는 사용자 입력을 모델 학습에 활용할 수 있으므로, 개인 식별 정보, 업무 기밀, 건강 정보 등 민감한 데이터 입력은 자제해야 합니다. 서비스의 데이터 처리 정책을 반드시 확인하세요.
</div>

<h3>데이터 주체의 주요 권리</h3>
<div class="flow-diagram">
<div class="flow-step"><strong>열람권</strong><br/>내 데이터를<br/>확인할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>정정권</strong><br/>잘못된 데이터를<br/>수정할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>삭제권</strong><br/>불필요한 데이터의<br/>삭제를 요구할 권리</div>
<div class="flow-arrow">→</div>
<div class="flow-step"><strong>이동권</strong><br/>내 데이터를 다른<br/>서비스로 옮길 권리</div>
</div>
    `
  },
  {
    id: 1009,
    chapter_id: 10,
    title: '10.9 학습 정리',
    sort_order: 9,
    content: `
<h3>Chapter 10 학습 정리: 데이터 리터러시</h3>

<div class="info-box">
<strong>핵심 요약</strong><br/>
데이터 리터러시는 AI 시대의 필수 역량으로, 데이터를 읽고, 분석하고, 활용하며, 윤리적으로 관리하는 포괄적인 능력입니다. 데이터의 유형과 구조를 이해하고, 올바른 수집-분석-시각화-의사결정 과정을 통해 데이터의 가치를 극대화할 수 있습니다.
</div>

<h3>핵심 개념 정리</h3>
<table>
<thead>
<tr><th>주제</th><th>핵심 내용</th></tr>
</thead>
<tbody>
<tr><td>데이터 리터러시</td><td>데이터를 읽고, 활용하고, 분석하며, 근거로 논증하는 4가지 역량. 개인, 직업, 사회 모든 차원에서 중요합니다.</td></tr>
<tr><td>데이터 유형</td><td>정형/반정형/비정형, 질적/양적, 1차/2차 등 다양한 분류 기준이 존재하며, 유형에 따라 처리 방법이 달라집니다.</td></tr>
<tr><td>데이터 전처리</td><td>원시 데이터를 분석 가능한 형태로 변환하는 과정. 정제, 변환, 통합, 축소 단계를 거칩니다.</td></tr>
<tr><td>데이터 분석</td><td>기술 통계(평균, 중앙값, 표준편차)와 상관 분석이 기초이며, 기술적-진단적-예측적-처방적 분석 4단계가 있습니다.</td></tr>
<tr><td>데이터 시각화</td><td>데이터를 시각적으로 표현하여 직관적 이해를 돕는 기술. 명확성과 정확성이 핵심 원칙입니다.</td></tr>
<tr><td>데이터 기반 의사결정</td><td>객관적 데이터 분석에 근거한 의사결정 방식. KPI를 통해 성과를 측정하고 개선합니다.</td></tr>
<tr><td>데이터 품질과 거버넌스</td><td>6대 품질 차원(정확성, 완전성, 일관성, 적시성, 유효성, 고유성)과 체계적 데이터 관리 체계입니다.</td></tr>
<tr><td>개인 데이터 관리</td><td>디지털 발자국의 이해, 개인정보보호법 인지, 실천적 보호 전략이 필요합니다.</td></tr>
</tbody>
</table>

<h3>주요 용어 사전</h3>
<ul>
<li><strong>데이터 리터러시</strong>: 데이터를 읽고, 분석하고, 활용하며, 논증하는 능력</li>
<li><strong>정형 데이터</strong>: 행과 열로 구조화된 표 형태의 데이터</li>
<li><strong>비정형 데이터</strong>: 미리 정해진 구조 없이 텍스트, 이미지, 영상 등의 형태를 가진 데이터</li>
<li><strong>전처리</strong>: 원시 데이터를 분석 가능한 형태로 정제하고 변환하는 과정</li>
<li><strong>상관관계</strong>: 두 변수 간의 통계적 관련성 (인과관계와 구별)</li>
<li><strong>KPI</strong>: 핵심 성과 지표 (Key Performance Indicator)</li>
<li><strong>데이터 거버넌스</strong>: 조직 내 데이터 관리 정책, 절차, 체계</li>
<li><strong>디지털 발자국</strong>: 디지털 활동으로 남는 데이터 흔적</li>
<li><strong>GDPR</strong>: EU 일반 데이터 보호 규정</li>
</ul>

<h3>더 알아보기</h3>
<ul>
<li>한국데이터산업진흥원 - 데이터 품질 관리 가이드</li>
<li>공공데이터포털 (data.go.kr)</li>
<li>통계교육원 - 통계 리터러시 자료</li>
<li>개인정보보호위원회 - 개인정보보호 포털</li>
</ul>
    `
  },
  {
    id: 1010,
    chapter_id: 10,
    title: '10.10 학습 확인 문제',
    sort_order: 10,
    content: `
<h3>Chapter 10 학습 확인 문제</h3>
<p>다음 문제를 통해 이번 장에서 학습한 데이터 리터러시에 대한 이해도를 확인해보세요.</p>

<h4>문제 1. 데이터 유형 분류</h4>
<div class="info-box">
<p>다음 중 <strong>비정형 데이터</strong>에 해당하는 것은?</p>
<ol type="a">
<li>엑셀로 정리된 고객 정보 테이블</li>
<li>관계형 데이터베이스의 매출 데이터</li>
<li>소셜 미디어에 게시된 텍스트와 이미지</li>
<li>JSON 형식의 API 응답 데이터</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>소셜 미디어 게시물(텍스트, 이미지)은 미리 정해진 구조 없이 자유 형식으로 생성되는 비정형 데이터입니다. a와 b는 정형 데이터, d는 반정형 데이터에 해당합니다.</p>
</details>
</div>

<h4>문제 2. 데이터 전처리</h4>
<div class="info-box">
<p>"Garbage In, Garbage Out"의 의미로 가장 적절한 것은?</p>
<ol type="a">
<li>컴퓨터 하드웨어가 오래되면 분석 결과가 나빠진다</li>
<li>입력 데이터의 품질이 낮으면 분석 결과도 신뢰할 수 없다</li>
<li>가비지 컬렉션을 수행하지 않으면 시스템이 느려진다</li>
<li>불필요한 데이터를 삭제해야 저장 공간을 절약할 수 있다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>"Garbage In, Garbage Out"은 입력 데이터의 품질이 낮으면 아무리 좋은 분석 도구를 사용하더라도 신뢰할 수 있는 결과를 얻을 수 없다는 데이터 분석의 기본 원칙입니다.</p>
</details>
</div>

<h4>문제 3. 상관관계와 인과관계</h4>
<div class="info-box">
<p>"아이스크림 판매량이 증가하면 익사 사고도 증가한다"에 대한 올바른 해석은?</p>
<ol type="a">
<li>아이스크림이 익사의 원인이므로 아이스크림 판매를 규제해야 한다</li>
<li>익사 사고가 아이스크림 소비를 촉진하는 것이다</li>
<li>두 변수 모두 '기온'이라는 제3의 변수에 영향을 받는 허위 상관이다</li>
<li>통계적 오류이므로 이 데이터는 무시해야 한다</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>이것은 허위 상관(Spurious Correlation)의 대표적인 사례입니다. 아이스크림 판매와 익사 사고 모두 '여름 기온'이라는 공통 원인에 의해 함께 증가하는 것이며, 두 변수 사이에 직접적인 인과관계는 없습니다.</p>
</details>
</div>

<h4>문제 4. 데이터 시각화</h4>
<div class="info-box">
<p>시간에 따른 매출 추이를 파악하기에 가장 적절한 시각화 유형은?</p>
<ol type="a">
<li>원형 그래프 (Pie Chart)</li>
<li>선 그래프 (Line Chart)</li>
<li>히스토그램 (Histogram)</li>
<li>산점도 (Scatter Plot)</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: b</strong><br/>선 그래프는 시간에 따른 데이터의 변화 추세를 파악하는 데 가장 적합한 시각화 유형입니다. 원형 그래프는 비율, 히스토그램은 분포, 산점도는 두 변수 간 관계 파악에 주로 사용됩니다.</p>
</details>
</div>

<h4>문제 5. 개인 데이터 관리</h4>
<div class="info-box">
<p>다음 중 개인 데이터 보호를 위한 올바른 행동이 <strong>아닌</strong> 것은?</p>
<ol type="a">
<li>서비스마다 다른 강력한 비밀번호 사용</li>
<li>중요한 계정에 2단계 인증(2FA) 설정</li>
<li>AI 챗봇에 주민등록번호를 입력하여 본인 인증</li>
<li>설치된 앱의 접근 권한을 정기적으로 점검</li>
</ol>
<details>
<summary>정답 확인</summary>
<p><strong>정답: c</strong><br/>AI 챗봇에 주민등록번호와 같은 민감한 개인정보를 입력하는 것은 매우 위험한 행동입니다. AI 서비스의 데이터가 학습에 활용되거나 유출될 수 있으므로, 민감한 개인정보는 절대로 AI 서비스에 입력해서는 안 됩니다.</p>
</details>
</div>
    `
  }
];
