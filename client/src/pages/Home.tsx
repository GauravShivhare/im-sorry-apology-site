/* Style reminder: Soft-girl kawaii stationery — narrow portrait storybook, ivory paper cards, Bandage Coral, lavender shadows, Caveat/Nunito/Fraunces typography. */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Heart, Sparkles, Stars } from "lucide-react";

const assets = {
  intro: "/manus-storage/apology-intro-hearts_7a154ad0.png",
  bunny: "/manus-storage/apology-bunny-welcome_ab01ee67.png",
  cat: "/manus-storage/apology-cat-sad_6f06e91c.png",
  floral: "/manus-storage/apology-letter-floral_eea69303.png",
  mark: "/manus-storage/apology-heart-mark_a3c0678f.png",
  qr: "/manus-storage/nandita-apology-heart-qr_f8f7f2a7.png",
};

const apologyPoints = [
  { label: "A little honesty", text: "I messed up... and I'm really sorry for that.", tone: "peach" },
  { label: "A real promise", text: "I promise I'll be better for you.", tone: "rose" },
  { label: "What you mean to me", text: "Please forgive me... You mean so much to me.", tone: "lilac" },
];

function FloatingDecor({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`decor-layer ${dark ? "decor-layer--dark" : ""}`} aria-hidden="true">
      <Heart className="decor-heart decor-heart--one" fill="currentColor" />
      <Heart className="decor-heart decor-heart--two" fill="currentColor" />
      <Sparkles className="decor-sparkle decor-sparkle--one" />
      <Sparkles className="decor-sparkle decor-sparkle--two" />
      <span className="decor-dot decor-dot--one" />
      <span className="decor-dot decor-dot--two" />
    </div>
  );
}

function BrandMark() {
  return <img className="brand-mark" src={assets.mark} alt="" />;
}

function StoryFrame({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <main className={`story-frame ${dark ? "story-frame--dark" : ""} ${className}`}>
      <FloatingDecor dark={dark} />
      <div className="story-inner">{children}</div>
    </main>
  );
}

function BackLink() {
  return <div className="back-row"><Link href="/" className="tiny-back"><span aria-hidden="true">←</span> the beginning</Link><BrandMark /></div>;
}

export default function Home() {
  return (
    <StoryFrame dark className="entry-screen">
      <div className="entry-topline"><span>message request</span><span className="entry-dot" /></div>
      <div className="dm-header">
        <div className="avatar avatar--purple">♡</div>
        <div><p className="dm-name">someone who misses you</p><p className="dm-status">sent with a little courage</p></div>
      </div>
      <div className="dm-thread">
        <p className="dm-date">today, 11:11 pm</p>
        <div className="dm-bubble dm-bubble--received">I know I messed up...<br />so I made this 🥺</div>
        <div className="qr-card" aria-label="A decorative scan me card">
          <div className="qr-holly">✦　♡　✦</div>
          <div className="qr-code">{Array.from({ length: 49 }).map((_, i) => <i key={i} className={i % 3 === 0 || i % 7 === 0 ? "is-dark" : ""} />)}</div>
          <span>SCAN ME</span>
        </div>
      </div>
      <Link href="/welcome" className="entry-cta">open the little website <ArrowRight size={16} /></Link>
      <p className="entry-credit">made carefully by @anujbuilds</p>
    </StoryFrame>
  );
}

export function WelcomePage() {
  return <StoryFrame className="paper-screen">
    <BackLink />
    <section className="scene-card scene-card--welcome paper-keepsake">
      <div className="chapter-tag"><Stars size={13} /> chapter one</div>
      <img src={assets.bunny} className="character character--bunny" alt="A shy white bunny under pink blossoms" />
      <div className="copy-block">
        <p className="eyebrow">a tiny note, just for you</p>
        <h1>Hey Cutiepie</h1>
        <p>Can we talk for a moment? There's something important I want to tell you.</p>
      </div>
      <Link href="/acknowledgment" className="soft-button soft-button--coral">I'll tell you <Heart size={17} fill="currentColor" /></Link>
    </section>
    <p className="page-count">01 <span>/ 05</span></p>
  </StoryFrame>;
}

export function AcknowledgmentPage() {
  return <StoryFrame className="paper-screen paper-screen--lilac">
    <BackLink />
    <section className="scene-card scene-card--ack paper-keepsake">
      <div className="chapter-tag chapter-tag--lilac"><Heart size={13} fill="currentColor" /> chapter two</div>
      <img src={assets.cat} className="character character--cat" alt="A sad white cat holding a lavender heart" />
      <div className="copy-block">
        <p className="eyebrow">I want to say this properly</p>
        <h2>I know I hurt you...</h2>
        <p>and I've been feeling bad about it. You didn't deserve the version of me that showed up then.</p>
      </div>
      <Link href="/little-things" className="soft-button soft-button--lavender">I want to be honest <ArrowRight size={17} /></Link>
    </section>
    <p className="page-count">02 <span>/ 05</span></p>
  </StoryFrame>;
}

