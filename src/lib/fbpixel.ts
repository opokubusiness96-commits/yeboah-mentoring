export const FB_PIXEL = process.env.NEXT_PUBLIC_FB_PIXEL || ''

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

export const lead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead')
  }
}

export const contact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact')
  }
}
