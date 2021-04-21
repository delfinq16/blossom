 
import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const POS_CATEGORIES = 'POS_CATEGORIES'; 

export const setCategories = ( categories ) => {
 
  return {
    type: POS_CATEGORIES,
    categories
  }
};

  
export const getAllCategories = () => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {
    
    isCategoryDataExists().then( (result) => {
        
        if( result.length <= 0 ) {
        
          AjAxGetAllCategoryWC().then( (response) => {

            if( response ) {

              let categoryObj = {
                list : response,
                isFetching : 1,
              }

              dispatch(setCategories(categoryObj));

            }

          });

        } else {

          let catObj = {
            list : result,
            isFetching : 1,
          }

          dispatch(setCategories(catObj));

        }

    });
  
  }; 

}
  
function AjAxGetAllCategoryWC() {

  const postData = {};

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_categories_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_ALL_CATEGORIES_ENDPOINT, postData ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if( json ) {
            
        database.pos_categories.bulkPut(json).then((rsult) => {
          
          resolve(json);

        });

      }
        
    } );

  });

}

function isCategoryDataExists() {
  
  return database.table('pos_categories').toArray().then( (catData) => {
     
    return catData;
    
  });
 
}
