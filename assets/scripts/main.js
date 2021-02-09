const button = document.querySelector('#menu_button')
const menu = document.querySelector('#menu')
const movile = window.innerWidth
// const movile = window.matchMedia('(max-width: 768px)')
console.log(window.innerWidth)
function dropDownMenu() {
    if (movile <= 892) {
        button.addEventListener('click', showHideMenu)
    } else {
        button.removeEventListener('click', showHideMenu)
    }
}
dropDownMenu()

function showHideMenu() {
    menu.classList.contains('is_active') 
     ?
        menu.classList.remove('is_active')
     :
        menu.classList.add('is_active')
}