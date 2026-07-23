/* global */
/**
 * Minimal wordmark loader — pinned brand mark, italic wordmark, thin
 * progress sweep underneath. Plain JS so it runs before Babel finishes.
 */
(function () {
  const wrap = document.createElement('div');
  wrap.id = 'lw-loader';
  wrap.innerHTML = `
    <div class="lw-loader-card">
      <span class="lw-loader-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="20" r="9" fill="#ff4d8b"></circle>
          <circle cx="27" cy="20" r="9" fill="#0a0a0a"></circle>
        </svg>
      </span>
      <div class="lw-loader-wordmark">lais <span class="ital">welter.</span></div>
      <div class="lw-loader-bar"><i></i></div>
      <div class="lw-loader-tag">
        <span class="dot"></span>
        Senior product designer · Portfolio ’26
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  const style = document.createElement('style');
  style.textContent = `
    #lw-loader {
      position: fixed; inset: 0; z-index: 10000;
      background: #fffaf0;
      display: grid; place-items: center;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    #lw-loader.done { opacity: 0; visibility: hidden; }
    #lw-loader .lw-loader-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      opacity: 0;
      transform: translateY(8px);
      animation: lwL-in 0.6s cubic-bezier(.2,.7,.2,1) 0.1s forwards;
    }
    #lw-loader .lw-loader-mark {
      width: 40px; height: 40px;
      display: inline-flex; align-items: center; justify-content: center;
    }
    #lw-loader .lw-loader-mark svg circle:first-child {
      transform-origin: 13px 20px;
      animation: lwL-bob 2.2s cubic-bezier(.4,0,.4,1) infinite;
    }
    #lw-loader .lw-loader-mark svg circle:nth-child(2) {
      transform-origin: 27px 20px;
      animation: lwL-bob 2.2s cubic-bezier(.4,0,.4,1) 0.4s infinite;
    }
    @keyframes lwL-bob {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-2px); }
    }
    #lw-loader .lw-loader-wordmark {
      font-family: 'Outfit', sans-serif;
      font-weight: 500;
      font-size: clamp(40px, 5vw, 56px);
      line-height: 1;
      letter-spacing: -1.4px;
      color: #0a0a0a;
    }
    #lw-loader .lw-loader-wordmark .ital {
      font-family: 'Instrument Serif', serif;
      font-style: italic;
      font-weight: 400;
      color: #ff4d8b;
      letter-spacing: -0.8px;
    }
    #lw-loader .lw-loader-bar {
      width: 160px;
      height: 1.5px;
      background: rgba(10,10,10,0.08);
      border-radius: 1px;
      overflow: hidden;
      margin-top: 4px;
    }
    #lw-loader .lw-loader-bar i {
      display: block;
      height: 100%; width: 0;
      background: #0a0a0a;
      animation: lwL-fill 1.4s cubic-bezier(.45,.05,.55,.95) 0.2s forwards;
    }
    @keyframes lwL-fill {
      0%   { width: 0;    transform: translateX(0); }
      100% { width: 100%; transform: translateX(0); }
    }
    #lw-loader .lw-loader-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      color: #6a6a6a;
    }
    #lw-loader .lw-loader-tag .dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #ff4d8b;
      animation: lwL-pulse 1.4s ease-in-out infinite;
    }
    @keyframes lwL-pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50%      { opacity: 1;   transform: scale(1.2); }
    }
    @keyframes lwL-in {
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  window.__lwHideLoader = function () {
    const el = document.getElementById('lw-loader');
    if (el) {
      el.classList.add('done');
      setTimeout(() => el.remove(), 600);
    }
  };
  // Auto-dismiss after a short, predictable window. Apps call __lwHideLoader on mount too.
  setTimeout(() => window.__lwHideLoader(), 1800);
})();
