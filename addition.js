window.addEventListener('DOMContentLoaded', function() {

    'use stict';

    function showInfo () {
        let first = document.querySelector('.first'),
            second = document.querySelector('.second'),
            third = document.querySelector('.third'),
            fourth = document.querySelector('.fourth');

        let dateNow = new Date();
        console.log(dateNow);

        function hours () {
            let hour = dateNow.getHours();
            console.log(hour);

            if (hour > 4 && hour <= 11) {
                first.textContent = 'Доброе утро!';
            }

            if (hour > 11 && hour <= 17) {
                first.textContent = 'Добрый день!';
            }

            if (hour > 17 && hour <= 22) {
                first.textContent = 'Добрый вечер!';
            }

            if (hour > 22 && hour <= 4) {
                first.textContent = 'Доброй ночи!';
            }
        }

        function day () {
            const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
            let day = dateNow.getDay();
            second.textContent = ('Сегодня: ' + week[day]);
        }

        function time () {
            let time = dateNow.toLocaleTimeString('en');
            third.textContent = ('Текущее время: ' + time);
        }

        function toNewYear () {
            let dat1 = new Date('13 april 2021');
            let date = new Date().getTime();
            newYear = new Date ('1 january 2022').getTime(); 
            console.log(newYear - date);
            fourth.textContent = ('До нового года осталось: ' + Math.floor((newYear - date) / 1000 / 60 / 60 / 24) + ' дня/дней');
        }

        hours();
        day();
        time();
        toNewYear();

    }

    showInfo();

});