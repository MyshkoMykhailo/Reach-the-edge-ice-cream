(() => {
  const refs = {
    openIcecoffeeBtn: document.querySelector('[data-icecoffee-open]'),
    closeIcecoffeeBtn: document.querySelector('[data-icecoffee-close]'),
    icecoffee: document.querySelector('[data-icecoffee]'),
  };

  refs.openIcecoffeeBtn.addEventListener('click', toggleIcecoffee);
  refs.closeIcecoffeeBtn.addEventListener('click', toggleIcecoffee);

  function toggleIcecoffee() {
    refs.icecoffee.classList.toggle('is-hidden');
  }
})();