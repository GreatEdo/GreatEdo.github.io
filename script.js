// scroll jika link akttif
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// menambahkan css scroll-header
function scrollHeader(){
    const header = document.getElementById('header')
    // ketika scroll sudah mencapai 80 maka akan mengaktifkan css scroll-header
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// dark theme
const iconTheme = document.querySelector(".darklight"),
    body = document.querySelector("body");


// local storage
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
    iconTheme.classList.toggle("active");
}

iconTheme.addEventListener("click", function() {
    iconTheme.classList.toggle("active");
    body.classList.toggle("dark");
    // knp pakai toggle bkn add kl  pakai toggle diclick bakalan active dan diclick lagi bakalan hilang kl add cuma menambahkan saat di click dan gk bakalan hilang kl di click kembali
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
    }else{
        localStorage.setItem("mode" , "dark-mode");
    }
});

// animate text 
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["Great Edo Charunia"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0){
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
});


// skill section

const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.skill-pre');

window.addEventListener('scroll',() =>{
    if(document.documentElement.scrollTop>=skillsSection.offsetTop) {
        progressBars.forEach((div) => {
            div.style.width = div.getAttribute("pre");
        });
    
    }else{
        progressBars.forEach((div) => {
            div.style.width = 0;
        });
       
    }
});


// filter gallery
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filerCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filerCards));