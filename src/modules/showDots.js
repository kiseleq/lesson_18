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

export default showDots;