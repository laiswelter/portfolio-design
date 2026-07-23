/* global React */
/**
 * Lightweight i18n layer for the portfolio.
 * - Language is stored in localStorage ('lw-lang') so it persists across pages.
 * - t(str)   → returns the PT translation when lang==='pt', else the EN source.
 * - tHTML(s) → { __html } for dangerouslySetInnerHTML (rich headings w/ <span>).
 * - useLang()→ React hook; root components call it so the whole tree re-renders.
 * - setLang()→ flips language, persists, updates <html lang>, notifies subs.
 * - LangToggle → EN | PT segmented control (React.createElement, no JSX).
 *
 * Translations live in window.I18N_PT (see i18n-pt.js), keyed by the EN source
 * string with whitespace collapsed. Missing keys fall back to English.
 */
(function () {
  function readLang() {
    // URL folder (/en/, /pt/) is the source of truth — each language has
    // its own real URL on GitHub Pages, so the page itself always knows
    // which language it is.
    try {
      var m = location.pathname.match(/\/(en|pt)(\/|$)/);
      if (m) {
        localStorage.setItem('lw-lang', m[1]);
        return m[1];
      }
    } catch (e) {}
    // Fallbacks for local/dev files opened outside the /en//pt/ folders.
    try {
      var qs = new URLSearchParams(location.search);
      var q = qs.get('lang');
      if (q === 'pt' || q === 'en') {
        localStorage.setItem('lw-lang', q);
        return q;
      }
    } catch (e) {}
    try { return localStorage.getItem('lw-lang') || 'en'; } catch (e) { return 'en'; }
  }

  window.LANG = readLang();
  window.__langSubs = [];

  function normKey(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  window.__normKey = normKey;

  window.t = function (s) {
    if (s == null || window.LANG === 'en') return s;
    var dict = window.I18N_PT || {};
    var k = normKey(s);
    return Object.prototype.hasOwnProperty.call(dict, k) ? dict[k] : s;
  };

  window.tHTML = function (html) {
    return { __html: window.t(html) };
  };

  window.setLang = function (l) {
    if (l !== 'en' && l !== 'pt') l = 'en';
    if (l === window.LANG) return;
    try { localStorage.setItem('lw-lang', l); } catch (e) {}

    // Real navigation to the sibling-language URL (/en/... <-> /pt/...),
    // not just an in-place re-render — each language has its own page.
    try {
      var path = location.pathname;
      var next = /\/(en|pt)(\/|$)/.test(path)
        ? path.replace(/\/(en|pt)(\/|$)/, '/' + l + '$2')
        : '/' + l + '/';
      location.href = next + location.search.replace(/[?&]lang=(en|pt)/, '') + location.hash;
      return;
    } catch (e) {}

    // Fallback (shouldn't normally run): in-place switch.
    window.LANG = l;
    try { document.documentElement.setAttribute('lang', l === 'pt' ? 'pt-BR' : 'en'); } catch (e) {}
    window.__langSubs.slice().forEach(function (fn) { try { fn(l); } catch (e) {} });
  };

  // Reflect persisted language on the root element immediately.
  try { document.documentElement.setAttribute('lang', window.LANG === 'pt' ? 'pt-BR' : 'en'); } catch (e) {}

  window.useLang = function () {
    var R = window.React;
    var st = R.useState(window.LANG);
    R.useEffect(function () {
      var fn = function (l) { st[1](l); };
      window.__langSubs.push(fn);
      // Sync in case language changed between render and effect.
      if (window.LANG !== st[0]) st[1](window.LANG);
      return function () {
        window.__langSubs = window.__langSubs.filter(function (x) { return x !== fn; });
      };
    }, []);
    return st[0];
  };

  window.LangToggle = function (props) {
    var R = window.React;
    var lang = window.useLang();
    var compact = props && props.compact;
    var mk = function (code, label) {
      return R.createElement('button', {
        type: 'button',
        key: code,
        className: 'lw-lang-opt' + (lang === code ? ' is-active' : ''),
        'aria-pressed': lang === code,
        onClick: function () { window.setLang(code); },
        'data-cursor': 'hover'
      }, label);
    };
    return R.createElement(
      'div',
      { className: 'lw-lang' + (compact ? ' lw-lang--compact' : ''), role: 'group', 'aria-label': 'Language / Idioma' },
      mk('en', 'EN'),
      R.createElement('span', { className: 'lw-lang-sep', 'aria-hidden': 'true' }),
      mk('pt', 'PT')
    );
  };
})();
