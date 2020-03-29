
document.addEventListener('DOMContentLoaded', () => {

    const previousButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');
    const content = document.querySelector('.carousel .content');
    const totalItems = document.querySelectorAll('.carousel .content >*').length - 1;
    let activeItem = 0;

    previousButton.addEventListener('click', () => {
        if (activeItem === 0) {
            activeItem = totalItems;
            content.style.transform = `translateX(-${totalItems * 100}%)`;
        } else {
            activeItem--;
            content.style.transform = `translateX(-${activeItem * 100}%)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (activeItem < totalItems) {
            activeItem++;
            content.style.transform = `translateX(-${activeItem * 100}%)`;
        } else {
            activeItem = 0;
            content.style.transform = `none`;
        }
    });

});

//Anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        for (let i of anchors) { i.classList.remove('focused-link') };
        anchor.classList.add('focused-link');
    })
}

const PortfolioCards = document.querySelectorAll('.portfolio__card');
for (let card of PortfolioCards) {
    card.addEventListener('click', function (e) {
        for (let card of PortfolioCards) { card.classList.remove('portfolio__active-card') }
        card.classList.add('portfolio__active-card');
    })
}



const PortfolioNavButtons = document.querySelectorAll(".portfolio__nav__button");
for (let button of PortfolioNavButtons) {
    button.addEventListener('click', function (e) {
        for (let card = 0; card < PortfolioCards.length; card++) {
            
            PortfolioCards[card].style.order = card + Math.floor(Math.random() * Math.floor(9));

        }
        for (let button of PortfolioNavButtons) {
            button.classList.remove('.portfolio__nav__button-active');
        }
        button.classList.add('.portfolio__nav__button-active');
    })
}

const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener('onsubmit', function (event) {
    event.preventDefault();
    


})



let burgerMenu = document.querySelector('.burger-menu');
let headerNav = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', function (e) {
    headerNav.style.display = headerNav.style.display === 'none' ? 'flex' : 'none';
    if (headerNav.style.display === 'flex') { headerNav.style.display = 'none' }

    headerNav.style.display = 'flex';
    headerNav.style.height = '100vh';
    headerNav.style.width = '70vw';
    headerNav.style.position = 'absolute';
    headerNav.style.top = '79px';
    headerNav.style.background = '#2D303A';
    headerNav.style['font-size'] = '20px'
    headerNav.style['flex-direction'] = 'column';
    headerNav.style['justify-content'] = 'space-around';
    headerNav.style['box-shadow'] = '200px 0px 0px 0px rgba(45,48,58,0.87)'
    // headerNav.style.transform = `translateX(${1 * 100}%)`;

})

headerNav.addEventListener('click', function (e) {

    if (document.documentElement.clientWidth < 700) {headerNav.style.display = 'none';}
    
})


