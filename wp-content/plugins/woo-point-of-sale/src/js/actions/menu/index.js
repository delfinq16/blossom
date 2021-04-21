const MENU_OPEN = 'MENU_OPEN';
const MENU_CLOSE = 'MENU_CLOSE';

export const openMenu = () => ({
  type: MENU_OPEN,
});

export const closeMenu = () => ({
  type: MENU_CLOSE,
});
