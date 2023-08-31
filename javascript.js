/*==== Navbar ====*/
const menu = document.querySelector (' .menu');
const menuBtn = document.querySelector ( '.menu-btn');

//Toggle open/close menu
menuBtn.addEventListener  ('click', () => {
menu.classList.toggle('menu-open');
});

/*==== Slider ====*/
const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

//Get the CSS Variables from root
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

//Image Paths
const images = [
   './Imagens/RetratoE.jpeg',
   './Imagens/RetratoA.jpeg',
   './Imagens/RetratoB.jpeg',
   './Imagens/RetratoC.jpeg',
   './Imagens/RetratoD.jpeg',
];

//Theme Colors
const colors = [
    '#feb57b',
    '#ffa901',
    '#b5162e',
    '#27223f',
    '#468cc2',
];

function retrigAnim() {
    //Retrigger Animations
    for(let i =0; i < anima.length; i++) {
        anim[i].style.animation = 'none';
        anim[i].offsetHeight;
        anim[i].style.animation = null;
    }
}

function slider(i) {
    //Retriger animations
    retrigAnim();
    //Reset image source
    img.src = images [i];
    //Rechange accent color
    r.style.setProperty('--accent', colors[i]);
    //Toggle active class to pagination
    //Remove active class from all
    for(let i = 0; i <pag.length; i++) {
        pag[i].classList.remove('active');
    }
    //Reset active class to clicked pagination
    pag[i].classList.add('active');
}

//Pagination
for(let i = 0; i <pag.length; i++) {
    //Add click event for all pagination
    pag[i].addEventListener('click', () => {
        //Run the slider funtion
        slider(i);
        //Set id to clicked pagination index
        id = i;
        //Stop Auto Slide
        stopAutoSlide()
    });
}