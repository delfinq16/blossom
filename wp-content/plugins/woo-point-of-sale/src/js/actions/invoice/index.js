
 
import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const POS_INVOICE = 'POS_INVOICE'; 
 
export const setInvoice = ( invoice ) => {

  return {
    type: POS_INVOICE,
    invoice
  }
};

  
export const getInvoiceTemplate = () => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {
    
    isInvoiceDataExists().then((result) => {

      if( result.length <= 0 ) {
      
        AjAxGetInvoiceWC().then( (response) => {

          if( response ) {
            
            dispatch(setInvoice(response));
             
          }
    
        });
  
      } else {

        dispatch(setInvoice(result[0].invoice_html));

      }

    });
    
  }
  
 }; 
  
 function AjAxGetInvoiceWC() {

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_tax_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_INVOICE_TEMPLATE_ENDPOINT, {} ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if( json ) {

        let invoiceObj = {
            id: 1,
            invoice_html: json
        };

        database.pos_invoice.put(invoiceObj).then((res) =>{

            resolve(json);

        });

      }
      
    } );

  });

}

function isInvoiceDataExists() {

  return database.table('pos_invoice').toArray().then( (invoiceData) => {

    return invoiceData;

  });

}
