import React from 'react';
import './art.css';
function ProjectArt({ variant }) {
  if (variant === 'nexent') return <div className="art art-nexent"><div className="mock-browser"><div className="mock-top"><span>● ● ●</span><span>nexentcorp.com</span><span>↗</span></div><div className="nexent-visual"><div className="nexent-symbol">N<span>✳</span></div><div className="nexent-kicker">CORPORATE COMPANIES REPRESENTATION</div><div className="nexent-title">Beyond<br/>borders.</div><div className="nexent-bottom"><span>UAE BUSINESS SOLUTIONS</span><span>EXPLORE →</span></div></div></div></div>;
  if (variant === 'solar') return <div className="art art-solar"><div className="solar-orbit solar-orbit-one"/><div className="solar-orbit solar-orbit-two"/><div className="solar-circle"/><div className="solar-logo">solar<span>1</span></div><div className="solar-card"><div className="solar-card-top"><span>PROJECT OVERVIEW</span><span>•••</span></div><div className="solar-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="solar-card-bottom"><strong>+24.8%</strong><span>PROJECT MOMENTUM ↗</span></div></div><div className="solar-caption">ONE CONNECTED SYSTEM FOR SOLAR</div></div>;
  if (variant === 'olton') return <div className="art art-olton"><div className="olton-word">olton<span>®</span></div><div className="olton-circle"><div className="olton-house">⌂</div></div><div className="olton-search">What does your home need? <span>↗</span></div><div className="olton-small">GOOD HELP. RIGHT AT HOME.</div></div>;
  if (variant === 'mation') return <div className="art art-mation"><div className="mation-bg">M</div><div className="mation-logo">✳ mation</div><div className="mation-flow"><div className="flow-comment"><small>NEW COMMENT</small><b>"Send me the details!"</b></div><div className="flow-line">↓</div><div className="flow-response"><small>AUTOMATION TRIGGERED</small><b>DM sent successfully ↗</b></div></div><div className="mation-note">FROM ENGAGEMENT TO CONVERSATION</div></div>;
  return <div className="art art-aegis"><div className="aegis-grid"/><div className="aegis-core"><span>✳</span></div><div className="aegis-title">AEGIS<span>_</span></div><div className="aegis-label">LOCAL-FIRST INTELLIGENCE SYSTEM</div><div className="aegis-coords">01 / MODEL &nbsp; 02 / TOOLS &nbsp; 03 / AGENTS</div></div>;
}


export default ProjectArt;
