export const POS_ORDERS = 'POS_ORDERS'; 

const setOrder = (state = [], action) => {
  
  switch (action.type) {

    case POS_ORDERS:
      return action.orders;
    default:
      return state;

  }

};

export default setOrder;