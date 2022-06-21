const NavigationMenu = document.querySelector('.mobile-img')
const hamburgeurMenu = document.querySelector('#header-menu')
const headerMenu = document.querySelector('.remove')

const removeMenuOption = document.querySelectorAll(".link").forEach(a => a.addEventListener("click", () => {
    hamburgeurMenu.classList.remove("hamburgeur")
}))

NavigationMenu.addEventListener("click",menubar)
headerMenu.addEventListener("click",menubar)
removeMenuOption.addEventListener("click",removeMenubar)
function menubar() {
    hamburgeurMenu.classList.toggle("hamburgeur")
}

// function removeMenubar() {
//     hamburgeurMenu.classList.toggle("hamburgeur")
// }

// removeMenuOption