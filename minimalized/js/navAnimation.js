const nav=document.getElementById("nav"),logo=document.getElementById("logo"),body=document.body,html=document.documentElement,burgerTop=document.getElementById("burgerTop"),burgerMiddle=document.getElementById("burgerMiddle"),burgerBottom=document.getElementById("burgerBottom"),navItems=document.querySelectorAll(".nav-item"),burgerBtn=document.getElementById("burgerBtn"),navItemContainer=document.getElementById("navItemContainer"),landingTitle=document.getElementById("landingTitle");let menuClicked=!1,burgerAnimationIn=()=>{setTimeout(()=>{burgerMiddle.style.opacity="0",burgerTop.style.transform="rotate(45deg)",burgerBottom.style.transform="rotate(-40deg)"},400),burgerTop.style.top="1rem",burgerBottom.style.top="-1rem"},burgerAnimationOut=()=>{setTimeout(()=>{burgerTop.style.top="0",burgerBottom.style.top="0"},400),burgerMiddle.style.opacity="1",burgerTop.style.transform="rotate(0)",burgerBottom.style.transform="rotate(0)"},navItemsAnimationIn=()=>{setTimeout(()=>{navItems[0].style.right="0"},300),setTimeout(()=>{navItems[1].style.right="0"},400),setTimeout(()=>{navItems[2].style.right="0"},500),setTimeout(()=>{navItems[3].style.right="0"},600),setTimeout(()=>{navItems[4].style.right="0"},700)},navItemsAnimationOut=()=>{setTimeout(()=>{navItems[0].style.right="-100%"},300),setTimeout(()=>{navItems[1].style.right="-100%"},400),setTimeout(()=>{navItems[2].style.right="-100%"},500),setTimeout(()=>{navItems[3].style.right="-100%"},600),setTimeout(()=>{navItems[4].style.right="-100%"},700)},navItemContainerAnimationIn=()=>{navItemContainer.style.opacity="1",navItemContainer.style.right="0",navItemContainer.style.borderTopLeftRadius="20px",navItemContainer.style.borderBottomLeftRadius="20px"},navItemContainerAnimationOut=()=>{setTimeout(()=>{navItemContainer.style.opacity="0",navItemContainer.style.right="-60%",navItemContainer.style.borderTopLeftRadius="500px",navItemContainer.style.borderBottomLeftRadius="500px"},700)},clickMenu=t=>{0==menuClicked?(navItemContainerAnimationIn(),burgerAnimationIn(),navItemsAnimationIn(),menuClicked=!0):(navItemContainerAnimationOut(),burgerAnimationOut(),navItemsAnimationOut(),menuClicked=!1)};burgerBtn.addEventListener("click",()=>{clickMenu()}),landingTitle.addEventListener("click",()=>{navItemContainerAnimationOut(),burgerAnimationOut(),navItemsAnimationOut(),menuClicked=!1}),navItems.forEach(t=>{t.addEventListener("click",()=>{navItemContainerAnimationOut(),burgerAnimationOut(),navItemsAnimationOut(),menuClicked=!1})});