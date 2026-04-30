/**
 * AI Literacy 사이트 설정 파일
 * AI 리터러시 교육 플랫폼
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  // ── 사이트 식별자 ──
  id: 'ai-literacy',

  // 사이트 기본 정보
  name: 'AI Literacy',
  nameKo: 'AI 리터러시',
  description: 'AI 시대 필수 교양 — AI 기초, 활용, 윤리, 미래를 다루는 체계적 학습 플랫폼',
  url: 'https://ai-literacy.dreamitbiz.com',

  // ── Supabase 테이블 접두어 ──
  dbPrefix: 'ail_',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'AI', className: 'brand-dream' },
      { text: ' Literacy', className: 'brand-biz' }
    ]
  },

  // 테마 컬러 (다크 네이비)
  themeColor: '#0D1B3E',

  // ── 회사 정보 ──
  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  // ── 기능 토글 ──
  features: {
    shop: false,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // ── 색상 테마 옵션 ──
  colors: [
    { name: 'blue', color: '#0D1B3E' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#0D9488' },
    { name: 'purple', color: '#7C3AED' },
    { name: 'orange', color: '#C87200' },
  ],

  // 네비게이션 메뉴
  menuItems: [
    {
      labelKey: 'site.nav.curriculum',
      path: '/curriculum',
      activePath: '/curriculum',
    },
    {
      labelKey: 'site.nav.part1',
      path: '/chapters/part1',
      activePath: '/chapters/part1',
      dropdown: [
        { path: '/chapters/1', labelKey: 'site.nav.ch1' },
        { path: '/chapters/2', labelKey: 'site.nav.ch2' },
        { path: '/chapters/3', labelKey: 'site.nav.ch3' },
      ]
    },
    {
      labelKey: 'site.nav.part2',
      path: '/chapters/part2',
      activePath: '/chapters/part2',
      dropdown: [
        { path: '/chapters/4', labelKey: 'site.nav.ch4' },
        { path: '/chapters/5', labelKey: 'site.nav.ch5' },
        { path: '/chapters/6', labelKey: 'site.nav.ch6' },
      ]
    },
    {
      labelKey: 'site.nav.part3',
      path: '/chapters/part3',
      activePath: '/chapters/part3',
      dropdown: [
        { path: '/chapters/7', labelKey: 'site.nav.ch7' },
        { path: '/chapters/8', labelKey: 'site.nav.ch8' },
        { path: '/chapters/9', labelKey: 'site.nav.ch9' },
      ]
    },
    {
      labelKey: 'site.nav.part4',
      path: '/chapters/part4',
      activePath: '/chapters/part4',
      dropdown: [
        { path: '/chapters/10', labelKey: 'site.nav.ch10' },
        { path: '/chapters/11', labelKey: 'site.nav.ch11' },
        { path: '/chapters/12', labelKey: 'site.nav.ch12' },
      ]
    },
    {
      labelKey: 'site.nav.tools',
      path: '/tools',
      activePath: '/tools',
      dropdown: [
        { path: '/tools/chatgpt', labelKey: 'site.nav.toolsChatGPT' },
        { path: '/tools/claude', labelKey: 'site.nav.toolsClaude' },
        { path: '/tools/gemini', labelKey: 'site.nav.toolsGemini' },
      ]
    },
    {
      labelKey: 'site.nav.promptLab',
      path: '/prompt',
      activePath: '/prompt',
      dropdown: [
        { path: '/prompt/hub', labelKey: 'site.nav.promptHub' },
        { path: '/prompt/workshop', labelKey: 'site.nav.promptWorkshop' },
        { path: '/prompt/test', labelKey: 'site.nav.promptTest' },
      ]
    },
    {
      labelKey: 'site.nav.community',
      path: '/community/notice',
      activePath: '/community',
      dropdown: [
        { path: '/community/notice', labelKey: 'site.nav.notice' },
        { path: '/community/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/curriculum', labelKey: 'site.nav.curriculum' },
    { path: '/chapters', labelKey: 'site.nav.chapters' },
    { path: '/tools', labelKey: 'site.nav.tools' },
    { path: '/prompt', labelKey: 'site.nav.promptLab' },
    { path: '/community/notice', labelKey: 'site.nav.notice' },
    { path: '/community/qna', labelKey: 'site.nav.qna' },
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AI·SW 개론', url: 'https://aisw.dreamitbiz.com' },
    { name: 'KoreaTech 컴퓨팅 사고', url: 'https://koreatech.dreamitbiz.com' },
    { name: 'Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
  ]
};

export default site;
