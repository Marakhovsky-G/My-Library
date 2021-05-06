import $ from './lib/lib';


$('#trig').click(() => $('#trig').createModal({
  text: {
    title: 'Create title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, hic cum, fuga voluptate sapiente voluptatem aperiam magnam. Dolorem a quod quia. Delectus!',
  },
  btns: {
    count: 3,
    settings: [
      [
        'close button',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'success button',
        ['btn-success', 'mr-10'],
        false,
        () => {
          alert('success message!');
        }
      ],
      [
        'another button',
        ['btn-warning', 'mr-10'],
        false,
        () => {
          alert('warning message!');
        }
      ]
    ]
  }
}));


$().get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res));