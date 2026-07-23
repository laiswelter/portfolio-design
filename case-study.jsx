/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSlider */
const { useEffect, useState, useMemo } = React;

// Helper: delegates to the shared window.bundledUrl (defined once in
// image-slot.js) which handles both the standalone single-file bundle
// (window.__resources) and the multi-file GitHub Pages layout
// (window.ASSET_BASE-prefixed relative path). Local fallback kept in case
// image-slot.js hasn't loaded yet.
function bundledUrl(path) {
  if (!path || typeof path !== 'string' || !path.startsWith('assets/')) return path;
  if (window.bundledUrl) return window.bundledUrl(path);
  const id = path.replace(/^assets\//, '').replace(/\.[^.]+$/, '');
  return window.__resources && window.__resources[id] || path;
}

/* ───────────────────────── Top nav (per case page) ──────────────────── */
function CaseNav({ next }) {
  return (
    <header className="lw-nav lw-nav--cs">
      <div className="lw-wrap lw-nav-inner">
        <a className="lw-nav-brand" href={window.HOME_HREF} data-cursor="hover">
          <span className="lw-nav-brand-mark" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="20" r="9" fill="var(--lw-accent)"></circle>
              <circle cx="27" cy="20" r="9" fill="var(--lw-ink)"></circle>
            </svg>
          </span>
          lais welter.
        </a>
        <div className="lw-nav-right">
          <nav className="lw-nav-links" aria-label="Primary">
            <a className="lw-nav-link" href={window.HOME_HREF + '#work'}>{t('Work')}</a>
            <a className="lw-nav-link" href={window.HOME_HREF + '#about'}>{t('About')}</a>
            <a className="lw-nav-link" href={window.HOME_HREF + '#contact'}>{t('Contact')}</a>
          </nav>
          <LangToggle />
          <a className="lw-nav-cta" href={window.HOME_HREF}>
            <span className="arr">←</span> {t('All work')}
          </a>
        </div>
      </div>
    </header>);
}

/* ───────────────────────── Slot helper (image-slot) ──────────────────── */
function Slot({ slug, slot, aspect, className }) {
  if (!slot) return null;
  const id = `${slug}-${slot.id}`;
  const effAspect = slot.aspect || aspect;
  const inner =
  <div className={`lw-cs-slot ${slot.fit === 'contain' ? 'lw-cs-slot--contain' : ''} ${className || ''}`} style={effAspect ? { aspectRatio: effAspect } : null}>
      <image-slot
      id={id}
      placeholder={slot.label || 'Drop an image'}
      shape="rounded"
      radius="20"
      fit={slot.fit || 'cover'}
      hug={slot.fit === 'contain' ? '' : null}
      src={bundledUrl(slot.src) || null}>
      </image-slot>
    </div>;
  if (!slot.caption) return inner;
  return (
    <figure className={`lw-cs-figure ${className || ''}`}>
      {inner}
      <figcaption className="lw-cs-figcaption">{slot.caption}</figcaption>
    </figure>);
}

/* ───────────────────── Carousel of image-slots ───────────────────────── */
function Carousel({ slug, items, caption, className }) {
  if (!items || !items.length) return null;
  const [idx, setIdx] = React.useState(0);
  const n = items.length;
  const go = (d) => setIdx((p) => (p + d + n) % n);
  const fig =
  <figure className={`lw-cs-carousel ${className || ''}`}>
      <div className="lw-cs-carousel-stage">
        <button
        type="button"
        className="lw-cs-carousel-nav prev"
        aria-label={t('Previous image')}
        onClick={() => go(-1)}>‹</button>
        <div className="lw-cs-carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {items.map((it, j) =>
        <div className="lw-cs-carousel-slide" key={j}>
              <image-slot
            id={`${slug}-${it.id}`}
            placeholder={it.label || `Final design ${j + 1}`}
            shape="rounded"
            radius="20"
            fit="contain"
            hug=""
            src={bundledUrl(it.src) || null}>
              </image-slot>
            </div>
        )}
        </div>
        <button
        type="button"
        className="lw-cs-carousel-nav next"
        aria-label={t('Next image')}
        onClick={() => go(1)}>›</button>
      </div>
      <div className="lw-cs-carousel-dots" role="tablist">
        {items.map((_, j) =>
      <button
        type="button"
        key={j}
        className={`lw-cs-carousel-dot ${j === idx ? 'is-active' : ''}`}
        aria-label={`Go to image ${j + 1}`}
        aria-selected={j === idx}
        onClick={() => setIdx(j)}></button>
      )}
      </div>
      {caption && <figcaption className="lw-cs-figcaption">{caption}</figcaption>}
    </figure>;
  return fig;
}

