let burger = document.querySelector("img.burger");
let menu = document.querySelector("ul.header-ul");
let triangle = document.querySelector("div.triangle");

let toggler = false;


document.addEventListener('click', (e) => {
    if (e.target.classList.contains(".header-ul") !== true && e.target.classList.contains(".triangle") !== true) {
        if (e.target.classList.contains("burger") === true) {
            if (toggler === false) {
                menu.style.display = "flex";
                triangle.style.display = "block";
                toggler = true;
            } else {
                menu.style.display = "none";
                triangle.style.display = "none";
                toggler = false;
            }
        } else {
            menu.style.display = "none";
            triangle.style.display = "none";
            toggler = false;
        }
    }
})

