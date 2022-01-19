(() => {
        const refs = {
          openAboutModalBtn: document.querySelector('[about-modal-open]'),
          closeAboutModalBtn: document.querySelector('[about-modal-close]'),
          modalAbout: document.querySelector('[about-modal]'),
        };

        refs.openAboutModalBtn.addEventListener('click', toggleModal);
        refs.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
          document.body.classList.toggle('about-modal-open');
          refs.modalAbout.classList.toggle('is-hidden');
        }
      })();