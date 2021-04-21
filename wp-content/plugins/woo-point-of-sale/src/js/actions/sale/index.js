import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const POS_SALE = 'POS_SALE'; 

export const setSale = ( sale ) => {

  return {
    type: POS_SALE,
    sale
  }
};

export const getSaleHistoryWC = () => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {
    
    loadSaleHistory().then( (result) => {
          
        if( result.length <= 0 ) { 

          AjAxGetSaleHistory().then( (response) => {

            if(response) {

              let saleObj = {
                list : response,
                isFetching : 1,
              }
              
              dispatch(setSale(saleObj));

            }
            
          });

        } else {

          let sObj = {
            list : result,
            isFetching : 1,
          }

          dispatch(setSale(sObj));

        }

    });

  }; 

}

function AjAxGetSaleHistory() {

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_sale_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_SALE_HISTORY_ENDPOINT, {} ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if( json ) {
  
        database.table('pos_sale').bulkPut(json).then((response) => { 

            resolve( json ); 

        }); 

      }
      
    } );

  });

}

export const SaveSaleHistoryToDB = (json) => (dispatch) => {
 
    if( json ) {

        return database.pos_sale.bulkPut(json).then((rsult) => {
          
          return rsult;

      });

    }

}

function loadSaleHistory() {
  
  return database.table('pos_sale').toArray().then( (saleData) => {
     
    return saleData;
    
  });
 
}
