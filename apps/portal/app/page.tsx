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
      }}
    >
      <h1
        style={{
          fontSize: 'var(--atlas-font-size-4xl)',
          color: 'var(--atlas-text-primary)',
          fontWeight: 700,
        }}
      >
        Atlas Connect
      </h1>
      <p style={{ color: 'var(--atlas-text-secondary)', fontSize: 'var(--atlas-font-size-lg)' }}>
        Design system wired up and ready.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="ghost">Dismiss</Button>
      </div>
    </main>
  );
}
