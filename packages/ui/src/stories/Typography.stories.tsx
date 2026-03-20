import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Typography',
  parameters: { options: { showPanel: false } },
};
export default meta;

type TypeSpec = { label: string; style: React.CSSProperties; sample: string };

const headingSpecs: TypeSpec[] = [
  {
    label: 'Display — Anybody 40px / 500',
    style: { fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: 'var(--atlas-font-size-4xl)', fontWeight: 500 },
    sample: 'Atlas Connect',
  },
  {
    label: 'Heading 2XL — Anybody 30px / 500',
    style: { fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: 'var(--atlas-font-size-2xl)', fontWeight: 500 },
    sample: 'Dashboard Overview',
  },
  {
    label: 'Heading XL — Anybody 20px / 500',
    style: { fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: 'var(--atlas-font-size-xl)', fontWeight: 500 },
    sample: 'Section Title',
  },
];

const bodySpecs: TypeSpec[] = [
  {
    label: 'Body LG — Manrope 16px / 400',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-lg)', fontWeight: 400 },
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    label: 'Body MD — Manrope 14px / 400',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-md)', fontWeight: 400 },
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    label: 'Body SM — Manrope 12px / 400',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-sm)', fontWeight: 400 },
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
];

const labelSpecs: TypeSpec[] = [
  {
    label: 'Label LG — Manrope 14px / 700 / Uppercase',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-md)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.12px' },
    sample: 'Get Started',
  },
  {
    label: 'Label SM — Manrope 12px / 700 / Uppercase',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.96px' },
    sample: 'Field Label',
  },
  {
    label: 'Numbers LG — Manrope 40px / 400',
    style: { fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-4xl)', fontWeight: 400 },
    sample: '2,847',
  },
];

const TypeRow = ({ spec }: { spec: TypeSpec }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', padding: '20px 0', borderBottom: '1px solid var(--atlas-border-primary)' }}>
    <div style={{ width: '260px', flexShrink: 0 }}>
      <div style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: '11px', fontWeight: 600, color: 'var(--atlas-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.88px' }}>
        {spec.label}
      </div>
    </div>
    <div style={{ ...spec.style, color: 'var(--atlas-text-primary)', flex: 1 }}>
      {spec.sample}
    </div>
  </div>
);

export const TypeScale = {
  render: () => (
    <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', minHeight: '100vh' }}>
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: '20px', fontWeight: 500, color: 'var(--atlas-text-brand)', marginBottom: '4px' }}>
          Anybody — Display & Headings
        </h2>
        <p style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: '12px', color: 'var(--atlas-text-tertiary)', marginBottom: '16px' }}>
          Used for page titles, section headings, and display text.
        </p>
        {headingSpecs.map((s) => <TypeRow key={s.label} spec={s} />)}
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: '20px', fontWeight: 500, color: 'var(--atlas-text-brand)', marginBottom: '4px' }}>
          Manrope — Body
        </h2>
        <p style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: '12px', color: 'var(--atlas-text-tertiary)', marginBottom: '16px' }}>
          Used for body copy, descriptions, and general UI text.
        </p>
        {bodySpecs.map((s) => <TypeRow key={s.label} spec={s} />)}
      </section>

      <section>
        <h2 style={{ fontFamily: 'var(--font-anybody), Anybody, sans-serif', fontSize: '20px', fontWeight: 500, color: 'var(--atlas-text-brand)', marginBottom: '4px' }}>
          Manrope — Labels & Numbers
        </h2>
        <p style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: '12px', color: 'var(--atlas-text-tertiary)', marginBottom: '16px' }}>
          Used for buttons, field labels, tags, and data display.
        </p>
        {labelSpecs.map((s) => <TypeRow key={s.label} spec={s} />)}
      </section>
    </div>
  ),
  name: 'Type Scale',
};
