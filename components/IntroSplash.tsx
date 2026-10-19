// First-visit intro: the "M.MEROUANE_" mark draws itself, then the site is revealed.
//
// Design constraints (a recruiter must never wait for content):
//  - Pure CSS, no JS required to dismiss it: it fades out on its own at ~1.3s.
//  - Shown at most once per browser session (decided by a tiny inline script
//    before first paint, so returning pages never flash it).
//  - Never shown with prefers-reduced-motion, or to crawlers without JS:
//    without the html[data-intro] flag the overlay is display:none.
//  - Any click / key / scroll skips it.
//  - Never shown on /forum (QR-code landing page: content must appear instantly).

const decide = `(function(){try{
  var d=document.documentElement;
  if(location.pathname.indexOf('/forum')===0)return;
  if(sessionStorage.getItem('mm-intro'))return;
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  sessionStorage.setItem('mm-intro','1');
  d.setAttribute('data-intro','');
  var skip=function(){d.removeAttribute('data-intro');['click','keydown','wheel','touchstart'].forEach(function(e){removeEventListener(e,skip)})};
  ['click','keydown','wheel','touchstart'].forEach(function(e){addEventListener(e,skip,{passive:true})});
  setTimeout(skip,1600);
}catch(e){}})();`;

export function IntroScript() {
  return <script dangerouslySetInnerHTML={{ __html: decide }} />;
}

export default function IntroSplash() {
  const letters = "MEROUANE".split("");
  return (
    <div className="intro-splash" aria-hidden="true">
      <div className="intro-mark">
        <svg className="intro-frame" viewBox="0 0 88 88" width="88" height="88">
          <rect x="2" y="2" width="84" height="84" rx="20" />
        </svg>
        <span className="intro-m">M</span>
      </div>
      <p className="intro-name">
        <span className="intro-letter" style={{ animationDelay: "0.35s" }}>M</span>
        <span className="intro-letter intro-dot" style={{ animationDelay: "0.4s" }}>.</span>
        {letters.map((l, i) => (
          <span key={i} className="intro-letter" style={{ animationDelay: `${0.45 + i * 0.045}s` }}>
            {l}
          </span>
        ))}
        <span className="intro-cursor">_</span>
      </p>
      <span className="intro-bar" />
    </div>
  );
}
