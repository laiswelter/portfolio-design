/* global React, HeroVisual */
const { useEffect } = React;

function Hero({ tweaks }) {
  const variant = tweaks?.heroVariant || 'photo-card';

  return (
    <section className="lw-hero">
      <div className="lw-wrap">
        <div className="lw-hero-grid">
          <div>
            <span className="lw-hero-tag">
              <span className="lw-hero-tag-dot"></span>
              {t('Available for Senior Product Design roles · Remote from Brazil')}
            </span>
            <h1 dangerouslySetInnerHTML={tHTML('I turn <span class="ital">complex operations</span> into products people actually use.')}></h1>
            <p className="lw-hero-sub" dangerouslySetInnerHTML={tHTML("Hi, I'm <strong>Lais Welter</strong>, senior product designer with 6+ years working across B2B SaaS, design systems, and end&#8209;to&#8209;end product work for teams from seed to enterprise. I've shipped checkout flows, creator platforms, logistics tools, and connected&#8209;car experiences. My job is to find the logic underneath the mess and make it feel obvious.")}></p>
            <div className="lw-hero-ctas">
              <a className="lw-btn lw-btn-dark" href="#work">
                {t('See selected work')}
                <span className="arr">→</span>
              </a>
              <a className="lw-btn lw-btn-ghost" href="#about">
                {t('More about me')}
              </a>
            </div>

            <div className="lw-hero-meta">
              <div className="lw-hero-meta-item">
                <span className="lw-hero-meta-k">{t('Based in')}</span>
                <span className="lw-hero-meta-v">Florianópolis · BR</span>
              </div>
              <div className="lw-hero-meta-item">
                <span className="lw-hero-meta-k">{t('Currently')}</span>
                <span className="lw-hero-meta-v">{t('Open to new work')}</span>
              </div>
              <div className="lw-hero-meta-item">
                <span className="lw-hero-meta-k">{t('Focus')}</span>
                <span className="lw-hero-meta-v">{t('B2B SaaS · Design systems')}</span>
              </div>
            </div>
          </div>

          <div className="lw-sig">
            <HeroVisual variant={variant} />
          </div>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;