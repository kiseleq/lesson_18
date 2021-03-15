window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let check = 0;

    //  Timer
    function countTimer (deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaning(){
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining ,hours, minutes, seconds};
        }

        // function updateClock(){
        //     let timer = getTimeRemaning();

            // timerHours.textContent = timer.hours;
            // timerMinutes.textContent = timer.minutes;
            // timerSeconds.textContent = timer.seconds;

        //     if(timer.timeRemaining > 0) {
        //         setTimeout(updateClock, 1000);
        //     } else {
                // timerHours.textContent = '00';
                // timerMinutes.textContent = '00';
                // timerSeconds.textContent = '00';
        //     }
        // }
        // updateClock();

        function updateClock() {
            let timer = getTimeRemaning();

            if (timer.timeRemaining > 0){


                if (timer.hours < 10) {
                    timer.hours = String(timer.hours);
                    timer.hours = '0' + timer.hours;
                    timerHours.textContent = timer.hours;
                }else{
                    timerHours.textContent = timer.hours;
                }

                if (timer.minutes < 10) {
                    timer.minutes = String(timer.minutes);
                    timer.minutes = '0' + timer.minutes;
                    timerMinutes.textContent = timer.minutes;
                }else{
                    timerMinutes.textContent = timer.minutes;
                }

                if (timer.seconds < 10) {
                    timer.seconds = String(timer.seconds);
                    timer.seconds = '0' + timer.seconds;
                    timerSeconds.textContent = timer.seconds;
                }else{
                    timerSeconds.textContent = timer.seconds;
                }
                
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
            
        setInterval(updateClock, 1000);

    }

    countTimer ('15 march 2021');

    
    //  Меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

            // Функция анимации
            let anim = function (a) {

                check++;
            
                if (check % 2 === 0) {
            
                    let count2 = 0;
                    let changeMenuMinus = function () {
                        count2++;
                        menu.style.left = -a * count2 + 'px';
            
                        if (count2 < 74) {
                            setTimeout(changeMenuMinus, 10);
                        }
                    };
                    changeMenuMinus(); 
            
                }else {
                    let count1 = 0;
                    let changeMenuPlus = function () {
                        count1++;
                        menu.style.left = a * count1 + 'px';
            
                        if (count1 < 74) {
                            setTimeout(changeMenuPlus, 10);
                        }
                    };
                    changeMenuPlus();
                }
            
            };
            


        const handlerMenu  = () => {
            const screenWidth = window.screen.width;
            if (screenWidth < 576) {
                if (!menu.style.transform  || menu.style.transform === `translate(-100%)`){
                    menu.style.transform = `translate(0)`;
                }else {
                    menu.style.transform = `translate(-100%)`;
                }
            } else if (screenWidth < 800) {
                anim(10.5);
            } else if (screenWidth < 1200) {
                anim(15);
            } else {
                anim(20);
            }
                
        };

        btnMenu.addEventListener('click', handlerMenu);
        // btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
        });
        
    };

    toggleMenu();
    // Pop Up

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUp();

});


