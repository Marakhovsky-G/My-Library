import $ from './lib/lib';


$('button').on('click', function() {
  $('div').eq(2).toggleClass('active');
});

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findme').addClass('dododo'));

// $('.findme').siblings().addClass('dododo');

// $('.findme').fadeToggle(1000);


