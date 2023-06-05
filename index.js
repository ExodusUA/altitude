window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    var menu = document.querySelector(".navigation");
    menu.classList.toggle("closed");
}