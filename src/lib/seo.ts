const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mentoring.yeboahcosmetics.de'

export const defaultSEO = {
  title: 'Yeboah Cosmetics Mentoring — Dein Weg zum eigenen Beauty Salon',
  description: 'Premium Mentoring-Programm von Heidi Yeboah. Baue dein eigenes Beauty Business auf mit der Erfahrung von Yeboah Cosmetics in Berlin.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Yeboah Cosmetics Mentoring',
    images: [{
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Yeboah Cosmetics Mentoring',
    }],
  },
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Yeboah Cosmetics',
  url: SITE_URL,
  telephone: '+49 30 12345678',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Fritschestraße 43',
    addressLocality: 'Berlin',
    postalCode: '10672',
    addressCountry: 'DE',
  },
  image: `${SITE_URL}/og-image.jpg`,
  description: 'Premium Mentoring-Programm von Heidi Yeboah — Baue dein eigenes Beauty Business auf.',
  priceRange: '€€',
  openingHours: 'Mo-Sa 10:00-19:00',
}
