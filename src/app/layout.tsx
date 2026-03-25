import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { jsonLd } from '@/lib/seo'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mentoring.yeboahcosmetics.de'),
  title: {
    default: 'Yeboah Cosmetics Mentoring — Dein Weg zum eigenen Beauty Salon',
    template: '%s | Yeboah Cosmetics Mentoring',
  },
  description: 'Premium Mentoring-Programm von Heidi Yeboah. Baue dein eigenes Beauty Business auf mit der Erfahrung von Yeboah Cosmetics in Berlin.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mentoring.yeboahcosmetics.de',
    siteName: 'Yeboah Cosmetics Mentoring',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Yeboah Cosmetics Mentoring' }],
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
const FB_PIXEL = process.env.NEXT_PUBLIC_FB_PIXEL || ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        {FB_PIXEL && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL}');fbq('track','PageView');`}
          </Script>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
