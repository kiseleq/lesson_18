window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let check = 0;


    // Калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
            
            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (!!calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (!!calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            } 

            if (!!typeValue && !!squareValue) {
                total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
            }
            

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }
        });
    };

    calc();

    // Изменение ввода

    const calculator = () => {
        const calc = document.getElementById('calc'),
            mainForm = document.querySelector('.main-form'),
            popUpForm = document.querySelector('.popup'),
            connect = document.querySelector('.connect');

        const onlyNumbers = (e) => {
            const target = e.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/\D/, '');
            }
        };

        calc.addEventListener('input', onlyNumbers);

        const onlyLetters = (e) => {
            const target = e.target;
            if (target.closest('#form2-name')) {
                target.value = target.value.replace(/[^а-яА-Я ]/, '');
            } else if (target.closest('#form2-email')) {
                target.value = target.value.replace(/ +/, '');
                target.value = target.value.replace(/[^a-zA-Z\@\_\-\~\.\!\*]/, '');
            } else if (target.closest('#form2-phone')) {
                target.value = target.value.replace(/[^1-9\+{1}]/, '');
            } else if (target.closest('#form2-message')) {
                target.value = target.value.replace(/[^а-яА-Я1-9\,\.\?\! ]/, '');
            }
        };

        const blur = (e) => {

            const target = e.target;
            let newMas = [];
            if (target.closest('#form-name')) {
                target.value = target.value.replace(/[\-]+/, '-');
                let mas = target.value.split(/[\s,\-]+/);
                mas.forEach((item) => {    
                    newMas.push(item[0].toUpperCase() + item.substring(1).toLowerCase());
                });

                newMas = newMas.join(' ');
                target.value = newMas;
            } else if (target.closest('#form-email')) {
                target.value.trim();
            }
        };

        const blur1 = (e) => {

            const target = e.target;
            let newMas = [];
            if (target.closest('.form-name')) {
                target.value = target.value.replace(/[\-]+/, '-');
                let mas = target.value.split(/[\s,\-]+/);
                mas.forEach((item) => {    
                    newMas.push(item[0].toUpperCase() + item.substring(1).toLowerCase());
                });

                newMas = newMas.join(' ');
                target.value = newMas;
            } else if (target.closest('form-email')) {
                target.value.trim();
            }
        };

        connect.addEventListener('input', onlyLetters);
        connect.addEventListener('focusout', blur);

        const checkMainForm = (event) => {
            const target = event.target;
            
            if (target === target.closest('.form-name')) {
                target.value = target.value.replace(/[^а-яА-Я ]/, '');
            } else if (target === target.closest('.form-email')) {
                target.value = target.value.replace(/ +/, '');
                target.value = target.value.replace(/[^a-zA-Z\@\_\-\~\.\!\*]/, '');
            } else if (target === target.closest('.form-phone')) {
                target.value = target.value.replace(/[^1-9\+{1}]/, '');
            } else {
                return;
            }
        };

        mainForm.addEventListener('input', checkMainForm);
        mainForm.addEventListener('focusout', blur1);

        const popUpChange = (event) => {
            const target = event.target;

            if (target === target.closest('.form-name')) {
                target.value = target.value.replace(/[^а-яА-Я ]/, '');
            } else if (target === target.closest('.form-email')) {
                target.value = target.value.replace(/ +/, '');
                target.value = target.value.replace(/[^a-zA-Z\@\_\-\~\.\!\*]/, '');
            } else if (target === target.closest('.form-phone')) {
                target.value = target.value.replace(/[^1-9\+]/, '');
            } else {return;}
        };

        popUpForm.addEventListener('input',popUpChange);
        popUpForm.addEventListener('focusout', blur1);
    };

    calculator();

    // Изменение картинок

    const changeImg = () => {
        const team = document.querySelector('.command'),
        photos = document.querySelectorAll('.command__photo');

        photos.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.src = item.dataset.dataImg;
                item.src = 'images/command/command-'+ (index + 1) + 'a.jpg';
            });

            item.addEventListener('mouseleave', () => {
                console.log(1);
                item.src = item.dataset.dataImgg;
                item.src = 'images/command/command-'+ (index + 1) + '.jpg';
            });
        });
    };

    changeImg();

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

    countTimer ('15 april 2021');

    
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

    // Точки

    const showDots = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
        dotsContainer = document.querySelector('.portfolio-dots');

        let dots = 0;

        const countDots = () => {
            slide.forEach(() => {
                dots++;
            });
        };
        countDots();

        const createDots = () => {
            for (let i = 0; i < dots; i++) {
                // let dot = document.createElement("li");
                // dot.classList.add('active-dot');

                // dot.append(dotsContainer);

                // document.body.insertBefore(dotsContainer, dot);

                dotsContainer.insertAdjacentHTML('afterbegin', '<li class = "dot"></li>');
                let showDot = dotsContainer.querySelector('li');
            }
        };
        createDots();
        
    };

    showDots();

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

        // send-ajax-form
        class SendForm {
            constructor() {
                this.errorMessage = 'Что-то пошло не так...';
                this.loadMessage = 'Загрузка...';
                this.successMessage = 'Спасибо! Мы скоро с вами свяжимся!';
                this.forms = document.querySelectorAll('form');
            }
            postData(form, body) {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState !== 4) {
                            return;
                        }
                        if (request.status === 200) {
                            resolve();
                        } else {
                            reject(request.status);
                        }
                    });
                    request.open('POST', './server.php');
                    request.setRequestHeader('Content-Type', 'application/json');
                    const formData = new FormData(form);
    
                    request.send(JSON.stringify(body));
                });
            }
            sendAjax() {
                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                      font-size: 2rem;
                      color: #fff;
              `;
    
                this.forms.forEach((form) => {
                    form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        form.appendChild(statusMessage);
                        statusMessage.textContent = this.loadMessage;
                        const formData = new FormData(form);
                        let body = {};
                        formData.forEach((val, key) => {
                            body[key] = val;
                        });

                        this.postData(form, body)
                            .then((response) => {
                                if (response.status !== 200) {
                                    throw new Error('status network not 200');
                                }
                                statusMessage.textContent = this.successMessage;
                            })
                            .catch(error => {
                                statusMessage.textContent = this.errorMessage;
                                console.error(error);
                            });
                        form.reset();
                    });
                });
            }
        }
    
        const sendForm = new SendForm();
        sendForm.sendAjax();

    
});


