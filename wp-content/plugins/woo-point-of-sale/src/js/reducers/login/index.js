export const LOGGIN_USER = 'LOGGIN_USER';
export const OPENING_AMOUNT = 'OPENING_AMOUNT';

const cashier = (state = [], action) => {
  switch (action.type) {
    case LOGGIN_USER:
      return action.user;
    default:
      return state;
  }
};
export default cashier;