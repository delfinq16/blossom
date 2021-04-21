export const POS_COUPON = 'POS_COUPON'; 

const setCoupon = (state = [], action) => {
  
  switch (action.type) {
  case POS_COUPON:
    return action.coupon;
  default:
    return state;
  }
};
export default setCoupon;