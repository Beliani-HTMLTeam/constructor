export function AdventPopupStyles() {
  return `
<style>
  /* =====================================================
     POPUP
     Every size is in cqw (= 1% of the popup width), so the
     popup scales 1:1 with the design (desktop 967 x 480,
     mobile 257 wide) on any screen.
     ===================================================== */
  .adv-pop, .adv-pop * { box-sizing: border-box; }
 
  .adv-pop {
    display: none;
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 99999;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.55);
    justify-content: center;
    align-items: center;
    line-height: normal;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
  }
  .adv-pop.is-open { display: flex; animation: advPopFadeIn .3s ease-out; }
  .adv-pop.is-closing { animation: advPopFadeOut .3s ease-out forwards; }
  .adv-pop a { color: inherit; text-decoration: none; }
  .adv-pop button:focus-visible,
  .adv-pop a:focus-visible { outline: 2px solid #F6E7E6; outline-offset: 2px; }
 
  /* ---------- Box (desktop 967 x 480) ---------- */
  .adv-pop__content {
    /* desktop font sizes in cqw (967px design width) */
    --fs-body: 2.6;     /* 25px  */
    --fs-head: 5.2;     /* 50px  */
    --fs-pre: 4.9;
    --fw-pre: 600;
    --fs-title: 5.15;   /* 50px  */
    --lh-title: 1.2;
    --fs-sub: 2.6;
    --fs-cta: 1.85;     /* 18px  */
    --gap-pre: 0.3cqw;
    --gap-sub: 1.6cqw;
    --gap-foot: 2.6cqw;
 
    position: relative;
    display: flex;
    flex-direction: row;
    width: min(967px, 100%, calc((100vh - 32px) * 2.0146));
    aspect-ratio: 967 / 480;
    overflow: hidden;
    background: #750000;
    color: #F6E7E6;
    border-radius: 8px;
    font-family: Poppins, sans-serif;
    text-align: left;
    container-type: inline-size;
    animation: advPopOpen .4s cubic-bezier(.175, .885, .32, 1.275);
  }
  .adv-pop.is-closing .adv-pop__content {
    animation: advPopClose .4s cubic-bezier(.6, -.28, .735, .045) forwards;
  }
 
  /* per type – desktop */
  .adv-pop--percent { --fs-pre: 4.9;  --fw-pre: 600; --fs-title: 10.2; --lh-title: 1.02; }
  .adv-pop--upto    { --fs-pre: 4.15; --fw-pre: 400; --fs-title: 7.15; --lh-title: 1.14; --gap-pre: 3.2cqw; --gap-foot: 3cqw; }
  .adv-pop--special { --fs-pre: 3.1;  --fw-pre: 400; --fs-title: 6.1;  --lh-title: 1.05; --fs-sub: 3.1; --gap-pre: 0.2cqw; --gap-sub: 0; }
 
  /* ---------- Close (thin dark-red X on the image) ---------- */
  .adv-pop__close {
    position: absolute;
    top: 6px; right: 10px;
    z-index: 3;
    width: 32px; height: 32px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: none;
    color: #750000;
    cursor: pointer;
  }
  .adv-pop__close svg { width: 24px; height: 24px; display: block; }
 
  /* ---------- Image (right, curved left edge) ---------- */
  .adv-pop__img {
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 54%;
    display: block;
    -webkit-clip-path: ellipse(100% 92% at 100% 46%);
            clip-path: ellipse(100% 92% at 100% 46%);
  }
  .adv-pop__img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 0;
  }
  .adv-pop__m { display: none !important; }
 
  /* ---------- Text (left) ---------- */
  .adv-pop__deal {
    position: relative;
    z-index: 1;
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2.6cqw 1cqw 2.6cqw 4.4cqw;
  }
  .adv-pop__container { display: flex; flex-direction: column; align-items: inherit; max-width: 100%; }
 
  .adv-pop__headline {
    margin-bottom: 5.6cqw;
    font-size: calc(var(--fs-head) * 1cqw);
    font-weight: 700;
    line-height: 1.2;
  }
  .adv-pop__pre {
    font-size: calc(var(--fs-pre) * 1cqw);
    font-weight: var(--fw-pre);
    line-height: 1.15;
  }
  .adv-pop__title {
    font-size: calc(var(--fs-title) * 1cqw);
    font-weight: 700;
    line-height: var(--lh-title);
  }
  .adv-pop__pre + .adv-pop__title { margin-top: var(--gap-pre); }
  .adv-pop__subtitle {
    margin-top: var(--gap-sub);
    font-size: calc(var(--fs-sub) * 1cqw);
    font-weight: 400;
    line-height: 1.25;
  }
 
  /* Code + copy */
  .adv-pop__codes { display: flex; flex-direction: column; gap: 0.3cqw; margin-top: 0.3cqw; }
  .adv-pop__code {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 0.6em;
    font-size: calc(var(--fs-body) * 1cqw);
    line-height: 1.25;
  }
  .adv-pop__code-value { -webkit-user-select: text; user-select: text; }
  .adv-pop__copy {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border: 0;
    background: none;
    color: #F6E7E6;
    cursor: pointer;
  }
  .adv-pop__copy svg { width: 0.85em; height: 0.85em; display: block; }
  .adv-pop__copied { font-size: 0.7em; opacity: .85; }
 
  /* Footer */
  .adv-pop__footer {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    gap: 2cqw;
    margin-top: var(--gap-foot);
  }
  .adv-pop__footer:empty { display: none; }
  .adv-pop__today {
    font-size: calc(var(--fs-body) * 1cqw);
    font-weight: 600;
    line-height: 1.2;
  }
  .adv-pop__cond,
  .adv-pop__cta {
    padding: 0;
    border: 0;
    background: none;
    color: #F6E7E6;
    font-family: inherit;
    font-size: calc(var(--fs-body) * 1cqw);
    font-weight: 400;
    line-height: 1.2;
    text-decoration: underline !important;
    text-underline-offset: 0.15em;
    cursor: pointer;
  }
  .adv-pop__cta { font-size: calc(var(--fs-cta) * 1cqw); font-weight: 700; }
  .adv-pop--special .adv-pop__footer { margin-top: 5.6cqw; }
 
  /* =====================================================
     MOBILE – image on top (curved bottom), text centered
     sizes in cqw of the 257px design width
     ===================================================== */
  @media screen and (max-width: 600px) {
    .adv-pop__content {
      --fs-body: 4.67;   /* 12px */
      --fs-head: 7;      /* 18px */
      --fs-title: 9.7;   /* 25px */
      --fs-sub: 4.67;
      --fs-cta: 4.2;
      --gap-sub: 3cqw;
      --gap-foot: 6.5cqw;
 
      flex-direction: column;
      width: min(300px, 100%);
      aspect-ratio: auto;
      max-height: calc(100vh - 32px);
      overflow-y: auto;
      text-align: center;
    }
    .adv-pop--percent { --fs-pre: 9.7; --fs-title: 19;   --gap-sub: 2.5cqw; }
    .adv-pop--upto    { --fs-pre: 9.7; --fs-title: 11.7; --gap-pre: 4cqw; --lh-title: 1.3; }
    .adv-pop--special { --fs-pre: 6.2; --fs-title: 12.4; --fs-sub: 6.2; --gap-pre: 0.5cqw; --gap-sub: 0; }
 
    .adv-pop__d { display: none !important; }
    .adv-pop__m { display: block !important; }
 
    .adv-pop__close { top: 4px; right: 4px; width: 28px; height: 28px; }
    .adv-pop__close svg { width: 20px; height: 20px; }
 
    .adv-pop__img {
      position: relative;
      top: auto; right: auto; bottom: auto;
      width: 100%;
      flex: none;
      aspect-ratio: 257 / 240;
      -webkit-clip-path: ellipse(105% 100% at 50% 0%);
              clip-path: ellipse(105% 100% at 50% 0%);
    }
 
    .adv-pop__deal {
      width: 100%;
      align-items: center;
      padding: 8cqw 6cqw 9cqw;
    }
    .adv-pop__container { align-items: center; }
    .adv-pop__code { justify-content: center; }
    .adv-pop__headline { margin-bottom: 7cqw; line-height: 1.3; }
    .adv-pop__footer { gap: 5.5cqw; }
    .adv-pop--special .adv-pop__footer { margin-top: 9cqw; }
  }
 
  @keyframes advPopFadeIn  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes advPopFadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes advPopOpen  { from { opacity: 0; transform: scale(.8); } to { opacity: 1; transform: scale(1); } }
  @keyframes advPopClose { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(.8); } }
  @media (prefers-reduced-motion: reduce) {
    .adv-pop, .adv-pop__content { animation-duration: 1ms !important; }
  }
 
  .adv-pop__cond-src { display: none !important; }
 
  /* ---------- Conditions block (AdventConditionsBox) ---------- */
  .adv-cond { font-family: Poppins, sans-serif; color: #333; text-align: left; }
  .adv-cond .adv-cond__title { font-size: 20px; font-weight: 600; margin-bottom: 12px; color: #000; }
  .adv-cond .adv-cond__text { font-size: 14px; line-height: 1.6; }
</style>`;
}