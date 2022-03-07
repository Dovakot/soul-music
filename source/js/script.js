'use strict';

const mySiema = new Siema({
  selector: '.education__list'
});
const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn0.addEventListener('click', () => mySiema.goTo(0));
btn1.addEventListener('click', () => mySiema.goTo(1));
btn2.addEventListener('click', () => mySiema.goTo(2));
btn3.addEventListener('click', () => mySiema.goTo(3));

const mySiema1 = new Siema({
  selector: '.reviews__list'
});

const prev = document.querySelector('.reviews__link--prew');
const next = document.querySelector('.reviews__link--next');

prev.addEventListener('click', () => mySiema1.prev());
next.addEventListener('click', () => mySiema1.next());
