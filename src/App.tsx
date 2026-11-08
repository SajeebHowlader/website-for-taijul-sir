import { useState, type FormEvent } from 'react'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Globe2,
  Link2,
  LockKeyhole,
  Mail,
  Menu,
  ScanLine,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const features = [
  {
    icon: ScanLine,
    title: 'Message Scanner',
    description:
      'Paste any suspicious SMS, WhatsApp, or chat message and get instant AI-powered analysis.',
    tone: 'blue',
  },
  {
    icon: Link2,
    title: 'URL & Link Scanner',
    description:
      'Verify any link before clicking — detect phishing, malware, and deceptive redirect chains.',
    tone: 'purple',
  },
  {
    icon: Mail,
    title: 'Email Analyzer',
    description:
      'Detect phishing emails, fake sender addresses, spoofed domains, and fraudulent requests.',
    tone: 'cyan',
  },
  {
    icon: Activity,
    title: 'AI Risk Scoring',
    description:
      'Get a precise 0–100 risk score with detailed explanations of detected threat patterns.',
    tone: 'green',
  },
]

const steps = [
  {
    number: '01',
    title: 'Paste or Submit',
    description: 'Submit any message, URL, or email content to ScamGuard AI.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'AI Analyzes',
    description:
      'Our model scans for hundreds of known scam patterns, keywords, and behavioral signals.',
    icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Get Your Result',
    description:
      'Receive a risk score, threat category, and plain-language explanation within seconds.',
    icon: CircleCheck,
  },
]

const faqs = [
  {
    question: 'Is my data stored?',
    answer:
      'No. All scans are processed in memory and immediately discarded. We never store your message content.',
  },
  {
    question: 'How accurate is ScamGuard AI?',
    answer:
      'Our model achieves 98.7% accuracy on benchmark datasets across 40+ scam categories.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'We support English, Spanish, French, German, Portuguese, Hindi, and 20 other languages.',
  },
  {
    question: 'Is it free?',
    answer:
      'ScamGuard AI offers a free tier with 10 scans per day. Pro and Team plans unlock unlimited scans.',
  },
]

