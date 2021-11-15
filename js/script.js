
// seleziono le classi che dovrò modificare
const burgerMenu = document.querySelector('.fa-bars');


burgerMenu.addEventListener('click',
    function() {
        let navBurger = document.querySelector('.hamburger-menu');
        navBurger.classList.add('d-block');
    }
);

// seleziono le classi che dovrò modificare
const closeBurgerMenu = document.querySelector('.close');


closeBurgerMenu.addEventListener('click',
    function() {
        let navBurger = document.querySelector('.hamburger-menu');
        navBurger.classList.add('d-none');
    }
);