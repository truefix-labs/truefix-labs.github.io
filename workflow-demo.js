// Procedural concept animation. All geometry and illustrative returns are local.
(() => {
  const demo = document.querySelector('.strategy-demo');
  if (!demo) return;
  const canvas = demo.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const toggle = demo.querySelector('.demo-toggle');
  const steps = [...demo.querySelectorAll('[data-demo-step]')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const durations = [3000, 3000, 4500, 4000, 12000];
  const tau = Math.PI * 2;
  let stage = 0, paused = motion.matches, visible = false, playing = false;
  let elapsed = 0, started = 0, time = 0, lastFrame = 0, raf = 0, timer;
  let width = 600, height = 350, morph = 0;
  const equity = [0,12,27,19,8,32,48,41,61,78,65,54,82,103,94,119,137,126,151,168,157,182,196,184,212];
  const random = n => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
  const mix = (a,b,t) => a + (b-a)*t;
  const clamp = n => Math.max(0,Math.min(1,n));
  function progress() { return clamp((elapsed + (playing ? performance.now()-started : 0))/durations[stage]); }
  function project(x,y,z) {
    const angle = time * .085 + .35;
    const rx = x*Math.cos(angle)+z*Math.sin(angle), rz = -x*Math.sin(angle)+z*Math.cos(angle);
    const ry = y*.88-rz*.47, depth = y*.47+rz*.88;
    const s = Math.min(width*.245,height*.36) * 3.7/(3.7+depth);
    return {x:width*.5+rx*s,y:height*.48+ry*s,z:depth,s};
  }
  function dot(x,y,r,color,alpha=1) {
    ctx.globalAlpha=alpha; ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,tau);ctx.fill();ctx.globalAlpha=1;
  }
  function line(points,color,alpha=1,size=1) {
    ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.lineWidth=size;ctx.beginPath();
    points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();ctx.globalAlpha=1;
  }
  function geometry(a,offset=0) {
    const r=1+.25*Math.cos(3*a+offset);
    return project(r*Math.cos(2*a), r*Math.sin(2*a)*.77, .5*Math.sin(3*a+offset));
  }
  function draw() {
    if (!ctx) return;
    const p=progress();
    demo.style.setProperty('--stage-progress', String(p));
    ctx.clearRect(0,0,width,height);
    // A restrained field gives the luminous structure depth without UI chrome.
    const glow=ctx.createRadialGradient(width*.5,height*.47,0,width*.5,height*.47,width*.45);
    glow.addColorStop(0,stage===4?'#255b552e':'#35688a26');glow.addColorStop(1,'#0c142000');
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    for(let i=0;i<85;i++) {
      const x=random(i)*width,y=random(i+100)*height;
      dot(x,y,.4+random(i+200)*.65,'#a0cce6',.08+random(i+50)*.22);
    }
    // Curved signal streams converge towards the same object across every phase.
    for(let lane=0;lane<7;lane++) {
      const points=[];
      for(let j=0;j<=70;j++) {
        const u=j/70,x=u*width;
        const wave=Math.sin(u*tau*.8+lane*.3+time*.12);
        const y=height*.5+wave*(height*.24)*(Math.abs(u-.5)*1.5+.15)+(lane-3)*8;
        points.push({x,y});
      }
      line(points,lane%2?'#9bd9ef':'#73d6bf',.05,1);
      for(let j=0;j<3;j++) {
        const u=(time*.065+j*.32+lane*.11)%1;
        const i=Math.floor(u*69),pt=points[i];
        dot(pt.x,pt.y,1.2,'#a5dded',.35);
      }
    }
    // Thin orbital lines establish the sculpture's spatial volume.
    for(let k=0;k<3;k++) {
      const orbit=[];
      for(let i=0;i<=140;i++) {
        const a=i/140*tau;
        orbit.push(project(Math.cos(a)*1.65,Math.sin(a)*.4,Math.sin(a)*1.45));
      }
      line(orbit,k===1?'#8acebb':'#81b9dc',.06+k*.02,.5);
    }
    const coherence = stage===0 ? .15+p*.55 : 1;
    morph = mix(morph,coherence,playing?.055:1);
    // Woven bands form a trefoil: a single, persistent strategy artifact.
    const pieces=[];
    for(let band=0;band<13;band++) {
      for(let i=0;i<100;i++) {
        const a=i/100*tau;
        const q=geometry(a,band*.022),next=geometry((i+1)/100*tau,band*.022);
        const drift=(1-morph);
        q.x+=Math.cos(a*3+band)*drift*width*.14;
        q.y+=Math.sin(a*2+band*.2)*drift*height*.2;
        next.x+=Math.cos((i+1)/100*tau*3+band)*drift*width*.14;
        next.y+=Math.sin((i+1)/100*tau*2+band*.2)*drift*height*.2;
        pieces.push({q,next,band,i});
      }
    }
    pieces.sort((a,b)=>b.q.z-a.q.z);
    for(const {q,next,band,i} of pieces) {
      const light=clamp((1.5-q.z)/3);
      const hue=stage===3?mix(38,47,light):mix(192,151,stage===4?.6:band/35);
      const color=`hsl(${hue} 55% ${mix(40,83,light)}%)`;
      line([q,next],color,(.16+light*.62)*(.4+.6*morph),band%4===0?1.3:.65);
      if(i%17===0 && band%4===0) dot(q.x,q.y,1.3,color,.7);
    }
    // Light packets travel along the woven structure.
    for(let i=0;i<10;i++) {
      const a=(time*.19+i*.63)%tau,pt=geometry(a,.1);
      dot(pt.x,pt.y,5,'#8ed7e4',.05);dot(pt.x,pt.y,1.5,'#dcf8ff',.8);
    }
    if(stage===2 || stage===3) {
      // A moving test plane becomes a closed amber approval boundary.
      const ring=[];const shift=stage===2?Math.sin(p*Math.PI)*.7:0;
      for(let i=0;i<=100;i++) {const a=i/100*tau;ring.push(project(Math.cos(a)*1.48,Math.sin(a)*1.48,shift));}
      line(ring,stage===3?'#efc789':'#b2ebff',.65,1);
      for(let i=0;i<4;i++){const point=ring[Math.floor((i/4+p*.1)%1*100)];dot(point.x,point.y,3,stage===3?'#f3cc90':'#ccf1ff',.8);}
    }
    if(stage===4) {
      // Illustrative return path: growth interspersed with drawdowns.
      const completion=clamp(p*1.25),count=completion*(equity.length-1),curve=[];
      for(let i=0;i<=count;i++) curve.push({x:width*.12+i/(equity.length-1)*width*.72,y:height*.88-equity[i]/212*height*.43});
      if(curve.length) {
        const last=Math.floor(count),fraction=count-last;
        if(last<equity.length-1)curve.push({x:width*.12+count/(equity.length-1)*width*.72,y:height*.88-mix(equity[last],equity[last+1],fraction)/212*height*.43});
        line(curve,'#87e0bc',.045,14);line(curve,'#87e0bc',.13,5);line(curve,'#b8f4d9',.85,1.4);
        const end=curve[curve.length-1];dot(end.x,end.y,7,'#a8f1cf',.07);dot(end.x,end.y,2.5,'#d6ffe9',1);
      }
      const idx=Math.min(Math.floor(count),equity.length-1);
      const val=mix(equity[idx],equity[Math.min(idx+1,equity.length-1)],count-idx);
      demo.querySelector('[data-art-return]').textContent=`+${(val/100).toFixed(2)}%`;
    }
  }
  function frame(now) {
    if(!playing)return;
    const dt=Math.min((now-lastFrame)/1000,.05);lastFrame=now;time+=dt;
    draw();raf=requestAnimationFrame(frame);
  }
  function sync() {
    if(playing)elapsed+=performance.now()-started;
    playing=false;clearTimeout(timer);cancelAnimationFrame(raf);
    const run=!paused&&visible&&!document.hidden;
    demo.dataset.playing=String(run);
    toggle.querySelector('[data-i18n="demo.pause"]').hidden=paused;
    toggle.querySelector('[data-i18n="demo.resume"]').hidden=!paused;
    if(run) {
      playing=true;started=performance.now();lastFrame=started;
      timer=setTimeout(()=>select((stage+1)%5,false),Math.max(0,durations[stage]-elapsed));
      raf=requestAnimationFrame(frame);
    }
    draw();
  }
  function select(index,manual) {
    if(playing){playing=false;clearTimeout(timer);cancelAnimationFrame(raf);}
    stage=index;elapsed=manual?durations[stage]*.9:0;
    if(manual)paused=true;
    demo.dataset.stage=String(stage);
    demo.querySelectorAll('[data-demo-scene]').forEach((node,i)=>{node.hidden=i!==stage;});
    steps.forEach((step,i)=>{
      if(i===stage)step.setAttribute('aria-current','step');else step.removeAttribute('aria-current');
      step.dataset.complete=String(i<stage);
    });
    demo.querySelector('.demo-counter').textContent=`0${stage+1} / 05`;
    sync();
  }
  function resize() {
    const box=canvas.getBoundingClientRect();width=box.width;height=box.height;
    const ratio=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
    if(ctx){ctx.setTransform(ratio,0,0,ratio,0,0);draw();demo.dataset.canvasReady='true';}
  }
  steps.forEach((step,i)=>step.addEventListener('click',()=>select(i,true)));
  toggle.addEventListener('click',()=>{paused=!paused;sync();});
  document.addEventListener('visibilitychange',sync);
  motion.addEventListener('change',()=>{paused=motion.matches;sync();});
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.15}).observe(demo);
  new ResizeObserver(resize).observe(canvas);
  document.querySelector('.actual-screens').addEventListener('toggle',event=>{if(event.target.open){paused=true;sync();}});
  demo.querySelector('.demo-step-controls').hidden=false;toggle.hidden=false;
  resize();select(0,false);
})();
