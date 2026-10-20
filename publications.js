(() => {
  const controls = document.getElementById('publication-filters');
  const buttons = controls.querySelectorAll('[data-publication-filter]');
  const cards = document.querySelectorAll('#publication-list .publication-card');
  const status = document.getElementById('publication-filter-status');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const highlightedOnly = button.dataset.publicationFilter === 'highlighted';
      let visibleCount = 0;

      cards.forEach(card => {
        card.hidden = highlightedOnly && !card.classList.contains('is-selected');
        if (!card.hidden) visibleCount += 1;
      });
      buttons.forEach(filter => {
        filter.setAttribute('aria-pressed', String(filter === button));
      });
      status.textContent = highlightedOnly
        ? `Showing ${visibleCount} highlighted papers`
        : `Showing all ${visibleCount} papers`;
    });
  });

  controls.hidden = false;
})();
