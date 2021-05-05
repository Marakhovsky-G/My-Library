import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('.wrap').html(`
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
    <ul class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
      <li><a class="dropdown-item" href="#">Action 1</a></li>
      <li><a class="dropdown-item" href="#">Action 2</a></li>
      <li><a class="dropdown-item" href="#">Action 3</a></li>
    </ul>
  </div>`
);

$('.dropdown-toggle').dropdown();