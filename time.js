document.querySelectorAll('time[datetime]').forEach(el => {
  if (!el.textContent.trim()) {
    const [year, month, day] = el.getAttribute('datetime').split('-').map(Number);
    el.textContent = new Date(year, month - 1, day).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
});
