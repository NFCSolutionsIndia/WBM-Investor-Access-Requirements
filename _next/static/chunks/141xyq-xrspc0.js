(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",0,t],48256)},57303,e=>{"use strict";var t=e.i(43476),r=e.i(33623),i=e.i(71645),s=e.i(90072),o=e.i(8560);let a={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}};e.s(["default",0,({effectOptions:e,speed:n,color:l})=>{let c=(0,i.useRef)(null),u=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(u.current){u.current.dispose(),u.current=null;let e=c.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let t={uFreq:{value:new s.Vector3(3,6,10)},uAmp:{value:new s.Vector3(30,30,20)}},i={uFreq:{value:new s.Vector2(5,2)},uAmp:{value:new s.Vector2(25,15)}},d={uFreq:{value:new s.Vector2(2,3)},uAmp:{value:new s.Vector2(35,10)}},h={uFreq:{value:new s.Vector4(4,8,8,1)},uAmp:{value:new s.Vector4(25,5,10,10)}},m={uFreq:{value:new s.Vector2(4,8)},uAmp:{value:new s.Vector2(10,20)},uPowY:{value:new s.Vector2(20,2)}},p=e=>.5*Math.sin(e)+.5,f={mountainDistortion:{uniforms:t,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(e,r)=>{let i=t.uFreq.value,o=t.uAmp.value,a=new s.Vector3(Math.cos(e*Math.PI*i.x+r)*o.x-Math.cos(.02*Math.PI*i.x+r)*o.x,p(e*Math.PI*i.y+r)*o.y-p(.02*Math.PI*i.y+r)*o.y,p(e*Math.PI*i.z+r)*o.z-p(.02*Math.PI*i.z+r)*o.z),n=new s.Vector3(2,2,2),l=new s.Vector3(0,0,-5);return a.multiply(n).add(l)}},xyDistortion:{uniforms:i,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let r=i.uFreq.value,o=i.uAmp.value,a=new s.Vector3(Math.cos(e*Math.PI*r.x+t)*o.x-Math.cos(.02*Math.PI*r.x+t)*o.x,Math.sin(e*Math.PI*r.y+t+Math.PI/2)*o.y-Math.sin(.02*Math.PI*r.y+t+Math.PI/2)*o.y,0),n=new s.Vector3(2,.4,1),l=new s.Vector3(0,0,-3);return a.multiply(n).add(l)}},LongRaceDistortion:{uniforms:d,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let r=d.uFreq.value,i=d.uAmp.value,o=new s.Vector3(Math.sin(e*Math.PI*r.x+t)*i.x-Math.sin(.0125*Math.PI*r.x+t)*i.x,Math.sin(e*Math.PI*r.y+t)*i.y-Math.sin(.0125*Math.PI*r.y+t)*i.y,0),a=new s.Vector3(1,1,0),n=new s.Vector3(0,0,-5);return o.multiply(a).add(n)}},turbulentDistortion:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(e,t)=>{let r=h.uFreq.value,i=h.uAmp.value,o=e=>Math.cos(Math.PI*e*r.x+t)*i.x+Math.pow(Math.cos(Math.PI*e*r.y+t*(r.y/r.x)),2)*i.y,a=e=>-p(Math.PI*e*r.z+t)*i.z-Math.pow(p(Math.PI*e*r.w+t/(r.z/r.w)),5)*i.w,n=new s.Vector3(o(e)-o(e+.007),a(e)-a(e+.007),0),l=new s.Vector3(-2,-5,0),c=new s.Vector3(0,0,-10);return n.multiply(l).add(c)}},turbulentDistortionStill:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:m,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:m,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(e,t)=>{let r=m.uFreq.value,i=m.uAmp.value,o=m.uPowY.value,a=e=>Math.sin(e*Math.PI*r.x+t)*i.x,n=e=>Math.pow(e*o.x,o.y)+Math.sin(e*Math.PI*r.y+t)*i.y,l=new s.Vector3(a(e)-a(e+.01),n(e)-n(e+.01),0),c=new s.Vector3(-2,-4,0),u=new s.Vector3(0,0,-10);return l.multiply(c).add(u)}}},g={uDistortionX:{value:new s.Vector2(80,3)},uDistortionY:{value:new s.Vector2(-40,2.5)}},v=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,x=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,w=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function b(e,t,r=.1,i=.001){let s=(t-e)*r;return Math.abs(s)<i&&(s=t-e),s}class y{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,r,i,s){this.webgl=e,this.options=t,this.colors=r,this.speed=i,this.fade=s}init(){let e=this.options,t=new s.LineCurve3(new s.Vector3(0,0,0),new s.Vector3(0,0,-1)),r=new s.TubeGeometry(t,40,1,8,!1),i=new s.InstancedBufferGeometry().copy(r);i.instanceCount=2*e.lightPairsPerRoadWay;let o=e.roadWidth/e.lanesPerRoad,a=[],n=[],l=[],c=this.colors;c=Array.isArray(c)?c.map(e=>new s.Color(e)):new s.Color(c);for(let t=0;t<e.lightPairsPerRoadWay;t++){let r=x(e.carLightsRadius),i=x(e.carLightsLength),s=x(this.speed),u=t%e.lanesPerRoad*o-e.roadWidth/2+o/2,d=x(e.carWidthPercentage)*o;u+=x(e.carShiftX)*o;let h=x(e.carFloorSeparation)+1.3*r,m=-x(e.length);a.push(u-d/2),a.push(h),a.push(m),a.push(u+d/2),a.push(h),a.push(m),n.push(r),n.push(i),n.push(s),n.push(r),n.push(i),n.push(s);let p=w(c);l.push(p.r),l.push(p.g),l.push(p.b),l.push(p.r),l.push(p.g),l.push(p.b)}i.setAttribute("aOffset",new s.InstancedBufferAttribute(new Float32Array(a),3,!1)),i.setAttribute("aMetrics",new s.InstancedBufferAttribute(new Float32Array(n),3,!1)),i.setAttribute("aColor",new s.InstancedBufferAttribute(new Float32Array(l),3,!1));let u=new s.ShaderMaterial({fragmentShader:k,vertexShader:P,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});u.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new s.Mesh(i,u);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let k=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${o.ShaderChunk.fog_fragment}
      }
    `,P=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${o.ShaderChunk.fog_vertex}
      }
    `;class M{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new s.PlaneGeometry(1,1),r=new s.InstancedBufferGeometry().copy(t),i=e.totalSideLightSticks;r.instanceCount=i;let o=e.length/(i-1),a=[],n=[],l=[],c=e.colors.sticks;c=Array.isArray(c)?c.map(e=>new s.Color(e)):new s.Color(c);for(let t=0;t<i;t++){let r=x(e.lightStickWidth),i=x(e.lightStickHeight);a.push((t-1)*o*2+o*Math.random());let s=w(c);n.push(s.r),n.push(s.g),n.push(s.b),l.push(r),l.push(i)}r.setAttribute("aOffset",new s.InstancedBufferAttribute(new Float32Array(a),1,!1)),r.setAttribute("aColor",new s.InstancedBufferAttribute(new Float32Array(n),3,!1)),r.setAttribute("aMetrics",new s.InstancedBufferAttribute(new Float32Array(l),2,!1));let u=new s.ShaderMaterial({fragmentShader:S,vertexShader:j,side:s.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});u.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new s.Mesh(r,u);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let j=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${o.ShaderChunk.fog_vertex}
      }
    `,S=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${o.ShaderChunk.fog_fragment}
      }
    `;class L{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,r){let i=this.options,o=new s.PlaneGeometry(r?i.roadWidth:i.islandWidth,i.length,20,100),a={uTravelLength:{value:i.length},uColor:{value:new s.Color(r?i.colors.roadColor:i.colors.islandColor)},uTime:this.uTime};r&&(a=Object.assign(a,{uLanes:{value:i.lanesPerRoad},uBrokenLinesColor:{value:new s.Color(i.colors.brokenLines)},uShoulderLinesColor:{value:new s.Color(i.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:i.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:i.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:i.brokenLinesWidthPercentage}}));let n=new s.ShaderMaterial({fragmentShader:r?T:A,vertexShader:D,side:s.DoubleSide,uniforms:Object.assign(a,this.webgl.fogUniforms,i.distortion.uniforms)});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",i.distortion.getDistortion)};let l=new s.Mesh(o,n);return l.rotation.x=-Math.PI/2,l.position.z=-i.length/2,l.position.x+=(this.options.islandWidth/2+i.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let C=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${o.ShaderChunk.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${o.ShaderChunk.fog_fragment}
      }
    `,A=C.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),N=`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `,F=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,T=C.replace("#include <roadMarkings_fragment>",F).replace("#include <roadMarkings_vars>",N),D=`
      #define USE_FOG;
      uniform float uTime;
      ${o.ShaderChunk.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${o.ShaderChunk.fog_vertex}
      }
    `,I=c.current;if(!I)return;let z={...a,...e,speedUp:void 0!==n?n:e?.speedUp??a.speedUp,colors:{...a.colors,...e?.colors||{},sticks:l?parseInt(l.replace("#","0x"),16):e?.colors?.sticks??a.colors.sticks}};z.distortion=f[z.distortion];let E=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:g,getDistortion:v}),this.container=e,this.hasValidSize=!1;const i=Math.max(1,e.offsetWidth),a=Math.max(1,e.offsetHeight);this.renderer=new o.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(i,a,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new r.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new s.PerspectiveCamera(t.fov,i/a,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new s.Scene,this.scene.background=null;let n=new s.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=n,this.fogUniforms={fogColor:{value:n.color},fogNear:{value:n.near},fogFar:{value:n.far}},this.clock=new s.Clock,this.assets={},this.disposed=!1,this.road=new L(this,t),this.leftCarLights=new y(this,t,t.colors.leftCars,t.movingAwaySpeed,new s.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new y(this,t,t.colors.rightCars,t.movingCloserSpeed,new s.Vector2(1,0+t.carLightsFade)),this.leftSticks=new M(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new r.RenderPass(this.scene,this.camera),this.bloomPass=new r.EffectPass(this.camera,new r.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new r.EffectPass(this.camera,new r.SMAAEffect({preset:r.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let i=new s.LoadingManager(t),o=new Image,a=new Image;e.smaa={},o.addEventListener("load",function(){e.smaa.search=this,i.itemEnd("smaa-search")}),a.addEventListener("load",function(){e.smaa.area=this,i.itemEnd("smaa-area")}),i.itemStart("smaa-search"),i.itemStart("smaa-area"),o.src=r.SMAAEffect.searchImageDataURL,a.src=r.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=b(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let r=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(r),this.leftCarLights.update(r),this.leftSticks.update(r),this.road.update(r);let i=!1,o=b(this.camera.fov,this.fovTarget,t);if(0!==o&&(this.camera.fov+=o*e*6,i=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,r);this.camera.lookAt(new s.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),i=!0}i&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,r){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,r),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let r=e.domElement,i=r.clientWidth,s=r.clientHeight;if(i<=0||s<=0)return!1;let o=r.width!==i||r.height!==s;return o&&t(i,s,!1),o}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(I,z);u.current=E;let q=!1;return E.loadAssets().then(()=>{q||E.disposed||E.init()}),()=>{q=!0,u.current&&(u.current.dispose(),u.current=null)}},[e]),(0,t.jsx)("div",{ref:c,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}])},31343,2778,41413,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);e.s(["Play",0,r],31343);let i=(0,t.default)("rewind",[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",key:"2a1g8i"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",key:"rg3s36"}]]);e.s(["Rewind",0,i],2778);let s=(0,t.default)("fast-forward",[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]]);e.s(["FastForward",0,s],41413)},46897,e=>{"use strict";let t=(0,e.i(75254).default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",0,t],46897)},85005,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(31343),s=e.i(75254);let o=(0,s.default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]),a=(0,s.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);var n=e.i(2778),l=e.i(41413);let c=(0,s.default)("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),u=(0,s.default)("volume-x",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),d=(0,s.default)("maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]),h=(0,s.default)("minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);var m=e.i(46932),p=e.i(88653);e.s(["CustomVideoPlayer",0,({src:e,badgeText:s,title:f,subtitle:g,className:v="rounded-[24px] md:rounded-[32px] border border-[var(--c-border)]"})=>{let x=(0,r.useRef)(null),w=(0,r.useRef)(null),b=(0,r.useRef)(null),[y,k]=(0,r.useState)(!1),[P,M]=(0,r.useState)(0),[j,S]=(0,r.useState)(0),[L,C]=(0,r.useState)(1),[A,N]=(0,r.useState)(!1),[F,T]=(0,r.useState)(1),[D,I]=(0,r.useState)(!0),[z,E]=(0,r.useState)(!1),[q,W]=(0,r.useState)(!1),U=(0,r.useRef)(null),V=e=>{if(isNaN(e))return"0:00";let t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r<10?"0":""}${r}`},R=()=>{x.current&&(y?x.current.pause():x.current.play())},_=e=>{if(!x.current)return;let t=x.current.currentTime+e;t=Math.max(0,Math.min(t,j)),x.current.currentTime=t,M(t)},O=()=>{x.current&&(A?(x.current.muted=!1,x.current.volume=F,C(F),N(!1)):(T(L),x.current.muted=!0,x.current.volume=0,C(0),N(!0)))},B=()=>{if(w.current)if(document.fullscreenElement)document.exitFullscreen&&document.exitFullscreen();else{let e=w.current;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}};(0,r.useEffect)(()=>{let e=()=>{E(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",e),document.addEventListener("webkitfullscreenchange",e),()=>{document.removeEventListener("fullscreenchange",e),document.removeEventListener("webkitfullscreenchange",e)}},[]);let Y=()=>{I(!0),U.current&&clearTimeout(U.current),y&&!q&&(U.current=setTimeout(()=>{I(!1)},2500))};(0,r.useEffect)(()=>(y?Y():(I(!0),U.current&&clearTimeout(U.current)),()=>{U.current&&clearTimeout(U.current)}),[y,q]);let X=e=>{if(!b.current||!x.current)return 0;let t=b.current.getBoundingClientRect();return Math.max(0,Math.min(1,(e-t.left)/t.width))*j};return(0,r.useEffect)(()=>{if(!q)return;let e=e=>{if(!x.current)return;let t=X(e.clientX);x.current.currentTime=t,M(t)},t=()=>{W(!1)};return window.addEventListener("mousemove",e),window.addEventListener("mouseup",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",t)}},[q,j]),(0,t.jsxs)("div",{ref:w,onMouseMove:Y,onMouseLeave:()=>y&&I(!1),onKeyDown:e=>{" "===e.key||"Spacebar"===e.key?(e.preventDefault(),R()):"ArrowLeft"===e.key?(e.preventDefault(),_(-5)):"ArrowRight"===e.key?(e.preventDefault(),_(5)):"m"===e.key.toLowerCase()?(e.preventDefault(),O()):"f"===e.key.toLowerCase()&&(e.preventDefault(),B())},tabIndex:0,className:`relative w-full overflow-hidden bg-[#0a0a0a] group shadow-2xl focus:outline-none select-none ${v}`,children:[(0,t.jsx)("video",{ref:x,src:e,playsInline:!0,controlsList:"nodownload",onContextMenu:e=>e.preventDefault(),disablePictureInPicture:!0,onTimeUpdate:()=>{x.current&&!q&&M(x.current.currentTime)},onLoadedMetadata:()=>{x.current&&S(x.current.duration)},onPlay:()=>k(!0),onPause:()=>k(!1),className:"w-full h-auto block cursor-pointer",onClick:R,onDoubleClick:B}),(0,t.jsx)(p.AnimatePresence,{children:!y&&(0,t.jsx)(m.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 flex items-center justify-center z-25 bg-black/25 backdrop-blur-[2px] pointer-events-none",children:(0,t.jsx)("div",{className:"w-20 h-20 md:w-24 md:h-24 bg-[var(--c-highlight)]/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(131,148,112,0.3)] border border-white/20 pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-200",onClick:e=>{e.stopPropagation(),R()},children:(0,t.jsx)(i.Play,{size:44,className:"text-white fill-white ml-1.5"})})})}),(0,t.jsx)(p.AnimatePresence,{children:D&&(0,t.jsxs)(m.motion.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute top-6 left-6 right-6 flex justify-between items-center z-30 pointer-events-none",children:[s&&(0,t.jsxs)("div",{className:"flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 pointer-events-auto",children:[(0,t.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-[var(--c-highlight)] animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] font-black text-white uppercase tracking-widest",children:s})]}),!z&&(0,t.jsx)("button",{onClick:e=>{e.stopPropagation(),B()},className:"w-10 h-10 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--c-highlight)] hover:text-black transition-all pointer-events-auto ml-auto",children:(0,t.jsx)(d,{size:18})})]})}),(0,t.jsx)(p.AnimatePresence,{children:D&&(f||g)&&(0,t.jsxs)(m.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute bottom-20 left-8 right-8 text-left z-20 pointer-events-none",children:[g&&(0,t.jsx)("div",{className:"text-[10px] font-black text-[var(--c-highlight)] uppercase tracking-widest mb-1",children:g}),f&&(0,t.jsx)("div",{className:"text-xl md:text-2xl font-black text-white uppercase tracking-tighter",children:f})]})}),(0,t.jsx)(p.AnimatePresence,{children:D&&(0,t.jsxs)(m.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/75 to-transparent px-4 pb-4 pt-10 z-30 flex flex-col gap-3",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("div",{className:"px-2",children:(0,t.jsxs)("div",{ref:b,className:"relative w-full h-1 bg-white/20 hover:h-2 cursor-pointer rounded-full transition-all group/slider",onClick:e=>{if(!x.current)return;let t=X(e.clientX);x.current.currentTime=t,M(t)},onMouseDown:()=>W(!0),children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 h-full bg-[var(--c-lime)] rounded-full",style:{width:`${P/(j||1)*100}%`}}),(0,t.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-[var(--c-lime)] opacity-0 group-hover/slider:opacity-100 transition-opacity pointer-events-none",style:{left:`calc(${P/(j||1)*100}% - 6px)`}})]})}),(0,t.jsxs)("div",{className:"flex items-center justify-between px-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("button",{onClick:R,className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:y?"Pause":"Play",children:y?(0,t.jsx)(o,{size:18,className:"fill-white/10"}):(0,t.jsx)(i.Play,{size:18,className:"fill-white/10"})}),(0,t.jsx)("button",{onClick:()=>{x.current&&(x.current.currentTime=0,x.current.play().catch(()=>{}),k(!0))},className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:"Restart",children:(0,t.jsx)(a,{size:16})}),(0,t.jsx)("button",{onClick:()=>_(-10),className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:"Backward 10s",children:(0,t.jsx)(n.Rewind,{size:16})}),(0,t.jsx)("button",{onClick:()=>_(10),className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:"Forward 10s",children:(0,t.jsx)(l.FastForward,{size:16})}),(0,t.jsxs)("div",{className:"flex items-center gap-2 group/volume ml-2",children:[(0,t.jsx)("button",{onClick:O,className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:A?"Unmute":"Mute",children:A||0===L?(0,t.jsx)(u,{size:18}):(0,t.jsx)(c,{size:18})}),(0,t.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:L,onChange:e=>{let t=parseFloat(e.target.value);C(t),x.current&&(x.current.volume=t,x.current.muted=0===t,N(0===t))},className:"w-0 group-hover/volume:w-16 h-1 accent-[var(--c-lime)] bg-white/20 rounded-lg appearance-none cursor-pointer transition-all duration-300 origin-left opacity-0 group-hover/volume:opacity-100 select-none focus:outline-none"})]}),(0,t.jsxs)("div",{className:"text-[11px] font-medium text-white/80 font-mono select-none",children:[V(P)," / ",V(j)]})]}),(0,t.jsx)("div",{className:"flex items-center gap-4",children:(0,t.jsx)("button",{onClick:B,className:"text-white hover:text-[var(--c-lime)] transition-colors focus:outline-none cursor-pointer",title:"Fullscreen",children:z?(0,t.jsx)(h,{size:18}):(0,t.jsx)(d,{size:18})})})]})]})})]})}],85005)},41341,e=>{"use strict";var t=e.i(43476),r=e.i(46932);let i=(0,e.i(75254).default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var s=e.i(48256),o=e.i(46897),a=e.i(57303),n=e.i(59544),l=e.i(94519),c=e.i(85005);let u=()=>{let{theme:e}=(0,l.useTheme)(),u=[{id:"01",title:"Geographic",subtitle:"Within a country.",desc:"Every state has trash. We build multiple plants - one per region - so waste is recycled within its own geographic circle, not freighted across the country.",icon:(0,t.jsx)(o.MapPin,{size:32})},{id:"02",title:"Global",subtitle:"Across allies.",desc:"From the US to the UAE to India to South Africa, we close the loop across four geographies. We explicitly don't operate in non-allied parts of Asia - so we make a semi-circle, not a full one.",icon:(0,t.jsx)(s.Globe,{size:32})},{id:"03",title:"Operational",subtitle:"Inside the plant.",desc:"Wind powers the plant. When those turbines retire, their magnets come back to us. We extract, we return. The closed loop is literal.",icon:(0,t.jsx)(i,{size:32})}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-32 pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0 opacity-60",children:(0,t.jsx)(a.default,{})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(r.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-xs font-bold uppercase tracking-[0.2em]",children:"Closed-Loop Systems"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase",children:["Circular ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Economy."})]}),(0,t.jsx)("p",{className:"text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Geographic, global, operational - circles inside circles, every one of them deliberate."})]})})]}),(0,t.jsx)("section",{className:`py-10 relative overflow-hidden transition-colors duration-500 ${"dark"===e?"bg-[#0a0a0a]":"bg-white"}`,children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",children:[(0,t.jsxs)(r.motion.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"text-left",children:[(0,t.jsx)("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--c-lime)]/20 bg-[var(--c-lime)]/5 text-[var(--c-lime)] mb-6",children:(0,t.jsx)("span",{className:"text-[10px] font-black uppercase tracking-[0.2em]",children:"CIRCULAR ECONOMY"})}),(0,t.jsxs)("h2",{className:`text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-[1.1] ${"dark"===e?"text-white":"text-gray-900"}`,children:["THE CLOSED-LOOP ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"MINERAL ECOSYSTEM."})]}),(0,t.jsx)("p",{className:`text-xl font-medium leading-relaxed mb-10 ${"dark"===e?"text-gray-400":"text-gray-600"}`,children:"An integrated circular economy designed to recover, refine, power, and reinvest critical minerals through a fully connected infrastructure ecosystem."}),(0,t.jsx)("div",{className:"space-y-6",children:["Recover critical minerals from end-of-life electronics and batteries.","Extract and refine Lithium, Cobalt, Nickel, Copper, and Rare Earth Elements.","Power AI data centres and future infrastructure using sustainable mineral-enabled systems.","Reinvest recovered value into renewable energy, supply-chain resilience, and next-generation technologies."].map((r,i)=>(0,t.jsxs)("div",{className:"flex gap-4 group",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-xl group-hover:translate-x-2 transition-transform",children:"→"}),(0,t.jsx)("p",{className:`text-lg font-bold leading-snug ${"dark"===e?"text-gray-300":"text-gray-700"}`,children:r})]},i))})]}),(0,t.jsx)(r.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative rounded-[24px] overflow-hidden",children:(0,t.jsx)("img",{src:"dark"===e?"/WBM-Investor-Access-Requirements/media/CircularEconomyDark.png":"/WBM-Investor-Access-Requirements/media/CircularEconomy.png",alt:"Circular Economy Ecosystem",className:"w-full h-auto block object-contain"})})]})})}),(0,t.jsx)("section",{className:"w-full bg-[#0a0a0a] overflow-hidden py-0",children:(0,t.jsx)(c.CustomVideoPlayer,{src:"/WBM-Investor-Access-Requirements/media/Investor2.mp4",badgeText:"Processing Prowess",title:"Advanced Recovery Systems",className:"rounded-none border-x-0 border-y border-[var(--c-border)]"})}),(0,t.jsx)("section",{className:"py-10 bg-[#0a0a0a] relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-[1440px] mx-auto px-0 md:px-6",children:[(0,t.jsxs)("div",{className:"text-center mb-8",children:[(0,t.jsxs)("h2",{className:"section-title font-black text-white tracking-tight mb-6 uppercase leading-[1.1] max-w-4xl mx-auto",children:["The Shift to ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Restoration."})]}),(0,t.jsx)("p",{className:"text-lg text-gray-400 font-medium max-w-2xl mx-auto",children:"Moving beyond the linear 'take-make-waste' model into a high-yield, sovereign supply chain."})]}),(0,t.jsxs)(r.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative max-w-[1280px] mx-auto md:rounded-[10px] md:overflow-hidden",children:[(0,t.jsx)("img",{src:"/WBM-Investor-Access-Requirements/media/Linear_and_Circular Difference_Dark.png",alt:"Linear vs Circular Economy",className:"hidden lg:block w-full h-auto object-contain mx-auto"}),(0,t.jsx)("img",{src:"/WBM-Investor-Access-Requirements/media/Linear_and_Circular_Mobile_View.png",alt:"Linear vs Circular Economy",className:"lg:hidden w-full h-auto object-contain mx-auto"})]})]})}),(0,t.jsx)("section",{className:"py-10 bg-[var(--c-fg)]/5 relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10",children:[(0,t.jsxs)("div",{className:"text-center mb-10",children:[(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase leading-[1.1] max-w-5xl mx-auto",children:["Geographic. Global. ",(0,t.jsx)("br",{className:"hidden md:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Operational."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium max-w-2xl mx-auto",children:"Three layers of deliberate circularity, closing the loop from local regions to global alliances."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:u.map((e,i)=>(0,t.jsxs)(r.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*i},className:"p-10 rounded-[32px] bg-[var(--c-bg)] border border-[var(--c-border)] flex flex-col h-full relative group",children:[(0,t.jsx)("div",{className:"absolute top-8 right-8 text-4xl font-black text-[var(--c-lime)]/10 tracking-tighter",children:e.id}),(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-all duration-500",children:e.icon}),(0,t.jsxs)("h3",{className:"text-xs font-black text-[var(--c-lime)] uppercase tracking-[0.2em] mb-2",children:["Layer ",e.id]}),(0,t.jsx)("h4",{className:"text-2xl font-black text-[var(--c-fg)] uppercase mb-4 tracking-tight",children:e.title}),(0,t.jsx)("div",{className:"text-lg font-bold text-[var(--c-fg)] mb-6",children:e.subtitle}),(0,t.jsx)("p",{className:"text-[var(--c-fg3)] font-medium leading-relaxed flex-grow",children:e.desc})]},i))})]})}),(0,t.jsx)("section",{className:"py-10",children:(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6",children:(0,t.jsxs)("div",{className:"relative p-12 md:p-20 rounded-[40px] bg-[var(--c-bg)] border border-[var(--c-border)] overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 w-64 h-64 bg-[var(--c-lime)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-6xl mb-8 opacity-20",children:'"'}),(0,t.jsx)("p",{className:"text-2xl md:text-4xl font-black text-[var(--c-fg)] leading-tight tracking-tight mb-10 italic",children:"We are not just an e-waste recycler. We are the brains. We are the AI data centre. Humans are taking care of robots - not robots taking jobs of humans."}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-full bg-[var(--c-lime)]"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[var(--c-fg)] font-black uppercase text-sm tracking-widest",children:"Founder's Note"}),(0,t.jsx)("div",{className:"text-[var(--c-fg3)] text-xs font-bold",children:"WBM Vision 2030"})]})]})]})]})})}),(0,t.jsx)("section",{className:"py-10 text-center",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-6",children:[(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-8 uppercase",children:["Ready to close ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"the loop?"})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium mb-10 leading-relaxed",children:"Let's turn trash into treasure - together."}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(n.default,{href:"/contact",children:"Partner With Us"})})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(u,{})}],41341)}]);