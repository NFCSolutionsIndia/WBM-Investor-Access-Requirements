(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55838,(e,t,o)=>{"use strict";var i=e.r(71645),r="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=i.useState,s=i.useEffect,a=i.useLayoutEffect,l=i.useDebugValue;function h(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!r(e,o)}catch(e){return!0}}var c="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var o=t(),i=n({inst:{value:o,getSnapshot:t}}),r=i[0].inst,c=i[1];return a(function(){r.value=o,r.getSnapshot=t,h(r)&&c({inst:r})},[e,o,t]),s(function(){return h(r)&&c({inst:r}),e(function(){h(r)&&c({inst:r})})},[e]),l(o),o};o.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:c},2239,(e,t,o)=>{"use strict";t.exports=e.r(55838)},52822,(e,t,o)=>{"use strict";var i=e.r(71645),r=e.r(2239),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useSyncExternalStore,a=i.useRef,l=i.useEffect,h=i.useMemo,c=i.useDebugValue;o.useSyncExternalStoreWithSelector=function(e,t,o,i,r){var u=a(null);if(null===u.current){var d={hasValue:!1,value:null};u.current=d}else d=u.current;var m=s(e,(u=h(function(){function e(e){if(!l){if(l=!0,s=e,e=i(e),void 0!==r&&d.hasValue){var t=d.value;if(r(t,e))return a=t}return a=e}if(t=a,n(s,e))return t;var o=i(e);return void 0!==r&&r(t,o)?(s=e,t):(s=e,a=o)}var s,a,l=!1,h=void 0===o?null:o;return[function(){return e(t())},null===h?void 0:function(){return e(h())}]},[t,o,i,r]))[0],u[1]);return l(function(){d.hasValue=!0,d.value=m},[m]),c(m),m}},30224,(e,t,o)=>{"use strict";t.exports=e.r(52822)},78946,e=>{"use strict";let t=(0,e.i(75254).default)("recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);e.s(["Recycle",0,t],78946)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],58041)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",0,t],81418)},70756,e=>{"use strict";let t=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,t],70756)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},53802,e=>{"use strict";let t=(0,e.i(75254).default)("magnet",[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]]);e.s(["Magnet",0,t],53802)},57303,e=>{"use strict";var t=e.i(43476),o=e.i(33623),i=e.i(71645),r=e.i(90072),n=e.i(8560);let s={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}};e.s(["default",0,({effectOptions:e,speed:a,color:l})=>{let h=(0,i.useRef)(null),c=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(c.current){c.current.dispose(),c.current=null;let e=h.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let t={uFreq:{value:new r.Vector3(3,6,10)},uAmp:{value:new r.Vector3(30,30,20)}},i={uFreq:{value:new r.Vector2(5,2)},uAmp:{value:new r.Vector2(25,15)}},u={uFreq:{value:new r.Vector2(2,3)},uAmp:{value:new r.Vector2(35,10)}},d={uFreq:{value:new r.Vector4(4,8,8,1)},uAmp:{value:new r.Vector4(25,5,10,10)}},m={uFreq:{value:new r.Vector2(4,8)},uAmp:{value:new r.Vector2(10,20)},uPowY:{value:new r.Vector2(20,2)}},p=e=>.5*Math.sin(e)+.5,f={mountainDistortion:{uniforms:t,getDistortion:`
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
        `,getJS:(e,o)=>{let i=t.uFreq.value,n=t.uAmp.value,s=new r.Vector3(Math.cos(e*Math.PI*i.x+o)*n.x-Math.cos(.02*Math.PI*i.x+o)*n.x,p(e*Math.PI*i.y+o)*n.y-p(.02*Math.PI*i.y+o)*n.y,p(e*Math.PI*i.z+o)*n.z-p(.02*Math.PI*i.z+o)*n.z),a=new r.Vector3(2,2,2),l=new r.Vector3(0,0,-5);return s.multiply(a).add(l)}},xyDistortion:{uniforms:i,getDistortion:`
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
        `,getJS:(e,t)=>{let o=i.uFreq.value,n=i.uAmp.value,s=new r.Vector3(Math.cos(e*Math.PI*o.x+t)*n.x-Math.cos(.02*Math.PI*o.x+t)*n.x,Math.sin(e*Math.PI*o.y+t+Math.PI/2)*n.y-Math.sin(.02*Math.PI*o.y+t+Math.PI/2)*n.y,0),a=new r.Vector3(2,.4,1),l=new r.Vector3(0,0,-3);return s.multiply(a).add(l)}},LongRaceDistortion:{uniforms:u,getDistortion:`
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
        `,getJS:(e,t)=>{let o=u.uFreq.value,i=u.uAmp.value,n=new r.Vector3(Math.sin(e*Math.PI*o.x+t)*i.x-Math.sin(.0125*Math.PI*o.x+t)*i.x,Math.sin(e*Math.PI*o.y+t)*i.y-Math.sin(.0125*Math.PI*o.y+t)*i.y,0),s=new r.Vector3(1,1,0),a=new r.Vector3(0,0,-5);return n.multiply(s).add(a)}},turbulentDistortion:{uniforms:d,getDistortion:`
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
        `,getJS:(e,t)=>{let o=d.uFreq.value,i=d.uAmp.value,n=e=>Math.cos(Math.PI*e*o.x+t)*i.x+Math.pow(Math.cos(Math.PI*e*o.y+t*(o.y/o.x)),2)*i.y,s=e=>-p(Math.PI*e*o.z+t)*i.z-Math.pow(p(Math.PI*e*o.w+t/(o.z/o.w)),5)*i.w,a=new r.Vector3(n(e)-n(e+.007),s(e)-s(e+.007),0),l=new r.Vector3(-2,-5,0),h=new r.Vector3(0,0,-10);return a.multiply(l).add(h)}},turbulentDistortionStill:{uniforms:d,getDistortion:`
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
        `,getJS:(e,t)=>{let o=m.uFreq.value,i=m.uAmp.value,n=m.uPowY.value,s=e=>Math.sin(e*Math.PI*o.x+t)*i.x,a=e=>Math.pow(e*n.x,n.y)+Math.sin(e*Math.PI*o.y+t)*i.y,l=new r.Vector3(s(e)-s(e+.01),a(e)-a(e+.01),0),h=new r.Vector3(-2,-4,0),c=new r.Vector3(0,0,-10);return l.multiply(h).add(c)}}},g={uDistortionX:{value:new r.Vector2(80,3)},uDistortionY:{value:new r.Vector2(-40,2.5)}},v=`
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
    `,b=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,y=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function w(e,t,o=.1,i=.001){let r=(t-e)*o;return Math.abs(r)<i&&(r=t-e),r}class P{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,o,i,r){this.webgl=e,this.options=t,this.colors=o,this.speed=i,this.fade=r}init(){let e=this.options,t=new r.LineCurve3(new r.Vector3(0,0,0),new r.Vector3(0,0,-1)),o=new r.TubeGeometry(t,40,1,8,!1),i=new r.InstancedBufferGeometry().copy(o);i.instanceCount=2*e.lightPairsPerRoadWay;let n=e.roadWidth/e.lanesPerRoad,s=[],a=[],l=[],h=this.colors;h=Array.isArray(h)?h.map(e=>new r.Color(e)):new r.Color(h);for(let t=0;t<e.lightPairsPerRoadWay;t++){let o=b(e.carLightsRadius),i=b(e.carLightsLength),r=b(this.speed),c=t%e.lanesPerRoad*n-e.roadWidth/2+n/2,u=b(e.carWidthPercentage)*n;c+=b(e.carShiftX)*n;let d=b(e.carFloorSeparation)+1.3*o,m=-b(e.length);s.push(c-u/2),s.push(d),s.push(m),s.push(c+u/2),s.push(d),s.push(m),a.push(o),a.push(i),a.push(r),a.push(o),a.push(i),a.push(r);let p=y(h);l.push(p.r),l.push(p.g),l.push(p.b),l.push(p.r),l.push(p.g),l.push(p.b)}i.setAttribute("aOffset",new r.InstancedBufferAttribute(new Float32Array(s),3,!1)),i.setAttribute("aMetrics",new r.InstancedBufferAttribute(new Float32Array(a),3,!1)),i.setAttribute("aColor",new r.InstancedBufferAttribute(new Float32Array(l),3,!1));let c=new r.ShaderMaterial({fragmentShader:x,vertexShader:S,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});c.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let u=new r.Mesh(i,c);u.frustumCulled=!1,this.webgl.scene.add(u),this.mesh=u}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let x=`
      #define USE_FOG;
      ${n.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${n.ShaderChunk.fog_fragment}
      }
    `,S=`
      #define USE_FOG;
      ${n.ShaderChunk.fog_pars_vertex}
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
        ${n.ShaderChunk.fog_vertex}
      }
    `;class E{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new r.PlaneGeometry(1,1),o=new r.InstancedBufferGeometry().copy(t),i=e.totalSideLightSticks;o.instanceCount=i;let n=e.length/(i-1),s=[],a=[],l=[],h=e.colors.sticks;h=Array.isArray(h)?h.map(e=>new r.Color(e)):new r.Color(h);for(let t=0;t<i;t++){let o=b(e.lightStickWidth),i=b(e.lightStickHeight);s.push((t-1)*n*2+n*Math.random());let r=y(h);a.push(r.r),a.push(r.g),a.push(r.b),l.push(o),l.push(i)}o.setAttribute("aOffset",new r.InstancedBufferAttribute(new Float32Array(s),1,!1)),o.setAttribute("aColor",new r.InstancedBufferAttribute(new Float32Array(a),3,!1)),o.setAttribute("aMetrics",new r.InstancedBufferAttribute(new Float32Array(l),2,!1));let c=new r.ShaderMaterial({fragmentShader:L,vertexShader:M,side:r.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});c.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let u=new r.Mesh(o,c);u.frustumCulled=!1,this.webgl.scene.add(u),this.mesh=u}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let M=`
      #define USE_FOG;
      ${n.ShaderChunk.fog_pars_vertex}
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
        ${n.ShaderChunk.fog_vertex}
      }
    `,L=`
      #define USE_FOG;
      ${n.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${n.ShaderChunk.fog_fragment}
      }
    `;class T{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,o){let i=this.options,n=new r.PlaneGeometry(o?i.roadWidth:i.islandWidth,i.length,20,100),s={uTravelLength:{value:i.length},uColor:{value:new r.Color(o?i.colors.roadColor:i.colors.islandColor)},uTime:this.uTime};o&&(s=Object.assign(s,{uLanes:{value:i.lanesPerRoad},uBrokenLinesColor:{value:new r.Color(i.colors.brokenLines)},uShoulderLinesColor:{value:new r.Color(i.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:i.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:i.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:i.brokenLinesWidthPercentage}}));let a=new r.ShaderMaterial({fragmentShader:o?O:k,vertexShader:I,side:r.DoubleSide,uniforms:Object.assign(s,this.webgl.fogUniforms,i.distortion.uniforms)});a.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",i.distortion.getDistortion)};let l=new r.Mesh(n,a);return l.rotation.x=-Math.PI/2,l.position.z=-i.length/2,l.position.x+=(this.options.islandWidth/2+i.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let A=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${n.ShaderChunk.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${n.ShaderChunk.fog_fragment}
      }
    `,k=A.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),C=`
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
    `,D=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,O=A.replace("#include <roadMarkings_fragment>",D).replace("#include <roadMarkings_vars>",C),I=`
      #define USE_FOG;
      uniform float uTime;
      ${n.ShaderChunk.fog_pars_vertex}
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
        ${n.ShaderChunk.fog_vertex}
      }
    `,F=h.current;if(!F)return;let z={...s,...e,speedUp:void 0!==a?a:e?.speedUp??s.speedUp,colors:{...s.colors,...e?.colors||{},sticks:l?parseInt(l.replace("#","0x"),16):e?.colors?.sticks??s.colors.sticks}};z.distortion=f[z.distortion];let j=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:g,getDistortion:v}),this.container=e,this.hasValidSize=!1;const i=Math.max(1,e.offsetWidth),s=Math.max(1,e.offsetHeight);this.renderer=new n.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(i,s,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new o.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new r.PerspectiveCamera(t.fov,i/s,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new r.Scene,this.scene.background=null;let a=new r.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=a,this.fogUniforms={fogColor:{value:a.color},fogNear:{value:a.near},fogFar:{value:a.far}},this.clock=new r.Clock,this.assets={},this.disposed=!1,this.road=new T(this,t),this.leftCarLights=new P(this,t,t.colors.leftCars,t.movingAwaySpeed,new r.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new P(this,t,t.colors.rightCars,t.movingCloserSpeed,new r.Vector2(1,0+t.carLightsFade)),this.leftSticks=new E(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new o.RenderPass(this.scene,this.camera),this.bloomPass=new o.EffectPass(this.camera,new o.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new o.EffectPass(this.camera,new o.SMAAEffect({preset:o.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let i=new r.LoadingManager(t),n=new Image,s=new Image;e.smaa={},n.addEventListener("load",function(){e.smaa.search=this,i.itemEnd("smaa-search")}),s.addEventListener("load",function(){e.smaa.area=this,i.itemEnd("smaa-area")}),i.itemStart("smaa-search"),i.itemStart("smaa-area"),n.src=o.SMAAEffect.searchImageDataURL,s.src=o.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=w(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let o=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(o),this.leftCarLights.update(o),this.leftSticks.update(o),this.road.update(o);let i=!1,n=w(this.camera.fov,this.fovTarget,t);if(0!==n&&(this.camera.fov+=n*e*6,i=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,o);this.camera.lookAt(new r.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),i=!0}i&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,o){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,o),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let o=e.domElement,i=o.clientWidth,r=o.clientHeight;if(i<=0||r<=0)return!1;let n=o.width!==i||o.height!==r;return n&&t(i,r,!1),n}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(F,z);c.current=j;let V=!1;return j.loadAssets().then(()=>{V||j.disposed||j.init()}),()=>{V=!0,c.current&&(c.current.dispose(),c.current=null)}},[e]),(0,t.jsx)("div",{ref:h,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}])},18393,e=>{"use strict";let t=(0,e.i(75254).default)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);e.s(["Server",0,t],18393)},30297,e=>{"use strict";var t=e.i(31067),o=e.i(39014),i=e.i(80931),r=e.i(71645),n=e.i(90072),s=Object.defineProperty;class a{constructor(){((e,t)=>{let o,i;i=void 0,(o="symbol"!=typeof t?t+"":t)in e?s(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i})(this,"_listeners")}addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let o=this._listeners;void 0===o[e]&&(o[e]=[]),-1===o[e].indexOf(t)&&o[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let o=this._listeners;return void 0!==o[e]&&-1!==o[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let o=this._listeners[e];if(void 0!==o){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let o=t.slice(0);for(let t=0,i=o.length;t<i;t++)o[t].call(this,e);e.target=null}}}var l=Object.defineProperty,h=(e,t,o)=>{let i;return(i="symbol"!=typeof t?t+"":t)in e?l(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,o};let c=new n.Ray,u=new n.Plane,d=Math.cos(Math.PI/180*70),m=(e,t)=>(e%t+t)%t;class p extends a{constructor(e,t){super(),h(this,"object"),h(this,"domElement"),h(this,"enabled",!0),h(this,"target",new n.Vector3),h(this,"minDistance",0),h(this,"maxDistance",1/0),h(this,"minZoom",0),h(this,"maxZoom",1/0),h(this,"minPolarAngle",0),h(this,"maxPolarAngle",Math.PI),h(this,"minAzimuthAngle",-1/0),h(this,"maxAzimuthAngle",1/0),h(this,"enableDamping",!1),h(this,"dampingFactor",.05),h(this,"enableZoom",!0),h(this,"zoomSpeed",1),h(this,"enableRotate",!0),h(this,"rotateSpeed",1),h(this,"enablePan",!0),h(this,"panSpeed",1),h(this,"screenSpacePanning",!0),h(this,"keyPanSpeed",7),h(this,"zoomToCursor",!1),h(this,"autoRotate",!1),h(this,"autoRotateSpeed",2),h(this,"reverseOrbit",!1),h(this,"reverseHorizontalOrbit",!1),h(this,"reverseVerticalOrbit",!1),h(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),h(this,"mouseButtons",{LEFT:n.MOUSE.ROTATE,MIDDLE:n.MOUSE.DOLLY,RIGHT:n.MOUSE.PAN}),h(this,"touches",{ONE:n.TOUCH.ROTATE,TWO:n.TOUCH.DOLLY_PAN}),h(this,"target0"),h(this,"position0"),h(this,"zoom0"),h(this,"_domElementKeyEvents",null),h(this,"getPolarAngle"),h(this,"getAzimuthalAngle"),h(this,"setPolarAngle"),h(this,"setAzimuthalAngle"),h(this,"getDistance"),h(this,"getZoomScale"),h(this,"listenToKeyEvents"),h(this,"stopListenToKeyEvents"),h(this,"saveState"),h(this,"reset"),h(this,"update"),h(this,"connect"),h(this,"dispose"),h(this,"dollyIn"),h(this,"dollyOut"),h(this,"getScale"),h(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>f.phi,this.getAzimuthalAngle=()=>f.theta,this.setPolarAngle=e=>{let t=m(e,2*Math.PI),i=f.phi;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-i);2*Math.PI-r<r&&(t<i?t+=2*Math.PI:i+=2*Math.PI),g.phi=t-i,o.update()},this.setAzimuthalAngle=e=>{let t=m(e,2*Math.PI),i=f.theta;i<0&&(i+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-i);2*Math.PI-r<r&&(t<i?t+=2*Math.PI:i+=2*Math.PI),g.theta=t-i,o.update()},this.getDistance=()=>o.object.position.distanceTo(o.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ee),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=()=>{o.target0.copy(o.target),o.position0.copy(o.object.position),o.zoom0=o.object.zoom},this.reset=()=>{o.target.copy(o.target0),o.object.position.copy(o.position0),o.object.zoom=o.zoom0,o.object.updateProjectionMatrix(),o.dispatchEvent(i),o.update(),l=a.NONE},this.update=(()=>{let t=new n.Vector3,r=new n.Vector3(0,1,0),s=new n.Quaternion().setFromUnitVectors(e.up,r),h=s.clone().invert(),m=new n.Vector3,y=new n.Quaternion,w=2*Math.PI;return function(){let P=o.object.position;s.setFromUnitVectors(e.up,r),h.copy(s).invert(),t.copy(P).sub(o.target),t.applyQuaternion(s),f.setFromVector3(t),o.autoRotate&&l===a.NONE&&F(2*Math.PI/60/60*o.autoRotateSpeed),o.enableDamping?(f.theta+=g.theta*o.dampingFactor,f.phi+=g.phi*o.dampingFactor):(f.theta+=g.theta,f.phi+=g.phi);let x=o.minAzimuthAngle,S=o.maxAzimuthAngle;isFinite(x)&&isFinite(S)&&(x<-Math.PI?x+=w:x>Math.PI&&(x-=w),S<-Math.PI?S+=w:S>Math.PI&&(S-=w),x<=S?f.theta=Math.max(x,Math.min(S,f.theta)):f.theta=f.theta>(x+S)/2?Math.max(x,f.theta):Math.min(S,f.theta)),f.phi=Math.max(o.minPolarAngle,Math.min(o.maxPolarAngle,f.phi)),f.makeSafe(),!0===o.enableDamping?o.target.addScaledVector(b,o.dampingFactor):o.target.add(b),o.zoomToCursor&&C||o.object.isOrthographicCamera?f.radius=q(f.radius):f.radius=q(f.radius*v),t.setFromSpherical(f),t.applyQuaternion(h),P.copy(o.target).add(t),o.object.matrixAutoUpdate||o.object.updateMatrix(),o.object.lookAt(o.target),!0===o.enableDamping?(g.theta*=1-o.dampingFactor,g.phi*=1-o.dampingFactor,b.multiplyScalar(1-o.dampingFactor)):(g.set(0,0,0),b.set(0,0,0));let E=!1;if(o.zoomToCursor&&C){let i=null;if(o.object instanceof n.PerspectiveCamera&&o.object.isPerspectiveCamera){let e=t.length();i=q(e*v);let r=e-i;o.object.position.addScaledVector(A,r),o.object.updateMatrixWorld()}else if(o.object.isOrthographicCamera){let e=new n.Vector3(k.x,k.y,0);e.unproject(o.object),o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom/v)),o.object.updateProjectionMatrix(),E=!0;let r=new n.Vector3(k.x,k.y,0);r.unproject(o.object),o.object.position.sub(r).add(e),o.object.updateMatrixWorld(),i=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),o.zoomToCursor=!1;null!==i&&(o.screenSpacePanning?o.target.set(0,0,-1).transformDirection(o.object.matrix).multiplyScalar(i).add(o.object.position):(c.origin.copy(o.object.position),c.direction.set(0,0,-1).transformDirection(o.object.matrix),Math.abs(o.object.up.dot(c.direction))<d?e.lookAt(o.target):(u.setFromNormalAndCoplanarPoint(o.object.up,o.target),c.intersectPlane(u,o.target))))}else o.object instanceof n.OrthographicCamera&&o.object.isOrthographicCamera&&(E=1!==v)&&(o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom/v)),o.object.updateProjectionMatrix());return v=1,C=!1,!!(E||m.distanceToSquared(o.object.position)>p||8*(1-y.dot(o.object.quaternion))>p)&&(o.dispatchEvent(i),m.copy(o.object.position),y.copy(o.object.quaternion),E=!1,!0)}})(),this.connect=e=>{o.domElement=e,o.domElement.style.touchAction="none",o.domElement.addEventListener("contextmenu",et),o.domElement.addEventListener("pointerdown",K),o.domElement.addEventListener("pointercancel",J),o.domElement.addEventListener("wheel",Q)},this.dispose=()=>{var e,t,i,r,n,s;o.domElement&&(o.domElement.style.touchAction="auto"),null==(e=o.domElement)||e.removeEventListener("contextmenu",et),null==(t=o.domElement)||t.removeEventListener("pointerdown",K),null==(i=o.domElement)||i.removeEventListener("pointercancel",J),null==(r=o.domElement)||r.removeEventListener("wheel",Q),null==(n=o.domElement)||n.ownerDocument.removeEventListener("pointermove",$),null==(s=o.domElement)||s.ownerDocument.removeEventListener("pointerup",J),null!==o._domElementKeyEvents&&o._domElementKeyEvents.removeEventListener("keydown",ee)};const o=this,i={type:"change"},r={type:"start"},s={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const p=1e-6,f=new n.Spherical,g=new n.Spherical;let v=1;const b=new n.Vector3,y=new n.Vector2,w=new n.Vector2,P=new n.Vector2,x=new n.Vector2,S=new n.Vector2,E=new n.Vector2,M=new n.Vector2,L=new n.Vector2,T=new n.Vector2,A=new n.Vector3,k=new n.Vector2;let C=!1;const D=[],O={};function I(){return Math.pow(.95,o.zoomSpeed)}function F(e){o.reverseOrbit||o.reverseHorizontalOrbit?g.theta+=e:g.theta-=e}function z(e){o.reverseOrbit||o.reverseVerticalOrbit?g.phi+=e:g.phi-=e}const j=(()=>{let e=new n.Vector3;return function(t,o){e.setFromMatrixColumn(o,0),e.multiplyScalar(-t),b.add(e)}})(),V=(()=>{let e=new n.Vector3;return function(t,i){!0===o.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(o.object.up,e)),e.multiplyScalar(t),b.add(e)}})(),U=(()=>{let e=new n.Vector3;return function(t,i){let r=o.domElement;if(r&&o.object instanceof n.PerspectiveCamera&&o.object.isPerspectiveCamera){let n=o.object.position;e.copy(n).sub(o.target);let s=e.length();j(2*t*(s*=Math.tan(o.object.fov/2*Math.PI/180))/r.clientHeight,o.object.matrix),V(2*i*s/r.clientHeight,o.object.matrix)}else r&&o.object instanceof n.OrthographicCamera&&o.object.isOrthographicCamera?(j(t*(o.object.right-o.object.left)/o.object.zoom/r.clientWidth,o.object.matrix),V(i*(o.object.top-o.object.bottom)/o.object.zoom/r.clientHeight,o.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),o.enablePan=!1)}})();function _(e){o.object instanceof n.PerspectiveCamera&&o.object.isPerspectiveCamera||o.object instanceof n.OrthographicCamera&&o.object.isOrthographicCamera?v=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function R(e){if(!o.zoomToCursor||!o.domElement)return;C=!0;let t=o.domElement.getBoundingClientRect(),i=e.clientX-t.left,r=e.clientY-t.top,n=t.width,s=t.height;k.x=i/n*2-1,k.y=-(r/s*2)+1,A.set(k.x,k.y,1).unproject(o.object).sub(o.object.position).normalize()}function q(e){return Math.max(o.minDistance,Math.min(o.maxDistance,e))}function W(e){y.set(e.clientX,e.clientY)}function Y(e){x.set(e.clientX,e.clientY)}function N(){if(1==D.length)y.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);y.set(e,t)}}function X(){if(1==D.length)x.set(D[0].pageX,D[0].pageY);else{let e=.5*(D[0].pageX+D[1].pageX),t=.5*(D[0].pageY+D[1].pageY);x.set(e,t)}}function H(){let e=D[0].pageX-D[1].pageX,t=D[0].pageY-D[1].pageY,o=Math.sqrt(e*e+t*t);M.set(0,o)}function B(e){if(1==D.length)w.set(e.pageX,e.pageY);else{let t=ei(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);w.set(o,i)}P.subVectors(w,y).multiplyScalar(o.rotateSpeed);let t=o.domElement;t&&(F(2*Math.PI*P.x/t.clientHeight),z(2*Math.PI*P.y/t.clientHeight)),y.copy(w)}function Z(e){if(1==D.length)S.set(e.pageX,e.pageY);else{let t=ei(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);S.set(o,i)}E.subVectors(S,x).multiplyScalar(o.panSpeed),U(E.x,E.y),x.copy(S)}function G(e){var t;let i=ei(e),r=e.pageX-i.x,n=e.pageY-i.y,s=Math.sqrt(r*r+n*n);L.set(0,s),T.set(0,Math.pow(L.y/M.y,o.zoomSpeed)),t=T.y,_(v/t),M.copy(L)}function K(e){var t,i,s;!1!==o.enabled&&(0===D.length&&(null==(t=o.domElement)||t.ownerDocument.addEventListener("pointermove",$),null==(i=o.domElement)||i.ownerDocument.addEventListener("pointerup",J)),s=e,D.push(s),"touch"===e.pointerType?function(e){switch(eo(e),D.length){case 1:switch(o.touches.ONE){case n.TOUCH.ROTATE:if(!1===o.enableRotate)return;N(),l=a.TOUCH_ROTATE;break;case n.TOUCH.PAN:if(!1===o.enablePan)return;X(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(o.touches.TWO){case n.TOUCH.DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;o.enableZoom&&H(),o.enablePan&&X(),l=a.TOUCH_DOLLY_PAN;break;case n.TOUCH.DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;o.enableZoom&&H(),o.enableRotate&&N(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&o.dispatchEvent(r)}(e):function(e){let t;switch(e.button){case 0:t=o.mouseButtons.LEFT;break;case 1:t=o.mouseButtons.MIDDLE;break;case 2:t=o.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.MOUSE.DOLLY:if(!1===o.enableZoom)return;R(e),M.set(e.clientX,e.clientY),l=a.DOLLY;break;case n.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enablePan)return;Y(e),l=a.PAN}else{if(!1===o.enableRotate)return;W(e),l=a.ROTATE}break;case n.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enableRotate)return;W(e),l=a.ROTATE}else{if(!1===o.enablePan)return;Y(e),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&o.dispatchEvent(r)}(e))}function $(e){!1!==o.enabled&&("touch"===e.pointerType?function(e){switch(eo(e),l){case a.TOUCH_ROTATE:if(!1===o.enableRotate)return;B(e),o.update();break;case a.TOUCH_PAN:if(!1===o.enablePan)return;Z(e),o.update();break;case a.TOUCH_DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;o.enableZoom&&G(e),o.enablePan&&Z(e),o.update();break;case a.TOUCH_DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;o.enableZoom&&G(e),o.enableRotate&&B(e),o.update();break;default:l=a.NONE}}(e):function(e){if(!1!==o.enabled)switch(l){case a.ROTATE:let t;if(!1===o.enableRotate)return;w.set(e.clientX,e.clientY),P.subVectors(w,y).multiplyScalar(o.rotateSpeed),(t=o.domElement)&&(F(2*Math.PI*P.x/t.clientHeight),z(2*Math.PI*P.y/t.clientHeight)),y.copy(w),o.update();break;case a.DOLLY:var i,r;if(!1===o.enableZoom)return;(L.set(e.clientX,e.clientY),T.subVectors(L,M),T.y>0)?(i=I(),_(v/i)):T.y<0&&(r=I(),_(v*r)),M.copy(L),o.update();break;case a.PAN:if(!1===o.enablePan)return;S.set(e.clientX,e.clientY),E.subVectors(S,x).multiplyScalar(o.panSpeed),U(E.x,E.y),x.copy(S),o.update()}}(e))}function J(e){var t,i,r;(function(e){delete O[e.pointerId];for(let t=0;t<D.length;t++)if(D[t].pointerId==e.pointerId)return void D.splice(t,1)})(e),0===D.length&&(null==(t=o.domElement)||t.releasePointerCapture(e.pointerId),null==(i=o.domElement)||i.ownerDocument.removeEventListener("pointermove",$),null==(r=o.domElement)||r.ownerDocument.removeEventListener("pointerup",J)),o.dispatchEvent(s),l=a.NONE}function Q(e){if(!1!==o.enabled&&!1!==o.enableZoom&&(l===a.NONE||l===a.ROTATE)){var t,i;e.preventDefault(),o.dispatchEvent(r),(R(e),e.deltaY<0)?(t=I(),_(v*t)):e.deltaY>0&&(i=I(),_(v/i)),o.update(),o.dispatchEvent(s)}}function ee(e){if(!1!==o.enabled&&!1!==o.enablePan){let t=!1;switch(e.code){case o.keys.UP:U(0,o.keyPanSpeed),t=!0;break;case o.keys.BOTTOM:U(0,-o.keyPanSpeed),t=!0;break;case o.keys.LEFT:U(o.keyPanSpeed,0),t=!0;break;case o.keys.RIGHT:U(-o.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),o.update())}}function et(e){!1!==o.enabled&&e.preventDefault()}function eo(e){let t=O[e.pointerId];void 0===t&&(t=new n.Vector2,O[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ei(e){return O[(e.pointerId===D[0].pointerId?D[1]:D[0]).pointerId]}this.dollyIn=(e=I())=>{_(v*e),o.update()},this.dollyOut=(e=I())=>{_(v/e),o.update()},this.getScale=()=>v,this.setScale=e=>{_(e),o.update()},this.getZoomScale=()=>I(),void 0!==t&&this.connect(t),this.update()}}let f=r.forwardRef(({makeDefault:e,camera:n,regress:s,domElement:a,enableDamping:l=!0,keyEvents:h=!1,onChange:c,onStart:u,onEnd:d,...m},f)=>{let g=(0,o.useThree)(e=>e.invalidate),v=(0,o.useThree)(e=>e.camera),b=(0,o.useThree)(e=>e.gl),y=(0,o.useThree)(e=>e.events),w=(0,o.useThree)(e=>e.setEvents),P=(0,o.useThree)(e=>e.set),x=(0,o.useThree)(e=>e.get),S=(0,o.useThree)(e=>e.performance),E=n||v,M=a||y.connected||b.domElement,L=r.useMemo(()=>new p(E),[E]);return(0,i.useFrame)(()=>{L.enabled&&L.update()},-1),r.useEffect(()=>(h&&L.connect(!0===h?M:h),L.connect(M),()=>void L.dispose()),[h,M,s,L,g]),r.useEffect(()=>{let e=e=>{g(),s&&S.regress(),c&&c(e)},t=e=>{u&&u(e)},o=e=>{d&&d(e)};return L.addEventListener("change",e),L.addEventListener("start",t),L.addEventListener("end",o),()=>{L.removeEventListener("start",t),L.removeEventListener("end",o),L.removeEventListener("change",e)}},[c,u,d,L,g,w]),r.useEffect(()=>{if(e){let e=x().controls;return P({controls:L}),()=>P({controls:e})}},[e,L]),r.createElement("primitive",(0,t.default)({ref:f,object:L,enableDamping:l},m))});e.s(["OrbitControls",0,f],30297)}]);