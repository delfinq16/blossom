import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToHold } from '../../../../../actions/hold';
import { updateCurrentCart } from '../../../../../actions/currentcart';
import { ModifyHoldCart, getAllCartProducts, validateProductStock, deleteNotValidProductsFromCart } from '../../../../../actions/cart';
import { ModifyDiscount } from '../../../../../actions/discount';
import { ApplyCoupon, RemoveCoupon, getAllCouponWC } from '../../../../../actions/coupon';
import { getAllOrdersWC } from '../../../../../actions/orders';
import { translation } from '../../../../../translation';
import database from '../../../../../database';
import wkwcpos_variable from './../../../../../config';
import { POSPostRequest } from './../../../../../hash';
import Loader from '../../../../loader/loader.jsx';
import { applyFilters } from '@wordpress/hooks';
import { AUTHENTICATE_CART_RESET_REQUEST } from '../../../menu/menu.jsx';
import { __ } from '@wordpress/i18n';
import { wkwcpos_price } from '../../../../../currency-format';
export const MODIFY_CART_EXTRA_ACTION = 'wkwcpos_modify_cart_extra_action';
export const ADD_ROW_AFTER_DISCOUNT_IN_CART_FILTER = 'wkwcpos_add_row_after_discount_in_cart';
export const CHANGE_IN_CART_TOTAL_FILTER = 'wkwcpos_change_in_cart_total_filter';
export const SHOW_APPLY_COUPON_FILTER = 'wkwcpos_show_apply_coupon_at_cart';
export const SHOW_CUSTOM_DISCOUNT_FILTER = 'wkwcpos_show_custom_discount_on_cart';
export const SHOW_CART_CHECKOUT_ACTIONS_FILTER = 'wkwcpos_show_cart_checkout_actions_cart';
export const REMOVE_COUPON_ELIGIBLE_FILTER = 'wkwcpos_remove_coupon_eligible';


