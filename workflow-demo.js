// An illustrative workflow only; this controller never connects to trading services.
(() => {
  const demo = document.querySelector('.strategy-demo');
  if (!demo) return;
  const steps = [...demo.querySelectorAll('[data-demo-step]')];
  const scenes = [...demo.querySelectorAll('[data-demo-scene]')];
  const toggle = demo.querySelector('.demo-toggle');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = motion.matches;
  let visible = false;
  let timer;
  function render() {
    scenes.forEach((scene, index) => { scene.hidden = index !== current; });
    steps.forEach((step, index) => {
      if (index === current) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
      step.dataset.complete = String(index < current);
    });
    demo.querySelector('.demo-counter').textContent = `0${current + 1} / 05`;
    toggle.querySelector('[data-i18n="demo.pause"]').hidden = paused;
    toggle.querySelector('[data-i18n="demo.resume"]').hidden = !paused;
    schedule();
  }
  function schedule() {
    clearTimeout(timer);
    const playing = !paused && visible && !document.hidden;
    demo.dataset.playing = String(playing);
    if (playing) timer = setTimeout(() => {
      current = (current + 1) % scenes.length;
      render();
    }, 3000);
  }
  steps.forEach((step, index) => step.addEventListener('click', () => {
    current = index;
    paused = true;
    render();
  }));
  toggle.addEventListener('click', () => { paused = !paused; render(); });
  motion.addEventListener('change', () => { paused = motion.matches; render(); });
  document.addEventListener('visibilitychange', schedule);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    schedule();
  }, { threshold: 0.2 }).observe(demo);
  // Reading the actual screens pauses the walkthrough above them.
  document.querySelector('.actual-screens').addEventListener('toggle', event => {
    if (event.target.open) { paused = true; render(); }
  });
  demo.querySelector('.demo-step-controls').hidden = false;
  toggle.hidden = false;
  render();
})();
