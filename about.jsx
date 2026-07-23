/* global React */
function About({ tweaks }) {
  const showSkills = tweaks?.showSkills !== false;
  return (
    <section id="about" className="lw-about lw-section">
      <div className="lw-wrap">
        <div className="lw-about-grid">
          <div className="lw-about-portrait lw-reveal">
            <img src={(window.bundledUrl ? window.bundledUrl("assets/lais-portrait.png") : "assets/lais-portrait.png")} alt="Lais Welter" />
            <div className="lw-about-portrait-caption">
              <span className="k">Lais Welter</span>
              <span className="v">{t('Senior Product Designer · Florianópolis')}</span>
            </div>
          </div>

          <div className="lw-about-body lw-reveal">
            <span className="lw-eyebrow">{t('About me')}</span>
            <h3 dangerouslySetInnerHTML={tHTML('Senior <span class="ital">product designer</span> who ships first and decorates never.')}></h3>
            <p dangerouslySetInnerHTML={tHTML("I'm <strong>Lais Welter</strong>, a product designer based in Brazil working remotely with teams in the US and EU. Six years shipping production work across B2B SaaS, mobility, EdTech, and logistics. I've worked end&#8209;to&#8209;end on creator platforms, connected&#8209;car experiences, assessment commerce, and logistics workspaces.")}></p>
            <p dangerouslySetInnerHTML={tHTML("I do my best work in the messy middle, where ops, data, and real users collide. I map the flows nobody quite understands, make the hard calls with engineers, and ship things that hold up after launch.")}></p>

            {showSkills &&
            <div className="lw-cap">
                <div className="lw-cap-row">
                  <span className="lw-cap-k">{t('Practice')}</span>
                  <p className="lw-cap-v" dangerouslySetInnerHTML={tHTML('Product design, end-to-end. Heavy on <em>UX research</em>, <em>design systems</em>, and <em>prototyping</em>, comfortable enough on the front-end to ship my own HTML/CSS when it speeds things up.')}></p>
                </div>
                <div className="lw-cap-row">
                  <span className="lw-cap-k">{t('Tools')}</span>
                  <p className="lw-cap-v" dangerouslySetInnerHTML={tHTML('<em>Figma</em>, FigJam, Tokens Studio, ProtoPie, Linear, Notion, Maze, Storybook. Whatever the team uses.')}></p>
                </div>
                <div className="lw-cap-row">
                  <span className="lw-cap-k">{t('How I work')}</span>
                  <p className="lw-cap-v">
                    {t('Outcomes over outputs. Tight loops with engineering. A reason behind every decision. Default to shipping, then refining what survives contact with users.')}
                  </p>
                </div>
                <div className="lw-cap-row">
                  <span className="lw-cap-k">{t('Industries')}</span>
                  <p className="lw-cap-v">
                    {t('B2B SaaS, creator economy, automotive and mobility, EdTech, logistics. Comfortable wherever the data is messy and the stakes are real.')}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}

window.About = About;