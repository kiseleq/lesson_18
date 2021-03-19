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
        const menuBtn = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = menu.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        menu.addEventListener('click', (event) => {
            let target = event.target;
            
            if (target === closeBtn) {
                handlerMenu();
                console.log(11);
            }

           menuItems.forEach((item, index) => {

                if (item === target.closest('li')) {
                    handlerMenu();
                }

           });
        });
        menuBtn.addEventListener('click', handlerMenu);
    };

    toggleMenu();

    
    // Pop Up

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = popup.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupCloseBtn = popup.querySelector('.popup-close');

        let count = 0;
        const animatePopup = () => {

            const animateInterval = requestAnimationFrame(animatePopup);
            count++;

            if (count < 25) {
                popupContent.style.top = count * 5 + 'px';
            } else {
                count = 0;
                cancelAnimationFrame(animateInterval);
            }
        };

        popupBtns.forEach(item => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    animatePopup();
                }
            });
        });

        // popupCloseBtn.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) popup.style.display = 'none';
            }
        });
    };

    togglePopup();

    //Табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if(target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    // Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('#all-progects');

        let currentSlide = 0,
            interval = 0;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {

            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);

    };

    slider();

});


