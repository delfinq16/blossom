const MENU_OPEN = 'MENU_OPEN';
const MENU_CLOSE = 'MENU_CLOSE';

export default function (state = false, action) {
  switch (action.type) {
  case MENU_OPEN:
    return true;
  case MENU_CLOSE:
    return false;
  default:
    return state;
  }
}
