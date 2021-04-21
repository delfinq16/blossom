export const POS_PRINTERS = 'POS_PRINTERS'; 

const setPrinter = (state = [], action) => {
  
  switch (action.type) {
  case POS_PRINTERS:
    return action.printers;
  default:
    return state;
  }
};
export default setPrinter;