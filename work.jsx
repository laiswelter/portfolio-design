/* global React */
const { useEffect } = React;

/**
 * Home "Selected work" — horizontal rows.
 * Each project = client name (heading), short overview, tag pills,
 * "See case study" pill, paired with a tonal media frame.
 * Layout alternates: even rows = media right, odd rows = media left.
 */
const HOME_PROJECTS = [
{
  slug: 'automotive',
  num: '01',
  year: '2024',
  client: 'Global automotive brand · Companion app',
  title: 'Driving long-term engagement through behavioral design',
  blurb:
  "A progression-based driving experience for a global automotive brand. I helped reframe a ‘gamification’ brief into a behavioral progression system, challenges, milestones, and streak protection, designed to feel premium, not arcade.",
  tags: ['Product Designer · 2025', 'Automotive · Mobility', 'iOS · Android'],
  media: 'assets/bmw-hero.png',
  tone: 'dark'
},
{
  slug: 'briza',
  num: '02',
  year: '2026',
  client: 'Briza',
  tag: 'Creator economy',
  title: 'Building product foundations from zero with AI-assisted workflows',
  blurb:
  "An early-stage creator platform designed from the ground up. I led foundational UX, auth, onboarding, creator management, and integrated AI-assisted workflows to accelerate exploration and reduce ambiguity during the zero-to-one phase.",
  tags: ['Senior Product Designer · 2025', 'Creator economy · Early-stage SaaS', 'Web app'],
  media: 'assets/home-briza.webp',
  tone: 'cream'
},
{
  slug: 'alice',
  num: '03',
  year: '2024',
  client: 'Alice · Loadsmart',
  tag: 'Logistics',
  title: 'Redesigning carrier sourcing workflows during a critical operational transition',
  blurb:
  "After Loadsmart discontinued DAT, a tool Carrier Sales Reps depended on for same-day load sourcing, I redesigned sourcing workflows in four weeks, giving reps centralized visibility into carrier relationships and active contracts. Sourcing time dropped 83% during same-day operations.",
  tags: ['Lead Product Designer · 2024', 'Logistics · Supply chain', 'Web workflow'],
  media: 'assets/home-alice.webp',
  tone: 'dark'
},
{
  slug: 'pearson',
  num: '04',
  year: '2025',
  client: 'Pearson · Assessment',
  tag: 'Ecommerce',
  title: 'Designing a context-aware Express Checkout experience',
  blurb:
  "A scalable, adaptive checkout for Pearson's assessment ecosystem. The system dynamically routes returning customers into Express, partial-edit, or fallback flows based on history, account context, and product eligibility, without breaking the complex purchasing rules underneath.",
  tags: ['Lead Product Designer · 2024', 'EdTech · Clinical assessments', 'Responsive web'],
  media: 'assets/pearson-hero.png',
  tone: 'lavender'
}];


function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.lw-reveal'));
    if (!els.length) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { els.forEach((el) => el.classList.add('in')); return; }
    // Scroll-driven so it works reliably everywhere (no hidden-iframe IO gaps);
    // an initial pass reveals whatever is already on screen.
    const pending = els.slice();
    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = pending.length - 1; i >= 0; i--) {
        const r = pending[i].getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          pending[i].classList.add('in');
          pending.splice(i, 1);
        }
      }
      if (!pending.length) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    check();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

function WorkRow({ p, idx }) {
  const flip = idx % 2 === 1;
  return (
    <article className={`lw-wrow lw-reveal ${flip ? 'flip' : ''}`}>
      <div className="lw-wrow-body">
        <div className="lw-wrow-meta">
          <span className="lw-wrow-num">{p.num} <em>/ 04</em></span>
          <span className="lw-wrow-year">{p.year}</span>
        </div>
        <h3 className="lw-wrow-client" style={{ fontSize: "50px" }}>{t(p.title)}</h3>
        <p className="lw-wrow-title">{t(p.client)}</p>
        <p className="lw-wrow-blurb">{t(p.blurb)}</p>
        <div className="lw-wrow-tags">
          {p.tags.map((tag, i) => <span key={i} className="lw-wrow-tag">{t(tag)}</span>)}
        </div>
        <a className="lw-btn lw-btn-dark lw-wrow-cta" href={`${window.CS_HREF}#${p.slug}`} data-cursor="hover">
          {t('See case study')}
          <span className="arr">↗</span>
        </a>
      </div>

      <a className={`lw-wrow-media tone-${p.tone}`} href={`${window.CS_HREF}#${p.slug}`} data-cursor="hover" aria-label={`Open ${p.client} case study`}>
        <image-slot
          id={`home-media-${p.slug}`}
          placeholder={`Drop a new ${p.client.split('·')[0].trim()} image`}
          shape="rounded"
          radius="20"
          fit="contain"
          hug=""
          src={(window.bundledUrl ? window.bundledUrl(p.media) : p.media)}>
        </image-slot>
        <span className="lw-wrow-media-tag">{t(p.tag || p.client.split('·')[0].trim())}</span>
      </a>
    </article>);

}

function Work() {
  useReveal();
  return (
    <section id="work" className="lw-section lw-work-home">
      <div className="lw-wrap">
        <h2 className="lw-work-home-title" style={{ fontSize: "64px" }}>{t('My Work')}</h2>
        <div className="lw-wrow-list">
          {HOME_PROJECTS.map((p, i) => <WorkRow key={p.slug} p={p} idx={i} />)}
        </div>
      </div>
    </section>);

}

window.Work = Work;