/* ───────────────────── Before / After comparison ─────────────────────── */
function BeforeAfter({ slug, data, className }) {
  if (!data) return null;
  const cell = (item, tag, isAfter) =>
  <figure className="lw-cs-ba-cell">
      <span className={`lw-cs-ba-tag ${isAfter ? 'is-after' : ''}`}>{tag}</span>
      <div className="lw-cs-ba-media">
        <image-slot
        id={`${slug}-${item.id}`}
        placeholder={item.label || tag}
        shape="rounded"
        radius="16"
        fit="contain"
        hug=""
        src={bundledUrl(item.src) || null}>
        </image-slot>
      </div>
    </figure>;
  return (
    <div className={`lw-cs-ba ${className || ''}`}>
      {cell(data.before, t('Before'), false)}
      {cell(data.after, t('After'), true)}
    </div>);
}

/* ───────────────────── Hero ──────────────────────────────────────────── */
function CaseHero({ p }) {
  const totalNum = '04';
  return (
    <section id="cs-hero" className="lw-cs-hero" data-screen-label="Hero">
      <div className="lw-wrap">
        <a className="lw-cs-back" href={window.HOME_HREF + '#work'} data-cursor="hover">
          <span className="arr">←</span> {t('Back to all work')}
        </a>
        <div className="lw-cs-hero-meta">
          <span>{p.num} / {totalNum}</span>
          <span>{p.year}</span>
          <span>{p.industry}</span>
        </div>
        <h1 className="lw-cs-h1" style={{ fontSize: "72px" }}>{p.title}</h1>
        <p className="lw-cs-intro">{p.intro}</p>

        <div className="lw-cs-facts">
          {(p.facts || [
          { k: t('Client'), v: p.client },
          { k: t('Role'), v: p.role },
          { k: t('Timeline'), v: p.timeline },
          { k: t('Platform'), v: p.platform },
          { k: t('Team'), v: p.team }]).
          map((f, i) =>
          <div key={i}><span className="k">{f.k}</span><span className="v">{f.v}</span></div>
          )}
        </div>
      </div>

      <div className="lw-wrap">
        <div className={`lw-cs-cover tone-${p.tone}`}>
          <image-slot
            id={`${p.slug}-hero-cover`}
            placeholder={`${p.client} cover image`}
            shape="rounded"
            radius="24"
            fit={p.heroFit || 'cover'}
            hug={p.heroFit === 'contain' ? '' : null}
            src={bundledUrl(p.hero) || null}>
          </image-slot>
        </div>
      </div>
    </section>);
}

/* ───────────────────────── Rich content blocks ──────────────────────── */
function StatGrid({ stats, className }) {
  if (!stats || !stats.length) return null;
  return (
    <div className={`lw-cs-statgrid ${className || ''}`}>
      {stats.map((s, j) =>
      <div className="lw-cs-statcard" key={j}>
          {s.eyebrow && <span className="lw-cs-statcard-eyebrow">{s.eyebrow}</span>}
          <span className="lw-cs-statcard-k">{s.k}</span>
          <h4 className="lw-cs-statcard-label">{s.label}</h4>
          {s.sub && <p className="lw-cs-statcard-sub">{s.sub}</p>}
        </div>
      )}
    </div>);
}

function Highlight({ data, className }) {
  if (!data) return null;
  return (
    <div className={`lw-cs-highlight tone-${data.tone || 'dark'} ${className || ''}`}>
      {data.eyebrow && <span className="lw-cs-highlight-eyebrow">{data.eyebrow}</span>}
      <p className="lw-cs-highlight-body">{data.body}</p>
      {data.who && <span className="lw-cs-highlight-who">{data.who}</span>}
    </div>);
}

function ComparisonGrid({ items, className }) {
  if (!items || !items.length) return null;
  return (
    <div className={`lw-cs-cmp ${className || ''}`}>
      {items.map((it, j) =>
      <div className={`lw-cs-cmp-card ${it.picked ? 'is-picked' : ''} ${it.items ? 'has-items' : ''}`} key={j}>
          {it.eyebrow && <span className="lw-cs-cmp-eyebrow">{it.eyebrow}</span>}
          <h4 className="lw-cs-cmp-title">{it.title}</h4>
          {it.body && <p className="lw-cs-cmp-body">{it.body}</p>}
          {it.items &&
        <ul className="lw-cs-cmp-items">
              {it.items.map((b, k) => <li key={k}><span className="dot" aria-hidden="true"></span><span>{b}</span></li>)}
            </ul>
        }
          {it.picked && <span className="lw-cs-cmp-flag">{t('Picked')}</span>}
        </div>
      )}
    </div>);
}

function InsightCard({ data }) {
  if (!data) return null;
  return (
    <div className="lw-cs-insight">
      <div className="lw-cs-insight-head">
        <span className="lw-cs-insight-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 3a7 7 0 0 0-4 12.7V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 22h4M9 18h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
        <span className="lw-cs-insight-title">{data.title || t('Research diagnostic')}</span>
        {data.badge && <span className="lw-cs-insight-badge">{data.badge}</span>}
      </div>
      <div className="lw-cs-insight-rows">
        {data.rows.map((r, j) =>
        <div className="lw-cs-insight-row" key={j}>
            <span className="lw-cs-insight-label">{r.label}</span>
            <p className="lw-cs-insight-body">{r.body}</p>
          </div>
        )}
      </div>
    </div>);
}

