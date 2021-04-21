export const POS_CURRENCY = 'POS_CURRENCY'; 

const setCurrency = (state = [], action) => {
  
  switch (action.type) {
  case POS_CURRENCY:
    return action.currency;
  default:
    return state;
  }
};
export default setCurrency;