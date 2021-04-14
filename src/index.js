'use strict';

let check = 0;

import calc from './modules/calc';
import calculator from './modules/calculator';
import changeImg from './modules/changeImg';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import tabs from './modules/tabs';
import togglePopup from './modules/togglePopup';
import showDots from './modules/showDots';
import slider from './modules/slider';

// Калькулятор
calc();
// Изменение ввода
calculator();
// Изменение картинок
changeImg();
//  Timer
countTimer ('15 april 2021');
//  Меню
toggleMenu();
// Pop Up
togglePopup();
//Табы
tabs();
// Точки
showDots();
// Слайдер
slider();