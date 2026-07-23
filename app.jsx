/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, Hero, Results, Work, About, Contact, Footer */
const { useEffect } = React;

function Nav() {
  return (
    <header className="lw-nav">
      <div className="lw-wrap lw-nav-inner">
        <a className="lw-nav-brand" href="#top" data-cursor="hover">
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
            <a className="lw-nav-link" href="#work">{t('Work')}</a>
            <a className="lw-nav-link" href="#about">{t('About')}</a>
            <a className="lw-nav-link" href="#contact">{t('Contact')}</a>
          </nav>
          <LangToggle />
          <a className="lw-nav-cta" href="#contact">
            {t("Let's talk")} <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function PortfolioApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useLang();

  // Apply theme/accent to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme || 'cream');
    const hex = t.accentHex || '#ff4d8b';
    document.documentElement.style.setProperty('--lw-accent', hex);
    const h = hex.replace('#','');
    const x = h.length === 3 ? h.replace(/./g,c=>c+c) : h.padEnd(6,'0');
    const n = parseInt(x.slice(0,6),16) || 0;
    const r=(n>>16)&255, g=(n>>8)&255, b=n&255;
    const light = (r*299+g*587+b*114) > 148000;
    document.documentElement.style.setProperty('--lw-on-accent', light ? '#0a0a0a' : '#ffffff');
  }, [t.theme, t.accentHex]);

  // Background dots toggle
  useEffect(() => {
    document.documentElement.toggleAttribute('data-dots', t.dots !== false);
  }, [t.dots]);

  // Cursor toggle
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const off = t.cursor === 'off';
    if (dot)  dot.style.display  = off ? 'none' : '';
    if (ring) ring.style.display = off ? 'none' : '';
    document.body.style.cursor = off ? 'auto' : 'none';
  }, [t.cursor]);

  // Hide loader once mounted
  useEffect(() => {
    const onLoaded = () => { if (window.__lwHideLoader) window.__lwHideLoader(); };
    const id = setTimeout(onLoaded, 2400);
    return () => clearTimeout(id);
  }, []);

  return (
    <div id="top">
      <Nav />
      <Hero tweaks={t} />
      <Results />
      <Work tweaks={t} />
      <About tweaks={t} />
      <Contact />
      <Footer />

      <TweaksPanel title="Portfolio tweaks">
        <TweakSection label="Surface" />
        <TweakRadio
          label="Theme"
          value={t.theme}
          options={[
            { value: 'cream', label: 'Cream' },
            { value: 'dark',  label: 'Dark'  },
            { value: 'paper', label: 'Paper' }
          ]}
          onChange={(v) => setTweak('theme', v)} />
        <TweakColor
          label="Accent"
          value={t.accentHex}
          options={[
            '#ff4d8b',
            '#ffb084',
            '#b8a4ed',
            '#e8b94a',
            '#1a3a3a',
            '#a4d4c5'
          ]}
          onChange={(v) => setTweak('accentHex', v)} />
        <TweakToggle
          label="Dotted background"
          value={t.dots !== false}
          onChange={(v) => setTweak('dots', v)} />

        <TweakSection label="Hero visual" />
        <TweakRadio
          label="Style"
          value={t.heroVariant}
          options={[
            { value: 'shape-arch',   label: 'Clay shapes'       },
            { value: 'mark-arch',    label: 'Lettermark'        },
            { value: 'system-arch',  label: 'Design system'     },
            { value: 'photo-card',   label: 'Photo card'        },
            { value: 'typographic',  label: 'Type · lw mark'    },
            { value: 'doodle',       label: 'Doodle character'  },
            { value: 'flat-char',    label: 'Flat illustration' },
            { value: 'type-collage', label: 'Editorial collage' }
          ]}
          onChange={(v) => setTweak('heroVariant', v)} />

        <TweakSection label="About" />
        <TweakToggle
          label="Show capabilities block"
          value={t.showSkills !== false}
          onChange={(v) => setTweak('showSkills', v)} />

        <TweakSection label="Cursor" />
        <TweakRadio
          label="Style"
          value={t.cursor}
          options={[
            { value: 'dot-ring', label: 'Dot+Ring' },
            { value: 'off',      label: 'Off' }
          ]}
          onChange={(v) => setTweak('cursor', v)} />
      </TweaksPanel>
    </div>
  );
}

window.__PortfolioApp = PortfolioApp;
if (!window.__COMBINED) {
  ReactDOM.createRoot(document.getElementById('root')).render(<PortfolioApp />);
}
