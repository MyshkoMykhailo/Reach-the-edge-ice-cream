(() => {
  const refs = {
    openIcecreamBtn: document.querySelector('[data-icecream-open]'),
    closeIcecreamBtn: document.querySelector('[data-icecream-close]'),
    icecream: document.querySelector('[data-icecream]'),
  };

  refs.openIcecreamBtn.addEventListener('click', toggleIcecream);
  refs.closeIcecreamBtn.addEventListener('click', toggleIcecream);

  function toggleIcecream() {
    refs.icecream.classList.toggle('is-hidden');
  }
})();