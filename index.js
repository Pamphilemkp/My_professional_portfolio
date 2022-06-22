
const NavigationMenu = document.querySelector('.mobile-img');
const hamburgeurMenu = document.querySelector('#header-menu');
const headerMenu = document.querySelector('.remove');

document.querySelectorAll('.link').forEach((a) => a.addEventListener('click', () => {
  hamburgeurMenu.classList.remove('hamburgeur');
}));

function menubar() {
  hamburgeurMenu.classList.toggle('hamburgeur');
}

NavigationMenu.addEventListener('click', menubar);
headerMenu.addEventListener('click', menubar);