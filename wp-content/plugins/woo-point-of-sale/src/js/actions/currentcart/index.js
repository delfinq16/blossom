import database from './../../database';

export const POS_CURRENT_CART = 'POS_CURRENT_CART';

export const setCurrentCart = ( current_cart ) => {

  return {
    type: POS_CURRENT_CART,
    current_cart
  }
  
};

export const getCurrentCart = () => (dispatch) => { 

    let res = database.table('pos_current_cart').toArray().then((response) => {

        if( response.length <=0 ) { 

            let current_cart = {
              id : 0,
              cart_id : 0,
            }; 

            database.table('pos_current_cart').put(current_cart).then( ( response ) => {
    
                let cucart = 0;

                dispatch(setCurrentCart(cucart));

            });

        } else {

          let cart_id = response.map( (val,i) => {
            
            return val.cart_id;

          })
          
          dispatch(setCurrentCart(cart_id[0]));

        }

    });

}; 

export const updateCurrentCart = (current_cart) => (dispatch) => { 

  database.table('pos_current_cart').update(0, { cart_id : parseInt(current_cart)}).then((response) => {

      dispatch(setCurrentCart(parseInt(current_cart)));

  });

}; 