const stats = [
  { label: 'Total Scans', value: '1,284', color: 'blue' },
  { label: 'Safe', value: '1,021', color: 'green' },
  { label: 'Suspicious', value: '198', color: 'yellow' },
  { label: 'High Risk', value: '65', color: 'red' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scannerOpen, setScannerOpen] = useState(false)
  const [scanText, setScanText] = useState('')
  const [scanComplete, setScanComplete] = useState(false)

  const openScanner = () => {
    setScanComplete(false)
    setScannerOpen(true)
    setMenuOpen(false)
  }

  const handleScan = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (scanText.trim()) setScanComplete(true)
  }

  return (
    <div className="site-shell" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ScamGuard AI home">
          <span className="brand-mark"><ShieldCheck size={20} strokeWidth={2.6} /></span>
          <span>ScamGuard <span className="brand-ai">AI</span></span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#dashboard" onClick={() => setMenuOpen(false)}>Dashboard</a>
          <button type="button" className="nav-link" onClick={openScanner}>Scan Now</button>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="nav-account">
            <a className="sign-in" href="#contact" onClick={() => setMenuOpen(false)}>Sign In</a>
            <a className="button button-primary nav-cta" href="#get-started" onClick={() => setMenuOpen(false)}>Get Started</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-content">
            <div className="model-pill"><span className="live-dot" /> AI Model v3.2 — Now with 40+ scam categories</div>
            <h1>Detect Scams Before <span>They Detect You.</span></h1>
            <p className="hero-copy">ScamGuard AI analyzes suspicious messages, emails, and links using AI-powered security intelligence to help you identify online scams before it&apos;s too late.</p>
            <div className="hero-actions">
              <button type="button" className="button button-primary button-large" onClick={openScanner}>Scan Now — It&apos;s Free <ArrowRight size={17} /></button>
              <a className="button button-outline button-large" href="#about">Learn More</a>
            </div>

            <div className="dashboard-window" id="dashboard">
              <div className="window-topbar">
                <div className="window-dots"><span /><span /><span /></div>
                <div className="address-bar"><LockKeyhole size={12} /> app.scamguard.ai/dashboard</div>
                <div className="window-status"><span /> Live</div>
              </div>
              <div className="dashboard-content">
                <div className="stat-grid">
                  {stats.map((stat) => (
                    <div className="stat-card" key={stat.label}>
                      <p>{stat.label}</p><strong className={`stat-${stat.color}`}>{stat.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="scan-list">
                  <div className="scan-list-heading"><span>Recent scans</span><button type="button" onClick={openScanner}>View all <ArrowUpRight size={13} /></button></div>
                  <div className="scan-row">
                    <span className="scan-type-icon icon-red"><Mail size={15} /></span>
                    <div className="scan-detail"><span>Message</span><small>You won $5,000! Click to claim...</small></div>
                    <span className="risk-tag risk-high">HIGH RISK</span><strong className="risk-score score-red">94<span>/100</span></strong>
                  </div>
                  <div className="scan-row">
                    <span className="scan-type-icon icon-amber"><Link2 size={15} /></span>
                    <div className="scan-detail"><span>URL</span><small>bit.ly/secure-bank-update</small></div>
                    <span className="risk-tag risk-medium">SUSPICIOUS</span><strong className="risk-score score-amber">71<span>/100</span></strong>
                  </div>
                  <div className="scan-row">
                    <span className="scan-type-icon icon-red"><Mail size={15} /></span>
                    <div className="scan-detail"><span>Email</span><small>Your account has been suspended...</small></div>
                    <span className="risk-tag risk-high">HIGH RISK</span><strong className="risk-score score-red">88<span>/100</span></strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-proof"><span className="avatar-stack"><i>J</i><i>M</i><i>A</i><i>+</i></span><span>Trusted by <strong>150,000+</strong> people staying safer online</span><span className="proof-divider" /><span className="proof-stars">★★★★★</span><span>4.9/5</span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="ScamGuard impact">
          <div className="trust-inner">
            <div><strong>2.4M<span>+</span></strong><small>Scams Detected</small></div>
            <div><strong>98.7<span>%</span></strong><small>Accuracy Rate</small></div>
            <div><strong>150K<span>+</span></strong><small>Protected Users</small></div>
            <div><strong>&lt;2<span>s</span></strong><small>Scan Time</small></div>
          </div>
        </section>

        <section className="section features-section" id="about">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-icon"><Sparkles size={14} /></span> Detection Suite</span>
            <h2>AI-Powered <span>Protection</span></h2>
            <p>Three dedicated scanners, one unified AI engine. Analyze any threat vector in seconds.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description, tone }, index) => (
              <article className="feature-card" key={title}>
                <div className={`feature-icon tone-${tone}`}><Icon size={20} /></div>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <button type="button" className="feature-link" onClick={openScanner}>Explore scanner <ArrowRight size={15} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section section" id="process">
          <div className="process-orb" />
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-icon"><Zap size={14} /></span> Process</span>
            <h2>How ScamGuard AI <span>Works</span></h2>
            <p>Three simple steps between you and a safer internet.</p>
          </div>
          <div className="steps-grid">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <article className="step-card" key={number}>
                <div className="step-top"><span className="step-number">{number}</span><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                {index < steps.length - 1 && <span className="step-connector"><ArrowRight size={16} /></span>}
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="faq-heading">
            <span className="eyebrow"><span className="eyebrow-icon"><ShieldCheck size={14} /></span> Good to know</span>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Everything you need to know about keeping your digital life safe.</p>
            <a className="text-link" href="#contact">Still have questions? Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className={`faq-item${openFaq === index ? ' faq-open' : ''}`} key={faq.question}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{faq.question}</span><ChevronDown size={18} />
                </button>
                {openFaq === index && <p>{faq.answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="get-started">
          <div className="cta-shield"><ShieldCheck size={24} /></div>
          <div className="cta-copy"><span className="eyebrow">Your safety starts here</span><h2>Stay One Step Ahead <span>of Scammers</span></h2><p>Join 150,000+ users protecting themselves with ScamGuard AI. Start scanning for free.</p></div>
          <button type="button" className="button button-primary button-large" onClick={openScanner}>Create Free Account <ArrowRight size={17} /></button>
          <div className="cta-spark cta-spark-one" /><div className="cta-spark cta-spark-two" />
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand" href="#home"><span className="brand-mark"><ShieldCheck size={20} strokeWidth={2.6} /></span><span>ScamGuard <span className="brand-ai">AI</span></span></a>
            <p>Detect scams. Stay safe.<br />Powered by advanced AI security intelligence.</p>
            <div className="footer-social"><a href="#contact" aria-label="Website"><Globe2 size={16} /></a><a href="#contact" aria-label="Security"><ShieldCheck size={16} /></a><a href="#contact" aria-label="Updates"><Sparkles size={16} /></a></div>
          </div>
          <div className="footer-column"><h3>Product</h3><a href="#dashboard">Dashboard</a><button type="button" onClick={openScanner}>Scanner</button><a href="#dashboard">History</a><a href="#about">Insights</a></div>
          <div className="footer-column"><h3>Company</h3><a href="#about">About</a><a href="#contact">Contact</a><a href="#faq">Blog</a><a href="#contact">Careers</a></div>
          <div className="footer-column"><h3>Legal</h3><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a><a href="#contact">Security</a></div>
          <div className="footer-newsletter"><h3>Stay in the know</h3><p>Get the latest security tips and updates.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit" aria-label="Subscribe"><ArrowRight size={17} /></button></form><small><LockKeyhole size={12} /> No spam. Unsubscribe anytime.</small></div>
        </div>
        <div className="footer-bottom"><span>© 2024 ScamGuard AI. All rights reserved.</span><span className="system-status"><i /> All systems operational</span></div>
      </footer>

      {scannerOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setScannerOpen(false) }}>
          <section className="scanner-modal" role="dialog" aria-modal="true" aria-labelledby="scanner-title">
            <button type="button" className="modal-close" aria-label="Close scanner" onClick={() => setScannerOpen(false)}><X size={19} /></button>
            <div className="modal-icon"><ShieldCheck size={22} /></div>
            <span className="eyebrow">Free security check</span>
            <h2 id="scanner-title">Scan a message or link</h2>
            <p className="modal-copy">Paste something suspicious below to see a sample ScamGuard analysis.</p>
            <form onSubmit={handleScan}>
              <label htmlFor="scan-input">Message, email, or URL</label>
              <textarea id="scan-input" value={scanText} onChange={(event) => { setScanText(event.target.value); setScanComplete(false) }} placeholder="Paste suspicious text here..." rows={4} required />
              <button type="submit" className="button button-primary button-large"><ScanLine size={17} /> Analyze content</button>
            </form>
            {scanComplete && <div className="demo-result"><div><ShieldAlert size={18} /><strong>Sample analysis ready</strong></div><p>This frontend demo does not connect to a live threat intelligence service. Avoid clicking unknown links or sharing sensitive information.</p></div>}
            <small className="privacy-note"><LockKeyhole size={12} /> Your text stays in this browser demo.</small>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
