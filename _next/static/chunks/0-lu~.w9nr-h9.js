(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39312,e=>{"use strict";let a=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,a],39312)},53604,e=>{"use strict";var a=e.i(94964);class t extends a.Geometry{constructor(e,{attributes:a={}}={}){Object.assign(a,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,a)}}e.s(["Triangle",0,t])},98919,e=>{"use strict";let a=(0,e.i(75254).default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);e.s(["Shield",0,a],98919)},42009,e=>{"use strict";let a=(0,e.i(75254).default)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);e.s(["Award",0,a],42009)},10344,e=>{"use strict";var a=e.i(43476),t=e.i(21663),s=e.i(56850),i=e.i(80075),l=e.i(53604),r=e.i(71645);function o(e){let a=e.replace("#","");return[parseInt(a.slice(0,2),16)/255,parseInt(a.slice(2,4),16)/255,parseInt(a.slice(4,6),16)/255]}let n=`
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
`;e.s(["default",0,function({speed:e=.3,innerLineCount:d=32,outerLineCount:m=36,warpIntensity:u=1,rotation:x=-45,edgeFadeWidth:f=0,colorCycleSpeed:h=1,brightness:p=.2,color1:v="#ffffff",color2:g="#ffffff",color3:b="#ffffff",enableMouseInteraction:y=!0,mouseInfluence:w=2}){let j=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let a,r;if(!j.current)return;let N=j.current,C=new t.Renderer({alpha:!0,premultipliedAlpha:!1}),T=C.gl;T.clearColor(0,0,0,0);let k=[.5,.5],A=[.5,.5];function I(e){let a=T.canvas.getBoundingClientRect();A=[(e.clientX-a.left)/a.width,1-(e.clientY-a.top)/a.height]}function E(){A=[.5,.5]}function M(){C.setSize(N.offsetWidth,N.offsetHeight),a&&(a.uniforms.uResolution.value=[T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height])}window.addEventListener("resize",M),M();let F=new l.Triangle(T),R=x*Math.PI/180;a=new s.Program(T,{vertex:n,fragment:c,uniforms:{uTime:{value:0},uResolution:{value:[T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height]},uSpeed:{value:e},uInnerLines:{value:d},uOuterLines:{value:m},uWarpIntensity:{value:u},uRotation:{value:R},uEdgeFadeWidth:{value:f},uColorCycleSpeed:{value:h},uBrightness:{value:p},uColor1:{value:o(v)},uColor2:{value:o(g)},uColor3:{value:o(b)},uMouse:{value:new Float32Array([.5,.5])},uMouseInfluence:{value:w},uEnableMouse:{value:y}}});let W=new i.Mesh(T,{geometry:F,program:a});N.appendChild(T.canvas),y&&(T.canvas.addEventListener("mousemove",I),T.canvas.addEventListener("mouseleave",E));let B=!0,O=new IntersectionObserver(([e])=>{B=e.isIntersecting},{threshold:.01});return O.observe(N),r=requestAnimationFrame(function e(t){r=requestAnimationFrame(e),B&&(a.uniforms.uTime.value=.001*t,y?(k[0]+=.05*(A[0]-k[0]),k[1]+=.05*(A[1]-k[1]),a.uniforms.uMouse.value[0]=k[0],a.uniforms.uMouse.value[1]=k[1]):(a.uniforms.uMouse.value[0]=.5,a.uniforms.uMouse.value[1]=.5),C.render({scene:W}))}),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",M),O.disconnect(),y&&(T.canvas.removeEventListener("mousemove",I),T.canvas.removeEventListener("mouseleave",E)),N.contains(T.canvas)&&N.removeChild(T.canvas),T.getExtension("WEBGL_lose_context")?.loseContext()}},[e,d,m,u,x,f,h,p,v,g,b,y,w]),(0,a.jsx)("div",{ref:j,style:{width:"100%",height:"100%"}})}])},61642,e=>{"use strict";var a=e.i(43476),t=e.i(46932);let s=(0,e.i(75254).default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);var i=e.i(98919),l=e.i(39312),r=e.i(42009),o=e.i(10344),n=e.i(59544);let c=()=>{let e=[{icon:(0,a.jsx)(s,{className:"text-[var(--c-lime)]"}),title:(0,a.jsxs)(a.Fragment,{children:["Precision ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Recovery"})]}),desc:"Achieving up to 98% material purity through advanced automated sorting and chemical extraction."},{icon:(0,a.jsx)(i.Shield,{className:"text-[var(--c-lime)]"}),title:(0,a.jsxs)(a.Fragment,{children:["Ethical ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Sourcing"})]}),desc:"Providing a fully traceable, conflict-free alternative to traditional mining operations."},{icon:(0,a.jsx)(l.Zap,{className:"text-[var(--c-lime)]"}),title:(0,a.jsxs)(a.Fragment,{children:["Rapid ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Innovation"})]}),desc:"Continuously evolving our proprietary dismantling systems to handle the latest electronics."},{icon:(0,a.jsx)(r.Award,{className:"text-[var(--c-lime)]"}),title:(0,a.jsxs)(a.Fragment,{children:["Global ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Excellence"})]}),desc:"SETTING THE GOLD STANDARD FOR CIRCULAR ECONOMY PRACTICES ACROSS MULTIPLE INDUSTRIES."}];return(0,a.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,a.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32",children:[(0,a.jsx)("div",{className:"absolute inset-0 z-0",children:(0,a.jsx)(o.default,{speed:.2,color1:"#839470",color2:"#ffffff",color3:"#8bc34a",brightness:.15})}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,a.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,a.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Our Mission"})]}),(0,a.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:["Urban Mining, ",(0,a.jsx)("br",{className:"hidden sm:block"}),(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"perfected."})]}),(0,a.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"We're on a mission to reclaim 11 critical minerals from three integrated waste streams."})]})})]}),(0,a.jsx)("section",{className:"py-10",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",children:[(0,a.jsxs)(t.motion.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[(0,a.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8",children:["Our ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Story"})]}),(0,a.jsx)("p",{className:"text-lg text-gray-500 font-medium leading-relaxed mb-6",children:"Urban mining isn't just a mission. It's a necessity. Traditional mining is too slow, too dirty, and too concentrated in non-allied geographies. We are the bridge between the waste of today and the world engines of tomorrow."}),(0,a.jsx)("p",{className:"text-lg text-gray-500 font-medium leading-relaxed mb-10",children:"By design, not by default. WBM does not operate in non-allied parts of Asia. Our semi-circle of allied geographies is the bypass route."}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-8 items-center",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-4xl font-bold text-[var(--c-fg)] mb-1",children:"20+"}),(0,a.jsx)("div",{className:"text-sm font-bold text-gray-400 uppercase tracking-widest",children:"Years Experience"})]}),(0,a.jsx)("div",{className:"w-px h-12 bg-gray-200 hidden sm:block"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-4xl font-bold text-[var(--c-fg)] mb-1",children:"500k+"}),(0,a.jsx)("div",{className:"text-sm font-bold text-gray-400 uppercase tracking-widest",children:"Tons Recovered"})]})]})]}),(0,a.jsxs)(t.motion.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative",children:[(0,a.jsx)("div",{className:"rounded-[24px] overflow-hidden shadow-2xl",children:(0,a.jsx)("img",{src:"/WBM/media/Rectangle_34.png",alt:"Our Facility",className:"w-full h-auto"})}),(0,a.jsxs)("div",{className:"absolute -bottom-10 -left-10 bg-[var(--c-lime)] p-8 rounded-[20px] shadow-xl hidden md:block",children:[(0,a.jsx)("div",{className:"text-black text-4xl font-bold mb-1",children:"98%"}),(0,a.jsx)("div",{className:"text-black/80 text-sm font-bold uppercase tracking-widest",children:"Purity Achieved"})]})]})]})})}),(0,a.jsx)("section",{className:"py-10 bg-[var(--c-fg)]/5",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("div",{className:"text-center mb-10",children:(0,a.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] tracking-tight",children:["Our Core ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"Values"})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((e,s)=>(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*s},className:"bg-[var(--c-bg)] p-10 rounded-[10px] shadow-sm border border-[var(--c-border)] hover:shadow-md transition-shadow",children:[(0,a.jsx)("div",{className:"w-12 h-12 bg-[var(--c-lime)]/10 rounded-[10px] flex items-center justify-center mb-6",children:e.icon}),(0,a.jsx)("h3",{className:"text-xl font-bold text-[var(--c-fg)] mb-4",children:e.title}),(0,a.jsx)("p",{className:"text-gray-500 font-medium leading-relaxed text-sm",children:e.desc})]},s))})]})}),(0,a.jsx)("section",{className:"py-10",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-end mb-10 gap-6",children:[(0,a.jsxs)("div",{className:"max-w-2xl",children:[(0,a.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] tracking-tight mb-6",children:["Leadership driven by ",(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"purpose"})]}),(0,a.jsx)("p",{className:"text-lg text-gray-500 font-medium",children:"Meet the experts guiding Waste Be Minerals toward a more sustainable and resource-secure future."})]}),(0,a.jsx)(n.default,{variant:"ghost",className:"flex items-center gap-2 group",children:"Join our team"})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:[{name:"Sarah Jenkins",role:"CEO & Founder",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"},{name:"Michael Chen",role:"CTO",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop"},{name:"Elena Rodriguez",role:"Head of Sustainability",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"},{name:"David Thompson",role:"COO",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"}].map((e,s)=>(0,a.jsxs)(t.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*s},className:"group",children:[(0,a.jsx)("div",{className:"aspect-square rounded-[10px] overflow-hidden mb-6 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500",children:(0,a.jsx)("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover"})}),(0,a.jsx)("h3",{className:"text-xl font-bold text-[var(--c-fg)] mb-1",children:e.name}),(0,a.jsx)("p",{className:"text-[var(--c-lime)] font-bold text-sm tracking-wide uppercase",children:e.role})]},s))})]})}),(0,a.jsxs)("section",{className:"py-10 bg-[#0A0D08] dark:bg-[#020202] relative overflow-hidden border-t border-white/5",children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,a.jsxs)("h2",{className:"section-title font-black text-white leading-[1.1] tracking-tight mb-8 uppercase",children:["Ready to be part of the ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-[var(--c-lime)] lime-glow-text",children:"circular revolution?"})]}),(0,a.jsx)("p",{className:"text-xl text-white/60 font-medium mb-10 max-w-2xl mx-auto leading-relaxed",children:"Whether you're a manufacturer looking for sustainable materials or a data center needing secure hardware recovery, we're here to help."}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,a.jsx)(n.default,{href:"/contact",size:"lg",className:"px-10",children:"Contact Our Experts"}),(0,a.jsx)(n.default,{href:"/contact",variant:"outline",size:"lg",className:"px-10 border-white/20 text-white hover:bg-white/5",children:"Partner With Us"})]})]})}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(193,255,0,0.05),transparent_70%)] pointer-events-none"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"})]})]})};e.s(["default",0,function(){return(0,a.jsx)(c,{})}],61642)}]);