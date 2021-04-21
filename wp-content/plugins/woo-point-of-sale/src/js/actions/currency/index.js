 
import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';

export const POS_CURRENCY = 'POS_CURRENCY'; 
 
export const setCurrency = ( currency ) => {
 
  return {
    type: POS_CURRENCY,
    currency
  }

};

export const UpdateDefaultCurrency = (oldDefaultCode, newDefaultCode) => (dispatch) => {


  database.table('pos_currency').where("code").equals(oldDefaultCode[0].code).modify({is_default : false}).then( (response) => {
  
      if(response) {
       
      database.table('pos_currency').where("shortcode").equals(newDefaultCode.code).modify({is_default : true}).then( (result) => {
      
      
        getDBCurrencies().then( (acurr) => { 

            if( acurr ) {
              
              newDefaultCode.symbol = decodeHTMLEntities(newDefaultCode.symbol);
             
              let currency = {
                list : acurr,
                isFetching : 1,
                default : [newDefaultCode]

              }
            
              dispatch(setCurrency(currency));

              jQuery.confirm({
                title: translation.confirmation_text,
                icon: 'fa fa-question-circle',
                animation: 'scale',
                closeAnimation : 'scale',
                opacity: 0.5,
                content: translation.setting_update_success_text,
                buttons: {
                  'confirm': {
                    text: translation.okay_text,
                    btnClass: 'btn-blue',
                    action: function () {
                      jQuery(".pos-left-wrap ul li").eq(0).trigger("click");
                    },
                  }
                }
              });
              
        
            }
        
          });

        });

      } else {

        database.table('pos_currency').where("shortcode").equals(oldDefaultCode[0].code).modify({is_default : false}).then( (response) => {

          if(response) {
          
          database.table('pos_currency').where("shortcode").equals(newDefaultCode.code).modify({is_default : true}).then( (result) => {
            
            getDBCurrencies().then( (acurr) => { 

                if( acurr ) {
                  
                  newDefaultCode.symbol = decodeHTMLEntities(newDefaultCode.symbol);
                    
                  let currency = {
                    list : acurr,
                    isFetching : 1,
                    default : [newDefaultCode]
    
                  }
    
                  dispatch(setCurrency(currency));
    
                  jQuery.confirm({
                    title: translation.confirmation_text,
                    icon: 'fa fa-question-circle',
                    animation: 'scale',
                    closeAnimation : 'scale',
                    opacity: 0.5,
                    content: translation.setting_update_success_text,
                    buttons: {
                      'confirm': {
                        text: translation.okay_text,
                        btnClass: 'btn-blue',
                        action: function () {
                          jQuery(".pos-left-wrap ul li").eq(0).trigger("click");
                        },
                      }
                    }
                  });
                  
            
                }
            
              });
    
            });
    
          }
    
        }).catch((err) => {
            console.log(err);
        });

      }

    }).catch((err) => {
        console.log(err);
    });

}; 
  
export const getAllCurrencyWC = () => (dispatch) => {

    let user = apif_script.logged_in; 
    
    if (user != "") {
      
      loadCurrencies().then((res) => {

          if( res.list.length != 0) { 
          
            dispatch(setCurrency(res));
            
          } else{

            AjAxGetAllCurrencyWC().then( (response) => {
        
              if( response.default != undefined ) {
      
                  var defaultCurrency =  {
                    symbol: decodeHTMLEntities(response.default.symbol),
                    code : response.default.code
                  }
      
              } else {
                
                var defaultCurrency = {};
      
              }
      
              let currency = {
                list : [response],
                isFetching : 1,
                default : [defaultCurrency]
              }
                
              let bool = setUpCurrencies(response, defaultCurrency);
              
              if( bool ) {
      
                loadCurrencies().then((res) => {

                    if (res.list.length != 0) {

                      dispatch(setCurrency(res));

                    }
                });
                
              }
        
            }); 
            
          }
        
        
      });
      
      
    }
  
}; 

function loadCurrencies() {

  var faultCurrency = []; 
  
  var bool = getDBCurrencies().then( (curr) => {
    
    if( curr ) {

      jQuery.each( curr, ( i, val) => {
    
          if( val.is_default ) {
            
              faultCurrency.push({
                symbol: decodeHTMLEntities(val.symbol),
                code : val.code
              }); 

          }

      }); 
      let currency = {
        list : curr,
        isFetching : 1,
        default : faultCurrency
      } 

      return currency;

    } else {

      return false;

    }

  }); 


  return bool;


}

function getDBCurrencies() {

  return database.table('pos_currency').toArray();
}

function setUpCurrencies(currencies, defaultCurrency) {
    
    var is_def = false;
    var data = []; 

    jQuery.each( currencies, (i,val) => {
        is_def = false;
        if( defaultCurrency.code == i ) {
          
          is_def = true
        }

        let currency = {
          shortcode: val.code, 
          symbol : val.symbol,
          code : i,
          is_default : is_def
        }

        data.push( currency );

    }); 

    if( data.length > 0 ) {

      return database.table('pos_currency').bulkPut(data).then( (res) => {
          
        if( res)   
            return true;
          else 
            return false;
      });
      
    }
    
    return false;

 }

 function AjAxGetAllCurrencyWC() {

  return new Promise( (resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.loading_currencies;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_GET_ALL_CURRENCIES_ENDPOINT, {} ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      resolve(json);
        
    } );

  });
}

function decodeHTMLEntities (str) {
  var element = document.createElement('div');
  if(str && typeof str === 'string') {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    element.innerHTML = str;
    str = element.textContent;
    element.textContent = '';
  }

  return str;
}