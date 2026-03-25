import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)', color: '#1A1A1A', background: '#FFFBF9', textAlign: 'center', padding: '24px' }}>
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: '72px', fontWeight: 300, color: '#C4956A', marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '18px', fontWeight: 300, color: '#6B6B6B', marginBottom: '32px' }}>Diese Seite wurde nicht gefunden.</p>
      <Link href="/" style={{ padding: '14px 32px', background: '#C4956A', color: '#fff', borderRadius: '100px', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
        Zurück zur Startseite
      </Link>
    </div>
  )
}
