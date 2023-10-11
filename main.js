var search_button = document.querySelector("nav .destop_nav .link_search");
var close_button = document.querySelector(".search_container .link_close");
var destopnav = document.querySelector(".destop_nav");
var search_container = document.querySelector(".search_container");
var overlay =document.querySelector(".overlay");

search_button.addEventListener("click", () => {
    destopnav.classList.add("hide");
    search_container.classList.remove("hide");
    overlay.classList.add("show");
})

close_button.addEventListener("click", ()=>{
    destopnav.classList.remove("hide");
    search_container.classList.add("hide");
    overlay.classList.remove("show");
}) 

overlay.addEventListener("click", ()=>{
    destopnav.classList.remove("hide");
    search_container.classList.add("hide");
    overlay.classList.remove("show");
}) 

// mobile version

var menu_icon_container = document.querySelector("nav .mob_menu_container");
var nav_container = document.querySelector("nav_container");

menu_icon_container.addEventListener("click", () => {
    nav_container.classList.toggle("active");
})