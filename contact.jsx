/* global React */
function Contact() {
  return (
    <section id="contact" className="lw-cta-wrap">
      <div className="lw-wrap">
        <div className="lw-cta2 lw-reveal">
          <div className="lw-cta2-top">
            <div className="lw-cta2-avatar">
              <img src={(window.bundledUrl ? window.bundledUrl("assets/lais-portrait.png") : "assets/lais-portrait.png")} alt="Lais Welter" />
              <span className="lw-cta2-avatar-dot" aria-hidden="true"></span>
            </div>
            <div className="lw-cta2-status">
              <span className="lw-cta2-status-k">{t('Currently')}</span>
              <span className="lw-cta2-status-v">{t('Open to Senior Product Design roles.')}</span>
            </div>
          </div>

          <h2 className="lw-cta2-h" dangerouslySetInnerHTML={tHTML('Have a problem worth <span class="ital">solving?</span>')}></h2>
          <p className="lw-cta2-p">
            {t('Email is fastest. I usually reply within a day, or reach out on LinkedIn for a longer conversation.')}
          </p>

          <div className="lw-cta2-grid">
            <a className="lw-cta2-card lw-cta2-card--primary" href="mailto:laiswelter.a@gmail.com" data-cursor="hover">
              <span className="lw-cta2-card-k">{t('Email')}</span>
              <span className="lw-cta2-card-v">laiswelter.a@gmail.com</span>
              <span className="arr">↗</span>
            </a>
            <a className="lw-cta2-card" href="https://www.linkedin.com/in/lais-welter-de-abreu/" target="_blank" rel="noopener" data-cursor="hover">
              <span className="lw-cta2-card-k">LinkedIn</span>
              <span className="lw-cta2-card-v">linkedin.com/in/lais-welter-de-abreu</span>
              <span className="arr">↗</span>
            </a>
          </div>

          <div className="lw-cta2-foot">
            <span dangerouslySetInnerHTML={tHTML('<strong>BRT</strong> · Florianópolis, Brazil')}></span>
            <span>{t('Working remotely with teams in EU & US time zones.')}</span>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="lw-foot">
      <div className="lw-wrap">
        <div className="lw-foot-inner">
          <small>© {new Date().getFullYear()} Lais Welter · {t('designed & built from scratch with Claude Design')}</small>
          <div className="lw-foot-links">
            <a className="lw-foot-link" href="mailto:laiswelter.a@gmail.com">{t('Email')}</a>
            <a className="lw-foot-link" href="https://www.linkedin.com/in/lais-welter-de-abreu/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a className="lw-foot-link" href="#work">{t('Work')}</a>
            <a className="lw-foot-link" href="#about">{t('About')}</a>
          </div>
        </div>
      </div>
    </footer>);

}

window.Contact = Contact;
window.Footer = Footer;