export const POS_TAX = 'POS_TAX'; 

const setTax = (state = [], action) => {
  
  switch (action.type) {
  case POS_TAX:
    return action.tax;
  default:
    return state;
  }
};
export default setTax;