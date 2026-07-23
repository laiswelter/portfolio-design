/* global React */
/**
 * Hero visual — arch-frame family. Same motion + chips + name tag pattern,
 * different content inside the arch.
 *   • shape-arch   : Clay shapes composition (default, no photo)
 *   • mark-arch    : Big "lw." italic lettermark on a soft tonal field
 *   • system-arch  : Abstract wireframe sketch — design-system diagram
 *   • photo-card   : Lais's photo (original)
 *   • typographic  : Oversized "lw." mark + clay shapes (no arch)
 */
const { useEffect } = React;

function useHeroVisualStyles() {
  useEffect(() => {
    if (document.getElementById('lw-hero-vis-style')) return;
    const s = document.createElement('style');
    s.id = 'lw-hero-vis-style';
    s.textContent = `
      .lw-fv-a, .lw-fv-b, .lw-fv-c, .lw-fv-d {
        transform-box: fill-box;
        transform-origin: 50% 50%;
        will-change: transform;
      }
      .lw-fv-a { animation: lwFvA 7s ease-in-out infinite; }
      .lw-fv-b { animation: lwFvB 6s ease-in-out infinite; }
      .lw-fv-c { animation: lwFvC 8s ease-in-out infinite; }
      .lw-fv-d { animation: lwFvA 9s ease-in-out infinite reverse; }
      @keyframes lwFvA { 0%,100%{transform:translate(0,0) rotate(0)} 50%{transform:translate(-4px,-10px) rotate(-2deg)} }
      @keyframes lwFvB { 0%,100%{transform:translate(0,0) rotate(0)} 50%{transform:translate(6px,-6px) rotate(2deg)} }
      @keyframes lwFvC { 0%,100%{transform:translate(0,0)} 50%{transform:translate(0,-12px)} }
      @keyframes lwSpin360 { to { transform: rotate(360deg); } }

      /* ── Arch frame (shared shell) ──────────────────────────────── */
      .lw-pc {
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
      }
      .lw-pc-frame {
        position: relative;
        width: min(86%, 420px);
        aspect-ratio: 4 / 5;
        border-radius: 240px 240px 32px 32px;
        overflow: hidden;
        background: var(--clay-brand-peach, #ffb084);
        box-shadow: 0 28px 64px -28px rgba(10,10,10,0.35), 0 8px 24px -12px rgba(10,10,10,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lw-pc-frame img {
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: 60% 30%;
      }
      .lw-pc-grain {
        position: absolute; inset: 0;
        background: radial-gradient(ellipse at 25% 15%, rgba(255,255,255,0.25), transparent 55%);
        pointer-events: none;
      }
      .lw-pc-name {
        position: absolute;
        left: -14px; bottom: 38px;
        padding: 10px 18px;
        background: var(--lw-ink, #0a0a0a);
        color: var(--lw-canvas, #fffaf0);
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 22px;
        letter-spacing: -0.4px;
        border-radius: 4px;
        transform: rotate(-3deg);
        box-shadow: 0 6px 18px -8px rgba(10,10,10,0.5);
        z-index: 3;
      }
      .lw-pc-sticker {
        position: absolute;
        z-index: 2;
        font-family: var(--clay-font-display, 'Outfit', sans-serif);
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        padding: 8px 14px;
        border-radius: 9999px;
        background: var(--lw-canvas, #fffaf0);
        color: var(--lw-ink, #0a0a0a);
        border: 1px solid var(--lw-hairline, rgba(0,0,0,0.08));
        box-shadow: 0 8px 18px -10px rgba(10,10,10,0.35);
        white-space: nowrap;
      }
      .lw-pc-sticker.s1 { top: 6%; right: 0%; transform: rotate(6deg); background: var(--clay-brand-pink, #ff4d8b); color: #fff; border-color: transparent; }
      .lw-pc-sticker.s2 { top: 38%; right: -4%; transform: rotate(-4deg); }
      .lw-pc-sticker.s3 { bottom: 12%; right: 4%; transform: rotate(8deg); background: var(--clay-brand-lavender, #b8a4ed); color: #0a0a0a; border-color: transparent; }
      .lw-pc-sticker.s4 { top: 2%; left: -2%; transform: rotate(-5deg); }
      .lw-pc-shape {
        position: absolute;
        z-index: 1;
        pointer-events: none;
      }
      .lw-pc-shape.shape-dot {
        width: 22px; height: 22px;
        border-radius: 50%;
        background: var(--clay-brand-ochre, #e8b94a);
      }
      .lw-pc-shape.shape-square {
        width: 28px; height: 28px;
        background: var(--clay-brand-teal, #1a3a3a);
        transform: rotate(18deg);
      }
      .lw-pc-shape.shape-plus {
        width: 32px; height: 32px;
        color: var(--lw-ink, #0a0a0a);
      }

      /* ── Arch contents — variants ───────────────────────────────── */
      .lw-pc-frame.tone-peach    { background: var(--clay-brand-peach, #ffb084); }
      .lw-pc-frame.tone-cream    { background: #f5ead8; }
      .lw-pc-frame.tone-lavender { background: var(--clay-brand-lavender, #b8a4ed); }
      .lw-pc-frame.tone-pink     { background: var(--clay-brand-pink, #ff4d8b); }
      .lw-pc-frame.tone-teal     { background: var(--clay-brand-teal, #1a3a3a); }

      .lw-arch-inner { position: relative; width: 100%; height: 100%; }
      .lw-arch-shape { position: absolute; will-change: transform; }
      .lw-arch-shape.dot-pink { width: 26%; aspect-ratio: 1; border-radius: 50%; background: var(--clay-brand-pink, #ff4d8b); }
      .lw-arch-shape.dot-lav  { width: 18%; aspect-ratio: 1; border-radius: 50%; background: var(--clay-brand-lavender, #b8a4ed); }
      .lw-arch-shape.dot-och  { width: 14%; aspect-ratio: 1; border-radius: 50%; background: var(--clay-brand-ochre, #e8b94a); }
      .lw-arch-shape.dot-teal { width: 11%; aspect-ratio: 1; border-radius: 50%; background: var(--clay-brand-teal, #1a3a3a); }
      .lw-arch-shape.pill-peach { width: 50%; height: 16%; border-radius: 9999px; background: #fff5e6; mix-blend-mode: multiply; opacity: 0.85; }
      .lw-arch-shape.blob-cream {
        width: 38%; aspect-ratio: 1;
        background: #fff5e6;
        border-radius: 64% 36% 70% 30% / 40% 50% 50% 60%;
        opacity: 0.92;
      }

      .lw-arch-mark {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 280px;
        line-height: 0.85;
        letter-spacing: -16px;
        color: var(--lw-ink, #0a0a0a);
        text-align: center;
        opacity: 0.92;
        user-select: none;
      }
      .lw-arch-mark .dot {
        display: inline-block;
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--clay-brand-pink, #ff4d8b);
        margin-left: 4px;
        vertical-align: 6px;
      }

      .lw-arch-system { position: absolute; inset: 12% 10% 12% 10%; }
      .lw-arch-card {
        position: absolute;
        background: #fffaf0;
        border: 1.5px solid rgba(10,10,10,0.18);
        border-radius: 14px;
        padding: 12px;
        display: flex; flex-direction: column; gap: 6px;
        box-shadow: 0 14px 28px -16px rgba(10,10,10,0.3);
      }
      .lw-arch-card-row {
        height: 6px;
        background: rgba(10,10,10,0.12);
        border-radius: 3px;
      }
      .lw-arch-card-row.tall { height: 10px; }
      .lw-arch-card-row.short { width: 50%; }
      .lw-arch-card-row.accent { background: var(--clay-brand-pink, #ff4d8b); width: 60%; }
      .lw-arch-card.c1 { top: 0; left: 0; width: 52%; height: 38%; }
      .lw-arch-card.c2 { top: 22%; right: 0; width: 46%; height: 30%; transform: rotate(3deg); }
      .lw-arch-card.c3 { bottom: 0; left: 8%; width: 60%; height: 32%; transform: rotate(-2deg); }
      .lw-arch-line {
        position: absolute;
        border-top: 2px dashed rgba(10,10,10,0.2);
        transform-origin: 0 50%;
      }

      /* Polaroid still kept around but the photo variants are not default. */
      .lw-po {
        position: relative;
        width: 100%; height: 100%;
        display: grid;
        place-items: center;
      }
      .lw-po-frame {
        position: relative;
        width: min(76%, 360px);
        padding: 14px 14px 56px;
        background: #fffaf0;
        border-radius: 4px;
        transform: rotate(-3deg);
        box-shadow: 0 30px 60px -28px rgba(10,10,10,0.4), 0 8px 24px -12px rgba(10,10,10,0.15);
      }
      .lw-po-img {
        width: 100%;
        aspect-ratio: 4 / 5;
        overflow: hidden;
        background: var(--clay-brand-peach, #ffb084);
      }
      .lw-po-img img {
        width: 100%; height: 100%;
        object-fit: cover;
        object-position: 60% 30%;
      }
      .lw-po-caption {
        position: absolute;
        left: 0; right: 0; bottom: 18px;
        text-align: center;
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 18px;
        color: var(--lw-ink, #0a0a0a);
      }

      /* Typographic standalone ------------------------------------- */
      .lw-tg {
        position: relative;
        width: 100%; height: 100%;
        display: grid;
        place-items: center;
      }

      /* ── Doodle character ───────────────────────────────────────── */
      .lw-doo {
        position: relative;
        width: 100%; height: 100%;
        display: grid; place-items: center;
        font-family: 'Instrument Serif', serif;
      }
      .lw-doo svg {
        width: min(90%, 480px);
        height: auto;
        overflow: visible;
      }
      .lw-doo .ink { fill: none; stroke: var(--lw-ink, #0a0a0a); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
      .lw-doo .ink-thin { fill: none; stroke: var(--lw-ink, #0a0a0a); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
      .lw-doo .ink-fill { fill: var(--lw-ink, #0a0a0a); }
      .lw-doo .accent { fill: var(--clay-brand-pink, #ff4d8b); }
      .lw-doo .accent-stroke { stroke: var(--clay-brand-pink, #ff4d8b); }
      .lw-doo-tag {
        position: absolute;
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 20px;
        color: var(--lw-ink, #0a0a0a);
        white-space: nowrap;
      }
      .lw-doo-tag.t1 { top: 4%; left: -2%;  transform: rotate(-4deg); }
      .lw-doo-tag.t2 { top: 18%; right: -6%; transform: rotate(6deg); color: var(--clay-brand-pink, #ff4d8b); }
      .lw-doo-tag.t3 { bottom: 14%; left: -8%; transform: rotate(-3deg); }
      .lw-doo-tag.t4 { bottom: 4%; right: -4%; transform: rotate(4deg); }
      .lw-doo-arrow {
        position: absolute;
        width: 56px; height: 32px;
      }
      .lw-doo-arrow.a1 { top: 12%; right: 8%; }
      .lw-doo-arrow.a2 { bottom: 18%; left: 4%; transform: rotate(160deg); }

      /* ── Flat illustrated character ──────────────────────────────── */
      .lw-flat {
        position: relative;
        width: 100%; height: 100%;
        display: grid; place-items: center;
      }
      .lw-flat-scene {
        position: relative;
        width: min(92%, 480px);
        aspect-ratio: 4 / 5;
        border-radius: 32px;
        background: var(--clay-brand-peach, #ffb084);
        overflow: hidden;
        box-shadow: 0 28px 64px -28px rgba(10,10,10,0.35);
      }
      .lw-flat-scene svg {
        width: 100%; height: 100%;
        display: block;
      }
      .lw-flat-bg {
        position: absolute; inset: 0;
        background:
          radial-gradient(circle at 80% 18%, rgba(255,255,255,0.35), transparent 45%),
          radial-gradient(circle at 12% 88%, rgba(255,77,139,0.18), transparent 55%);
        pointer-events: none;
      }
      .lw-flat-chip {
        position: absolute;
        font-family: 'Outfit', sans-serif;
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 7px 12px;
        border-radius: 9999px;
        background: var(--lw-canvas, #fffaf0);
        color: var(--lw-ink, #0a0a0a);
        box-shadow: 0 8px 18px -10px rgba(10,10,10,0.35);
        white-space: nowrap;
      }
      .lw-flat-chip.f1 { top: 10%; left: -4%;  transform: rotate(-4deg); background: var(--clay-brand-pink, #ff4d8b); color: #fff; }
      .lw-flat-chip.f2 { top: 28%; right: -6%; transform: rotate(5deg); }
      .lw-flat-chip.f3 { bottom: 18%; left: -2%; transform: rotate(-3deg); background: var(--clay-brand-lavender, #b8a4ed); }
      .lw-flat-chip.f4 { bottom: 4%; right: -2%; transform: rotate(4deg); }

      /* ── Editorial type-collage (oversized serif + inline image cells) ─ */
      .lw-ed {
        position: relative;
        width: 100%; height: 100%;
        display: grid; place-items: center;
        padding: 12px;
      }
      .lw-ed-stage {
        position: relative;
        width: min(100%, 540px);
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-weight: 400;
        line-height: 0.85;
        font-size: clamp(80px, 14vw, 168px);
        letter-spacing: -6px;
        color: var(--lw-ink, #0a0a0a);
        text-align: left;
      }
      .lw-ed-row {
        display: flex;
        align-items: center;
        gap: 12px;
        white-space: nowrap;
      }
      .lw-ed-row.center { justify-content: center; }
      .lw-ed-row.right  { justify-content: flex-end; }
      .lw-ed-row + .lw-ed-row { margin-top: 6px; }
      .lw-ed-row .amp {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        color: var(--clay-brand-pink, #ff4d8b);
      }
      .lw-ed-cell {
        display: inline-flex;
        align-items: center; justify-content: center;
        height: 0.85em;
        border-radius: 16px;
        overflow: hidden;
        flex-shrink: 0;
        background: var(--clay-brand-peach, #ffb084);
      }
      .lw-ed-cell.rect { width: 1.6em; }
      .lw-ed-cell.circle { width: 0.85em; border-radius: 50%; }
      .lw-ed-cell.pill { width: 1.4em; border-radius: 9999px; }
      .lw-ed-cell.tone-pink     { background: var(--clay-brand-pink, #ff4d8b); }
      .lw-ed-cell.tone-lavender { background: var(--clay-brand-lavender, #b8a4ed); }
      .lw-ed-cell.tone-ochre    { background: var(--clay-brand-ochre, #e8b94a); }
      .lw-ed-cell.tone-teal     { background: var(--clay-brand-teal, #1a3a3a); }
      .lw-ed-cell.tone-cream    { background: #f5ead8; }
      .lw-ed-cell.tone-peach    { background: var(--clay-brand-peach, #ffb084); }
      .lw-ed-cell image-slot {
        display: block;
        width: 100%;
        height: 100%;
      }
      .lw-ed-tag {
        position: absolute;
        top: -10px; right: -10px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        padding: 6px 12px;
        background: var(--lw-ink, #0a0a0a);
        color: var(--lw-canvas, #fffaf0);
        border-radius: 4px;
        transform: rotate(4deg);
      }
      .lw-ed-foot {
        margin-top: 18px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--lw-muted, #6a6a6a);
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .lw-ed-foot .pulse {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--clay-brand-pink, #ff4d8b);
        animation: lw-edpulse 1.5s ease-in-out infinite;
      }
      @keyframes lw-edpulse {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50%      { opacity: 1;   transform: scale(1.25); }
      }
    `;
    document.head.appendChild(s);
  }, []);
}

