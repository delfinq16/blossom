import database from './../../database';
import {translation} from '../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';
import { applyFilters } from '@wordpress/hooks';
export const CUSTOMER_OBJ_AFTER_SEARCH = 'wkwcpos_customer_obj_after_search';

export const POS_CUSTOMERS = 'POS_CUSTOMERS';

export const setCustomer = (customers) => {
  return {
    type: POS_CUSTOMERS,
    customers
  }
};

export const getAllCustomersWC = () => (dispatch) => {

  let user = apif_script.logged_in;

  if (user != "") {

    isCustomerDataExists().then((result) => {

      if (result.length <= 0) {

        AjAxGetAllCustomerWC(dispatch).then((response) => {

          if (response) {

            isCustomerDataExists().then((result) => {

              var def_cus = [];

              if (result) {

                result.forEach((cust, index) => {

                  if (cust.is_true == '1') {

                    def_cus.push(cust);

                  }

                });

              }

              let custObj = {
                list: result,
                isFetching: 1,
                default: def_cus,
                s: '',
                scustomer: result
              }

              dispatch(setCustomer(custObj));

            });

          }

        });

      } else {

        var def_cus = [];

        if (result) {

          result.forEach((cust, index) => {

            if (cust.is_true == '1') {

              def_cus.push(cust);

            }

          });

        }

        let custObj = {
          list: result,
          isFetching: 1,
          default: def_cus,
          s: '',
          scustomer: result
        }

        dispatch(setCustomer(custObj));

      }

    });

  }

};

export const loadSearchCustomers = (search, fakecustomers, fakedefault) => (dispatch) => {

  if (search) {

    database.table('pos_customers').where("first_name").startsWithIgnoreCase(search).or('email').startsWithIgnoreCase(search)
      .toArray().then((customerData) => {

        let customerObj = {
          list: fakecustomers,
          isFetching: 1,
          default: fakedefault,
          s: search,
          scustomer: customerData
        }

        customerObj = applyFilters(CUSTOMER_OBJ_AFTER_SEARCH, customerObj,search, fakecustomers, fakedefault);

        dispatch(setCustomer(customerObj));

      });

  } else {

    let customerObj = {
      list: fakecustomers,
      isFetching: 1,
      default: fakedefault,
      s: '',
      scustomer: fakecustomers
    }

    dispatch(setCustomer(customerObj));

  }


}


export const updateDefaultCustomer = (customer, fakecustomers) => (dispatch) => {

  if (customer) {

    let customerObj = {
      list: fakecustomers,
      isFetching: 1,
      default: customer,
      s: '',
      scustomer: fakecustomers
    }

    fakecustomers.forEach( function(obj) {
      obj.is_true = false;
    } )

    customer[0].is_true = true;

    database.table('pos_customers').toCollection().modify(function (obj) {
      obj.is_true = false;
    });

    database.table('pos_customers').update(customer[0].id, {
      is_true: true
    }).then(function (updated) {

      if (updated)
        dispatch(setCustomer(customerObj));

    });

  }

}

export const DeleteCustomer = (customer_id) => (dispatch) => {

  if (customer_id) {

    return DeleteCustomerViaAJAX(customer_id).then((response) => {

      if (response) {

        database.table('pos_customers').where("id").equals(parseInt(response)).delete().then((res) => {

          if (res) {

            isCustomerDataExists().then((result) => {

              var def_cus = [];

              if (result) {

                result.forEach((cust, index) => {

                  if (cust.is_true == '1') {

                    def_cus.push(cust);

                  }

                });

              }

              let custObj = {
                list: result,
                isFetching: 1,
                default: def_cus,
                s: '',
                scustomer: result
              }

              dispatch(setCustomer(custObj));

            });

          }

        });

      }

    });


  }


}

function DeleteCustomerViaAJAX(customer_id) {

  const postData = {
    'customer': customer_id
  };

  return new Promise((resolve, reject) => {

    document.querySelector( '#loading-text' ).innerHTML = translation.deleting_customer_title_text;

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_DELETE_CUSTOMER_ENDPOINT, postData ).then((response) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if (response && response == customer_id) {

        resolve(response);

      }

    } );

  });
}

export const SaveCustomer = (customer, pos_customer_id) => (dispatch) => {

  if (customer) {

    return CreateCustomerViaAJAX(customer, pos_customer_id).then((resposnse) => {

      if (resposnse) {

        return database.table('pos_customers').put(resposnse).then((res) => {

          if (res) {

            return res;

          }

        });

      }

    });

  }

}

function CreateCustomerViaAJAX(customer, pos_customer_id) {

  const postData = {
    pos: customer
  };

  return new Promise((resolve, reject) => {

    if( pos_customer_id ) {
      document.querySelector( '#loading-text' ).innerHTML = translation.update_existing_customer_text;
    } else {
      document.querySelector( '#loading-text' ).innerHTML = translation.create_new_customer_text;
    }

    document.querySelector( '#loader' ).style.display = 'block';

    POSPostRequest( wkwcpos_variable.WK_CREATE_CUSTOMER_ENDPOINT, postData ).then((response) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if (response) {

        if (response['error']) {

          jQuery.confirm({
            title: translation.err_text,
            content: response['msg'],
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

        } else if (response['success']) {

          resolve(response['data']);

        }

      }

    } );

  });

}


export const loadAllCustomers = () => (dispatch) => {

  database.table('pos_customers').toArray().then((customerData) => {

    var def_customer = [];

    if (customerData) {

      customerData.forEach((customer, index) => {

        if (customer.is_true == '1') {

          def_customer.push(customer);

        }

      });

    }

    let customerObj = {
      list: customerData,
      isFetching: 1,
      default: def_customer,
      s: '',
      scustomer: customerData
    }

    dispatch(setCustomer(customerObj));

  });

}


function AjAxGetAllCustomerWC(dispatch) {

  return new Promise((resolve, reject) => {

    var index = 0;

    recursive_ajax(index, dispatch).then((recur_res) => {

      resolve(recur_res);

    });

  });

}

function recursive_ajax(page, dispatch) {

  let postData = {
    page : page
  };

  return new Promise((resolve, reject) => {

    if( page == 1 ) {

      document.querySelector( '#loading-text' ).innerHTML = translation.text_loading_customers;

      document.querySelector( '#loader' ).style.display = 'block';

    }

    POSPostRequest( wkwcpos_variable.WK_GET_CUSTOMERS_ENDPOINT, postData ).then((json) => {

      document.querySelector( '#loader' ).style.display = 'none';

      if (json != undefined) {

        database.table('pos_customers').bulkPut(json).then((rsult) => {

          isCustomerDataExists().then((result) => {

            var def_cus = [];

            if (result) {

              result.forEach((cust, index) => {

                if (cust.is_true == '1') {

                  def_cus.push(cust);

                }

              });

            }

            let custObj = {
              list: result,
              isFetching: 1,
              default: def_cus,
              s: '',
              scustomer: result
            }

            dispatch(setCustomer(custObj));

          });

          if (json.length >= 500) {

            page = page + 1;

            recursive_ajax(page, dispatch);

          } else {

            resolve(true);

          }

        });

      }

    } );

  });

}

function isCustomerDataExists() {

  return database.table('pos_customers').toArray().then((custData) => {

    return custData;

  });

}
