import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../../../../../actions/cart';
import { translation } from '../../../../../translation';
import ReactHtmlParser from 'react-html-parser';
import { __ } from '@wordpress/i18n';
import { wkwcpos_price } from '../../../../../currency-format';
import { applyFilters } from '@wordpress/hooks';
export const PRODUCT_ADD_CUSTOM_INFO = 'wkwcpos_add_custom_product_info';

class Product extends Component {

    constructor(props) {
        super(props);

        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseUp(e, product_id, type) {

        const { dispatch } = this.props;
        const current_cart = this.props.cart;

        let product = this.props.product;

        let productWeight = null;

        if (product_id && type == 'simple') {

            productWeight = product.weight != undefined && product.weight != 0 ? product.weight : null;

            if (productWeight && product.stock > 0) {

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

                                    let modfiedWeight = document.querySelector('#modifiedWeight');

                                    if (!isNaN(modfiedWeight.value) && modfiedWeight.value > 0 && (modfiedWeight.value.split(".")[1] == undefined || modfiedWeight.value.split(".")[1].length <= 2) && modfiedWeight.value <= productWeight) {
                                        dispatch(addToCart(current_cart, product_id, false, [], parseFloat(modfiedWeight.value).toFixed(2)));
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
                dispatch(addToCart(current_cart, product_id, false));
            }

        } else if (type == 'variable') {

            var product_options = product['variations'];

            let productVariations = product_options.variation;

            var option_html = '';

            jQuery.each(product_options, function (i, val) {

                if (i != 'variation') {
                    option_html += '<div class="variable-variation">';
                    option_html += '<div class="form-group">';
                    option_html += '<label class="control-label">' + val.name + '</label>';
                    var select_key = product_options[i].key;
                    //var select_key = val.name;
                    select_key = select_key.replace('pa_', '');
                    option_html += '<select name="option[' + select_key + ']">';
                    option_html += '<option value="-1">' + __('Choose Option', 'wc_pos') + '</option>';

                    jQuery.each(val.options, function (ii, vall) {

                        option_html += '<option value="' + ii + '">' + ReactHtmlParser(vall) + '</option>';

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

                                //var filter_temp_values = temp_values.filter(Boolean);

                                if (temp_keys && temp_values && (attribute_keys.sort().toString() == temp_keys.sort().toString()) && (attribute_values.sort().toString() == temp_values.sort().toString())) {
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

        }

    }

    normalPrice(price) {

        if (price == '' || isNaN(price)) {
            return '';
        }

        let currency_symbol = this.props.currency_symbol;

        return (
            <b>{wkwcpos_price(parseFloat(price), currency_symbol)}</b>
        )

    }

    salePrice(price, special) {

        let currency_symbol = this.props.currency_symbol;

        return (
            <div className="sale-wrap">
                <del className="line-through">{wkwcpos_price(parseFloat(price), currency_symbol)}</del> - <b>{wkwcpos_price(parseFloat(special), currency_symbol)}</b>
            </div>
        )

    }

    saleVariablePrice(price, special) {

        let currency_symbol = this.props.currency_symbol;

        return (
            <div className="sale-wrap">
                <b>{wkwcpos_price(parseFloat(special), currency_symbol)} - {wkwcpos_price(parseFloat(price), currency_symbol)}</b>

            </div>
        );

    }

    renderProductData(e) {

        let product = this.props.product;

        let custom_info = applyFilters(PRODUCT_ADD_CUSTOM_INFO, '', product);

        if (product.variations != 'false') {

            return (

                <div className="wrap">

                    <span className="label label-info option-notifier" data-toggle="tooltip" title={product.price}><i className="fa fa-plus-square"></i></span>

                    <div className="product-image" dangerouslySetInnerHTML={{ __html: product.image }}></div>

                    <div className="product-detail">

                        <h3>{ReactHtmlParser(product.title)}</h3>

                        {product.type == 'variable' ? (product.special == 0 || product.special == product.price ? this.normalPrice(product.price) : this.saleVariablePrice(product.price, product.special)) : product.price_html}

                        {ReactHtmlParser(custom_info)}

                    </div>

                    {parseInt(product.quantity) <= product.price ? '<span className="label label-danger low-stock" data-toggle="tooltip"><i className="fa fa-exclamation-triangle"></i></span>' : ''}

                </div>
            );

        } else {


            return (

                <div className="wrap">

                    <div className="product-image" dangerouslySetInnerHTML={{ __html: product.image }}></div>

                    <div className="product-detail">

                        <h3>{ReactHtmlParser(product.title)}</h3>

                        {this.normalPrice(product.special)}

                        {ReactHtmlParser(custom_info)}

                    </div>

                    {parseInt(product.quantity) <= product.price ? '<span className="label label-danger low-stock" data-toggle="tooltip"><i className="fa fa-exclamation-triangle"></i></span>' : ''}

                </div>
            );
        }

    }

    render() {

        let product = this.props.product;

        return (

            <div className="product-select" key={product.product_id} onMouseUp={((e) => this.handleMouseUp(e, product.product_id, product.type))} data-product-id={product.product_id} >
                {this.renderProductData()}
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ addToCart }, dispatch));
}

export default connect(null, mapDispatchToProps)(Product);
