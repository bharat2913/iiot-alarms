var menu = document.getElementById('menu');
var sidebar = document.getElementById('sidbar');

var todggleMenu = true;

function handleClick(e) {
    if(todggleMenu) {
        sidebar.classList.add('toggleMenuClose')
        sidebar.classList.remove('toggleMenuOpen')
        todggleMenu = false;
    } else {
        sidebar.classList.add('toggleMenuOpen')
        sidebar.classList.add('toggleMenuClose')
        todggleMenu = true;
    }
}

menu.addEventListener("click", handleClick )