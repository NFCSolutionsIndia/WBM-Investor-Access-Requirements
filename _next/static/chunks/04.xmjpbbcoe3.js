(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83890,e=>{"use strict";var t=e.i(43476),i=e.i(33623),r=e.i(71645),l=e.i(90072),a=e.i(8560);let o={square:0,circle:1,triangle:2,diamond:3},n=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,u=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     2
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`;e.s(["default",0,({variant:e="square",pixelSize:s=3,color:c="#B497CF",className:f,style:d,antialias:m=!0,patternScale:p=2,patternDensity:h=1,liquid:x=!1,liquidStrength:g=.1,liquidRadius:y=1,pixelSizeJitter:w=0,enableRipples:S=!0,rippleIntensityScale:C=1,rippleThickness:E=.1,rippleSpeed:R=.3,liquidWobbleSpeed:T=4.5,autoPauseOffscreen:b=!0,speed:P=.5,transparent:A=!0,edgeFade:k=.5,noiseAmount:M=0})=>{let z=(0,r.useRef)(null),I=(0,r.useRef)({visible:!0}),F=(0,r.useRef)(P),q=(0,r.useRef)(null),B=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=z.current;if(!e)return;let t=new IntersectionObserver(([e])=>{I.current.visible=e.isIntersecting},{threshold:.01});return t.observe(e),()=>t.disconnect()},[]),(0,r.useEffect)(()=>{let t=z.current;if(!t)return;F.current=P;let r={antialias:m,liquid:x,noiseAmount:M},f=!1;if(q.current){if(B.current){for(let e of["antialias","liquid","noiseAmount"])if(B.current[e]!==r[e]){f=!0;break}}}else f=!0;if(f){let r,f,P;if(q.current){let e=q.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),q.current=null}let z=document.createElement("canvas"),B=new a.WebGLRenderer({canvas:z,antialias:m,alpha:!0,powerPreference:"high-performance"});B.domElement.style.width="100%",B.domElement.style.height="100%",B.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(B.domElement),A?B.setClearAlpha(0):B.setClearColor(0,1);let U={uResolution:{value:new l.Vector2(0,0)},uTime:{value:0},uColor:{value:new l.Color(c)},uClickPos:{value:Array.from({length:10},()=>new l.Vector2(-1,-1))},uClickTimes:{value:new Float32Array(10)},uShapeType:{value:o[e]??0},uPixelSize:{value:s*B.getPixelRatio()},uScale:{value:p},uDensity:{value:h},uPixelJitter:{value:w},uEnableRipples:{value:+!!S},uRippleSpeed:{value:R},uRippleThickness:{value:E},uRippleIntensity:{value:C},uEdgeFade:{value:k}},_=new l.Scene,O=new l.OrthographicCamera(-1,1,1,-1,0,1),N=new l.ShaderMaterial({vertexShader:n,fragmentShader:u,uniforms:U,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:l.GLSL3}),D=new l.PlaneGeometry(2,2),j=new l.Mesh(D,N);_.add(j);let V=new l.Clock,G=()=>{let e=t.clientWidth||1,i=t.clientHeight||1;B.setSize(e,i,!1),U.uResolution.value.set(B.domElement.width,B.domElement.height),q.current?.composer&&q.current.composer.setSize(B.domElement.width,B.domElement.height),U.uPixelSize.value=s*B.getPixelRatio()};G();let H=new ResizeObserver(G);H.observe(t);let $=1e3*(()=>{if(window.crypto?.getRandomValues){let e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/0xffffffff}return Math.random()})();if(x){var d,L;let e;(f=(()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");if(!t)throw Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);let i=new l.Texture(e);i.minFilter=l.LinearFilter,i.magFilter=l.LinearFilter,i.generateMipmaps=!1;let r=[],a=null,o=6.4,n=e=>{let i={x:64*e.x,y:(1-e.y)*64},r=1;if(e.age<19.2)r=Math.sin(e.age/19.2*Math.PI/2);else{let t;r=-(t=1-(e.age-19.2)/44.8)*(t-2)||0}r*=e.force;let l=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${255*r}`;t.shadowOffsetX=320,t.shadowOffsetY=320,t.shadowBlur=o,t.shadowColor=`rgba(${l},${.22*r})`,t.beginPath(),t.fillStyle=`rgba(${l},${r})`,t.arc(i.x-320,i.y-320,o,0,2*Math.PI),t.fill()};return{canvas:e,texture:i,addTouch:e=>{let t=0,i=0,l=0;if(a){let r=e.x-a.x,o=e.y-a.y;if(0===r&&0===o)return;let n=r*r+o*o,u=Math.sqrt(n);i=r/(u||1),l=o/(u||1),t=Math.min(1e4*n,1)}a={x:e.x,y:e.y},r.push({x:e.x,y:e.y,age:0,force:t,vx:i,vy:l})},update:()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(let e=r.length-1;e>=0;e--){let t=r[e],i=.015625*t.force*(1-t.age/64);t.x+=t.vx*i,t.y+=t.vy*i,t.age++,t.age>64&&r.splice(e,1)}for(let e=0;e<r.length;e++)n(r[e]);i.needsUpdate=!0},set radiusScale(v){o=6.4*v},get radiusScale(){return o/6.4},size:64}})()).radiusScale=y,r=new i.EffectComposer(B);let t=new i.RenderPass(_,O);d=f.texture,L={strength:g,freq:T},e=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `,P=new i.Effect("LiquidEffect",e,{uniforms:new Map([["uTexture",new l.Uniform(d)],["uStrength",new l.Uniform(L?.strength??.025)],["uTime",new l.Uniform(0)],["uFreq",new l.Uniform(L?.freq??4.5)]])});let a=new i.EffectPass(O,P);a.renderToScreen=!0,r.addPass(t),r.addPass(a)}if(M>0){r||(r=new i.EffectComposer(B)).addPass(new i.RenderPass(_,O));let e=new i.Effect("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new l.Uniform(0)],["uAmount",new l.Uniform(M)]])}),t=new i.EffectPass(O,e);t.renderToScreen=!0,r&&r.passes.length>0&&r.passes.forEach(e=>e.renderToScreen=!1),r.addPass(t)}r&&r.setSize(B.domElement.width,B.domElement.height);let K=e=>{let t=B.domElement.getBoundingClientRect(),i=B.domElement.width/t.width,r=B.domElement.height/t.height;return{fx:(e.clientX-t.left)*i,fy:(t.height-(e.clientY-t.top))*r,w:B.domElement.width,h:B.domElement.height}};B.domElement.addEventListener("pointerdown",e=>{let{fx:t,fy:i}=K(e),r=q.current?.clickIx??0;U.uClickPos.value[r].set(t,i),U.uClickTimes.value[r]=U.uTime.value,q.current&&(q.current.clickIx=(r+1)%10)},{passive:!0}),B.domElement.addEventListener("pointermove",e=>{if(!f)return;let{fx:t,fy:i,w:r,h:l}=K(e);f.addTouch({x:t/r,y:i/l})},{passive:!0});let X=()=>{if(b&&!I.current.visible)return void requestAnimationFrame(X);U.uTime.value=$+V.getElapsedTime()*F.current,P&&(P.uniforms.get("uTime").value=U.uTime.value),r?(f&&f.update(),r.passes.forEach(e=>{let t=e.effects;t&&t.forEach(e=>{let t=e.uniforms?.get("uTime");t&&(t.value=U.uTime.value)})}),r.render()):B.render(_,O),requestAnimationFrame(X)};q.current={renderer:B,scene:_,camera:O,material:N,clock:V,clickIx:0,uniforms:U,resizeObserver:H,raf:requestAnimationFrame(X),quad:j,timeOffset:$,composer:r,touch:f,liquidEffect:P}}else{let t=q.current;if(t.uniforms.uShapeType.value=o[e]??0,t.uniforms.uPixelSize.value=s*t.renderer.getPixelRatio(),t.uniforms.uColor.value.set(c),t.uniforms.uScale.value=p,t.uniforms.uDensity.value=h,t.uniforms.uPixelJitter.value=w,t.uniforms.uEnableRipples.value=+!!S,t.uniforms.uRippleIntensity.value=C,t.uniforms.uRippleThickness.value=E,t.uniforms.uRippleSpeed.value=R,t.uniforms.uEdgeFade.value=k,A?t.renderer.setClearAlpha(0):t.renderer.setClearColor(0,1),t.liquidEffect){let e=t.liquidEffect.uniforms.get("uStrength");e&&(e.value=g);let i=t.liquidEffect.uniforms.get("uFreq");i&&(i.value=T)}t.touch&&(t.touch.radiusScale=y)}return B.current=r,()=>{if(q.current&&f||!q.current)return;let e=q.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),q.current=null}},[m,x,M,s,p,h,S,C,E,R,w,k,A,g,y,T,b,e,c,P]),(0,t.jsx)("div",{ref:z,className:`pixel-blast-container ${f??""}`,style:{...d,width:"100%",height:"100%",position:"relative",overflow:"hidden"},"aria-label":"PixelBlast interactive background"})}])},45923,e=>{"use strict";var t=e.i(43476),i=e.i(46932),r=e.i(83890),l=e.i(59544);e.s(["default",0,({title:e,subtitle:a,ctaText:o,ctaHref:n})=>(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0 opacity-20 dark:opacity-40",children:(0,t.jsx)(r.default,{pixelSize:10,color:"#839470",patternDensity:.4,speed:.2})}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"relative z-10 text-center max-w-2xl px-6",children:[(0,t.jsx)("h1",{className:"text-3xl md:text-[64px] font-black text-[var(--c-fg)] mb-6 uppercase tracking-tighter leading-none",children:e}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg2)] mb-10 font-medium",children:a}),(0,t.jsx)(l.default,{href:n||"/contact",size:"lg",children:o||"Get Started"})]})]})])},88631,e=>{"use strict";var t=e.i(43476),i=e.i(45923);e.s(["default",0,function(){return(0,t.jsx)(i.default,{title:"Request Off-take MOU",subtitle:"Start the process to secure engineering-grade, reclaimed minerals with verifiable chain of custody.",ctaText:"Submit Request",ctaHref:"/contact"})}])}]);