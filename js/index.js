/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/softScroll.js
const softScroll = elements => {
  const point = elements;
  point.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
};
/* harmony default export */ var js_softScroll = (softScroll);
;// CONCATENATED MODULE: ./src/js/burger.js
const burger = (btn, bodyBurger) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('burger__btn_active');
    bodyBurger.classList.toggle('burger__body_active');
  });
};
/* harmony default export */ var js_burger = (burger);
;// CONCATENATED MODULE: ./src/js/index.js


const headerPoint = document.querySelectorAll('.header__point');
const burgerMenu = document.querySelector('.burger__btn');
const menu = document.querySelector('.burger__body');
js_softScroll(headerPoint);
js_burger(burgerMenu, menu);
const js_form = document.querySelector('#form');
js_form.addEventListener('submit', e => {
  e.preventDefault();
});
/******/ })()
;