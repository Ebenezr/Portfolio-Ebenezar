const menuToggle = document.querySelector(".menu-toggle");
const pryMenu = document.querySelector(".header-nav");

menuToggle.addEventListener("click", () => {
    const visibility = pryMenu.getAttribute('data-visible');
    // console.log(visibility);
    if (visibility === "false") {
        pryMenu.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true);
    }
    else {
        pryMenu.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false);
    }
});