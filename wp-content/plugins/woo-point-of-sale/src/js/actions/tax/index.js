 
import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const POS_TAX = 'POS_TAX'; 
 
export const setTax = ( tax ) => {
 
  return {
    type: POS_TAX,
    tax
  }
};

  
export const taxAccount = () => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {
    
    isTaxDataExists().then((result) => {

      if( result.length <= 0 ) {
      
        AjAxGetAllTaxWC().then( (response) => {
  
          if( response ) {
            
            let Tax = {

              list : response,
              isFetching : 1,

            }

            dispatch(setTax(Tax));
             
          }
    
        });
  
      } else {

        let Tax = {

          list : result,
          isFetching : 1,

        }

        dispatch(setTax(Tax));

      }

    });
    
  }
  
 }; 
  
 function AjAxGetAllTaxWC() {

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_tax_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_TAX_DETAILS_ENDPOINT, {} ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      let taxObj = {};

      if( json ) {

        jQuery.each(json, (i,val) => {
          
          taxObj = {
            id : i,
            rate : val.rate,
            shipping : val.shipping,
            label : val.label,
            compound : val.compound,
          }
          
          if( Object.entries(taxObj).length > 0 ) {

            database.pos_tax.put(taxObj).then((res) =>{

              resolve(json);

            }); 

          }

        });

      }
      
    } );

  });

}

function isTaxDataExists() {

  return database.table('pos_tax').toArray().then( (taxData) => {

    return taxData;

  });

}
