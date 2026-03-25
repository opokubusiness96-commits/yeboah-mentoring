'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Home, Layers, DollarSign, Bell, Heart, Users, MapPin, Clock, Check } from 'lucide-react'

function InstagramIcon({ size = 24, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { gadsConversion } from '@/lib/gtag'
import { lead as fbLead } from '@/lib/fbpixel'

export default function HomePage() {
  const navRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formSuccess, setFormSuccess] = useState(false)

  useEffect(() => {
    // Nav scroll
    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    let valid = true
    formRef.current.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'))

    const vorname = formRef.current.querySelector<HTMLInputElement>('[name="vorname"]')
    const nachname = formRef.current.querySelector<HTMLInputElement>('[name="nachname"]')
    const email = formRef.current.querySelector<HTMLInputElement>('[name="email"]')
    const status = formRef.current.querySelector<HTMLSelectElement>('[name="status"]')

    if (!vorname?.value.trim()) { vorname?.closest('.form-group')?.classList.add('has-error'); valid = false }
    if (!nachname?.value.trim()) { nachname?.closest('.form-group')?.classList.add('has-error'); valid = false }
    if (!email?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email?.closest('.form-group')?.classList.add('has-error'); valid = false }
    if (!status?.value) { status?.closest('.form-group')?.classList.add('has-error'); valid = false }

    if (valid) {
      gadsConversion()
      fbLead()
      setFormSuccess(true)
    }
  }

  const services = ['Laser', 'Facials', 'Wimpernverlängerung', 'Haarentfernung', 'Augenbrauen', 'Massagen', 'Rückenbehandlung', 'Gesichtsbehandlung']

  const mentoringCards = [
    { icon: Home, title: 'Business-Aufbau', desc: 'Von der Idee zum eigenen Salon: Standortwahl, Einrichtung, Rechtsform und alles, was du für den Start brauchst.' },
    { icon: Layers, title: 'Service-Angebot', desc: 'Welche Treatments du anbieten solltest und wie du ein profitables Portfolio aufbaust, das Kunden begeistert.' },
    { icon: DollarSign, title: 'Budgetplanung', desc: 'Realistische Finanzplanung, Startkapital, laufende Kosten und klarer Weg zum Break-even.' },
    { icon: Bell, title: 'Marketing & Kunden', desc: 'Social Media, lokales Marketing, Treatwell, Google My Business — alles für deine Kundengewinnung.' },
    { icon: Heart, title: 'Unternehmer-Mindset', desc: 'Selbstständig denken, Preise setzen, mit Rückschlägen umgehen — Verantwortung, weil du an echten Menschen arbeitest.' },
    { icon: Users, title: 'Persönliche Begleitung', desc: '1:1 Coaching und Support auf deinem individuellen Weg — bewusste Pflege ist wichtiger als jeder Trend.' },
  ]

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* Navigation */}
      <nav ref={navRef}>
        <div className="container">
          <a href="#" className="nav-logo">
            <Image src="/logo-text-dark.png" alt="YEBOAH cosmetics" width={200} height={56} className="nav-logo-img" priority />
          </a>
          <a href="#kontakt" className="nav-cta">
            <span>Erstgespräch sichern</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Mentoring Programm 2026
          </div>
          <h1>Dein eigner<br /><em>Beauty Salon!</em></h1>
          <p className="hero-sub">Heidi Yeboah begleitet dich Schritt für Schritt auf dem Weg zu deinem erfolgreichen Beauty Salon — mit der Erfahrung von Yeboah Cosmetics.</p>
          <div className="hero-cta-wrap">
            <a href="#kontakt" className="btn-primary">
              Jetzt Platz sichern!
              <ArrowRight size={18} />
            </a>
            <span className="hero-note">Unverbindlich &amp; kostenlos</span>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-visual-card">
                <Image src="/heidi.jpg" alt="Heidi Yeboah — Gründerin von Yeboah Cosmetics" width={600} height={750} className="about-photo" />
              </div>
              <div className="about-accent-card">
                <div className="number">8+</div>
                <div className="label">Jahre Erfahrung</div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label reveal">Über das Mentoring</div>
              <h2 className="section-title reveal reveal-delay-1">Dein Weg zum eigenen<br />Beauty Salon</h2>
              <p className="section-subtitle reveal reveal-delay-2">Heidi Yeboah hat mit Yeboah Cosmetics in Berlin-Charlottenburg ein erfolgreiches Beauty-Studio aufgebaut — mit Services von Facials über Wimpernverlängerungen bis zur dauerhaften Haarentfernung.</p>
              <p className="section-subtitle reveal reveal-delay-3">Jetzt gibt sie ihr Wissen weiter und unterstützt angehende Beauty-Unternehmerinnen dabei, ihren eigenen Salon zu starten und profitabel zu führen.</p>
              <div className="about-stats reveal reveal-delay-4">
                <div className="about-stat">
                  <div className="value">6+</div>
                  <div className="text">Service-Kategorien</div>
                </div>
                <div className="about-stat">
                  <div className="value">30+</div>
                  <div className="text">Treatments im Angebot</div>
                </div>
                <div className="about-stat">
                  <div className="value">1:1</div>
                  <div className="text">Persönliche Begleitung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <div className="services-strip" aria-hidden="true">
        <div className="services-marquee">
          {[...services, ...services].map((s, i) => (
            <span key={i}>
              <span>{s}</span>
              <span className="dot">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Mentoring */}
      <section className="mentoring" id="mentoring">
        <div className="container">
          <div className="mentoring-header">
            <div className="section-label reveal">Das Programm</div>
            <Image src="/logo-icon.jpeg" alt="Yeboah Cosmetics" width={72} height={72} className="mentoring-logo-icon reveal reveal-delay-1" />
            <h2 className="section-title reveal reveal-delay-1">Was dich im Mentoring erwartet</h2>
            <p className="section-subtitle reveal reveal-delay-2">Praxisnahes Wissen aus dem echten Beauty-Alltag — kein Theorie-Kurs, sondern echte Begleitung.</p>
          </div>
          <div className="mentoring-grid">
            {mentoringCards.map((card, i) => (
              <div key={card.title} className={`mentoring-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                <div className="mentoring-card-icon">
                  <card.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="proof" id="proof">
        <div className="container">
          <div className="proof-header">
            <div className="section-label reveal">Erfahrung &amp; Vertrauen</div>
            <h2 className="section-title reveal reveal-delay-1">Warum Yeboah Cosmetics?</h2>
            <p className="section-subtitle reveal reveal-delay-2">Ein etabliertes Beauty-Studio mit einer starken Community — dein Fundament für erfolgreiches Mentoring.</p>
          </div>
          <div className="proof-stats">
            {[
              { number: '3.200+', text: 'Instagram Follower' },
              { number: '470+', text: 'Beiträge & aktive Community' },
              { number: '6', text: 'Service-Kategorien' },
              { number: '1', text: 'Studio in Berlin-Charlottenburg' },
            ].map((stat, i) => (
              <div key={stat.text} className={`proof-stat reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                <div className="number">{stat.number}</div>
                <div className="text">{stat.text}</div>
              </div>
            ))}
          </div>
          <div className="proof-testimonial reveal">
            <div className="proof-testimonial-quote">&ldquo;</div>
            <p>Bewusste Pflege ist wichtiger als jeder Trend. Wir arbeiten an echten Menschen — das erfordert echtes Wissen und echte Verantwortung.</p>
            <div className="proof-testimonial-author">Heidi Yeboah &mdash; Gründerin, Yeboah Cosmetics</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="kontakt">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="section-label reveal">Jetzt starten</div>
              <h2 className="section-title reveal reveal-delay-1">Sichere dir dein kostenloses Erstgespräch</h2>
              <p className="section-subtitle reveal reveal-delay-2">Fülle das Formular aus und Heidi meldet sich persönlich bei dir — unverbindlich und vertraulich.</p>
              <div className="reveal reveal-delay-3">
                <div className="contact-detail">
                  <div className="contact-detail-icon"><MapPin size={18} strokeWidth={1.8} /></div>
                  <div className="contact-detail-text"><strong>Standort</strong>Fritschestraße 43, 10672 Berlin<br />Charlottenburg</div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><InstagramIcon size={18} strokeWidth={1.8} /></div>
                  <div className="contact-detail-text"><strong>Instagram</strong>@yeboah.cosmetics</div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><Clock size={18} strokeWidth={1.8} /></div>
                  <div className="contact-detail-text"><strong>Antwortzeit</strong>In der Regel innerhalb von 2 Stunden</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="contact-form-card">
                {!formSuccess ? (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Vorname <span className="required">*</span></label>
                        <input type="text" name="vorname" placeholder="Dein Vorname" required />
                        <div className="error-msg">Bitte gib deinen Vornamen ein.</div>
                      </div>
                      <div className="form-group">
                        <label>Nachname <span className="required">*</span></label>
                        <input type="text" name="nachname" placeholder="Dein Nachname" required />
                        <div className="error-msg">Bitte gib deinen Nachnamen ein.</div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>E-Mail <span className="required">*</span></label>
                        <input type="email" name="email" placeholder="deine@email.de" required />
                        <div className="error-msg">Bitte gib eine gültige E-Mail-Adresse ein.</div>
                      </div>
                      <div className="form-group">
                        <label>Telefonnummer</label>
                        <input type="tel" name="telefon" placeholder="+49 ..." />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Wo stehst du gerade? <span className="required">*</span></label>
                      <select name="status" required defaultValue="">
                        <option value="" disabled>Bitte wählen...</option>
                        <option value="kein-salon">Ich habe noch keinen Salon</option>
                        <option value="gruendung">Ich bin gerade in der Gründung</option>
                        <option value="salon">Ich habe bereits einen Salon</option>
                      </select>
                      <div className="error-msg">Bitte wähle eine Option aus.</div>
                    </div>
                    <div className="form-group">
                      <label>Nachricht / Fragen</label>
                      <textarea name="nachricht" placeholder="Erzähl mir ein bisschen über dich und deine Pläne..." />
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="btn-submit">Erstgespräch anfragen</button>
                    </div>
                    <p className="form-privacy">Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.</p>
                  </form>
                ) : (
                  <div className="form-success show">
                    <div className="form-success-icon"><Check size={28} strokeWidth={2} /></div>
                    <h3>Vielen Dank!</h3>
                    <p>Deine Anfrage ist eingegangen. Heidi meldet sich persönlich bei dir — in der Regel innerhalb von 48 Stunden.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Image src="/logo-text-white.png" alt="YEBOAH cosmetics" width={160} height={36} className="footer-logo-img" />
            </div>
            <div className="footer-links">
              <a href="#about">Über uns</a>
              <a href="#mentoring">Programm</a>
              <a href="#kontakt">Kontakt</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">&copy; 2026 Yeboah Cosmetics. Berlin, Germany.</div>
            <a href="https://www.instagram.com/yeboah.cosmetics/" target="_blank" rel="noopener" className="footer-instagram">
              <InstagramIcon size={16} strokeWidth={1.8} />
              @yeboah.cosmetics
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
