const menuIcon = document.querySelector('#humberger_menu_icon');
const menuList = document.querySelector('#humberger_menu_list');
const closeMenuIcon = document.querySelector('#close-menu');
menuIcon.addEventListener('click', () => {
  closeMenuIcon.classList.add('show-icon');
  menuList.classList.add('show');
  menuIcon.classList.add('hide-icon');
});

closeMenuIcon.addEventListener('click', () => {
  closeMenuIcon.classList.remove('show-icon');
  menuList.classList.remove('show');
  menuIcon.classList.remove('hide-icon');
});