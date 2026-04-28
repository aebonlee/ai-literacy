export const CH04_SECTIONS = [
  {
    id: 401,
    chapter_id: 4,
    title: '생성형 AI란?',
    content: `
<h3>생성형 AI(Generative AI)의 개념</h3>
<p>
  <strong>생성형 AI(Generative AI)</strong>는 텍스트, 이미지, 음성, 코드, 영상 등
  새로운 콘텐츠를 자동으로 생성할 수 있는 인공지능 기술입니다.
  기존의 AI가 주로 데이터를 분석하고 분류하는 <em>판별적(Discriminative)</em> 모델이었다면,
  생성형 AI는 학습한 패턴을 바탕으로 완전히 새로운 콘텐츠를 <em>창작</em>합니다.
</p>

<div class="compare-grid">
  <div class="compare-item">
    <h4>판별적 모델 (Discriminative)</h4>
    <ul>
      <li>데이터를 분류하거나 예측하는 데 집중</li>
      <li>입력 데이터가 어떤 범주에 속하는지 판별</li>
      <li>예: 스팸 필터, 이미지 분류, 감정 분석</li>
      <li>"이 이메일은 스팸인가, 정상인가?"</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>생성적 모델 (Generative)</h4>
    <ul>
      <li>새로운 데이터(콘텐츠)를 생성하는 데 집중</li>
      <li>학습한 데이터의 분포를 이해하고 유사한 새 데이터 생성</li>
      <li>예: ChatGPT, DALL-E, Midjourney</li>
      <li>"이 주제에 대한 보고서를 작성해줘"</li>
    </ul>
  </div>
</div>

<h4>생성형 AI의 핵심 기술</h4>
<table>
  <thead>
    <tr>
      <th>기술</th>
      <th>원리</th>
      <th>대표 모델</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>트랜스포머 (Transformer)</strong></td>
      <td>어텐션 메커니즘으로 문맥을 이해하고 텍스트 생성</td>
      <td>GPT, BERT, Claude</td>
    </tr>
    <tr>
      <td><strong>GAN (생성적 적대 신경망)</strong></td>
      <td>생성자와 판별자가 경쟁하며 학습</td>
      <td>StyleGAN, CycleGAN</td>
    </tr>
    <tr>
      <td><strong>확산 모델 (Diffusion Model)</strong></td>
      <td>노이즈를 점진적으로 제거하여 이미지 생성</td>
      <td>Stable Diffusion, DALL-E 3</td>
    </tr>
    <tr>
      <td><strong>VAE (변분 오토인코더)</strong></td>
      <td>데이터를 잠재 공간으로 압축 후 새 데이터 생성</td>
      <td>초기 이미지 생성 모델</td>
    </tr>
  </tbody>
</table>

<h4>생성형 AI가 만들 수 있는 콘텐츠</h4>
<div class="flow-diagram">
  <div class="flow-step">텍스트 (기사, 보고서, 코드)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">이미지 (일러스트, 디자인)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">음성/음악</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">영상/3D 모델</div>
</div>

<ul>
  <li><strong>텍스트</strong>: 기사, 보고서, 소설, 시, 이메일, 코드</li>
  <li><strong>이미지</strong>: 일러스트레이션, 사진풍 이미지, 디자인, 로고</li>
  <li><strong>음성</strong>: 음성 합성(TTS), 음성 변환, 음악 생성</li>
  <li><strong>영상</strong>: 비디오 생성, 애니메이션, 딥페이크</li>
  <li><strong>코드</strong>: 프로그래밍 코드 자동 생성 및 디버깅</li>
  <li><strong>3D</strong>: 3D 모델, 공간 디자인, 가상 환경</li>
</ul>

<div class="info-box">
  <strong>생성형 AI의 의의:</strong> 생성형 AI는 인간의 창작 영역에 AI가 본격적으로 진입한
  첫 번째 사례입니다. 이는 AI를 단순한 분석 도구에서 <strong>창작 파트너</strong>로 전환시켰으며,
  모든 분야에서 생산성과 창의성을 혁신적으로 향상시킬 잠재력을 가지고 있습니다.
</div>
    `,
    sort_order: 1
  },
  {
    id: 402,
    chapter_id: 4,
    title: 'ChatGPT',
    content: `
<h3>ChatGPT: OpenAI의 대화형 AI</h3>
<p>
  <strong>ChatGPT</strong>는 OpenAI가 2022년 11월에 출시한 대화형 AI 서비스로,
  GPT(Generative Pre-trained Transformer) 시리즈를 기반으로 합니다.
  출시 5일 만에 100만 사용자를 돌파하고, 2개월 만에 1억 사용자를 확보하며
  AI 역사의 새로운 이정표를 세웠습니다.
</p>

<h4>GPT 모델의 발전</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>출시</th>
      <th>파라미터</th>
      <th>주요 개선</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GPT-1</strong></td>
      <td>2018.06</td>
      <td>1.17억</td>
      <td>트랜스포머 디코더 기반 사전학습 모델의 시작</td>
    </tr>
    <tr>
      <td><strong>GPT-2</strong></td>
      <td>2019.02</td>
      <td>15억</td>
      <td>유창한 텍스트 생성, 악용 우려로 공개 제한</td>
    </tr>
    <tr>
      <td><strong>GPT-3</strong></td>
      <td>2020.06</td>
      <td>1,750억</td>
      <td>Few-shot Learning, API 상업화</td>
    </tr>
    <tr>
      <td><strong>GPT-3.5 (ChatGPT)</strong></td>
      <td>2022.11</td>
      <td>GPT-3 기반</td>
      <td>RLHF 적용, 대화 최적화, 역사적 대중화</td>
    </tr>
    <tr>
      <td><strong>GPT-4</strong></td>
      <td>2023.03</td>
      <td>비공개</td>
      <td>멀티모달(이미지 이해), 추론 능력 대폭 향상</td>
    </tr>
    <tr>
      <td><strong>GPT-4o</strong></td>
      <td>2024.05</td>
      <td>비공개</td>
      <td>음성, 이미지, 텍스트 통합 멀티모달, 실시간 음성 대화</td>
    </tr>
  </tbody>
</table>

<h4>ChatGPT의 핵심 특징</h4>
<ul>
  <li><strong>자연스러운 대화</strong>: 인간과 유사한 자연스러운 대화가 가능</li>
  <li><strong>다양한 작업 수행</strong>: 글쓰기, 번역, 코딩, 분석, 요약, 질의응답 등</li>
  <li><strong>맥락 유지</strong>: 대화의 흐름을 기억하고 이전 내용을 참조</li>
  <li><strong>다국어 지원</strong>: 한국어를 포함한 수십 개 언어 지원</li>
  <li><strong>플러그인/GPTs</strong>: 웹 검색, 코드 실행, 이미지 생성 등 확장 기능</li>
</ul>

<h4>RLHF (인간 피드백 기반 강화학습)</h4>
<div class="flow-diagram">
  <div class="flow-step">대규모 텍스트로 사전학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">인간 피드백 데이터 수집</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">보상 모델 학습</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">강화학습으로 미세조정</div>
</div>

<p>
  ChatGPT의 성공 비결은 <strong>RLHF(Reinforcement Learning from Human Feedback)</strong>입니다.
  기본 GPT 모델이 텍스트를 생성하는 능력은 뛰어나지만, 인간이 원하는 방식으로 대화하도록
  미세조정하기 위해 인간 평가자의 선호도 데이터를 활용한 강화학습을 적용했습니다.
</p>

<div class="info-box warning">
  <strong>주의사항:</strong> ChatGPT는 환각(Hallucination) 현상을 보일 수 있으며,
  학습 데이터의 시점 이후 정보에는 부정확할 수 있습니다.
  중요한 사실은 반드시 별도의 신뢰할 수 있는 출처로 교차 검증해야 합니다.
  또한 입력한 내용이 학습에 활용될 수 있으므로, 민감한 개인정보나
  기업 기밀 정보의 입력은 주의가 필요합니다.
</div>
    `,
    sort_order: 2
  },
  {
    id: 403,
    chapter_id: 4,
    title: 'Claude',
    content: `
<h3>Claude: Anthropic의 안전한 AI</h3>
<p>
  <strong>Claude</strong>는 AI 안전 연구 기업 <strong>Anthropic</strong>이 개발한 대규모 언어모델입니다.
  OpenAI 출신 연구자들이 설립한 Anthropic은 "AI 안전"을 최우선 가치로 두고,
  <strong>Constitutional AI(헌법적 AI)</strong>라는 독자적인 학습 방법론을 적용하여
  보다 안전하고 도움이 되며 정직한 AI를 만들고자 합니다.
</p>

<h4>Constitutional AI (헌법적 AI)</h4>
<p>
  Claude의 핵심 차별점인 <strong>Constitutional AI</strong>는 AI가 따라야 할 원칙(헌법)을 정의하고,
  AI 스스로 자신의 출력이 이 원칙에 부합하는지 자가 평가하고 수정하도록 학습시키는 방법입니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">원칙(헌법) 정의</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI 응답 생성</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">원칙 기반 자가 평가</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">응답 수정 및 개선</div>
</div>

<ul>
  <li><strong>도움이 되는(Helpful)</strong>: 사용자의 요청에 유용하고 정확한 응답 제공</li>
  <li><strong>무해한(Harmless)</strong>: 해로운 콘텐츠나 편향된 응답 최소화</li>
  <li><strong>정직한(Honest)</strong>: 불확실한 것은 불확실하다고 인정, 환각 최소화</li>
</ul>

<h4>Claude의 주요 강점</h4>
<table>
  <thead>
    <tr>
      <th>강점</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>긴 문맥 처리</strong></td>
      <td>최대 200K 토큰의 문맥 창으로 긴 문서 전체를 한 번에 분석 가능</td>
    </tr>
    <tr>
      <td><strong>안전성</strong></td>
      <td>Constitutional AI를 통한 체계적 안전 장치, 유해 콘텐츠 생성 억제</td>
    </tr>
    <tr>
      <td><strong>분석 능력</strong></td>
      <td>복잡한 문서 분석, 논리적 추론, 코드 작성에서 뛰어난 성능</td>
    </tr>
    <tr>
      <td><strong>정직한 응답</strong></td>
      <td>모르는 것은 모른다고 인정하며, 과도한 확신을 지양</td>
    </tr>
    <tr>
      <td><strong>한국어 성능</strong></td>
      <td>한국어 이해와 생성에서 높은 품질의 응답 제공</td>
    </tr>
  </tbody>
</table>

<h4>Claude 모델 라인업</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>Claude Opus</h4>
    <ul>
      <li>최고 성능 모델</li>
      <li>복잡한 분석과 추론 작업에 최적</li>
      <li>깊이 있는 연구, 전략적 사고에 활용</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>Claude Sonnet</h4>
    <ul>
      <li>성능과 속도의 균형</li>
      <li>일상적 작업에 적합</li>
      <li>가장 널리 사용되는 모델</li>
    </ul>
  </div>
</div>

<h4>Claude 활용 사례</h4>
<ul>
  <li><strong>학술 연구</strong>: 논문 분석, 문헌 리뷰, 연구 방법론 검토</li>
  <li><strong>문서 분석</strong>: 긴 보고서, 계약서, 법률 문서의 요약과 핵심 추출</li>
  <li><strong>코딩</strong>: 프로그래밍 코드 작성, 디버깅, 코드 리뷰</li>
  <li><strong>교육</strong>: 교육 자료 제작, 학생 질의응답, 과제 피드백</li>
</ul>

<div class="info-box">
  <strong>Anthropic의 AI 안전 철학:</strong> Anthropic은 AI의 발전과 안전이 함께 이루어져야 한다고 봅니다.
  강력한 AI일수록 더 높은 안전 기준이 필요하며, Constitutional AI는 이러한 철학을
  기술적으로 구현한 것입니다. 이는 AI 개발에서 "책임감 있는 혁신"의 모범 사례로 평가됩니다.
</div>
    `,
    sort_order: 3
  },
  {
    id: 404,
    chapter_id: 4,
    title: 'Gemini',
    content: `
<h3>Gemini: Google의 멀티모달 AI</h3>
<p>
  <strong>Gemini</strong>는 Google DeepMind가 개발한 멀티모달 AI 모델로,
  텍스트, 이미지, 오디오, 비디오, 코드 등 다양한 유형의 데이터를 동시에
  이해하고 생성할 수 있습니다. Google의 방대한 인프라와 데이터를 활용하여
  개발된 차세대 AI 모델입니다.
</p>

<h4>Gemini의 멀티모달 능력</h4>
<p>
  기존 LLM이 주로 텍스트 처리에 특화되었다면, Gemini는 처음부터
  <strong>멀티모달(Multimodal)</strong>로 설계되어 다양한 유형의 정보를 통합적으로 처리합니다.
</p>
<ul>
  <li><strong>텍스트 이해/생성</strong>: 자연어 대화, 글쓰기, 번역, 요약</li>
  <li><strong>이미지 이해</strong>: 사진 설명, 차트 분석, 문서 OCR, 시각적 질의응답</li>
  <li><strong>오디오 처리</strong>: 음성 인식, 다국어 번역, 음성 대화</li>
  <li><strong>비디오 분석</strong>: 영상 내용 이해, 장면 설명, 자막 생성</li>
  <li><strong>코드 생성</strong>: 프로그래밍 코드 작성, 디버깅, 코드 설명</li>
</ul>

<h4>Gemini 모델 라인업</h4>
<table>
  <thead>
    <tr>
      <th>모델</th>
      <th>특징</th>
      <th>대상 사용자</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Gemini Ultra</strong></td>
      <td>최고 성능, 복잡한 작업 처리</td>
      <td>전문 연구자, 기업</td>
    </tr>
    <tr>
      <td><strong>Gemini Pro</strong></td>
      <td>성능-효율 균형, 다양한 작업</td>
      <td>일반 사용자, 개발자</td>
    </tr>
    <tr>
      <td><strong>Gemini Nano</strong></td>
      <td>온디바이스 AI, 스마트폰 최적화</td>
      <td>모바일 앱, 엣지 디바이스</td>
    </tr>
  </tbody>
</table>

<h4>Google 생태계와의 통합</h4>
<p>
  Gemini의 큰 장점 중 하나는 Google의 광범위한 서비스 생태계와의 깊은 통합입니다.
</p>
<ul>
  <li><strong>Google 검색</strong>: 검색 결과에 AI 요약 제공 (AI Overviews)</li>
  <li><strong>Google Workspace</strong>: Gmail, Docs, Sheets, Slides에 AI 어시스턴트 통합</li>
  <li><strong>Android</strong>: 스마트폰에서 Gemini Nano를 통한 온디바이스 AI 기능</li>
  <li><strong>Google Cloud</strong>: 기업용 AI 서비스 (Vertex AI)</li>
  <li><strong>YouTube</strong>: 영상 요약, 자막 생성, 콘텐츠 분석</li>
</ul>

<div class="compare-grid">
  <div class="compare-item">
    <h4>Gemini의 강점</h4>
    <ul>
      <li>네이티브 멀티모달 처리 능력</li>
      <li>Google 서비스 생태계 통합</li>
      <li>온디바이스 AI (Gemini Nano)</li>
      <li>최신 웹 정보 접근 (Google 검색 연동)</li>
      <li>초대형 문맥 창 (1M+ 토큰)</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>고려사항</h4>
    <ul>
      <li>Google 계정 기반 서비스</li>
      <li>데이터 프라이버시 관련 우려</li>
      <li>일부 기능은 유료 (Gemini Advanced)</li>
      <li>지역별 서비스 가용성 차이</li>
      <li>초기 출시 시 정확도 논란</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>멀티모달 AI의 의미:</strong> Gemini와 같은 멀티모달 AI는 인간이 세계를 인식하는 방식
  (시각, 청각, 언어의 통합)에 한 발 더 가까워진 AI입니다. 텍스트만으로는 전달하기 어려운
  복잡한 정보를 이미지, 도표, 영상과 함께 처리할 수 있어 활용 범위가 크게 확장됩니다.
</div>
    `,
    sort_order: 4
  },
  {
    id: 405,
    chapter_id: 4,
    title: '이미지 생성 AI',
    content: `
<h3>이미지 생성 AI 도구</h3>
<p>
  이미지 생성 AI는 텍스트 프롬프트(지시문)를 입력하면 해당하는 이미지를 자동으로 생성하는
  기술입니다. 2021년 DALL-E의 등장 이후 급격히 발전하여, 디자인, 마케팅, 교육,
  엔터테인먼트 등 다양한 분야에서 혁신적인 변화를 이끌고 있습니다.
</p>

<h4>주요 이미지 생성 AI 비교</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>개발사</th>
      <th>핵심 기술</th>
      <th>강점</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>DALL-E 3</strong></td>
      <td>OpenAI</td>
      <td>확산 모델 + 트랜스포머</td>
      <td>ChatGPT 통합, 정확한 텍스트 반영, 사용 편의성</td>
    </tr>
    <tr>
      <td><strong>Midjourney</strong></td>
      <td>Midjourney Inc.</td>
      <td>독자적 확산 모델</td>
      <td>예술적 품질 최고, 독창적 스타일, 미적 감각</td>
    </tr>
    <tr>
      <td><strong>Stable Diffusion</strong></td>
      <td>Stability AI</td>
      <td>Latent Diffusion Model</td>
      <td>오픈소스, 로컬 실행 가능, 커스터마이징 자유도</td>
    </tr>
    <tr>
      <td><strong>Adobe Firefly</strong></td>
      <td>Adobe</td>
      <td>확산 모델 (라이선스 데이터)</td>
      <td>Photoshop 통합, 상업적 저작권 안전</td>
    </tr>
  </tbody>
</table>

<h4>이미지 생성 AI의 작동 원리: 확산 모델</h4>
<div class="flow-diagram">
  <div class="flow-step">텍스트 프롬프트 입력</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">텍스트 인코딩 (CLIP)</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">노이즈에서 점진적 제거</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">고품질 이미지 생성</div>
</div>

<p>
  <strong>확산 모델(Diffusion Model)</strong>은 현재 이미지 생성 AI의 핵심 기술입니다.
  학습 과정에서 이미지에 점진적으로 노이즈를 추가하는 과정을 학습한 후,
  생성 시에는 순수 노이즈에서 시작하여 점진적으로 노이즈를 제거하며
  의미 있는 이미지를 만들어냅니다.
</p>

<h4>효과적인 프롬프트 작성법</h4>
<ul>
  <li><strong>주제 명시</strong>: 생성하고자 하는 주요 대상을 명확히 기술</li>
  <li><strong>스타일 지정</strong>: 사실적, 수채화, 유화, 만화, 미니멀 등 원하는 스타일 명시</li>
  <li><strong>분위기/조명</strong>: 따뜻한, 차가운, 드라마틱, 자연광 등 분위기 요소 추가</li>
  <li><strong>구도/시점</strong>: 클로즈업, 전경, 조감도, 아이소메트릭 등 구도 지정</li>
  <li><strong>부정 프롬프트</strong>: 원하지 않는 요소를 명시하여 제외 (Negative prompt)</li>
</ul>

<h4>활용 분야</h4>
<ul>
  <li><strong>마케팅</strong>: 광고 이미지, 소셜 미디어 콘텐츠, 제품 목업</li>
  <li><strong>교육</strong>: 교재 삽화, 역사적 장면 재현, 과학 개념 시각화</li>
  <li><strong>게임/엔터테인먼트</strong>: 컨셉 아트, 캐릭터 디자인, 배경 이미지</li>
  <li><strong>프로토타이핑</strong>: UI/UX 디자인 초안, 건축 시각화, 패션 디자인</li>
</ul>

<div class="info-box warning">
  <strong>윤리적 고려사항:</strong> 이미지 생성 AI는 딥페이크 제작, 저작권 침해,
  허위 정보 유포 등에 악용될 수 있습니다. AI로 생성된 이미지의 출처를 명확히 하고,
  타인의 초상권과 저작권을 존중하며, 허위 이미지 제작을 자제해야 합니다.
  많은 플랫폼에서 AI 생성 콘텐츠에 대한 표시(워터마크)를 권장하고 있습니다.
</div>
    `,
    sort_order: 5
  },
  {
    id: 406,
    chapter_id: 4,
    title: '음성 및 영상 AI',
    content: `
<h3>음성 및 영상 생성 AI</h3>
<p>
  텍스트와 이미지를 넘어, AI는 음성 합성, 음악 생성, 비디오 제작 등
  멀티미디어 콘텐츠 전반에서 혁신을 이루고 있습니다.
  이러한 도구들은 콘텐츠 제작의 장벽을 크게 낮추고 있습니다.
</p>

<h4>음성 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>유형</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>ElevenLabs</strong></td>
      <td>TTS (텍스트 -> 음성)</td>
      <td>자연스러운 음성, 다국어 지원, 음성 복제 기능, 감정 조절</td>
    </tr>
    <tr>
      <td><strong>OpenAI Whisper</strong></td>
      <td>STT (음성 -> 텍스트)</td>
      <td>오픈소스, 다국어 인식, 높은 정확도, 실시간 처리</td>
    </tr>
    <tr>
      <td><strong>Suno AI</strong></td>
      <td>음악 생성</td>
      <td>텍스트로 작사, 작곡, 보컬까지 자동 생성</td>
    </tr>
    <tr>
      <td><strong>Udio</strong></td>
      <td>음악 생성</td>
      <td>다양한 장르의 고품질 음악 생성, 세밀한 컨트롤</td>
    </tr>
    <tr>
      <td><strong>CLOVA Voice</strong></td>
      <td>TTS (한국어 특화)</td>
      <td>네이버 개발, 한국어에 자연스러운 음성, 다양한 화자 선택</td>
    </tr>
  </tbody>
</table>

<h4>영상 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>기능</th>
      <th>특징</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sora (OpenAI)</strong></td>
      <td>텍스트 -> 비디오 생성</td>
      <td>최대 1분 길이의 사실적인 영상 생성, 물리법칙 이해</td>
    </tr>
    <tr>
      <td><strong>Runway Gen-3</strong></td>
      <td>텍스트/이미지 -> 비디오</td>
      <td>전문 영상 편집 도구 통합, 모션 브러시, 인페인팅</td>
    </tr>
    <tr>
      <td><strong>Pika</strong></td>
      <td>텍스트/이미지 -> 비디오</td>
      <td>간편한 인터페이스, 빠른 생성 속도, 웹 기반</td>
    </tr>
    <tr>
      <td><strong>HeyGen</strong></td>
      <td>AI 아바타 영상 생성</td>
      <td>디지털 아바타, 다국어 립싱크, 프레젠테이션 영상</td>
    </tr>
    <tr>
      <td><strong>D-ID</strong></td>
      <td>AI 화자 영상 생성</td>
      <td>사진 한 장으로 말하는 영상 생성, 교육 콘텐츠 제작</td>
    </tr>
  </tbody>
</table>

<h4>음성/영상 AI의 활용 분야</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>교육</h4>
    <ul>
      <li>AI 강사 영상 자동 생성</li>
      <li>다국어 교육 콘텐츠 제작</li>
      <li>오디오북 제작</li>
      <li>역사 인물 재현 영상</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>비즈니스</h4>
    <ul>
      <li>마케팅 영상 자동 제작</li>
      <li>다국어 프레젠테이션</li>
      <li>제품 소개 영상</li>
      <li>고객 서비스 AI 아바타</li>
    </ul>
  </div>
</div>

<div class="info-box warning">
  <strong>딥페이크(Deepfake) 위험성:</strong> 음성 복제와 영상 생성 기술은 딥페이크 제작에
  악용될 수 있습니다. 실제로 존재하지 않는 사건을 조작하거나, 타인의 외모와 음성을
  도용하여 허위 정보를 유포하는 사례가 증가하고 있습니다.
  AI 생성 콘텐츠를 접할 때는 항상 출처를 확인하고, 비판적 사고를 유지해야 합니다.
  한국에서는 딥페이크를 이용한 성범죄가 심각한 사회 문제로 대두되고 있습니다.
</div>
    `,
    sort_order: 6
  },
  {
    id: 407,
    chapter_id: 4,
    title: '코딩 AI 도구',
    content: `
<h3>코딩 AI 도구: 프로그래밍의 혁신</h3>
<p>
  코딩 AI 도구는 자연어로 작성된 요구사항을 프로그래밍 코드로 변환하거나,
  기존 코드를 분석, 수정, 최적화하는 AI 도구입니다.
  프로그래머의 생산성을 획기적으로 향상시키고, 비전공자도 코딩에 접근할 수 있게 합니다.
</p>

<h4>주요 코딩 AI 도구</h4>
<table>
  <thead>
    <tr>
      <th>도구</th>
      <th>개발사</th>
      <th>특징</th>
      <th>지원 환경</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>GitHub Copilot</strong></td>
      <td>GitHub/Microsoft</td>
      <td>코드 자동 완성, 함수 생성, 주석 기반 코드 작성</td>
      <td>VS Code, JetBrains, Neovim</td>
    </tr>
    <tr>
      <td><strong>Cursor</strong></td>
      <td>Cursor Inc.</td>
      <td>AI 네이티브 코드 에디터, 대화형 코딩, 코드베이스 이해</td>
      <td>독립 에디터 (VS Code 기반)</td>
    </tr>
    <tr>
      <td><strong>Claude Code</strong></td>
      <td>Anthropic</td>
      <td>터미널 기반 AI 코딩 에이전트, 프로젝트 전체 이해 및 수정</td>
      <td>CLI 도구 (터미널)</td>
    </tr>
    <tr>
      <td><strong>Amazon CodeWhisperer</strong></td>
      <td>Amazon</td>
      <td>AWS 통합, 보안 스캔 기능, 기업용 라이선스 관리</td>
      <td>VS Code, JetBrains, AWS IDE</td>
    </tr>
    <tr>
      <td><strong>Replit AI</strong></td>
      <td>Replit</td>
      <td>브라우저 기반 개발 환경 + AI 코딩 지원, 즉시 배포</td>
      <td>웹 브라우저</td>
    </tr>
  </tbody>
</table>

<h4>코딩 AI의 주요 기능</h4>
<ul>
  <li><strong>코드 자동 완성</strong>: 타이핑 중 다음 코드를 예측하여 자동으로 제안</li>
  <li><strong>자연어 -> 코드</strong>: "사용자 목록을 이름순으로 정렬하는 함수"와 같은 요구사항을 코드로 변환</li>
  <li><strong>코드 설명</strong>: 복잡한 코드를 자연어로 설명하여 이해를 도움</li>
  <li><strong>디버깅</strong>: 코드의 오류를 발견하고 수정 방법을 제안</li>
  <li><strong>코드 리팩토링</strong>: 기존 코드를 더 효율적이고 가독성 높은 코드로 개선</li>
  <li><strong>테스트 코드 생성</strong>: 기존 코드에 대한 단위 테스트를 자동으로 작성</li>
</ul>

<h4>바이브 코딩 (Vibe Coding)</h4>
<p>
  <strong>바이브 코딩</strong>은 2025년 안드레이 카파시(Andrej Karpathy)가 제안한 용어로,
  AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 새로운 개발 방식입니다.
  코딩 경험이 없는 사람도 아이디어를 소프트웨어로 구현할 수 있는 가능성을 열었습니다.
</p>

<div class="flow-diagram">
  <div class="flow-step">아이디어 구상</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">자연어로 요구사항 설명</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">AI가 코드 생성</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-step">결과 확인 및 피드백</div>
</div>

<div class="compare-grid">
  <div class="compare-item">
    <h4>코딩 AI의 장점</h4>
    <ul>
      <li>개발 속도 50~80% 향상</li>
      <li>반복적인 보일러플레이트 코드 자동화</li>
      <li>새로운 프로그래밍 언어/프레임워크 학습 지원</li>
      <li>비전공자의 코딩 접근성 향상</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>주의사항</h4>
    <ul>
      <li>생성된 코드의 정확성 검증 필수</li>
      <li>보안 취약점 포함 가능성</li>
      <li>저작권 및 라이선스 이슈</li>
      <li>AI에 과도하게 의존하면 학습 기회 감소</li>
    </ul>
  </div>
</div>

<div class="info-box">
  <strong>미래 전망:</strong> 코딩 AI는 프로그래밍의 민주화를 가속화하고 있습니다.
  향후에는 자연어만으로 복잡한 소프트웨어를 구축하는 것이 더욱 보편화될 전망이며,
  프로그래머의 역할은 코드 작성에서 AI가 생성한 코드를 검증하고
  시스템을 설계하는 방향으로 변화할 것입니다.
</div>
    `,
    sort_order: 7
  },
  {
    id: 408,
    chapter_id: 4,
    title: '생성형 AI 비교 및 선택 가이드',
    content: `
<h3>주요 AI 도구 비교와 선택 가이드</h3>
<p>
  다양한 AI 도구가 존재하는 만큼, 자신의 필요에 맞는 도구를 선택하는 것이 중요합니다.
  각 도구의 강점과 특성을 비교하여 목적에 맞는 최적의 AI 도구를 선택해 보겠습니다.
</p>

<h4>주요 대화형 AI 비교</h4>
<table>
  <thead>
    <tr>
      <th>기준</th>
      <th>ChatGPT</th>
      <th>Claude</th>
      <th>Gemini</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>개발사</strong></td>
      <td>OpenAI</td>
      <td>Anthropic</td>
      <td>Google</td>
    </tr>
    <tr>
      <td><strong>핵심 강점</strong></td>
      <td>범용성, 플러그인 생태계</td>
      <td>안전성, 긴 문맥 처리, 분석력</td>
      <td>멀티모달, Google 생태계 통합</td>
    </tr>
    <tr>
      <td><strong>문맥 길이</strong></td>
      <td>128K 토큰</td>
      <td>200K 토큰</td>
      <td>1M+ 토큰</td>
    </tr>
    <tr>
      <td><strong>무료 사용</strong></td>
      <td>GPT-4o mini 무료</td>
      <td>Claude Sonnet 무료</td>
      <td>Gemini Pro 무료</td>
    </tr>
    <tr>
      <td><strong>유료 가격</strong></td>
      <td>월 $20 (Plus)</td>
      <td>월 $20 (Pro)</td>
      <td>월 $20 (Advanced)</td>
    </tr>
    <tr>
      <td><strong>이미지 생성</strong></td>
      <td>DALL-E 3 통합</td>
      <td>미지원</td>
      <td>Imagen 통합</td>
    </tr>
    <tr>
      <td><strong>웹 검색</strong></td>
      <td>실시간 검색 가능</td>
      <td>웹 검색 지원</td>
      <td>Google 검색 통합</td>
    </tr>
    <tr>
      <td><strong>코딩 능력</strong></td>
      <td>우수</td>
      <td>최상위 수준</td>
      <td>우수</td>
    </tr>
    <tr>
      <td><strong>한국어 성능</strong></td>
      <td>우수</td>
      <td>우수</td>
      <td>우수</td>
    </tr>
  </tbody>
</table>

<h4>목적별 추천 AI 도구</h4>
<div class="compare-grid">
  <div class="compare-item">
    <h4>글쓰기/콘텐츠 제작</h4>
    <ul>
      <li><strong>1순위:</strong> ChatGPT (다양한 스타일)</li>
      <li><strong>2순위:</strong> Claude (논리적 구성력)</li>
      <li>이미지 포함 시: ChatGPT + DALL-E 3</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>학술 연구/분석</h4>
    <ul>
      <li><strong>1순위:</strong> Claude (긴 문서 분석)</li>
      <li><strong>2순위:</strong> ChatGPT (범용 연구)</li>
      <li>최신 정보: Gemini (웹 검색 통합)</li>
    </ul>
  </div>
</div>
<div class="compare-grid">
  <div class="compare-item">
    <h4>코딩/프로그래밍</h4>
    <ul>
      <li><strong>실시간 코딩:</strong> GitHub Copilot</li>
      <li><strong>대화형 코딩:</strong> Claude, Cursor</li>
      <li><strong>프로젝트 전체:</strong> Claude Code</li>
    </ul>
  </div>
  <div class="compare-item">
    <h4>이미지/디자인</h4>
    <ul>
      <li><strong>예술적 품질:</strong> Midjourney</li>
      <li><strong>편리한 사용:</strong> DALL-E 3 (ChatGPT)</li>
      <li><strong>커스터마이징:</strong> Stable Diffusion</li>
    </ul>
  </div>
</div>

<h4>AI 도구 선택 시 고려사항</h4>
<ol>
  <li><strong>사용 목적</strong>: 무엇을 하고 싶은지 명확히 정의</li>
  <li><strong>비용</strong>: 무료/유료 플랜, 사용량 제한 확인</li>
  <li><strong>데이터 프라이버시</strong>: 입력 데이터의 보안과 활용 정책</li>
  <li><strong>정확도 요구 수준</strong>: 실수가 허용되는 작업인지 판단</li>
  <li><strong>한국어 지원</strong>: 한국어 입출력 품질 확인</li>
  <li><strong>생태계 호환성</strong>: 기존 사용 도구/서비스와의 연동</li>
</ol>

<div class="info-box">
  <strong>실용적 조언:</strong> 하나의 AI 도구에 의존하기보다, 목적에 따라 여러 도구를
  적절히 조합하여 활용하는 것이 효과적입니다. 각 도구의 강점을 파악하고,
  중요한 결과물에 대해서는 반드시 인간의 검증 과정을 거치는 습관을 기르세요.
</div>
    `,
    sort_order: 8
  },
  {
    id: 409,
    chapter_id: 4,
    title: '참고문헌 및 추가 자료',
    content: `
<h3>참고문헌 및 추가 자료</h3>
<p>Chapter 4에서 다룬 생성형 AI 도구들에 대해 더 깊이 알아보기 위한 자료입니다.</p>

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
      <td><strong>생성 AI의 시대</strong></td>
      <td>에단 몰릭 (Ethan Mollick)</td>
      <td>생성형 AI가 업무, 교육, 창작에 미치는 영향과 활용 전략</td>
    </tr>
    <tr>
      <td><strong>AI 2041</strong></td>
      <td>리카이푸 & 천치우판</td>
      <td>AI가 변화시킬 미래 사회를 소설과 에세이로 그린 작품</td>
    </tr>
    <tr>
      <td><strong>프롬프트 엔지니어링</strong></td>
      <td>다양한 저자</td>
      <td>AI에게 효과적으로 질문하고 결과를 얻는 방법론</td>
    </tr>
    <tr>
      <td><strong>바이브 코딩</strong></td>
      <td>다양한 저자</td>
      <td>AI를 활용한 새로운 소프트웨어 개발 방법론</td>
    </tr>
  </tbody>
</table>

<h4>공식 웹사이트 및 문서</h4>
<ul>
  <li><strong>OpenAI 공식 문서</strong> (platform.openai.com): ChatGPT, GPT API, DALL-E 가이드</li>
  <li><strong>Anthropic 공식 문서</strong> (docs.anthropic.com): Claude API 및 사용 가이드</li>
  <li><strong>Google AI 공식 문서</strong> (ai.google.dev): Gemini API 및 활용 가이드</li>
  <li><strong>Stability AI</strong> (stability.ai): Stable Diffusion 모델 및 API 문서</li>
  <li><strong>GitHub Copilot 문서</strong> (docs.github.com/copilot): Copilot 설정 및 활용 가이드</li>
</ul>

<h4>추천 온라인 강좌</h4>
<ul>
  <li><strong>Coursera -- Generative AI for Everyone</strong> (앤드류 응): 생성형 AI의 기초와 활용을 비전공자 대상으로 설명</li>
  <li><strong>DeepLearning.AI -- ChatGPT Prompt Engineering for Developers</strong>: 개발자를 위한 프롬프트 엔지니어링</li>
  <li><strong>Google Cloud Skills Boost -- Introduction to Generative AI</strong>: Google의 생성형 AI 기초 강좌</li>
  <li><strong>Anthropic Prompt Engineering Guide</strong>: Claude를 위한 공식 프롬프트 작성 가이드</li>
</ul>

<h4>AI 도구 비교/리뷰 사이트</h4>
<ul>
  <li><strong>LMSYS Chatbot Arena</strong> (chat.lmsys.org): 다양한 LLM을 블라인드 비교 평가하는 플랫폼</li>
  <li><strong>There's An AI For That</strong> (theresanaiforthat.com): 목적별 AI 도구 검색 디렉토리</li>
  <li><strong>AI Tool Report</strong>: 최신 AI 도구 뉴스 및 리뷰</li>
  <li><strong>Hugging Face</strong> (huggingface.co): 오픈소스 AI 모델 허브 및 커뮤니티</li>
</ul>

<div class="info-box">
  <strong>학습 팁:</strong> 생성형 AI 도구는 빠르게 발전하고 있어, 특정 도구의 기능이나 성능은
  수개월 만에 크게 변할 수 있습니다. 최신 정보를 지속적으로 업데이트하고,
  실제로 여러 도구를 직접 사용해 보면서 자신에게 맞는 워크플로우를 구축하는 것이 중요합니다.
  AI 도구를 "잘 사용하는 능력"이 곧 AI 시대의 핵심 경쟁력이 됩니다.
</div>
    `,
    sort_order: 9
  },
  {
    id: 410,
    chapter_id: 4,
    title: '학습 확인 문제',
    content: `
<h3>Chapter 4 학습 확인 문제</h3>
<p>이번 장에서 학습한 내용을 확인하는 문제입니다. 각 문제를 읽고 정답을 생각해 보세요.</p>

<h4>문제 1</h4>
<div class="info-box">
  <p><strong>생성형 AI(Generative AI)와 판별적 AI(Discriminative AI)의 차이점으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>생성형 AI는 데이터를 분류하고, 판별적 AI는 새 콘텐츠를 생성한다</li>
    <li>생성형 AI는 새로운 콘텐츠를 생성하고, 판별적 AI는 데이터를 분류/예측한다</li>
    <li>둘 사이에는 차이가 없다</li>
    <li>판별적 AI가 생성형 AI보다 항상 더 뛰어나다</li>
  </ol>
  <p><em>정답: b) 생성형 AI는 새로운 콘텐츠(텍스트, 이미지 등)를 생성하고, 판별적 AI는 데이터를 분류하거나 예측합니다.</em></p>
</div>

<h4>문제 2</h4>
<div class="info-box">
  <p><strong>ChatGPT의 성공을 가능하게 한 핵심 학습 기법은?</strong></p>
  <ol type="a">
    <li>전문가 시스템의 규칙 기반 학습</li>
    <li>비지도학습만을 사용한 사전학습</li>
    <li>RLHF(인간 피드백 기반 강화학습)</li>
    <li>CNN(합성곱 신경망)</li>
  </ol>
  <p><em>정답: c) RLHF(Reinforcement Learning from Human Feedback). ChatGPT는 기본 GPT 모델에 인간 평가자의 선호도 데이터를 활용한 강화학습을 적용하여, 인간이 원하는 방식의 대화를 학습했습니다.</em></p>
</div>

<h4>문제 3</h4>
<div class="info-box">
  <p><strong>Claude AI의 핵심 학습 방법론인 "Constitutional AI"의 핵심 원칙이 아닌 것은?</strong></p>
  <ol type="a">
    <li>도움이 되는 (Helpful)</li>
    <li>무해한 (Harmless)</li>
    <li>정직한 (Honest)</li>
    <li>최고 속도 (Fastest)</li>
  </ol>
  <p><em>정답: d) 최고 속도. Constitutional AI의 세 가지 핵심 원칙은 도움이 되고(Helpful), 무해하며(Harmless), 정직한(Honest) AI를 만드는 것입니다.</em></p>
</div>

<h4>문제 4</h4>
<div class="info-box">
  <p><strong>Gemini의 가장 핵심적인 차별화 특징은 무엇인가요?</strong></p>
  <ol type="a">
    <li>가장 저렴한 가격</li>
    <li>네이티브 멀티모달 처리 능력과 Google 생태계 통합</li>
    <li>오픈소스 모델</li>
    <li>가장 오래된 AI 모델</li>
  </ol>
  <p><em>정답: b) 네이티브 멀티모달 처리 능력과 Google 생태계 통합. Gemini는 텍스트, 이미지, 오디오, 비디오를 통합적으로 처리하며 Google 서비스와 깊이 연동됩니다.</em></p>
</div>

<h4>문제 5</h4>
<div class="info-box">
  <p><strong>현재 이미지 생성 AI의 핵심 기술인 "확산 모델(Diffusion Model)"의 작동 원리로 올바른 것은?</strong></p>
  <ol type="a">
    <li>이미지를 픽셀 단위로 순차적으로 생성한다</li>
    <li>생성자와 판별자가 경쟁하며 이미지를 개선한다</li>
    <li>노이즈를 점진적으로 제거하며 이미지를 생성한다</li>
    <li>기존 이미지를 잘라 붙여서 새 이미지를 만든다</li>
  </ol>
  <p><em>정답: c) 확산 모델은 순수 노이즈에서 시작하여 학습된 패턴에 따라 점진적으로 노이즈를 제거하며 의미 있는 이미지를 생성합니다. DALL-E 3, Stable Diffusion, Midjourney 등이 이 기술을 활용합니다.</em></p>
</div>

<h4>문제 6</h4>
<div class="info-box">
  <p><strong>"바이브 코딩(Vibe Coding)"에 대한 설명으로 올바른 것은?</strong></p>
  <ol type="a">
    <li>음악을 들으며 코딩하는 방법론이다</li>
    <li>AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 방식이다</li>
    <li>특정 프로그래밍 언어의 이름이다</li>
    <li>코딩 없이 마우스만으로 소프트웨어를 만드는 도구이다</li>
  </ol>
  <p><em>정답: b) 바이브 코딩은 AI에게 자연어로 원하는 기능을 설명하면 AI가 전체 프로그램을 생성하는 새로운 개발 방식으로, 코딩 경험이 없는 사람도 소프트웨어를 만들 수 있는 가능성을 열었습니다.</em></p>
</div>

<h4>문제 7</h4>
<div class="info-box">
  <p><strong>AI 도구를 선택할 때 고려해야 할 사항을 4가지 이상 서술하고, 학술 연구 목적으로 가장 적합한 AI 도구와 그 이유를 설명하시오.</strong></p>
  <p><em>모범 답안: AI 도구 선택 시 고려사항으로는 (1) 사용 목적과 기능 적합성, (2) 비용(무료/유료 플랜), (3) 데이터 프라이버시 정책, (4) 정확도와 신뢰성 수준, (5) 한국어 지원 품질, (6) 기존 도구와의 생태계 호환성 등이 있습니다. 학술 연구 목적으로는 Claude가 적합합니다. 이유는 (1) 200K 토큰의 긴 문맥 창으로 논문 전체를 한 번에 분석할 수 있고, (2) Constitutional AI를 통한 정직한 응답으로 모르는 것은 모른다고 인정하며, (3) 논리적 분석과 추론 능력이 뛰어나 학술 텍스트의 비판적 분석에 적합하기 때문입니다. 다만, 최신 정보가 필요한 경우 Gemini의 Google 검색 통합 기능을 보완적으로 활용할 수 있습니다.</em></p>
</div>
    `,
    sort_order: 10
  }
];
