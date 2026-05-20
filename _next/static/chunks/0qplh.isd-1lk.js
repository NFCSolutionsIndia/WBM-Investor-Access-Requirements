(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53604,e=>{"use strict";var t=e.i(94964);class a extends t.Geometry{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}e.s(["Triangle",0,a])},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],72520)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,t],66992)},15788,e=>{"use strict";let t=(0,e.i(75254).default)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);e.s(["Truck",0,t],15788)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",0,t],25652)},32095,e=>{"use strict";let t=(0,e.i(75254).default)("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);e.s(["GraduationCap",0,t],32095)},94883,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(46932),s=e.i(35382),i=e.i(91994),o=e.i(95420);e.s(["default",0,function({children:e,className:n="",intensity:l=10,glowColor:u="rgba(199,245,62,0.15)",onClick:c}){let d=(0,a.useRef)(null),f=(0,s.useMotionValue)(0),v=(0,s.useMotionValue)(0),h=(0,s.useMotionValue)(0),m=(0,s.useMotionValue)(0),p=(0,i.useSpring)(f,{stiffness:200,damping:20}),x=(0,i.useSpring)(v,{stiffness:200,damping:20}),g=(0,o.useTransform)(x,[-1,1],[l,-l]),y=(0,o.useTransform)(p,[-1,1],[-l,l]);return(0,t.jsx)(r.motion.div,{ref:d,style:{rotateX:g,rotateY:y,transformPerspective:1200},onMouseMove:e=>{if(!d.current)return;let t=d.current.getBoundingClientRect(),a=(e.clientX-(t.left+t.width/2))/(t.width/2),r=(e.clientY-(t.top+t.height/2))/(t.height/2);f.set(a),v.set(r),h.set(e.clientX-t.left),m.set(e.clientY-t.top)},onMouseLeave:()=>{f.set(0),v.set(0)},onClick:c,whileHover:{scale:1.03,y:-5},className:`relative group card-theme ${n}`,children:(0,t.jsx)("div",{className:"relative z-[2] h-full",children:e})})}])},82759,e=>{"use strict";var t=e.i(43476),a=e.i(21663),r=e.i(56850),s=e.i(80075);let i={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function o(e){4===e.length&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function n(e){if(void 0===e)return[0,0,0];if(3==arguments.length)return arguments;if(!isNaN(e)){var t;return[((t=parseInt(t=e))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}return"#"===e[0]?o(e):i[e.toLowerCase()]?o(i[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0])}class l extends Array{constructor(e){if(Array.isArray(e))return super(...e);return super(...n(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(n(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}var u=e.i(53604),c=e.i(71645);let d=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,f=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;e.s(["default",0,function({focal:e=[.5,.5],rotation:i=[1,0],starSpeed:o=.5,density:n=1,hueShift:v=140,disableAnimation:h=!1,speed:m=1,mouseInteraction:p=!0,glowIntensity:x=.3,saturation:g=0,mouseRepulsion:y=!0,repulsionStrength:b=2,twinkleIntensity:w=.3,rotationSpeed:k=.1,autoCenterRepulsion:R=0,transparent:j=!0,...M}){let A=(0,c.useRef)(null),S=(0,c.useRef)({x:.5,y:.5}),N=(0,c.useRef)({x:.5,y:.5}),C=(0,c.useRef)(0),T=(0,c.useRef)(0);return(0,c.useEffect)(()=>{let t,c;if(!A.current)return;let M=A.current,L=new a.Renderer({alpha:j,premultipliedAlpha:!1}),z=L.gl;function F(){L.setSize(+M.offsetWidth,+M.offsetHeight),t&&(t.uniforms.uResolution.value=new l(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height))}j?(z.enable(z.BLEND),z.blendFunc(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA),z.clearColor(0,0,0,0)):z.clearColor(0,0,0,1),window.addEventListener("resize",F,!1),F();let U=new u.Triangle(z);t=new r.Program(z,{vertex:d,fragment:f,uniforms:{uTime:{value:0},uResolution:{value:new l(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height)},uFocal:{value:new Float32Array(e)},uRotation:{value:new Float32Array(i)},uStarSpeed:{value:o},uDensity:{value:n},uHueShift:{value:v},uSpeed:{value:m},uMouse:{value:new Float32Array([N.current.x,N.current.y])},uGlowIntensity:{value:x},uSaturation:{value:g},uMouseRepulsion:{value:y},uTwinkleIntensity:{value:w},uRotationSpeed:{value:k},uRepulsionStrength:{value:b},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:R},uTransparent:{value:j}}});let I=new s.Mesh(z,{geometry:U,program:t});function O(e){let t=M.getBoundingClientRect();S.current={x:(e.clientX-t.left)/t.width,y:1-(e.clientY-t.top)/t.height},C.current=1}function E(){C.current=0}return c=requestAnimationFrame(function e(a){c=requestAnimationFrame(e),h||(t.uniforms.uTime.value=.001*a,t.uniforms.uStarSpeed.value=.001*a*o/10),N.current.x+=(S.current.x-N.current.x)*.05,N.current.y+=(S.current.y-N.current.y)*.05,T.current+=(C.current-T.current)*.05,t.uniforms.uMouse.value[0]=N.current.x,t.uniforms.uMouse.value[1]=N.current.y,t.uniforms.uMouseActiveFactor.value=T.current,L.render({scene:I})}),M.appendChild(z.canvas),p&&(M.addEventListener("mousemove",O),M.addEventListener("mouseleave",E)),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",F),p&&(M.removeEventListener("mousemove",O),M.removeEventListener("mouseleave",E)),M.contains(z.canvas)&&M.removeChild(z.canvas),z.getExtension("WEBGL_lose_context")?.loseContext()}},[e,i,o,n,v,h,m,p,x,g,y,w,k,b,R,j]),(0,t.jsx)("div",{ref:A,style:{width:"100%",height:"100%",position:"relative"},...M})}],82759)},61911,e=>{"use strict";let t=(0,e.i(75254).default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);e.s(["Users",0,t],61911)},23609,e=>{"use strict";let t=(0,e.i(75254).default)("landmark",[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]]);e.s(["Landmark",0,t],23609)},51859,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(61911),s=e.i(25652),i=e.i(66992),o=e.i(15788),n=e.i(23609),l=e.i(32095),u=e.i(72520),c=e.i(82759),d=e.i(59544),f=e.i(57688),v=e.i(94883);e.s(["default",0,()=>{let e=[{title:"Investor",desc:"Four offerings, five revenue streams, ten-year horizon. Semiconductor-grade unit economics for the critical-minerals decade.",bullets:["4×5 revenue model","11 minerals extracted","US patent approved"],icon:(0,t.jsx)(s.TrendingUp,{size:24}),href:"/for-you/investor",cta:"View Thesis",img:"/WBM-Investor-Access-Requirements/media/FinancialServices.jpg"},{title:"Customer / OEM",desc:"Battery-grade lithium, cobalt, nickel, plus precious metals and rare earth elements — published SLAs, traceable to source.",bullets:["OEM-grade purity","Published SLAs","Battery passport ready"],icon:(0,t.jsx)(i.Cpu,{size:24}),href:"/for-you/customer",cta:"Browse Minerals",img:"/WBM-Investor-Access-Requirements/media/ElectricVehicles.jpg"},{title:"Supplier",desc:"Bring us your batteries, magnets, PCBs, and e-waste. Get paid for what others landfill — with full chain-of-custody.",bullets:["Tipping fees","4 feedstock streams","Documented intake"],icon:(0,t.jsx)(o.Truck,{size:24}),href:"/for-you/supplier",cta:"Start a supply contract",img:"/WBM-Investor-Access-Requirements/media/E-waste_processing.jpg"},{title:"AI Data-Centre Tenant",desc:"Lease compute capacity inside our integrated plants. Power, cooling, and material recovery — all under one roof.",bullets:["Co-located GPU racks","On-site recovery loop","15-year leases"],icon:(0,t.jsx)(r.Users,{size:24}),href:"/for-you/tenant",cta:"Tour the floor",img:"/WBM-Investor-Access-Requirements/media/DataCentersAI.jpg"},{title:"Government",desc:"Critical-mineral sovereignty without Beijing exposure. Domestic recovery, IRA-aligned credits, local job creation.",bullets:["IRA-qualified outputs","Local job creation","Zero Asia exposure"],icon:(0,t.jsx)(n.Landmark,{size:24}),href:"/for-you/government",cta:"See policy fit",img:"/WBM-Investor-Access-Requirements/media/AerospaceDefense.jpg"},{title:"Academia",desc:"Joint research on hydrometallurgy, REE separation, and circular-economy modeling. Plant access for select labs.",bullets:["Joint publications","Plant data access","PhD pipeline"],icon:(0,t.jsx)(l.GraduationCap,{size:24}),href:"/for-you/academia",cta:"Explore partnerships",img:"/WBM-Investor-Access-Requirements/media/SustainablebyDesign.jpg"}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden",children:[(0,t.jsxs)("section",{className:"relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(c.default,{})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Our Ecosystem"})]}),(0,t.jsxs)("h1",{className:"text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow",children:["For You. ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Six Journeys."})]}),(0,t.jsx)("p",{className:"text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Whether you fund critical-mineral theses, source lithium, supply feedstock, or lease compute — there's a path built for you."})]})})]}),(0,t.jsx)("section",{className:"py-10 bg-[var(--c-bg)]",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((e,r)=>(0,t.jsx)(a.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},children:(0,t.jsxs)(v.default,{className:"relative h-[600px] rounded-[10px] overflow-hidden cursor-pointer group",glowColor:"rgba(131, 148, 112, 0.15)",children:[(0,t.jsx)(f.default,{src:e.img,alt:e.title,fill:!0,className:"object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"}),(0,t.jsxs)("div",{className:"absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-10px]",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-full bg-[var(--c-lime)]/20 backdrop-blur-md flex items-center justify-center text-[var(--c-lime)] mb-6 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors",children:e.icon}),(0,t.jsx)("h3",{className:"text-[32px] font-black text-white tracking-tighter leading-tight mb-4 uppercase break-words",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-white/60 mb-8 font-medium leading-relaxed",children:e.desc}),(0,t.jsx)("ul",{className:"space-y-3 mb-10 hidden group-hover:block transition-all duration-500",children:e.bullets.map((e,a)=>(0,t.jsxs)("li",{className:"flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-wide",children:[(0,t.jsx)("div",{className:"w-1 h-1 rounded-full bg-[var(--c-lime)]"}),e]},a))}),(0,t.jsx)(d.default,{href:e.href,className:"w-full bg-[var(--c-highlight)] text-black hover:brightness-110 border-none",children:(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs",children:[e.cta," ",(0,t.jsx)(u.ArrowRight,{size:16})]})})]})]})},r))})})}),(0,t.jsx)("section",{className:"py-10 bg-[var(--c-bg2)] text-[var(--c-fg)] text-center relative overflow-hidden border-t border-[var(--c-border)]",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-6 relative z-10",children:[(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg2)] font-medium mb-10",children:"Not sure which fits? Start anywhere — every journey links to the others."}),(0,t.jsx)(d.default,{href:"/contact",size:"lg",className:"bg-[var(--c-highlight)] text-black hover:brightness-110 border-none mx-auto",children:(0,t.jsx)("span",{className:"font-black uppercase tracking-widest text-sm",children:"Partner With Us"})})]})})]})}])}]);