const iconMenu = document.querySelector(".menu_icon")
console.log(iconMenu);
const menu = document.querySelector(".menu")

iconMenu.addEventListener("click", function(){
    console.log(menu.classList.toggle("show_menu"));


}) 

