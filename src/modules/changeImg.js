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

export default changeImg;