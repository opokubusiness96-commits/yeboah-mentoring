export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || ''
export const GADS_CONV = process.env.NEXT_PUBLIC_GADS_CONV || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, { page_path: url })
  }
}

export const gadsConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_CONV}`,
    })
  }
}
