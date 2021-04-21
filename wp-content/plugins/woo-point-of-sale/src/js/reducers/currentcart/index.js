
export const POS_CURRENT_CART = 'POS_CURRENT_CART'; 

const setCurrentCart = (state = [], action) => {

  switch (action.type) { 
  case POS_CURRENT_CART:
    return action.current_cart;
  default:
    return state;
  }
};

export default setCurrentCart;