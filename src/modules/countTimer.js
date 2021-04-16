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
        
    setInterval(updateClock, 0);

}

export default countTimer;