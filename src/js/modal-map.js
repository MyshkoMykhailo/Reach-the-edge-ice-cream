(() => {
  const mobileMap = document.querySelector('.js-map-container');
  const openMapBtn = document.querySelector('.js-open-map');
  const closeMapBtn = document.querySelector('.js-close-map');

  const toggleMap = () => {
    const isMapOpen =
      openMapBtn.getAttribute('aria-expanded') === 'true' || false;
    openMapBtn.setAttribute('aria-expanded', !isMapOpen);
    mobileMap.classList.toggle('is-open');

    const scrollLockMethod = !isMapOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMapBtn.addEventListener('click', toggleMap);
  closeMapBtn.addEventListener('click', toggleMap);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMap.classList.remove('is-open');
    openMapBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
