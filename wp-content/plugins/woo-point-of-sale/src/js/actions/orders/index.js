import database from './../../database';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';
import { applyFilters, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { print_r } from 'locutus/php/var';

export const POS_ORDERS = 'POS_ORDERS';

export const ADD_CUSTOM_ORDER_DETAILS = 'wkwcpos_add_custom_order_details'

export const PRINT_INVOICE_SKIP_POPUP_AFTER_PAY = 'wkwcpos_show_print_invoice_skip_popup_after_pay';
export const AFTER_CREATING_ORDER_ACTION = 'wkwcpos_action_after_creating_order';
export const CLEAR_INDEXDB_SKIP_AFTER_PAY = 'wkwcpos_indexdb_skip_after_order';

export const setOrder = (orders) => {

  return {
    type: POS_ORDERS,
    orders
  }
};


export const getAllOrdersWC = () => (dispatch) => {

  let user = apif_script.logged_in;

  if (user != "") {

    isOnlineOrderDataExists().then((res) => {

      if (res.length <= 0) {

        AjAxGetAllOrderWC(dispatch).then((response) => {

        });

      } else {

        isOrderDataExists().then((reslt) => {

          let WCorders = {

            list: reslt,
            isFetching: 1,
            s: '',
            sorder: res,
          }

          dispatch(setOrder(WCorders));

        });

      }

    });

  }

};

export const loadAllOrders = () => (dispatch) => {

  database.table('pos_orders').toArray().then((orderData) => {

    let orderObj = {
      list: orderData,
      isFetching: 1,
      s: '',
      sorder: orderData,
    }

    dispatch(setOrder(orderObj));

  });

}

function AjAxGetAllOrderWC(dispatch) {

  return new Promise((resolve, reject) => {

    var index = 0;

    recursive_ajax(index, dispatch).then((recur_res) => {

      resolve(recur_res);
    });

  });

}

function recursive_ajax(page, dispatch) {

  let postData = {
    page: page
  }

  return new Promise((resolve, reject) => {

    if (page == 1) {

      document.querySelector('#loading-text').innerHTML = translation.text_loading_orders;

      document.querySelector('#loader').style.display = 'block';

    }

    POSPostRequest(wkwcpos_variable.WK_GET_ORDERS_ENDPOINT, postData).then((json) => {

      document.querySelector('#loader').style.display = 'none';

      if (json) {

        database.pos_orders.bulkPut(json).then((rsult) => {

          isOrderDataExists().then((res) => {

            let WCorders = {

              list: res,
              isFetching: 1,
              s: '',
              sorder: res,
            }

            dispatch(setOrder(WCorders));

          });

          if (json.length > 0) {

            page = page + 1;

            recursive_ajax(page, dispatch);

          } else {

            resolve(true);

          }

        });

      }

    });

  });

}

function isOrderDataExists() {

  return database.table('pos_orders').toArray().then((OrData) => {

    return OrData;

  });

}

function isOnlineOrderDataExists() {

  return database.table('pos_orders').where('order_type').equals('online').toArray().then((OrData) => {

    return OrData;

  });

}

export const current_state = (state_data) => (dispatch, getState) => {
  var current_state = getState().current_cart;
  var products = state_data.order.products;
  var product_title_arr = [];
  var offline = false;
  if (products) {

    if (offline) {

      jQuery.each(products, (i, val) => {

        if (val.options !== "false") {

          product_title_arr.push({ name: val.product_id, qty: val.quantity, var_id: val.options.var_id });

        }
        else {

          product_title_arr.push({ name: val.product_id, qty: val.quantity, var_id: 0 });


        }

      });

    } else {

      jQuery.each(products, (i, val) => {

        product_title_arr.push({ name: val.product_id, qty: val.qty, var_id: val.variable_id });

      });

    }
  }

  database.pos_cart.where("cart_id").equals(current_state).delete().then((res) => {

    if (res) {

      if (product_title_arr.length > 0) {

        jQuery.each(product_title_arr, (i, Tproduct) => {

          if (Tproduct.var_id == 0) {

            database.pos_products.where("product_id").equals(Tproduct.name).modify((product) => {

              product.stock = product.stock - Tproduct.qty;

            }).then((res) => {

              return res;

            });

          }
          else {

            database.pos_products.where("product_id").equals(Tproduct.name).modify((product) => {

              product.variations.variation = product.variations.variation.map((val, key) => {

                if (val.var_id == Tproduct.var_id) {

                  val.stock = val.stock - Tproduct.qty;

                }

                return val

              });

            }).then((res) => {

              return res;

            });


          }


        });

      }

      database.pos_coupon.where("cart_id").equals(current_state).delete().then((res) => {

      });

      database.pos_discount.where("cart_id").equals(current_state).delete().then((res) => {


      });

    }

  });

}

export const createWCOrder = (state_data) => (dispatch, getState) => {

  let user = apif_script.logged_in;

  var tendered = state_data.tendered;
  var current_state = getState().current_cart;
  var payment_type = state_data.payment_mode;
  var order_note = state_data.note;
  var cashPay = state_data.cashEntry;
  var cardPay = state_data.cardEntry;

  var cart = getState().cart;
  var coupon = getState().coupon;
  var discount = getState().discount;
  var tax = getState().tax.list;
  var Scurrency = getState().currency.default;
  var customer = Array.from(getState().customers.default);
  var currency = Array.from(Scurrency);

  var order_currency_code = currency.map((sym) => {
    return sym;
  });

  var def_customer = customer.map((cust) => {
    return cust.id;
  });

  var customer_id = def_customer[0];

  order_currency_code = order_currency_code[0];
  var cart_obj = cart.list;
  var coupon_obj = coupon.list;
  var discount_obj = discount.list;

  var dcart_id = discount.list.length > 0 ? discount.list[0].cart_id : '';
  var cocart_id = coupon.list.length > 0 ? coupon.list[0].cart_id : '';
  var ccart_id = cart.list.length > 0 ? cart.list[0].cart_id : '';
  var total_obj = cart.total;
  var sub_total = total_obj.cart_subtotal;
  var total = total_obj.cart_total;
  var tax_total = total_obj.tax_total;

  if (current_state == ccart_id) {

    var pos_cart = cart_obj[0].cart;
    var local_cart = JSON.stringify(pos_cart);

  } else {

    var pos_cart = [];
    var local_cart = [];

  }

  if (current_state === cocart_id) {

    var pos_coupon = coupon_obj[0].coupon;
    var local_coupon = JSON.stringify(pos_coupon);

  } else {

    var pos_coupon = {};
    var local_coupon = {};

  }

  if (current_state === dcart_id) {

    var pos_discount = discount_obj[0].discount;
    var local_discount = JSON.stringify(pos_discount);

  } else {

    var pos_discount = {};
    var local_discount = {};

  }

  var payment_option = apif_script.logged_in.payment_option;

  let chosenPaymentMethod = payment_type;

  if (payment_type != 'cash' && payment_option != undefined && payment_option.length > 0) {

    chosenPaymentMethod = payment_option.filter((payment) => payment.payment_slug == payment_type);

    if (chosenPaymentMethod.length > 0) {
      chosenPaymentMethod = chosenPaymentMethod[0].payment_name;
    }

  }

  var customerOrderObject = {
    user_id: user.user_id,
    order_note: order_note,
    currency_code: order_currency_code,
    discount: local_discount,
    coupon: local_coupon,
    customer_id: customer_id,
    cart: local_cart,
    tendered: tendered,
    payment_mode: payment_type,
    payment_title: chosenPaymentMethod,
    cashPay: cashPay,
    cardPay: cardPay
  };

  var online = navigator.onLine;

  customerOrderObject = applyFilters(ADD_CUSTOM_ORDER_DETAILS, customerOrderObject, customer, cart_obj, state_data)

  let postData = {
    data: JSON.stringify(customerOrderObject)
  };

  if (apif_script.order_process_type == 'online' && online) {

    return new Promise((resolve, reject) => {

      document.querySelector('#loading-text').innerHTML = translation.processing_order_text;

      document.querySelector('#loader').style.display = 'block';

      POSPostRequest(wkwcpos_variable.WK_CREATE_ORDER_ENDPOINT, postData).then((order_data) => {

        document.querySelector('#loader').style.display = 'none';

        if (order_data) {

          doAction(AFTER_CREATING_ORDER_ACTION, order_data, database);

          let bool = saveOrderToIndexDB(order_data);

          if (bool) {

            let final_res = clearIndexDB(order_data, current_state, false);

            if (final_res) {

              if (applyFilters(PRINT_INVOICE_SKIP_POPUP_AFTER_PAY, true, order_data)) {

                jQuery.confirm({

                  title: translation.success_text,

                  content: translation.text_order_success,

                  buttons: {

                    printinvoice: {

                      text: translation.printInvoice_text, // text for button

                      btnClass: 'btn-blue', // class for the button

                      action: function () {

                        resolve(order_data);

                      }

                    },

                    skip: {

                      text: __('Skip', 'wc_pos'), // text for button

                      btnClass: 'btn-orange', // class for the button

                      action: function () {

                        resolve({
                          order: {},
                          message: 'skip'
                        });

                      }

                    }

                  }

                });

              } else {

                resolve(order_data);

              }

            }

          }

        }

      });

    });

  } else {

    var order = {};

    var d = new Date();

    let tr_id = Math.floor((Math.random() * 999999999) + 100000000);

    tr_id = '#' + tr_id;

    order['id'] = tr_id;
    order['order_id'] = tr_id;
    order['cart_subtotal'] = sub_total;
    order['coupons'] = pos_coupon;
    order['order_date'] = d;
    order['discount'] = pos_discount;
    order['currency'] = currency[0];
    order['order_total'] = total;
    order['order_html'] = total;
    order['order_note'] = order_note;
    order['products'] = pos_cart;
    order['payment_mode'] = payment_type;
    order['payment_title'] = chosenPaymentMethod;
    order['cashPay'] = cashPay
    order['cardPay'] = cardPay
    order['cashPay_html'] = cashPay
    order['cardPay_html'] = cardPay

    order['tendered'] = tendered;
    order['order_type'] = 'offline';

    order['email'] = customer_id;
    order['balance'] = '';
    order['billing'] = customer[0].billing;
    order['tax_lines'] = tax;

    order = applyFilters(ADD_CUSTOM_ORDER_DETAILS, order, customer, cart_obj, state_data)

    let osuccess = saveOrderToIndexDB(order);

    if (osuccess) {

      let final_res = clearIndexDB(order, current_state, true);

      if (final_res) {

        return new Promise((resolve, reject) => {

          if (applyFilters(PRINT_INVOICE_SKIP_POPUP_AFTER_PAY, true, order)) {

            jQuery.confirm({

              title: translation.success_text,

              content: translation.text_order_success,

              buttons: {

                printinvoice: {

                  text: translation.printInvoice_text, // text for button

                  btnClass: 'btn-blue', // class for the button

                  action: function () {

                    resolve(order);

                  }

                },

                skip: {

                  text: __('Skip', 'wc_pos'), // text for button

                  btnClass: 'btn-orange', // class for the button

                  action: function () {

                    resolve({
                      order: order,
                      message: 'skip'
                    })

                  }

                }

              }

            });

          } else {
            resolve(order);
          }

        });

      }

    }

  };

}

function saveOrderToIndexDB(data) {

  let new_order = data;

  if (data) {

    database.table("pos_orders").put(new_order);

    return true;

  } else {

    return false;

  }

}

function clearIndexDB(order_data, current_state, offline = '') {

  if (applyFilters(CLEAR_INDEXDB_SKIP_AFTER_PAY, false, order_data, current_state)) {
    return true;
  }
  var products = order_data.products;
  var product_title_arr = [];

  if (products) {

    if (offline) {

      jQuery.each(products, (i, val) => {

        if (val.options !== "false") {

          product_title_arr.push({ name: val.product_id, qty: val.quantity, var_id: val.options.var_id });

        }
        else {

          product_title_arr.push({ name: val.product_id, qty: val.quantity, var_id: 0 });


        }

      });

    } else {

      jQuery.each(products, (i, val) => {

        product_title_arr.push({ name: val.product_id, qty: val.qty, var_id: val.variable_id });

      });

    }
  }

  database.pos_cart.where("cart_id").equals(current_state).delete().then((res) => {

    if (res) {

      if (product_title_arr.length > 0) {

        jQuery.each(product_title_arr, (i, Tproduct) => {

          if (Tproduct.var_id == 0) {

            database.pos_products.where("product_id").equals(Tproduct.name).modify((product) => {

              product.stock = product.stock - Tproduct.qty;

            }).then((res) => {

              return res;

            });

          }
          else {

            database.pos_products.where("product_id").equals(Tproduct.name).modify((product) => {

              product.variations.variation = product.variations.variation.map((val, key) => {

                if (val.var_id == Tproduct.var_id) {

                  val.stock = val.stock - Tproduct.qty;

                }

                return val

              });

            }).then((res) => {

              return res;

            });


          }


        });

      }

      database.pos_coupon.where("cart_id").equals(current_state).delete().then((res) => {

      });

      database.pos_discount.where("cart_id").equals(current_state).delete().then((res) => {


      });

    }

  });

  return true;

}

export const loadSearchedOrder = (search, fakeorders) => (dispatch) => {

  if (search) {

    let orderData = fakeorders.filter((order) => {
      if (order.order_id.toString().indexOf(search) != -1 || ((order.offline_id) && order.offline_id.indexOf(search) != -1)) {
        return order;
      }

    });

    let orderObj = {
      list: fakeorders,
      isFetching: 1,
      s: search,
      sorder: orderData
    }

    dispatch(setOrder(orderObj));

  } else {

    let orderObj = {
      list: fakeorders,
      isFetching: 1,
      s: '',
      sorder: fakeorders
    }

    dispatch(setOrder(orderObj));

  }

}
