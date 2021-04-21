export const POS_DISCOUNT = 'POS_DISCOUNT'; 

const setDiscount = (state = [], action) => {
 
  switch (action.type) {
  case POS_DISCOUNT:
    return action.discount;
  default:
    return state;
  }
};
export default setDiscount;