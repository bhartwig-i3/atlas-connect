import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: { options: { showPanel: false } },
};
export default meta;

type Swatch = { name: string; var: string };

const swatchGroups: Array<{ label: string; swatches: Swatch[] }> = [
  {
    label: 'Brand',
    swatches: [
      { name: 'brand-10', var: '--atlas-color-brand-10' },
      { name: 'brand-20', var: '--atlas-color-brand-20' },
      { name: 'brand-30', var: '--atlas-color-brand-30' },
      { name: 'brand-40', var: '--atlas-color-brand-40' },
      { name: 'brand-50', var: '--atlas-color-brand-50' },
      { name: 'brand-60', var: '--atlas-color-brand-60' },
      { name: 'brand-70', var: '--atlas-color-brand-70' },
      { name: 'brand-80', var: '--atlas-color-brand-80' },
      { name: 'brand-90', var: '--atlas-color-brand-90' },
    ],
  },
  {
    label: 'Neutral',
    swatches: [
      { name: 'neutral-10', var: '--atlas-color-neutral-10' },
      { name: 'neutral-20', var: '--atlas-color-neutral-20' },
      { name: 'neutral-30', var: '--atlas-color-neutral-30' },
      { name: 'neutral-40', var: '--atlas-color-neutral-40' },
      { name: 'neutral-50', var: '--atlas-color-neutral-50' },
      { name: 'neutral-60', var: '--atlas-color-neutral-60' },
      { name: 'neutral-70', var: '--atlas-color-neutral-70' },
      { name: 'neutral-80', var: '--atlas-color-neutral-80' },
      { name: 'neutral-90', var: '--atlas-color-neutral-90' },
    ],
  },
  {
    label: 'Semantic — Surface',
    swatches: [
      { name: 'surface-primary', var: '--atlas-surface-primary' },
      { name: 'surface-secondary', var: '--atlas-surface-secondary' },
      { name: 'surface-brand', var: '--atlas-surface-brand' },
      { name: 'surface-error', var: '--atlas-surface-error' },
      { name: 'surface-success', var: '--atlas-surface-success' },
      { name: 'surface-warning', var: '--atlas-surface-warning' },
    ],
  },
  {
    label: 'Semantic — Text',
    swatches: [
      { name: 'text-primary', var: '--atlas-text-primary' },
      { name: 'text-secondary', var: '--atlas-text-secondary' },
      { name: 'text-tertiary', var: '--atlas-text-tertiary' },
      { name: 'text-disabled', var: '--atlas-text-disabled' },
      { name: 'text-brand', var: '--atlas-text-brand' },
      { name: 'text-error', var: '--atlas-text-error' },
      { name: 'text-success', var: '--atlas-text-success' },
    ],
  },
  {
    label: 'Semantic — Border',
    swatches: [
      { name: 'border-primary', var: '--atlas-border-primary' },
      { name: 'border-brand', var: '--atlas-border-brand' },
      { name: 'border-error', var: '--atlas-border-error' },
      { name: 'border-success', var: '--atlas-border-success' },
      { name: 'border-disabled', var: '--atlas-border-disabled' },
    ],
  },
];

const SwatchGrid = ({ swatches }: { swatches: Swatch[] }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
    {swatches.map((s) => (
      <div key={s.var} style={{ width: '100px' }}>
        <div
          style={{
            width: '100px',
            height: '56px',
            borderRadius: '8px',
            background: `var(${s.var})`,
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '6px',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--atlas-text-secondary)',
            wordBreak: 'break-all',
          }}
        >
          {s.name}
        </div>
      </div>
    ))}
  </div>
);

export const Palette = {
  render: () => (
    <div
      style={{
        background: 'var(--atlas-background-primary)',
        padding: '32px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      {swatchGroups.map((group) => (
        <section key={group.label}>
          <h2
            style={{
              fontFamily: 'var(--font-anybody), Anybody, sans-serif',
              fontSize: '20px',
              fontWeight: 500,
              color: 'var(--atlas-text-primary)',
              marginBottom: '16px',
            }}
          >
            {group.label}
          </h2>
          <SwatchGrid swatches={group.swatches} />
        </section>
      ))}
    </div>
  ),
  name: 'Color Palette',
};
