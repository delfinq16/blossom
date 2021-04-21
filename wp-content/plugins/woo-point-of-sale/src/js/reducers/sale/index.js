export const POS_SALE = 'POS_SALE'; 

const setSale = (state = [], action) => {
  
  switch (action.type) {
  case POS_SALE:
    return action.sale;
  default:
    return state;
  }
};
export default setSale;