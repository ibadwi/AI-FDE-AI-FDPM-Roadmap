(() => {
  'use strict';
  const input = document.querySelector('[data-complete]');
  const status = document.querySelector('#save-status');
  if (!input) return;
  const key = 'badwi-roadmap-progress-v1';
  function read() {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return new Set(Array.isArray(value) ? value.filter(id => typeof id === 'string') : []);
  }
  try { input.checked = read().has(input.dataset.complete); }
  catch { status.textContent = 'تعذّر قراءة التقدم المحفوظ. يمكنك مواصلة التعلم.'; }
  input.addEventListener('change', () => {
    try {
      let done;
      try { done = read(); } catch { done = new Set(); }
      input.checked ? done.add(input.dataset.complete) : done.delete(input.dataset.complete);
      localStorage.setItem(key, JSON.stringify([...done]));
      status.textContent = input.checked ? 'حُفظ إنجاز هذه المرحلة في هذا المتصفح.' : 'أُزيلت علامة الإنجاز من هذه المرحلة.';
    } catch { status.textContent = 'تعذّر حفظ التقدم في هذا المتصفح. العلامة متاحة لهذه الصفحة فقط.'; }
  });
})();
