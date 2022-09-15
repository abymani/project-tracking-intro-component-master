const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");




menuBtn.addEventListener('click', (e) => {
    let visibilty = menuBtn.getAttribute("data-visibilty");
    if (visibilty  == "false")
    {
        nav.setAttribute("aria-expanded","true");
        menuBtn.setAttribute("data-visibilty","true");
    }
    else {
        nav.setAttribute("aria-expanded","false");
        menuBtn.setAttribute("data-visibilty","false");
    }
});