import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <>
      <SEOHead title="About | AI Literacy" description="AI 시대 필수 교양 — AI 기초, 활용, 윤리, 미래를 다루는 체계적 학습 플랫폼" />
      <section className="page-header">
        <div className="container">
          <h1>About</h1>
          <p>AI 리터러시</p>
        </div>
      </section>

      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 제작의도 */}
          <div style={{
            background: 'var(--bg-secondary, #f8f9fa)',
            borderLeft: '4px solid var(--primary-blue, #0046C8)',
            padding: '28px 32px',
            borderRadius: '0 12px 12px 0',
            marginBottom: '48px',
            lineHeight: 1.8,
            fontSize: '15px',
            color: 'var(--text-primary, #1a1a1a)',
          }}>
            <strong style={{ fontSize: '17px', display: 'block', marginBottom: '12px' }}>
              이 사이트는 AI 시대 필수 교양을 체계적으로 학습하고자 하는 분들을 위해 제작되었습니다.
            </strong>
            <p style={{ margin: 0 }}>
              드림아이티비즈(DreamIT Biz)는 기업과 개인의 실제 니즈를 반영한 맞춤형 교육 플랫폼을 제작합니다.
              AI 기초 개념, 활용 방법, 윤리적 고려사항, 미래 전망까지 AI 리터러시의 핵심을 다루는 종합 학습 플랫폼입니다.
            </p>
          </div>

          {/* 주요 특징 */}
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary, #1a1a1a)' }}>
            주요 특징
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {[
              { icon: 'fa-robot', title: 'AI 기초', desc: '인공지능의 핵심 개념과 원리를 쉽게 이해할 수 있도록 설명합니다.' },
              { icon: 'fa-lightbulb', title: 'AI 활용', desc: '업무와 일상에서 AI를 효과적으로 활용하는 방법을 학습합니다.' },
              { icon: 'fa-scale-balanced', title: 'AI 윤리', desc: 'AI 시대의 윤리적 이슈와 책임 있는 AI 사용법을 다룹니다.' },
              { icon: 'fa-rocket', title: 'AI 미래', desc: 'AI 기술의 발전 방향과 미래 사회 변화를 전망합니다.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                background: 'var(--bg-white, #fff)',
                border: '1px solid var(--line, #e5e7eb)',
                borderRadius: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--bg-secondary, #f0f4ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--primary-blue, #0046C8)', fontSize: '18px' }} />
                </div>
                <div>
                  <strong style={{ fontSize: '15px', color: 'var(--text-primary, #1a1a1a)' }}>{item.title}</strong>
                  <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 개발사 정보 */}
          <div style={{
            padding: '32px',
            background: 'var(--bg-secondary, #f8f9fa)',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue, #0046C8)', marginBottom: '8px', letterSpacing: '0.05em' }}>DEVELOPED BY</p>
            <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary, #1a1a1a)' }}>드림아이티비즈 (DreamIT Biz)</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary, #6b7280)', lineHeight: 1.6, marginBottom: '16px' }}>
              100개 교육 사이트를 운영하는 에듀테크 전문 기업
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-secondary, #6b7280)' }}>
              <span><i className="fa-solid fa-envelope" style={{ marginRight: '6px' }} />aebon@dreamitbiz.com</span>
              <span><i className="fa-solid fa-globe" style={{ marginRight: '6px' }} />www.dreamitbiz.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
