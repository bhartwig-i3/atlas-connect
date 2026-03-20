import { Button } from '@atlas/ui';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '24px',
        padding: '48px',
        background: 'var(--atlas-background-primary)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-anybody), Anybody, sans-serif',
          fontSize: 'var(--atlas-font-size-2xl)',
          fontWeight: 500,
          color: 'var(--atlas-text-primary)',
        }}
      >
        Atlas Connect
      </h1>
      <p
        style={{
          color: 'var(--atlas-text-secondary)',
          fontSize: 'var(--atlas-font-size-lg)',
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}
      >
        Design system wired up and ready.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" buttonType="filled">Get Started</Button>
        <Button variant="secondary" buttonType="filled">Learn More</Button>
        <Button variant="primary" buttonType="outlined">Dismiss</Button>
      </div>
    </main>
  );
}
