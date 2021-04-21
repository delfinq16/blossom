export const POS_HOLD = 'POS_HOLD'; 

const SetHold = (state = [], action) => {
  switch (action.type) {
    case POS_HOLD:
      return action.hold; 
    default:
      return state;
  }
};
  export default SetHold;