/* Shared chrome around the arch — chips, floating shapes, name tag */
function ArchChrome({ stickers, name = 'Lais' }) {
  const s = stickers || ['Senior PD', 'Design Systems', 'B2B SaaS', 'Florianópolis'];
  return (
    <>
      <span className="lw-pc-shape shape-dot lw-fv-a" style={{ top: '12%', left: '4%' }}></span>
      <span className="lw-pc-shape shape-square lw-fv-b" style={{ bottom: '8%', left: '0%' }}></span>
      <svg className="lw-pc-shape shape-plus lw-fv-c" viewBox="0 0 32 32" style={{ top: '6%', right: '14%' }}>
        <path d="M16 4 V28 M4 16 H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
      </svg>
      <span className="lw-pc-shape shape-dot lw-fv-d" style={{ bottom: '18%', right: '-2%', background: 'var(--clay-brand-lavender, #b8a4ed)' }}></span>

      <span className="lw-pc-sticker s1">{s[0]}</span>
      <span className="lw-pc-sticker s2">{s[1]}</span>
      <span className="lw-pc-sticker s3">{s[2]}</span>
      <span className="lw-pc-sticker s4">{s[3]}</span>
      <span className="lw-pc-name">{name}</span>
    </>
  );
}

/* ── Variant 1: photo-card (original, kept) ──────────────────────── */
function PhotoCard() {
  return (
    <div className="lw-pc">
      <div className="lw-pc-frame lw-fv-a tone-peach">
        <img src={(window.bundledUrl ? window.bundledUrl("assets/lais-portrait.png") : "assets/lais-portrait.png")} alt="Lais Welter" />
        <span className="lw-pc-grain"></span>
      </div>
      <ArchChrome />
    </div>
  );
}

