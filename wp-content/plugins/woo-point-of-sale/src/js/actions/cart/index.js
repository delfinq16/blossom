import { isObject } from 'util';
import { translation } from '../../translation';
import wkwcpos_variable from './../../config';
import database from './../../database';
import { POSPostRequest } from './../../hash';
import { applyFilters, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const ADD_META_DATA_IN_POS_CART = 'wkwcpos_add_meta_data_in_pos_cart';

export const ADD_META_DATA_IN_POS_RE_CART = 'wkwcpos_add_meta_data_in_pos_re_cart';

export const PERFORM_ACTION_IN_POS_RE_CART = 'wkwcpos_perform_action_in_pos_re_cart';

export const POS_HOLD_CARTS = 'POS_HOLD_CARTS'

export const POS_CART = 'POS_CART';

export const validateProductStock = (cart_list) => (dispatch) => {

    const postData = {
        cart_data: JSON.stringify(cart_list)
    };

    return new Promise((resolve, reject) => {

        document.querySelector('#loading-text').innerHTML = __('Checking Stock!', 'wc_pos');

        document.querySelector('#loader').style.display = 'block';

        POSPostRequest(wkwcpos_variable.WK_CHECK_STOCK_ENDPOINT, postData).then((json) => {

            document.querySelector('#loader').style.display = 'none';

            if (json.not_valid_products != undefined) {

                resolve(json);

            }

        });

    });

};

export const deleteNotValidProductsFromCart = (final_object, current_cart_id) => (dispatch, getState) => {

    Update_Cart(final_object, current_cart_id).then(function (updated) {

        if (updated) {

            loadCartProducts(current_cart_id).then((dbcart) => {

                if (dbcart) {

                    let final_total = get_cart_total(dbcart, getState());

                    var cart = {
                        list: dbcart,
                        isFetching: 1,
                        total: final_total
                    };

                } else {

                    let final_total = get_empty_cart_total();

                    var cart = {
                        list: '',
                        isFetching: 1,
                        total: final_total
                    };

                }

                dispatch(setCartProducts(cart));

            });
        }
    })

}

export const setHoldCarts = (hold_carts) => {

    return {
        type: POS_HOLD_CARTS,
        hold_carts
    }

};

export const getHoldCartCount = () => (dispatch) => {

    database.table('pos_holds').count().then((res) => {

        dispatch(setHoldCarts(res));

    });

}

export const setCartProducts = (cart) => {
    return {
        type: POS_CART,
        cart
    }

};

export const clearIndexDB = (current_state) => (dispatch) => {

    return new Promise((resolve, reject) => {

        database.pos_cart.where("cart_id").equals(current_state).delete().then((res) => {
            database.pos_coupon.where("cart_id").equals(current_state).delete().then((res) => {
                database.pos_discount.where("cart_id").equals(current_state).delete().then((res) => {
                    resolve(true);
                });
            });
        });

    });

}

export const getAllCartProducts = () => (dispatch, getState) => {

    let user = apif_script.logged_in;

    if (user != "") {

        database.table('pos_current_cart').toArray().then((response) => {

            if (response.length <= 0) {

                var cart_id = 0;

            } else {

                var cart_id = response.map((val, i) => {

                    return val.cart_id;

                });

                cart_id = cart_id[0];
            }

            loadCartProducts(cart_id).then((dbcart) => {

                if (dbcart.length) {

                    let final_total = get_cart_total(dbcart, getState());

                    var cart = {
                        list: dbcart,
                        isFetching: 1,
                        total: final_total
                    };

                } else {

                    let final_total = get_empty_cart_total();

                    var cart = {
                        list: '',
                        isFetching: 1,
                        total: final_total
                    };

                }

                dispatch(setCartProducts(cart));

            });

        });

    }

};

export const addToCart = (current_cart, product_id, by_barcode, attribute_values = [], modifiedWeight = '', quantity = 1) => (dispatch, getState) => {

    if (isObject(product_id)) {

        var virtual_product = {
            image: "<img width=150 height=150 src=" + apif_script.assets + "/images/sample-product.png class=attachment-thumbnail size-thumbnail>",
            price: product_id.product_price,
            product_id: Math.floor(Math.random() * 999) + 100,
            special: product_id.product_price,
            stock: 50,
            tax: product_id.product_tax,
            tax_label: "(excl. tax)",
            title: product_id.product_name,
            variations: 'false',
            type: 'custom'
        };

        if (apif_script.logged_in.tax_display_cart != 'excl') {
            virtual_product.tax_label = "(incl. tax)"
        }

        loadCartProducts(current_cart).then((data) => {

            if (data.length <= 0)
                var send_data = [];

            else
                var send_data = data;
            let product_data = {
                send_data: send_data,
                current_cart: current_cart,
                virtual_product: virtual_product,
                is_virtual: true,
                modifiedWeight: modifiedWeight,
                attribute_values: attribute_values,
                quantity: quantity,
                dispatch: dispatch,
                state: getState
            }

            let result = AddProductToIndexDb(product_data);

            if (result) {

                loadCartProducts(current_cart).then((cdata) => {

                    if (cdata) {

                        let final_total = get_cart_total(cdata, getState());

                        var cart = {
                            list: cdata,
                            isFetching: 1,
                            total: final_total
                        };

                    } else {

                        let final_total = get_empty_cart_total();

                        var cart = {
                            list: '',
                            isFetching: 1,
                            total: final_total
                        };

                    }

                    dispatch(setCartProducts(cart));;

                });

            }

        });

    } else {

        if (product_id) {

            if (product_id.toString().indexOf('&') == -1) {
                var compare = 'product_id'

                if (by_barcode == 'sku') {
                    compare = 'sku'
                } else {
                    product_id = parseInt(product_id)
                }

                database.table('pos_products').where(compare).equals(product_id).and(value => value.stock > 0).toArray().then((dbproducts) => {

                    if (dbproducts.length) {

                        loadCartProducts(current_cart).then((data) => {

                            if (data.length <= 0)

                                var send_data = [];

                            else

                                var send_data = data;

                            let product = dbproducts[0];

                            const productWeight = product.weight != undefined && product.weight != 0 ? product.weight : null;

                            if (!modifiedWeight && productWeight) {

                                jQuery.confirm({
                                    title: __('Modify Weight', 'wc_pos'),
                                    content: '<div> <div class="form-group">' + __('Product Weight:', 'wc_pos') + ' ' + productWeight + product.weight_unit + '<p class="pos-weight-error"></p><input autofocus type="number" step=".01" min="0" max="' + productWeight + '" id="modifiedWeight" placeholder="' + __('Enter weight in', 'wc_pos') + ' ' + product.weight_unit + ' ' + __('(Max 2 decimal places)', 'wc_pos') + '" class="form-control"></div></div></div>',
                                    onContentReady: function () {

                                    },
                                    buttons: {
                                        apply: {
                                            text: translation.add_text,
                                            btnClass: 'btn-red',
                                            action: function (e) {

                                                if (document.querySelector('#modifiedWeight') != undefined) {

                                                    let iniModifiedWeight = document.querySelector('#modifiedWeight');

                                                    if (!isNaN(iniModifiedWeight.value) && iniModifiedWeight.value > 0 && (iniModifiedWeight.value.split(".")[1] == undefined || iniModifiedWeight.value.split(".")[1].length <= 2) && iniModifiedWeight.value <= productWeight) {

                                                        let product_data = {
                                                            send_data: send_data,
                                                            current_cart: current_cart,
                                                            virtual_product: dbproducts[0],
                                                            is_virtual: false,
                                                            modifiedWeight: parseFloat(parseFloat(iniModifiedWeight.value).toFixed(2)),
                                                            attribute_values: attribute_values,
                                                            quantity: quantity,
                                                            dispatch: dispatch,
                                                            state: getState
                                                        }
                                                        let result = AddProductToIndexDb(product_data);

                                                        if (result) {

                                                            loadCartProducts(current_cart).then((cdata) => {

                                                                if (cdata) {

                                                                    let final_total = get_cart_total(cdata, getState());

                                                                    var cart = {
                                                                        list: cdata,
                                                                        isFetching: 1,
                                                                        total: final_total
                                                                    };

                                                                } else {

                                                                    let final_total = get_empty_cart_total();

                                                                    var cart = {
                                                                        list: '',
                                                                        isFetching: 1,
                                                                        total: final_total
                                                                    };

                                                                }

                                                                dispatch(setCartProducts(cart));;

                                                            });

                                                        }
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

                                let product_data = {
                                    send_data: send_data,
                                    current_cart: current_cart,
                                    virtual_product: dbproducts[0],
                                    is_virtual: false,
                                    modifiedWeight: modifiedWeight,
                                    attribute_values: attribute_values,
                                    quantity: quantity,
                                    dispatch: dispatch,
                                    state: getState
                                }
                                let result = AddProductToIndexDb(product_data);

                                if (result) {

                                    loadCartProducts(current_cart).then((cdata) => {

                                        if (cdata) {

                                            let final_total = get_cart_total(cdata, getState());

                                            var cart = {
                                                list: cdata,
                                                isFetching: 1,
                                                total: final_total
                                            };

                                        } else {

                                            let final_total = get_empty_cart_total();

                                            var cart = {
                                                list: '',
                                                isFetching: 1,
                                                total: final_total
                                            };

                                        }

                                        dispatch(setCartProducts(cart));;

                                    });

                                }
                            }

                        });

                    } else {
                        jQuery.confirm({
                            title: __("Error", 'wc_pos'),
                            content: __("No stock available", 'wc_pos'),
                            autoClose: 'cancelAction|3000',
                            type: 'red',
                            escapeKey: 'cancelAction',
                            buttons: {
                                cancelAction: {
                                    text: __("Cancel", 'wc_pos'),
                                    btnClass: 'btn-red',
                                }
                            }
                        });
                    }

                });

            } else {

                var pro_options = product_id.toString().split('&');

                var product_index = parseInt(pro_options[0]);

                var pro_var_id = pro_options[pro_options.length - 1];

                database.table('pos_products').where("product_id").equals(product_index).toArray().then((dbproducts) => {

                    if (dbproducts) {

                        var product = dbproducts[0];

                        product.variations.variation = product.variations.variation.filter((key) => {
                            if (by_barcode == 'sku') {

                                return (key.var_sku == pro_var_id && key.stock > 0)

                            }
                            else {

                                pro_var_id = parseInt(pro_var_id);
                                return (key.var_id == pro_var_id && key.stock > 0)

                            }

                        });

                        if (product.variations.variation.length > 0) {

                            loadCartProducts(current_cart).then((data) => {

                                if (data.length <= 0)

                                    var send_data = [];

                                else

                                    var send_data = data;

                                attribute_values = Object.values(product.variations.variation[0].var_attr);

                                const variableProductWeight = product.variations.variation[0].weight != undefined && product.variations.variation[0].weight != 0 ? product.variations.variation[0].weight : null;

                                if (!modifiedWeight && variableProductWeight) {

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

                                                            let product_data = {
                                                                send_data: send_data,
                                                                current_cart: current_cart,
                                                                virtual_product: product,
                                                                is_virtual: false,
                                                                modifiedWeight: parseFloat(parseFloat(modfiedWeight.value).toFixed(2)),
                                                                attribute_values: attribute_values,
                                                                quantity: quantity,
                                                                dispatch: dispatch,
                                                                state: getState
                                                            }
                                                            let result = AddProductToIndexDb(product_data);

                                                            if (result) {

                                                                loadCartProducts(current_cart).then((cdata) => {

                                                                    if (cdata) {

                                                                        let final_total = get_cart_total(cdata, getState());

                                                                        var cart = {
                                                                            list: cdata,
                                                                            isFetching: 1,
                                                                            total: final_total
                                                                        };

                                                                    } else {

                                                                        let final_total = get_empty_cart_total();

                                                                        var cart = {
                                                                            list: '',
                                                                            isFetching: 1,
                                                                            total: final_total
                                                                        };

                                                                    }

                                                                    dispatch(setCartProducts(cart));;

                                                                });

                                                            }

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

                                    let product_data = {
                                        send_data: send_data,
                                        current_cart: current_cart,
                                        virtual_product: product,
                                        is_virtual: false,
                                        modifiedWeight: modifiedWeight,
                                        attribute_values: attribute_values,
                                        quantity: quantity,
                                        dispatch: dispatch,
                                        state: getState
                                    }
                                    let result = AddProductToIndexDb(product_data);

                                    if (result) {

                                        loadCartProducts(current_cart).then((cdata) => {

                                            if (cdata) {

                                                let final_total = get_cart_total(cdata, getState());

                                                var cart = {
                                                    list: cdata,
                                                    isFetching: 1,
                                                    total: final_total
                                                };

                                            } else {

                                                let final_total = get_empty_cart_total();

                                                var cart = {
                                                    list: '',
                                                    isFetching: 1,
                                                    total: final_total
                                                };

                                            }

                                            dispatch(setCartProducts(cart));;

                                        });

                                    }
                                }

                            });

                        } else {

                            jQuery.confirm({
                                title: __("Error", 'wc_pos'),
                                content: __("No stock available", 'wc_pos'),
                                autoClose: 'cancelAction|3000',
                                type: 'red',
                                escapeKey: 'cancelAction',
                                buttons: {
                                    cancelAction: {
                                        text: __("Cancel", 'wc_pos'),
                                        btnClass: 'btn-red',
                                    }
                                }
                            });

                        }

                    }

                });

            }

        }

    }

};

export function AddProductToIndexDb(pro_data) {

    var products = pro_data.send_data;
    var current_cart = pro_data.current_cart;
    var product = pro_data.virtual_product;
    var isvirtual = pro_data.is_virtual;
    var modifiedWeight = pro_data.modifiedWeight;
    var attribute_values = pro_data.attribute_values;
    var quantity = pro_data.quantity;

    var uf_price = 0;

    var product_price = product.price;
    var slug = product.slug;
    var special_price = product.special;
    var cart_options = product.variations;
    var cart_options_string = '';
    var cart_options_string1 = '';
    var product_data = [];
    var stock = product.stock;
    var product_tax_label = product.tax_label;
    var product_tax = product.tax;
    var product_id = product.product_id;
    var skip = false;
    var cart_changed = false;
    var symbol_position = 'L';
    var product_image = product.image;
    var remove_id = product.product_id;
    var title = product.title;
    let boughtWeight = 0;
    let productWeight = product.weight;
    let discount_percentage = 0;

    if (modifiedWeight) {

        if (cart_options != 'false') {

            productWeight = product.variations.variation[0].weight;

            boughtWeight = parseFloat(parseFloat(modifiedWeight).toFixed(2));
            discount_percentage = ((productWeight - boughtWeight) * 100) / productWeight;
            product.variations.variation[0].var_price -= discount_percentage * product.variations.variation[0].var_price / 100;
            product.variations.variation[0].var_sale -= discount_percentage * product.variations.variation[0].var_sale / 100;
            product.variations.variation[0].tax -= discount_percentage * product.variations.variation[0].tax / 100;

        } else {

            boughtWeight = parseFloat(parseFloat(modifiedWeight).toFixed(2));
            discount_percentage = ((productWeight - boughtWeight) * 100) / productWeight;
            special_price -= discount_percentage * special_price / 100;
            product_tax -= discount_percentage * product_tax / 100;

        }

    }

    if (cart_options != 'false') {

        cart_options = product.variations.variation[0];

        // if( attribute_values.length > 0 ) {
        //     cart_options.val_attr = attribute_values;
        // }

        title = title + ' - '

        jQuery.each(Object.values(attribute_values), (val, i) => {

            title = title + i + ', '

        });

        title = title.slice(0, -2);

        product_image = cart_options.var_img;

        product_price = cart_options.var_price;

        special_price = cart_options.var_sale ? cart_options.var_sale : cart_options.var_price;

        stock = cart_options.stock;

        product_tax = cart_options.tax;

        remove_id = cart_options.var_id;

        slug = cart_options.var_slug;

    }

    if (modifiedWeight) {
        title += '-' + boughtWeight + product.weight_unit;
    }

    if (products.length <= 0) {

        product_data = [];

    } else {

        product_data = Array.from(products[0].cart);

    }

    if (product_data.length > 0) {

        for (var i = 0; i < Object.keys(product_data).length; i++) {

            cart_options_string = JSON.stringify(product_data[i]['options']);

            cart_options_string1 = JSON.stringify(cart_options);

            if (modifiedWeight == product_data[i]['boughtWeight'] && product_data[i]['name'] == title && product_data[i]['product_id'] == product_id && cart_options_string == cart_options_string1) {

                // variable and simple product check
                if ((stock < (product_data[i]['quantity'] + quantity)) && stock != -1) {

                    jQuery.confirm({
                        title: __("Error", 'wc_pos'),
                        content: __("No stock available", 'wc_pos'),
                        autoClose: 'cancelAction|3000',
                        type: 'red',
                        escapeKey: 'cancelAction',
                        buttons: {
                            cancelAction: {
                                text: __("Cancel", 'wc_pos'),
                                btnClass: 'btn-red',
                            }
                        }
                    });

                    skip = true;

                    return;

                };

                product_data[i]['tax'] = product_data[i]['tax'] / product_data[i]['quantity']
                product_data[i]['quantity'] += quantity;
                product_data[i]['uf_total'] = (product_data[i]['quantity'] * product_data[i]['uf']).toFixed(2);
                product_data[i]['tax'] = product_data[i]['quantity'] * product_data[i]['tax']

                product_data[i]['uf_total'] = parseFloat(product_data[i]['uf_total']).toFixed(2);

                if (symbol_position == 'L') {
                    product_data[i]['total'] = product_data[i]['uf_total'];
                } else {
                    product_data[i]['total'] = product_data[i]['uf_total'];
                }

                product_data = applyFilters(ADD_META_DATA_IN_POS_RE_CART, product_data, product);

                doAction(PERFORM_ACTION_IN_POS_RE_CART, product_data, product, pro_data);

                cart_changed = true;

                skip = true;

                var cart_data = {
                    id: current_cart,
                    cart_id: current_cart,
                    cart: product_data
                }

                break;

            }
        };

    }

    if (skip == false) {

        if (special_price != 0) {

            uf_price = special_price;

        } else {

            uf_price = product_price;

        }

        if ((stock < quantity) && stock != -1) {

            jQuery.confirm({
                title: __("Error", 'wc_pos'),
                content: __("No stock available", 'wc_pos'),
                autoClose: 'cancelAction|3000',
                type: 'red',
                escapeKey: 'cancelAction',
                buttons: {
                    cancelAction: {
                        text: __("Cancel", 'wc_pos'),
                        btnClass: 'btn-red',
                    }
                }
            });

            skip = true;

            return;

        };

        let product_quantity = quantity;



        let uf_product_total = (product_quantity * uf_price);

        uf_product_total = parseFloat(uf_product_total).toFixed(2);

        if (symbol_position == 'L') {

            var product_total = uf_product_total;

        } else {

            var product_total = uf_product_total;

        }

        const originalProductTax = product_tax * quantity;

        // if( isvirtual == true ) {
        //     product_tax = 0;
        // }

        var productData = {
            id: product.product_id,
            sku: product.sku,
            slug: slug,
            image: product_image,
            product_id: product.product_id,
            name: title,
            special: special_price,
            quantity: product_quantity,
            options: cart_options,
            price: product_price,
            remove: remove_id,
            originalTax: originalProductTax,
            tax: product_tax,
            tax_label: product_tax_label,
            total: product_total,
            uf: uf_price,
            weight: product.weight ? product.weight : 0,
            length: product.length ? product.length : 0,
            width: product.width ? product.width : 0,
            height: product.height ? product.height : 0,
            boughtWeight: boughtWeight,
            uf_total: uf_product_total,
            virtual: isvirtual,
            type: product.type,
            weight_unit: product.weight_unit ? product.weight_unit : 0,
            dimension_unit: product.dimension_unit ? product.dimension_unit : 0
        }

        productData = applyFilters(ADD_META_DATA_IN_POS_CART, productData, product);

        var array_pusher = product_data.concat(productData);
        // or make a new one
        var cart_data = {
            id: current_cart,
            cart_id: current_cart,
            cart: array_pusher
        }
    }

    database.pos_cart.put(cart_data).catch('DataError', e => {
        // Failed with DataError
        console.error("Data error: " + e.message);
    }).catch(Error, e => {
        // Any other error derived from standard Error
        console.error("Error: " + e.message);
    }).catch(e => {
        // Other error such as a string was thrown
        console.error(e);
    });

    return true;

}

export function loadCartProducts(current_cart) {

    return database.table('pos_cart').where("cart_id").equals(current_cart).toArray();

}

export const RemoveCart = (cart_id, new_cart_id) => (dispatch, getState) => {

    if (new_cart_id != '') {

        database.table('pos_cart').where("cart_id").equals(parseInt(cart_id)).delete().then((response) => {

            if (new_cart_id) {

                database.table('pos_cart').toArray().then((dbcart) => {

                    if (dbcart) {

                        let final_total = get_cart_total(dbcart, getState());

                        var cart = {
                            list: dbcart,
                            isFetching: 1,
                            total: final_total
                        };

                    } else {

                        let final_total = get_empty_cart_total();

                        var cart = {
                            list: '',
                            isFetching: 1,
                            total: final_total
                        };

                    }

                    dispatch(setCartProducts(cart));

                });
            }
        });

    } else {

        database.table('pos_cart').where("cart_id").equals(parseInt(cart_id)).delete().then((response) => {

        });
    }

}

export const GetAllCartDB = () => {

    return database.pos_cart.toArray().then((res) => {

        return res;
    });

}

export const RemoveCartProduct = (current_cart, remove_id, modifiedWeight = '', product_name = '') => (dispatch, getState) => {

    if (remove_id) {

        let res = database.table('pos_cart').where("cart_id").equals(current_cart).toArray().then((response) => {

            if (response) {

                if (response[0].cart != undefined) {

                    let remover = response[0].cart;

                    let final_object = remover.filter((item) => {

                        if (item.remove == remove_id && modifiedWeight == item.boughtWeight && product_name == item.name) {
                            return false;
                        } else {
                            return true;
                        }

                    });

                    if (final_object) {

                        Update_Cart(final_object, current_cart).then(function (updated) {

                            if (updated) {

                                loadCartProducts(current_cart).then((dbcart) => {

                                    if (dbcart[0].cart.length) {

                                        let final_total = get_cart_total(dbcart, getState());

                                        var cart = {
                                            list: dbcart,
                                            isFetching: 1,
                                            total: final_total
                                        };

                                    } else {

                                        let state = getState();

                                        if (state.discount.list.length != undefined && state.discount.list.length > 0) {

                                            state.discount.list.forEach((obj) => {
                                                if (current_cart == obj.cart_id) {
                                                    obj.discount = {}
                                                }
                                            });

                                        }

                                        let final_total = get_empty_cart_total();

                                        var cart = {
                                            list: '',
                                            isFetching: 1,
                                            total: final_total
                                        };

                                    }

                                    dispatch(setCartProducts(cart));

                                });
                            }
                        })

                    }

                }

            }

        });

    }

};

function Update_Cart(final_object, current_cart) {

    return database.table('pos_cart').where("cart_id").equals(current_cart).modify({
        cart: final_object
    });
}

export const ModifyHoldCart = (current_cart) => (dispatch, getState) => {

    let cart_obj = {
        id: current_cart,
        cart_id: current_cart,
        cart: ''
    }

    database.table('pos_cart').add(cart_obj).then((res) => {

        if (res) {

            let final_total = get_empty_cart_total();

            let cart = {
                list: '',
                isFetching: 1,
                total: final_total
            }

            dispatch(setCartProducts(cart));
        }

    });
}

export const ModifyCart = (qty, current_cart, product_id, var_id = '', modifiedPrice = '', modifiedWeight = '', product_name = '', modifiedQuantity = '') => (dispatch, getState) => {

    if (product_id) {

        database.table('pos_products').where("product_id").equals(product_id).toArray().then((dbproducts) => {

            if (dbproducts && typeof dbproducts[0] !== "undefined") {

                loadCartProducts(current_cart).then((data) => {

                    if (data.length <= 0)
                        var send_data = [];
                    else
                        var send_data = data;

                    let result = ModifyProductToIndexDb(send_data, current_cart, dbproducts[0], qty, var_id, modifiedPrice, modifiedWeight, product_name, modifiedQuantity);

                    if (result) {

                        loadCartProducts(current_cart).then((cdata) => {

                            if (cdata) {

                                let final_total = get_cart_total(cdata, getState());

                                var cart = {
                                    list: cdata,
                                    isFetching: 1,
                                    total: final_total
                                };

                            } else {

                                let final_total = get_empty_cart_total();

                                var cart = {
                                    list: cdata,
                                    isFetching: 1,
                                    total: final_total
                                };

                            }

                            dispatch(setCartProducts(cart));

                        });

                    }

                });


            } else {

                loadCartProducts(current_cart).then((data) => {

                    if (data.length <= 0)
                        var send_data = [];
                    else
                        var send_data = data;

                    let result = ModifyProductToIndexDb(send_data, current_cart, product_id, qty, var_id, modifiedPrice, modifiedWeight, product_name, modifiedQuantity);

                    if (result) {

                        loadCartProducts(current_cart).then((cdata) => {

                            if (cdata) {

                                let final_total = get_cart_total(cdata, getState());

                                var cart = {
                                    list: cdata,
                                    isFetching: 1,
                                    total: final_total
                                };

                            } else {

                                let final_total = get_empty_cart_total();

                                var cart = {
                                    list: cdata,
                                    isFetching: 1,
                                    total: final_total
                                };

                            }

                            dispatch(setCartProducts(cart));

                        });

                    }

                });

            }

        });

    }

};

function ModifyProductToIndexDb(products, current_cart, product, qty = '', var_id = '', modifiedPrice = '', modifiedWeight = '', product_name = '', modifiedQuantity = '') {

    var current_cart_length = Object.keys(products[0].cart).length;
    var product_data = products[0].cart;
    var product_index = product;
    var discount_percentage = 0;
    let productWeight = 0;
    let weight_discount_percentage = 0;
    var single_tax = 0;

    if (qty != '') {
        var type = (qty != '' && qty > 0) ? true : false;
    }

    if (isObject(product)) {

        product_index = product.product_id;

    }

    var symbol_position = 'L';

    if (products.length <= 0) {

        product_data = [];

    } else {

        product_data = Array.from(products[0].cart);

    }

    if (current_cart_length) {

        for (var l = 0; l < current_cart_length; l++) {

            if (product_data[l]['virtual'] == true && product_index == product_data[l]['product_id']) {

                if (type != undefined) {

                    if (type) {

                        if (modifiedQuantity) {
                            product_data[l]['quantity'] = modifiedQuantity;

                        } else {
                            product_data[l]['quantity'] += 1;
                        }

                        // product_data[l]['tax'] += 0;

                    } else {

                        if (product_data[l]['quantity'] == 1) {

                            let final_object = product_data.filter((item) => {

                                return item.product_id != product_index;
                            });

                            Update_Cart(final_object, current_cart);

                            break;
                        };

                        product_data[l]['quantity'] -= 1;
                        // product_data[l]['tax'] -= 0;

                    }

                }

                if (modifiedPrice) {
                    product_data[l]['uf'] = modifiedPrice;
                }

                product_data[l]['uf_total'] = parseFloat(product_data[l]['quantity'] * product_data[l]['uf']).toFixed(2);

                // product_data[l]['tax'] = parseFloat((0) * (product_data[l]['uf_total'] / 100)).toFixed(2);

                discount_percentage = ((product_data[l]['special'] - product_data[l]['uf']) * 100) / product_data[l]['special'];

                single_tax = parseFloat(product_data[l]['originalTax']);

                single_tax -= discount_percentage * single_tax / 100;

                product_data[l]['price'] = product_data[l]['uf'] - single_tax;

                product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;
                // product_data[l]['tax'] = parseFloat(0).toFixed(2);

                if (symbol_position == 'L') {

                    product_data[l]['total'] = product_data[l]['uf_total'];

                } else {

                    product_data[l]['total'] = product_data[l]['uf_total'];

                }

                break;

            } else {

                if (modifiedWeight == product_data[l]['boughtWeight'] && product_index == product_data[l]['product_id'] && product_name == product_data[l]['name']) {

                    single_tax = parseFloat(product.originalTax);

                    if (modifiedWeight) {
                        productWeight = product.weight;
                        weight_discount_percentage = ((productWeight - modifiedWeight) * 100) / productWeight;
                        product.special -= weight_discount_percentage * product.special / 100;
                        single_tax -= weight_discount_percentage * single_tax / 100;
                    }

                    if (modifiedPrice) {
                        product_data[l]['uf'] = modifiedPrice;
                    }

                    discount_percentage = ((product_data[l]['special'] - product_data[l]['uf']) * 100) / product_data[l]['special'];

                    single_tax -= discount_percentage * single_tax / 100;

                    if (var_id) {

                        single_tax = product_data[l]['options']['originalTax'];

                        if (modifiedPrice) {
                            product_data[l]['uf'] = modifiedPrice;
                        }

                        discount_percentage = ((product_data[l]['special'] - product_data[l]['uf']) * 100) / product_data[l]['special'];

                        single_tax -= discount_percentage * single_tax / 100;

                        if (product_data[l]['options'].var_id == var_id) {

                            if (type != undefined) {

                                if (type) {

                                    var option_stock = 0;

                                    jQuery.each(product.variations.variation, function (i, val) {

                                        if (val.var_id == var_id) {

                                            option_stock = val.stock;

                                        }

                                    });

                                    if (modifiedQuantity) {

                                        if (option_stock < modifiedQuantity) {

                                            jQuery.confirm({
                                                title: translation.err_text,
                                                content: __("No stock available for", 'wc_pos') + ' ' + product.title,
                                                autoClose: 'cancelAction|3000',
                                                type: 'red',
                                                escapeKey: 'cancelAction',
                                                buttons: {
                                                    cancelAction: {
                                                        text: __("Cancel", 'wc_pos'),
                                                        btnClass: 'btn-red',
                                                    }
                                                }
                                            });

                                            skip = true;

                                            break;
                                        }

                                        product_data[l]['quantity'] = modifiedQuantity;

                                    } else {

                                        if (option_stock < (product_data[l]['quantity'] + 1)) {

                                            jQuery.confirm({
                                                title: translation.err_text,
                                                content: __("No stock available for", 'wc_pos') + ' ' + product.title,
                                                autoClose: 'cancelAction|3000',
                                                type: 'red',
                                                escapeKey: 'cancelAction',
                                                buttons: {
                                                    cancelAction: {
                                                        text: __("Cancel", 'wc_pos'),
                                                        btnClass: 'btn-red',
                                                    }
                                                }
                                            });

                                            skip = true;

                                            break;
                                        };

                                        product_data[l]['quantity'] += 1;
                                    }


                                    product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;

                                } else {

                                    if (product_data[l]['quantity'] == 1) {

                                        let final_object = product_data.filter((item) => {

                                            return item.product_id != product_index;
                                        });

                                        Update_Cart(final_object, current_cart);

                                        break;

                                    };

                                    product_data[l]['quantity'] -= 1;

                                    // product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;

                                }

                            }

                        }

                        if (modifiedWeight) {
                            productWeight = product_data[l]['options']['weight'];
                            weight_discount_percentage = ((productWeight - modifiedWeight) * 100) / productWeight;
                            // product_data[l]['options']['special'] -= weight_discount_percentage * product_data[l]['options']['special'] / 100;
                            single_tax -= weight_discount_percentage * single_tax / 100;
                        }

                        product_data[l]['options']['tax'] = product_data[l]['quantity'] * single_tax;

                    } else {

                        if (type != undefined) {

                            if (type) {

                                if (modifiedQuantity) {

                                    if (product.stock < modifiedQuantity && product.stock != -1) {

                                        jQuery.confirm({
                                            title: __("Error", 'wc_pos'),
                                            content: __("No more stock available for", 'wc_pos') + ' ' + product.title,
                                            autoClose: 'cancelAction|3000',
                                            type: 'red',
                                            escapeKey: 'cancelAction',
                                            buttons: {
                                                cancelAction: {
                                                    text: __("Cancel", 'wc_pos'),
                                                    btnClass: 'btn-red',
                                                }
                                            }
                                        });

                                        skip = true;

                                        break;

                                    }

                                    product_data[l]['quantity'] = modifiedQuantity;

                                } else {

                                    if (product.stock < (product_data[l]['quantity'] + 1) && product.stock != -1) {

                                        jQuery.confirm({
                                            title: __("Error", 'wc_pos'),
                                            content: __("No more stock available for", 'wc_pos') + ' ' + product.title,
                                            autoClose: 'cancelAction|3000',
                                            type: 'red',
                                            escapeKey: 'cancelAction',
                                            buttons: {
                                                cancelAction: {
                                                    text: __("Cancel", 'wc_pos'),
                                                    btnClass: 'btn-red',
                                                }
                                            }
                                        });

                                        skip = true;

                                        break;

                                    };

                                    product_data[l]['quantity'] += 1;
                                    // product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;
                                }

                            } else {

                                if (product_data[l]['quantity'] == 1) {

                                    let final_object = product_data.filter((item) => {

                                        return item.product_id != product_index;
                                    });

                                    Update_Cart(final_object, current_cart);

                                    break;

                                };

                                product_data[l]['quantity'] -= 1;

                                // product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;

                            }
                        }

                        product_data[l]['tax'] = product_data[l]['quantity'] * single_tax;

                    }

                    product_data[l]['uf_total'] = parseFloat(product_data[l]['quantity'] * product_data[l]['uf']).toFixed(2);

                    if (symbol_position == 'L') {

                        product_data[l]['total'] = product_data[l]['uf_total'];

                    } else {

                        product_data[l]['total'] = product_data[l]['uf_total'];

                    }

                }

            }

        }

    }

    product_data = applyFilters(ADD_META_DATA_IN_POS_RE_CART, product_data, product);

    var cart_data = {
        id: current_cart,
        cart_id: current_cart,
        cart: product_data
    }

    database.pos_cart.put(cart_data).catch('DataError', e => {
        // Failed with DataError
        console.error("Data error: " + e.message);
    }).catch(Error, e => {
        // Any other error derived from standard Error
        console.error("Error: " + e.message);
    }).catch(e => {
        // Other error such as a string was thrown
        console.error(e);
    });

    return true;
}

export function get_empty_cart_total() {

    var cart_total = parseFloat(0).toFixed(2);
    var cart_subtotal = parseFloat(0).toFixed(2);
    var total_discount = parseFloat(0).toFixed(2);
    var tax_total = parseFloat(0).toFixed(2);

    var total = {
        'cart_subtotal': cart_subtotal,
        'tax_total': tax_total,
        'total_discount': total_discount,
        'cart_total': cart_total,
    }

    return total;
}

export function get_cart_total(dbcart = '', state) {

    var state_cart = '';
    var cart_products = '';

    if (dbcart) {

        cart_products = dbcart;

    } else {

        state_cart = state.cart;
        cart_products = state_cart.list;

    }

    var state_currency = state.currency;

    var state_discount = state.discount.list;
    var state_tax = state.tax.list;

    var state_coupon = state.coupon.list;
    var state_products = state.products.list;

    var current_cart = state.current_cart;

    var cart_total = 0;
    var tax_total = 0;
    var total_discount = 0;

    var tax = {};

    var pos_cart = '';
    var uf_cart_total = 0;
    var uf_cart_uf_total = 0;
    var cart_subtotal = 0;
    var tax_amt = 0;
    var discount_tax = 0;
    var coupon_tax = 0;

    var coupon_amount = 0;

    var symbol_position = 'L';

    var currency_code = state_currency.default[0].symbol;

    var final_amount = 0;

    if (cart_products.length) {

        cart_products = cart_products.filter((obj) => {
            return obj.cart_id == current_cart;
        });

        pos_cart = cart_products[0].cart;
        // pos_cart = pos_cart[0].cart;

        if (pos_cart != undefined && pos_cart.length > 0) {

            var uf_total = pos_cart.map((val, i) => {

                if (val.uf_total) {

                    return val.uf_total;

                }

            });

            var cart_uf_total = pos_cart.map((val, i) => {

                if (val.uf_total) {

                    return parseFloat(val.uf_total) + val.tax;

                }

            });

            tax_amt = pos_cart.map((val, i) => {

                if (val.options == 'false') {

                    let Ttax = parseFloat(tax_amt) + parseFloat(val.tax).toFixed(2);

                    return Ttax; //tax calculation
                } else {

                    let Ttax = parseFloat(tax_amt) + parseFloat(val.options.tax).toFixed(2);

                    return Ttax; //tax calculation

                }

            });

            tax_amt = tax_amt.reduce(function (k, l) {
                return parseFloat(k) + parseFloat(l);
            }, 0);

            if (uf_total) {

                uf_cart_total = uf_total.reduce(function (a, b) {
                    return parseFloat(a) + parseFloat(b);
                }, 0);

                uf_cart_uf_total = cart_uf_total.reduce(function (a, b) {
                    return parseFloat(a) + parseFloat(b);
                }, 0);

                cart_subtotal = uf_cart_total.toFixed(2);

                if (state_coupon.length > 0) {

                    coupon_amount = get_coupon_amt(state_coupon, pos_cart, current_cart, uf_cart_total, state_products);

                }

                if (state_discount.length > 0) {

                    let testBool = cart_final_total(uf_cart_uf_total, current_cart, state_discount);

                    uf_cart_total = testBool.total;

                    total_discount = testBool.discount;

                }

                if (coupon_amount > 0) {

                    if (uf_cart_total > 0) {

                        final_amount = uf_cart_total - coupon_amount;

                    } else {

                        final_amount = 0;
                    }

                    final_amount = final_amount.toFixed(2);

                } else {

                    final_amount = uf_cart_total;

                }

                state_tax = Object.values(state_tax)

                if (state_tax.length > 0) {

                    tax = calculate_tax(state_tax, state_discount, state_coupon, cart_subtotal, pos_cart, state_products);

                    coupon_tax = tax.coupon_tax;

                    discount_tax = tax.discount_tax;

                }

                if (final_amount > 0) {

                    if (state_discount.length > 0) {

                        cart_total = parseFloat(final_amount) - parseFloat(discount_tax) - parseFloat(coupon_tax);

                    } else {

                        cart_total = parseFloat(tax_amt) + parseFloat(final_amount) - parseFloat(discount_tax) - parseFloat(coupon_tax);

                    }

                    tax_amt = parseFloat(tax_amt) - parseFloat(discount_tax) - parseFloat(coupon_tax);

                    if (tax_amt < 0) {

                        tax_amt = parseFloat(0).toFixed(2);

                        cart_total = parseFloat(tax_amt) + parseFloat(final_amount)

                    }

                } else {

                    cart_total = parseFloat(final_amount);

                    // tax_amt = parseFloat(0);

                }

                tax_total = parseFloat(tax_amt).toFixed(2);

                if (final_amount < 0) {

                    // jQuery.confirm({
                    //     title: "Error",
                    //     content: "Invalid discount",
                    //     autoClose: 'cancelAction|3000',
                    //     type: 'red',
                    //     escapeKey: 'cancelAction',
                    //     buttons: {
                    //         cancelAction: {
                    //             text: 'Cancel',
                    //             btnClass: 'btn-red',
                    //         }
                    //     }
                    // });


                    cart_total = parseInt(0).toFixed(2);
                    total_discount = parseInt(0).toFixed(2);
                    tax_total = parseFloat(tax_amt).toFixed(2);

                }

                var total = {
                    'cart_subtotal': cart_subtotal,
                    'tax_total': tax_total,
                    'total_discount': total_discount,
                    'cart_total': cart_total,
                }

            }

        } else {

            var total = get_empty_cart_total();
        }

    } else {

        var total = get_empty_cart_total();


    }

    return total;
}

function calculate_tax(taxes, state_discount, state_coupon, uf_cart_total, pos_cart, pos_products) {

    var return_tax = {};
    var coupon_tax = 0;
    var discount_tax = 0;

    var category_array = [];

    if (taxes !== undefined && taxes !== 'undefined' && Object.keys(taxes).length != 0) {

        taxes.forEach(function (tax) {

            if (state_discount.length > 0) {

                var discount = state_discount[0].discount;

                if (discount.type == 'percentage') {

                    let amt = uf_cart_total * (discount.amount / 100);

                    // discount_tax = discount_tax + (tax.rate) * (amt / 100);

                }

            }
            if (state_coupon.length > 0) {
                var pos_coupon = state_coupon[0].coupon;

                jQuery.each(pos_coupon, function (key, value) {

                    for (var i = 0; i < pos_cart.length; i++) {

                        var one_time = true;

                        jQuery.each(pos_products, function (key, value) {
                            if (value.product_id == pos_cart[i]['product_id']) {
                                category_array = value.categories;
                            }
                        });

                        value.product_categories.forEach(function (element) {

                            category_array.forEach(function (cat_id) {

                                if (element == cat_id && one_time) {

                                    if (value.price != undefined) {

                                        if (value.type == 'percent') {

                                            one_time = false;

                                            let amt = uf_cart_total * (value.price / 100);

                                            coupon_tax = coupon_tax + (tax.rate) * (amt / 100);

                                        } else if (value.type == 'fixed_cart') {

                                            coupon_tax = value.coup_tax;

                                            one_time = false;

                                        }

                                    }

                                }

                            });

                        });

                    }

                });
            }

        });
        var return_tax = {

            'coupon_tax': coupon_tax,
            'discount_tax': discount_tax,
        }

    }

    return return_tax;

}

function cart_final_total(cart_total, current_cart, disc) {

    var gcart_total = cart_total;

    var uf_total_discount = 0;

    if (disc[0].cart_id == current_cart) {

        var discount = disc[0].discount;

        if (!jQuery.isEmptyObject(discount)) {

            if (discount.type == 'percentage') {

                let amt = discount.amount;

                var uf_total_discount = ((amt / 100) * cart_total);

                if ((cart_total - uf_total_discount) > 0) {

                    gcart_total = cart_total - uf_total_discount;

                } else {

                    gcart_total = parseFloat(0);
                }

                gcart_total = gcart_total.toFixed(2);

            } else {

                var uf_total_discount = discount.amount;

                if ((cart_total - uf_total_discount) > 0) {

                    gcart_total = cart_total - uf_total_discount;

                } else {

                    gcart_total = parseFloat(0);
                }

                gcart_total = gcart_total.toFixed(2);

            }
        }
    } else {
        var uf_total_discount = 0;

        if ((cart_total - uf_total_discount) > 0) {

            gcart_total = cart_total - uf_total_discount;

        } else {

            gcart_total = parseFloat(0);
        }

        gcart_total = gcart_total.toFixed(2);
    }

    let temObj = {
        total: gcart_total,
        discount: uf_total_discount
    }

    return temObj;

}

function get_coupon_amt(coupons, pos_cart, current_cart, uf_cart_total, pos_products) {

    var coupon_amount = 0;

    var category_array = [];

    var fake_cart = coupons[0].cart_id;

    if (fake_cart == current_cart) {

        var pos_coupon = coupons[0].coupon;

        jQuery.each(pos_coupon, function (key, value) {

            if ((value.product_ids.length > 0 || value.product_categories.length > 0)) {

                var c_amount = 0;

                for (var i = 0; i < pos_cart.length; i++) {

                    var one_time = true;

                    if (pos_cart[i]['virtual'] == false && value.product_ids.length > 0) {

                        value.product_ids.forEach(function (element) {

                            if (element == pos_cart[i]['product_id']) {

                                if (value.price != undefined) {

                                    if (value.type == 'percent') {

                                        c_amount += parseFloat((value.price * uf_cart_total) / 100);

                                        one_time = false;

                                    } else {

                                        c_amount = parseFloat(value.price);

                                        one_time = false;

                                    }

                                }

                            }



                        });

                    }

                    if (pos_cart[i]['virtual'] == false && value.product_categories.length > 0) {

                        jQuery.each(pos_products, function (key, value) {
                            if (value.product_id == pos_cart[i]['product_id']) {
                                category_array = value.categories;
                            }
                        });

                        value.product_categories.forEach(function (element) {

                            category_array.forEach(function (cat_id) {

                                if (element == cat_id && one_time) {

                                    if (value.price != undefined) {

                                        if (value.type == 'percent') {

                                            one_time = false;

                                            c_amount += parseFloat((value.price * (pos_cart[i]['uf_total'])) / 100);

                                        } else {

                                            one_time = false;

                                            c_amount = parseFloat(value.price);

                                        }

                                    }

                                }

                            });

                        });

                    }

                }

                if (c_amount == 0) {

                    if (key) {

                        let result = ModifyCoupon(current_cart);

                        if (result) {

                            jQuery.confirm({
                                title: __("Error", 'wc_pos'),
                                content: "This coupon is not applicable for product in cart",
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

                    }

                }

                coupon_amount = coupon_amount + c_amount;

            } else {

                if (value.price != undefined) {

                    if (value.type == 'percent') {

                        coupon_amount += parseFloat((value.price * uf_cart_total) / 100);

                    } else {

                        coupon_amount += parseFloat(value.price);

                    }

                }

            }

        });

    }

    return coupon_amount;
}

function ModifyCoupon(coupons, current_cart) {

    return database.table('pos_coupon').where("cart_id").equals(current_cart).delete().then((resposne) => {
        return response;
    });

}