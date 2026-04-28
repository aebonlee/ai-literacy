/**
 * Chapter 8: AI 편향성과 공정성
 * AI 편향의 유형, 원인, 탐지, 완화, 공정성 지표, 사례 연구
 */
export const CH08_SECTIONS = [
  {
    id: 801,
    chapter_id: 8,
    title: 'AI 편향성이란?',
    sort_order: 1,
    content: `
<h3>AI 편향의 개념과 중요성</h3>
<p>
  <strong>AI 편향(Bias)</strong>이란 AI 시스템이 특정 집단이나 개인에 대해 체계적으로 불공정한
  결과를 산출하는 현상을 말합니다. 이러한 편향은 의도적이지 않더라도, 데이터, 알고리즘, 설계 과정에서
  자연스럽게 발생할 수 있으며, 사회적 차별을 자동화하고 강화하는 결과를 초래할 수 있습니다.
</p>

<div class="info-box">
  <strong>AI 편향(AI Bias):</strong> AI 시스템의 학습 데이터, 알고리즘 설계, 또는 배포 과정에서
  발생하는 체계적 오류로, 특정 집단에게 유리하거나 불리한 결과를 만들어내는 현상입니다.
</div>

<h4>편향이 문제가 되는 이유</h4>
<table>
  <thead>
    <tr><th>측면</th><th>영향</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>개인 차원</strong></td><td>부당한 대우와 기회 박탈</td><td>적격 지원자가 AI 채용 필터에서 탈락</td></tr>
    <tr><td><strong>사회 차원</strong></td><td>기존 불평등 고착화 및 심화</td><td>특정 지역 대출 거부율 증가</td></tr>
    <tr><td><strong>법적 차원</strong></td><td>차별 금지법 위반 위험</td><td>고용 차별 소송</td></tr>
    <tr><td><strong>경제 차원</strong></td><td>시장 왜곡과 비효율</td><td>우수 인재 배제로 인한 기업 손실</td></tr>
    <tr><td><strong>신뢰 차원</strong></td><td>AI 기술에 대한 불신 확산</td><td>편향 논란으로 서비스 중단</td></tr>
  </tbody>
</table>

<h4>편향 vs 오류</h4>
<div class="compare-grid">
  <div>
    <h5>편향 (Bias)</h5>
    <ul>
      <li>체계적이고 방향성 있는 오류</li>
      <li>특정 집단에 일관되게 불리한 결과</li>
      <li>데이터/설계의 구조적 문제</li>
      <li>수정하지 않으면 지속적으로 반복</li>
    </ul>
  </div>
  <div>
    <h5>오류 (Error)</h5>
    <ul>
      <li>무작위적이고 방향성 없는 실수</li>
      <li>모든 집단에 비슷하게 발생</li>
      <li>모델 복잡도/데이터 양 문제</li>
      <li>더 많은 데이터/훈련으로 감소 가능</li>
    </ul>
  </div>
</div>

<div class="info-box warning">
  <strong>주의:</strong> AI 편향은 기술적 문제일 뿐 아니라 사회적, 윤리적 문제입니다.
  편향된 AI 시스템이 대규모로 배포되면, 그 영향은 수백만 명에게 동시에 미칩니다.
</div>
    `
  },
  {
    id: 802,
    chapter_id: 8,
    title: '편향의 유형',
    sort_order: 2,
    content: `
<h3>AI 편향의 주요 유형</h3>
<p>AI 편향은 발생 원인과 단계에 따라 다양한 유형으로 분류됩니다.</p>

<h4>데이터 관련 편향</h4>
<table>
  <thead>
    <tr><th>편향 유형</th><th>설명</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>선택 편향</strong></td><td>학습 데이터가 전체 모집단을 대표하지 못할 때 발생</td><td>온라인 설문 데이터에서 인터넷 접근 어려운 계층 누락</td></tr>
    <tr><td><strong>역사적 편향</strong></td><td>과거 사회의 편견이 데이터에 반영</td><td>과거 채용 데이터에서 남성 선호 패턴 학습</td></tr>
    <tr><td><strong>측정 편향</strong></td><td>데이터 수집 방법의 체계적 오류</td><td>피부색에 따라 정확도가 다른 의료 센서</td></tr>
    <tr><td><strong>라벨링 편향</strong></td><td>데이터 라벨링 과정의 주관적 판단</td><td>공격적 발언 분류 기준의 문화적 차이</td></tr>
    <tr><td><strong>표본 편향</strong></td><td>특정 그룹의 과대/과소 대표</td><td>서양인 얼굴 위주로 학습한 얼굴 인식 AI</td></tr>
  </tbody>
</table>

<h4>알고리즘 관련 편향</h4>
<table>
  <thead>
    <tr><th>편향 유형</th><th>설명</th><th>예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>집계 편향</strong></td><td>다양한 하위 집단을 하나의 모델로 일반화</td><td>당뇨 예측 모델이 인종별 차이를 무시</td></tr>
    <tr><td><strong>평가 편향</strong></td><td>평가 데이터셋의 편향으로 성능 측정 왜곡</td><td>벤치마크 데이터가 특정 언어/문화에 편중</td></tr>
    <tr><td><strong>알고리즘 편향</strong></td><td>최적화 목표 설정의 편향</td><td>클릭률 최적화가 자극적 콘텐츠 우선 노출</td></tr>
  </tbody>
</table>

<h4>배포 및 사용 편향</h4>
<div class="flow-diagram">
  <div class="flow-step">자동화 편향<br/><small>AI 판단을 무비판적 수용</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">확증 편향<br/><small>기존 믿음 강화하는 정보만 소비</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">피드백 루프<br/><small>편향된 결과가 새 데이터가 됨</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">차별 고착화<br/><small>사회적 불평등의 자동화</small></div>
</div>

<div class="info-box">
  <strong>핵심:</strong> 편향은 AI 개발의 어느 단계에서든 발생할 수 있습니다.
  데이터 수집부터 배포까지 모든 과정에서 편향의 가능성을 점검해야 합니다.
</div>
    `
  },
  {
    id: 803,
    chapter_id: 8,
    title: '편향의 실제 사례',
    sort_order: 3,
    content: `
<h3>AI 편향의 대표적 사례 연구</h3>

<h4>1. 아마존 채용 AI (2014-2017)</h4>
<div class="info-box">
  <strong>사건:</strong> 아마존은 이력서 심사 자동화를 위해 AI를 개발했으나, 10년간의 역사적
  남성 편중 데이터로 학습하여 여성 지원자를 체계적으로 불이익 처리했습니다.
  여성 관련 단어가 포함된 이력서의 점수를 낮추는 패턴이 발견되어 프로젝트가 중단되었습니다.
</div>

<h4>2. COMPAS 재범 예측 (2016)</h4>
<table>
  <thead>
    <tr><th>분석 결과</th><th>흑인 피고인</th><th>백인 피고인</th></tr>
  </thead>
  <tbody>
    <tr><td>위양성률 (재범하지 않았는데 고위험 분류)</td><td>44.9%</td><td>23.5%</td></tr>
    <tr><td>위음성률 (재범했는데 저위험 분류)</td><td>28.0%</td><td>47.7%</td></tr>
  </tbody>
</table>
<p>인종을 직접 사용하지 않았지만, 거주 지역 등 <strong>대리 변수</strong>를 통해 편향이 발생했습니다.</p>

<h4>3. 구글 이미지 인식 (2015)</h4>
<p>구글 포토가 흑인 사용자의 사진을 부적절하게 분류한 사건으로, 다양한 피부색의 학습 데이터 부족이 원인이었습니다.</p>

<h4>4. 헬스케어 알고리즘 (2019)</h4>
<div class="info-box warning">
  <strong>사례:</strong> 의료비 지출을 건강 상태의 대리 변수로 사용하여, 사회경제적 요인으로
  의료 서비스를 덜 이용하는 흑인 환자가 더 건강한 것으로 잘못 판단되었습니다.
  약 수백만 명의 흑인 환자에게 영향을 미쳤습니다.
</div>

<h4>5. 생성형 AI의 편향</h4>
<table>
  <thead>
    <tr><th>영역</th><th>편향 사례</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>이미지 생성</strong></td><td>CEO 프롬프트에 주로 백인 남성 이미지 생성</td></tr>
    <tr><td><strong>텍스트 생성</strong></td><td>특정 문화/종교에 대한 고정관념 반영</td></tr>
    <tr><td><strong>번역</strong></td><td>성별 중립 언어를 성별 고정관념에 따라 번역</td></tr>
    <tr><td><strong>추천 시스템</strong></td><td>필터 버블과 에코 챔버 강화</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>교훈:</strong> 이러한 사례들은 AI 편향이 기술적 실수가 아니라 사회적 불평등의 반영임을 보여줍니다.
</div>
    `
  },
  {
    id: 804,
    chapter_id: 8,
    title: '편향의 원인 분석',
    sort_order: 4,
    content: `
<h3>AI 편향은 어디에서 오는가?</h3>

<h4>주요 원인 분석</h4>
<table>
  <thead>
    <tr><th>원인 범주</th><th>구체적 원인</th><th>설명</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3"><strong>사회적 원인</strong></td><td>역사적 불평등</td><td>과거 차별의 흔적이 데이터에 기록</td></tr>
    <tr><td>권력 불균형</td><td>데이터 생성/수집 권한이 특정 집단에 집중</td></tr>
    <tr><td>문화적 고정관념</td><td>언어와 이미지에 내재된 편견</td></tr>
    <tr><td rowspan="3"><strong>기술적 원인</strong></td><td>불균형 데이터</td><td>소수 집단의 데이터 부족</td></tr>
    <tr><td>대리 변수</td><td>보호 속성과 상관관계가 높은 변수 사용</td></tr>
    <tr><td>최적화 목표 편향</td><td>정확도만 최적화하면 소수 집단 희생</td></tr>
    <tr><td rowspan="3"><strong>조직적 원인</strong></td><td>개발팀 동질성</td><td>다양성 부족한 팀의 맹점</td></tr>
    <tr><td>일정 압박</td><td>공정성 검증 단계 생략</td></tr>
    <tr><td>인센티브 구조</td><td>성능 지표만 중시, 공정성 지표 무시</td></tr>
  </tbody>
</table>

<h4>대리 변수 (Proxy Variable) 문제</h4>
<div class="info-box warning">
  <strong>대리 변수란?</strong> 보호 속성(인종, 성별 등)을 직접 사용하지 않더라도,
  이와 높은 상관관계를 가진 변수가 간접적으로 차별을 발생시키는 현상입니다.
  <ul>
    <li>우편번호 -- 인종/소득 수준의 대리 변수</li>
    <li>이름 -- 인종/문화적 배경의 대리 변수</li>
    <li>학교명 -- 사회경제적 지위의 대리 변수</li>
  </ul>
  보호 속성을 입력에서 제거하는 것만으로는 편향을 해결할 수 없습니다.
</div>
    `
  },
  {
    id: 805,
    chapter_id: 8,
    title: '공정성의 정의와 지표',
    sort_order: 5,
    content: `
<h3>AI에서의 공정성이란?</h3>
<p>공정성(Fairness)은 AI 시스템이 모든 개인과 집단에 대해 동등하고 편향 없는 결과를 산출하는 것을 의미합니다.</p>

<h4>주요 공정성 정의</h4>
<table>
  <thead>
    <tr><th>공정성 유형</th><th>정의</th><th>적용 예시</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>인구 통계적 동등성</strong></td><td>예측 결과의 비율이 모든 집단에서 동일</td><td>광고/마케팅</td></tr>
    <tr><td><strong>균등 기회</strong></td><td>양성 클래스의 참양성률이 모든 집단에서 동일</td><td>채용</td></tr>
    <tr><td><strong>균등 오류율</strong></td><td>참양성률과 위양성률 모두 동일</td><td>의료 진단</td></tr>
    <tr><td><strong>예측 동등성</strong></td><td>양성 예측의 정밀도가 모든 집단에서 동일</td><td>대출 심사</td></tr>
    <tr><td><strong>개인 공정성</strong></td><td>유사한 개인은 유사한 대우를 받아야 함</td><td>개인화 서비스</td></tr>
  </tbody>
</table>

<div class="info-box warning">
  <strong>공정성 불가능 정리:</strong> 대부분의 경우 위의 공정성 기준들을 동시에 만족시키는 것은
  수학적으로 불가능합니다(집단 간 기저율이 다를 때). 따라서 상황에 맞는 적절한 공정성 기준을 선택해야 합니다.
</div>

<h4>맥락별 공정성 기준 선택</h4>
<table>
  <thead>
    <tr><th>적용 분야</th><th>권장 기준</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>채용</td><td>균등 기회</td><td>적격 지원자가 동등한 기회를 받아야 함</td></tr>
    <tr><td>대출 심사</td><td>예측 동등성</td><td>승인 시 실제 상환 확률이 동등해야 함</td></tr>
    <tr><td>의료 진단</td><td>균등 오류율</td><td>오진율이 집단 간 동등해야 함</td></tr>
    <tr><td>광고/마케팅</td><td>인구 통계적 동등성</td><td>기회 접근이 평등해야 함</td></tr>
  </tbody>
</table>
    `
  },
  {
    id: 806,
    chapter_id: 8,
    title: '편향 탐지 방법',
    sort_order: 6,
    content: `
<h3>AI 편향을 찾아내는 방법</h3>

<h4>편향 탐지 프로세스</h4>
<div class="flow-diagram">
  <div class="flow-step">1. 보호 속성 정의<br/><small>성별, 인종, 연령 등</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">2. 데이터 분석<br/><small>분포, 상관관계 검사</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">3. 모델 분석<br/><small>집단별 성능 비교</small></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">4. 결과 분석<br/><small>공정성 지표 측정</small></div>
</div>

<h4>탐지 기법</h4>
<table>
  <thead>
    <tr><th>단계</th><th>탐지 기법</th><th>목적</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="3"><strong>데이터 단계</strong></td><td>분포 분석</td><td>집단별 데이터 수, 특성 분포 비교</td></tr>
    <tr><td>상관관계 분석</td><td>보호 속성과 다른 변수 간 관계 파악</td></tr>
    <tr><td>라벨 불균형 검사</td><td>집단별 긍정/부정 라벨 비율 비교</td></tr>
    <tr><td rowspan="3"><strong>모델 단계</strong></td><td>집단별 성능 비교</td><td>정확도, 재현율, 정밀도를 집단별로 측정</td></tr>
    <tr><td>특성 중요도 분석</td><td>보호 속성 관련 변수의 영향력 측정</td></tr>
    <tr><td>반사실적 분석</td><td>보호 속성만 바꿨을 때 결과 변화 검사</td></tr>
    <tr><td rowspan="2"><strong>결과 단계</strong></td><td>공정성 지표 계산</td><td>DP, EO, EqOdds 등 공정성 지표 측정</td></tr>
    <tr><td>교차 분석</td><td>여러 보호 속성의 교차 영향 분석</td></tr>
  </tbody>
</table>

<h4>주요 편향 탐지 도구</h4>
<table>
  <thead>
    <tr><th>도구</th><th>개발사</th><th>주요 기능</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Fairlearn</strong></td><td>Microsoft</td><td>공정성 평가 및 완화, Python 라이브러리</td></tr>
    <tr><td><strong>AI Fairness 360</strong></td><td>IBM</td><td>70+ 공정성 지표, 10+ 완화 알고리즘</td></tr>
    <tr><td><strong>What-If Tool</strong></td><td>Google</td><td>시각적 모델 분석 및 공정성 검사</td></tr>
    <tr><td><strong>Aequitas</strong></td><td>U of Chicago</td><td>편향 감사(audit) 도구</td></tr>
  </tbody>
</table>
    `
  },
  {
    id: 807,
    chapter_id: 8,
    title: '편향 완화 전략',
    sort_order: 7,
    content: `
<h3>AI 편향을 줄이는 방법</h3>

<h4>완화 전략 분류</h4>
<div class="compare-grid">
  <div>
    <h5>전처리 (Pre-processing)</h5>
    <p>학습 전 데이터 단계에서 편향 제거</p>
    <ul>
      <li><strong>리샘플링:</strong> 소수 집단 데이터 증강 또는 다수 집단 축소</li>
      <li><strong>리라벨링:</strong> 편향된 라벨 수정</li>
      <li><strong>특성 변환:</strong> 보호 속성과의 상관관계 제거</li>
      <li><strong>합성 데이터:</strong> 부족한 집단의 데이터 생성</li>
    </ul>
  </div>
  <div>
    <h5>학습 중 (In-processing)</h5>
    <p>모델 학습 과정에서 공정성 적용</p>
    <ul>
      <li><strong>공정성 제약:</strong> 손실 함수에 공정성 패널티 추가</li>
      <li><strong>적대적 학습:</strong> 보호 속성을 예측하지 못하도록 학습</li>
      <li><strong>다중 목표 최적화:</strong> 정확도와 공정성 동시 최적화</li>
    </ul>
  </div>
  <div>
    <h5>후처리 (Post-processing)</h5>
    <p>모델 출력 단계에서 결과 보정</p>
    <ul>
      <li><strong>임계값 조정:</strong> 집단별 분류 임계값 차별화</li>
      <li><strong>캘리브레이션:</strong> 예측 확률 보정</li>
      <li><strong>결과 재순위화:</strong> 공정성 기준에 맞게 순위 조정</li>
    </ul>
  </div>
</div>

<h4>조직적 완화 전략</h4>
<table>
  <thead>
    <tr><th>전략</th><th>실천 방안</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>다양성 확보</strong></td><td>개발팀의 인구통계적, 학문적 다양성 확보</td></tr>
    <tr><td><strong>이해관계자 참여</strong></td><td>영향 받는 커뮤니티의 개발 과정 참여</td></tr>
    <tr><td><strong>편향 감사</strong></td><td>독립적 제3자에 의한 정기적 공정성 감사</td></tr>
    <tr><td><strong>투명성 보고</strong></td><td>모델 카드, 데이터시트 등 문서화 공개</td></tr>
    <tr><td><strong>이의 제기 절차</strong></td><td>AI 결정에 대한 이의 신청 및 재검토 체계</td></tr>
  </tbody>
</table>

<div class="info-box">
  <strong>핵심:</strong> 편향 완화는 일회성 작업이 아니라 지속적 과정입니다.
  배포 후에도 지속적인 모니터링과 업데이트가 필요합니다.
</div>
    `
  },
  {
    id: 808,
    chapter_id: 8,
    title: '공정한 AI 개발 프레임워크',
    sort_order: 8,
    content: `
<h3>체계적인 공정한 AI 개발</h3>

<h4>공정한 AI 개발 5단계</h4>
<div class="flow-diagram">
  <div class="flow-step">1단계<br/><strong>영향 평가</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">2단계<br/><strong>공정성 정의</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">3단계<br/><strong>편향 탐지</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">4단계<br/><strong>편향 완화</strong></div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">5단계<br/><strong>모니터링</strong></div>
</div>

<h4>주요 글로벌 AI 공정성 가이드라인</h4>
<table>
  <thead>
    <tr><th>기관</th><th>가이드라인</th><th>핵심 원칙</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>EU</strong></td><td>AI Act (2024)</td><td>위험 기반 규제, 고위험 AI 투명성 의무</td></tr>
    <tr><td><strong>UNESCO</strong></td><td>AI 윤리 권고안 (2021)</td><td>인간 중심, 포용성, 다양성 존중</td></tr>
    <tr><td><strong>OECD</strong></td><td>AI 원칙 (2019)</td><td>투명성, 설명 가능성, 안전성</td></tr>
    <tr><td><strong>한국</strong></td><td>AI 윤리 기준 (2020)</td><td>인간 존엄, 공공성, 연대, 데이터 관리</td></tr>
  </tbody>
</table>

<h4>모델 카드 (Model Card)</h4>
<div class="info-box">
  <strong>모델 카드:</strong> AI 모델의 성능, 한계, 편향 정보를 체계적으로 문서화하는 표준 양식입니다.
  <ul>
    <li><strong>모델 개요:</strong> 목적, 개발자, 버전</li>
    <li><strong>의도된 사용:</strong> 적합한 / 부적합한 사용 사례</li>
    <li><strong>성능 지표:</strong> 전체 및 집단별 성능</li>
    <li><strong>공정성 분석:</strong> 편향 평가 결과</li>
    <li><strong>한계와 권고사항:</strong> 알려진 한계, 주의사항</li>
  </ul>
</div>
    `
  },
  {
    id: 809,
    chapter_id: 8,
    title: '참고문헌 및 추가 자료',
    sort_order: 9,
    content: `
<h3>참고문헌</h3>

<h4>학술 논문</h4>
<ol>
  <li>Barocas, S. & Selbst, A. D. (2016). Big Data's Disparate Impact. <em>California Law Review</em>, 104(3).</li>
  <li>Buolamwini, J. & Gebru, T. (2018). Gender Shades. <em>Proceedings of ML Research</em>, 81.</li>
  <li>Chouldechova, A. (2017). Fair Prediction with Disparate Impact. <em>Big Data</em>, 5(2).</li>
  <li>Obermeyer, Z. et al. (2019). Dissecting Racial Bias in Healthcare Algorithm. <em>Science</em>, 366.</li>
  <li>Mitchell, M. et al. (2019). Model Cards for Model Reporting. <em>FAT*</em>.</li>
</ol>

<h4>도서</h4>
<ol>
  <li>O'Neil, C. (2016). <em>Weapons of Math Destruction</em>. Crown.</li>
  <li>Eubanks, V. (2018). <em>Automating Inequality</em>. St. Martin's Press.</li>
  <li>Benjamin, R. (2019). <em>Race After Technology</em>. Polity Press.</li>
  <li>Crawford, K. (2021). <em>Atlas of AI</em>. Yale University Press.</li>
</ol>

<h4>온라인 자료</h4>
<ul>
  <li><strong>AI Fairness 360:</strong> IBM 오픈소스 공정성 도구</li>
  <li><strong>Fairlearn:</strong> Microsoft 공정성 평가 라이브러리</li>
  <li><strong>Google What-If Tool:</strong> 모델 분석 도구</li>
  <li><strong>Algorithmic Justice League:</strong> AI 편향 연구</li>
</ul>
    `
  },
  {
    id: 810,
    chapter_id: 8,
    title: '학습 확인 문제',
    sort_order: 10,
    content: `
<h3>Chapter 8 학습 확인</h3>
<p>AI 편향성과 공정성에 대한 이해를 점검해 봅시다.</p>

<div class="quiz-section">
  <h4>1. AI 편향과 일반적 오류의 차이점으로 가장 적절한 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q1" value="a" /> a) 편향은 크고, 오류는 작다</label>
    <label><input type="radio" name="q1" value="b" /> b) 편향은 체계적이고 방향성이 있으며, 오류는 무작위적이다</label>
    <label><input type="radio" name="q1" value="c" /> c) 편향은 데이터에서만, 오류는 알고리즘에서만 발생한다</label>
    <label><input type="radio" name="q1" value="d" /> d) 편향은 고칠 수 없고, 오류는 고칠 수 있다</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 편향은 체계적이고 특정 방향으로 일관되게 발생하는 반면, 일반적 오류는 무작위적으로 발생합니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>2. 대리 변수(Proxy Variable)에 대한 설명으로 올바른 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q2" value="a" /> a) 보호 속성을 직접 대체하는 변수</label>
    <label><input type="radio" name="q2" value="b" /> b) 보호 속성과 상관관계가 높아 간접적으로 차별을 발생시키는 변수</label>
    <label><input type="radio" name="q2" value="c" /> c) 편향을 제거하기 위해 사용하는 변수</label>
    <label><input type="radio" name="q2" value="d" /> d) 모델의 정확도를 높이기 위한 보조 변수</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 대리 변수는 우편번호, 이름 등 보호 속성과 상관관계가 높은 변수를 통해 간접적으로 차별이 발생하는 것입니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>3. 아마존 채용 AI 사례에서 발견된 편향의 주된 원인은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q3" value="a" /> a) 알고리즘이 의도적으로 여성을 차별하도록 설계됨</label>
    <label><input type="radio" name="q3" value="b" /> b) 10년간의 역사적 채용 데이터에서 남성 편중 패턴을 학습</label>
    <label><input type="radio" name="q3" value="c" /> c) 데이터 수집 과정에서 여성 이력서가 누락됨</label>
    <label><input type="radio" name="q3" value="d" /> d) 평가 벤치마크 데이터의 문제</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 기술 산업의 역사적 남성 편중이 데이터에 반영되어 역사적 편향이 발생했습니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>4. 공정성 불가능 정리가 의미하는 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q4" value="a" /> a) AI는 절대 공정할 수 없다</label>
    <label><input type="radio" name="q4" value="b" /> b) 모든 공정성 기준을 동시에 만족시키는 것은 수학적으로 불가능하다</label>
    <label><input type="radio" name="q4" value="c" /> c) 공정성과 정확도는 항상 반비례한다</label>
    <label><input type="radio" name="q4" value="d" /> d) 편향 완화 기법은 효과가 없다</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: b)</strong> 집단 간 기저율이 다를 때, 여러 공정성 기준을 동시에 만족시키는 것이 불가능합니다.</p>
  </details>
</div>

<div class="quiz-section">
  <h4>5. 편향 완화 전략 중 후처리 기법에 해당하는 것은?</h4>
  <div class="quiz-options">
    <label><input type="radio" name="q5" value="a" /> a) 소수 집단 데이터 증강</label>
    <label><input type="radio" name="q5" value="b" /> b) 손실 함수에 공정성 제약 추가</label>
    <label><input type="radio" name="q5" value="c" /> c) 집단별 분류 임계값 차별화</label>
    <label><input type="radio" name="q5" value="d" /> d) 보호 속성과의 상관관계 제거</label>
  </div>
  <details>
    <summary>정답 확인</summary>
    <p><strong>정답: c)</strong> 후처리 기법은 모델 출력 후 결과를 보정하는 방법으로, 집단별 임계값 조정이 대표적입니다.</p>
  </details>
</div>
    `
  },
];
