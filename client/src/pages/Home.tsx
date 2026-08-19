/* Page: Neutral informational flow — a simple multi-step content flow */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Info, Sparkles, Star } from "lucide-react";

const assets = {
  intro: "/assets/intro-neutral.png",
  avatar1: "/assets/avatar-1.png",
  avatar2: "/assets/avatar-2.png",
  floral: "/assets/background-floral.png",
  logo: "/assets/brand-mark.png",
  qr: "/assets/qr-neutral.png",
};

const notes = [
  { label: "Note One", text: "I want to share something important with you.", tone: "toneA" },
  { label: "Note Two", text: "I plan to improve how I show up moving forward.", tone: "toneB" },
  { label: "Note Three", text: "You matter to me and I want to be better.", tone: "toneC" },
];

function FloatingDecor({ neutral = false }: { neutral?: boolean }) {
  return (
    <div className={`decor-layer ${neutral ? "decor-layer--neutral" : ""}`} aria-hidden="true">
      <Star className="decor-star decor-star--one" />
      <Star className="decor-star decor-star--two" />
      <Sparkles className="decor-sparkle decor-sparkle--one" />
      <span className="decor-dot decor-dot--one" />
      <span className="decor-dot decor-dot--two" />
    </div>
  );
}

function BrandMark() {
  return <img className="brand-mark" src={assets.logo} alt="Brand mark" />;
}

function StoryFrame({ children, neutral = false, className = "" }: { children: React.ReactNode; neutral?: boolean; className?: string }) {
  return (
    <main className={`story-frame ${neutral ? "story-frame--neutral" : ""} ${className}`}>
      <FloatingDecor neutral={neutral} />
      <div className="story-inner">{children}</div>
    </main>
  );
}

function BackLink() {
  return (
    <div className="back-row">
      <Link href="/" className="tiny-back">
        <span aria-hidden="true">←</span> start
      </Link>
      <BrandMark />
    </div>
  );
}

export default function Home() {
  return (
    <StoryFrame neutral className="entry-screen">
      <div className="entry-topline"><span>message</span><span className="entry-dot" /></div>
      <div className="dm-header">
        <div className="avatar avatar--muted">•</div>
        <div>
          <p className="dm-name">a friend</p>
          <p className="dm-status">sent recently</p>
        </div>
      </div>
      <div className="dm-thread">
        <p className="dm-date">today</p>
        <div className="dm-bubble dm-bubble--received">Hi — I'd like to share a short note.</div>
        <div className="qr-card" aria-label="Decorative scan card">
          <div className="qr-holly">✦　•　✦</div>
          <div className="qr-code">{Array.from({ length: 49 }).map((_, i) => <i key={i} className={i % 3 === 0 || i % 7 === 0 ? "is-dark" : ""} />)}</div>
          <span>SCAN</span>
        </div>
      </div>
      <Link href="/welcome" className="entry-cta">open the content <ArrowRight size={16} /></Link>
      <p className="entry-credit">created with care</p>
    </StoryFrame>
  );
}

export function WelcomePage() {
  return (
    <StoryFrame className="paper-screen">
      <BackLink />
      <section className="scene-card scene-card--welcome paper-keepsake">
        <div className="chapter-tag"><Star size={13} /> chapter one</div>
        <img src={assets.avatar1} className="character character--one" alt="Illustration" />
        <div className="copy-block">
          <p className="eyebrow">a short note</p>
          <h1>Welcome</h1>
          <p>There is a brief message I wanted to share — take a moment if you'd like.</p>
        </div>
        <Link href="/acknowledgment" className="soft-button soft-button--primary">continue <ArrowRight size={17} /></Link>
      </section>
      <p className="page-count">01 <span>/ 05</span></p>
    </StoryFrame>
  );
}

