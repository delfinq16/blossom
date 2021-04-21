import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModifyCart, RemoveCartProduct } from '../../../../../actions/cart';
import ReactHtmlParser from 'react-html-parser';
import { translation } from '../../../../../translation';
import { AUTHENTICATE_CART_RESET_REQUEST } from '../../../menu/menu.jsx';
import { applyFilters } from '@wordpress/hooks';
import { wkwcpos_price } from '../../../../../currency-format';
import { __ } from '@wordpress/i18n';
export const SHOW_CART_PRODUCT_ACTIONS_FILTER = 'wkwcpos_show_cart_product_actions';

class CartProduct extends Component {

    constructor(props) {

        super(props);

        // This binding is necessary to make `this` work in the callback
        this.HandleUpdate = this.HandleUpdate.bind(this);
        this.HandleRemove = this.HandleRemove.bind(this);
        this.HandleQuantityUpdate = this.HandleQuantityUpdate.bind(this);
        this.handleCloseQuantityPopup = this.handleCloseQuantityPopup.bind(this);
        this.HandleEditProductPrice = this.HandleEditProductPrice.bind(this);
        this.HandleProductPriceInput = this.HandleProductPriceInput.bind(this);
        this.HandleChangeProductPrice = this.HandleChangeProductPrice.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            updateQuantityPopup: false,
            editProductPrice: false,
            quantityEntry: ''
        }

    }

    handleCloseQuantityPopup() {
        this.setState({
            updateQuantityPopup: false,
        });
    }

    handleButtonClick(e, product_id, option, modifiedWeight, product_name) {

        var buttonPressed = jQuery(e.target).closest('.numeric-keypad-button').data("key");

        jQuery('.quantity-entry').css('border', 'none');

        let quantityEntry = this.state.quantityEntry.toString();

        if (buttonPressed != '' || buttonPressed != undefined) {
            if (buttonPressed === "ok" && quantityEntry > 0) {
                const { dispatch } = this.props;
                let current_cart = this.props.current_cart;
                quantityEntry = parseInt(quantityEntry);
                if (option == 'false') {
                    dispatch(ModifyCart(1, current_cart, product_id, '', '', modifiedWeight, product_name, quantityEntry));
                }
                else {
                    dispatch(ModifyCart(1, current_cart, product_id, option.var_id, '', modifiedWeight, product_name, quantityEntry));
                }
                this.setState({
                    updateQuantityPopup: false,
                });
            } else if (buttonPressed === "C") {
                quantityEntry = '';
            } else if (buttonPressed === 'b') {

                if (quantityEntry.length > 1) {
                    quantityEntry = quantityEntry.slice(0, -1);
                } else {
                    quantityEntry = '';
                }

            } else if (!isNaN(buttonPressed)) {

                if (quantityEntry === '0') {
                    quantityEntry = buttonPressed.toString();
                } else {
                    quantityEntry = quantityEntry + buttonPressed.toString();
                }
            } else {
                jQuery('.quantity-entry').css('border', 'solid 1px red');
            }
        }

        this.setState({
            quantityEntry: quantityEntry
        })

    }

    HandleUpdate(qty, product_id, option, modifiedWeight, product_name) {

        const { dispatch } = this.props;
        let current_cart = this.props.current_cart;

        if (qty && product_id) {

            if (option == 'false') {

                dispatch(ModifyCart(qty, current_cart, product_id, '', '', modifiedWeight, product_name));

            }
            else {

                dispatch(ModifyCart(qty, current_cart, product_id, option.var_id, '', modifiedWeight, product_name));

            }
        }
    }

    HandleRemove(remove_id, modifiedWeight, product_name) {

        const { dispatch } = this.props;

        let current_cart = this.props.current_cart;

        if (remove_id) {

            applyFilters(AUTHENTICATE_CART_RESET_REQUEST, true, this.props, translation) &&
                dispatch(RemoveCartProduct(current_cart, remove_id, modifiedWeight, product_name));

        }
    }

    HandleQuantityUpdate() {
        let cartP = this.props.cartProducts;
        this.setState({
            updateQuantityPopup: true,
            quantityEntry: cartP.quantity,
        });
    }

    HandleEditProductPrice() {

        this.setState({
            editProductPrice: true,
        });
    }

    HandleProductPriceInput(e, product_id, option, productPrice, modifiedWeight, product_name) {

        if (e.which == 13) {
            applyFilters(AUTHENTICATE_CART_RESET_REQUEST, true, this.props, translation) &&
                this.HandleChangeProductPrice(product_id, option, productPrice, modifiedWeight, product_name)
        } else if (e.which == 27) {
            this.setState({
                editProductPrice: false,
            });
        }

    }

    HandleChangeProductPrice(product_id, option, productPrice, modifiedWeight, product_name) {

        this.setState({
            editProductPrice: false,
        });

        const { dispatch } = this.props;
        const current_cart = this.props.current_cart;

        const editedProductPrice = parseFloat(document.querySelector('.edit-product-price-' + product_id).value);

        if (product_id && !isNaN(editedProductPrice) && editedProductPrice > 0 && editedProductPrice <= productPrice) {

            if (option == 'false') {

                dispatch(ModifyCart('', current_cart, product_id, '', editedProductPrice, modifiedWeight, product_name));

            }
            else {

                dispatch(ModifyCart('', current_cart, product_id, option.var_id, editedProductPrice, modifiedWeight, product_name));

            }

        } else {
            jQuery.alert('Enter a valid price.');
        }

    }

    render() {

        let cartP = this.props.cartProducts;
        const productPrice = cartP.special;
        const originalPrice = parseFloat(cartP.special * cartP.quantity).toFixed(2);
        if (typeof cartP.total === "string") {
            var priceTotal = parseFloat(cartP.total.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')).toFixed(2);
        }
        else {
            var priceTotal = parseFloat(cartP.total).toFixed(2);
        }
        const editProductPrice = this.state.editProductPrice;
        const updateQuantityPopup = this.state.updateQuantityPopup;
        var clear_text = translation.clear;

        let currency_code = this.props.currency_symbol;

        const itemDiscount = parseFloat((cartP.special * cartP.quantity) - cartP.uf_total).toFixed(2);

        const bookingProduct = cartP.type == 'webkul_brs';

        let priceHtml = '';

        if (!bookingProduct && itemDiscount > 0) {
            priceHtml = <span> <del> {wkwcpos_price(originalPrice, currency_code)} </del> {wkwcpos_price(priceTotal, currency_code)} </span>;
        } else {
            priceHtml = <span>{wkwcpos_price(priceTotal, currency_code)} </span>;
        }

        const updateQuantityPopupContent =
            <div>
                <div class="pos-quantity-popup-overlay" onClick={this.handleCloseQuantityPopup}></div>
                <div className="pos-quantity-update-popup">
                    <div className="pos-quantity-popup-header">
                        <input type="number" className="quantity-entry" value={this.state.quantityEntry} />
                        <button className="numeric-keypad-button key-ok" data-key="ok" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>OK</button>
                    </div>
                    <div className="numeric-keypad-button-conatainer">
                        <div className="numeric-keypad-button-row">
                            <button className="numeric-keypad-button key-one" data-key="1" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>1</button>
                            <button className="numeric-keypad-button key-two" data-key="2" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>2</button>
                            <button className="numeric-keypad-button key-three" data-key="3" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>3</button>
                        </div>
                        <div className="numeric-keypad-button-row">
                            <button className="numeric-keypad-button key-four" data-key="4" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>4</button>
                            <button className="numeric-keypad-button key-five" data-key="5" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>5</button>
                            <button className="numeric-keypad-button key-six" data-key="6" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>6</button>
                        </div>
                        <div className="numeric-keypad-button-row">
                            <button className="numeric-keypad-button key-seven" data-key="7" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>7</button>
                            <button className="numeric-keypad-button key-eight" data-key="8" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>8</button>
                            <button className="numeric-keypad-button key-nine" data-key="9" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>9</button>
                        </div>

                        <div className="numeric-keypad-button-row">
                            <button className="numeric-keypad-button key-back" data-key="b" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}><span className="fa fa-arrow-left"></span></button>
                            <button className="numeric-keypad-button key-decimal" data-key="0" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>0</button>
                            <button className="numeric-keypad-button key-delete" data-key="C" onClick={e => this.handleButtonClick(e, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name)}>{clear_text}</button>
                        </div>

                    </div>
                </div>
            </div>;

        return (<tr>
            <td className="text-center" dangerouslySetInnerHTML={{ __html: cartP.image }}></td>
            <td className="text-center">
                {ReactHtmlParser(cartP.name)}
                <p className="pos-item-discount">
                    {!bookingProduct && itemDiscount > 0 ? '-' +
                        wkwcpos_price(itemDiscount, currency_code) + ' ' + __('Discount', 'wc_pos') : ''}
                </p>
            </td>
            <td className="text-center">

                {!bookingProduct && applyFilters(SHOW_CART_PRODUCT_ACTIONS_FILTER, true, this) ? <i className="fa fa-minus-circle cursor" onClick={((e) => this.HandleUpdate(-1, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name))}></i> : ''}
                {!bookingProduct ? 'x' : ''}
                {cartP.quantity}
                {!bookingProduct ? '' : ' unit(s)'}
                {!bookingProduct && applyFilters(SHOW_CART_PRODUCT_ACTIONS_FILTER, true, this) ? <i className="fa fa-plus-circle cursor" onClick={((e) => this.HandleUpdate(1, cartP.product_id, cartP.options, cartP.boughtWeight, cartP.name))}></i> : ''}
                {!bookingProduct && !updateQuantityPopup ? <i className="fa fa-pencil cursor" onClick={((e) => this.HandleQuantityUpdate())}></i> : ''}

                {!bookingProduct && updateQuantityPopup ? updateQuantityPopupContent : ''}
            </td>

            <td className="text-center">

                {!bookingProduct && editProductPrice ? <input className={"edit-product-price-" + cartP.product_id} max={productPrice} min="0" type="number" autoFocus onKeyUp={(e) => this.HandleProductPriceInput(e, cartP.product_id, cartP.options, productPrice, cartP.boughtWeight, cartP.name)} /> : priceHtml}

                {!bookingProduct && !cartP.virtual && !editProductPrice && applyFilters(SHOW_CART_PRODUCT_ACTIONS_FILTER, true, this) ? <i className="fa fa-pencil cursor" onClick={((e) => this.HandleEditProductPrice())}></i> : ''}

                {ReactHtmlParser(cartP.tax_label)}
            </td>
            {applyFilters(SHOW_CART_PRODUCT_ACTIONS_FILTER, true, this) ?
                <td className="text-center">
                    <i className="fa fa-times-circle cursor" onClick={((e) => this.HandleRemove(cartP.remove, cartP.boughtWeight, cartP.name))}></i>
                </td>
                : ''}
        </tr>);
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ ModifyCart, RemoveCartProduct }, dispatch));
}

export default connect(mapDispatchToProps)(CartProduct);  
