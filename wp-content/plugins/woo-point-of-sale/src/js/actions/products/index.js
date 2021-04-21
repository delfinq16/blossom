
import database from './../../database';
import { translation } from './../../translation';
import wkwcpos_variable from './../../config';
import { POSPostRequest } from './../../hash';
import { __ } from '@wordpress/i18n';
import { addToCart } from '../../actions/cart';
import { applyFilters } from '@wordpress/hooks';
export const SEARCH_POS_PRODUCT_LIST_CHANGE = 'wkwcpos_search_pos_product_list_change'

export const POS_PRODUCTS = 'POS_PRODUCTS';

export const setPosProducts = (products) => {

  return {
    type: POS_PRODUCTS,
    products
  }

};

export const getAllProducts = () => (dispatch, getState) => {

  let user = apif_script.logged_in;

  if (user != "") {

    loadPosProducts().then((res) => {

      if (res.length > 0) {

        let products = {
          list: res,
          isFetching: 0,
          s: '',
          sproducts: '',
          category: '',
          cproducts: ''
        };
        dispatch(setPosProducts(products));

      } else {

        AjAxGetProducts(dispatch).then((response) => {

          if (response) {

            loadPosProducts().then((res) => {

              if (res.length > 0) {

                let products = {
                  list: res,
                  isFetching: 0,
                  s: '',
                  sproducts: '',
                  category: '',
                  cproducts: ''
                };

                dispatch(setPosProducts(products));

              }

            });

          }

        });

      }

    });

  }

};

function AjAxGetProducts(dispatch) {

  const postData = {};

  return new Promise((resolve, reject) => {

    document.querySelector('#loading-text').innerHTML = translation.text_loading_populars;

    document.querySelector('#loader').style.display = 'block';

    POSPostRequest(wkwcpos_variable.WK_GET_ALL_PRODUCTS_IDS_ENDPOINT, postData).then((response) => {

      document.querySelector('#loader').style.display = 'none';

      document.querySelector('.ongoing-process').style.display = 'block';

      if (response) {

        var index = 0;

        recursive_ajax(index, response, dispatch).then((recur_res) => {

          resolve(recur_res);

        });

      }

    });

  });

}

function recursive_ajax(index, products_list, dispatch, batchSize = 50) {

  return new Promise((resolve, reject) => {

    if (batchSize > products_list.length) {
      batchSize = products_list.length;
    }

    var productData = products_list.length > 0 ? products_list.splice(index, batchSize) : {};

    var raw_data = JSON.stringify(productData);

    const postData = {
      raw_data: raw_data
    };

    if (index > 0) {

      document.querySelector('#loader').style.display = 'none';

    }

    POSPostRequest(wkwcpos_variable.WK_GET_POPULAR_PRODUCTS_ENDPOINT, postData).then((last_response) => {

      if (productData.length > 0 && last_response != undefined) {

        database.table('pos_products').bulkPut(last_response).then((presult) => {

          if (products_list.length > 0) {

            getDBProducts().then((dbproducts) => {

              let posproducts = {
                list: dbproducts,
                isFetching: 1,
                s: '',
                sproducts: '',
                category: '',
                cproducts: ''
              }

              dispatch(setPosProducts(posproducts));

            });

            recursive_ajax(index, products_list, dispatch, 500);

          } else {

            getDBProducts().then((dbproducts) => {

              let posproducts = {
                list: dbproducts,
                isFetching: 0,
                s: '',
                sproducts: '',
                category: '',
                cproducts: ''
              }

              dispatch(setPosProducts(posproducts));

            });

            document.querySelector('.ongoing-process').style.display = 'none';

            jQuery.confirm({
              title: __('Success', 'wc_pos'),
              content: __('All Products Imported Succesfully', 'wc_pos'),
              autoClose: 'cancelAction|60000',
              type: 'green',
              escapeKey: 'cancelAction',
              buttons: {
                cancelAction: {
                  text: __("Cancel", 'wc_pos'),
                  btnClass: 'btn-green',
                }
              }
            });

            jQuery('#loader').hide();
            resolve(true);
          }

        });

      }

    });

  });

}