export function AcknowledgmentPage() {
  return (
    <StoryFrame className="paper-screen paper-screen--muted">
      <BackLink />
      <section className="scene-card scene-card--ack paper-keepsake">
        <div className="chapter-tag chapter-tag--muted"><Info size={13} /> chapter two</div>
        <img src={assets.avatar2} className="character character--two" alt="Illustration" />
        <div className="copy-block">
          <p className="eyebrow">a clear statement</p>
          <h2>A quick acknowledgment</h2>
          <p>I want to acknowledge something that happened and express my intent to do better.</p>
        </div>
        <Link href="/little-things" className="soft-button soft-button--secondary">next <ArrowRight size={17} /></Link>
      </section>
      <p className="page-count">02 <span>/ 05</span></p>
    </StoryFrame>
  );
}

export function LittleThingsPage() {
  const [opened, setOpened] = useState<number[]>([]);
  const toggle = (index: number) => setOpened((current) => (current.includes(index) ? current : [...current, index]));
  return (
    <StoryFrame className="paper-screen paper-screen--neutral">
      <BackLink />
      <section className="scene-card scene-card--points paper-keepsake">
        <div className="chapter-tag chapter-tag--neutral"><Sparkles size={13} /> chapter three</div>
        <div className="points-intro">
          <p className="eyebrow">highlights</p>
          <h2>Key points</h2>
          <p>Tap each item to expand.</p>
        </div>
        <div className="point-list">
          {notes.map((note, index) => {
            const isOpen = opened.includes(index);
            return (
              <button key={note.label} onClick={() => toggle(index)} className={`point-button point-button--${note.tone} ${isOpen ? "is-open" : ""}`} aria-expanded={isOpen}>
                <span className="point-index">0{index + 1}</span>
                <span className="point-copy">{isOpen ? note.text : note.label}</span>
                <Info size={18} />
              </button>
            );
          })}
        </div>
        <Link href="/from-heart" className={`soft-button soft-button--paper ${opened.length === 3 ? "is-ready" : ""}`}>read more <ArrowRight size={17} /></Link>
        {opened.length < 3 && <p className="hint">(three items total)</p>}
      </section>
      <p className="page-count">03 <span>/ 05</span></p>
    </StoryFrame>
  );
}

export function FromHeartPage() {
  return (
    <StoryFrame className="paper-screen paper-screen--soft">
      <BackLink />
      <section className="scene-card scene-card--heart paper-keepsake">
        <div className="chapter-tag chapter-tag--soft"><Info size={13} /> chapter four</div>
        <p className="eyebrow">a short message</p>
        <h2>From the author</h2>
        <div className="mini-gallery">
          <div className="mini-frame mini-frame--left"><img src={assets.avatar2} alt="Illustration" /></div>
          <div className="mini-frame mini-frame--right"><img src={assets.avatar1} alt="Illustration" /></div>
        </div>
        <p className="tap-prompt">↓ tap to continue ↓</p>
        <Link href="/letter" className="primary-button">continue <ArrowRight size={18} /></Link>
      </section>
      <p className="page-count">04 <span>/ 05</span></p>
    </StoryFrame>
  );
}

export function LetterPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <StoryFrame className="paper-screen paper-screen--letter">
      <BackLink />
      <section className={`letter-card ${expanded ? "is-expanded" : ""}`} style={{ backgroundImage: `url(${assets.floral})` }}>
        <div className="letter-wash">
          <p className="letter-kicker">a short note</p>
          <h1>Message</h1>
          <div className="letter-rule"><span>•</span></div>
          {!expanded ? (
            <>
              <p className="letter-tease">A concise summary is shown here.</p>
              <button className="reveal-button" onClick={() => setExpanded(true)}>read full message <ArrowRight size={15} /></button>
            </>
          ) : (
            <p className="letter-body">Hello, this is a neutral message placeholder. Replace this paragraph with your own content when ready.</p>
          )}
          <div className="letter-signoff">sincerely,<br /><strong>the team</strong></div>
        </div>
      </section>
      <div className="letter-actions">
        <Link href="/" className="start-over">start over ↗</Link>
        <a className="qr-download" href={assets.qr} download="neutral-qr.png">download QR</a>
      </div>
    </StoryFrame>
  );
}