function Bento({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="lw-cs-bento">
      {items.map((it, j) =>
      <div className={`lw-cs-bento-cell tone-${it.tone || 'light'} size-${it.size || 'md'}`} key={j}>
          {it.eyebrow && <span className="lw-cs-bento-eyebrow">{it.eyebrow}</span>}
          <span className="lw-cs-bento-k">{it.k}</span>
          {it.label && <h4 className="lw-cs-bento-label">{it.label}</h4>}
          {it.sub && <p className="lw-cs-bento-sub">{it.sub}</p>}
          {it.spark &&
        <svg className="lw-cs-bento-spark" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d={it.spark} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        }
        </div>
      )}
    </div>);
}

function NumberedList({ items, intro }) {
  if (!items || !items.length) return null;
  return (
    <div className="lw-cs-nlist-wrap">
      {intro && <p className="lw-cs-nlist-intro">{intro}</p>}
      <ol className="lw-cs-nlist">
        {items.map((it, j) =>
        <li className="lw-cs-nlist-item" key={j}>
            <span className="lw-cs-nlist-num" aria-hidden="true">{String(j + 1).padStart(2, '0')}</span>
            <div className="lw-cs-nlist-body">
              <h4 className="lw-cs-nlist-title">{it.title}</h4>
              {it.body && <p className="lw-cs-nlist-text">{it.body}</p>}
            </div>
          </li>
        )}
      </ol>
    </div>);
}

/* 3-col card grid — small light cards w/ eyebrow + title + body */
function CardGrid({ items, className }) {
  if (!items || !items.length) return null;
  return (
    <div className={`lw-cs-cardgrid ${className || ''}`}>
      {items.map((it, j) =>
      <div className="lw-cs-cardgrid-cell" key={j}>
          {it.eyebrow && <span className="lw-cs-cardgrid-eyebrow">{it.eyebrow}</span>}
          {it.k && <span className="lw-cs-cardgrid-k">{it.k}</span>}
          <h4 className="lw-cs-cardgrid-title">{it.title}</h4>
          {it.body && <p className="lw-cs-cardgrid-body">{it.body}</p>}
        </div>
      )}
    </div>);
}

/* 3-up row of image-slots inside a tinted panel (used for Authentication screens) */
function SlotRow({ slug, items, panelTone, className, caption }) {
  if (!items || !items.length) return null;
  const panel =
  <div className={`lw-cs-slotrow tone-${panelTone || 'cream'} ${className || ''}`}>
      <div className="lw-cs-slotrow-inner">
        {items.map((it, j) =>
      <div className="lw-cs-slotrow-cell" key={j}>
            <image-slot
          id={`${slug}-${it.id}`}
          placeholder={it.label || 'Screen'}
          shape="rounded"
          radius="16"
          src={bundledUrl(it.src) || null}>
            </image-slot>
          </div>
      )}
      </div>
    </div>;
  if (!caption) return panel;
  return (
    <figure className={`lw-cs-figure ${className || ''}`}>
      {panel}
      <figcaption className="lw-cs-figcaption">{caption}</figcaption>
    </figure>);
}

/* ───────────────────────── Paragraphs / Chapter ──────────────────────── */
function Paragraphs({ items, className }) {
  if (!items) return null;
  const arr = Array.isArray(items) ? items : [items];
  const cls = className || 'lw-cs-para';
  return arr.map((t, i) => <p className={cls} key={i} style={{ margin: "44px 0px 18px" }}>{t}</p>);
}