export const IndexDbProducts = () => (dispatch) => {

  database.table('pos_products').toArray().then((dbproducts) => {

    if (dbproducts) {

      let posproducts = {
        list: dbproducts,
        isFetching: 1,
        s: '',
        sproducts: '',
        category: '',
        cproducts: ''
      }

      dispatch(setPosProducts(posproducts));
    }

  });

};

function getDBProducts() {

  return database.table('pos_products').toArray();

}

function loadPosProducts() {

  var bool = getDBProducts().then((products) => {

    if (products) {

      return products;

    } else {

      return false;

    }

  });

  return bool;

}

export const LoadSearchedProducts = (search, pos_products) => (dispatch, getState) => {

  if (search != '') {

    let res = pos_products.filter((product) => {
      var barcode = search[0] + search[1];
      if (barcode !== "id") {
        if (product.title.toLowerCase().indexOf(search) != -1 || product.sku.toLowerCase().indexOf(search) != -1) {
          return product;
        }
      }
      else {
        if (search.indexOf("&") != -1) {
          let id = search.split('d').pop().split('&')[0];
          let var_id = search.split('&')[1];

          var current_cart = getState().current_cart;
          if (product.product_id == id) {
            var product_options = product['variations'];

            let productVariations = product_options.variation;

            var option_html = '';
            var product_id = product.product_id;
            jQuery.each(product_options, function (i, val) {

              if (i != 'variation') {
                option_html += '<div class="variable-variation">';
                option_html += '<div class="form-group">';
                option_html += '<label class="control-label">' + val.name + '</label>';
                var select_key = product_options[i].key;
                select_key = select_key.replace('pa_', '');
                option_html += '<select name="option[' + select_key + ']">';
                option_html += '<option value="-1">' + __('Choose Option', 'wc_pos') + '</option>';

                jQuery.each(val.options, function (ii, vall) {

                  option_html += '<option value="' + ii + '">' + vall + '</option>';
                });

                option_html += '</select></div></div>';
              }

            });

            option_html += '<div class="form-group variation-data">';
            option_html += '<input type="hidden" name="temp_id" value="' + product_id + '">';
            option_html += '<input type="hidden" name="product_id" value="">';
            option_html += '</div>';

            jQuery.confirm({
              title: translation.text_option_notifier,
              content: option_html,
              animation: 'scale',
              columnClass: 'medium',
              closeAnimation: 'scale',
              backgroundDismiss: true,
              buttons: {
                confirm: {
                  btnClass: 'btn-green variable-add-to-cart',
                  text: '<i class="fa fa-shopping-cart"></i>' + translation.button_cart,
                  isDisabled: true,

                  action: function () {

                    var pro_id = jQuery(document).find(".variation-data input[name='product_id']").val();

                    if (pro_id) {

                      var pro_options = pro_id.toString().split('&');

                      var product_index = parseInt(pro_options[0]);

                      var pro_var_id = pro_options[pro_options.length - 1];

                      const variableProduct = productVariations.filter((obj) => {
                        return obj.var_id == pro_var_id;
                      });

                      const variableProductWeight = variableProduct[0].weight != undefined && variableProduct[0].weight != 0 ? variableProduct[0].weight : null;

                      var attribute_values = [];

                      attribute_values = Object.values(variableProduct[0].var_attr);

                      // jQuery('.variable-variation select :selected').each(function (i, selected) {

                      //     attribute_values.push(jQuery(selected).val());

                      // });

                      if (variableProductWeight && variableProduct[0].stock > 0) {

                        jQuery.confirm({
                          title: __('Modify Weight', 'wc_pos'),
                          content: '<div> <div class="form-group">' + __('Product Weight:', 'wc_pos') + ' ' + variableProductWeight + product.weight_unit + '<p class="pos-weight-error"></p><input autofocus type="number" step=".01" min="0" max="' + variableProductWeight + '" id="modifiedWeight" placeholder="' + __('Enter weight in', 'wc_pos') + ' ' + product.weight_unit + ' ' + __('(Max 2 decimal places)', 'wc_pos') + '" class="form-control"></div></div></div>',
                          onContentReady: function () {

                          },
                          buttons: {
                            apply: {
                              text: translation.add_text,
                              btnClass: 'btn-red',
                              action: function () {
                                if (document.querySelector('#modifiedWeight') != undefined) {
                                  let modfiedWeight = document.querySelector('#modifiedWeight');
                                  if (!isNaN(modfiedWeight.value) && modfiedWeight.value > 0 && (modfiedWeight.value.split(".")[1] == undefined || modfiedWeight.value.split(".")[1].length <= 2) && modfiedWeight.value <= variableProductWeight) {
                                    dispatch(addToCart(current_cart, pro_id, false, attribute_values, parseFloat(modfiedWeight.value).toFixed(2)));
                                  } else {
                                    document.querySelector('.pos-weight-error').innerHTML = __('Please enter a valid weight.', 'wc_pos');
                                    return false;
                                  }
                                }

                              }

                            },
                            cancel: function () {

                            }
                          }
                        });

                      } else {
                        dispatch(addToCart(current_cart, pro_id, false, attribute_values));
                      }

                    } else {

                      return false;
                    }

                  }

                },
                cancelAction: {
                  text: translation.cancel_btn_text,
                  action: function () {

                  }
                }
              },

              onContentReady: function () {

                jQuery(document).on("change", ".variable-variation select", function () {

                  var attribute_values = [];

                  var attribute_keys = [];

                  jQuery('.variable-variation select :selected').each(function (i, selected) {

                    var value = jQuery(selected).text().trim();

                    var label = jQuery(this).closest("select");

                    var str = label.attr("name");

                    var final_labels = str.substring(str.lastIndexOf("[") + 1, str.lastIndexOf("]"));

                    var final_labels = 'attribute_' + final_labels;

                    attribute_keys.push(final_labels);

                    attribute_values.push(jQuery(selected).val());

                  });

                  var hiddenVal = jQuery(".variation-data input[name='temp_id']").val();

                  if (product != undefined && attribute_keys && attribute_values) {

                    var pos_variation_id = false;

                    product.variations.variation.forEach((val) => {

                      var temp_keys = Object.keys(val.var_attr);

                      var temp_values = Object.values(val.var_attr);

                      temp_keys = temp_keys.map((k) => {

                        if (k.indexOf('_pa') != -1) {

                          k = k.replace('_pa', '');

                        }

                        return k;

                      });

                      var filter_temp_values = temp_values.filter(Boolean);

                      if (temp_keys && temp_values && (attribute_keys.sort().toString() == temp_keys.sort().toString()) && ((attribute_values.sort().toString().includes(filter_temp_values.sort().toString()) && !attribute_values.sort().toString().includes("-1")) && (attribute_values.sort().toString() == temp_values.sort().toString()))) {
                        pos_variation_id = val.var_id;
                      }

                    });

                  } else {

                    pos_variation_id = false;
                  }

                  if (pos_variation_id) {

                    jQuery(document).find(".variable-add-to-cart").removeAttr("disabled");

                    jQuery(".variation-data input[name='product_id']").val(hiddenVal + '&' + pos_variation_id);

                  } else {

                    jQuery(document).find(".variable-add-to-cart").attr("disabled", "true");

                    jQuery(".variation-data input[name='product_id']").val('');

                  }

                });

              },

            });


            return product;
          }
        }
        else {
          let id = search.split('d')[1];
          if (product.product_id == id) {
            return product;
          }
        }
      }


    });

    res = applyFilters(SEARCH_POS_PRODUCT_LIST_CHANGE, res, search, pos_products)

    let products = {
      list: pos_products,
      isFetching: 0,
      s: search,
      sproducts: res,
      category: '',
      cproducts: ''
    }

    dispatch(setPosProducts(products));

  } else {

    let products = {
      list: pos_products,
      isFetching: 0,
      s: '',
      sproducts: '',
      category: '',
      cproducts: ''
    }

    dispatch(setPosProducts(products));

  }

};

export const LoadCategoryProducts = (category, pos_products) => (dispatch) => {

  if (category != '' && category != 0) {

    let final_products = pos_products.filter((product) => {

      if (product.categories.length > 0 && product.categories.includes(parseInt(category))) {

        return product;

      }

    });

    let products = {
      list: pos_products,
      isFetching: 0,
      s: '',
      sproducts: '',
      category: category,
      cproducts: final_products
    }

    dispatch(setPosProducts(products));

  } else {

    let products = {
      list: pos_products,
      isFetching: 0,
      s: '',
      sproducts: '',
      category: '',
      cproducts: ''
    }

    dispatch(setPosProducts(products));

  }

};
