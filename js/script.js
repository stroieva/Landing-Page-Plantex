// burger-menu

let menu = document.querySelector(".navigation__menu");
let burgerIcon = document.querySelector(".burger");
let menuLinks = document.querySelectorAll(".navigation__link");

burgerIcon.addEventListener("click", function() {
    burgerIcon.classList.toggle("navigation__menu--active");
    if(burgerIcon.classList.contains("navigation__menu--active")) {
        menu.classList.add("navigation__menu--active")
    } else {
        menu.classList.remove("navigation__menu--active")
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerIcon.classList.remove("navigation__menu--active");
        menu.classList.remove("navigation__menu--active");
    })
})

// Accordion

const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
    const accordionIcon = item.querySelector(".questions__item-content");
    
    accordionIcon.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem!== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions__content");
    
    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open')
    }
}

// Scroll sections active menu

window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if(el.offsetTop - document.querySelector('.navigation').clientHeight <= scrollDistance + 125) {
            document.querySelectorAll('.navigation__menu a').forEach((el) => {
                if(el.classList.contains('navigation__link--active')) {
                    el.classList.remove('navigation__link--active');
                }
            })

            document.querySelectorAll('.navigation__menu li')[i].querySelector('a').classList.add('navigation__link--active')
        }
    })
})

// Scroll Up

function scrollUp() {
    const scrollUp = document.querySelector(".scroll-up");

    if(this.scrollY >= 200) {
        scrollUp.classList.add("scroll-up__show")
    } else {
        scrollUp.classList.remove("scroll-up__show")
    }
    scrollUp.onclick = () => {
        window.scrollTo(0, 0);
    }
}

window.addEventListener('scroll', scrollUp)

// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Раніше вибрана тема (якщо вибрано користувачем)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Ми отримуємо поточну тему, яку має інтерфейс, перевіряючи клас темної теми
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Ми перевіряємо, якщо користувач раніше вибрав тему
if (selectedTheme) {

// Якщо перевірка виконана, ми запитуємо, у чому проблема, щоб дізнатися, чи ми активували або деактивували темний
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Активувати/деактивувати тему вручну кнопкою

themeButton.addEventListener('click', () => {
    // Додайте або видаліть темну/тему значків
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Зберігаємо тему та поточну іконку, яку вибрав користувач
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Анімація

const animation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

animation.reveal(`.home__content`)
animation.reveal(`.home__image`, {delay: 500})
animation.reveal(`.home__social`, {delay: 600})
animation.reveal(`.about__image, .contact__box`, {origin: 'left'})
animation.reveal(`.about__content, .contact__form`, {origin: 'right'})
animation.reveal(`.steps__card, .products__card, .questions__group`, {interval: 100})