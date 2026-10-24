import React from 'react';

export default function AttentionAnimation(){
  return <section className="footer-photo footer-animation" role="img" aria-label="An animated illustration about reclaiming attention from the pull of an influencer feed and using it to create.">
    <svg className="attention-art attention-art-desktop" viewBox="0 0 1440 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="1440" height="260" fill="var(--bg)"/>
      <path className="attention-grid" d="M0 34H1440M0 226H1440M240 0V260M480 0V260M720 0V260M960 0V260M1200 0V260"/>
      <text className="attention-kicker" x="100" y="58">THE FEED PULLS.</text>
      <text className="attention-caption" x="100" y="83">ATTENTION IS A CHOICE.</text>
      <text className="attention-kicker attention-kicker-right" x="1340" y="58" textAnchor="end">MAKE SOMETHING.</text>
      <text className="attention-caption attention-caption-right" x="1340" y="83" textAnchor="end">THEN SHARE IT.</text>

      {/* The creator and the glowing screen */}
      <g className="attention-creator">
        <path className="attention-person" d="M258 260v-52c0-31 17-51 43-58l19-5 21 7c27 8 43 29 43 58v50h-30l-4-47-13 47h-49l-9-44-3 44z"/>
        <circle className="attention-person" cx="320" cy="113" r="29"/>
        <path className="attention-person" d="M295 109c3-22 18-34 39-27 9 3 16 11 18 22-15-3-27-10-35-19-3 11-10 18-22 24z"/>
        <path className="attention-person" d="M280 166l-45 30-23-28-12 10 25 43c5 7 13 8 20 3l48-34m64-23 32 28 17-31 14 8-18 48c-3 8-11 10-19 6l-48-31"/>
        <path className="attention-outline" d="M193 179l20-12 19 27-21 13z"/>
        <path className="attention-phone" d="M176 158h29a5 5 0 0 1 5 5v36h-39v-36a5 5 0 0 1 5-5z"/>
        <circle className="attention-signal" cx="191" cy="174" r="3"/>
        <path className="attention-wave" d="M167 151c-9 7-9 19 0 26m-13-35c-16 13-16 32 0 45"/>
        <text className="attention-label" x="312" y="245" textAnchor="middle">THE CREATOR</text>
      </g>

      {/* A thin tether carries attention across the composition */}
      <path className="attention-rope" d="M210 179C365 130 496 202 640 157s242-25 352 18"/>
      <path className="attention-rope-glint" d="M210 179C365 130 496 202 640 157s242-25 352 18"/>
      <g className="attention-knot">
        <circle cx="644" cy="156" r="18"/>
        <path d="M632 156c9-15 17 15 25 0m-18-12c-4 9 11 16 17 25"/>
      </g>
      <g className="attention-spark">
        <path d="M740 117v-18m0 93v-18m-37-19h-18m92 0h-18m-46-27-13-13m67 67-13-13m0-41 13-13m-67 67 13-13"/>
        <circle cx="740" cy="154" r="9"/>
      </g>

      {/* The viewer turns away from the pull and brings the line to a blank page */}
      <g className="attention-maker">
        <path className="attention-person" d="M1120 260v-47c0-31 18-48 46-53l23-4 26 8c25 8 37 26 37 53v43h-30l-8-42-12 42h-48l-8-43-8 43z"/>
        <circle className="attention-person" cx="1175" cy="119" r="27"/>
        <path className="attention-person" d="M1149 113c2-22 16-34 35-31 14 2 22 11 24 24-14-2-26-9-34-19-4 13-12 21-25 26z"/>
        <path className="attention-arm attention-arm-pull" d="M1131 169l-60 4-66-17"/>
        <path className="attention-hand" d="M1005 149l-18 4-13 1 2 8 16 3-13 2 1 7 21 1 10-9z"/>
        <path className="attention-arm" d="M1228 173l38 27 32-27 12 11-37 44c-6 7-15 7-21 1l-42-34"/>
        <path className="attention-page" d="M1270 216l89-10 8 54h-101z"/>
        <path className="attention-page-line" d="m1286 229 53-6m-50 16 58-7m-54 17 38-5"/>
        <path className="attention-pencil" d="m1300 221 34 35"/>
        <text className="attention-label" x="1185" y="245" textAnchor="middle">THE MAKER</text>
      </g>
      <path className="attention-release" d="M970 145c-22-18-28-40-20-63m-5 18 7-18 15 7"/>
      <text className="attention-footline" x="720" y="246" textAnchor="middle">WHAT YOU GIVE YOUR ATTENTION TO, GROWS.</text>
    </svg>
    <svg className="attention-art attention-art-mobile" viewBox="0 0 390 220" aria-hidden="true">
      <rect width="390" height="220" fill="var(--bg)"/>
      <path className="attention-grid" d="M0 42H390M0 188H390M130 42V188M260 42V188"/>
      <text className="attention-kicker" x="195" y="27" textAnchor="middle">THE FEED PULLS.</text>
      <path className="attention-rope" d="M58 103C116 83 150 128 198 108s54-2 98 0"/>
      <path className="attention-rope-glint" d="M58 103C116 83 150 128 198 108s54-2 98 0"/>
      <g className="attention-creator">
        <path className="attention-person" d="M64 188v-27c0-18 10-29 27-32l13-2 14 4c15 5 22 16 22 32v25h-19l-5-25-8 25H87l-5-24-3 24z"/>
        <circle className="attention-person" cx="98" cy="120" r="17"/>
        <path className="attention-person" d="M82 116c2-13 10-20 22-17 6 1 10 7 11 14-8-1-15-5-20-11-2 7-6 11-13 14z"/>
        <path className="attention-arm" d="m81 143-20 13-10-17"/>
        <rect className="attention-phone" x="42" y="86" width="18" height="31" rx="3"/>
        <circle className="attention-signal" cx="51" cy="93" r="2"/>
      </g>
      <g className="attention-knot"><circle cx="199" cy="108" r="11"/><path d="m192 108 13 0m-9-7 7 14"/></g>
      <g className="attention-spark"><path d="M198 77v-8m0 78v-8m-31-31h-8m78 0h-8m-53-22-6-6m56 56-6-6m0-44 6-6m-56 56 6-6"/><circle cx="198" cy="108" r="5"/></g>
      <g className="attention-maker">
        <path className="attention-person" d="M276 188v-25c0-17 10-28 26-31l12-2 15 5c14 4 21 15 21 30v23h-18l-5-24-7 24h-28l-4-24-4 24z"/>
        <circle className="attention-person" cx="310" cy="122" r="16"/>
        <path className="attention-person" d="M295 117c2-12 10-18 21-17 7 1 11 7 12 14-8-1-14-5-19-10-3 6-7 10-14 13z"/>
        <path className="attention-arm attention-arm-pull" d="m290 144-16-15-12-24"/>
        <path className="attention-hand" d="m260 105-8-9-5 4 6 10-7-5-4 5 11 10 8-4z"/>
        <path className="attention-page" d="m336 164 37-4 5 28h-42z"/>
        <path className="attention-page-line" d="m344 171 22-2m-21 8 24-2"/>
      </g>
      <text className="attention-footline" x="195" y="211" textAnchor="middle">SPEND ATTENTION. BUILD MEANING.</text>
    </svg>
  </section>
}
