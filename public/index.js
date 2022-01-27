const icon = document.querySelector('#menu-icon');
const menu = document.getElementById('menu');
const iconCont = document.querySelector('.icon_cont');

const menuIcon = `<svg id='menu-icon' class="w-6 h-6 mx-2 md:hidden hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`
const closeIcon = '<svg class="w-6 h-6 mx-2 md:hidden hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'


var isMenuIcon = true;

const menuToggle = ()=> {
    iconCont.innerHTML = isMenuIcon ? closeIcon : menuIcon;
    isMenuIcon = !isMenuIcon;

    menu.classList.toggle("hidden");
};

// const menuToggle = ()=> {
//     menu.classList.toggle("right-96");
//     menu.classList.toggle("right-0");
//     iconCont.innerHTML = closeIcon ? menuIcon : closeIcon;
// }