/* ── Variant 2: shape-arch ── Clay shapes composition inside arch ── */
function ShapeArch() {
  return (
    <div className="lw-pc">
      <div className="lw-pc-frame lw-fv-a tone-peach">
        <div className="lw-arch-inner">
          {/* Soft pill stripe behind */}
          <span className="lw-arch-shape pill-peach" style={{ top: '14%', left: '8%' }}></span>
          {/* Cream blob — anchor of the composition */}
          <span className="lw-arch-shape blob-cream lw-fv-c" style={{ top: '26%', left: '14%' }}></span>
          {/* Big pink dot */}
          <span className="lw-arch-shape dot-pink lw-fv-a" style={{ top: '38%', right: '12%' }}></span>
          {/* Lavender dot */}
          <span className="lw-arch-shape dot-lav lw-fv-b" style={{ bottom: '22%', left: '18%' }}></span>
          {/* Ochre dot */}
          <span className="lw-arch-shape dot-och lw-fv-d" style={{ bottom: '34%', right: '24%' }}></span>
          {/* Teal dot */}
          <span className="lw-arch-shape dot-teal lw-fv-c" style={{ top: '54%', left: '38%' }}></span>
          {/* Highlight */}
          <span className="lw-pc-grain"></span>
        </div>
      </div>
      <ArchChrome />
    </div>
  );
}