function Chapter({ p, c, i, anchorId, displayNum, bulletStyle, layout, slotOutside, constraintStyle }) {
  const bulletCls = `lw-cs-bullets lw-cs-bullets--${bulletStyle || 'numbered'}`;
  const riskCls = `${bulletCls} lw-cs-bullets--risk`;
  // Alternating section background (Briza pattern) applied to every case:
  // even chapters = plain (dotted canvas), odd chapters = tint band.
  const bg = c.bg || (i % 2 === 1 ? 'tint' : 'plain');
  const sectionCls = `lw-cs-chapter cs-layout-${layout || 'two-col'} cs-bg-${bg}`;

  // Render a single block's content (paragraphs, bullets, stats, etc).
  const renderBlockBody = (b, key) =>
  <React.Fragment key={key}>
      {b.intro && <p className="lw-cs-lede">{b.intro}</p>}
      <Paragraphs items={b.paragraphs} />

      {b.intersection &&
    <div className="lw-cs-intersection">
          {b.intersection.map((t, j) =>
      <span className="lw-cs-intersection-tag" key={j}>{t}</span>
      )}
        </div>
    }

      {b.bullets &&
    <ul className={bulletCls}>
          {b.bullets.map((bb, j) =>
      <li key={j}>
              <span className="bullet" aria-hidden="true">{String(j + 1).padStart(2, '0')}</span>
              <span>{bb}</span>
            </li>
      )}
        </ul>
    }

      {b.risks &&
    <div className="lw-cs-risks">
          {b.risks.intro && <p className="lw-cs-risks-intro">{b.risks.intro}</p>}
          <ul className={riskCls}>
            {b.risks.items.map((bb, j) =>
        <li key={j}>
                <span className="bullet" aria-hidden="true">{String(j + 1).padStart(2, '0')}</span>
                <span>{bb}</span>
              </li>
        )}
          </ul>
        </div>
    }

      {b.constraints && (constraintStyle === 'cards' ?
    <div className="lw-cs-tradecards">
          {b.constraints.map((row, j) =>
      <div className="lw-cs-tradecard" key={j}>
              <span className="lw-cs-tradecard-num" aria-hidden="true">{String(j + 1).padStart(2, '0')}</span>
              <h4 className="lw-cs-tradecard-who">{row.who}</h4>
              <p className="lw-cs-tradecard-want">{row.want}</p>
            </div>
      )}
        </div> :
    <div className="lw-cs-constraints">
          {b.constraints.map((row, j) =>
      <div className="lw-cs-constraint" key={j}>
              <span className="lw-cs-constraint-who">{row.who}</span>
              <span className="lw-cs-constraint-want">{row.want}</span>
            </div>
      )}
        </div>)
    }

      {b.options &&
    <div className="lw-cs-options">
          {b.options.map((o, j) =>
      <div className={`lw-cs-option ${o.picked ? 'is-picked' : ''}`} key={j}>
              <div className="lw-cs-option-head">
                <span className="lw-cs-option-tag">{o.tag}</span>
                {o.picked && <span className="lw-cs-option-badge">{t('Picked')}</span>}
              </div>
              <h4 className="lw-cs-option-title">{o.title}</h4>
              <p className="lw-cs-option-body">{o.body}</p>
            </div>
      )}
        </div>
    }

      {b.outro && <Paragraphs items={b.outro} className="lw-cs-para lw-cs-para--strong" />}
      {b.followUp && <p className="lw-cs-para lw-cs-para--muted">{b.followUp}</p>}

      {b.pullquote &&
    <blockquote className="lw-cs-pull" style={{ textAlign: "center" }}>
          <span aria-hidden="true" className="lw-cs-pull-mark">"</span>
          {b.pullquote}
        </blockquote>
    }

      {b.highlight && <Highlight data={b.highlight} />}
      {b.stats && <StatGrid stats={b.stats} />}
      {b.comparison && <ComparisonGrid items={b.comparison} />}
      {b.insightCard && <InsightCard data={b.insightCard} />}
      {b.bento && <Bento items={b.bento} />}
      {b.numberedList && <NumberedList items={b.numberedList} intro={b.numberedListIntro} />}

      {!slotOutside && b.slot && <Slot slug={p.slug} slot={b.slot} />}
      {!slotOutside && b.cardGrid && <CardGrid items={b.cardGrid} />}
      {!slotOutside && b.slotRow && <SlotRow slug={p.slug} items={b.slotRow} panelTone={b.slotRowTone} caption={b.slotRowCaption} />}
      {!slotOutside && b.carousel && <Carousel slug={p.slug} items={b.carousel} caption={b.carouselCaption} />}
      {!slotOutside && b.beforeAfter && <BeforeAfter slug={p.slug} data={b.beforeAfter} />}
    </React.Fragment>;


  // Chapter has either explicit `blocks` (new schema) or flat fields (legacy → wrap as single block).
  const blocks = Array.isArray(c.blocks) && c.blocks.length > 0 ? c.blocks : [c];

  return (
    <section
      id={anchorId}
      className={sectionCls}
      data-screen-label={c.eyebrow || c.title} style={{ fontFamily: "Inter" }}>
      {blocks.map((b, bi) =>
      <div className="lw-wrap" key={bi}>
          <div className="lw-cs-twocol">
            <div className="lw-cs-twocol-l">
              {bi === 0 ?
            <>
                  <span className="lw-cs-chapter-num">{String(displayNum).padStart(2, '0')}</span>
                  {c.eyebrow && <span className="lw-eyebrow">{c.eyebrow}</span>}
                  <h2 className="lw-cs-h2">{c.title}</h2>
                  {b.subhead && <span className="lw-cs-subhead">{b.subhead}</span>}
                </> :

            b.subhead && <span className="lw-cs-subhead">{b.subhead}</span>
            }
            </div>
            <div className="lw-cs-twocol-r">
              {renderBlockBody(b, `body-${bi}`)}
            </div>
          </div>

          {slotOutside && b.slot && <Slot slug={p.slug} slot={b.slot} className="lw-cs-slot--wide" />}
          {slotOutside && b.cardGrid && <CardGrid items={b.cardGrid} className="lw-cs-cardgrid--wide" />}
          {slotOutside && b.slotRow && <SlotRow slug={p.slug} items={b.slotRow} panelTone={b.slotRowTone} caption={b.slotRowCaption} className="lw-cs-slotrow--wide" />}
          {slotOutside && b.carousel && <Carousel slug={p.slug} items={b.carousel} caption={b.carouselCaption} className="lw-cs-carousel--wide" />}
          {slotOutside && b.beforeAfter && <BeforeAfter slug={p.slug} data={b.beforeAfter} className="lw-cs-ba--wide" />}
        </div>
      )}
    </section>);
}

