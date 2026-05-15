(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53604,e=>{"use strict";var t=e.i(94964);class a extends t.Geometry{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}e.s(["Triangle",0,a])},82759,e=>{"use strict";var t=e.i(43476),a=e.i(21663),r=e.i(56850),s=e.i(80075);let i={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function o(e){4===e.length&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function l(e){if(void 0===e)return[0,0,0];if(3==arguments.length)return arguments;if(!isNaN(e)){var t;return[((t=parseInt(t=e))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}return"#"===e[0]?o(e):i[e.toLowerCase()]?o(i[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0])}class n extends Array{constructor(e){if(Array.isArray(e))return super(...e);return super(...l(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(l(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}var c=e.i(53604),u=e.i(71645);let d=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,m=`
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
`;e.s(["default",0,function({focal:e=[.5,.5],rotation:i=[1,0],starSpeed:o=.5,density:l=1,hueShift:f=140,disableAnimation:v=!1,speed:x=1,mouseInteraction:p=!0,glowIntensity:h=.3,saturation:g=0,mouseRepulsion:b=!0,repulsionStrength:y=2,twinkleIntensity:w=.3,rotationSpeed:j=.1,autoCenterRepulsion:N=0,transparent:R=!0,...S}){let A=(0,u.useRef)(null),k=(0,u.useRef)({x:.5,y:.5}),T=(0,u.useRef)({x:.5,y:.5}),C=(0,u.useRef)(0),M=(0,u.useRef)(0);return(0,u.useEffect)(()=>{let t,u;if(!A.current)return;let S=A.current,F=new a.Renderer({alpha:R,premultipliedAlpha:!1}),z=F.gl;function O(){F.setSize(+S.offsetWidth,+S.offsetHeight),t&&(t.uniforms.uResolution.value=new n(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height))}R?(z.enable(z.BLEND),z.blendFunc(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA),z.clearColor(0,0,0,0)):z.clearColor(0,0,0,1),window.addEventListener("resize",O,!1),O();let I=new c.Triangle(z);t=new r.Program(z,{vertex:d,fragment:m,uniforms:{uTime:{value:0},uResolution:{value:new n(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height)},uFocal:{value:new Float32Array(e)},uRotation:{value:new Float32Array(i)},uStarSpeed:{value:o},uDensity:{value:l},uHueShift:{value:f},uSpeed:{value:x},uMouse:{value:new Float32Array([T.current.x,T.current.y])},uGlowIntensity:{value:h},uSaturation:{value:g},uMouseRepulsion:{value:b},uTwinkleIntensity:{value:w},uRotationSpeed:{value:j},uRepulsionStrength:{value:y},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:N},uTransparent:{value:R}}});let L=new s.Mesh(z,{geometry:I,program:t});function U(e){let t=S.getBoundingClientRect();k.current={x:(e.clientX-t.left)/t.width,y:1-(e.clientY-t.top)/t.height},C.current=1}function _(){C.current=0}return u=requestAnimationFrame(function e(a){u=requestAnimationFrame(e),v||(t.uniforms.uTime.value=.001*a,t.uniforms.uStarSpeed.value=.001*a*o/10),T.current.x+=(k.current.x-T.current.x)*.05,T.current.y+=(k.current.y-T.current.y)*.05,M.current+=(C.current-M.current)*.05,t.uniforms.uMouse.value[0]=T.current.x,t.uniforms.uMouse.value[1]=T.current.y,t.uniforms.uMouseActiveFactor.value=M.current,F.render({scene:L})}),S.appendChild(z.canvas),p&&(S.addEventListener("mousemove",U),S.addEventListener("mouseleave",_)),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",O),p&&(S.removeEventListener("mousemove",U),S.removeEventListener("mouseleave",_)),S.contains(z.canvas)&&S.removeChild(z.canvas),z.getExtension("WEBGL_lose_context")?.loseContext()}},[e,i,o,l,f,v,x,p,h,g,b,w,j,y,N,R]),(0,t.jsx)("div",{ref:A,style:{width:"100%",height:"100%",position:"relative"},...S})}],82759)},55436,e=>{"use strict";let t=(0,e.i(75254).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",0,t],55436)},84614,e=>{"use strict";let t=(0,e.i(75254).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",0,t],84614)},51720,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(46932),s=e.i(75254);let i=(0,s.default)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),o=(0,s.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var l=e.i(84614),n=e.i(55436),c=e.i(82759),u=e.i(59544);let d=()=>{let[e,s]=(0,a.useState)("All"),d=[{title:"The role of AI in revolutionizing material identification",category:"Technology",date:"Oct 24, 2026",author:"Dr. Sarah Chen",image:"/WBM/media/1.png",excerpt:"How computer vision and machine learning are enabling 99% accuracy in automated sorting of complex electronic waste.",featured:!0},{title:"Automated dismantling: The future of urban mining",category:"Technology",date:"Oct 18, 2026",author:"Marcus Thorne",image:"/WBM/media/2.png",excerpt:"Exploring the next generation of robotic systems designed to safely disassemble delicate electronics at scale."},{title:"Building a closed-loop supply chain for rare earth minerals",category:"Supply Chain",date:"Oct 12, 2026",author:"Elena Rodriguez",image:"/WBM/media/3.png",excerpt:"Strategies for manufacturers to secure critical minerals while reducing reliance on virgin mining operations."},{title:"New regulations in e-waste management: What you need to know",category:"Industry News",date:"Oct 05, 2026",author:"David Haul",image:"/WBM/media/outsideWarehouse.png",excerpt:"An overview of the upcoming environmental directives and how they will impact global manufacturing standards."},{title:"Measuring the carbon footprint of material recovery",category:"Sustainability",date:"Sep 28, 2026",author:"Dr. Julian Voss",image:"/WBM/media/SustainablebyDesign.jpg",excerpt:"A deep dive into the life cycle assessment of recycled minerals versus traditional mining output."}],m="All"===e?d:d.filter(t=>t.category===e),f=d.find(e=>e.featured);return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[80vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(c.default,{speed:.3,density:2,glowIntensity:.5,twinkleIntensity:.8})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Knowledge Hub"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:["Insights & ",(0,t.jsx)("br",{className:"hidden sm:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Innovation."})]}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Recovering the minerals that power the next decade. Stay updated with the latest in material intelligence."})]})})]}),f&&(0,t.jsx)("section",{className:"pt-24 pb-0 relative z-20",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"bg-[var(--c-bg)] rounded-[10px] overflow-hidden shadow-sm flex flex-col lg:flex-row border border-[var(--c-border)]",children:[(0,t.jsx)("div",{className:"lg:w-1/2 h-[400px] lg:h-auto overflow-hidden",children:(0,t.jsx)("img",{src:f.image,alt:"string"==typeof f.title?f.title:"Featured Insight",className:"w-full h-full object-cover"})}),(0,t.jsxs)("div",{className:"lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 text-sm font-bold text-[var(--c-lime)] mb-6 uppercase tracking-widest",children:[(0,t.jsx)(i,{size:16}),f.category]}),(0,t.jsxs)("h2",{className:"section-title  font-bold text-[var(--c-fg)] leading-tight mb-6 tracking-tight",children:[f.title.split(" ").slice(0,-2).join(" ")," ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:f.title.split(" ").slice(-2).join(" ")})]}),(0,t.jsx)("p",{className:"text-[var(--c-fg)] text-lg mb-8 leading-relaxed font-medium",children:f.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-8 text-sm text-[var(--c-fg)]/70 font-bold mb-10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(o,{size:16}),f.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(l.User,{size:16}),f.author]})]}),(0,t.jsx)(u.default,{variant:"ghost",className:"px-0 text-[var(--c-fg)] hover:bg-transparent hover:text-[var(--c-lime)] font-black uppercase tracking-widest text-[10px]",children:"Read full article"})]})]})})}),(0,t.jsx)("section",{className:"pt-24 pb-12",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-8",children:[(0,t.jsx)("div",{className:"flex flex-wrap items-center gap-4",children:["All","Technology","Sustainability","Supply Chain","Industry News"].map(a=>(0,t.jsx)("button",{onClick:()=>s(a),className:`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${e===a?"bg-[var(--c-fg)] text-[var(--c-bg)] shadow-lg scale-105":"bg-[var(--c-bg2)] text-[var(--c-fg)]/70 border border-[var(--c-border)] hover:border-[var(--c-lime)] hover:text-[var(--c-fg)]"}`,children:a},a))}),(0,t.jsxs)("div",{className:"relative w-full md:w-80 group",children:[(0,t.jsx)(n.Search,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-[var(--c-fg2)] group-focus-within:text-[var(--c-lime)] transition-colors duration-300",size:18}),(0,t.jsx)("input",{type:"text",placeholder:"Search insights...",className:"w-full pl-14 pr-6 py-3.5 bg-[var(--c-bg2)] border border-[var(--c-border)] rounded-full text-sm font-medium text-[var(--c-fg)] placeholder:text-[var(--c-fg2)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--c-lime)]/20 focus:border-[var(--c-lime)]/50 transition-all duration-300 shadow-xl"})]})]})})}),(0,t.jsx)("section",{className:"pt-0 pb-24",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",children:m.filter(e=>!e.featured).map((e,a)=>(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*a},className:"group cursor-pointer",children:[(0,t.jsx)("div",{className:"aspect-[16/10] rounded-[10px] overflow-hidden mb-6 shadow-sm border border-[var(--c-border)]",children:(0,t.jsx)("img",{src:e.image,alt:"string"==typeof e.title?e.title:"Insight",className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"})}),(0,t.jsx)("div",{className:"flex items-center gap-3 text-xs font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:e.category}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-fg)] mb-4 leading-tight group-hover:text-[var(--c-lime)] transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-[var(--c-fg2)] text-sm mb-6 leading-relaxed line-clamp-2",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between text-[10px] font-bold text-[var(--c-fg2)]/60 uppercase tracking-widest border-t border-[var(--c-border)] pt-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(o,{size:12}),e.date]}),(0,t.jsx)("button",{className:"text-[var(--c-fg)] hover:text-[var(--c-lime)] transition-colors font-black uppercase tracking-widest text-[10px]",children:"Read More"})]})]},a))})})}),(0,t.jsx)("section",{className:"py-10 bg-[var(--c-fg)]/5",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-6 text-center",children:[(0,t.jsx)("div",{className:"w-16 h-16 bg-[var(--c-lime)]/10 rounded-[10px] flex items-center justify-center mx-auto mb-8",children:(0,t.jsx)(i,{size:32,className:"text-[var(--c-lime)]"})}),(0,t.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] mb-6 tracking-tight uppercase",children:["Stay ahead of the ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"curve"})]}),(0,t.jsx)("p",{className:"text-[var(--c-fg2)] text-lg font-medium mb-10 max-w-2xl mx-auto",children:"Subscribe to our newsletter to receive the latest industry insights, technology updates, and sustainable sourcing reports directly in your inbox."}),(0,t.jsxs)("form",{className:"flex flex-col sm:flex-row gap-4 max-w-lg mx-auto",children:[(0,t.jsx)("input",{type:"email",placeholder:"Enter your email",className:"flex-grow px-6 py-4 rounded-[10px] bg-[var(--c-bg2)] border border-[var(--c-border)] text-[var(--c-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--c-lime)]/20 shadow-sm",required:!0}),(0,t.jsx)(u.default,{onClick:()=>{},className:"px-10",children:"Subscribe"})]}),(0,t.jsx)("p",{className:"text-xs text-[var(--c-fg2)]/60 mt-6 font-medium",children:"By subscribing, you agree to our Privacy Policy and consent to receive marketing communications."})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(d,{})}],51720)}]);