/* ── Variant 3: mark-arch ── Big italic "lw." mark inside arch ───── */
function MarkArch() {
  return (
    <div className="lw-pc">
      <div className="lw-pc-frame lw-fv-a tone-cream">
        <div className="lw-arch-inner">
          {/* Accents */}
          <span className="lw-arch-shape dot-pink lw-fv-b" style={{ top: '12%', right: '14%', width: '12%' }}></span>
          <span className="lw-arch-shape dot-lav lw-fv-c" style={{ bottom: '18%', left: '10%', width: '10%' }}></span>
          <span className="lw-arch-shape dot-och lw-fv-d" style={{ top: '58%', right: '8%', width: '8%' }}></span>

          <div style={{
            position: 'absolute', inset: 0,
            display: 'grid', placeItems: 'center'
          }}>
            <div className="lw-arch-mark lw-fv-c">
              lw<span className="dot"></span>
            </div>
          </div>
          {/* Small label */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: '14%',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '3px',
            color: 'var(--lw-muted, #6a6a6a)'
          }}>
            LAIS WELTER · SR PRODUCT DESIGNER
          </div>
          <span className="lw-pc-grain"></span>
        </div>
      </div>
      <ArchChrome />
    </div>
  );
}

/* ── Variant 4: system-arch ── Abstract design-system sketch ─────── */
function SystemArch() {
  return (
    <div className="lw-pc">
      <div className="lw-pc-frame lw-fv-a tone-cream">
        <div className="lw-arch-inner">
          {/* Color accents — represent a brand palette */}
          <span className="lw-arch-shape dot-pink"  style={{ top: '8%',  left: '10%', width: '12%' }}></span>
          <span className="lw-arch-shape dot-lav"   style={{ top: '8%',  left: '24%', width: '12%' }}></span>
          <span className="lw-arch-shape dot-och"   style={{ top: '8%',  left: '38%', width: '12%' }}></span>

          {/* Wireframe cards */}
          <div className="lw-arch-system">
            <div className="lw-arch-card c1 lw-fv-c">
              <span className="lw-arch-card-row tall accent"></span>
              <span className="lw-arch-card-row short"></span>
              <span className="lw-arch-card-row"></span>
              <span className="lw-arch-card-row short"></span>
            </div>
            <div className="lw-arch-card c2 lw-fv-b">
              <span className="lw-arch-card-row tall"></span>
              <span className="lw-arch-card-row"></span>
              <span className="lw-arch-card-row short"></span>
            </div>
            <div className="lw-arch-card c3 lw-fv-d">
              <span className="lw-arch-card-row tall accent"></span>
              <span className="lw-arch-card-row"></span>
              <span className="lw-arch-card-row short"></span>
            </div>
          </div>
          <span className="lw-pc-grain"></span>
        </div>
      </div>
      <ArchChrome stickers={['Design Systems', 'Components', 'Designed with Claude', 'Brazil']} name="B2B/B2C" />
    </div>
  );
}

