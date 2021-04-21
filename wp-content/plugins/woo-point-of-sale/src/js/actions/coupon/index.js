import database from './../../database';
import { translation } from '../../translation';
import { getAllCartProducts } from '../cart';

export const POS_COUPON = 'POS_COUPON';


export const setCoupon = (coupon) => {

    return {
        type: POS_COUPON,
        coupon
    }

};

export const getAllCouponWC = () => (dispatch) => {

  LoadCouponsIndexDB().then((result) => {

    if (result.length > 0) {

      var coupon = {
        list: result,
        isFetching: 1
      };

    } else {

      var coupon = {
        list: '',
        isFetching: 1
      };

    }

    dispatch(setCoupon(coupon));

  });

};


function LoadCouponsIndexDB() {

  return new Promise((resolve, reject) => {

    database.table('pos_coupon').toArray().then((coData) => {
      
      resolve(coData);

    });

  });


}

export const ApplyCoupon = (coupon) => (dispatch, getState) => {

  let current_cart = getState().current_cart;

  LoadCouponsIndexDB().then((res) => {
  
  if (res.length > 0) {

      var checkCouponAlreadyApplied = res[0].coupon.filter(obj => {

        return coupon.code == obj.code;

      });

      if (checkCouponAlreadyApplied.length == 0) {

        res[0].coupon.push(coupon);

        return database.table('pos_coupon').where("cart_id").equals(current_cart).modify({
          coupon: res[0].coupon
        }).then((coData) => {

          if (coData) {

            let coup = {
              list: res,
              isFetching: 1
            }

            jQuery.confirm({
              title: translation.success_text,
              content: translation.coupon_applied_text,
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

            dispatch(setCoupon(coup));
            dispatch(getAllCartProducts());

          }

        });
      } else {

        jQuery.confirm({
          title: translation.err_text,
          content: 'This coupon is already applied',
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

    } else {

      let letDbData = {
        id: current_cart,
        cart_id: current_cart,
        coupon: [coupon]
      }

      return database.table('pos_coupon').put(letDbData).then((coData) => {

        let coup = {
          list: [letDbData],
          isFetching: 1
        }

        jQuery.confirm({
          title: translation.success_text,
          content: translation.coupon_applied_text,
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

        dispatch(setCoupon(coup));
        dispatch(getAllCartProducts());

      });

    }

  });

}

export const RemoveCoupon = (current_cart, couponcode) => (dispatch) => {
  
  LoadCouponsIndexDB().then((res) => {

    if (res.length > 0) {
      
      let latest_coupon = res[0].coupon.filter((coup) => {
        
        return coup.code != couponcode;
      });
        
      return database.table('pos_coupon').where("cart_id").equals(current_cart).modify({
        coupon: latest_coupon
      }).then((coData) => {
        if (coData) {
          res[0].coupon = latest_coupon;

          let coup = {
            list: res,
            isFetching: 1
          }

          dispatch(setCoupon(coup));
          dispatch(getAllCartProducts());

        }

      });

    }

  });

}

export const ApplyCustomerCoupon = (coupon) => (dispatch, getState) => {

  return new Promise((resolve, reject) => {

    let current_cart = getState().current_cart;

    var result = LoadCouponsIndexDB().then((res) => {

      if( !coupon ) {
        return false;
      }
    
      if (res.length > 0) {

        var checkCouponAlreadyApplied = res[0].coupon.filter(obj => {

          return coupon.code == obj.code;

        });

        if (checkCouponAlreadyApplied.length == 0) {

          res[0].coupon.push(coupon);

          return database.table('pos_coupon').where("cart_id").equals(current_cart).modify({
            coupon: res[0].coupon
          }).then((coData) => {

            if (coData) {

              let coup = {
                list: res,
                isFetching: 1
              }

              dispatch(setCoupon(coup));
              dispatch(getAllCartProducts());

            }

          });
        }

      } else {

        let letDbData = {
          id: current_cart,
          cart_id: current_cart,
          coupon: [coupon]
        }

        return database.table('pos_coupon').put(letDbData).then((coData) => {

          let coup = {
            list: [letDbData],
            isFetching: 1
          }

          dispatch(setCoupon(coup));
          dispatch(getAllCartProducts());

        });

      }

      return false;

    });

    resolve( result );

  });

}