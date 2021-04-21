import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const SaveManager = (data) => () => {

  let user = apif_script.logged_in;

  if (user != "") { 

    AjAxUpdateManagerWC(data).then( (response) => {

        if( response ) {

          jQuery.confirm({
            title: translation.confirmation_text,
            icon: 'fa fa-question-circle',
            animation: 'scale',
            closeAnimation : 'scale',
            opacity: 0.5,
            content: translation.account_update_success_text,
            buttons: {
              'confirm': {
                text: translation.okay_text,
                btnClass: 'btn-blue',
                action: function () {
                },
              }
            }
          });

        } else{

          jQuery.confirm({
            title: translation.err_text,
            content: translation.error_keyword,
            autoClose: 'cancelAction|3000',
            type: 'red',
            escapeKey: 'cancelAction',
            buttons: {
              cancelAction: {
                text: translation.cancel_btn_text,
                btnClass: 'btn-red',
              }
            }
          
          });

        }
  
    }); 
    
  }
  
};  
  
function AjAxUpdateManagerWC( form_data) {

  const postData = {
    form_data: JSON.stringify(form_data)
  };

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.upadting_manager_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_UPDATE_MANAGER_ENDPOINT, postData ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      resolve(json.response);
      
    } );

  });

} 