/* ───────────────────────── Section breakers ──────────────────────────── */
function SectionBody({ body }) {
  if (!body) return null;
  if (typeof body === 'string') return <p className="lw-cs-block-body">{body}</p>;
  return (
    <div className="lw-cs-block-body-flow">
      {body.map((item, i) => {
        if (typeof item === 'string') {
          return <p className="lw-cs-block-body" key={i}>{item}</p>;
        }
        if (item && item.h) {
          return <h4 className="lw-cs-block-subhead" key={i}>{item.h}</h4>;
        }
        return null;
      })}
    </div>);
}

function SectionBlock({ p, s, i, anchorId }) {
  return (
    <section
      id={anchorId}
      className="lw-cs-section"
      data-screen-label={s.title}>
      <div className="lw-wrap">
        <div className="lw-cs-block">
          <span className="lw-cs-block-idx">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="lw-cs-h3">{s.title}</h3>
          <SectionBody body={s.body} />
          {s.slot && <Slot slug={p.slug} slot={s.slot} />}
          {!s.slot && s.media &&
          <div className={`lw-cs-shot tone-${s.tone || p.tone}`}>
              <image-slot
              id={`${p.slug}-section-${i}`}
              placeholder={`${s.title} visual`}
              shape="rounded"
              radius="20"
              src={bundledUrl(s.media) || null}>
              </image-slot>
            </div>
          }
        </div>
      </div>
    </section>);
}

/* ───────────────────────── Outcomes / Learnings / Reflection ─────────── */
function CaseOutcomes({ p }) {
  if (!p.outcomes || !p.outcomes.length) return null;
  return (
    <section id="cs-outcomes" className="lw-cs-section lw-cs-outcomes-wrap" data-screen-label="Outcomes">
      <div className="lw-wrap">
        <span className="lw-eyebrow">{t('Outcomes')}</span>
        <h2 className="lw-cs-h2">{t('What it moved')}</h2>
        <div className="lw-cs-outcomes">
          {p.outcomes.map((m, i) =>
          <div className="lw-cs-outcome" key={i}>
              <div className="lw-cs-outcome-k">{m.k}</div>
              <div className="lw-cs-outcome-label">
                {m.label}
                {m.sub && <><br /><span className="sub">{m.sub}</span></>}
              </div>
            </div>
          )}
        </div>

        {p.quote &&
        <figure className="lw-cs-quote">
            <blockquote>{p.quote.text}</blockquote>
            <figcaption>{p.quote.who}</figcaption>
          </figure>
        }
      </div>
    </section>);
}

function CaseLearnings({ data }) {
  if (!data) return null;
  return (
    <section id="cs-learnings" className="lw-cs-learnings-wrap" data-screen-label="Learnings">
      <div className="lw-wrap">
        <div className="lw-cs-learnings">
          <span className="lw-eyebrow lw-eyebrow--onDark">{data.eyebrow}</span>
          <h2 className="lw-cs-h2 lw-cs-h2--onDark">{data.title}</h2>
          <div className="lw-cs-learnings-body">
            <Paragraphs items={data.paragraphs} />
          </div>
        </div>
      </div>
    </section>);
}

function CaseReflection({ data, slug }) {
  if (!data) return null;
  return (
    <section id="cs-reflection" className="lw-cs-section lw-cs-reflection-wrap" data-screen-label="Reflection" style={{ padding: "96px 0px" }}>
      <div className="lw-wrap">
        <div className="lw-cs-reflection">
          <span className="lw-eyebrow">{data.eyebrow}</span>
          <h2 className="lw-cs-h2">{data.title}</h2>
          <div className="lw-cs-reflection-body">
            <Paragraphs items={data.paragraphs} />
          </div>
          {data.slot && <Slot slug={slug} slot={data.slot} className="lw-cs-slot--reflect" />}
        </div>
      </div>
    </section>);
}

