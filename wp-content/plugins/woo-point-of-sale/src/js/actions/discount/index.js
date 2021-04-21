import database from './../../database';

export const POS_DISCOUNT = 'POS_DISCOUNT';

export const setDiscount = ( discount ) => {

  return {
    type: POS_DISCOUNT,
    discount
  }

};

export const getAllDiscountWC = () => (dispatch) => {

    database.table('pos_discount').toArray().then((response) => {

        if( response ) {

          var discount = {
            list : response,
            isFetching : 1
          };


        } else {

          var discount = {
            list : '',
            isFetching : 1
          };

        } 

        dispatch(setDiscount(discount));

    });

}; 

export const ModifyDiscount = ( act, discount, current_cart ) => ( dispatch ) => {

  if( act == 'add' ) {

    var discObj = {
      id : current_cart, 
      cart_id : current_cart,
      discount : discount 
    } 

    database.table('pos_discount').put(discObj).then((response) => {

        let dis = {
          list : [discObj], 
          isFetching : 1 
        } 

        dispatch(setDiscount( dis )); 

    });

  } else if( act == 'delete' ) {

    database.table('pos_discount').where("cart_id").equals(current_cart).delete().then((response) => {

        let dis = {
          list : '', 
          isFetching : 1 
        } 

        dispatch(setDiscount( dis )); 

    });

  }

}