(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],58041)},98919,e=>{"use strict";let t=(0,e.i(75254).default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);e.s(["Shield",0,t],98919)},42009,e=>{"use strict";let t=(0,e.i(75254).default)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);e.s(["Award",0,t],42009)},83890,e=>{"use strict";var t=e.i(43476),a=e.i(33623),r=e.i(71645),i=e.i(90072),s=e.i(8560);let l={square:0,circle:1,triangle:2,diamond:3},c=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,n=`
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
`;e.s(["default",0,({variant:e="square",pixelSize:o=3,color:d="#B497CF",className:m,style:x,antialias:u=!0,patternScale:f=2,patternDensity:p=1,liquid:h=!1,liquidStrength:g=.1,liquidRadius:b=1,pixelSizeJitter:y=0,enableRipples:w=!0,rippleIntensityScale:j=1,rippleThickness:k=.1,rippleSpeed:N=.3,liquidWobbleSpeed:C=4.5,autoPauseOffscreen:S=!0,speed:E=.5,transparent:R=!0,edgeFade:M=.5,noiseAmount:z=0})=>{let T=(0,r.useRef)(null),P=(0,r.useRef)({visible:!0}),A=(0,r.useRef)(E),I=(0,r.useRef)(null),B=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=T.current;if(!e)return;let t=new IntersectionObserver(([e])=>{P.current.visible=e.isIntersecting},{threshold:.01});return t.observe(e),()=>t.disconnect()},[]),(0,r.useEffect)(()=>{let t=T.current;if(!t)return;A.current=E;let r={antialias:u,liquid:h,noiseAmount:z},m=!1;if(I.current){if(B.current){for(let e of["antialias","liquid","noiseAmount"])if(B.current[e]!==r[e]){m=!0;break}}}else m=!0;if(m){let r,m,E;if(I.current){let e=I.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),I.current=null}let T=document.createElement("canvas"),B=new s.WebGLRenderer({canvas:T,antialias:u,alpha:!0,powerPreference:"high-performance"});B.domElement.style.width="100%",B.domElement.style.height="100%",B.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(B.domElement),R?B.setClearAlpha(0):B.setClearColor(0,1);let q={uResolution:{value:new i.Vector2(0,0)},uTime:{value:0},uColor:{value:new i.Color(d)},uClickPos:{value:Array.from({length:10},()=>new i.Vector2(-1,-1))},uClickTimes:{value:new Float32Array(10)},uShapeType:{value:l[e]??0},uPixelSize:{value:o*B.getPixelRatio()},uScale:{value:f},uDensity:{value:p},uPixelJitter:{value:y},uEnableRipples:{value:+!!w},uRippleSpeed:{value:N},uRippleThickness:{value:k},uRippleIntensity:{value:j},uEdgeFade:{value:M}},F=new i.Scene,V=new i.OrthographicCamera(-1,1,1,-1,0,1),D=new i.ShaderMaterial({vertexShader:c,fragmentShader:n,uniforms:q,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:i.GLSL3}),_=new i.PlaneGeometry(2,2),O=new i.Mesh(_,D);F.add(O);let U=new i.Clock,H=()=>{let e=t.clientWidth||1,a=t.clientHeight||1;B.setSize(e,a,!1),q.uResolution.value.set(B.domElement.width,B.domElement.height),I.current?.composer&&I.current.composer.setSize(B.domElement.width,B.domElement.height),q.uPixelSize.value=o*B.getPixelRatio()};H();let W=new ResizeObserver(H);W.observe(t);let G=1e3*(()=>{if(window.crypto?.getRandomValues){let e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/0xffffffff}return Math.random()})();if(h){var x,L;let e;(m=(()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");if(!t)throw Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);let a=new i.Texture(e);a.minFilter=i.LinearFilter,a.magFilter=i.LinearFilter,a.generateMipmaps=!1;let r=[],s=null,l=6.4,c=e=>{let a={x:64*e.x,y:(1-e.y)*64},r=1;if(e.age<19.2)r=Math.sin(e.age/19.2*Math.PI/2);else{let t;r=-(t=1-(e.age-19.2)/44.8)*(t-2)||0}r*=e.force;let i=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${255*r}`;t.shadowOffsetX=320,t.shadowOffsetY=320,t.shadowBlur=l,t.shadowColor=`rgba(${i},${.22*r})`,t.beginPath(),t.fillStyle=`rgba(${i},${r})`,t.arc(a.x-320,a.y-320,l,0,2*Math.PI),t.fill()};return{canvas:e,texture:a,addTouch:e=>{let t=0,a=0,i=0;if(s){let r=e.x-s.x,l=e.y-s.y;if(0===r&&0===l)return;let c=r*r+l*l,n=Math.sqrt(c);a=r/(n||1),i=l/(n||1),t=Math.min(1e4*c,1)}s={x:e.x,y:e.y},r.push({x:e.x,y:e.y,age:0,force:t,vx:a,vy:i})},update:()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(let e=r.length-1;e>=0;e--){let t=r[e],a=.015625*t.force*(1-t.age/64);t.x+=t.vx*a,t.y+=t.vy*a,t.age++,t.age>64&&r.splice(e,1)}for(let e=0;e<r.length;e++)c(r[e]);a.needsUpdate=!0},set radiusScale(v){l=6.4*v},get radiusScale(){return l/6.4},size:64}})()).radiusScale=b,r=new a.EffectComposer(B);let t=new a.RenderPass(F,V);x=m.texture,L={strength:g,freq:C},e=`
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
    `,E=new a.Effect("LiquidEffect",e,{uniforms:new Map([["uTexture",new i.Uniform(x)],["uStrength",new i.Uniform(L?.strength??.025)],["uTime",new i.Uniform(0)],["uFreq",new i.Uniform(L?.freq??4.5)]])});let s=new a.EffectPass(V,E);s.renderToScreen=!0,r.addPass(t),r.addPass(s)}if(z>0){r||(r=new a.EffectComposer(B)).addPass(new a.RenderPass(F,V));let e=new a.Effect("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new i.Uniform(0)],["uAmount",new i.Uniform(z)]])}),t=new a.EffectPass(V,e);t.renderToScreen=!0,r&&r.passes.length>0&&r.passes.forEach(e=>e.renderToScreen=!1),r.addPass(t)}r&&r.setSize(B.domElement.width,B.domElement.height);let $=e=>{let t=B.domElement.getBoundingClientRect(),a=B.domElement.width/t.width,r=B.domElement.height/t.height;return{fx:(e.clientX-t.left)*a,fy:(t.height-(e.clientY-t.top))*r,w:B.domElement.width,h:B.domElement.height}};B.domElement.addEventListener("pointerdown",e=>{let{fx:t,fy:a}=$(e),r=I.current?.clickIx??0;q.uClickPos.value[r].set(t,a),q.uClickTimes.value[r]=q.uTime.value,I.current&&(I.current.clickIx=(r+1)%10)},{passive:!0}),B.domElement.addEventListener("pointermove",e=>{if(!m)return;let{fx:t,fy:a,w:r,h:i}=$(e);m.addTouch({x:t/r,y:a/i})},{passive:!0});let K=()=>{if(S&&!P.current.visible)return void requestAnimationFrame(K);q.uTime.value=G+U.getElapsedTime()*A.current,E&&(E.uniforms.get("uTime").value=q.uTime.value),r?(m&&m.update(),r.passes.forEach(e=>{let t=e.effects;t&&t.forEach(e=>{let t=e.uniforms?.get("uTime");t&&(t.value=q.uTime.value)})}),r.render()):B.render(F,V),requestAnimationFrame(K)};I.current={renderer:B,scene:F,camera:V,material:D,clock:U,clickIx:0,uniforms:q,resizeObserver:W,raf:requestAnimationFrame(K),quad:O,timeOffset:G,composer:r,touch:m,liquidEffect:E}}else{let t=I.current;if(t.uniforms.uShapeType.value=l[e]??0,t.uniforms.uPixelSize.value=o*t.renderer.getPixelRatio(),t.uniforms.uColor.value.set(d),t.uniforms.uScale.value=f,t.uniforms.uDensity.value=p,t.uniforms.uPixelJitter.value=y,t.uniforms.uEnableRipples.value=+!!w,t.uniforms.uRippleIntensity.value=j,t.uniforms.uRippleThickness.value=k,t.uniforms.uRippleSpeed.value=N,t.uniforms.uEdgeFade.value=M,R?t.renderer.setClearAlpha(0):t.renderer.setClearColor(0,1),t.liquidEffect){let e=t.liquidEffect.uniforms.get("uStrength");e&&(e.value=g);let a=t.liquidEffect.uniforms.get("uFreq");a&&(a.value=C)}t.touch&&(t.touch.radiusScale=b)}return B.current=r,()=>{if(I.current&&m||!I.current)return;let e=I.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),I.current=null}},[u,h,z,o,f,p,w,j,k,N,y,M,R,g,b,C,S,e,d,E]),(0,t.jsx)("div",{ref:T,className:`pixel-blast-container ${m??""}`,style:{...x,width:"100%",height:"100%",position:"relative",overflow:"hidden"},"aria-label":"PixelBlast interactive background"})}])},38982,e=>{"use strict";let t=(0,e.i(75254).default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);e.s(["FlaskConical",0,t],38982)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,t],66992)},15788,e=>{"use strict";let t=(0,e.i(75254).default)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);e.s(["Truck",0,t],15788)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},53802,e=>{"use strict";let t=(0,e.i(75254).default)("magnet",[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]]);e.s(["Magnet",0,t],53802)},72201,e=>{"use strict";let t=(0,e.i(75254).default)("battery",[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]);e.s(["Battery",0,t],72201)},85018,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(98919),i=e.i(39312),s=e.i(42009),l=e.i(66992),c=e.i(72201),n=e.i(21218);let o=(0,e.i(75254).default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);var d=e.i(58041),m=e.i(38982),x=e.i(15788),u=e.i(53802),f=e.i(83890);let p=()=>(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(f.default,{pixelSize:5,color:"#839470",patternDensity:.8,speed:.3})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Our Capabilities"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase",children:["What we ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"recover."})]}),(0,t.jsx)("p",{className:"text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Transforming three integrated waste streams into 11 critical minerals at OEM-grade purity."}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]",children:(0,t.jsx)(d.Database,{size:20})}),(0,t.jsxs)("div",{className:"text-left",children:[(0,t.jsx)("div",{className:"text-white font-bold uppercase text-xs",children:"E-Waste"}),(0,t.jsx)("div",{className:"text-white/40 text-[10px]",children:"PCBs & Chips"})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]",children:(0,t.jsx)(c.Battery,{size:20})}),(0,t.jsxs)("div",{className:"text-left",children:[(0,t.jsx)("div",{className:"text-white font-bold uppercase text-xs",children:"B-Waste"}),(0,t.jsx)("div",{className:"text-white/40 text-[10px]",children:"Li-ion Batteries"})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]",children:(0,t.jsx)(i.Zap,{size:20})}),(0,t.jsxs)("div",{className:"text-left",children:[(0,t.jsx)("div",{className:"text-white font-bold uppercase text-xs",children:"Rare Earth Magnets"}),(0,t.jsx)("div",{className:"text-white/40 text-[10px]",children:"Rare-Earth Elements"})]})]})]})]})})]}),(0,t.jsx)("section",{id:"e-waste",className:"py-10 bg-[var(--c-fg)]/5 relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start mb-10 gap-8",children:[(0,t.jsxs)("div",{className:"max-w-3xl text-left",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4",children:"Integrated Waste Stream 01"}),(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase",children:["E-Waste ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Extraction."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium leading-relaxed",children:"Your decommissioned electronics carry six of the eleven minerals every modern product needs. We pull them out at OEM-grade purity."})]}),(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-fg)] tracking-tighter",children:"22k"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"T/Yr Intake"})]}),(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-lime)] tracking-tighter",children:"≥99.9%"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"Purity"})]})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10",children:[{mineral:"Gold",sym:"Au",id:"79",desc:"Bonding wires in every PCB and high-reliability connector.",icon:(0,t.jsx)(o,{size:20})},{mineral:"Silver",sym:"Ag",id:"47",desc:"PV panels, contacts, RF shielding, switch contacts.",icon:(0,t.jsx)(o,{size:20})},{mineral:"Copper",sym:"Cu",id:"29",desc:"Backbone of every interconnect, cable, and busbar.",icon:(0,t.jsx)(o,{size:20})},{mineral:"Palladium",sym:"Pd",id:"46",desc:"Catalysts, MLCC capacitors, hydrogen membranes.",icon:(0,t.jsx)(o,{size:20})},{mineral:"Aluminium",sym:"Al",id:"13",desc:"Casings, busbars, structural — sold as crushed powder too.",icon:(0,t.jsx)(o,{size:20})},{mineral:"Lead",sym:"Pb",id:"82",desc:"Solder reclaim, radiation shielding, legacy battery anodes.",icon:(0,t.jsx)(o,{size:20})}].map((e,a)=>(0,t.jsxs)("div",{className:"p-6 md:p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-6",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)]",children:e.icon}),(0,t.jsxs)("div",{className:"text-right",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-fg)] tracking-tighter leading-none",children:e.sym}),(0,t.jsxs)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:["#",e.id]})]})]}),(0,t.jsx)("h3",{className:"text-2xl font-black text-[var(--c-fg)] mb-3 uppercase tracking-tight",children:e.mineral}),(0,t.jsx)("p",{className:"text-base text-[var(--c-fg3)] font-medium leading-relaxed opacity-80",children:e.desc})]},a))}),(0,t.jsxs)("div",{className:"bg-[var(--c-bg)] rounded-[40px] p-10 md:p-16 border border-[var(--c-border)] shadow-sm relative overflow-hidden group/process",children:[(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",children:(0,t.jsxs)("svg",{width:"100%",height:"100%",children:[(0,t.jsx)("pattern",{id:"grid-process",width:"60",height:"60",patternUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:"M 60 0 L 0 0 0 60",fill:"none",stroke:"currentColor",strokeWidth:"1"})}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid-process)"})]})}),(0,t.jsxs)("h3",{className:"text-2xl font-black text-[var(--c-fg)] mb-10 uppercase tracking-[0.2em] text-center",children:["The 6-Step ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Extraction Process"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-4 relative",children:[(0,t.jsx)("div",{className:"absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--c-lime)]/20 to-transparent hidden lg:block"}),[{title:"Intake",desc:"Board sorting & gate intake.",icon:(0,t.jsx)(d.Database,{size:28})},{title:"Separation",desc:"Mechanical splitting.",icon:(0,t.jsx)(l.Cpu,{size:28})},{title:"Crushing",icon:(0,t.jsx)(n.Activity,{size:28}),desc:"Powdering for direct sale."},{title:"Hydromet",icon:(0,t.jsx)(m.FlaskConical,{size:28}),desc:"Patented process leach."},{title:"Refining",icon:(0,t.jsx)(s.Award,{size:28}),desc:"KPI certified streams."},{title:"Dispatch",icon:(0,t.jsx)(x.Truck,{size:28}),desc:"OEM off-take delivery."}].map((e,r)=>(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},whileHover:{y:-8},className:"relative z-10 flex flex-col items-center group/item",children:[(0,t.jsxs)("div",{className:"w-20 h-20 rounded-2xl bg-[var(--c-bg2)] border border-[var(--c-border)] flex items-center justify-center mb-6 text-[var(--c-fg3)] group-hover/item:text-[var(--c-lime)] group-hover/item:border-[var(--c-lime)]/50 group-hover/item:shadow-[0_0_30px_rgba(193,255,0,0.1)] transition-all duration-500 relative",children:[(0,t.jsxs)("div",{className:"absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--c-bg)] border border-[var(--c-border)] flex items-center justify-center text-[10px] font-black text-[var(--c-lime)] shadow-sm",children:["0",r+1]}),e.icon]}),(0,t.jsx)("h4",{className:"font-black text-[var(--c-fg)] mb-3 uppercase text-base tracking-tight group-hover/item:text-[var(--c-lime)] transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-xs text-[var(--c-fg3)] font-medium leading-relaxed px-4 opacity-70 group-hover/item:opacity-100 transition-opacity max-w-[160px] mx-auto",children:e.desc})]},r))]}),(0,t.jsx)("div",{className:"mt-20 h-1.5 w-full bg-[var(--c-fg)]/5 rounded-full overflow-hidden max-w-3xl mx-auto",children:(0,t.jsx)(a.motion.div,{initial:{width:0},whileInView:{width:"100%"},viewport:{once:!0},transition:{duration:2,ease:"easeInOut"},className:"h-full bg-gradient-to-r from-transparent via-[var(--c-lime)] to-transparent"})})]})]})}),(0,t.jsx)("section",{id:"b-waste",className:"py-10 bg-[var(--c-bg)]",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start mb-10 gap-8",children:[(0,t.jsxs)("div",{className:"max-w-3xl text-left",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4",children:"Integrated Waste Stream 02"}),(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase",children:["Battery ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Recycling."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium leading-relaxed",children:"Spent EV packs and grid-storage modules. We accept the chemistries that recycle cleanly — and refuse the ones that don't."})]}),(0,t.jsxs)("div",{className:"flex gap-4 md:order-1",children:[(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-fg)] tracking-tighter",children:"100%"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"Traceable"})]}),(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-lime)] tracking-tighter",children:"≥99.5%"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"Li2CO3 Grade"})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10 items-start",children:[(0,t.jsx)("div",{className:"order-2 lg:order-1 space-y-6",children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-6",children:[{mineral:"Lithium",sym:"Li",id:"3",desc:"Cathode chemistry for every EV and grid-storage cell.",icon:(0,t.jsx)(c.Battery,{size:28}),color:"#c1ff00"},{mineral:"Cobalt",sym:"Co",id:"27",desc:"NMC/NCA cathodes — energy density and cycle life.",icon:(0,t.jsx)(c.Battery,{size:28}),color:"#8bc34a"},{mineral:"Nickel",sym:"Ni",id:"28",desc:"High-nickel cathodes for long-range EVs.",icon:(0,t.jsx)(c.Battery,{size:28}),color:"#4d7c0f"}].map((e,r)=>(0,t.jsxs)(a.motion.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*r},whileHover:{scale:1.02},className:"p-8 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] flex flex-col sm:flex-row items-center gap-8 group hover:border-[var(--c-lime)] transition-all shadow-sm",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors",style:{backgroundColor:`${e.color}15`,color:e.color},children:e.icon}),(0,t.jsxs)("div",{className:"flex-1 text-center sm:text-left",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-2 gap-2",children:[(0,t.jsx)("h3",{className:"text-xl font-black text-[var(--c-fg)] uppercase tracking-tight",children:e.mineral}),(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("span",{className:"text-3xl font-black text-[var(--c-fg)] tracking-tighter",style:{color:e.color},children:e.sym}),(0,t.jsxs)("span",{className:"text-xs font-bold text-[var(--c-fg3)] uppercase tracking-widest opacity-50",children:["#",e.id]})]})]}),(0,t.jsx)("p",{className:"text-base text-[var(--c-fg3)] font-medium leading-relaxed",children:e.desc})]})]},r))})}),(0,t.jsx)("div",{className:"order-1 lg:order-2",children:(0,t.jsxs)("div",{className:"rounded-[40px] border border-[var(--c-border)] bg-[var(--c-bg2)] p-10 md:p-16 shadow-sm relative overflow-hidden group/logic",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 w-32 h-32 bg-[var(--c-lime)]/5 rounded-full blur-[60px] pointer-events-none"}),(0,t.jsxs)("h3",{className:"text-2xl font-black text-[var(--c-fg)] mb-10 uppercase tracking-[0.2em] border-b border-[var(--c-border)] pb-8",children:["B-Waste ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Flow Logic"})]}),(0,t.jsxs)("div",{className:"relative space-y-8",children:[(0,t.jsx)("div",{className:"absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--c-lime)]/50 via-[var(--c-border)] to-[var(--c-border)]"}),[{title:"Discharge",desc:"Safe de-energisation and thermal stabilization."},{title:"Extraction",desc:"High-yield black-mass separation protocols."},{title:"Hydromet",desc:"Isolated Lithium, Cobalt, and Nickel leaching."},{title:"Precipitation",desc:"Synthesis of precursor-ready metallic salts."},{title:"Certification",desc:"Third-party lot-based purity assay certificates."},{title:"Off-take",desc:"Direct logistical injection to gigafactory partners."}].map((e,r)=>(0,t.jsxs)(a.motion.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*r},className:"flex gap-8 items-start relative z-10 group/step",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full bg-[var(--c-bg)] border-2 border-[var(--c-border)] flex items-center justify-center shrink-0 group-hover/step:border-[var(--c-lime)] group-hover/step:bg-[var(--c-lime)]/10 transition-all duration-300",children:(0,t.jsxs)("div",{className:"text-[10px] font-black text-[var(--c-lime)]",children:["0",r+1]})}),(0,t.jsxs)("div",{className:"pt-1",children:[(0,t.jsx)("div",{className:"font-black text-[var(--c-fg)] uppercase text-lg mb-1 group-hover/step:text-[var(--c-lime)] transition-colors tracking-tight",children:e.title}),(0,t.jsx)("div",{className:"text-sm text-[var(--c-fg3)] font-medium leading-relaxed max-w-sm",children:e.desc})]})]},r))]}),(0,t.jsxs)("div",{className:"mt-16 pt-8 border-t border-[var(--c-border)] flex items-center gap-4 text-[var(--c-lime)]",children:[(0,t.jsx)(r.Shield,{size:20}),(0,t.jsx)("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:"Closed-Loop Certified Logic"})]})]})})]})]})}),(0,t.jsx)("section",{id:"rare-earth-magnets",className:"py-10 bg-[var(--c-fg)]/5",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start mb-10 gap-8",children:[(0,t.jsxs)("div",{className:"max-w-3xl text-left",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4",children:"Integrated Waste Stream 03"}),(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase",children:["Rare Earth ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Magnets."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium leading-relaxed",children:"Recovering Neodymium and Dysprosium from high-performance magnets used in EV motors, wind turbines, and data center drives."})]}),(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-fg)] tracking-tighter",children:"Circular"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"Supply Chain"})]}),(0,t.jsxs)("div",{className:"p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]",children:[(0,t.jsx)("div",{className:"text-2xl font-black text-[var(--c-lime)] tracking-tighter",children:"98%"}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg3)] uppercase",children:"Recovery Rate"})]})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-10",children:[{mineral:"Neodymium",sym:"Nd",id:"60",desc:"The core of high-strength permanent magnets.",icon:(0,t.jsx)(u.Magnet,{size:24})},{mineral:"Dysprosium",sym:"Dy",id:"66",desc:"Critical for maintaining magnetism at high temperatures.",icon:(0,t.jsx)(u.Magnet,{size:24})}].map((e,a)=>(0,t.jsxs)("div",{className:"p-6 md:p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group hover:border-[var(--c-lime)]/30 transition-all shadow-sm",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shrink-0",children:e.icon}),(0,t.jsxs)("div",{className:"flex-1 w-full",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2",children:[(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-fg)] uppercase",children:e.mineral}),(0,t.jsxs)("div",{className:"text-left sm:text-right",children:[(0,t.jsx)("span",{className:"text-2xl sm:text-3xl font-black text-[var(--c-fg)] tracking-tighter mr-3",children:e.sym}),(0,t.jsxs)("span",{className:"text-xs font-bold text-[var(--c-fg3)] uppercase",children:["#",e.id]})]})]}),(0,t.jsx)("p",{className:"text-base text-[var(--c-fg3)] font-medium leading-relaxed",children:e.desc})]})]},a))})]})})]});e.s(["default",0,function(){return(0,t.jsx)(p,{})}],85018)}]);