/* ── Variant 5: typographic ── Big LW mark + clay shapes (no arch) ─ */
function Typographic() {
  return (
    <div className="lw-tg">
      <svg viewBox="0 0 520 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g className="lw-fv-a">
          <circle cx="80" cy="120" r="46" fill="var(--clay-brand-pink, #ff4d8b)"></circle>
        </g>
        <g className="lw-fv-b">
          <rect x="380" y="60" width="120" height="68" rx="34" fill="var(--clay-brand-peach, #ffb084)"></rect>
        </g>
        <g className="lw-fv-c">
          <circle cx="440" cy="420" r="40" fill="var(--clay-brand-lavender, #b8a4ed)"></circle>
        </g>
        <g className="lw-fv-d">
          <path d="M 40 380 Q 100 360 90 430 Q 80 470 40 460 Q 10 450 40 380 Z" fill="var(--clay-brand-ochre, #e8b94a)"></path>
        </g>

        <text x="260" y="340" textAnchor="middle"
              fontFamily="Outfit, sans-serif" fontWeight="500"
              fontSize="320" letterSpacing="-20"
              fill="var(--lw-ink, #0a0a0a)">l<tspan fontFamily="'Instrument Serif', serif" fontStyle="italic" fontWeight="400" fill="var(--lw-accent, #ff4d8b)">w</tspan>.</text>

        <g transform="translate(260 420)" className="lw-fv-c">
          <rect x="-90" y="-16" width="180" height="32" rx="16" fill="var(--lw-ink, #0a0a0a)"></rect>
          <text x="0" y="6" textAnchor="middle"
                fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600"
                letterSpacing="2" fill="var(--lw-canvas, #fffaf0)">
            DESIGNS THAT SHIP
          </text>
        </g>

        <circle cx="120" cy="460" r="6" fill="var(--clay-brand-teal, #1a3a3a)"></circle>
        <circle cx="490" cy="250" r="8" fill="var(--clay-brand-pink, #ff4d8b)"></circle>
      </svg>
    </div>
  );
}

