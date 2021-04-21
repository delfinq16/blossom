export const POS_PRODUCTS = 'POS_PRODUCTS'; 

const setPosProducts = (state = [], action) => {

  switch (action.type) {
  case POS_PRODUCTS:
    return action.products;
  default:
    return state;
  }
};
export default setPosProducts;