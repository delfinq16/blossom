export const POS_CUSTOMERS = 'POS_CUSTOMERS'; 

const setCustomer = (state = [], action) => {
  
  switch (action.type) {
  case POS_CUSTOMERS:
    return action.customers;
  default:
    return state;
  }
};
export default setCustomer;