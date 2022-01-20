(() => {
  const refs = {
    openMilkshakesBtn: document.querySelector('[data-milkshakes-open]'),
    closeMilkshakesBtn: document.querySelector('[data-milkshakes-close]'),
    milkshakes: document.querySelector('[data-milkshakes]'),
  };

  refs.openMilkshakesBtn.addEventListener('click', toggleMilkshakes);
  refs.closeMilkshakesBtn.addEventListener('click', toggleMilkshakes);

  function toggleMilkshakes() {
    refs.milkshakes.classList.toggle('is-hidden');
  }
})();