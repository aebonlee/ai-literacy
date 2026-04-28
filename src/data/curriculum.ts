/**
 * AI Literacy — 정적 커리큘럼 데이터
 * Supabase 테이블 미생성 시 fallback으로 사용
 */

export { STATIC_SECTIONS } from './sections';

/* ── Parts (4개) ── */
export const STATIC_PARTS = [
  { id: 1, title: 'Part 1 · AI 기초 이해', description: 'AI의 개념, 머신러닝과 딥러닝의 원리, AI 기술의 역사와 발전 과정을 학습합니다.', sort_order: 1 },
  { id: 2, title: 'Part 2 · AI 활용과 실전', description: '생성형 AI 도구, 프롬프트 엔지니어링, 다양한 AI 활용 실습을 학습합니다.', sort_order: 2 },
  { id: 3, title: 'Part 3 · AI 윤리와 안전', description: 'AI 윤리, 편향성과 공정성, AI 시스템의 안전과 신뢰성을 학습합니다.', sort_order: 3 },
  { id: 4, title: 'Part 4 · AI와 미래', description: '데이터 리터러시, 직장과 일상의 AI, AI가 만드는 미래 사회를 학습합니다.', sort_order: 4 },
];

/* ── Chapters (12개) ── */
export const STATIC_CHAPTERS = [
  { id: 1, part_id: 1, chapter_number: 1, title: 'AI란 무엇인가?', description: '인공지능의 정의, 유형, 주요 개념과 응용 분야를 탐구합니다.', icon: 'ai', color: '#3B82F6' },
  { id: 2, part_id: 1, chapter_number: 2, title: '머신러닝과 딥러닝', description: '머신러닝의 원리, 지도/비지도/강화학습, 딥러닝과 신경망을 학습합니다.', icon: 'brain', color: '#0D9488' },
  { id: 3, part_id: 1, chapter_number: 3, title: 'AI의 역사와 발전', description: 'AI의 탄생부터 현재까지의 발전 과정과 주요 이정표를 학습합니다.', icon: 'history', color: '#7C3AED' },
  { id: 4, part_id: 2, chapter_number: 4, title: '생성형 AI 도구', description: 'ChatGPT, Claude, Gemini 등 생성형 AI의 특징과 활용법을 학습합니다.', icon: 'robot', color: '#DC2626' },
  { id: 5, part_id: 2, chapter_number: 5, title: '프롬프트 엔지니어링 기초', description: '효과적인 프롬프트 작성법과 AI와의 소통 전략을 학습합니다.', icon: 'prompt', color: '#EA580C' },
  { id: 6, part_id: 2, chapter_number: 6, title: 'AI 활용 실습', description: '텍스트, 이미지, 코드 생성 등 AI 도구 실전 활용을 학습합니다.', icon: 'practice', color: '#2563EB' },
  { id: 7, part_id: 3, chapter_number: 7, title: 'AI 윤리와 책임', description: 'AI 윤리 원칙, 책임 있는 AI 개발과 사용의 원칙을 학습합니다.', icon: 'ethics', color: '#059669' },
  { id: 8, part_id: 3, chapter_number: 8, title: 'AI 편향성과 공정성', description: 'AI 시스템의 편향 유형, 원인, 탐지 및 완화 방법을 학습합니다.', icon: 'fairness', color: '#7C3AED' },
  { id: 9, part_id: 3, chapter_number: 9, title: 'AI 안전과 신뢰성', description: 'AI 안전 위험, 설명 가능한 AI, 신뢰할 수 있는 AI 시스템을 학습합니다.', icon: 'security', color: '#0891B2' },
  { id: 10, part_id: 4, chapter_number: 10, title: '데이터 리터러시', description: '데이터 이해, 수집, 분석, 시각화, 데이터 기반 의사결정을 학습합니다.', icon: 'data', color: '#CA8A04' },
  { id: 11, part_id: 4, chapter_number: 11, title: '직장과 일상의 AI', description: 'AI가 직업 세계와 일상생활에 미치는 영향과 활용 사례를 학습합니다.', icon: 'work', color: '#1E3A8A' },
  { id: 12, part_id: 4, chapter_number: 12, title: 'AI의 미래와 사회적 영향', description: 'AGI, AI 규제, AI가 만드는 미래 사회와 대응 전략을 학습합니다.', icon: 'future', color: '#DC2626' },
];
