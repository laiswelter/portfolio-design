/* global React */
const { useEffect, useRef, useState } = React;

/**
 * "Results" band — sits between the hero and My Work.
 * Four outcome cards with count-up numbers, on a dark teal-tinted band
 * so it reads as a rhythm break regardless of the active theme.
 */
const RESULTS = [
{
  value: 83, suffix: '%',
  title: 'Faster workflows',
  desc: 'Reduced same-day carrier sourcing from 12 minutes to 2 at Loadsmart.'
},
{
  value: 50, suffix: '%',
  title: 'Faster shipping',
  desc: 'A Figma-based design system that cut delivery cycles across the whole product team.'
},
{
  value: 20, suffix: '%',
  title: 'More checkouts completed',
  desc: 'Redesigned the Express Checkout, driving a 20% lift in completed transactions from returning users.'
},
{
  value: 77, suffix: '%',
  title: 'Clear progress without guidance',
  desc: '77% of drivers understood their progress without any assistance.'
}];


function CountUp({ to, suffix, duration = 1500 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVal(to); return; }

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const check = () => {
      if (started.current) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.9 && r.bottom > 0) {
        started.current = true;
        run();
        window.removeEventListener('scroll', check);
        window.removeEventListener('resize', check);
      }
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="lw-res-num">
      {val}<span className="lw-res-pct">{suffix}</span>
    </span>);

}

function Results() {
  return (
    <section className="lw-results">
      <div className="lw-wrap">
        <div className="lw-res-head">
          <span className="lw-res-eyebrow">
            <span className="lw-res-eyebrow-dot"></span>
            {t('Results')}
          </span>
          <h2 className="lw-res-heading" dangerouslySetInnerHTML={tHTML('Outcomes, not just <span class="ital">deliverables</span>.')}></h2>
        </div>
        <div className="lw-res-grid">
          {RESULTS.map((r, i) =>
          <div className="lw-result" key={i}>
              <CountUp to={r.value} suffix={r.suffix} />
              <span className="lw-res-title">{t(r.title)}</span>
              <span className="lw-res-desc">{t(r.desc)}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Results = Results;