export function LittleThingsPage() {
  const [opened, setOpened] = useState<number[]>([]);
  const toggle = (index: number) => setOpened((current) => current.includes(index) ? current : [...current, index]);
  return <StoryFrame className="paper-screen paper-screen--peach">
    <BackLink />
    <section className="scene-card scene-card--points paper-keepsake">
      <div className="chapter-tag chapter-tag--peach"><Sparkles size={13} /> chapter three</div>
      <div className="points-intro"><p className="eyebrow">three little things</p><h2>Little things I want to tell you...</h2><p>Tap each one when you're ready.</p></div>
      <div className="point-list">
        {apologyPoints.map((point, index) => {
          const isOpen = opened.includes(index);
          return <button key={point.label} onClick={() => toggle(index)} className={`point-button point-button--${point.tone} ${isOpen ? "is-open" : ""}`} aria-expanded={isOpen}>
            <span className="point-index">0{index + 1}</span><span className="point-copy">{isOpen ? point.text : point.label}</span><Heart size={18} fill={isOpen ? "currentColor" : "none"} />
          </button>;
        })}
      </div>
      <Link href="/from-heart" className={`soft-button soft-button--paper ${opened.length === 3 ? "is-ready" : ""}`}>read what I wrote <Heart size={17} fill="currentColor" /></Link>
      {opened.length < 3 && <p className="hint">(there are three, promise)</p>}
    </section>
    <p className="page-count">03 <span>/ 05</span></p>
  </StoryFrame>;
}

export function FromHeartPage() {
  return <StoryFrame className="paper-screen paper-screen--rose">
    <BackLink />
    <section className="scene-card scene-card--heart paper-keepsake">
      <div className="chapter-tag chapter-tag--rose"><Heart size={13} fill="currentColor" /> chapter four</div>
      <p className="eyebrow">the part I should have said first</p>
      <h2>From my heart...</h2>
      <div className="mini-gallery"><div className="mini-frame mini-frame--left"><img src={assets.cat} alt="Cat holding a heart" /></div><div className="mini-frame mini-frame--right"><img src={assets.bunny} alt="Bunny illustration" /></div></div>
      <p className="tap-prompt">↓ tap to see message ↓</p>
      <Link href="/letter" className="sorry-button">I'm Sorry <Heart size={18} fill="currentColor" /></Link>
    </section>
    <p className="page-count">04 <span>/ 05</span></p>
  </StoryFrame>;
}

export function LetterPage() {
  const [expanded, setExpanded] = useState(false);
  return <StoryFrame className="paper-screen paper-screen--letter">
    <BackLink />
    <section className={`letter-card ${expanded ? "is-expanded" : ""}`} style={{ backgroundImage: `url(${assets.floral})` }}>
      <div className="letter-wash">
        <p className="letter-kicker">a note from the softest place in me</p>
        <h1>I'm Sorry</h1>
        <div className="letter-rule"><span>♡</span></div>
        {!expanded ? <>
          <p className="letter-tease">For hurting you and making you feel upset, I'm truly sorry.</p>
          <button className="reveal-button" onClick={() => setExpanded(true)}>read the whole thing <ArrowRight size={15} /></button>
        </> : <p className="letter-body">Hey Nandita, kal ki baat ke baare mein soch raha tha. I'm sorry agar meri baaton ya actions se tumhe laga ki main tum par kuch force kar raha hoon ya tumhari kindness ko galat samajh raha hoon. Mera intention tumhe uncomfortable karna kabhi nahi tha.<br /><br />Sach bolun toh tum mujhe bahut pasand ho, aur shayad isi wajah se main kabhi-kabhi cheezon ko zyada seriously le leta hoon. Tumhari smile, tumhara attitude, aur tumhara apna little world—there's something about you that genuinely pulls me in. But I also understand ki meri feelings tumhari responsibility nahi hain, aur tumhe same feel karna zaroori nahi hai.<br /><br />Main tumse attention ya chance maangne nahi aaya hoon. Bas itna kehna tha ki agar meri energy kabhi zyada ho gayi, I'm sorry. I respect what you feel, and I'll respect your space too. You're still someone I think is really special—bas ab bina kisi expectation ke.<br /><br />Aur haan, tumne bola ki tum mujhe like nahi karti… fair enough. Tumhari honesty attractive toh hai, I'll give you that. Take care.</p>}
        <div className="letter-signoff">always trying,<br /><strong>me ♡</strong></div>
      </div>
    </section>
    <div className="letter-actions"><Link href="/" className="start-over">read it again from the top ↗</Link><a className="qr-download" href={assets.qr} download="nandita-apology-heart-qr.png">save the little heart QR ↓</a></div>
  </StoryFrame>;
}
