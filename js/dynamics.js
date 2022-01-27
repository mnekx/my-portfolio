// Top Navigation behaviour
const menuIcon = document.querySelector('#humberger_menu_icon');
const menuList = document.querySelector('#humberger_menu_list');
const closeMenuIcon = document.querySelector('#close-menu');
const logoHeader = document.querySelector('.logo h1');
menuIcon.addEventListener('click', () => {
  closeMenuIcon.classList.add('show-icon');
  menuList.classList.add('show');
  menuIcon.classList.add('hide-icon');
  logoHeader.classList.add('hide-icon');
});

closeMenuIcon.addEventListener('click', () => {
  closeMenuIcon.classList.remove('show-icon');
  menuList.classList.remove('show');
  menuIcon.classList.remove('hide-icon');
  logoHeader.classList.remove('hide-icon');
});

const navLinks = document.querySelectorAll('.nav-link');

function navMenuHandler() {
  if (window.innerWidth < 992) {
    const arr = Array.from(navLinks);
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].addEventListener('click', () => {
        closeMenuIcon.classList.remove('show-icon');
        menuList.classList.remove('show');
        menuIcon.classList.remove('hide-icon');
        logoHeader.classList.remove('hide-icon');
      });
    }
  }
}

navMenuHandler();