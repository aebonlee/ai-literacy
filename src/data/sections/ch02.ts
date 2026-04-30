export const CH02_SECTIONS = [
  {
    id: 201,
    chapter_id: 2,
    title: '머신러닝이란?',
    content: `
<h3>머신러닝의 정의와 개념</h3>
<p>
  <strong>머신러닝(Machine Learning, ML)</strong>은 컴퓨터가 명시적으로 프로그래밍되지 않아도
  데이터를 통해 스스로 학습하고, 패턴을 발견하며, 예측이나 의사결정을 수행할 수 있도록 하는
  인공지능의 핵심 분야입니다. 1959년 아서 사무엘(Arthur Samuel)이 "컴퓨터에게 명시적으로
  프로그래밍하지 않고도 학습할 수 있는 능력을 부여하는 연구 분야"라고 정의하였습니다.
</p>

<div class="info-box">
  <strong>핵심 개념:</strong> 전통적 프로그래밍에서는 인간이 규칙을 직접 작성하지만,
  머신러닝에서는 데이터와 결과를 제공하면 컴퓨터가 스스로 규칙(패턴)을 학습합니다.
</div>

<h4>전통적 프로그래밍 vs 머신러닝</h4>

<div class="compare-grid">
  <div class="compare-item">
    <h4>전통적 프로그래밍</h4>
    <p>개발자가 모든 규칙을 직접 코드로 작성합니다.</p>
    <ul>
      <li>입력: 데이터 + 규칙(프로그램)</li>
      <li>출력: 결과</li>
      <li>예: "기온이 0도 이하이면 결빙 경고를 표시하라"</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>머신러닝</h4>
    <p>컴퓨터가 데이터에서 규칙을 자동으로 학습합니다.</p>
    <ul>
      <li>입력: 데이터 + 결과(정답)</li>
      <li>출력: 규칙(모델)</li>
      <li>예: 과거 기상 데이터와 사고 기록을 학습하여 위험 상황 예측</li>
    </ul>
  </div>
</div>

<div class="flow-diagram">
  <div class="flow-step">데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">데이터 전처리</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 평가</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">예측/서비스</div>
</div>

<h4>머신러닝의 세 가지 유형</h4>
<table>
  <thead>
    <tr>
      <th>유형</th>
      <th>학습 방식</th>
      <th>데이터 특성</th>
      <th>대표 알고리즘</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>지도학습</strong></td>
      <td>정답(라벨)이 포함된 데이터로 학습</td>
      <td>입력-출력 쌍이 제공됨</td>
      <td>선형회귀, SVM, 결정 트리</td>
    </tr>
    <tr>
      <td><strong>비지도학습</strong></td>
      <td>정답 없이 데이터의 구조를 탐색</td>
      <td>라벨 없는 데이터</td>
      <td>K-means, DBSCAN, PCA</td>
    </tr>
    <tr>
      <td><strong>강화학습</strong></td>
      <td>보상 신호를 통해 최적 행동 학습</td>
      <td>환경과의 상호작용</td>
      <td>Q-Learning, PPO, DQN</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>왜 머신러닝이 중요한가?</strong> 전통적 프로그래밍으로는 해결하기 어려운 복잡한 문제들
  (예: 이미지 속 고양이 인식, 자연어 번역, 주가 예측)에서 머신러닝은 데이터 기반의
  강력한 해결책을 제공합니다. 데이터가 많을수록 성능이 향상되는 특성을 가집니다.
</div>
    `,
    sort_order: 1
  },
  {
    id: 202,
    chapter_id: 2,
    title: '지도학습',
    content: `
<h3>지도학습 (Supervised Learning)</h3>
<p>
  <strong>지도학습</strong>은 머신러닝에서 가장 널리 사용되는 학습 방법으로,
  <em>정답(라벨, Label)</em>이 포함된 학습 데이터를 통해 입력과 출력 사이의 관계를 학습합니다.
  마치 선생님(정답)의 지도 아래 학생(모델)이 배우는 것과 같습니다.
</p>

<h4>1. 분류 (Classification)</h4>
<p>
  <strong>분류</strong>는 데이터를 미리 정의된 범주(카테고리) 중 하나로 분류하는 작업입니다.
  출력값이 이산적(불연속적)인 값을 가집니다.
</p>
<ul>
  <li><strong>이메일 스팸 분류</strong>: 수신 이메일을 "스팸" 또는 "정상"으로 분류</li>
  <li><strong>질병 진단</strong>: 의료 데이터를 분석하여 "양성" 또는 "음성" 판정</li>
  <li><strong>이미지 분류</strong>: 사진 속 동물이 "고양이", "개", "새" 중 어떤 것인지 분류</li>
  <li><strong>감정 분석</strong>: 리뷰 텍스트를 "긍정", "부정", "중립"으로 분류</li>
</ul>

<h4>2. 회귀 (Regression)</h4>
<p>
  <strong>회귀</strong>는 연속적인 숫자 값을 예측하는 작업입니다.
  출력값이 연속적인 값을 가집니다.
</p>
<ul>
  <li><strong>주택 가격 예측</strong>: 면적, 위치, 연식 등을 입력으로 가격을 예측</li>
  <li><strong>매출 예측</strong>: 과거 매출 데이터를 바탕으로 미래 매출을 예측</li>
  <li><strong>기온 예측</strong>: 기상 데이터를 분석하여 내일의 최고/최저 기온을 예측</li>
  <li><strong>주가 예측</strong>: 과거 주가와 거래량 등을 분석하여 미래 주가를 예측</li>
</ul>

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>분류 (Classification)</th>
      <th>회귀 (Regression)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>출력 형태</strong></td>
      <td>이산적 범주 (클래스)</td>
      <td>연속적 수치</td>
    </tr>
    <tr>
      <td><strong>예시</strong></td>
      <td>스팸/정상, 양성/음성</td>
      <td>가격, 온도, 점수</td>
    </tr>
    <tr>
      <td><strong>평가 지표</strong></td>
      <td>정확도, F1-score, AUC</td>
      <td>MSE, RMSE, R-squared</td>
    </tr>
    <tr>
      <td><strong>대표 알고리즘</strong></td>
      <td>로지스틱 회귀, SVM, 랜덤 포레스트</td>
      <td>선형 회귀, 다항 회귀, Ridge/Lasso</td>
    </tr>
  </tbody>
</table>

<h4>지도학습의 과정</h4>
<div class="flow-diagram">
  <div class="flow-step">라벨링된 데이터 준비</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">학습 데이터 / 테스트 데이터 분리</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 학습 (Training)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">모델 평가 (Testing)</div>
</div>

<div class="info-box">
  <strong>실생활 예시:</strong> 넷플릭스의 콘텐츠 추천, 은행의 대출 승인 심사, 병원의 CT 영상 판독,
  이메일 스팸 필터 등 우리 일상에서 접하는 대부분의 AI 서비스가 지도학습을 기반으로 합니다.
</div>
    `,
    sort_order: 2
  },
  {
    id: 203,
    chapter_id: 2,
    title: '비지도학습',
    content: `
<h3>비지도학습 (Unsupervised Learning)</h3>
<p>
  <strong>비지도학습</strong>은 정답(라벨)이 없는 데이터에서 숨겨진 패턴이나 구조를 스스로 발견하는
  학습 방법입니다. 데이터의 내재된 특성을 탐색하므로, 사전에 알려지지 않은 인사이트를
  발견하는 데 유용합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> 지도학습이 "이것은 사과, 이것은 배"라고 가르쳐주는 것이라면,
  비지도학습은 "이 과일들을 비슷한 것끼리 묶어봐"라고 하는 것과 같습니다.
  정답 없이 데이터 자체의 유사성과 패턴을 찾아냅니다.
</div>

<h4>1. 클러스터링 (Clustering)</h4>
<p>
  <strong>클러스터링</strong>은 데이터를 유사한 특성을 가진 그룹(클러스터)으로 자동 분류하는 기법입니다.
</p>
<ul>
  <li><strong>고객 세분화</strong>: 구매 패턴에 따라 고객을 VIP, 일반, 이탈 위험 등으로 그룹화</li>
  <li><strong>문서 분류</strong>: 대량의 뉴스 기사를 주제별(정치, 경제, 스포츠)로 자동 분류</li>
  <li><strong>유전자 분석</strong>: 유전자 발현 패턴이 유사한 유전자를 그룹화</li>
  <li><strong>이상 탐지</strong>: 정상적인 패턴과 다른 이상 데이터를 탐지 (사기 거래 탐지)</li>
</ul>

<h4>주요 클러스터링 알고리즘</h4>
<table>
  <thead>
    <tr>
      <th>알고리즘</th>
      <th>특징</th>
      <th>장점</th>
      <th>단점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>K-Means</strong></td>
      <td>K개의 중심점 기반 분류</td>
      <td>구현 간단, 빠른 속도</td>
      <td>K값을 미리 지정해야 함</td>
    </tr>
    <tr>
      <td><strong>DBSCAN</strong></td>
      <td>밀도 기반 분류</td>
      <td>클러스터 개수 자동 결정</td>
      <td>밀도가 다른 클러스터에 취약</td>
    </tr>
    <tr>
      <td><strong>계층적 클러스터링</strong></td>
      <td>트리 구조의 계층적 분류</td>
      <td>덴드로그램으로 시각화 가능</td>
      <td>대규모 데이터에서 느림</td>
    </tr>
  </tbody>
</table>

<h4>2. 차원 축소 (Dimensionality Reduction)</h4>
<p>
  <strong>차원 축소</strong>는 고차원 데이터를 핵심 정보를 유지하면서 저차원으로 변환하는 기법입니다.
  데이터 시각화, 노이즈 제거, 계산 효율성 향상에 활용됩니다.
</p>
<ul>
  <li><strong>PCA (주성분 분석)</strong>: 데이터의 분산을 최대로 보존하는 축을 찾아 차원을 축소</li>
  <li><strong>t-SNE</strong>: 고차원 데이터를 2D/3D로 시각화하는 데 특화된 기법</li>
  <li><strong>오토인코더</strong>: 신경망을 활용한 비선형 차원 축소</li>
</ul>

<div class="info-box">
  <strong>활용 사례:</strong> 비지도학습은 탐색적 데이터 분석에서 특히 강력합니다.
  예를 들어, 신규 시장에 진출할 때 고객 데이터를 클러스터링하여 타겟 고객군을 발견하거나,
  수백 개의 특성(Feature)을 가진 데이터를 차원 축소하여 시각화함으로써
  데이터의 전체적인 구조를 파악할 수 있습니다.
</div>
    `,
    sort_order: 3
  },
  {
    id: 204,
    chapter_id: 2,
    title: '강화학습',
    content: `
<h3>강화학습 (Reinforcement Learning)</h3>
<p>
  <strong>강화학습</strong>은 에이전트(Agent)가 환경(Environment)과 상호작용하면서,
  보상(Reward)을 최대화하는 행동을 스스로 학습하는 방법입니다.
  시행착오(Trial and Error)를 통해 최적의 전략(정책, Policy)을 발견합니다.
</p>

<h4>강화학습의 핵심 구성 요소</h4>
<div class="flow-diagram">
  <div class="flow-step">에이전트 (Agent)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">행동 (Action)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">환경 (Environment)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">보상/상태 (Reward/State)</div>
</div>

<table>
  <thead>
    <tr>
      <th>구성 요소</th>
      <th>설명</th>
      <th>바둑 AI 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>에이전트 (Agent)</strong></td>
      <td>학습하고 행동하는 주체</td>
      <td>AlphaGo 프로그램</td>
    </tr>
    <tr>
      <td><strong>환경 (Environment)</strong></td>
      <td>에이전트가 상호작용하는 세계</td>
      <td>바둑판과 상대방</td>
    </tr>
    <tr>
      <td><strong>상태 (State)</strong></td>
      <td>현재 환경의 상황 정보</td>
      <td>현재 바둑판의 돌 배치</td>
    </tr>
    <tr>
      <td><strong>행동 (Action)</strong></td>
      <td>에이전트가 수행할 수 있는 동작</td>
      <td>다음 수를 놓을 위치</td>
    </tr>
    <tr>
      <td><strong>보상 (Reward)</strong></td>
      <td>행동의 결과로 받는 피드백</td>
      <td>승리: +1, 패배: -1</td>
    </tr>
    <tr>
      <td><strong>정책 (Policy)</strong></td>
      <td>상태에 따라 행동을 결정하는 전략</td>
      <td>특정 상황에서의 최적의 수 선택 규칙</td>
    </tr>
  </tbody>
</table>

<h4>강화학습의 주요 특징</h4>
<ul>
  <li><strong>탐험과 활용의 딜레마 (Exploration vs Exploitation)</strong>: 새로운 행동을 시도할 것인가(탐험),
    이미 알고 있는 최선의 행동을 반복할 것인가(활용) 사이의 균형</li>
  <li><strong>지연 보상 (Delayed Reward)</strong>: 즉각적인 보상이 아닌, 미래의 보상을 고려한 장기적 전략 학습</li>
  <li><strong>순차적 의사결정</strong>: 하나의 행동이 이후의 상태와 행동에 영향을 미치는 연쇄적 구조</li>
</ul>

<h4>강화학습의 대표적 성과</h4>
<ul>
  <li><strong>AlphaGo (2016)</strong>: 구글 딥마인드가 개발, 인간 바둑 세계 챔피언 이세돌을 4:1로 승리</li>
  <li><strong>AlphaFold (2020)</strong>: 단백질 구조 예측 문제를 혁신적으로 해결</li>
  <li><strong>OpenAI Five (2019)</strong>: 복잡한 팀 전략 게임 Dota 2에서 프로 팀을 상대로 승리</li>
  <li><strong>자율주행</strong>: 복잡한 교통 상황에서의 주행 전략 학습</li>
  <li><strong>로봇 제어</strong>: 보행, 물체 잡기 등 복잡한 운동 제어 학습</li>
</ul>

<div class="info-box warning">
  <strong>강화학습의 도전 과제:</strong> 강화학습은 매우 강력하지만, 대량의 시행착오가 필요하여
  학습에 오랜 시간이 걸리고, 보상 함수를 적절히 설계하는 것이 어렵습니다.
  또한 실제 환경에서의 시행착오는 비용이 크므로, 시뮬레이션 환경에서 먼저 학습한 후
  실제 환경에 적용하는 방식(Sim-to-Real)이 연구되고 있습니다.
</div>
    `,
    sort_order: 4
  },
  {
    id: 205,
    chapter_id: 2,
    title: '딥러닝과 인공 신경망',
    content: `
<h3>딥러닝과 인공 신경망의 기초</h3>
<p>
  <strong>딥러닝(Deep Learning)</strong>은 인간 뇌의 신경망 구조에서 영감을 받은
  <em>인공 신경망(Artificial Neural Network, ANN)</em>을 활용하는 머신러닝의 하위 분야입니다.
  여러 층(Layer)의 신경망을 통해 데이터의 복잡한 표현을 자동으로 학습합니다.
</p>

<h4>인공 신경망의 기본 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">입력층 (Input Layer)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">은닉층 (Hidden Layers)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">출력층 (Output Layer)</div>
</div>

<h4>뉴런(Neuron)의 작동 원리</h4>
<p>
  인공 신경망의 기본 단위인 <strong>뉴런(또는 노드)</strong>은 다음과 같이 작동합니다:
</p>
<ol>
  <li>여러 입력값을 받아 각 입력에 <strong>가중치(Weight)</strong>를 곱합니다</li>
  <li>가중치가 적용된 입력값들을 모두 합산합니다</li>
  <li><strong>편향(Bias)</strong>을 더합니다</li>
  <li><strong>활성화 함수(Activation Function)</strong>를 적용하여 출력값을 생성합니다</li>
</ol>

<h4>활성화 함수의 종류</h4>
<table>
  <thead>
    <tr>
      <th>함수명</th>
      <th>특징</th>
      <th>주요 용도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ReLU</strong></td>
      <td>0 이하는 0, 양수는 그대로 출력</td>
      <td>은닉층에서 가장 널리 사용</td>
    </tr>
    <tr>
      <td><strong>Sigmoid</strong></td>
      <td>출력을 0~1 사이로 변환</td>
      <td>이진 분류의 출력층</td>
    </tr>
    <tr>
      <td><strong>Softmax</strong></td>
      <td>여러 클래스의 확률 분포를 생성</td>
      <td>다중 분류의 출력층</td>
    </tr>
    <tr>
      <td><strong>Tanh</strong></td>
      <td>출력을 -1~1 사이로 변환</td>
      <td>RNN 등에서 활용</td>
    </tr>
  </tbody>
</table>

<h4>딥러닝의 학습 과정</h4>
<ol>
  <li><strong>순전파 (Forward Propagation)</strong>: 입력 데이터를 신경망에 통과시켜 예측값을 계산</li>
  <li><strong>손실 계산 (Loss Calculation)</strong>: 예측값과 실제값의 차이(오차)를 계산</li>
  <li><strong>역전파 (Back Propagation)</strong>: 오차를 역방향으로 전파하여 각 가중치의 기여도를 계산</li>
  <li><strong>가중치 업데이트</strong>: 경사 하강법(Gradient Descent)을 통해 오차를 줄이는 방향으로 가중치를 조정</li>
  <li>1~4 과정을 수많은 <strong>에포크(Epoch)</strong> 동안 반복하여 모델을 최적화</li>
</ol>

<div class="info-box">
  <strong>왜 "딥(Deep)"러닝인가?</strong> 신경망의 은닉층이 2개 이상인 경우를 "깊은(Deep)" 신경망이라 하며,
  이를 학습시키는 것을 딥러닝이라 합니다. 층이 깊어질수록 데이터의 더 추상적이고
  복잡한 특성을 학습할 수 있지만, 그만큼 많은 데이터와 컴퓨팅 파워가 필요합니다.
</div>
    `,
    sort_order: 5
  },
  {
    id: 206,
    chapter_id: 2,
    title: 'CNN과 이미지 인식',
    content: `
<h3>합성곱 신경망 (CNN: Convolutional Neural Network)</h3>
<p>
  <strong>CNN(합성곱 신경망)</strong>은 이미지 처리에 특화된 딥러닝 아키텍처로,
  이미지에서 특징을 자동으로 추출하고 학습하는 데 탁월한 성능을 보입니다.
  인간의 시각 피질이 시각 정보를 처리하는 방식에서 영감을 받아 설계되었습니다.
</p>

<h4>CNN의 핵심 구조</h4>
<div class="flow-diagram">
  <div class="flow-step">입력 이미지</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">합성곱층 (Conv)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">풀링층 (Pooling)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">완전연결층 (FC)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">출력 (분류 결과)</div>
</div>

<h4>각 층의 역할</h4>
<table>
  <thead>
    <tr>
      <th>층 (Layer)</th>
      <th>역할</th>
      <th>비유</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>합성곱층 (Convolutional Layer)</strong></td>
      <td>필터를 통해 이미지의 특징(에지, 텍스처, 패턴)을 추출</td>
      <td>돋보기로 이미지의 각 부분을 세밀하게 관찰</td>
    </tr>
    <tr>
      <td><strong>풀링층 (Pooling Layer)</strong></td>
      <td>특징 맵의 크기를 줄여 연산량을 감소시키고 주요 특징만 유지</td>
      <td>핵심 정보만 요약하여 정리</td>
    </tr>
    <tr>
      <td><strong>완전연결층 (Fully Connected Layer)</strong></td>
      <td>추출된 특징들을 종합하여 최종 분류를 수행</td>
      <td>모든 단서를 종합하여 결론을 도출</td>
    </tr>
  </tbody>
</table>

<h4>CNN의 특징 학습 과정</h4>
<p>
  CNN은 층이 깊어질수록 점점 더 복잡한 특징을 학습합니다:
</p>
<ul>
  <li><strong>초기 층</strong>: 에지(edge), 선(line), 색상 변화 등 기본적 특징</li>
  <li><strong>중간 층</strong>: 질감(texture), 패턴, 도형 등 중간 수준의 특징</li>
  <li><strong>후반 층</strong>: 눈, 코, 바퀴 등 객체의 구성 요소</li>
  <li><strong>최종 층</strong>: 얼굴, 자동차, 고양이 등 완전한 객체 인식</li>
</ul>

<h4>대표적인 CNN 모델</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>연도</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LeNet-5</strong></td>
      <td>1998</td>
      <td>최초의 CNN, 손글씨 숫자 인식에 활용</td>
    </tr>
    <tr>
      <td><strong>AlexNet</strong></td>
      <td>2012</td>
      <td>ImageNet 대회 우승, 딥러닝 혁명의 시작</td>
    </tr>
    <tr>
      <td><strong>VGGNet</strong></td>
      <td>2014</td>
      <td>깊은 층(16~19층)으로 높은 성능 달성</td>
    </tr>
    <tr>
      <td><strong>ResNet</strong></td>
      <td>2015</td>
      <td>잔차 연결(Skip Connection)으로 152층까지 학습 가능</td>
    </tr>
    <tr>
      <td><strong>EfficientNet</strong></td>
      <td>2019</td>
      <td>효율적인 모델 스케일링으로 최적의 성능-효율 달성</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>CNN의 응용:</strong> 자율주행 자동차의 객체 인식, 의료 영상(X-ray, CT) 분석,
  제조업 불량 검사, 얼굴 인식 보안 시스템, 위성 영상 분석 등 시각적 정보를 처리하는
  거의 모든 AI 시스템에서 CNN이 핵심 역할을 담당합니다.
</div>
    `,
    sort_order: 6
  },
  {
    id: 207,
    chapter_id: 2,
    title: 'RNN과 자연어 처리',
    content: `
<h3>순환 신경망 (RNN: Recurrent Neural Network)</h3>
<p>
  <strong>RNN(순환 신경망)</strong>은 순서가 있는 연속적인 데이터(시퀀스 데이터)를 처리하기 위해
  설계된 신경망 아키텍처입니다. 이전 시점의 정보를 기억하여 현재의 판단에 활용하는 것이
  핵심 특징입니다. 텍스트, 음성, 시계열 데이터 등의 처리에 적합합니다.
</p>

<h4>RNN의 작동 원리</h4>
<p>
  일반적인 신경망은 각 입력을 독립적으로 처리하지만, RNN은 <strong>순환 구조(Recurrent Structure)</strong>를
  통해 이전 시점의 출력(은닉 상태)을 다음 시점의 입력에 함께 전달합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> RNN은 마치 소설을 읽는 것과 같습니다. 현재 문장을 이해할 때
  앞에서 읽은 내용(문맥)을 기억하고 있어야 의미를 정확히 파악할 수 있습니다.
  RNN도 이전 시점의 정보를 "기억"하면서 다음 입력을 처리합니다.
</div>

<h4>RNN의 한계: 기울기 소실 문제</h4>
<p>
  기본 RNN은 긴 시퀀스를 처리할 때 <strong>기울기 소실(Vanishing Gradient)</strong> 문제가 발생합니다.
  역전파 과정에서 기울기가 점점 작아져, 먼 과거의 정보를 학습하기 어려워지는 현상입니다.
</p>

<h4>LSTM (Long Short-Term Memory)</h4>
<p>
  <strong>LSTM</strong>은 RNN의 기울기 소실 문제를 해결하기 위해 1997년에 제안된 아키텍처입니다.
  <em>셀 상태(Cell State)</em>와 세 개의 <em>게이트(Gate)</em>를 도입하여 장기 기억을 효과적으로 유지합니다.
</p>
<ul>
  <li><strong>입력 게이트 (Input Gate)</strong>: 새로운 정보 중 어떤 것을 저장할지 결정</li>
  <li><strong>망각 게이트 (Forget Gate)</strong>: 기존 기억 중 어떤 것을 버릴지 결정</li>
  <li><strong>출력 게이트 (Output Gate)</strong>: 저장된 정보 중 어떤 것을 출력할지 결정</li>
</ul>

<h4>GRU (Gated Recurrent Unit)</h4>
<p>
  <strong>GRU</strong>는 LSTM을 단순화한 구조로, 게이트 수를 줄여(리셋 게이트, 업데이트 게이트)
  연산 효율성을 높이면서도 유사한 성능을 달성합니다.
</p>

<h4>RNN 계열의 활용 분야</h4>
<table>
  <thead>
    <tr>
      <th>활용 분야</th>
      <th>입력</th>
      <th>출력</th>
      <th>예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>기계 번역</strong></td>
      <td>원문 텍스트</td>
      <td>번역 텍스트</td>
      <td>한국어 문장을 영어로 번역</td>
    </tr>
    <tr>
      <td><strong>텍스트 생성</strong></td>
      <td>시작 문장</td>
      <td>이어지는 텍스트</td>
      <td>소설, 기사 자동 작성</td>
    </tr>
    <tr>
      <td><strong>감정 분석</strong></td>
      <td>리뷰 텍스트</td>
      <td>감정 레이블</td>
      <td>긍정/부정/중립 분류</td>
    </tr>
    <tr>
      <td><strong>음성 인식</strong></td>
      <td>음성 신호</td>
      <td>텍스트</td>
      <td>시리, 빅스비 음성 명령 인식</td>
    </tr>
    <tr>
      <td><strong>시계열 예측</strong></td>
      <td>과거 데이터</td>
      <td>미래 예측값</td>
      <td>주가 예측, 수요 예측</td>
    </tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>참고:</strong> RNN/LSTM은 자연어 처리 분야에서 오랫동안 핵심 아키텍처로 활용되었으나,
  2017년 트랜스포머(Transformer)의 등장 이후 대부분의 최신 모델은 트랜스포머 기반으로
  전환되었습니다. 다음 절에서 트랜스포머에 대해 자세히 알아보겠습니다.
</div>
    `,
    sort_order: 7
  },
  {
    id: 208,
    chapter_id: 2,
    title: '트랜스포머와 대규모 언어모델',
    content: `
<h3>트랜스포머 (Transformer) 아키텍처</h3>
<p>
  <strong>트랜스포머(Transformer)</strong>는 2017년 구글 연구팀이 발표한 논문
  "Attention Is All You Need"에서 제안된 혁신적인 신경망 아키텍처입니다.
  기존 RNN의 순차적 처리 한계를 극복하고, <strong>셀프 어텐션(Self-Attention)</strong> 메커니즘을 통해
  병렬 처리가 가능하여 훈련 속도와 성능 모두 크게 향상되었습니다.
</p>

<h4>어텐션 메커니즘 (Attention Mechanism)</h4>
<p>
  어텐션 메커니즘은 입력 시퀀스의 모든 위치에 대해 <strong>"어디에 주의를 기울일 것인가"</strong>를
  학습하는 방법입니다. 문장 속 각 단어가 다른 모든 단어와의 관계를 동시에 파악합니다.
</p>

<div class="info-box">
  <strong>비유:</strong> "나는 사과를 먹었다"라는 문장에서 "먹었다"를 이해할 때,
  어텐션 메커니즘은 "나"(주어)와 "사과"(목적어)에 높은 주의를 기울이고,
  다른 단어에는 상대적으로 낮은 주의를 기울입니다. 이처럼 문맥에 따라
  중요한 단어에 집중하는 것이 어텐션의 핵심입니다.
</div>

<h4>트랜스포머의 구조</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>인코더 (Encoder)</h4>
    <ul>
      <li>입력 텍스트를 고차원 벡터로 변환</li>
      <li>셀프 어텐션 + 피드포워드 신경망</li>
      <li>BERT, RoBERTa 등이 인코더 기반</li>
      <li>주로 텍스트 이해 작업에 활용</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>디코더 (Decoder)</h4>
    <ul>
      <li>벡터를 다시 텍스트로 변환 (생성)</li>
      <li>마스크드 셀프 어텐션 + 크로스 어텐션</li>
      <li>GPT 시리즈가 디코더 기반</li>
      <li>주로 텍스트 생성 작업에 활용</li>
    </ul>
  </div>
</div>

<h4>대규모 언어모델 (LLM: Large Language Model)</h4>
<p>
  트랜스포머 아키텍처를 기반으로 방대한 양의 텍스트 데이터를 학습한 초대형 모델을
  <strong>대규모 언어모델(LLM)</strong>이라 합니다.
</p>

<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>개발사</th>
      <th>특징</th>
      <th>파라미터 수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BERT</strong></td>
      <td>Google (2018)</td>
      <td>양방향 인코더, 텍스트 이해에 특화</td>
      <td>3.4억</td>
    </tr>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>OpenAI (2020)</td>
      <td>초대형 디코더 모델, 텍스트 생성</td>
      <td>1,750억</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>OpenAI (2023)</td>
      <td>멀티모달(텍스트+이미지), 추론 능력 강화</td>
      <td>비공개 (추정 1조+)</td>
    </tr>
    <tr>
      <td><strong>Claude</strong></td>
      <td>Anthropic (2023~)</td>
      <td>Constitutional AI, 안전성 중시</td>
      <td>비공개</td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>Google (2023~)</td>
      <td>멀티모달, 다양한 크기의 모델 제공</td>
      <td>비공개</td>
    </tr>
  </tbody>
</table>

<h4>LLM의 학습 방법</h4>
<ol>
  <li><strong>사전 학습 (Pre-training)</strong>: 인터넷의 방대한 텍스트 데이터를 학습하여 언어의 일반적 패턴을 습득</li>
  <li><strong>미세 조정 (Fine-tuning)</strong>: 특정 작업에 맞는 데이터로 추가 학습하여 성능을 최적화</li>
  <li><strong>RLHF (인간 피드백 강화학습)</strong>: 인간의 선호도 데이터를 바탕으로 응답 품질을 개선</li>
</ol>

<div class="info-box">
  <strong>트랜스포머의 영향:</strong> 트랜스포머는 자연어 처리를 넘어 컴퓨터 비전(Vision Transformer),
  음성 인식, 단백질 구조 예측, 코드 생성 등 거의 모든 AI 분야에 혁신을 가져왔으며,
  현재 AI 발전의 가장 핵심적인 기반 기술입니다.
</div>
    `,
    sort_order: 8
  },
  {
    id: 209,
    chapter_id: 2,
    title: '학습 정리',
    content: `
<h3>Chapter 2 학습 정리: 머신러닝과 딥러닝</h3>
<p>이번 장에서 학습한 핵심 개념을 정리합니다.</p>

<div class="info-box">
  <h4>핵심 개념 요약</h4>
  <ol>
    <li><strong>머신러닝</strong>은 데이터에서 패턴을 자동으로 학습하는 기술로, 전통적 프로그래밍과 근본적으로 다릅니다.</li>
    <li><strong>지도학습</strong>은 정답이 있는 데이터를 학습하며, 분류와 회귀 두 가지 유형이 있습니다.</li>
    <li><strong>비지도학습</strong>은 정답 없이 데이터의 숨겨진 패턴을 발견하며, 클러스터링과 차원 축소가 대표적입니다.</li>
    <li><strong>강화학습</strong>은 에이전트가 환경과 상호작용하며 보상을 최대화하는 행동을 학습합니다.</li>
    <li><strong>딥러닝</strong>은 여러 층의 인공 신경망을 통해 복잡한 패턴을 학습하는 머신러닝의 하위 분야입니다.</li>
    <li><strong>CNN</strong>은 이미지 처리에 특화된 아키텍처로, 합성곱층을 통해 시각적 특징을 자동 추출합니다.</li>
    <li><strong>RNN/LSTM</strong>은 순서가 있는 데이터를 처리하며, 이전 정보를 기억하여 활용합니다.</li>
    <li><strong>트랜스포머</strong>는 어텐션 메커니즘 기반의 혁신적 아키텍처로, GPT, BERT 등 LLM의 기반입니다.</li>
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
      <td><strong>머신러닝</strong></td>
      <td>데이터에서 패턴을 자동으로 학습하는 AI 기술</td>
    </tr>
    <tr>
      <td><strong>지도학습</strong></td>
      <td>라벨이 있는 데이터로 학습 (분류, 회귀)</td>
    </tr>
    <tr>
      <td><strong>비지도학습</strong></td>
      <td>라벨 없이 데이터의 구조를 탐색 (클러스터링)</td>
    </tr>
    <tr>
      <td><strong>강화학습</strong></td>
      <td>보상 신호를 통해 최적 행동을 학습</td>
    </tr>
    <tr>
      <td><strong>인공 신경망</strong></td>
      <td>뇌의 뉴런 구조를 모방한 연산 모델</td>
    </tr>
    <tr>
      <td><strong>CNN</strong></td>
      <td>이미지 인식에 특화된 합성곱 신경망</td>
    </tr>
    <tr>
      <td><strong>RNN / LSTM</strong></td>
      <td>시퀀스 데이터 처리를 위한 순환 신경망</td>
    </tr>
    <tr>
      <td><strong>트랜스포머</strong></td>
      <td>어텐션 기반의 혁신적 신경망 아키텍처</td>
    </tr>
    <tr>
      <td><strong>LLM</strong></td>
      <td>대규모 언어모델 (GPT, Claude, Gemini 등)</td>
    </tr>
    <tr>
      <td><strong>RLHF</strong></td>
      <td>인간 피드백 기반 강화학습으로 LLM 성능 개선</td>
    </tr>
  </tbody>
</table>

<div class="info-box">
  <strong>다음 장 미리보기:</strong> Chapter 3에서는 AI의 역사와 발전 과정을 탐구합니다.
  1950년대 AI의 탄생부터 AI 겨울, 딥러닝 혁명, 그리고 생성형 AI의 등장까지
  AI 발전의 주요 이정표를 시간 순서대로 살펴보겠습니다.
</div>
    `,
    sort_order: 9
  },
  {
    id: 210,
    chapter_id: 2,
    title: '학습 확인 문제',
    content: `
<h3>Chapter 2 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>전통적 프로그래밍과 머신러닝의 가장 큰 차이점은 무엇인가요?</strong></p>
  <ol type="a">
    <li>머신러닝은 컴퓨터를 사용하지 않는다</li>
    <li>전통적 프로그래밍은 규칙을 인간이 작성하고, 머신러닝은 데이터에서 규칙을 학습한다</li>
    <li>전통적 프로그래밍은 데이터가 필요 없다</li>
    <li>머신러닝은 항상 전통적 프로그래밍보다 빠르다</li>
  </ol>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b) 전통적 프로그래밍은 규칙을 인간이 작성하고, 머신러닝은 데이터에서 규칙을 학습한다.</strong></p>
  </details>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>"이메일을 스팸/정상으로 분류하는 AI"는 어떤 학습 유형에 해당하나요?</strong></p>
  <ol type="a">
    <li>비지도학습 - 클러스터링</li>
    <li>강화학습</li>
    <li>지도학습 - 분류</li>
    <li>지도학습 - 회귀</li>
  </ol>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: c) 지도학습 - 분류. 정답 라벨(스팸/정상)이 있는 데이터로 학습하며, 이산적 범주를 예측하므로 분류입니다.</strong></p>
  </details>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>강화학습에서 에이전트가 학습하는 방법으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>정답 라벨이 있는 데이터를 학습한다</li>
    <li>데이터의 클러스터를 자동으로 발견한다</li>
    <li>환경과 상호작용하면서 보상을 최대화하는 행동을 학습한다</li>
    <li>인간이 작성한 규칙에 따라 작동한다</li>
  </ol>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: c) 환경과 상호작용하면서 보상을 최대화하는 행동을 학습한다.</strong></p>
  </details>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>CNN(합성곱 신경망)이 주로 활용되는 분야는?</strong></p>
  <ol type="a">
    <li>주가 예측</li>
    <li>이미지 인식 및 컴퓨터 비전</li>
    <li>음성 합성</li>
    <li>텍스트 번역</li>
  </ol>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b) 이미지 인식 및 컴퓨터 비전. CNN은 합성곱층을 통해 이미지의 시각적 특징을 자동으로 추출하는 데 특화되어 있습니다.</strong></p>
  </details>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>트랜스포머(Transformer) 아키텍처의 핵심 메커니즘은 무엇이며, 이것이 RNN 대비 갖는 장점은?</strong></p>
  <ol type="a">
    <li>순환 구조 — 순차적 처리로 정확도가 높다</li>
    <li>합성곱 — 이미지 처리에 최적화되어 있다</li>
    <li>셀프 어텐션 — 병렬 처리가 가능하고 장거리 의존성을 효과적으로 학습한다</li>
    <li>풀링 — 데이터 크기를 줄여 효율성이 높다</li>
  </ol>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: c) 셀프 어텐션 — 모든 위치의 단어 관계를 동시에 파악하여 병렬 처리가 가능하고, RNN의 기울기 소실 문제 없이 장거리 의존성을 효과적으로 학습합니다.</strong></p>
  </details>
</div>
    `,
    sort_order: 10
  }
];
