const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const body = document.body;
const html = document.documentElement;

const burgerTop = document.getElementById('burgerTop');
const burgerMiddle = document.getElementById('burgerMiddle');
const burgerBottom = document.getElementById('burgerBottom');
const navItems = document.querySelectorAll('.nav-item');

const burgerBtn = document.getElementById('burgerBtn');
const navItemContainer = document.getElementById('navItemContainer');
const landingTitle = document.getElementById('landingTitle');
let menuClicked = false;

let burgerAnimationIn = () => {
    setTimeout(()=>{
        burgerMiddle.style.opacity = "0";
        burgerTop.style.transform = "rotate(45deg)"
        burgerBottom.style.transform = "rotate(-40deg)";
    },400)
    burgerTop.style.top = "1rem";
    burgerBottom.style.top = "-1rem";
}

let burgerAnimationOut = () => {
    setTimeout(()=>{
        burgerTop.style.top = "0";
        burgerBottom.style.top = "0";
    },400);
    burgerMiddle.style.opacity = "1";
    burgerTop.style.transform = "rotate(0)"
    burgerBottom.style.transform = "rotate(0)";    
}

let navItemsAnimationIn = () => {
    setTimeout(()=>{
        navItems[0].style.right = "0";
    },300);
    setTimeout(()=>{
        navItems[1].style.right = "0";
    },400);
    setTimeout(()=>{
        navItems[2].style.right = "0";
    },500);
    setTimeout(()=>{
        navItems[3].style.right = "0";
    },600);
    setTimeout(()=>{
        navItems[4].style.right = "0";
    },700);  
};

let navItemsAnimationOut = () => {
    setTimeout(()=>{
        navItems[0].style.right = "-100%";
    },300);
    setTimeout(()=>{
        navItems[1].style.right = "-100%";
    },400);
    setTimeout(()=>{
        navItems[2].style.right = "-100%";
    },500);
    setTimeout(()=>{
        navItems[3].style.right = "-100%";
    },600);
    setTimeout(()=>{
        navItems[4].style.right = "-100%";
    },700);  
};

let navItemContainerAnimationIn = () => {
    navItemContainer.style.right = "0";
    navItemContainer.style.borderTopLeftRadius = "20px";
    navItemContainer.style.borderBottomLeftRadius = "20px";
};
let navItemContainerAnimationOut = () => {
    setTimeout(() => {
        navItemContainer.style.right = "-60%";
        navItemContainer.style.borderTopLeftRadius = "500px";
    navItemContainer.style.borderBottomLeftRadius = "500px";
    },700)  
};



let clickMenu = (e) => {
    if(menuClicked == false){
        navItemContainerAnimationIn()
        burgerAnimationIn();
        navItemsAnimationIn();
        menuClicked = true;
    }
    else{
        navItemContainerAnimationOut()
        burgerAnimationOut();
        navItemsAnimationOut();
        menuClicked = false;
    }
}




burgerBtn.addEventListener('click', ()=> {
    clickMenu();
})

landingTitle.addEventListener('click', () => {
    navItemContainerAnimationOut();
    burgerAnimationOut();
    navItemsAnimationOut();
    menuClicked = false;
})

window.addEventListener('scroll', () => {
    if(html.scrollTop == 0){
        nav.style.height = "10%"
        logo.style.top = "0.5rem"
    } else{
        nav.style.height = "6rem"
        logo.style.top = "1.2rem"
    }
})

