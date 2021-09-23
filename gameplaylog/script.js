document.addEventListener('click', e => {
  const isMenuButton = e.target.matches("[menu-button-logo]");
  if (!isMenuButton && e.target.closest('[menu-button]') !=null) return

  let currentMenu;
  if (isMenuButton) {
    currentMenu = e.target.closest('[menu-button]');
    currentMenu.classList.toggle('active');
  }

  document.querySelectorAll("[menu-button].active").forEach(menu => {
    if (menu === currentMenu) return 
    menu.classList.remove('active')
  })
})