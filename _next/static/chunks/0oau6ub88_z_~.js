(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55838,(e,t,r)=>{"use strict";var n=e.r(71645),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,i=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var f="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),o=n[0].inst,f=n[1];return s(function(){o.value=r,o.getSnapshot=t,u(o)&&f({inst:o})},[e,r,t]),i(function(){return u(o)&&f({inst:o}),e(function(){u(o)&&f({inst:o})})},[e]),c(r),r};r.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},2239,(e,t,r)=>{"use strict";t.exports=e.r(55838)},52822,(e,t,r)=>{"use strict";var n=e.r(71645),o=e.r(2239),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,s=n.useRef,c=n.useEffect,u=n.useMemo,f=n.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var l=s(null);if(null===l.current){var v={hasValue:!1,value:null};l.current=v}else v=l.current;var g=i(e,(l=u(function(){function e(e){if(!c){if(c=!0,i=e,e=n(e),void 0!==o&&v.hasValue){var t=v.value;if(o(t,e))return s=t}return s=e}if(t=s,a(i,e))return t;var r=n(e);return void 0!==o&&o(t,r)?(i=e,t):(i=e,s=r)}var i,s,c=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,o]))[0],l[1]);return c(function(){v.hasValue=!0,v.value=g},[g]),f(g),g}},30224,(e,t,r)=>{"use strict";t.exports=e.r(52822)},536,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(8560),o=e.i(90072),a=e.i(75056),i=e.i(80931),s=e.i(82897);Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;let c=Math.PI/180,u=({children:e})=>(0,t.jsx)(a.Canvas,{dpr:[1,2],frameloop:"always",style:{width:"100%",height:"100%"},children:e}),f=`
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2 * n_xyz;
}
`,l=(0,r.forwardRef)(({material:e,width:n,count:a,height:s},c)=>{let u=(0,r.useRef)(null);(0,r.useImperativeHandle)(c,()=>u.current);let f=(0,r.useMemo)(()=>(function(e,t,r){let n=new o.BufferGeometry,a=101*e*2,i=new Float32Array(3*a),s=new Uint32Array(100*e*6),c=new Float32Array(2*a),u=0,f=0,l=0,v=-(e*t+(e-1)*0)/2;for(let n=0;n<e;n++){let e=v+n*(t+0),o=300*Math.random(),a=300*Math.random();for(let n=0;n<=100;n++){let v=r*(n/100-.5),g=[e,v,0],y=[e+t,v,0];i.set([...g,...y],3*u);let d=n/100;if(c.set([o,d+a,o+1,d+a],l),n<100){let e=u,t=u+1,r=u+2,n=u+3;s.set([e,t,r,r,t,n],f),f+=6}u+=2,l+=4}}return n.setAttribute("position",new o.BufferAttribute(i,3)),n.setAttribute("uv",new o.BufferAttribute(c,2)),n.setIndex(new o.BufferAttribute(s,1)),n.computeVertexNormals(),n})(a,n,s),[a,n,s]);return(0,i.useFrame)((e,t)=>{u.current&&(u.current.material.uniforms.time.value+=.1*t)}),(0,t.jsx)("mesh",{ref:u,geometry:f,material:e})});l.displayName="MergedPlanes";let v=(0,r.forwardRef)((e,r)=>(0,t.jsx)(l,{ref:r,material:e.material,width:e.width,count:e.count,height:e.height}));v.displayName="PlaneNoise";let g=({position:e,color:n})=>{let o=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!o.current)return;let e=o.current.shadow.camera;e&&(e.top=24,e.bottom=-24,e.left=-24,e.right=24,e.far=64,o.current.shadow.bias=-.004)},[]),(0,t.jsx)("directionalLight",{ref:o,color:n,intensity:1,position:e})};e.s(["default",0,({beamWidth:e=2,beamHeight:a=15,beamNumber:i=12,lightColor:l="#ffffff",speed:y=2,noiseIntensity:d=1.75,scale:x=.2,rotation:m=0,color:p})=>{let z=(0,r.useRef)(null),h=(0,r.useMemo)(()=>{let e,t;return function(e,t){let r=n.ShaderLib.physical,{vertexShader:a,fragmentShader:i,uniforms:s}=r,c=r.defines??{},u=o.UniformsUtils.clone(s),f=new e(t.material||{});f.color&&(u.diffuse.value=f.color),"roughness"in f&&(u.roughness.value=f.roughness),"metalness"in f&&(u.metalness.value=f.metalness),"envMap"in f&&(u.envMap.value=f.envMap),"envMapIntensity"in f&&(u.envMapIntensity.value=f.envMapIntensity),Object.entries(t.uniforms??{}).forEach(([e,t])=>{u[e]=null!==t&&"object"==typeof t&&"value"in t?t:{value:t}});let l=`${t.header}
${t.vertexHeader??""}
${a}`,v=`${t.header}
${t.fragmentHeader??""}
${i}`;for(let[e,r]of Object.entries(t.vertex??{}))l=l.replace(e,`${e}
${r}`);for(let[e,r]of Object.entries(t.fragment??{}))v=v.replace(e,`${e}
${r}`);return new o.ShaderMaterial({defines:{...c},uniforms:u,vertexShader:l,fragmentShader:v,lights:!0,fog:!!t.material?.fog})}(o.MeshStandardMaterial,{header:`
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${f}`,vertexHeader:`
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return cnoise(noisePos);
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,fragmentHeader:"",vertex:{"#include <begin_vertex>":"transformed.z += getPos(transformed.xyz);","#include <beginnormal_vertex>":"objectNormal = getNormal(position.xyz);"},fragment:{"#include <dithering_fragment>":`
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`},material:{fog:!0},uniforms:{diffuse:new o.Color(...(t=parseInt((e="#000000".replace("#","")).substring(0,2),16),[t/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255])),time:{shared:!0,mixed:!0,linked:!0,value:0},roughness:.3,metalness:.3,uSpeed:{shared:!0,mixed:!0,linked:!0,value:y},envMapIntensity:10,uNoiseIntensity:d,uScale:x}})},[y,d,x]);return(0,t.jsxs)(u,{children:[(0,t.jsxs)("group",{rotation:[0,0,m*c],children:[(0,t.jsx)(v,{ref:z,material:h,count:i,width:e,height:a}),(0,t.jsx)(g,{color:p||l,position:[0,3,10]})]}),(0,t.jsx)("ambientLight",{intensity:1}),(0,t.jsx)("color",{attach:"background",args:["#000000"]}),(0,t.jsx)(s.PerspectiveCamera,{makeDefault:!0,position:[0,0,20],fov:30})]})}],536)}]);