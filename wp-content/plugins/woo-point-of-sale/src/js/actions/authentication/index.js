import wkwcpos_variable from './../../config';
import { POSGetSessionIDRequest } from './../../hash';

export const getSessionIDAuthentication = () => (dispatch) => {

  return new Promise( (resolve, reject) => {

    POSGetSessionIDRequest( wkwcpos_variable.WK_GET_SESSION_ID_ENDPOINT ).then((res) => {

      resolve([]);
        
    } );

  });

}
