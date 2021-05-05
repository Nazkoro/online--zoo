
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click',() =>{
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click',() =>{
        menu.classList.remove('header__nav_active');
    });
}());





const popupClose = document.querySelector('.popup__nav-close')
const containerPopup = document.querySelector('.container-popup')
const btnPay = document.querySelector('.btn-pay')
const coverElem = document.getElementById('cover')
const popBtnsElem = document.querySelectorAll('.popup-btns button')
const popapForm1 = document.querySelector('.popup-form-1')
const popapForm2 = document.querySelector('.popup-form-2')
const popapForm3 = document.querySelector('.popup-form-3')
const btnPopNext = document.querySelector('.pop-next-1')
const btnPopNext2 = document.querySelector('.pop-next-2')
const btnPopBack2 = document.querySelector('.pop-back-2')
const btnPopBack3 = document.querySelector('.pop-back-3')

function fun0() {
    var rng0=document.getElementById('r0'); 
    var i0=document.getElementById('i0'); 
   i0.value=rng0.value;
  }

function openPopap (){
        containerPopup.classList.add('contaner-hidden')
        popapForm1.classList.remove('contaner-hidden')
    
}
btnPay.addEventListener('click',() =>{
    document.body.classList.add('notScrollable')
    coverElem.classList.remove('hidden')
    containerPopup.classList.remove('contaner-hidden')
})

popupClose.addEventListener('click',() =>{
    containerPopup.classList.add('contaner-hidden')
    coverElem.classList.add('hidden')
    document.body.classList.remove('notScrollable')
    
})
coverElem.addEventListener('click',() =>{
    popapForm1.classList.add('contaner-hidden')
    popapForm2.classList.add('contaner-hidden-2')
    popapForm3.classList.add('contaner-hidden-2')
    containerPopup.classList.add('contaner-hidden')
    coverElem.classList.add('hidden')
    document.body.classList.remove('notScrollable')
    
})
popBtnsElem.forEach(btn => btn.addEventListener('click',openPopap))
btnPopNext.addEventListener('click',() =>{
    
    popapForm1.classList.add('contaner-hidden')
    
    popapForm2.classList.remove('contaner-hidden-2')
    
})
btnPopNext2.addEventListener('click',() => {
    popapForm2.classList.add('contaner-hidden-2')
    
    popapForm3.classList.remove('contaner-hidden-2')
})
btnPopBack3.addEventListener('click', () =>{
    popapForm2.classList.remove('contaner-hidden-2')
    
    popapForm3.classList.add('contaner-hidden-2')
})
btnPopBack2.addEventListener('click', () =>{
    popapForm2.classList.add('contaner-hidden-2')
    
    popapForm1.classList.remove('contaner-hidden')
})







const gap = 40;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const gap2 = 30;

const carousel2 = document.getElementById("carousel-2"),
  content2 = document.getElementById("content-2"),
  next2 = document.getElementById("next-2"),
  prev2 = document.getElementById("prev-2");

  next2.addEventListener("click", e => {
    delayAutoSliding();
  carousel2.scrollBy(width2 + gap2, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  delayAutoSliding();
  carousel2.scrollBy(-(width2 + gap2), 0);
  if (carousel2.scrollLeft - width2 - gap2 <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));


const slideFunc = () => {
  carousel2.scrollBy(width2 + gap2, 0)
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }

  if (content2.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }

  if (content2.scrollWidth - width2 - gap2 < carousel2.scrollLeft + width2) {
    prev2.style.display = "none"; 
    next2.style.display = "flex";
    carousel2.scrollBy(-(width2 + gap2)*4, 0)
  }
}
let autoSlideInterval = setInterval(slideFunc, 15000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    // autoSlideInterval = null
    autoSlideInterval = setInterval(slideFunc, 15000);
  },45000);
}

carousel2.addEventListener('click', delayAutoSliding);





