export const POS_INVOICE = 'POS_INVOICE'; 

const setInvoice = (state = [], action) => {
  
  switch (action.type) {
  case POS_INVOICE:
    return action.invoice;
  default:
    return state;
  }
};
export default setInvoice;