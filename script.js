const burger=document.querySelector('.burger');
burger.addEventListener('click',navMove);
let clickState=false;

const nav=document.querySelector('.navigation__nav');

function navMove(){
    
    if(!clickState){
        
         gsap.to('.navigation__nav__link a',{duration:1,opacity:1,stagger:{from:'start',amount:1},borderBottom:'1px solid black'})
         clickState=true;
         
        }
    else{
        gsap.to('.navigation__nav__link a',{duration:1,opacity:0,stagger:{from:'end', amount:1},borderBottom:'1px solid transparent'})
        clickState=false;
        
    }
};
gsap.from('.burger',{duration:3,translateY:-1000,ease:'power3.ease'})

gsap.from('.main-section',{opacity:0,duration:3,translateX:-1000,ease:'power2.out'})

gsap.from('.main__image__span',{delay:4,duration:2,opacity:0,ease:'power2.out'})

// AOS library///
AOS.init();
