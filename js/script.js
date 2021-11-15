
// seleziono le classi che dovrò modificare
const burgerMenu = document.querySelector('a>.fa-bars');


burgerMenu.addEventListener('click',
    function() {
        let navBurger = document.querySelector('.hamburger-menu');
        navBurger.classList.add('active');
    }
);

// seleziono le classi che dovrò modificare
const closeBurgerMenu = document.querySelector('.close');


closeBurgerMenu.addEventListener('click',
    function() {
        let navBurger = document.querySelector('.hamburger-menu');
        navBurger.classList.remove('active');
    }
);