/* ───────────────────────── Next + Contact + Footer ───────────────────── */
function CaseNext({ next }) {
  if (!next) return null;
  return (
    <section className="lw-cs-section lw-cs-next" style={{ padding: "96px 0px" }}>
      <div className="lw-wrap">
        <div className="lw-cs-next-card">
          <div className="lw-cs-next-text">
            <span className="lw-eyebrow">{t('Next case')}</span>
            <h3 className="lw-cs-h2">
              <a href={`${window.CS_HREF}#${next.slug}`} data-cursor="hover">{next.nextLabel || `${next.client} → ${next.title}`}</a>
            </h3>
            <div className="lw-cs-next-row">
              <a className="lw-btn lw-btn-dark" href={`${window.CS_HREF}#${next.slug}`} data-cursor="hover">
                {t('See case study')} <span className="arr">↗</span>
              </a>
              <a className="lw-btn lw-btn-ghost" href={window.HOME_HREF + '#work'} data-cursor="hover">
                {t('All work')}
              </a>
            </div>
          </div>
          <a
            className={`lw-cs-next-media tone-${next.tone}`}
            href={`${window.CS_HREF}#${next.slug}`}
            data-cursor="hover"
            aria-label={`Open ${next.client} case study`}>
            <image-slot
              id={`next-preview-${next.slug}`}
              placeholder={`Drop a new ${next.client.split('·')[0].trim()} image`}
              shape="rounded"
              radius="20"
              fit="contain"
              hug=""
              src={bundledUrl(next.hero)}>
            </image-slot>
          </a>
        </div>
      </div>
    </section>);
}

function CaseContact() {
  return (
    <section className="lw-cta-wrap">
      <div className="lw-wrap">
        <div className="lw-cta2">
          <div className="lw-cta2-top">
            <div className="lw-cta2-avatar">
              <img src={bundledUrl('assets/lais-portrait.png')} alt="Lais Welter" />
              <span className="lw-cta2-avatar-dot" aria-hidden="true"></span>
            </div>
            <div className="lw-cta2-status">
              <span className="lw-cta2-status-k">Currently</span>
              <span className="lw-cta2-status-v">{t('Open to senior product roles & select project work for Q3 2026.')}</span>
            </div>
          </div>
          <h2 className="lw-cta2-h" dangerouslySetInnerHTML={tHTML('Have a problem worth <span class="ital">designing</span> around?')}></h2>
          <p className="lw-cta2-p">{t('The fastest way to reach me is email. Replies usually land within a day.')}</p>
          <div className="lw-cta2-grid">
            <a className="lw-cta2-card lw-cta2-card--primary" href="mailto:laiswelter.a@gmail.com">
              <span className="lw-cta2-card-k">{t('Email')}</span>
              <span className="lw-cta2-card-v">laiswelter.a@gmail.com</span>
              <span className="arr">↗</span>
            </a>
            <a className="lw-cta2-card" href="https://www.linkedin.com/in/lais-welter-de-abreu/" target="_blank" rel="noopener">
              <span className="lw-cta2-card-k">LinkedIn</span>
              <span className="lw-cta2-card-v">linkedin.com/in/lais-welter-de-abreu</span>
              <span className="arr">↗</span>
            </a>
            <a className="lw-cta2-card" href={window.HOME_HREF + '#work'}>
              <span className="lw-cta2-card-k">{t('More work')}</span>
              <span className="lw-cta2-card-v">{t('All case studies')}</span>
              <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>);
}

function CaseFooter() {
  return (
    <footer className="lw-foot">
      <div className="lw-wrap">
        <div className="lw-foot-inner">
          <small>© {new Date().getFullYear()} Lais Welter · {t('designed & built from scratch')}</small>
          <div className="lw-foot-links">
            <a className="lw-foot-link" href="mailto:laiswelter.a@gmail.com">Email</a>
            <a className="lw-foot-link" href="https://www.linkedin.com/in/lais-welter-de-abreu/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a className="lw-foot-link" href={window.HOME_HREF + '#work'}>Work</a>
            <a className="lw-foot-link" href={window.HOME_HREF + '#about'}>About</a>
          </div>
        </div>
      </div>
    </footer>);
}

/* ───────────────────────── TOC sidebar + scroll-spy ──────────────────── */
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0] || null);
  useEffect(() => {
    if (!ids.length) return;
    let visibleIds = new Set();
    const order = new Map(ids.map((id, i) => [id, i]));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visibleIds.add(e.target.id);else
          visibleIds.delete(e.target.id);
        });
        if (visibleIds.size) {
          const sorted = [...visibleIds].sort((a, b) => order.get(a) - order.get(b));
          setActive(sorted[0]);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);
  return active;
}

/* ──────────── Scroll-reveal: content eases in on entry ───────────────── */
function useReveal(slug) {
  useEffect(() => {
    const sel = [
    '.lw-cs-twocol-l', '.lw-cs-twocol-r', '.lw-cs-ba-cell',
    '.lw-cs-slot--wide', '.lw-cs-slotrow--wide', '.lw-cs-carousel--wide',
    '.lw-cs-cardgrid--wide', '.lw-cs-figure', '.lw-cs-pull'].
    join(', ');
    const els = Array.from(document.querySelectorAll(sel));
    if (!els.length) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('lw-reveal', 'in'));
      return;
    }
    els.forEach((el) => el.classList.add('lw-reveal'));
    // Scroll-driven so it works reliably everywhere (no hidden-iframe IO gaps);
    // an initial pass reveals whatever is already on screen.
    const pending = els.slice();
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = pending.length - 1; i >= 0; i--) {
        const r = pending[i].getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          pending[i].classList.add('in');
          pending.splice(i, 1);
        }
      }
      if (!pending.length) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
    const onScroll = () => {if (!raf) raf = requestAnimationFrame(check);};
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [slug]);
}

