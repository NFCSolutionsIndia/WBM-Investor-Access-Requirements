(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53604,e=>{"use strict";var t=e.i(94964);class a extends t.Geometry{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}e.s(["Triangle",0,a])},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],72520)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",0,t],81418)},70756,e=>{"use strict";let t=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,t],70756)},63209,e=>{"use strict";let t=(0,e.i(75254).default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",0,t],63209)},10344,e=>{"use strict";var t=e.i(43476),a=e.i(21663),r=e.i(56850),s=e.i(80075),i=e.i(53604),l=e.i(71645);function o(e){let t=e.replace("#","");return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255]}let n=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,c=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uInnerLines;
uniform float uOuterLines;
uniform float uWarpIntensity;
uniform float uRotation;
uniform float uEdgeFadeWidth;
uniform float uColorCycleSpeed;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;

#define HALF_PI 1.5707963

float hashF(float n) {
  return fract(sin(n * 127.1) * 43758.5453123);
}

float smoothNoise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hashF(i), hashF(i + 1.0), u);
}

float displaceA(float coord, float t) {
  float result = sin(coord * 2.123) * 0.2;
  result += sin(coord * 3.234 + t * 4.345) * 0.1;
  result += sin(coord * 0.589 + t * 0.934) * 0.5;
  return result;
}

float displaceB(float coord, float t) {
  float result = sin(coord * 1.345) * 0.3;
  result += sin(coord * 2.734 + t * 3.345) * 0.2;
  result += sin(coord * 0.189 + t * 0.934) * 0.3;
  return result;
}

