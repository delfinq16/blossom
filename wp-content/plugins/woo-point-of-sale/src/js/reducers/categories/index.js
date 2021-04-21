export const POS_CATEGORIES = 'POS_CATEGORIES'; 

const setCategories = (state = [], action) => {
  
  switch (action.type) {
  case POS_CATEGORIES:
    return action.categories;
  default:
    return state;
  }
};
export default setCategories;