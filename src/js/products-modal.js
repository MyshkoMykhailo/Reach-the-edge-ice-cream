(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-modal-ice-cream-open'),
    closeModalBtn: document.querySelector('js-modal-ice-cream-close'),
    modal: document.querySelector('.ice-cream-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('modal_is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-modal-ice-coffee-open'),
    closeModalBtn: document.querySelector('.js-modal-ice-coffee-close'),
    modal: document.querySelector('.ice-coffee-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('modal_is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-modal-milkshake-open'),
    closeModalBtn: document.querySelector('.js-modal-milkshake-close'),
    modal: document.querySelector('.milkshake-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('modal_is-hidden');
  }
})();