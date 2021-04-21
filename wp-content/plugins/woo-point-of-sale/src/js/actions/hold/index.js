import database from './../../database';
import { translation } from '../../translation';

export const POS_HOLD = 'POS_HOLD';  

export const SetHold = ( hold ) => {

    return {
        type: POS_HOLD,
        hold
    }

};

export const getAllHoldCartProducts = () => (dispatch) => {

    let user = apif_script.logged_in; 

    if (user != "") {

        loadHoldCartProducts().then( (dbhold) => {

            if(dbhold) {

                var holdcart = {
                    list : dbhold,
                    isFetching : 1,
                };


            } else { 

                var holdcart = {
                    list : '',
                    isFetching : 1
                };

            }

            dispatch(SetHold(holdcart));

        });

    }

}; 

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getCurrentDate() {
    var d = new Date();
    var date = d.getDate();
    var m = d.getMonth();
    var y = d.getFullYear();
    var month_list = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var full_date = month_list[m] + ' ' + date + ' ' + y;
    return full_date;
}

function getCurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var full_time = h + ":" + m + ":" + s;
    return full_time;
}

export const addToHold = ( note, current_cart, cart_list) => (dispatch, getState) => { 

    if( cart_list ) {

        let Hnote = note;
        let fake_cart = current_cart;
        let Hdate = getCurrentDate();
        let Htime = getCurrentTime();

        var holdObj = { 
            id : fake_cart,
            cart_id: fake_cart,
            note: Hnote,
            date: Hdate,
            time: Htime,
        }

        database.table('pos_holds').put(holdObj).then( (bool) => {

            loadHoldCartProducts().then((res) => {

                if( res ) {

                    let holdData = {
                        list : res,
                        isFetching : 1
                    };

                    jQuery.confirm({
                        title: translation.success_text,
                        content: translation.text_cart_add ,
                        autoClose: 'cancelAction|3000',
                        type: 'green',
                        escapeKey: 'cancelAction',
                        buttons: {
                            cancelAction: {
                                text: translation.cancel_btn_text,
                                btnClass: 'btn-green',
                            }
                        }
                    });

                    dispatch( SetHold(holdData));

                }   
            }) 

        });

    }

};

export const RemoveHoldData = (ccart) => (dispatch) => {

    database.table('pos_holds').where("id").equals(parseInt(ccart)).delete().then((result) => {
        
        if( result ) {
            
            loadHoldCartProducts().then( (dbhold) => {

                if(dbhold) {

                    var holdcart = {
                        list : dbhold,
                        isFetching : 1,
                    };
        
        
                } else { 
                    
                    var holdcart = {
                        list : '',
                        isFetching : 1
                    };
        
                }

                
                dispatch(SetHold(holdcart));

                jQuery(".pos-left-wrap ul li").removeClass("pos-active").eq(0).addClass("pos-active");
                jQuery(".pos-body-wrapper > .pos-tabContent").removeClass("pos-active");
                jQuery(".pos-body-wrapper > .pos-tabContent#pos-home").addClass("pos-active");
                jQuery(".pos-body-wrapper > .pos-tabContent#pos-cart").addClass("pos-active");
                jQuery("#search-pos-product").attr("disabled", false);
                jQuery("#search-pos-product").css("cursor", "text");

            });
        }

    });
    

}

function loadHoldCartProducts() {

    return database.table('pos_holds').toArray();

}

export const RemoveCartProduct = ( current_cart, remove_id, modifiedWeight = '' ) => (dispatch, getState) => { 

    if( remove_id ) {

        let res = database.table('pos_cart').where("cart_id").equals(current_cart).toArray().then((response) => {
            
            if(response) {
                
                if( response[0].cart != undefined ) {

                    let remover = response[0].cart;

                    let final_object = remover.filter((item) => {

                        if( item.product_id == remove_id && modifiedWeight == item.boughtWeight ) {
                            return false;
                        } else {
                            return true;
                        }

                    });

                    if( final_object ) {

                        Update_Cart(final_object, current_cart).then(function (updated) {
                        
                            if( updated ) {

                            loadCartProducts().then( (dbcart) => {
            
                                    if(dbcart) {

                                        let final_total = get_cart_total(dbcart, getState());
                                        
                                        var cart = {
                                            list : dbcart,
                                            isFetching : 1,
                                            total : final_total
                                        };

                                    } else {
                                
                                        let final_total = get_empty_cart_total(getState().currency.default.symbol);
                                        
                                        var cart = {
                                            list : '',
                                            isFetching : 1,
                                            total : final_total 
                                        };

                                    }

                                    dispatch(SetHold(cart));
                            
                                });
                            }
                        })

                    }
                    


                }
            

            }
        });

    }

};

function UpdateHold( final_object, current_cart ) {

    return database.table('pos_cart').where("cart_id").equals(current_cart).modify( { cart : final_object } );
}
 

export const ModifyCart = ( qty, current_cart, product_id, var_id = '' ) => (dispatch, getState) => { 
  if( product_id ) {

    database.table('pos_products').where("product_id").equals(product_id).toArray().then( (dbproducts) => {
      
        if( dbproducts ) {
          
            loadCartProducts().then( (data) => {
        
                if( data.length <= 0 )
                    var send_data = [];     
                    else
                    var send_data = data;

                    
                    let result = ModifyProductToIndexDb( send_data, current_cart, dbproducts[0], qty, var_id = '');

                    if( result ) {

                        loadCartProducts().then((cdata) => {
                            
                            if(cdata) {

                                let final_total = get_cart_total(cdata, getState());

                                var cart = {
                                    list : cdata,
                                    isFetching : 1,
                                    total : final_total
                                };

                            } else {
                           
                                let final_total = get_empty_cart_total(getState().currency.default.symbol);
                                
                                var cart = {
                                    list : cdata,
                                    isFetching : 1,
                                    total : final_total 
                                };

                            }
                            
                            dispatch(SetHold(cart));
                        
                        });

                    }
 
            } );
           
           
        }
    
      });
  
    }
    
};

  