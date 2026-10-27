// ============================================================
// AdventPopupStyles – all CSS for the advent popups.
// Include once per page (inside the LP markup).
//
// 2026 design: the image is the BACKGROUND of the whole popup,
// dark-red text sits on top of it
//   desktop 967 x 480 – text in the right half (or left: textSide)
//   mobile  257 x 460 – text at the top, scene at the bottom
// ============================================================
export function AdventPopupStyles() {
  return `
<style>
  /* =====================================================
     Every size is in cqw (= 1% of the popup width), so the
     popup scales 1:1 with the design on any screen.
     Desktop: 1cqw = 9.67px at full size (967px)
     Mobile:  1cqw = 2.57px at design size (257px)
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
  .adv-pop a:focus-visible { outline: 2px solid #750000; outline-offset: 2px; }
 
  /* ---------- Box ---------- */
  .adv-pop__content {
    --pop-color: #750000;
    --pop-bg: #F6E7E6;
 
    /* desktop font sizes (cqw of 967) */
    --fs-head: 5.17;    /* 50px */
    --fs-pre: 4.14;     /* 40px */
    --fw-pre: 400;
    --fs-title: 5.17;   /* 50px */
    --lh-title: 1.2;
    --fs-sub: 2.585;    /* 25px */
    --fs-body: 2.585;   /* 25px – code */
    --fs-today: 2.585;  /* 25px – Only Today */
    --fs-cond: 2.585;   /* 25px – See conditions */
    --fs-cta: 1.86;     /* 18px – Shop now */
    --fs-tier: 2.07;    /* 20px – 4 for 3 pyramid lines + their codes */
    --gap-pre: 1cqw;
    --gap-sub: 2cqw;
    --gap-foot: 2.6cqw;
    --gap-foot-items: 2cqw;
 
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: min(967px, 100%, calc((100vh - 32px) * 2.0146));
    aspect-ratio: 967 / 480;
    overflow: hidden;
    background-color: var(--pop-bg);
    color: var(--pop-color);
    border-radius: 0;
    font-family: Poppins, sans-serif;
    text-align: center;
    container-type: inline-size;
    animation: advPopOpen .4s cubic-bezier(.175, .885, .32, 1.275);
  }
  .adv-pop.is-closing .adv-pop__content {
    animation: advPopClose .4s cubic-bezier(.6, -.28, .735, .045) forwards;
  }
 
  /* per type – desktop */
  .adv-pop--percent { --fs-pre: 5.17; --fw-pre: 600; --fs-title: 9.31; --lh-title: 1.05; --gap-pre: 0.4cqw; }  /* 50 / 90 */
  .adv-pop--upto    { --fs-pre: 4.14; --fw-pre: 400; --fs-title: 5.17; --lh-title: 1.22; --gap-pre: 1.6cqw; }  /* 40 / 50 */
  .adv-pop--special { --fs-pre: 3.1;  --fw-pre: 400; --fs-title: 6.2;  --lh-title: 1.05; --fs-sub: 3.1; --gap-pre: 0.2cqw; --gap-sub: 0; }
 
  /* ---------- Background image (whole popup) ---------- */
  .adv-pop__bg {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 0;
    display: block;
    background-image: var(--bg-d);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
 
  /* ---------- Close (thin dark-red X) ---------- */
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
    color: var(--pop-color);
    cursor: pointer;
  }
  .adv-pop__close svg { width: 24px; height: 24px; display: block; }
 
  /* ---------- Text column (right half, centered) ---------- */
  .adv-pop__deal {
    position: relative;
    z-index: 1;
    /* text column centered at ~750px of the 967px popup, like the design
       (the empty pink area right of the gift box) */
    width: 45%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3cqw 2cqw;
    pointer-events: none;           /* empty text area -> click goes to the background link */
  }
  .adv-pop__deal a,
  .adv-pop__deal button { pointer-events: auto; }
  /* the "Code: XXX" line is NOT part of the popup link:
     the code can be highlighted and copied (one click selects the whole code) */
  .adv-pop__code { pointer-events: auto; cursor: text; }
  .adv-pop--text-left .adv-pop__deal { margin-left: 0; margin-right: auto; }
 
  .adv-pop__container { display: flex; flex-direction: column; align-items: center; max-width: 100%; }
 
  .adv-pop__headline {
    margin-bottom: 5.6cqw;
    font-size: calc(var(--fs-head) * 1cqw);
    font-weight: 700;
    line-height: 1.2;
  }
  .adv-pop__pre {
    font-size: calc(var(--fs-pre) * 1cqw);
    font-weight: var(--fw-pre);
    line-height: 1.2;
  }
  .adv-pop__title {
    font-size: calc(var(--fs-title) * 1cqw);
    font-weight: 700;
    line-height: var(--lh-title);
  }
  .adv-pop__pre ~ .adv-pop__title { margin-top: var(--gap-pre); }
  .adv-pop__subtitle {
    margin-top: var(--gap-sub);
    font-size: calc(var(--fs-sub) * 1cqw);
    font-weight: 400;
    line-height: 1.25;
  }
 
  /* Code + copy */
  .adv-pop__codes { display: flex; flex-direction: column; align-items: center; gap: 0.3cqw; margin-top: 0.3cqw; }
  .adv-pop__code {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0 0.5em;
    font-size: calc(var(--fs-body) * 1cqw);
    line-height: 1.25;
  }
  .adv-pop__code-value { -webkit-user-select: all; user-select: all; }
  /* copy icon from CopyCodeCTA.js (buildCopyIcon) */
  /* the copy button must not make the "Code: XXX" line taller than the text:
     its padding (bigger tap area) is cancelled by an equal negative margin */
  .adv-pop__copy-wrap { display: inline-flex; align-items: center; line-height: 0; }
  .adv-pop__copy-wrap button {
    display: inline-flex !important;
    align-items: center;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    padding: 6px !important;
    margin: -6px !important;
    line-height: 0 !important;
    font-size: inherit !important;
  }
  .adv-pop__copy-icon { width: 0.75em !important; height: 0.75em !important; }   /* scales with the code text */
 
  /* its slide-in notification must sit above the popup overlay (99999) */
  [data-copy-notif] { z-index: 100001 !important; }
 
  /* Tiers – each line with its own code (4 for 3 pyramid) */
  .adv-pop__tiers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2cqw;
    margin-top: 1.2cqw;
  }
  .adv-pop__tier { display: flex; flex-direction: column; align-items: center; }
  .adv-pop__tier-text,
  .adv-pop__tier .adv-pop__code {
    font-size: calc(var(--fs-tier) * 1cqw);
    line-height: 1.3;
  }
  .adv-pop__tier .adv-pop__codes { margin-top: 0; }
  /* bold words from the sheet (<b>) – !important because the LP CSS has b { font-weight: 500 !important } */
  /* and the same size as the text around them (the site CSS has b, strong { font-size: 14px }) */
  .adv-pop b,
  .adv-pop strong { font-weight: 700 !important; font-size: inherit !important; }
  /* inline tags (<b>, <span>) must not make a text line taller than its block */
  .adv-pop__deal b,
  .adv-pop__deal strong,
  .adv-pop__deal i,
  .adv-pop__deal em,
  .adv-pop__deal span { line-height: inherit !important; }
  .adv-pop__tiers + .adv-pop__footer { --gap-foot: 1.8cqw; --gap-foot-items: 1.4cqw; }
 
  /* Footer */
  .adv-pop__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-foot-items);
    margin-top: var(--gap-foot);
  }
  .adv-pop__footer:empty { display: none; }
  .adv-pop__today {
    font-size: calc(var(--fs-today) * 1cqw);
    font-weight: 600;
    line-height: 1.2;
  }
  .adv-pop__cond,
  .adv-pop__cta {
    padding: 0;
    border: 0;
    background: none;
    color: var(--pop-color);
    font-family: inherit;
    font-size: calc(var(--fs-cond) * 1cqw);
    font-weight: 400;
    line-height: 1.2;
    text-decoration: underline !important;
    text-underline-offset: 0.15em;
    cursor: pointer;
  }
  .adv-pop__cta { font-size: calc(var(--fs-cta) * 1cqw); font-weight: 700; }
  /* LP CSS gives every <button> padding / min-height – keep our buttons as designed */
  .adv-pop__cond,
  .adv-pop__close {
    min-width: 0 !important;
    min-height: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
  }
  .adv-pop__cond { height: auto !important; }
  .adv-pop--special .adv-pop__footer { margin-top: 5.6cqw; }
 
  /* =====================================================
     MOBILE – text on top, scene at the bottom (257 x 460)
     ===================================================== */
  @media screen and (max-width: 600px) {
    .adv-pop__content {
      /* mobile font sizes in px (exact design sizes) –
         they only shrink on screens narrower than the 257px design */
      --m-head: 18;
      --m-pre: 30;
      --m-title: 30;
      --m-sub: 18;
      --m-body: 18;     /* code */
      --m-today: 18;    /* Only Today */
      --m-cond: 12;     /* See conditions */
      --m-cta: 12;      /* Shop now */
      --m-tier: 18;     /* 4 for 3 pyramid lines + their codes */
      /* 10px between the text blocks (design) – shrinks only below 257px */
      --m-gap: min(10px, calc(10 * 100cqw / 257));
      --gap-pre: var(--m-gap);
      --gap-sub: var(--m-gap);
      --gap-foot: var(--m-gap);
      --gap-foot-items: var(--m-gap);
 
      flex-direction: column;
      width: min(257px, 100%, calc((100vh - 32px) * 0.5587));   /* max 257 x 460 */
      aspect-ratio: 257 / 460;
    }
    .adv-pop--percent { --m-pre: 30; --m-title: 35; --lh-title: 1.05; }
    /* "Extra" sits close above "10% OFF" (design) */
    .adv-pop--percent .adv-pop__pre { line-height: 1.05; }
    .adv-pop--upto    { --m-pre: 25; --m-title: 35; --lh-title: 1.2; }
    .adv-pop--special { --m-pre: 16; --m-title: 32; --m-sub: 16; --gap-pre: 0.5cqw; --gap-sub: 0; }
 
    /* px size, scaled down only below 257px popup width */
    .adv-pop__headline { font-size: min(calc(var(--m-head)  * 1px), calc(var(--m-head)  * 100cqw / 257)); }
    .adv-pop__pre      { font-size: min(calc(var(--m-pre)   * 1px), calc(var(--m-pre)   * 100cqw / 257)); }
    .adv-pop__title    { font-size: min(calc(var(--m-title) * 1px), calc(var(--m-title) * 100cqw / 257)); }
    .adv-pop__subtitle { font-size: min(calc(var(--m-sub)   * 1px), calc(var(--m-sub)   * 100cqw / 257)); }
    .adv-pop__code     { font-size: min(calc(var(--m-body)  * 1px), calc(var(--m-body)  * 100cqw / 257)); }
    .adv-pop__today    { font-size: min(calc(var(--m-today) * 1px), calc(var(--m-today) * 100cqw / 257)); }
    .adv-pop__cond     { font-size: min(calc(var(--m-cond)  * 1px), calc(var(--m-cond)  * 100cqw / 257)); }
    .adv-pop__cta      { font-size: min(calc(var(--m-cta)   * 1px), calc(var(--m-cta)   * 100cqw / 257)); }
    .adv-pop__tier-text,
    .adv-pop__tier .adv-pop__code { font-size: min(calc(var(--m-tier) * 1px), calc(var(--m-tier) * 100cqw / 257)); }
    .adv-pop__tiers { gap: 0; margin-top: var(--m-gap); }
    .adv-pop__tier-text,
    .adv-pop__tier .adv-pop__code { line-height: 1.4 !important; }   /* 25px per line (design) */
    .adv-pop__tiers + .adv-pop__footer { --gap-foot: var(--m-gap); --gap-foot-items: var(--m-gap); }
    .adv-pop__tiers + .adv-pop__footer .adv-pop__today { font-weight: 400 !important; }   /* 4 for 3: regular "Only Today" (design) */
 
    /* code: 10px below the title – but right under the subtitle
       ("when you spend ... / Code: XXX" is one block in the design) */
    .adv-pop__codes { margin-top: var(--m-gap); }
    .adv-pop__container:has(.adv-pop__subtitle:not(.adv-pop__only-d)) + .adv-pop__codes { margin-top: 0; }
 
    .adv-pop__bg {
      background-image: var(--bg-m, var(--bg-d));
      background-position: center bottom;
    }
 
    /* bigger copy icon (~20px next to an 18px code) + bigger tap area (~40px) */
    .adv-pop__copy-icon { width: 1.1em !important; height: 1.1em !important; }
    .adv-pop__copy-wrap button { padding: 10px !important; margin: -10px !important; }
 
    .adv-pop__close { top: 4px; right: 4px; width: 28px; height: 28px; }
    .adv-pop__close svg { width: 20px; height: 20px; }
 
    /* text centered in the top 55% (the scene fills the bottom) */
    .adv-pop__deal,
    .adv-pop--text-left .adv-pop__deal {
      width: 100%;
      height: 55%;
      flex: none;
      margin: 0;
      justify-content: flex-start;
      padding: 4cqw 6cqw;
      /* 25px space at the top (shrinks only below the 257px design width) */
      padding-top: min(25px, calc(25 * 100cqw / 257));
    }
    /* text centered in the area – but when it's too long it starts at the top
       (never cut off / pushed above the 25px) – works in every browser */
    .adv-pop__deal > :first-child { margin-top: auto; }
    .adv-pop__deal > :last-child { margin-bottom: auto; }
 
    /* 4 for 3 pyramid has more lines -> taller text area (design: text ends at ~280 of 460) */
    .adv-pop__deal:has(.adv-pop__tiers) { height: 64%; }
    .adv-pop__headline { margin-bottom: 7cqw; line-height: 1.3; }
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
 
  /* screen-reader only text ("Code copied") */
  .adv-pop__sr {
    position: absolute !important;
    width: 1px; height: 1px;
    margin: -1px; padding: 0; border: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
  .adv-cond:focus { outline: none; }
 
  /* desktop-only / mobile-only texts (popup prop: mobile: { ... }) */
  @media screen and (min-width: 601px) { .adv-pop .adv-pop__only-m { display: none !important; } }
  @media screen and (max-width: 600px) { .adv-pop .adv-pop__only-d { display: none !important; } }
 
  /* ---------- Conditions block (AdventConditionsBox) ---------- */
  .adv-cond { font-family: Poppins, sans-serif; color: #333; text-align: left; box-sizing: border-box; }
  .adv-cond .adv-cond__title { padding: 20px 20px 0; font-size: 20px; font-weight: 600; margin-bottom: 12px; color: #000; }
  .adv-cond .adv-cond__text { padding: 0 20px 20px; font-size: 14px; line-height: 1.6; }
</style>`;
}