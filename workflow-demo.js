// Illustrative local data only. No accounts, market feeds, or trading APIs.
(() => {
  const demo = document.querySelector('.strategy-demo');
  if (!demo) return;
  const steps = [...demo.querySelectorAll('[data-demo-step]')];
  const scenes = [...demo.querySelectorAll('[data-demo-scene]')];
  const toggle = demo.querySelector('.demo-toggle');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const durations = [3000, 3000, 4500, 4000, 12000];
  let current = 0, paused = motion.matches, visible = false, timer, ticker, tick = 0;
  function render() {
    demo.dataset.stage = String(current);
    demo.style.setProperty('--stage-duration', `${durations[current]}ms`);
    scenes.forEach((scene, i) => { scene.hidden = i !== current; });
    demo.querySelectorAll('[data-demo-status]').forEach((node, i) => { node.hidden = i !== current; });
    steps.forEach((step, i) => {
      if (i === current) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
      step.dataset.complete = String(i < current);
    });
    demo.querySelector('.demo-counter').textContent = `0${current + 1} / 05`;
    toggle.querySelector('[data-i18n="demo.pause"]').hidden = paused;
    toggle.querySelector('[data-i18n="demo.resume"]').hidden = !paused;
    tick = paused && current === 4 ? 24 : 0;
    updateMarket();
    schedule();
  }
  function updateMarket() {
    const runtime = current === 4;
    const price = 68142.8 + (runtime ? Math.sin(tick * .7) * 22 + Math.sin(tick * 1.9) * 9 : 0);
    demo.querySelector('.desk-price').textContent = price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    demo.querySelector('[data-desk-count]').textContent = current < 2 ? '00' : String(2 + (runtime ? Math.floor(tick / 3) : 0)).padStart(2, '0');
    demo.querySelectorAll('[data-desk-time]').forEach((node, i) => { node.textContent = `00:${String(tick + Number(node.dataset.deskTime) + 1).padStart(2, '0')}`; });
    demo.style.setProperty('--live-shift', `${runtime ? Math.sin(tick * .7) * 6 : 0}px`);
    // A fixed illustrative equity path, including drawdowns; never a claimed result.
    const equity = [0, 12, 27, 19, 8, 32, 48, 41, 61, 78, 65, 54, 82, 103, 94, 119, 137, 126, 151, 168, 157, 182, 196, 184, 212];
    const value = runtime ? equity[Math.min(tick, equity.length - 1)] : 0;
    demo.querySelector('[data-desk-profit]').textContent = `+$${value.toFixed(2)}`;
    demo.querySelector('[data-desk-return]').textContent = `+${(value / 100).toFixed(2)}%`;
    demo.style.setProperty('--equity-progress', runtime ? Math.min(tick / (equity.length - 1), 1) : 0);
  }
  function schedule() {
    clearTimeout(timer); clearInterval(ticker);
    const playing = !paused && visible && !document.hidden;
    demo.dataset.playing = String(playing);
    if (!playing) return;
    timer = setTimeout(() => { current = (current + 1) % scenes.length; render(); }, durations[current]);
    if (current === 4) ticker = setInterval(() => { tick++; updateMarket(); }, 450);
  }
  steps.forEach((step, i) => step.addEventListener('click', () => { current = i; paused = true; render(); }));
  toggle.addEventListener('click', () => {
    paused = !paused;
    toggle.querySelector('[data-i18n="demo.pause"]').hidden = paused;
    toggle.querySelector('[data-i18n="demo.resume"]').hidden = !paused;
    schedule();
  });
  motion.addEventListener('change', () => { paused = motion.matches; render(); });
  document.addEventListener('visibilitychange', schedule);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }, {threshold: .15}).observe(demo);
  document.querySelector('.actual-screens').addEventListener('toggle', event => {
    if (event.target.open) {
      paused = true;
      toggle.querySelector('[data-i18n="demo.pause"]').hidden = true;
      toggle.querySelector('[data-i18n="demo.resume"]').hidden = false;
      schedule();
    }
  });
  demo.querySelector('.demo-step-controls').hidden = false;
  toggle.hidden = false;
  render();
})();