/* ──────────── Thin accent bar tracking read progress ─────────────────── */
function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('lw-cs-progress');
    if (!bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };
    const onScroll = () => {if (!raf) raf = requestAnimationFrame(update);};
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

function CaseToc({ items, active, side }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem('lw-cs-toc-collapsed') === '1'; } catch (e) { return false; }
  });
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
    setOpen(false);
  };
  const toggleCollapsed = () => {
    setCollapsed((c) => {
      const next = !c;
      try { localStorage.setItem('lw-cs-toc-collapsed', next ? '1' : '0'); } catch (e) {}
      return next;
    });
  };

  return (
    <>
      <button
        type="button"
        className={`lw-cs-toc-toggle ${open ? 'is-open' : ''}`}
        aria-label="Toggle table of contents"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}>
        <span className="dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
        <span>{t('Sections')}</span>
      </button>

      {collapsed ?
      <button
        type="button"
        className={`lw-cs-toc-mini cs-toc-${side || 'right'}`}
        aria-label={t('Show sections')}
        data-cursor="hover"
        onClick={toggleCollapsed}>
        <span className="dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </button> :

      <nav className={`lw-cs-toc cs-toc-${side || 'right'} ${open ? 'is-open' : ''}`} aria-label="On this page">
        <div className="lw-cs-toc-headrow">
          <span className="lw-cs-toc-head">{t('On this page')}</span>
          <button
            type="button"
            className="lw-cs-toc-collapse"
            aria-label={t('Hide sections')}
            data-cursor="hover"
            onClick={toggleCollapsed}>
            ×
          </button>
        </div>
        <ol className="lw-cs-toc-list">
          {items.map((it, i) =>
          <li key={it.id} className={active === it.id ? 'is-active' : ''}>
              <a href={`#${it.id}`} onClick={(e) => handleClick(e, it.id)} data-cursor="hover">
                <span className="lw-cs-toc-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="lw-cs-toc-label">{it.label}</span>
              </a>
            </li>
          )}
        </ol>
      </nav>}
    </>);
}

