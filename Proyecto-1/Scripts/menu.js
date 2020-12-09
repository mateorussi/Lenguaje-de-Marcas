/* Menu de Navegación */
const menu = document.querySelector(".menu");
const linkContainer = document.querySelector(".list-container");
const main = document.querySelector("#main");
const sticky = menu.offsetTop;
const btnMenu = document.querySelector(".btn-menu");

window.onscroll = () =>{
    
    // Sticky Menu
    if (window.pageXOffset >= sticky){
        menu.classList.add("sticky");
        main.style.marginTop = "170px";
    }else{
        menu.classList.remove("sticky");
        main.style.marginTop = "100px";
    }

    // Go Top Button 
    if (window.pageXOffset >= 500){
        document.querySelector(".go-top").style.right = "=" .go-top’
    }
}

