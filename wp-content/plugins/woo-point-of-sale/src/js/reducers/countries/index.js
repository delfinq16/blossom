export const POS_COUNTRY = 'POS_COUNTRY'; 

const setCountries = (state = [], action) => {
  
  switch (action.type) {
  case POS_COUNTRY:
    return action.countries;
  default:
    return state;
  }
};
export default setCountries;