/* ── Doodle character ─ Hand-drawn ink scene with marginalia ───── */
function DoodleHero() {
  return (
    <div className="lw-doo">
      <svg viewBox="0 0 520 600" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="40" width="440" height="520" rx="18"
              fill="#fffaf0" stroke="rgba(10,10,10,0.18)" strokeWidth="1.5"
              strokeDasharray="6 6" />

        <g transform="translate(260 220)">
          <path className="ink"
                d="M -80 -20 C -85 -90 -50 -130 0 -130 C 60 -130 90 -90 88 -30
                   C 90 -10 100 -5 96 12 C 92 26 80 22 76 18
                   C 78 32 76 50 72 60
                   M -78 -10 C -86 8 -90 30 -76 48
                   M -50 -110 C -38 -125 -10 -120 6 -126" />
          <path className="ink"
                d="M -52 -10 C -60 38 -52 80 -20 92 C 18 100 58 80 64 38 C 70 -8 50 -30 16 -30" />
          <path className="ink-thin" d="M -32 14 C -22 8 -10 8 -2 14" />
          <path className="ink-thin" d="M 18 14 C 28 8 40 8 48 14" />
          <circle className="ink-fill" cx="-18" cy="28" r="3" />
          <circle className="ink-fill" cx="32"  cy="28" r="3" />
          <circle className="accent" cx="-26" cy="52" r="6" opacity="0.6" />
          <circle className="accent" cx="40"  cy="52" r="6" opacity="0.6" />
          <path className="ink" d="M -4 60 C 4 70 18 70 26 60" />
          <path className="ink-thin" d="M 6 30 C 4 42 4 48 10 52" />
          <circle className="accent" cx="-52" cy="54" r="3" />
        </g>

        <path className="ink"
              d="M 232 314 L 232 340 C 200 350 170 380 158 430 L 362 430 C 350 380 320 350 288 340 L 288 314" />
        <path className="accent-stroke"
              d="M 232 348 C 240 360 280 360 288 348"
              fill="none" strokeWidth="3" />

        <g transform="translate(120 380) rotate(-8)">
          <rect x="-22" y="-20" width="44" height="40" rx="6" fill="none"
                stroke="var(--lw-ink, #0a0a0a)" strokeWidth="2.4" />
          <path className="ink" d="M 22 -10 C 36 -10 36 14 22 14" />
          <path className="ink-thin" d="M -10 -32 C -8 -38 -4 -38 -2 -32 M 2 -32 C 4 -38 8 -38 10 -32" />
          <text x="0" y="6" textAnchor="middle"
                fontFamily="'Instrument Serif', serif" fontStyle="italic"
                fontSize="14" fill="var(--lw-ink, #0a0a0a)">design</text>
        </g>

        <g transform="translate(420 410) rotate(20)">
          <polygon className="ink-fill" points="0,0 6,-2 6,-50 0,-52" />
          <polygon points="0,0 6,-2 3,8" fill="var(--clay-brand-pink, #ff4d8b)" />
          <rect x="0" y="-58" width="6" height="8" fill="var(--clay-brand-ochre, #e8b94a)" />
        </g>

        <circle cx="92"  cy="120" r="10" fill="var(--clay-brand-pink, #ff4d8b)" />
        <rect   x="412"  y="110" width="22" height="22" rx="6"
                fill="var(--clay-brand-lavender, #b8a4ed)"
                transform="rotate(14 423 121)" />
        <path d="M 96 510 L 130 520 L 116 488 Z" fill="var(--clay-brand-ochre, #e8b94a)" />

        <g stroke="var(--lw-ink, #0a0a0a)" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M 80 70 L 80 90 M 70 80 L 90 80" />
          <path d="M 440 80 L 440 96 M 432 88 L 448 88" />
          <path d="M 60 460 L 60 472 M 54 466 L 66 466" />
        </g>

        <path className="accent-stroke" strokeWidth="3" fill="none"
              d="M 180 550 C 220 542 260 558 300 548 C 320 544 340 552 360 548" />
      </svg>

      <span className="lw-doo-tag t1">designs that ship</span>
      <span className="lw-doo-tag t2">senior PD</span>
      <span className="lw-doo-tag t3">B2B SaaS · systems</span>
      <span className="lw-doo-tag t4">Florianópolis · BR</span>

      <svg className="lw-doo-arrow a1" viewBox="0 0 56 32">
        <path d="M 4 16 C 18 4 36 4 50 16 M 42 8 L 50 16 L 42 24"
              fill="none" stroke="var(--lw-ink, #0a0a0a)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="lw-doo-arrow a2" viewBox="0 0 56 32">
        <path d="M 4 16 C 18 4 36 4 50 16 M 42 8 L 50 16 L 42 24"
              fill="none" stroke="var(--lw-ink, #0a0a0a)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>);
}

/* ── Flat illustrated character ─ Friendly clay-color person at desk ──── */
function FlatCharHero() {
  return (
    <div className="lw-flat">
      <div className="lw-flat-scene lw-fv-a">
        <span className="lw-flat-bg"></span>
        <svg viewBox="0 0 480 600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="160" r="80" fill="#fff5e6" opacity="0.6" />
          <g transform="translate(70 380)">
            <path d="M 0 80 L 50 80 L 44 130 L 6 130 Z" fill="#1a3a3a" />
            <path d="M 25 80 C 18 50 4 30 -8 22 C -2 38 8 60 18 78" fill="#5a8a4a" />
            <path d="M 25 78 C 30 40 50 22 64 18 C 56 36 42 60 30 78" fill="#6fa05a" />
            <path d="M 25 78 C 22 60 22 40 26 24 C 30 40 32 60 30 78" fill="#7fb068" />
          </g>
          <rect x="0" y="500" width="480" height="100" fill="#f5ead8" />

          <g transform="translate(160 430)">
            <rect x="0" y="0" width="180" height="100" rx="8" fill="#0a0a0a" />
            <rect x="6" y="6" width="168" height="88" rx="4" fill="#b8a4ed" />
            <rect x="16" y="20" width="60" height="6" rx="3" fill="#fff" opacity="0.85" />
            <rect x="16" y="34" width="100" height="6" rx="3" fill="#fff" opacity="0.7" />
            <rect x="16" y="48" width="80" height="6" rx="3" fill="#fff" opacity="0.7" />
            <rect x="100" y="62" width="56" height="20" rx="10" fill="#ff4d8b" />
            <rect x="-10" y="100" width="200" height="6" rx="3" fill="#0a0a0a" />
          </g>

          <g transform="translate(360 470)">
            <rect x="0" y="0" width="40" height="44" rx="4" fill="#fffaf0" stroke="#0a0a0a" strokeWidth="2" />
            <path d="M 40 8 C 54 8 54 32 40 32" fill="none" stroke="#0a0a0a" strokeWidth="2" />
            <path d="M 12 -8 C 14 -14 18 -14 20 -8 M 24 -8 C 26 -14 30 -14 32 -8"
                  fill="none" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          <g transform="translate(240 340)">
            <path d="M -100 160 C -100 80 -50 30 0 30 C 50 30 100 80 100 160 Z" fill="#ff4d8b" />
            <rect x="-22" y="-10" width="44" height="40" rx="6" fill="#e8b89a" />
            <ellipse cx="0" cy="-50" rx="70" ry="80" fill="#e8b89a" />
            <path d="M -70 -50 C -76 -120 -36 -148 0 -148 C 36 -148 76 -120 70 -50
                     C 78 -20 88 0 76 14 C 60 -8 56 10 50 28 Z"
                  fill="#3a2a1a" />
            <path d="M -76 -50 C -86 -10 -98 20 -84 40 C -64 14 -56 -20 -60 -40" fill="#3a2a1a" />
            <path d="M -28 -50 C -22 -55 -16 -55 -10 -50" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 10 -50 C 16 -55 22 -55 28 -50" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
            <ellipse cx="-19" cy="-38" rx="2.5" ry="3.5" fill="#0a0a0a" />
            <ellipse cx="19"  cy="-38" rx="2.5" ry="3.5" fill="#0a0a0a" />
            <circle cx="-30" cy="-22" r="6" fill="#ff4d8b" opacity="0.45" />
            <circle cx="30"  cy="-22" r="6" fill="#ff4d8b" opacity="0.45" />
            <path d="M -10 -10 C -2 -2 8 -2 14 -10" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="-66" cy="-22" r="3" fill="#e8b94a" />
            <circle cx="66"  cy="-22" r="3" fill="#e8b94a" />
            <g stroke="#0a0a0a" strokeWidth="2" fill="none">
              <circle cx="-19" cy="-38" r="13" />
              <circle cx="19"  cy="-38" r="13" />
              <line x1="-6" y1="-38" x2="6" y2="-38" />
            </g>
            <rect x="-12" y="40" width="24" height="6" rx="3" fill="#fff" opacity="0.55" />
          </g>

          <circle cx="60"  cy="80"  r="10" fill="#e8b94a" />
          <rect   x="400" y="320" width="20" height="20" rx="6" fill="#1a3a3a" transform="rotate(14 410 330)" />
          <path d="M 50 250 L 50 268 M 41 259 L 59 259" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <span className="lw-flat-chip f1">Senior PD</span>
      <span className="lw-flat-chip f2">Design Systems</span>
      <span className="lw-flat-chip f3">B2B SaaS</span>
      <span className="lw-flat-chip f4">Florianópolis</span>
    </div>);
}

/* ── Editorial type-collage ─ Oversized serif with inline image cells ── */
function EditorialHero() {
  return (
    <div className="lw-ed">
      <div className="lw-ed-stage">
        <span className="lw-ed-tag">Portfolio ’26</span>
        <div className="lw-ed-row">
          <span>lais</span>
          <span className="lw-ed-cell rect tone-pink lw-fv-a">
            <image-slot id="hero-ed-1" placeholder="Drop a portrait" shape="rounded" radius="20" src={(window.bundledUrl ? window.bundledUrl("assets/lais-portrait.png") : "assets/lais-portrait.png")}></image-slot>
          </span>
        </div>
        <div className="lw-ed-row right">
          <span className="lw-ed-cell circle tone-peach lw-fv-b">
            <image-slot id="hero-ed-2" placeholder="Sticker" shape="circle"></image-slot>
          </span>
          <span>welter</span>
          <span className="lw-ed-cell pill tone-lavender lw-fv-c">
            <image-slot id="hero-ed-3" placeholder="Screenshot" shape="pill"></image-slot>
          </span>
        </div>
        <div className="lw-ed-row">
          <span>& co</span>
          <span className="amp">.</span>
          <span className="lw-ed-cell rect tone-ochre lw-fv-d">
            <image-slot id="hero-ed-4" placeholder="Work shot" shape="rounded" radius="20"></image-slot>
          </span>
        </div>
        <div className="lw-ed-foot">
          <span className="pulse"></span>
          Senior product designer · B2B SaaS · Design Systems
        </div>
      </div>
    </div>);
}

function HeroVisual({ variant = 'shape-arch' }) {
  useHeroVisualStyles();
  if (variant === 'photo-card')   return <PhotoCard />;
  if (variant === 'mark-arch')    return <MarkArch />;
  if (variant === 'system-arch')  return <SystemArch />;
  if (variant === 'typographic')  return <Typographic />;
  if (variant === 'doodle')       return <DoodleHero />;
  if (variant === 'flat-char')    return <FlatCharHero />;
  if (variant === 'type-collage') return <EditorialHero />;
  return <ShapeArch />;
}

window.HeroVisual = HeroVisual;