class CartTotal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            discount: {
                amount: '',
                type: 'percentage',
            }
        }

        this.handlePayLiClick = this.handlePayLiClick.bind(this);
        this.handleHoldClick = this.handleHoldClick.bind(this);
        this.handleDiscountClick = this.handleDiscountClick.bind(this);
        this.handleDiscountType = this.handleDiscountType.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handlUpdateClick = this.handlUpdateClick.bind(this);
        this.handleDiscountClose = this.handleDiscountClose.bind(this);
        this.handleCouponLiClick = this.handleCouponLiClick.bind(this);
        this.handleRemoveCoupon = this.handleRemoveCoupon.bind(this);

    }

    handleRemoveCoupon(e) {

        var couponCode = jQuery(e.target).closest("span").data("remove");
        const { dispatch } = this.props;
        var cart = this.props.cart;

        var cart_list = cart.list;
        var temp_code = cart_list[0] != undefined ? cart_list[0].cart_id : 0;

        if (couponCode) {

            dispatch(RemoveCoupon(temp_code, couponCode));

            dispatch(getAllOrdersWC());

            jQuery.confirm({
                title: translation.success_text,
                content: translation.coupon_remove_notification,
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

        }

    }

    async handlePayLiClick(e) {

        const cart = this.props.cart;

        var customers = this.props.customers;

        const total = cart.total;

        const { dispatch } = this.props;

        const cart_list = cart.list.length > 0 ? cart.list[0].cart : [];

        if (customers.default.length) {

            if (cart_list.length > 0) {

                const cart_list = cart.list[0].cart;

                const cart_id = cart.list[0].cart_id;

                if (apif_script.wk_pos_validate_product_at_pay == 1) {

                    if (window.navigator.onLine) {

                        let result = dispatch(validateProductStock(cart_list));

                        const notValidProductsList = await result.then((notValidProducts) => {

                            return cart_list.filter((cart_data) => notValidProducts.not_valid_products.includes(cart_data.product_id));

                        });

                        if (notValidProductsList != undefined && notValidProductsList.length > 0) {

                            e.preventDefault();

                            const validProductsList = cart_list.filter((cart_data) => !notValidProductsList.includes(cart_data));

                            let notValidProductNames = [];

                            notValidProductsList.forEach((notValidProduct) => {

                                notValidProductNames.push(notValidProduct.name)

                            });

                            let notValidProductNamesString = notValidProductNames.join(', ');

                            if (notValidProductNames.lenth > 1) {
                                notValidProductNamesString = notValidProductNamesString + translation.are + translation.remove_not_valid_products;
                            } else {
                                notValidProductNamesString = notValidProductNamesString + translation.is + translation.remove_not_valid_products;

                            }

                            jQuery.confirm({
                                title: translation.warning_text,
                                content: notValidProductNamesString,
                                backgroundDismiss: function () {
                                    return 'buttonName'; // the button will handle it
                                },
                                buttons: {
                                    remove: {
                                        btnClass: 'btn-red',
                                        action: function () {
                                            dispatch(deleteNotValidProductsFromCart(validProductsList, cart_id));
                                        }
                                    },
                                    close: {}
                                }
                            });

                        }

                    } else {
                        e.preventDefault();
                        jQuery.alert('Cannot process orders with centralized inventory at offline mode');
                    }

                }

            } else {

                e.preventDefault();

                jQuery.confirm({
                    title: translation.warning_text,
                    content: translation.text_empty_cart,
                    backgroundDismiss: function () {
                        return 'buttonName'; // the button will handle it
                    },
                });
            }
        } else {

            e.preventDefault();

            jQuery.confirm({
                title: translation.warning_text,
                content: translation.empty_default_customer,
                backgroundDismiss: function () {
                    return 'buttonName'; // the button will handle it
                },
            });

        }

    }

    handleCouponLiClick() {

        const { dispatch } = this.props;

        var online = navigator.onLine;

        if (!online) {

            jQuery.confirm({
                title: translation.warning_text,
                content: translation.coupon_offline_notification,
                type: 'red',
                backgroundDismiss: function () {
                    return 'buttonName'; // the button will handle it
                },
            });

            return;
        }

        let cart = this.props.cart;
        let cart_list = cart.list;
        var customers = this.props.customers;
        var taxes = this.props.tax;
        var coup_tax = 0;
        if (cart_list && customers.default.length) {

            applyFilters(AUTHENTICATE_CART_RESET_REQUEST, true, this.props, translation) &&
                jQuery.confirm({
                    title: translation.coupon_code_enter_text,
                    content: '<div> <div className="form-group"><input autofocus type="text" id="input-name" placeholder="' + translation.validated_text + '" className="form-control"></div></div>',
                    buttons: {
                        apply: {

                            text: translation.apply_coupon_text,

                            btnClass: 'btn-orange',

                            action: function () {

                                var input = this.$content.find('input#input-name');

                                if (!input.val().trim()) {

                                    jQuery.alert({

                                        content: translation.coupon_validate_text,

                                        type: 'red'

                                    });

                                    return false;

                                } else {

                                    var coupon_code = input.val();

                                    if (coupon_code) {

                                        var postData = {
                                            coupon_code: coupon_code,
                                            customer: customers.default
                                        };

                                        document.querySelector('#loading-text').innerHTML = translation.applying_coupon_text;

                                        document.querySelector('#loader').style.display = 'block';

                                        POSPostRequest(wkwcpos_variable.WK_CHECK_COUPON_ENDPOINT, postData).then((response) => {

                                            document.querySelector('#loader').style.display = 'none';

                                            if (response.success != undefined) {

                                                if (response.coupon) {

                                                    taxes = Object.values(taxes)
                                                    taxes.forEach(function (tax) {
                                                        if (response.coupon['type'] == 'fixed_cart') {
                                                            coup_tax = response.coupon['price'] - ((response.coupon['price'] * tax.rate) / (tax.rate + 1));
                                                            coup_tax = (response.coupon['price'] * tax.rate) / 100;
                                                        }
                                                    });

                                                    response.coupon['coup_tax'] = coup_tax;
                                                    dispatch(ApplyCoupon(response.coupon));

                                                }

                                            } else if (response.error != undefined || response.msg != undefined) {

                                                jQuery.confirm({
                                                    title: translation.err_text,
                                                    content: translation.error_coupon_offline,
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

                                        });

                                    }

                                }
                            }
                        },

                        later: function () {
                            // do nothing.
                        }
                    }
                });

        }

    }

    handleDiscountClose(e) {
        jQuery(e.target).closest(".pos-popover-content").removeClass("popup-visible");
    }

    handleHoldClick(e) {

        e.preventDefault();

        let routeHref = e.target.getAttribute('href');

        const { dispatch } = this.props;

        let history = this.props.history;

        let cart = this.props.cart;

        let current_cart = this.props.current_cart;

        let customers = this.props.customers;

        let cart_list = cart.list;

        let total = cart.total;

        cart_list = cart_list.filter((obj) => {
            return obj.cart_id == current_cart;
        });

        if (total.cart_total > 0 && current_cart == cart_list[0].cart_id) {

            jQuery.confirm({
                title: translation.order_note_text,
                content: '<div> <div class="form-group"><input autofocus type=text id=input-name placeholder= "' + translation.validated_text + '" className=form-control></div></div>',
                buttons: {
                    orderNote: {
                        text: translation.order_note_text,
                        btnClass: 'btn-orange',
                        action: function () {
                            var input = this.$content.find('input#input-name');
                            if (!input.val().trim()) {

                                jQuery.alert({
                                    content: translation.order_note_empty,
                                    type: 'red'
                                });
                                return false;
                            } else {

                                let fake_cart = current_cart + 1;

                                dispatch(addToHold(input.val().trim(), current_cart, cart_list[0].cart));

                                dispatch(updateCurrentCart(fake_cart));

                                dispatch(ModifyHoldCart(fake_cart));

                                customers.default = [];

                                database.table('pos_coupon').clear().then((result) => {

                                    dispatch(getAllCouponWC());
                                });

                                history.push(routeHref);

                            }
                        }
                    },
                    later: function () {
                        // do nothing.
                    }
                }
            });

        } else {

            jQuery.confirm({
                title: translation.warning_text,
                content: translation.text_empty_cart,
                backgroundDismiss: function () {
                    return 'buttonName'; // the button will handle it
                },
            });
        }

        return true;

    }

    handleDiscountClick(e) {

        e.preventDefault();

        if (applyFilters(SHOW_CUSTOM_DISCOUNT_FILTER, true, this)) {
            jQuery(".pos-popover-content").addClass("popup-visible");
        }

    }

    handleInputValue(e) {

        let input = e.target.value;
        var disc = this.state.discount;

        input = input.replace(/[^0-9.]/g, '');
        input = input.replace(/(\..*)\./g, '$1');

        this.setState({
            discount: {
                amount: input,
                type: disc.type
            }
        });

    }

    handlUpdateClick(action) {

        const { dispatch } = this.props;

        var current_cart = this.props.current_cart;

        var taxes = this.props.tax;

        var disc = this.state.discount;

        var disc_tax = 0;

        var amt = jQuery("input[name='disc']").val();

        if (action == 'add') {

            var decimal = /^[-+]?[0-9]+\.[0-9]+$/;
            var withoutDecimal = /^[-+]?[0-9]+$/;

            if (amt && (amt.match(withoutDecimal) && parseFloat(amt) > 0) || (amt.match(decimal) && parseFloat(amt) > 0)) {

                taxes = Object.values(taxes)
                taxes.forEach(function (tax) {
                    if (disc.type == 'fixed') {
                        disc_tax = amt - ((amt * tax.rate) / (tax.rate + 1));
                    }
                });

                this.setState({
                    discount: {
                        amount: amt,
                        type: disc.type,
                        tax: disc_tax
                    }
                });

                dispatch(ModifyDiscount(action, { amount: amt, type: disc.type, tax: disc_tax }, current_cart));
                dispatch(getAllCartProducts());
                jQuery(".pos-popover-content").removeClass("popup-visible");

            } else {

                jQuery.alert({
                    title: __('Error', 'wc_pos'),
                    content: translation.validate_product_price,
                    type: 'red'
                });
            }

        } else if (action == 'delete') {

            this.setState({
                discount: {
                    amount: '',
                    type: disc.type
                }
            });

            jQuery("input[name='disc']").val(0);

            dispatch(ModifyDiscount(action, '', current_cart));
            dispatch(getAllCartProducts());
            jQuery(".pos-popover-content").removeClass("popup-visible");

        }

    }

    handleDiscountType(e) {

        var disc = this.state.discount;
        var data_icon = jQuery(e.target).closest("label").data("icon");
        jQuery(".pos-radio-select label").removeClass("default-selected");
        jQuery(e.target).closest("label").addClass("default-selected");
        jQuery(".pos-discount-result").removeClass("icon-left icon-right").addClass("icon-" + data_icon);

        if (data_icon == 'left') {

            this.setState({
                discount: {
                    amount: disc.amount,
                    type: 'percentage',
                }
            });

        } else if (data_icon == 'right') {

            this.setState({
                discount: {
                    amount: disc.amount,
                    type: 'fixed',
                }
            });

        } else {

            jQuery.alert({

                content: translation.drawer_validate_text,

                type: 'red'

            });
        }

    }

    render() {

        var currency_position = 'L';

        var cart = this.props.cart;

        var cartContents = cart.list;

        var inlinePriceTotalDiscount = 0;

        if (cartContents.length > 0) {

            if (cartContents.length > 0 && cartContents[0] != undefined && cartContents[0].cart != undefined && cartContents[0].cart.length > 0) {

                cartContents[0].cart.forEach((cartProduct) => {

                    // const taxDiscount = ( cartProduct.quantity * cartProduct.originalTax ) - cartProduct.tax;
                    const priceDiscount = (cartProduct.quantity * cartProduct.special) - (cartProduct.quantity * cartProduct.uf);

                    // inlinePriceTotalDiscount += taxDiscount + priceDiscount;
                    inlinePriceTotalDiscount += priceDiscount;

                });

            }

        }

        inlinePriceTotalDiscount = parseFloat(inlinePriceTotalDiscount);

        var coupons = Array.from(this.props.coupons);

        var currency = Array.from(this.props.currency);

        var customers = this.props.customers;

        var disc = this.state.discount;

        var total = cart.total;

        var customer_name = __('Select Customer', 'wc_pos');

        var coupon = coupons.map((coup) => {
            return coup.coupon;
        });

        var currency_code = currency.map((sym) => {
            return sym.symbol;
        });

        currency_code = currency_code[0];

        var subtotal = wkwcpos_price(total.cart_subtotal, currency_code);
        var taxtotal = wkwcpos_price(total.tax_total, currency_code);
        var totaldiscount = parseFloat(total.total_discount) + inlinePriceTotalDiscount;
        totaldiscount = wkwcpos_price(totaldiscount, currency_code);
        var cart_total = wkwcpos_price(parseFloat(applyFilters(CHANGE_IN_CART_TOTAL_FILTER, total.cart_total)), currency_code);

        var default_customer = (customers.default.length > 0) ? customers.default[0] : '';

        if (default_customer) {

            customer_name = default_customer.first_name;

        }

        var coupon_html = '';

        const coupon_row = coupon.map((vall, i) => {

            var tempArr = [];

            jQuery.each(vall, (i, val) => {

                let vval = val;

                var price_formated = '';

                if (currency_position == 'L') {

                    if (vval.type == 'percent') {

                        price_formated = vval.price + '%';

                    } else {

                        price_formated = currency_code + vval.price;

                    }


                } else {

                    if (vval.type == 'percent') {

                        price_formated = vval.price + '%';

                    } else {

                        price_formated = vval.price + currency_code;

                    }


                }

                tempArr.push({ code: vval.code, price: price_formated });
            });

            return tempArr;

        });

        if (coupon_row.length > 0) {

            const removeCouponEligible = applyFilters(REMOVE_COUPON_ELIGIBLE_FILTER, true, this);

            coupon_html = coupon_row[0].map((coup, index) => {

                return (
                    <tr className="coupon-code" key={coup.code}>
                        <td>
                            {coup.code}
                            {removeCouponEligible ?
                                <span data-remove={coup.code}><i className="fa fa-remove" onClick={this.handleRemoveCoupon}></i></span>
                                : ''}
                        </td>
                        <td className="action">{coup.price}</td>
                    </tr>
                );
            });
        }
        var coupon_text = translation.coupon_text;
        var discount_text = translation.discount_text;
        var tax_text = translation.tax_text;
        var sub_total_text = translation.sub_total_text;
        var grand_total_text = translation.grand_total_text;
        var apply_coupon_text = translation.apply_coupon_text;
        var hold_cart_text = translation.hold_cart_text;
        var apply_text = translation.apply_text;
        var delete_text = translation.delete_text;
        var discount_title_text = translation.discount_title_text;
        var pay_text = translation.pay_text;

        if (total.cart_subtotal == undefined) {
            return <Loader></Loader>;
        }

        var cartExtra = applyFilters(MODIFY_CART_EXTRA_ACTION, [
            { id: 'button-customer', link: 'customers', icon: 'fa-user-plus', text: customer_name, event: '' },
            { id: 'pay-to-pos', link: 'pay', icon: 'fa-credit-card-alt', text: pay_text, event: this.handlePayLiClick },
            { id: 'cart-hold', link: 'orders/tab/hold', icon: 'fa fa-pause', text: hold_cart_text, event: this.handleHoldClick },
        ], cart);

        const cart_extra_section = cartExtra.map((value, index) => {

            if (value.event) {

                return (
                    <Link
                        key={index}
                        id={value.id}
                        onClick={(e) => value.event(e)}
                        to={wkwcpos_variable.HOME_URL + '/pos/' + value.link}
                    >
                        <span className={"fa " + value.icon}></span>
                        {value.text}
                    </Link>
                );

            } else {

                return (
                    <Link
                        key={index}
                        id={value.id}
                        to={wkwcpos_variable.HOME_URL + '/pos/' + value.link}
                    >
                        <span className={"fa " + value.icon}></span>
                        {value.text}
                    </Link>
                );

            }

        });

        return (
            <div className="grd-section">

                <div className="pos-cart-bottom-section">

                    <div className="pos-popover-content">

                        <h1 className="pos-pop-header">{discount_title_text}</h1>

                        <span className="fa fa-close discount-closer" onClick={this.handleDiscountClose}></span>

                        <hr className="pos-hr" />

                        <div className="pos-radio-select">

                            <label className="default-selected" data-icon="left" onClick={this.handleDiscountType}>
                                <input name="765" defaultValue="true" type="radio" />
                                <div>%</div>
                            </label>

                            <label data-icon="right" onClick={this.handleDiscountType}>
                                <input name="765" defaultValue="false" type="radio" />
                                <div>{currency_code}</div>
                            </label>

                        </div>

                        <div className="pos-discount-result icon-left">

                            <div className="disc-result-wrap">

                                <input name="disc" defaultValue={disc.amount} onInput={this.handleInputValue} type="number" min="0" step="0.01" autoFocus />

                                <div className="pos-sale-discount">{currency_code}</div>
                                <div className="pos-sale-percentage">%</div>

                            </div>

                            <button role="button" type="button" id="apply-discount" onClick={((e) => this.handlUpdateClick('add'))}>
                                <span className="fa fa-plus-circle"></span>&nbsp;{apply_text}</button>

                            <button role="button" type="button" id="remove-discount" onClick={((e) => this.handlUpdateClick('delete'))}>
                                <span className="fa fa-trash"></span>&nbsp;{delete_text}</button>

                        </div>
                    </div>

                </div>

                {
                    applyFilters(SHOW_APPLY_COUPON_FILTER, true, this) ?
                        <div className="apply-coupon">
                            <button className="add-coupon" onClick={this.handleCouponLiClick}>{apply_coupon_text}</button>
                        </div>
                        : ''
                }


                <table className="pos-total">
                    <tbody>
                        <tr>
                            <td>{sub_total_text}</td>
                            <td id='pos-sub-total'>{subtotal}</td>
                        </tr>
                        <tr id='pos-tax-total'>
                            <td>{tax_text}</td>
                            <td>{taxtotal}</td>
                        </tr>
                        <tr>
                            <td><a href="#" className="apply-discount" onClick={this.handleDiscountClick}>{discount_text}</a></td>
                            <td id="pos-discount">-<span>{totaldiscount}</span></td>
                        </tr>
                        {applyFilters(ADD_ROW_AFTER_DISCOUNT_IN_CART_FILTER, '', this.props)}
                        <tr className="coupon-code-head">
                            <td colSpan="2">{coupon_text}</td>
                        </tr>
                        {coupon_html ? coupon_html : <tr></tr>}
                        <tr id="grand-total">
                            <td>{grand_total_text}</td>
                            <td id="postotal">{cart_total}</td>
                        </tr>
                    </tbody>
                </table>

                {
                    applyFilters(SHOW_CART_CHECKOUT_ACTIONS_FILTER, true, this) ?
                        <div className="pos-cart-checkout">
                            {cart_extra_section}
                        </div>
                        : ''
                }

            </div>

        );
    }
}

const mapStateToProps = state => ({
    discount: state.discount.list,
    tax: state.tax.list,
    cart: state.cart,
    currency: state.currency.default,
    current_cart: state.current_cart,
    customers: state.customers,
    coupons: state.coupon.list
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ addToHold, updateCurrentCart, getAllCouponWC, getAllCartProducts, ModifyHoldCart, getAllOrdersWC, ModifyDiscount, ApplyCoupon, RemoveCoupon }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
