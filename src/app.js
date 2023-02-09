const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");


menuBtn.addEventListener("click", () => {

    
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
})
