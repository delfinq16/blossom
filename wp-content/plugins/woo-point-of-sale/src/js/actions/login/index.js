import {
  translation
} from "../../translation";

export const LOGGIN_USER = 'LOGGIN_USER';
export const OPENING_AMOUNT = 'OPENING_AMOUNT';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
export const SHOW_SET_DRAWER_AMOUNT_POPUP_FILTER = 'wkwcpos_show_set_drawer_amount_popup';
export const SET_DEFAULT_OPENING_AMOUNT_FILTER = 'wkwcpos_set_default_opening_amount_filter';

export const setCashier = (user) => {
  return {
    type: LOGGIN_USER,
    user
  }
};

export const checkLoginUser = () => (dispatch) => {

  let user = apif_script.logged_in;
  let logout_url = apif_script.logout_url;


  if (user != "") {

    let newUser = {
      first_name: user.fname,
      last_name: user.lname,
      email: user.email,
      isLoggedIn: true,
      cashier_id: user.user_id,
      profile_pic: user.profile_pic,
      isFetching: 1,
      logout_url: logout_url,
      opening_amount: parseFloat(0)
    }

    dispatch(setCashier(newUser));

  }

};

export const setDrawerAmount = () => (dispatch) => {

  let user = apif_script.logged_in;
  let logout_url = apif_script.logout_url;

  if (user != "") {

    if (localStorage.cashdrawer === undefined) {
      
      if (applyFilters(SHOW_SET_DRAWER_AMOUNT_POPUP_FILTER, true)) {
      jQuery.confirm({
        title: translation.drawer_text,
        content: '<div><div class="form-group"><input autofocus type="text" id="input-drawer" placeholder="' + translation.validated_text + '" class="form-control"></div></div>',
        buttons: {
          apply: {
            text: translation.okay_text,
            btnClass: 'btn-red',
            action: function () {
              var _poso_filter = /^-?(?:\d+|\d{1,3}(?:[\s\.,]\d{3})+)(?:[\.,]\d+)?$/;
              var input = this.$content.find('input#input-drawer');
              if (!input.val().trim() || input.val().length > 15 || _poso_filter.test(input.val()) == false || parseFloat(input.val()) < 0) {

                jQuery.alert({

                  content: translation.drawer_validate_text,

                  type: 'red'

                });

                return false;

              } else {

                var popening_amt = input.val();

                if (popening_amt) {

                  if (localStorage.cashdrawer == undefined || localStorage.cashdrawer == '' || localStorage.cashdrawer == '{}') {
                    // todayTransaction = [];
                    let todayTransaction = {};

                    todayTransaction['initialAmount'] = {
                      initialAmount: popening_amt
                    };

                    localStorage.cashdrawer = JSON.stringify(todayTransaction);

                    if (user != "") {

                      let newUser = {
                        first_name: user.fname,
                        last_name: user.lname,
                        email: user.email,
                        isLoggedIn: true,
                        cashier_id: user.user_id,
                        profile_pic: user.profile_pic,
                        isFetching: 1,
                        logout_url: logout_url,
                        opening_amount: popening_amt
                      }

                      dispatch(setCashier(newUser));

                    }

                  }

                }

              }
            }
          },
          later: {
            text: __( 'Later', 'wc_pos' ),
            action: function () {
            }
          }
        }
      });

      } else {

        var popening_amt = applyFilters(SET_DEFAULT_OPENING_AMOUNT_FILTER, 0);

        if (popening_amt) {

          if (localStorage.cashdrawer == undefined || localStorage.cashdrawer == '' || localStorage.cashdrawer == '{}') {
            // todayTransaction = [];
            let todayTransaction = {};

            todayTransaction['initialAmount'] = {
              initialAmount: popening_amt
            };

            localStorage.cashdrawer = JSON.stringify(todayTransaction);

            if (user != "") {

              let newUser = {
                first_name: user.fname,
                last_name: user.lname,
                email: user.email,
                isLoggedIn: true,
                cashier_id: user.user_id,
                profile_pic: user.profile_pic,
                isFetching: 1,
                logout_url: logout_url,
                opening_amount: popening_amt
                
              }

              dispatch(setCashier(newUser));

            }

          }

        }

      }
  }

  }

};