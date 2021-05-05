import $ from "../core";

function calcScroll() {  // вычисление ширины скрола
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

function modalOpen(target) {
  $(target).fadeIn(500);
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${calcScroll()}px`;
}

function modalClose() {
  $('.modal').fadeOut(500);
  document.body.style.overflow = '';
  document.body.style.marginRight = '0px';

  $('body').off('keydown', esc);
}

function esc(evt) {
  if (evt.code === 'Escape') {
    modalClose();
  }
}


$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target');
    $(this[i]).click((evt) => {
      evt.preventDefault();
      modalOpen(target);

      $('body').on('keydown', esc);
    });
  }

  const closeElements = document.querySelectorAll('[data-close]');
  closeElements.forEach(elem => {
    $(elem).click(() => {
      modalClose();
    });
  });

  $('.modal').click((evt) => {
    if (evt.target.classList.contains('modal')) {
      modalClose();
    }
  });
};

$('[data-toggle="modal"]').modal();