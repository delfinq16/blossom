import database from '../../database';
import { translation } from "../../translation";
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';
 
export const POS_COUNTRY = 'POS_COUNTRY'; 
 
export const setCountries = ( countries ) => {
 
  return {
    type: POS_COUNTRY,
    countries
  }
};

  
export const getAllCountriesWC = () => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {

    AjAxGetCountries().then( (response) => {

      if(response) {

        let countyObj = {
          list : response,
          isFetching : 1,
        }
        
        dispatch(setCountries(countyObj));

      }
      
    });

  }; 

}

function AjAxGetCountries() {

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_countries_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_COUNTRIES_ENDPOINT, {} ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if( json ) {

        resolve( json );

      }
        
    } );

  });

}

export const getAllStatesWC = (code,countries) => (dispatch) => {

  let user = apif_script.logged_in; 
  
  if (user != "") {
  
      return AjAxGetStates(code).then( (response) => {

        if(response) {

          return response;

        } else {

            return false;
        }

        
      });

   
  }; 

}

function AjAxGetStates(code) {

  const postData = {
    country_code: code
  };

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_states_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_STATES_ENDPOINT, postData ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if( json ) { 
          
        resolve( json.states );  

      }
        
    } );

  });

}