/* ───────────────────────── App ───────────────────────────────────────── */
function CaseStudyApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const lang = useLang();
  const [slug, setSlug] = useState(() => (window.location.hash || '#briza').replace('#', ''));

  useEffect(() => {
    const onHash = () => {
      setSlug((window.location.hash || '#briza').replace('#', ''));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'cream');
    document.documentElement.toggleAttribute('data-dots', true);
  }, []);

  // Apply background tone tweak to <html>
  useEffect(() => {
    const tone = t.bgTone || 'warm-white';
    document.documentElement.setAttribute('data-bg', tone);
    return () => document.documentElement.removeAttribute('data-bg');
  }, [t.bgTone]);

  useEffect(() => {
    const id = setTimeout(() => {if (window.__lwHideLoader) window.__lwHideLoader();}, 1400);
    return () => clearTimeout(id);
  }, []);

  const DATA = (lang === 'pt' && window.CASE_DATA_PT) ? window.CASE_DATA_PT : (window.CASE_DATA_EN || window.CASE_DATA);
  const p = DATA[slug] || DATA.briza;
  const next = p.next ? DATA[p.next] : null;

  useEffect(() => {
    document.title = `${p.client} · Case study · Lais Welter`;
  }, [p.client]);

  // Build TOC items + anchor ids. TOC only contains the macro chapters (max ~6).
  const { tocItems, chapterStart, tailStart } = useMemo(() => {
    const items = [];
    const chapters = p.chapters || [];
    const sections = p.sections || [];
    const tail = p.chaptersTail || [];

    chapters.forEach((c, i) => {
      items.push({ id: `cs-ch-${i}`, label: c.tocLabel || c.eyebrow || c.title });
    });
    tail.forEach((c, i) => {
      items.push({ id: `cs-cht-${i}`, label: c.tocLabel || c.eyebrow || c.title });
    });

    return {
      tocItems: items,
      chapterStart: 1,
      tailStart: 1 + chapters.length
    };
  }, [p]);

  const active = useScrollSpy(tocItems.map((i) => i.id));
  useReveal(slug);
  useScrollProgress();

  const chapters = p.chapters || [];
  const sections = p.sections || [];
  const tail = p.chaptersTail || [];

  // BMW / automotive case gets layout tweaks. Briza gets the same wide-media + image-scale treatment.
  const isBmw = slug === 'automotive';
  const isBriza = slug === 'briza';
  const wideMedia = !!p.wideMedia || isBmw;
  const chapterLayout = isBmw ? t.bmwLayout || 'two-col' : 'two-col';
  const tocSide = 'right';
  const imageScale = isBmw ?
  Number(t.bmwImageScale) || 110 :
  isBriza ?
  Number(t.brizaImageScale) || 100 :
  100;
  const scaled = isBmw || isBriza;

  const rootCls = `lw-cs ${isBmw ? 'cs-page-bmw' : ''} ${isBriza ? 'cs-page-briza' : ''} ${scaled ? 'cs-img-scaled' : ''} ${wideMedia ? 'cs-wide-media' : ''}`;
  const rootStyle = scaled ? { '--cs-img-scale': imageScale } : null;

  return (
    <div id="top" className={rootCls} style={rootStyle}>
      <div id="lw-cs-progress" className="lw-cs-progress" aria-hidden="true"></div>
      <CaseNav next={next} />
      <CaseToc items={tocItems} active={active} side={tocSide} />
      <CaseHero p={p} />

      {chapters.length > 0 &&
      <div className="lw-cs-chapters">
          {chapters.map((c, i) =>
        <Chapter
          key={`c-${i}`}
          p={p}
          c={c}
          i={i}
          displayNum={chapterStart + i}
          anchorId={`cs-ch-${i}`}
          bulletStyle={t.bulletStyle}
          layout={chapterLayout}
          constraintStyle={t.tradeoffStyle || 'cards'}
          slotOutside={wideMedia} />
        )}
        </div>
      }

      {sections.length > 0 &&
      <div className="lw-cs-sections">
          {sections.map((s, i) =>
        <SectionBlock
          key={`s-${i}`}
          p={p}
          s={s}
          i={i}
          anchorId={`cs-sec-${i}`} />
        )}
        </div>
      }

      {tail.length > 0 &&
      <div className="lw-cs-chapters">
          {tail.map((c, i) =>
        <Chapter
          key={`t-${i}`}
          p={p}
          c={c}
          i={i}
          displayNum={tailStart + i}
          anchorId={`cs-cht-${i}`}
          bulletStyle={t.bulletStyle}
          layout={chapterLayout}
          constraintStyle={t.tradeoffStyle || 'cards'}
          slotOutside={wideMedia} />
        )}
        </div>
      }

      <CaseOutcomes p={p} />
      {p.learnings && <CaseLearnings data={p.learnings} />}
      {p.reflection && <CaseReflection data={p.reflection} slug={p.slug} />}
      <CaseNext next={next} />
      <CaseContact />
      <CaseFooter />

      <TweaksPanel title="Case study tweaks">
        <TweakSection label="Background tone" />
        <TweakRadio
          label="Canvas color"
          value={t.bgTone || 'warm-white'}
          options={[
          { value: 'cream', label: 'Cream (original)' },
          { value: 'warm-white', label: 'Warm white (default)' },
          { value: 'off-white', label: 'Off-white' },
          { value: 'pure-white', label: 'Pure white' }]
          }
          onChange={(v) => setTweak('bgTone', v)} />

        <TweakSection label="Bullet style" />
        <TweakRadio
          label="Treatment"
          value={t.bulletStyle || 'numbered'}
          options={[
          { value: 'numbered', label: 'Numbered (default)' },
          { value: 'stickers', label: 'Clay stickers' },
          { value: 'stepper', label: 'Connected stepper' },
          { value: 'cards', label: 'Tinted cards' }]
          }
          onChange={(v) => setTweak('bulletStyle', v)} />

        <TweakSection label="Tradeoff & stakeholder blocks" />
        <TweakRadio
          label="Layout"
          value={t.tradeoffStyle || 'cards'}
          options={[
          { value: 'cards', label: 'Cards (default)' },
          { value: 'text', label: 'Text' }]
          }
          onChange={(v) => setTweak('tradeoffStyle', v)} />

        {isBriza && <>
          <TweakSection label="Briza imagery" />
          <TweakSlider
            label="Image size"
            value={Number(t.brizaImageScale) || 100}
            min={70} max={140} step={5} unit="%"
            onChange={(v) => setTweak('brizaImageScale', v)} />
        </>}

        {isBmw && <>
          <TweakSection label="BMW case layout" />
          <TweakRadio
            label="Chapter layout"
            value={t.bmwLayout || 'two-col'}
            options={[
            { value: 'two-col', label: 'Two-column (default)' },
            { value: 'centered', label: 'Centered, title on top' }]
            }
            onChange={(v) => setTweak('bmwLayout', v)} />
          <TweakSlider
            label="Image size"
            value={Number(t.bmwImageScale) || 110}
            min={70} max={140} step={5} unit="%"
            onChange={(v) => setTweak('bmwImageScale', v)} />
        </>}
      </TweaksPanel>
    </div>);
}

window.__CaseStudyApp = CaseStudyApp;
if (!window.__COMBINED) {
  ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudyApp />);
}