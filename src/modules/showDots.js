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
            dotsContainer.insertAdjacentHTML('afterbegin', '<li class = "dot"></li>');
            let showDot = dotsContainer.querySelector('li');
        }
    };
    createDots();
    
};

export default showDots;