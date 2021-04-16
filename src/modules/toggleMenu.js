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
        }

       menuItems.forEach((item, index) => {

            if (item === target.closest('li')) {
                handlerMenu();
            }

       });
    });
    menuBtn.addEventListener('click', handlerMenu);
};

export default toggleMenu;