vec2 rotate2D(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

void main() {
  vec2 coords = gl_FragCoord.xy / uResolution.xy;
  coords = coords * 2.0 - 1.0;
  coords = rotate2D(coords, uRotation);

  float halfT = uTime * uSpeed * 0.5;
  float fullT = uTime * uSpeed;

  float mouseWarp = 0.0;
  if (uEnableMouse) {
    vec2 mPos = rotate2D(uMouse * 2.0 - 1.0, uRotation);
    float mDist = length(coords - mPos);
    mouseWarp = uMouseInfluence * exp(-mDist * mDist * 4.0);
  }

  float warpAx = coords.x + displaceA(coords.y, halfT) * uWarpIntensity + mouseWarp;
  float warpAy = coords.y - displaceA(coords.x * cos(fullT) * 1.235, halfT) * uWarpIntensity;
  float warpBx = coords.x + displaceB(coords.y, halfT) * uWarpIntensity + mouseWarp;
  float warpBy = coords.y - displaceB(coords.x * sin(fullT) * 1.235, halfT) * uWarpIntensity;

  vec2 fieldA = vec2(warpAx, warpAy);
  vec2 fieldB = vec2(warpBx, warpBy);
  vec2 blended = mix(fieldA, fieldB, mix(fieldA, fieldB, 0.5));

  float fadeTop = smoothstep(uEdgeFadeWidth, uEdgeFadeWidth + 0.4, blended.y);
  float fadeBottom = smoothstep(-uEdgeFadeWidth, -(uEdgeFadeWidth + 0.4), blended.y);
  float vMask = 1.0 - max(fadeTop, fadeBottom);

  float tileCount = mix(uOuterLines, uInnerLines, vMask);
  float scaledY = blended.y * tileCount;
  float nY = smoothNoise(abs(scaledY));

  float ridge = pow(
    step(abs(nY - blended.x) * 2.0, HALF_PI) * cos(2.0 * (nY - blended.x)),
    5.0
  );

  float lines = 0.0;
  for (float i = 1.0; i < 3.0; i += 1.0) {
    lines += pow(max(fract(scaledY), fract(-scaledY)), i * 2.0);
  }

  float pattern = vMask * lines;

  float cycleT = fullT * uColorCycleSpeed;
  float rChannel = (pattern + lines * ridge) * (cos(blended.y + cycleT * 0.234) * 0.5 + 1.0);
  float gChannel = (pattern + vMask * ridge) * (sin(blended.x + cycleT * 1.745) * 0.5 + 1.0);
  float bChannel = (pattern + lines * ridge) * (cos(blended.x + cycleT * 0.534) * 0.5 + 1.0);

  vec3 col = (rChannel * uColor1 + gChannel * uColor2 + bChannel * uColor3) * uBrightness;
  float alpha = clamp(length(col), 0.0, 1.0);

  gl_FragColor = vec4(col, alpha);
}
`;e.s(["default",0,function({speed:e=.3,innerLineCount:d=32,outerLineCount:u=36,warpIntensity:f=1,rotation:m=-45,edgeFadeWidth:x=0,colorCycleSpeed:p=1,brightness:v=.2,color1:h="#ffffff",color2:b="#ffffff",color3:g="#ffffff",enableMouseInteraction:y=!0,mouseInfluence:w=2}){let j=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t,l;if(!j.current)return;let k=j.current,N=new a.Renderer({alpha:!0,premultipliedAlpha:!1}),C=N.gl;C.clearColor(0,0,0,0);let A=[.5,.5],T=[.5,.5];function M(e){let t=C.canvas.getBoundingClientRect();T=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function I(){T=[.5,.5]}function S(){N.setSize(k.offsetWidth,k.offsetHeight),t&&(t.uniforms.uResolution.value=[C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height])}window.addEventListener("resize",S),S();let z=new i.Triangle(C),B=m*Math.PI/180;t=new r.Program(C,{vertex:n,fragment:c,uniforms:{uTime:{value:0},uResolution:{value:[C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height]},uSpeed:{value:e},uInnerLines:{value:d},uOuterLines:{value:u},uWarpIntensity:{value:f},uRotation:{value:B},uEdgeFadeWidth:{value:x},uColorCycleSpeed:{value:p},uBrightness:{value:v},uColor1:{value:o(h)},uColor2:{value:o(b)},uColor3:{value:o(g)},uMouse:{value:new Float32Array([.5,.5])},uMouseInfluence:{value:w},uEnableMouse:{value:y}}});let R=new s.Mesh(C,{geometry:z,program:t});k.appendChild(C.canvas),y&&(C.canvas.addEventListener("mousemove",M),C.canvas.addEventListener("mouseleave",I));let W=!0,F=new IntersectionObserver(([e])=>{W=e.isIntersecting},{threshold:.01});return F.observe(k),l=requestAnimationFrame(function e(a){l=requestAnimationFrame(e),W&&(t.uniforms.uTime.value=.001*a,y?(A[0]+=.05*(T[0]-A[0]),A[1]+=.05*(T[1]-A[1]),t.uniforms.uMouse.value[0]=A[0],t.uniforms.uMouse.value[1]=A[1]):(t.uniforms.uMouse.value[0]=.5,t.uniforms.uMouse.value[1]=.5),N.render({scene:R}))}),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",S),F.disconnect(),y&&(C.canvas.removeEventListener("mousemove",M),C.canvas.removeEventListener("mouseleave",I)),k.contains(C.canvas)&&k.removeChild(C.canvas),C.getExtension("WEBGL_lose_context")?.loseContext()}},[e,d,u,f,m,x,p,v,h,b,g,y,w]),(0,t.jsx)("div",{ref:j,style:{width:"100%",height:"100%"}})}])},7610,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(46932),s=e.i(88653),i=e.i(70756),l=e.i(81418),o=e.i(72520),n=e.i(63209),c=e.i(75254);let d=(0,c.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),u=(0,c.default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);var f=e.i(10344),m=e.i(19293),x=e.i(86909);e.s(["default",0,()=>{let[e,c]=(0,a.useState)("credentials"),[p,v]=(0,a.useState)(""),[h,b]=(0,a.useState)(""),[g,y]=(0,a.useState)(!1),[w,j]=(0,a.useState)(""),[k,N]=(0,a.useState)(""),[C,A]=(0,a.useState)(!1),[T,M]=(0,a.useState)(null),[I,S]=(0,a.useState)(!1),[z,B]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(0,x.isAuthenticated)()&&window.location.replace("/WBM-Investor-Access-Requriements/for-you/investor")},[]),(0,t.jsxs)(t.Fragment,{children:[z&&(0,t.jsx)(m.default,{}),(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 flex flex-col justify-start items-center relative overflow-hidden pt-[130px] md:pt-[150px]",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(f.default,{speed:.1,color1:"#839470",color2:"#ffffff",color3:"#8bc34a",brightness:.05})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[var(--c-bg)]/80 via-[var(--c-bg)]/40 to-[var(--c-bg)] z-[1]"}),(0,t.jsx)("div",{className:"max-w-md w-full px-6 relative z-[50] mt-4 md:mt-8 mb-12",children:(0,t.jsx)(r.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"relative w-full bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-[20px] shadow-2xl overflow-hidden",children:(0,t.jsxs)("div",{className:"p-8 md:p-10",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center text-center mb-8",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] border border-[var(--c-lime)]/20 shadow-[0_0_30px_rgba(131,148,112,0.1)] mb-4",children:(0,t.jsx)(i.Lock,{size:32})}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-[var(--c-fg)] uppercase tracking-tight mb-1",children:"Investor Portal"}),(0,t.jsx)("p",{className:"text-[10px] text-[var(--c-fg2)] uppercase tracking-[0.2em] opacity-60",children:"Confidential Data Room Access"})]}),(0,t.jsx)(s.AnimatePresence,{mode:"wait",children:"credentials"===e?(0,t.jsxs)(r.motion.form,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:"space-y-6 text-left",onSubmit:e=>{e.preventDefault(),A(!0),N(""),setTimeout(()=>{let e=(0,x.authenticate)(p,h);e.success?(M(e.tempKey||null),c("verification")):N("Invalid email or password. Please check your credentials."),A(!1)},1e3)},children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest",children:"Work Email Address *"}),(0,t.jsx)("input",{type:"email",required:!0,placeholder:"investor@firm.com",value:p,onChange:e=>v(e.target.value),className:"w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("label",{className:"text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest flex justify-between items-center",children:[(0,t.jsx)("span",{children:"Password *"}),(0,t.jsxs)("button",{type:"button",onClick:()=>y(!g),className:"text-[9px] text-[var(--c-fg2)] hover:text-[var(--c-lime)] transition-colors flex items-center gap-1 normal-case font-medium",children:[g?(0,t.jsx)(u,{size:12}):(0,t.jsx)(d,{size:12}),g?"Hide":"Show"]})]}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("input",{type:g?"text":"password",required:!0,placeholder:"••••••••••••",value:h,onChange:e=>b(e.target.value),className:"w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors placeholder:text-[var(--c-fg2)]/30"})})]})]}),k&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest",children:[(0,t.jsx)(n.AlertCircle,{size:14}),(0,t.jsx)("span",{children:k})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("button",{type:"submit",disabled:C,className:"w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2",children:C?(0,t.jsx)("div",{className:"w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Continue"}),(0,t.jsx)(o.ArrowRight,{size:14})]})}),(0,t.jsx)("div",{className:"text-center mt-1",children:(0,t.jsx)("a",{href:"/WBM-Investor-Access-Requriements/contact",className:"text-[9px] font-bold text-[var(--c-lime)] uppercase tracking-widest hover:text-[var(--c-lime)]/80 transition-colors",children:"Request Access →"})})]})]},"credentials"):(0,t.jsxs)(r.motion.form,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:"space-y-6 text-left",onSubmit:e=>{e.preventDefault(),A(!0),N(""),setTimeout(()=>{(0,x.verifyAndLogin)(w,p)?(B(!0),setTimeout(()=>{window.location.replace("/WBM-Investor-Access-Requriements/for-you/investor")},4e3)):(N("Invalid access key. Please use the temporary key provided."),A(!1))},800)},children:[(0,t.jsxs)("div",{className:"p-6 rounded-2xl bg-[var(--c-lime)]/5 border border-[var(--c-lime)]/10 mb-6 text-center",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-4 border border-[var(--c-lime)]/10 shadow-[0_0_20px_rgba(131,148,112,0.1)]",children:(0,t.jsx)(l.ShieldCheck,{size:24})}),(0,t.jsx)("p",{className:"text-[var(--c-lime)] text-[10px] font-black uppercase tracking-[0.2em] mb-3",children:"Security Verification"}),(0,t.jsxs)("p",{className:"text-[var(--c-fg2)] text-[11px] leading-relaxed mb-6",children:["Identification confirmed for ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-fg)] font-bold",children:p}),"."]}),T&&(0,t.jsxs)("div",{className:"p-5 bg-[var(--c-bg)]/40 backdrop-blur-xl rounded-xl border border-[var(--c-lime)]/20 group cursor-pointer hover:border-[var(--c-lime)]/40 transition-all shadow-xl relative overflow-hidden",onClick:()=>{if(T){j(T);try{navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(T).then(()=>{S(!0),setTimeout(()=>S(!1),2e3)})}catch(e){console.warn("Clipboard access denied")}}},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-[var(--c-lime)]/5 to-transparent pointer-events-none"}),(0,t.jsx)("p",{className:"text-[8px] text-[var(--c-fg2)] font-bold uppercase tracking-widest mb-2 opacity-60 relative z-10",children:I?"Key Copied!":"Temporary Access Key"}),(0,t.jsx)("div",{className:"flex items-center justify-center gap-1 overflow-hidden relative z-10",children:(0,t.jsx)("p",{className:"text-xl sm:text-2xl font-black text-[var(--c-lime)] tracking-[0.2em] sm:tracking-[0.5em] uppercase drop-shadow-[0_0_15px_rgba(131,148,112,0.4)]",children:T})}),(0,t.jsx)("p",{className:"text-[8px] text-[var(--c-lime)] font-bold uppercase tracking-widest mt-3 animate-pulse relative z-10",children:I?"Ready for verification":"Click to copy key"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest",children:"Enter Access Key *"}),(0,t.jsx)("input",{type:"text",required:!0,placeholder:"••••••••",value:w,onChange:e=>j(e.target.value.toUpperCase()),className:"w-full h-12 bg-transparent border border-[var(--c-border)] rounded-lg px-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg2)]/30 tracking-[0.3em] font-black text-center text-lg"}),(0,t.jsx)("p",{className:"text-[9px] text-[var(--c-fg2)]/40 uppercase tracking-widest text-center mt-2",children:"Secondary verification required for session activation."})]}),k&&(0,t.jsxs)(r.motion.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest",children:[(0,t.jsx)(n.AlertCircle,{size:14}),(0,t.jsx)("span",{children:k})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("button",{type:"submit",disabled:C,className:"w-full py-4 bg-[var(--c-lime)] text-black font-bold text-xs rounded-lg uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_25px_rgba(131,148,112,0.3)] transition-all flex items-center justify-center gap-2",children:C?(0,t.jsx)("div",{className:"w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:"Unlock Room"}),(0,t.jsx)(l.ShieldCheck,{size:14})]})}),(0,t.jsxs)("div",{className:"flex justify-between items-center px-1",children:[(0,t.jsx)("button",{type:"button",onClick:()=>{c("credentials"),N("")},className:"text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest hover:text-white transition-colors",children:"← Back to login"}),(0,t.jsx)("a",{href:"/WBM-Investor-Access-Requriements/contact",className:"text-[9px] font-bold text-[var(--c-lime)] uppercase tracking-widest hover:text-[var(--c-lime)]/80 transition-colors",children:"Request Access →"})]})]})]},"verification")}),(0,t.jsx)("div",{className:"mt-10 pt-8 border-t border-white/5 text-center",children:(0,t.jsxs)("p",{className:"text-[9px] text-[var(--c-fg2)]/40 font-medium leading-relaxed uppercase tracking-widest",children:["Authorized access only. Session duration: 120 minutes.",(0,t.jsx)("br",{}),"All activities are monitored and logged."]})})]})})})]})]})}],7610)}]);