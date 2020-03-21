//Slider
// let leftSliderControl = document.querySelector('.slider__slider-control-left');
// let rightSliderControl = document.querySelector('.slider__slider-control-right');
// let currentImage = document.querySelector('.slider__slider-image');
// let sliderImages = ['./assets/iPhone Horizontal (1).png', './assets/iPhone Horizontal (2).png'];
// let sliderIndex = 0;
// leftSliderControl.onclick = function () {
//     if (sliderIndex === 0) {
//         sliderIndex = sliderImages.length - 1;
//     } else {
//         sliderIndex--;
//     }
//     currentImage.setAttribute('src', sliderImages[sliderIndex]);
// }

// rightSliderControl.onclick = function () {
//     console.log('kek')
//     if (sliderIndex === sliderImages.length - 1) {
//         sliderIndex = 0;
//     } else {
//         sliderIndex++;
//     }
//     currentImage.setAttribute('src', sliderImages[sliderIndex]);
// }
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
            console.log(card)
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
    alert('smth');
    
    
})
