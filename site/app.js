(() => {
  'use strict';
  const levels = [...document.querySelectorAll('.level')];
  const inputs = [...document.querySelectorAll('[data-complete]')];
  const search = document.querySelector('#search');
  const pending = document.querySelector('#pending');
  const status = document.querySelector('#status');
  const key = 'badwi-roadmap-progress-v1';
  const number = new Intl.NumberFormat('ar');
  let filter = 'all';
  let storageOK = true;
  let done = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(stored)) {
      done = new Set(stored.filter(id => levels.some(level => level.id === id)));
    }
  } catch { storageOK = false; }
  function normalize(value) {
    return value.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآ]/g, 'ا');
  }
  const text = new Map(levels.map(level => [level.id, normalize(level.textContent)]));
  function render() {
    const query = normalize(search.value.trim());
    let visible = 0;
    for (const level of levels) {
      const matchesTrack = filter === 'all' || level.dataset.track === 'shared' || level.dataset.track === filter;
      level.hidden = !(matchesTrack && (!pending.checked || !done.has(level.id)) && (!query || text.get(level.id).includes(query)));
      level.classList.toggle('done', done.has(level.id));
      if (!level.hidden) visible++;
    }
    document.querySelectorAll('[data-heading]').forEach(heading => {
      heading.hidden = !levels.some(level => !level.hidden && level.dataset.track === heading.dataset.heading);
    });
    document.querySelectorAll('[data-track-panel]').forEach(panel => {
      panel.hidden = !levels.some(level => !level.hidden && level.dataset.track === panel.dataset.trackPanel);
    });
    document.querySelector('#progress').value = done.size;
    document.querySelector('#progressText').textContent = `${number.format(done.size)} من ${number.format(levels.length)} مرحلة مكتملة`;
    status.textContent = `تظهر ${number.format(visible)} مرحلة${storageOK ? '' : ' · تعذّر التخزين المحلي؛ يستمر تقدمك لهذه الجلسة فقط.'}`;
    document.querySelector('#empty').hidden = visible !== 0;
  }
  inputs.forEach(input => {
    input.checked = done.has(input.dataset.complete);
    input.addEventListener('change', () => {
      input.checked ? done.add(input.dataset.complete) : done.delete(input.dataset.complete);
      try { localStorage.setItem(key, JSON.stringify([...done])); } catch { storageOK = false; }
      const disappearing = pending.checked && input.checked;
      render();
      if (disappearing) pending.focus();
    });
  });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    render();
  }));
  search.addEventListener('input', render);
  pending.addEventListener('change', render);
  function openHash() {
    const id = location.hash.slice(1);
    const target = levels.find(level => level.id === id);
    if (!target) return;
    filter = 'all'; search.value = ''; pending.checked = false;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === 'all')));
    render();
    target.scrollIntoView({block:'start'});
  }
  window.addEventListener('hashchange', openHash);
  document.documentElement.style.colorScheme = 'light';
  document.querySelector('#controls').hidden = false;
  document.querySelector('#progressPanel').hidden = false;
  render(); openHash();
})();
