import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';

import './less/pay.less';
import { createWCOrder, getAllOrdersWC } from '../../../../actions/orders';
import { getAllCouponWC } from '../../../../actions/coupon';
import { getAllCartProducts } from '../../../../actions/cart';
import { getAllDiscountWC } from '../../../../actions/discount';
import { translation } from '../../../../translation';
import { updateCurrentCart } from '../../../../actions/currentcart';
import { RemoveHoldData, getAllHoldCartProducts } from '../../../../actions/hold';
import { isObject } from 'util';
import { getCurrentCart } from '../../../../actions/currentcart';
import { checkLoginUser } from '../../../../actions/login';
import { taxAccount } from '../../../../actions/tax';
import { getInvoiceTemplate } from '../../../../actions/invoice';
import { getAllCustomersWC } from '../../../../actions/customers';
import { Link } from 'react-router-dom';

import wkwcpos_variable from '../../../../config';
import { POSPostRequest } from '../../../../hash';
import database from '../../../../database';
import { applyFilters, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { wkwcpos_price } from '../../../../currency-format';
import { exp } from 'locutus/php/math';
export const ADD_CUSTOM_ORDER_DATA_BELOW_DATE = 'wkwcpos_add_custom_order_data_below_date';
export const ADD_CUSTOM_HTML_BELOW_KEYBOARD = 'wkwc_add_custom_html_below_keyboard';
export const CHANGE_CURRENT_STATE_DATA_BEFORE_CREATE_ORDER = 'wkwc_change_current_state_data_before_create_order';
export const ADD_DATA_AFTER_TAX_IN_RECEIPT = 'wkwc_add_data_after_tax_in_receipt';
export const ADD_DATA_AFTER_TAX_IN_RECEIPT_CUSTOM = 'wkwc_add_data_after_tax_in_receipt_custom';
export const ADD_DATA_AFTER_BALANCE_IN_RECEIPT = 'wkwc_add_data_after_balance_in_receipt';
export const CHANGE_STATE_VALUE_IN_PAY_PAGE = 'wkwc_change_state_value_in_pay_page';
export const ADD_DATA_AFTER_PAYMENT_HEADING_IN_PAY_FILTER = 'wkwcpos_add_data_after_payment_heading_in_pay_page';
export const ADD_DATA_IN_SELECT_CUSTOMER_IN_PAY_FILTER = 'wkwcpos_add_data_in_select_customer_in_pay_page';
export const ADD_AFTER_TOTAL_HTML_IN_PAY_FILTER = 'wkwcpos_add_data_after_total_html_in_pay_page';
export const AFTER_CREATING_ORDER_ACTION = 'wkwcpos_action_after_creating_order';
export const REMOVE_COMPLETE_PAYMENT_RESTRICTION = 'wkpos_remove_complete_payment_restriction'
export const REMOVE_COMPLETE_PAYMENT_RESTRICTION_FUNCTION = 'wkpos_remove_complete_payment_restriction_function'
export const PERFORM_ACTION_AFTER_INVOICE_PRINT = "wkwcpos_perform_action_after_invoice_print";
export const UPDATE_POS_ORDER_SUB_TOTAL = 'wkwcpos_change_pos_sub_total';
export const wkwcpos_change_pos_total = 'wkwcpos_change_pos_total'
export const WANT_TO_PRINT_RECIEPT = 'wkwcpos_want_to_print_reciept'
export const CHANGE_LISTING_OF_PRODUCTS = 'wkwcpos_change_listing_of_products';
export const CHANGE_STATE_VALUE_ON_BUTTON_PRESSED = 'wkwcpos_change_state_value_on_button_pressed';

class Pay extends Component {

    constructor(props) {

        super(props);

        this.state = {

            "discount": props.discount,
            "currentEntry": "0",
            "cardEntry": "0",
            "cashEntry": "0",
            'tendered': '',
            'change': '',
            'cart_total': '',
            "disabled": true
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);
        this.handleSplitPayment = this.handleSplitPayment.bind(this);
        this.GetHtml = this.GetHtml.bind(this);
        this.getInvoice = this.getInvoice.bind(this);
        this.setupInvoiceSize = this.setupInvoiceSize.bind(this);
        this.openPrintWindow = this.openPrintWindow.bind(this);
        this.syncOfflineOrders = this.syncOfflineOrders.bind(this);

    }

    getInvoice(order = '') {

        let logo_invoice = '${logo_invoice}';
        let outlet_name = '${outlet_name}';
        let order_id = '${order_id}';
        let order_date = '${order_date}';
        let customer_fname = '${customer_fname}';
        let customer_lname = '${customer_lname}';
        let outlet_address = '${outlet_address}';
        let outlet_city = '${outlet_city}';
        let outlet_state = '${outlet_state}';
        let outlet_country = '${outlet_country}';
        let outlet_postcode = '${outlet_postcode}';
        let pos_user_phone = '${pos_user_phone}';
        let pos_user_email = '${pos_user_email}';

        let pro_name = '${pro_name}';
        let pro_quantity = '${pro_quantity}';
        let pro_unit_price = '${pro_unit_price}';
        let pro_total = '${pro_total}';

        let sub_total = '${sub_total}';
        let tax_title = '${tax_title}';
        let order_tax = '${order_tax}';
        let coupon_name = '${coupon_name}';
        let coupon_amount = '${coupon_amount}';
        let order_discount = '${order_discount}';
        let order_total = '${order_total}';
        let cashpay_amount = '${cashpay_amount}';
        let other_payment_text = '${other_payment_text}';
        let otherpay_amount = '${otherpay_amount}';
        let order_change = '${order_change}';

        let cashier_name = '${cashier_name}';

        logo_invoice = apif_script.logged_in.logo_invoice;

        if (apif_script.logged_in.outlet_data) {
            const outlet = apif_script.logged_in.outlet_data;
            outlet_name = outlet.outlet_name;
            outlet_address = outlet.outlet_address;
            outlet_city = outlet.outlet_city;
            outlet_state = outlet.outlet_state;
            outlet_country = outlet.outlet_country;
            outlet_postcode = outlet.outlet_postcode;
        }

        if (apif_script.logged_in.pos_user_phone) {
            pos_user_phone = apif_script.logged_in.pos_user_phone;
        }

        if (order) {
            if (order.order_type == 'online') {
                order_id = '#' + order.order_id;
                order_date = order.order_date;
                customer_fname = order.billing.fname;
                customer_lname = order.billing.lname;
                sub_total = order.cart_subtotal;
                order_discount = order.discount;
                order_total = order.order_html;
                cashpay_amount = order.cashPay > 0 ? order.cashPay_html : 'N/A';
                otherpay_amount = order.cardPay > 0 ? order.cardPay_html : 'N/A';
                other_payment_text = order.cardPay > 0 ? order.payment_title : __('Other Payments', 'wc_pos');
                order_change = order.balance;

                pro_name = '';
                pro_unit_price = '';
                pro_quantity = '';
                pro_total = '';

                order.products.forEach((pro, i) => {

                    pro_name += `<p>${pro.product_name}</p>`;
                    pro_unit_price += `<p>${pro.product_unit_price}</p>`;
                    pro_quantity += `<p>${pro.qty}</p>`;
                    pro_total += `<p>${pro.product_total_price}</p>`;

                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.keys(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }
                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.values(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }

                });

                const order_tax_lines = order.tax_lines;

                tax_title = '';
                order_tax = '';

                if (order_tax_lines.length > 0) {

                    order_tax_lines.forEach((tax) => {
                        tax_title += `<p>${__('Tax', 'wc_pos')}(${tax.title})</p>`;
                        order_tax += `<p>${tax.total}</p>`;
                    });

                }

                var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT_CUSTOM, '', order);

                if (customAfterTax) {

                    order.coupons = customAfterTax;
                }

                const coupons = order.coupons;

                coupon_name = '';
                coupon_amount = '';

                Object.keys(coupons).forEach((i) => {
                    coupon_name += `<p>${__('Coupon', 'wc_pos')}(${i})</p>`;
                    if (coupons[i]) {
                        coupon_amount += `<p>${coupons[i]}</p>`;
                    }
                });

            } else if (order.order_type == 'offline') {
                order_id = order.order_id;
                let currency = order.currency;

                let currency_code = currency.symbol;

                let date = new Date(order.order_date).toDateString();
                date = date.split(' ').slice(0, 4).join(' ');
                order_date = date;

                customer_fname = order.billing.first_name;
                customer_lname = order.billing.last_name;
                sub_total = wkwcpos_price(order.cart_subtotal, currency_code);

                let discount = order.discount;

                if (Object.keys(discount).length > 0) {
                    if (discount.type == 'fixed') {
                        var totaldiscount = wkwcpos_price(-parseFloat(discount.amount), currency_code);
                    } else {
                        var totaldiscount = wkwcpos_price(-parseFloat(discount.amount * order.cart_subtotal / 100), currency_code);
                    }
                } else {
                    var totaldiscount = wkwcpos_price(parseFloat(0), currency_code);
                }

                order_discount = totaldiscount;
                order_total = wkwcpos_price(parseFloat(order.order_html), currency_code);
                cashpay_amount = order.cashPay > 0 ? wkwcpos_price(parseFloat(order.cashPay), currency_code) : 'N/A';
                otherpay_amount = order.cardPay > 0 ? wkwcpos_price(parseFloat(order.cardPay), currency_code) : 'N/A';
                other_payment_text = order.cardPay > 0 ? order.payment_title : __('Other Payments', 'wc_pos');

                var balance = order.tendered - order.order_html;
                order_change = wkwcpos_price(parseFloat(balance), currency_code);

                pro_name = '';
                pro_unit_price = '';
                pro_quantity = '';
                pro_total = '';

                let productInlineDiscount = [];

                order.products.forEach((pro, i) => {

                    if (pro.uf < pro.special) {
                        productInlineDiscount.push({
                            slug: pro.slug,
                            discount: (pro.special - pro.uf) * pro.quantity
                        });
                    }

                    pro_name += `<p>${pro.name}</p>`;
                    pro_unit_price += `<p>${wkwcpos_price(pro.uf, currency_code)}</p>`;
                    pro_quantity += `<p>${pro.quantity}</p>`;
                    pro_total += `<p>${wkwcpos_price(pro.uf_total, currency_code)}</p>`;

                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.keys(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }
                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.values(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }

                });

                const order_tax_lines = order.tax_lines;

                if (order_tax_lines.length == undefined) {

                    order_tax_lines = Object.keys(order_tax_lines).map(function (key) {
                        order_tax_lines[key].id = Number(key);
                        return [order_tax_lines[key]];
                    });
                    order_tax_lines = order_tax_lines[0];
                }

                tax_title = '';
                order_tax = '';

                if (order_tax_lines.length > 0) {
                    order_tax_lines.forEach((tax) => {
                        tax_title += `<p>${__('Tax', 'wc_pos')}(${tax.label})</p>`;
                        order_tax += `<p>${wkwcpos_price(parseFloat(tax.rate * order.cart_subtotal / 100), currency_code)}</p>`;
                    });
                }

                coupon_name = '';
                coupon_amount = '';

                if (order.coupons && order.coupons.length > 0) {
                    order.coupons.forEach((coupon) => {
                        coupon_name += `<p>${__('Coupon', 'wc_pos')}(${coupon.code})</p>`;
                        coupon_amount += `<p>${wkwcpos_price(coupon.price, currency_code)}</p>`;
                    });
                }

                if (productInlineDiscount && productInlineDiscount.length > 0) {
                    productInlineDiscount.forEach((product) => {
                        coupon_name += `<p>${__('Coupon', 'wc_pos')}(${product.slug})</p>`;
                        coupon_amount += `<p>${wkwcpos_price(product.discount, currency_code)}</p>`;
                    });
                }
            }

        }

        if (apif_script.logged_in.pos_user) {
            pos_user_email = apif_script.logged_in.pos_user.data.user_email;
            cashier_name = apif_script.logged_in.pos_user.data.display_name;
        }

        let invoiceData = '';

        if (this.props.invoice && this.props.invoice != "0") {
            invoiceData = this.props.invoice;
        } else {

            invoiceData = `

                <style>
                    .wkwcpos-invoice-wrapper {
                        padding: 10px;
                        background-color: #fff;
                        border-radius: 2px;
                        grid-area: second;
                    }
                    .wkwcpos-invoice-wrapper * {
                        padding: 0;
                        margin: 0;
                    }
                    .wkwcpos-invoice-wrapper .invoice-header, .wkwcpos-invoice-wrapper .invoice-footer .footer-details {
                        text-align: center;
                    }
                    .wkwcpos-invoice-wrapper .invoice-header img {
                        width: 50px;
                        margin: 10px 0;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details {
                        width: 100%;
                        display: inline-block;
                    }
                    .wkwcpos-invoice-wrapper .order-details, .wkwcpos-invoice-wrapper .outlet-details {
                        width: 50%;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details .order-details {
                        float: left;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details .outlet-details {
                        float: right;
                        text-align: right;
                    }
                    .wkwcpos-invoice-wrapper .product-details {
                        margin: 15px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table {
                        border-collapse: collapse;
                        width: 100%;
                        text-align: center;
                    }
                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td {
                        padding: 3px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td p {
                        padding: 3px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table thead, .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(1) {
                        border-style: dashed;
                        border-width: 3px 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(3) {
                        border-style: dashed;
                        border-width: 0 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(1), .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(2) {
                        border-style: dashed;
                        border-width: 0 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper hr {
                        width: 35%;
                        margin: 10px auto 7px;
                        border-style: dashed;
                        border-width: 3px 0;
                        border-top-color: #ddd;
                        border-bottom-color: #fafafa;
                    }
                </style>

                <div class="wkwcpos-invoice-wrapper">

                    <div class="invoice-header wkwcpos-invoice-editable">
                        <p class="wkwcpos-invoice-editable">Tax Invoice/Bill of Supply</p>
                        <img src="${logo_invoice}" class="wkwcpos-invoice-editable" />
                        <h3 class="wkwcpos-invoice-editable">${outlet_name}</h3>
                    </div>

                    <div class="invoice-details">
                        <div class="order-details">
                            <p class="wkwcpos-invoice-editable">Order - ${order_id}</p>
                            <p class="wkwcpos-invoice-editable">Date : ${order_date}</p>
                            <p class="wkwcpos-invoice-editable">Customer : ${customer_fname} ${customer_lname}</p>
                        </div>
                        <div class="outlet-details">
                            <p class="wkwcpos-invoice-editable">${outlet_address}</p>
                            <p class="wkwcpos-invoice-editable">${outlet_city} ${outlet_state}</p>
                            <p class="wkwcpos-invoice-editable">Tel No: ${pos_user_phone}</p>
                        </div>
                    </div>

                    <div class="product-details">
                        <table>
                            <thead>
                                <tr>
                                    <th class="wkwcpos-invoice-editable">Product Name</th>
                                    <th class="wkwcpos-invoice-editable">Unit Price</th>
                                    <th class="wkwcpos-invoice-editable">Quantity</th>
                                    <th class="wkwcpos-invoice-editable">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable">${pro_name}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_unit_price}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_quantity}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_total}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">SubTotal</td>
                                    <td class="wkwcpos-invoice-editable">${sub_total}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${tax_title}</td>
                                    <td class="wkwcpos-invoice-editable">${order_tax}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Discount</td>
                                    <td class="wkwcpos-invoice-editable">${order_discount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${coupon_name}</td>
                                    <td class="wkwcpos-invoice-editable">${coupon_amount}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Total</td>
                                    <td class="wkwcpos-invoice-editable">${order_total}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Cash Payment</td>
                                    <td class="wkwcpos-invoice-editable">${cashpay_amount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${other_payment_text}</td>
                                    <td class="wkwcpos-invoice-editable">${otherpay_amount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Change</td>
                                    <td class="wkwcpos-invoice-editable">${order_change}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="invoice-footer">
                        <p class="wkwcpos-invoice-editable">Cashier: ${cashier_name}</p>
                        <div class="footer-details">
                            <p class="wkwcpos-invoice-editable">${outlet_name}</p>
                            <p class="wkwcpos-invoice-editable">Tel No: ${pos_user_phone}</p>
                            <p class="wkwcpos-invoice-editable">Email: ${pos_user_email}</p>
                            <hr class="wkwcpos-invoice-editable" />
                            <p class="wkwcpos-invoice-editable">Have a nice day</p>
                        </div>
                    </div>
                </div>`;
        }

        invoiceData = eval('`' + invoiceData + '`');

        return ReactHtmlParser(invoiceData);
    }

    componentDidMount() {

        const { dispatch } = this.props;

        dispatch(getCurrentCart());
        dispatch(checkLoginUser());
        dispatch(taxAccount());
        dispatch(getAllCartProducts());
        dispatch(getAllHoldCartProducts());
        dispatch(getAllHoldCartProducts());
        dispatch(getAllCustomersWC());
        dispatch(getAllDiscountWC());
        dispatch(getAllCouponWC());
        dispatch(getInvoiceTemplate());

    }

    syncOfflineOrders(pos_orders) {

        const postData = {
            orders: JSON.stringify(pos_orders)
        };

        return new Promise((resolve, reject) => {

            document.querySelector('#loading-text').innerHTML = translation.sync_process_text;

            document.querySelector('#loader').style.display = 'block';

            POSPostRequest(wkwcpos_variable.WK_CREATE_OFFLINE_ORDER_ENDPOINT, postData).then((json) => {

                document.querySelector('#loader').style.display = 'none';

                if (json.length > 0) {

                    doAction(AFTER_CREATING_ORDER_ACTION, json, database);

                    let ids = json.map((j) => {

                        return j.fake_id;

                    });

                    var final_orders = json.map((j) => {

                        delete j.fake_id;
                        return j;

                    });

                    database.pos_orders.bulkDelete(ids).then((res) => {

                        database.pos_orders.bulkPut(final_orders).then((rsult) => {

                            resolve(json)

                        });

                    });

                }

            });

        });

    }

    handleSplitPayment(e) {

        var target = jQuery(e.target).data("target");
        var current_state = this.state;
        if (target && (target == '#scard' || target == '#scash')) {
            jQuery(e.target).closest(".split-button").find("button").removeClass("pay-active");
            jQuery(e.target).addClass("pay-active");
            if (target == '#scard') {
                this.setState({
                    payment_mode: 'card'
                });
                jQuery('.card').removeClass("pay");
                jQuery('.cash').addClass("pay");

            } else {

                this.setState({
                    payment_mode: 'cash'
                });
                jQuery('.cash').removeClass("pay");
                jQuery('.card').addClass("pay");
            }
        }

    }

    handleOrderClick(e) {

        const { dispatch } = this.props;

        let history = this.props.history;

        var current_state = this.state;
        var tendered = parseFloat(this.state.tendered);
        var total = parseFloat(parseFloat(current_state.cart_total).toFixed(2));
        var new_total = parseFloat(current_state.cardEntry) + parseFloat(current_state.cashEntry);
        new_total = new_total.toFixed(2);
        var order_note = jQuery(e.target).closest(".invoice-generate").find(".orderNote").val();
        jQuery(e.target).closest(".invoice-generate").find(".orderNote").val('');
        current_state.note = order_note;
        var mode = current_state.payment_mode;
        if (mode == 'card' || mode == 'cash' || mode == 'split') {

            if (mode == 'cash') {


                if ((total >= 0 && (tendered >= new_total)) || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION_FUNCTION, false)) {

                    this.setState({
                        current_state
                    }, () => {

                        var self = this;

                        dispatch(createWCOrder(applyFilters(CHANGE_CURRENT_STATE_DATA_BEFORE_CREATE_ORDER, current_state))).then((order) => {

                            if (order.message != 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());

                                // var invoiceHtml = self.GetHtml(order);
                                var invoiceHtml = self.getInvoice(order);

                                var styles = self.setupInvoiceSize();

                                ReactDOM.unmountComponentAtNode(document.getElementById('invoice-body'));

                                ReactDOM.render(
                                    invoiceHtml,
                                    document.getElementById('invoice-body')
                                );

                                self.openPrintWindow(jQuery("#invoice-print").html(), styles, order);

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {
                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            } else if (order.message == 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order.order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {
                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            }

                        });

                    });

                }

            } else if (mode == 'split') {

                if (total >= 0 && (tendered >= new_total) || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION_FUNCTION, false)) {

                    current_state.payment_mode = jQuery('#payment-method').val();

                    this.setState({
                        current_state
                    }, () => {

                        var self = this;

                        dispatch(createWCOrder(applyFilters(CHANGE_CURRENT_STATE_DATA_BEFORE_CREATE_ORDER, current_state))).then((order) => {

                            if (order.message != 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());


                                // var invoiceHtml = self.GetHtml(order);
                                var invoiceHtml = self.getInvoice(order);

                                var styles = self.setupInvoiceSize();

                                ReactDOM.unmountComponentAtNode(document.getElementById('invoice-body'));

                                ReactDOM.render(
                                    invoiceHtml,
                                    document.getElementById('invoice-body')
                                );

                                self.openPrintWindow(jQuery("#invoice-print").html(), styles, order);
                                jQuery(".split-button").find("button").removeClass("pay-active");
                                jQuery('#defaultpay').addClass("pay-active");
                                jQuery('.cash').removeClass("pay");
                                jQuery('.card').addClass("pay");
                                jQuery(".pos-tab").find("button").removeClass("active");
                                jQuery("#defaultOpen").addClass("active");
                                jQuery(".tab-content-container .tabcontent").removeClass("pos-active");
                                jQuery(".tab-content-container .tabcontent" + '#cash').addClass("pos-active");

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {
                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            } else if (order.message == 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());

                                jQuery(".split-button").find("button").removeClass("pay-active");
                                jQuery('#defaultpay').addClass("pay-active");
                                jQuery('.cash').removeClass("pay");
                                jQuery('.card').addClass("pay");
                                jQuery(".pos-tab").find("button").removeClass("active");
                                jQuery("#defaultOpen").addClass("active");
                                jQuery(".tab-content-container .tabcontent").removeClass("pos-active");
                                jQuery(".tab-content-container .tabcontent" + '#cash').addClass("pos-active");

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order.order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {
                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            }

                        });

                    });

                }

            } else if (mode == 'card') {

                if (total >= 0 && (tendered <= new_total) || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION_FUNCTION, false)) {

                    current_state.payment_mode = jQuery('#payment-method').val();

                    this.setState({
                        current_state
                    }, () => {

                        var self = this;

                        dispatch(createWCOrder(applyFilters(CHANGE_CURRENT_STATE_DATA_BEFORE_CREATE_ORDER, current_state))).then((order) => {

                            if (order.message != 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());

                                // var invoiceHtml = self.GetHtml(order);
                                var invoiceHtml = self.getInvoice(order);

                                var styles = self.setupInvoiceSize();

                                ReactDOM.unmountComponentAtNode(document.getElementById('invoice-body'));

                                ReactDOM.render(
                                    invoiceHtml,
                                    document.getElementById('invoice-body')
                                );

                                self.openPrintWindow(jQuery("#invoice-print").html(), styles, order);

                                jQuery(".pos-tab").find("button").removeClass("active");
                                jQuery("#defaultOpen").addClass("active");
                                jQuery(".tab-content-container .tabcontent").removeClass("pos-active");
                                jQuery(".tab-content-container .tabcontent" + '#cash').addClass("pos-active");

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {


                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            } else if (order.message == 'skip') {

                                dispatch(getAllCartProducts());
                                dispatch(getAllOrdersWC());
                                dispatch(getAllCouponWC());
                                dispatch(getAllDiscountWC());

                                jQuery(".pos-tab").find("button").removeClass("active");
                                jQuery("#defaultOpen").addClass("active");
                                jQuery(".tab-content-container .tabcontent").removeClass("pos-active");
                                jQuery(".tab-content-container .tabcontent" + '#cash').addClass("pos-active");

                                if (apif_script.order_process_type == 'offline' && navigator.onLine) {

                                    var orderData = [order.order];

                                    if (orderData.length > 0) {

                                        self.syncOfflineOrders(orderData).then((orders) => {
                                            if (orders) {
                                                dispatch(getAllOrdersWC());
                                            }
                                        });

                                    }

                                }

                                history.push({
                                    pathname: wkwcpos_variable.HOME_URL + '/pos',
                                });

                            }

                        });

                    });

                } else {
                    jQuery.alert(__('Please enter tendered amount same as total amount.', 'wc_pos'));
                }

            }
        }

    }

    openPrintWindow(printContents, style, order) {

        doAction(PERFORM_ACTION_AFTER_INVOICE_PRINT, order);

        if (applyFilters(WANT_TO_PRINT_RECIEPT, true, order)) {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                var printWindow = window.open("", "PRINT", "height=400,width=600");
                // printWindow.document.write("<link media='all' href='" + apif_script.assets + "/css/min/invoice.min.css?ver=1.0.7' type='text/css' rel='stylesheet'>");
                printWindow.document.write("<html><head><title></title>" + style);

                printWindow.document.write("</head><body>");
                printWindow.document.write(printContents);
                printWindow.document.write("</body></html>");
                printWindow.document.close(); // necessary for IE >= 10
                printWindow.focus(); // necessary for IE >= 10*-/

                printWindow.addEventListener("load", function () {

                    setTimeout(() => {
                        printWindow.print();
                    }, 500);
                }, true);

            } else {

                var frame1 = document.createElement('iframe');

                frame1.name = "frame1";

                document.body.appendChild(frame1);

                var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

                frameDoc.document.open();

                frameDoc.document.write("<html><head><title></title>" + style);

                frameDoc.document.write("</head><body>");

                frameDoc.document.write(printContents);

                frameDoc.document.write("</body></html>");

                frameDoc.document.close(); // necessary for IE >= 10

                setTimeout(() => {

                    window.frames["frame1"].focus();

                    window.frames["frame1"].print();

                    document.body.removeChild(frame1);

                }, 100);
            }

        }


        return true;
    }

    setupInvoiceSize() {

        var printer = this.props.printers;

        var sprinter = printer.default;

        var style_rules = [];

        if (sprinter) {

            switch (sprinter) {

                case 'a3':
                    style_rules.push(" @page { size: A3;margin: 20mm;} ");
                    var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
                    break;

                case 'a4':
                    style_rules.push(" @page { size: A4;margin: 20mm; } ");
                    var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
                    break;

                case 'a5':
                    style_rules.push(" @page { size: A5; margin: 10mm;} ");
                    var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
                    break;

                case 'a6':
                    style_rules.push(" @page { size: A6; margin: 10mm;} ");
                    var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
                    break;

                case 'T88V':
                    style_rules.push(" @page {size: 58mm 120mm; }  ");
                    var style = '<style type="text/css">' + '.invoice-head, .invoice-body, .invoice-footer{ width:70mm;}' + style_rules.join("\n") + "</style>";
                    jQuery(".invoice-head, .invoice-body, .invoice-footer").css("font-size", "14px;");
                    break;
                default:
                    break;

            }

            return style;
        }

    }

    GetHtml(order) {
        var customData = applyFilters(ADD_CUSTOM_ORDER_DATA_BELOW_DATE, '', order);
        var tax_text = translation.tax_text;
        var order_text = translation.order_text;
        var date_text = translation.date;
        var subtotal_text = translation.subtotal_text;
        var total_text = translation.total_text;
        var discount_text = translation.discount_text;
        var balance_text = translation.balance_text;
        var customer_text = translation.customer_text;
        var cash_payment_text = translation.cash_text;
        var paymentMode = order.payment_title;

        var currency_position = 'L';

        if (order.order_type == 'offline') {

            let currency = order.currency;

            let currency_code = currency.symbol;

            var currency_position = 'L';

            let customers_list = this.props.customers;

            let customers = customers_list.list !== undefined ? Array.from(customers_list.list) : [];

            let customer_id = order.email;

            let customer = customers.filter((cust) => {

                return cust.id == customer_id;

            });

            customer = customer[0];

            var order_tax_lines = order.tax_lines;

            let products = Array.from(order.products);

            let date = new Date(order.order_date).toDateString();

            date = date.split(' ').slice(0, 4).join(' ');

            if (order_tax_lines.length == undefined) {

                order_tax_lines = Object.keys(order_tax_lines).map(function (key) {
                    order_tax_lines[key].id = Number(key);
                    return [order_tax_lines[key]];
                });
                order_tax_lines = order_tax_lines[0];
            }

            if (order_tax_lines.length > 0) {

                var oTax = order_tax_lines.map((tax) => {

                    var balance = order.tendered - order.order_html;
                    return <tr key={tax.id}><td>&nbsp;</td><td>&nbsp;</td><td className="sub-total">{tax_text}({tax.label})</td><td><span>{wkwcpos_price(parseFloat(tax.rate * order.cart_subtotal / 100), currency_code)}</span></td></tr>
                });

            } else {

                var oTax = '';
            }

            let productInlineDiscount = [];

            const orderproducts = products.map((pro, i) => {

                var product_total = wkwcpos_price(pro.uf_total, currency_code);

                if (pro.uf < pro.special) {
                    productInlineDiscount.push({
                        slug: pro.slug,
                        discount: (pro.special - pro.uf) * pro.quantity
                    });
                }

                return (

                    <tr className="border_bottom" key={i} >
                        <td className="product-name">{pro.name}
                            <p className="order-product-meta-heading">{pro.product_meta_data ? Object.keys(pro.product_meta_data) : ""}</p>
                            <p className="order-product-meta"> {pro.product_meta_data ? Object.values(pro.product_meta_data) : ""}</p>
                        </td>
                        <td className="product-quantity">{pro.quantity}</td>
                        <td className="product-unit-price">
                            <span dangerouslySetInnerHTML={{ __html: pro.product_unit_price }}></span>
                        </td>
                        <td className="product-total-price">
                            <span dangerouslySetInnerHTML={{ __html: product_total }}></span>
                        </td>
                    </tr>
                )
            });

            var balance = order.tendered - order.order_html;

            let discount = order.discount;

            var subtotal = wkwcpos_price(order.cart_subtotal, currency_code);

            var balance = wkwcpos_price(parseFloat(balance), currency_code);

            if (Object.keys(discount).length > 0) {

                if (discount.type == 'fixed') {

                    var totaldiscount = wkwcpos_price(parseFloat(discount.amount), currency_code);

                } else {

                    // var totaldiscount = parseFloat(discount.amount).toFixed(2) + '%';

                    var totaldiscount = wkwcpos_price(parseFloat(discount.amount * order.cart_subtotal / 100), currency_code);

                }

            } else {

                var totaldiscount = wkwcpos_price(parseFloat(0), currency_code);

            }

            var cart_total = wkwcpos_price(parseFloat(order.order_html), currency_code);

            var cashPay = wkwcpos_price(parseFloat(order.cashPay), currency_code);

            var cardPay = wkwcpos_price(parseFloat(order.cardPay), currency_code);

            let couponHTML = '';

            if (order.coupons && order.coupons.length > 0) {
                couponHTML = order.coupons.map((coupon) => {
                    let couponAmount = coupon.price;
                    return (
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="sub-total">{__('Coupon', 'wc_pos') + '(' + coupon.code + ')'}</td>
                            <td><span>{wkwcpos_price(couponAmount, currency_code)}</span></td>
                        </tr>
                    );
                });
            }

            let productInlineDiscountHTML = '';

            if (productInlineDiscount && productInlineDiscount.length > 0) {
                productInlineDiscountHTML = productInlineDiscount.map((product) => {
                    return (
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="sub-total">{__('Coupon', 'wc_pos') + '(' + product.slug + ')'}</td>
                            <td><span>{wkwcpos_price(product.discount, currency_code)}</span></td>
                        </tr>
                    );
                });
            }

            var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT, '', order);

            var customAfterBalance = applyFilters(ADD_DATA_AFTER_BALANCE_IN_RECEIPT, '', order);


            return (
                <div>

                    <div className="pos-order-short">

                        <div className="pos-order-sect">

                            <p>{order_text} - {order.order_id}</p>

                            <p className="date">{date_text}: {date}</p>

                        </div>
                        <div className="pos-sumarry-customer">
                            <p className="customer-name">{customer_text}</p>
                            <p className="customer-name">{order.billing.first_name} {order.billing.last_name}</p>
                            <p className="custom-data">{customData}</p>
                        </div>

                    </div>

                    <div className="pos-sale-summary">
                        <div className="sale-summary-products">
                            <table className="order-product-wrap">
                                <thead className="border_bottom">
                                    <tr>
                                        <th className="product-name">
                                            {translation.product_name_text}
                                        </th>
                                        <th className="product-quantity">
                                            {translation.quantity_text}
                                        </th>
                                        <th className="product-unit-price">
                                            {translation.unit_price_text}
                                        </th>
                                        <th className="product-total-price">
                                            {translation.total_price_text}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderproducts}

                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="sub-total">{subtotal_text}</td>
                                        <td dangerouslySetInnerHTML={{ __html: subtotal }}></td>
                                    </tr>
                                    {oTax}
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="sub-total">{discount_text}</td>
                                        <td><span>{totaldiscount}</span></td>
                                    </tr>
                                    {couponHTML}
                                    {productInlineDiscountHTML}
                                    {customAfterTax}
                                </tbody>
                            </table>
                        </div>

                        <div className="sale-summary-calculate-total">
                            <ul>
                                <li>
                                    <h4>{total_text} </h4><span dangerouslySetInnerHTML={{ __html: cart_total }}></span>
                                </li>
                                <li>
                                    <h4>{order.cashPay > 0 ? cash_payment_text : ""}</h4>
                                    <span> {order.cashPay > 0 ? cashPay : ""}</span>
                                </li>
                                <li>
                                    <h4>{order.cardPay > 0 ? paymentMode : ""}</h4>
                                    <span>{order.cardPay > 0 ? cardPay : ""}</span>
                                </li>

                            </ul>
                            <ul className="order-balance">

                                <li>
                                    <h4>{balance_text} </h4>
                                    <span dangerouslySetInnerHTML={{ __html: balance }}></span>
                                </li>

                            </ul>
                            {customAfterBalance}
                        </div>
                    </div>
                </div>);

        } else if (order.order_type == 'online') {

            var coupons = order.coupons;

            var order_tax_lines = order.tax_lines;

            let products = Array.from(order.products);

            var cashPay_text = '';

            var cardPay_text = '';

            if (order.cashPay > 0) {

                cashPay_text = <li><h4>{cash_payment_text}</h4><span dangerouslySetInnerHTML={{ __html: order.cashPay_html }}></span></li>;

            }

            if (order.cardPay > 0) {

                cardPay_text = <li><h4>{paymentMode}</h4><span dangerouslySetInnerHTML={{ __html: order.cardPay_html }}></span></li>;

            }

            if (order_tax_lines.length > 0) {

                var oTax = order_tax_lines.map((tax) => {

                    return <tr key={tax.id}><td>&nbsp;</td><td>&nbsp;</td><td className="sub-total">{__('Tax', 'wc_pos')}({tax.title})</td><td dangerouslySetInnerHTML={{ __html: tax.total }}></td></tr>
                });

            } else {

                var oTax = '';
            }

            if (coupons) {

                var coupon_html = [];

                jQuery.each(coupons, (i, coupon) => {

                    coupon_html.push(
                        <tr key={i}>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>

                            <td className="sub-total">{__('Coupon', 'wc_pos')}<span>({i})</span></td>
                            <td className="coupon-amt">
                                <span dangerouslySetInnerHTML={{ __html: coupon }}></span>
                            </td>
                        </tr>
                    );
                });

            } else {

                var coupon_html = '';

            }

            var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT, '', order);


            var orderproducts = products.map((pro, i) => {
                return (
                    <tr className="border_bottom" key={i} >
                        <td className="product-name">{pro.product_name}
                            <p className="order-product-meta-heading">{pro.product_meta_data ? Object.keys(pro.product_meta_data) : ""}</p>
                            <p className="order-product-meta"> {pro.product_meta_data ? Object.values(pro.product_meta_data) : ""}</p>
                        </td>
                        <td className="product-quantity">{pro.qty}</td>
                        <td className="product-unit-price">
                            <span dangerouslySetInnerHTML={{ __html: pro.product_unit_price }}></span>
                        </td>
                        <td className="product-total-price">
                            <span dangerouslySetInnerHTML={{ __html: pro.product_total_price }}></span>
                        </td>
                    </tr>
                )
            });

            orderproducts = applyFilters(CHANGE_LISTING_OF_PRODUCTS, orderproducts, products);

            var customAfterBalance = applyFilters(ADD_DATA_AFTER_BALANCE_IN_RECEIPT, '', order);

            return (<div>

                <div className="pos-order-short">

                    <div className="pos-order-sect">

                        <p>{order_text} - #{order.order_id}</p>

                        <p className="date">{date_text}: {order.order_date}</p>
                    </div>
                    <div className="pos-sumarry-customer">
                        <p className="customer-name">{customer_text}</p>
                        <p className="customer-name">{order.billing.fname} {order.billing.lname}</p>
                        <p className="custom-data">{customData}</p>
                    </div>

                </div>

                <div className="pos-sale-summary">

                    <div className="sale-summary-products">

                        <table className="order-product-wrap">
                            <thead className="border_bottom">
                                <tr>
                                    <th className="product-name">
                                        {translation.product_name_text}
                                    </th>
                                    <th className="product-quantity">
                                        {translation.quantity_text}
                                    </th>
                                    <th className="product-unit-price">
                                        {translation.unit_price_text}
                                    </th>
                                    <th className="product-total-price">
                                        {translation.total_price_text}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderproducts}

                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td className="sub-total">{subtotal_text}</td>
                                    <td dangerouslySetInnerHTML={applyFilters(UPDATE_POS_ORDER_SUB_TOTAL, { __html: order.cart_subtotal }, order)}></td>
                                </tr>
                                {oTax}
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td className="sub-total">{discount_text}</td>
                                    <td dangerouslySetInnerHTML={{ __html: order.discount }}></td>
                                </tr>
                                {coupon_html}
                                {customAfterTax}
                            </tbody>
                        </table>
                    </div>
                    <div className="sale-summary-calculate-total">
                        <ul>
                            <li>
                                <h4>{total_text} </h4><span dangerouslySetInnerHTML={applyFilters(wkwcpos_change_pos_total, { __html: order.order_html }, order)}></span>
                            </li>
                            {cashPay_text}
                            {cardPay_text}

                        </ul>
                        <ul className="order-balance">

                            <li>
                                <h4>{balance_text} </h4>
                                <span dangerouslySetInnerHTML={{ __html: order.balance }}></span>
                            </li>

                        </ul>
                        {customAfterBalance}
                    </div>
                </div>
            </div>
            );

        }

    }

    componentWillReceiveProps(prop) {

        let cart = prop.cart;
        let cart_total_obj = cart.total;
        let discount = prop.discount;

        if (prop.currency[0] != undefined) {

            var symbol = prop.currency[0].symbol;

        } else {

            var symbol = '$';

        }

        var cart_total_html = wkwcpos_price(parseFloat(cart_total_obj.cart_total), symbol);

        this.setState({
            "discount": discount,
            "currentEntry": "0",
            "cardEntry": "0",
            "cashEntry": "0",
            'tendered': parseFloat(0).toFixed(2),
            'change': parseFloat(0).toFixed(2),
            'cart_total': cart_total_obj.cart_total,
            'cart_total_html': cart_total_html,
            'payment_mode': "cash",
            'note': "",
            'disabled': true
        });
    }

    handleButtonClick(e) {

        this.state = applyFilters(CHANGE_STATE_VALUE_IN_PAY_PAGE, this.state, this.props);

        var currentEntry = this.state.currentEntry;

        var cashEntry = this.state.cashEntry;

        var cardEntry = this.state.cardEntry;

        var buttonPressed = jQuery(e.target).data("key");

        var paymode = jQuery(e.target).data("target");

        var put_type = jQuery(e.target).data("put");

        if (put_type) {
            cardEntry = cardEntry,
                cashEntry = cashEntry
            if (cardEntry > 0) {
                let change = parseFloat(this.state.change) - parseFloat(cardEntry);
                this.state.change = change;
            }
            if (cashEntry > 0) {
                let change = parseFloat(this.state.change) - parseFloat(cashEntry);
                this.state.change = change;
            }
        }

        if (paymode == 'cash-amount') {

            if (buttonPressed != '' || buttonPressed != undefined) {
                if (buttonPressed === "C") {

                    cashEntry = '0';

                    applyFilters(CHANGE_STATE_VALUE_ON_BUTTON_PRESSED, this.state, this.props, buttonPressed);

                }
                else if (buttonPressed === 'b') {

                    if (cashEntry.length > 1) {

                        cashEntry = cashEntry.slice(0, -1);

                    } else {

                        cashEntry = '0';
                    }

                }
                else if (buttonPressed === '.') {

                    if (cashEntry.indexOf('.') == -1) {

                        if (cashEntry.length < 8) {

                            cashEntry = cashEntry + buttonPressed;
                        }
                    }

                } else if (!isNaN(buttonPressed)) {

                    if (cashEntry.toString() === '0') {
                        cashEntry = buttonPressed.toString();

                    } else {

                        if (cashEntry.length < 8 && (cashEntry.indexOf('.') > 0 || parseFloat(cashEntry) >= 0)) {
                            if (put_type) {
                                cashEntry = parseFloat(cashEntry) + parseFloat(buttonPressed);
                            }
                            else {

                                cashEntry = cashEntry + buttonPressed;
                            }

                        } else {

                            jQuery.confirm({
                                title: translation.err_text,
                                content: translation.invalid_paid_amt,
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

                            return;

                        }
                    }
                }
            }

        } else {

            if (buttonPressed != '' || buttonPressed != undefined) {

                if (buttonPressed === "C") {

                    cardEntry = '0';

                    applyFilters(CHANGE_STATE_VALUE_ON_BUTTON_PRESSED, this.state, this.props, buttonPressed);

                } else if (buttonPressed === 'b') {

                    if (cardEntry.length > 1) {

                        cardEntry = cardEntry.slice(0, -1);

                    } else {

                        cardEntry = '0';
                    }


                } else if (buttonPressed === '.') {

                    if (cardEntry.indexOf('.') == -1) {

                        if (cardEntry.length < 8 && !(cardEntry.indexOf('.') > 0 && cardEntry.length - cardEntry.indexOf('.') > 2)) {
                            if (put_type) {
                                cardEntry = parseFloat(cardEntry) + parseFloat(buttonPressed);
                            }
                            else {
                                cardEntry = cardEntry + buttonPressed;
                            }

                        }
                    }

                } else if (!isNaN(buttonPressed)) {

                    if (cardEntry.toString() === '0') {

                        cardEntry = buttonPressed.toString();

                    } else {
                        if (cardEntry.length < 8) {
                            if (put_type) {
                                cardEntry = parseFloat(cardEntry) + parseFloat(buttonPressed);
                            }
                            else {
                                cardEntry = cardEntry + buttonPressed;
                            }

                        } else {

                            jQuery.confirm({
                                title: translation.err_text,
                                content: translation.invalid_paid_amt,
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

                            return;

                        }
                    }
                }

            }
        }

        currentEntry = {
            cash: cashEntry,
            card: cardEntry
        }
        this.updateScreen(currentEntry);

    }

    updateScreen(displayValue) {

        this.state = applyFilters(CHANGE_STATE_VALUE_IN_PAY_PAGE, this.state, this.props);

        var cart_total = this.state.cart_total;

        var cart_list = this.props.cart.list[0].cart;

        if (cart_list.length > 0) {

            var tendered = '';
            var change = this.state.change;
            var mode = this.state.payment_mode;
            var disabled = true;
            var note = this.state.note;

            var discount = this.state.discount;

            var cart_total_html = this.state.cart_total_html;

            if (isObject(displayValue)) {
                var cashValue = displayValue.cash.toString();
                var cardValue = displayValue.card.toString();

                var floatCash = parseFloat(cashValue).toFixed(2);
                var floatCard = parseFloat(cardValue).toFixed(2);

                var displayValue = parseFloat(floatCash) + parseFloat(floatCard);

                var re_total = parseFloat(parseFloat(parseFloat(cart_total).toFixed(2)) - parseFloat(parseFloat(displayValue).toFixed(2))).toFixed(2);

                if (re_total > 0) {

                    change = Math.abs(0).toFixed(2);

                }
                if (re_total <= 0 && displayValue >= 0 || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION, false, re_total, displayValue)) {

                    disabled = false;

                    if (re_total < 0 || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION, false, re_total, displayValue)) {

                        jQuery(".invoice-generate button").addClass('process-invoice');

                        change = Math.abs(re_total).toFixed(2);

                        disabled = false;

                    } else if (re_total == 0 && parseFloat(displayValue).toFixed(2) >= 0) {

                        change = Math.abs(re_total).toFixed(2);

                        jQuery(".invoice-generate button").addClass('process-invoice');

                        disabled = false;

                    }

                } else {

                    disabled = true;

                    jQuery(".invoice-generate button").removeClass('process-invoice');

                }

                tendered = parseFloat(displayValue).toFixed(2);

                if (displayValue == 0) {

                    change = parseFloat(displayValue).toFixed(2);
                }
                this.setState({
                    "discount": discount,
                    "currentEntry": displayValue,
                    "tendered": tendered,
                    "change": change,
                    "cart_total": cart_total,
                    "cardEntry": cardValue,
                    "cashEntry": cashValue,
                    "cart_total_html": cart_total_html,
                    'payment_mode': mode,
                    'note': note,
                    "disabled": disabled
                });
            }
            else {

                var displayValue = displayValue.toString();

                var re_total = parseFloat(parseFloat(parseFloat(cart_total).toFixed(2)) - parseFloat(parseFloat(displayValue.substring(0, 10)).toFixed(2))).toFixed(2);

                if (re_total <= 0 && displayValue >= 0 || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION, false, re_total, displayValue)) {

                    disabled = false;

                    if (re_total < 0 || applyFilters(REMOVE_COMPLETE_PAYMENT_RESTRICTION, false, re_total, displayValue)) {

                        jQuery(".invoice-generate button").addClass('process-invoice');

                        change = Math.abs(re_total).toFixed(2);

                        disabled = false;

                    } else if (re_total == 0 && parseFloat(displayValue.substring(0, 10)).toFixed(2) >= 0) {

                        jQuery(".invoice-generate button").addClass('process-invoice');

                        disabled = false;

                    }

                } else {

                    disabled = true;

                    jQuery(".invoice-generate button").removeClass('process-invoice');

                }

                tendered = parseFloat(displayValue.substring(0, 10)).toFixed(2);

                if (displayValue == 0) {

                    change = parseFloat(displayValue.substring(0, 10)).toFixed(2);
                }

                this.setState({
                    "discount": discount,
                    "currentEntry": displayValue,
                    "tendered": tendered,
                    "change": change,
                    "cart_total": cart_total,
                    "cardEntry": '0',
                    "cashEntry": '0',
                    "cart_total_html": cart_total_html,
                    'payment_mode': mode,
                    'note': note,
                    "disabled": disabled
                });

            }

        } else {
            jQuery.alert('Please add products to the cart first!');
        }

    };

    render() {
        var current_state = this.state;
        var customers = this.props.customers;
        var customer_name = 'Select Customer';
        var round_value = 0;
        var more_prediction = 0;
        this.state = applyFilters(CHANGE_STATE_VALUE_IN_PAY_PAGE, this.state, this.props);
        var default_customer = (customers.default.length > 0) ? customers.default[0] : '';

        if (default_customer) {

            customer_name = default_customer.first_name;

        }

        var currency = Array.from(this.props.currency);
        var symbol = currency.map((sym) => {
            return sym.symbol;
        });

        if (current_state.cart_total) {
            round_value = Math.ceil(current_state.cart_total) == current_state.cart_total ? Math.ceil(current_state.cart_total / 5) * 5 : Math.ceil(current_state.cart_total);

            more_prediction = Math.ceil(current_state.cart_total / 5) * 5 == round_value ? round_value + apif_script.logged_in.difference : Math.ceil(current_state.cart_total / 5) * 5
        }

        var cashEntry = wkwcpos_price(parseFloat(current_state.cashEntry), symbol);
        var cardEntry = wkwcpos_price(parseFloat(current_state.cardEntry), symbol);
        var tendered = wkwcpos_price(current_state.tendered, symbol);
        var change = wkwcpos_price(current_state.change, symbol);
        var total = current_state.cart_total ? wkwcpos_price(parseFloat(current_state.cart_total), symbol) : wkwcpos_price(0, symbol);
        var total_round_off_html = wkwcpos_price(parseFloat(round_value), symbol);
        var total_round_off_html_add_five = wkwcpos_price(parseFloat(more_prediction), symbol);
        var total_round_off_html_add_ten = wkwcpos_price(parseFloat(more_prediction + apif_script.logged_in.difference), symbol);

        symbol = symbol[0];
        var payment_text = translation.payment_text;
        var cash_payment_text = translation.cash_payment_title;
        var card_payment_text = translation.other_payment_title;
        var total_text = translation.total_text;
        var tendered_text = translation.tendered;
        var clear_text = translation.clear;
        var change_text = translation.change;
        var generate_invoice_text = translation.generate_invoice;
        var confirm_payment_text = translation.confirm_payment;
        var order_note_text = translation.order_note_text;
        var payment_detail = translation.payment_detail;
        var pay_by_cash_text = translation.pay_by_cash_text;
        var change_customer_title_text = translation.change_customer_title_text;
        var pay_by_card_text = translation.pay_by_card_text;

        var paymentHTML = '';

        if (jQuery('.pay-active').data('target') == '#scard') {
            var option_list = [];
            var payment_option = apif_script.logged_in.payment_option

            if (payment_option != undefined && payment_option.length > 0) {

                jQuery.each(payment_option, function (i, val) {

                    option_list.push(<option key={val.id} value={val.payment_slug}>{val.payment_name}</option>);

                });

            } else {
                jQuery('.orderNote').css('display', 'block')
            }

            paymentHTML = <select className="form-control" name="payment-option" id="payment-method">{option_list}</select>;
        }

        var custom_option = applyFilters(ADD_CUSTOM_HTML_BELOW_KEYBOARD, '')
        return (

            <div className="pos-tabContent pos-pay" id="pay-pos">

                <div className="pos-payment-head">

                    <Link className="float-right" to={wkwcpos_variable.HOME_URL + '/pos'}><span className="fa fa-close"></span></Link>

                </div>

                <div className="pos-customer-payment">

                    <div className="calculate-pay">

                        <h3>{payment_text}</h3>

                        {applyFilters(ADD_DATA_AFTER_PAYMENT_HEADING_IN_PAY_FILTER, '', this)}

                        <div className="pos-customer">

                            <i className="fa fa-user"></i>

                            <p id="pos-customer-name">{customer_name}</p>

                            <Link className="button change-customer" to={wkwcpos_variable.HOME_URL + '/pos/customers'}>{change_customer_title_text}</Link>

                            {applyFilters(ADD_DATA_IN_SELECT_CUSTOMER_IN_PAY_FILTER, '', this, wkwcpos_price)}

                        </div>

                        <div className="payment-type">

                            <div className="tab-content-container">

                                <div className="KeypadHandle">

                                    <div className="split-button">

                                        <button className="splitCashPayment pay-active" data-target="#scash" id="defaultpay" onClick={this.handleSplitPayment}>{cash_payment_text}</button>

                                        <button className="splitCardPayment" data-target="#scard" onClick={this.handleSplitPayment}>{card_payment_text}</button>

                                    </div>

                                    <div className="card numeric-keypad pay">

                                        <div className="numeric-keypad-button-conatainer">
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-one" data-target='card-amount' data-key="1" onClick={this.handleButtonClick}>1</button>
                                                <button className="numeric-keypad-button key-two" data-target='card-amount' data-key="2" onClick={this.handleButtonClick}>2</button>
                                                <button className="numeric-keypad-button key-three" data-target='card-amount' data-key="3" onClick={this.handleButtonClick}>3</button>
                                                <button className="numeric-keypad-button key-put" data-target='card-amount' data-put={true} data-key={current_state.cart_total ? parseFloat(current_state.cart_total) : 0} onClick={this.handleButtonClick}>{total}</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-four" data-target='card-amount' data-key="4" onClick={this.handleButtonClick}>4</button>
                                                <button className="numeric-keypad-button key-five" data-target='card-amount' data-key="5" onClick={this.handleButtonClick}>5</button>
                                                <button className="numeric-keypad-button key-six" data-target='card-amount' data-key="6" onClick={this.handleButtonClick}>6</button>
                                                <button className="numeric-keypad-button key-put" data-target='card-amount' data-put={true} data-key={round_value} onClick={this.handleButtonClick} disabled>-</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-seven" data-target='card-amount' data-key="7" onClick={this.handleButtonClick}>7</button>
                                                <button className="numeric-keypad-button key-eight" data-target='card-amount' data-key="8" onClick={this.handleButtonClick}>8</button>
                                                <button className="numeric-keypad-button key-nine" data-target='card-amount' data-key="9" onClick={this.handleButtonClick}>9</button>
                                                <button className="numeric-keypad-button key-put" data-target='card-amount' data-put={true} data-key={more_prediction} onClick={this.handleButtonClick} disabled>-</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-decimal" data-target='card-amount' data-key="00" onClick={this.handleButtonClick}>00</button>
                                                <button className="numeric-keypad-button key-decimal" data-target='card-amount' data-key="0" onClick={this.handleButtonClick}>0</button>
                                                <button className="numeric-keypad-button key-back" data-target='card-amount' data-key="b" onClick={this.handleButtonClick}><span className="fa fa-arrow-left"></span></button>
                                                <button className="numeric-keypad-button key-put" data-target='card-amount' data-put={true} data-key={more_prediction + (2 * apif_script.logged_in.difference)} onClick={this.handleButtonClick} disabled>-</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-decimal" data-target='card-amount' data-key="." onClick={this.handleButtonClick}>.</button>
                                                <button className="numeric-keypad-button key-delete" data-target='card-amount' data-key="C" onClick={this.handleButtonClick}>{clear_text}</button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="cash numeric-keypad ">

                                        <div className="numeric-keypad-button-conatainer">
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-one" data-target='cash-amount' data-key="1" onClick={this.handleButtonClick}>1</button>
                                                <button className="numeric-keypad-button key-two" data-target='cash-amount' data-key="2" onClick={this.handleButtonClick}>2</button>
                                                <button className="numeric-keypad-button key-three" data-target='cash-amount' data-key="3" onClick={this.handleButtonClick}>3</button>
                                                <button className="numeric-keypad-button key-put" data-target='cash-amount' data-put={true} data-key={parseFloat(current_state.cart_total).toFixed(2)} onClick={this.handleButtonClick}>{total}</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-four" data-target='cash-amount' data-key="4" onClick={this.handleButtonClick}>4</button>
                                                <button className="numeric-keypad-button key-five" data-target='cash-amount' data-key="5" onClick={this.handleButtonClick}>5</button>
                                                <button className="numeric-keypad-button key-six" data-target='cash-amount' data-key="6" onClick={this.handleButtonClick}>6</button>
                                                <button className="numeric-keypad-button key-put" data-target='cash-amount' data-put={true} data-key={round_value} onClick={this.handleButtonClick}>{total_round_off_html}</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-seven" data-target='cash-amount' data-key="7" onClick={this.handleButtonClick}>7</button>
                                                <button className="numeric-keypad-button key-eight" data-target='cash-amount' data-key="8" onClick={this.handleButtonClick}>8</button>
                                                <button className="numeric-keypad-button key-nine" data-target='cash-amount' data-key="9" onClick={this.handleButtonClick}>9</button>
                                                <button className="numeric-keypad-button key-put" data-target='cash-amount' data-put={true} data-key={more_prediction} onClick={this.handleButtonClick}>{total_round_off_html_add_five}</button>
                                            </div>

                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-decimal" data-target='cash-amount' data-key="00" onClick={this.handleButtonClick}>00</button>
                                                <button className="numeric-keypad-button key-decimal" data-target='cash-amount' data-key="0" onClick={this.handleButtonClick}>0</button>
                                                <button className="numeric-keypad-button key-back" data-target='cash-amount' data-key="b" onClick={this.handleButtonClick}><span className="fa fa-arrow-left"></span></button>

                                                <button className="numeric-keypad-button key-put" data-target='cash-amount' data-put={true} data-key={more_prediction + apif_script.logged_in.difference} onClick={this.handleButtonClick}>{total_round_off_html_add_ten}</button>
                                            </div>
                                            <div className="numeric-keypad-button-row">
                                                <button className="numeric-keypad-button key-decimal" data-target='cash-amount' data-key="." onClick={this.handleButtonClick}>.</button>
                                                <button className="numeric-keypad-button key-delete" data-target='cash-amount' data-key="C" onClick={this.handleButtonClick}>{clear_text}</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="calc-total">
                                    <h2>{payment_detail}</h2>
                                    <hr></hr>

                                    <div id="payment-total">
                                        <span>{total_text}</span>
                                        <h3>{current_state.cart_total_html}</h3>
                                    </div>
                                    {applyFilters(ADD_AFTER_TOTAL_HTML_IN_PAY_FILTER, '', this, wkwcpos_price)}
                                    <div id="payment-total">
                                        <span>{pay_by_cash_text}</span>
                                        <h3>{cashEntry}</h3>
                                    </div>
                                    <div id="payment-total">
                                        <span>{pay_by_card_text}</span>
                                        <h3>{cardEntry}</h3>
                                    </div>
                                    <div id="payment-tendered">
                                        <span>{tendered_text}</span>
                                        <h3>{tendered}</h3>
                                    </div>
                                    <div id="payment-change">
                                        <span>{change_text}</span>
                                        <h3>{change}</h3>
                                    </div>

                                </div>

                            </div>
                            {paymentHTML}
                            {custom_option}
                            <div className="invoice-generate">

                                <textarea className="form-control" className="orderNote" placeholder={order_note_text}></textarea>

                                <button className="pos-button generate-invoice" {...(this.state.disabled && { disabled: true })} data-ptype="split" onClick={this.handleOrderClick}>{confirm_payment_text} & {generate_invoice_text}</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    discount: state.discount.list,
    cart: state.cart,
    currency: state.currency.default,
    current_cart: state.current_cart,
    customers: state.customers,
    printers: state.printers,
    invoice: state.invoice
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ createWCOrder, RemoveHoldData, updateCurrentCart, getAllOrdersWC, getAllCouponWC }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay); 