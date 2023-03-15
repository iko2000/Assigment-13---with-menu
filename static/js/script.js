const btnBurger = document.querySelector(".burger");
const menu = document.querySelector(".header-center");

btnBurger.addEventListener("click", function () {

    if(menu.classList == "header-center") {
        menu.classList.add('active');
        menu.classList.remove('header-center');
    } else {
        menu.classList.remove('active');
        menu.classList.add('header-center');
    }
  
  

});

console.log(menu);
