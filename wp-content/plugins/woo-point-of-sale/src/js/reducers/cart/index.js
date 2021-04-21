export const POS_CART = 'POS_CART';  

const setCartProducts = (state = [], action) => {

  switch (action.type) {
  case POS_CART:
    return action.cart; 
  default:
    return state;
  }
};

export default setCartProducts;