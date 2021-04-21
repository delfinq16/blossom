import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SaveSaleHistoryToDB, getSaleHistoryWC } from '../../../../../actions/sale';
import wkwcpos_variable from './../../../../../config';
import { POSPostRequest } from './../../../../../hash';
import { applyFilters } from '@wordpress/hooks';

import { translation } from '../../../../../translation';
import database from '../../../../../database';
import { wkwcpos_price } from '../../../../../currency-format';

export const COUNTER_ADD_NEW_ROW = 'wkwcpos_counter_add_row';
export const COUNTER_ADD_CUSTOM_FORM_FIELDS = 'wkwcpos_counter_add_custom_form_fields';
export const COUNTER_MODIFY_EXPECTED_DRAWER_AMOUNT = 'wkwcpos_counter_modify_expected_drawer_amount';
export const DRAWER_DIFFERENCE_TEXT_CHANGES = 'wkwcpos_drawer_difference_text_changes';
export const DRAWER_DIFFERENCE_AMOUNT_CHANGES = 'wkwcpos_drawer_difference_amount_changes';
export const COUNTER_FILTER_ORDER_CUSTOM_FIELD_BASED = 'wkwcpos_counter_filter_order_custom_field_based';
export const SHOW_DRAWER_DETAILS_FILTER = 'wkwcpos_show_drawer_details_filter';


class CloseCounter extends Component {

    constructor(props) {

        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);

    }

    handleSubmit(event) {

        var online = navigator.onLine;

        event.preventDefault();

        if (online) {

            const { dispatch } = this.props;

            const orders = this.props.orders;

            let offlineOrders = [];

            if (orders && orders.length > 0) {
                offlineOrders = orders.filter(order => order.order_type == 'offline');
            }

            if (offlineOrders.length <= 0) {

                this.closeDrawer(event).then((json) => {

                    if (json) {
                        jQuery(".note_quantity input, #edrawer-amt-remark, #in-hand-card").val("");
                        jQuery(".amount, .total_amount span").text("0");
                        jQuery.confirm({
                            title: translation.success_text,
                            content: translation.drawer_closed_text,
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

                        dispatch(SaveSaleHistoryToDB([json]));

                        dispatch(getSaleHistoryWC());

                    } else {

                        jQuery.confirm({
                            title: translation.success_text,
                            content: translation.drawer_closed_text,
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

            } else {
                jQuery.alert('There are offline orders present, kindly sync them first!');
            }

        } else {

            jQuery.confirm({
                title: translation.warning_text,
                content: translation.error_offline_account,
                backgroundDismiss: function () {
                    return 'buttonName'; // the button will handle it
                },
                Okay: {
                    text: translation.okay_text,
                    btnClass: 'btn-red'
                }
            });

            return;

        }

    }

    closeDrawer(event) {

        let data = jQuery("#close-drawer-form").serialize();

        let formData = {
            drawer: data,
            logged_in_user_id: apif_script.logged_in.user_id
        };

        return new Promise((resolve, reject) => {

            document.querySelector('#loading-text').innerHTML = translation.closing_drawer_text;

            document.querySelector('#loader').style.display = 'block';

            POSPostRequest(wkwcpos_variable.WK_CREATE_DRAWER_PERDAY_ENDPOINT, formData).then((json) => {

                document.querySelector('#loader').style.display = 'none';

                if (json) {

                    resolve(json.response);

                }

            });

        });
    }

    render() {

        let porders = Array.from(this.props.orders);

        let currency_symbol = this.props.currency;

        var opening_balance = parseFloat(0);

        opening_balance = this.props.cashier.opening_amount;

        if (localStorage && localStorage.cashdrawer) {

            var drawerAmt = JSON.parse(localStorage.cashdrawer);
            opening_balance = drawerAmt['initialAmount'].initialAmount;
        }

        var today = apif_script.logged_in.current_date;

        let orders = porders.filter((order) => {

            var dateOrder = order.order_date;

            if (today.trim() == dateOrder.trim()) {

                return order;

            }

        });

        orders = applyFilters(COUNTER_FILTER_ORDER_CUSTOM_FIELD_BASED, orders);

        var cash_sale = 0;

        var card_sale = 0;

        var balance = 0;

        // console.log(orders);
        orders.forEach(function (key, value) {

            let cardPay = key.cardPay;
            let cashPay = key.cashPay;
            let total_paid = parseFloat(cardPay) + parseFloat(cashPay);
            total_paid = total_paid.toFixed(2);
            card_sale = card_sale + parseFloat(cardPay);
            cash_sale = cash_sale + parseFloat(cashPay);
            var bal = 0;
            if (parseFloat(total_paid) > parseFloat(key.order_total)) {
                bal = parseFloat(total_paid) - parseFloat(key.order_total);
                bal = bal.toFixed(2);
            }

            balance = balance + parseFloat(bal);
        });

        cash_sale = isNaN(cash_sale) ? parseFloat(0) : parseFloat(cash_sale);

        card_sale = isNaN(card_sale) ? parseFloat(0) : parseFloat(card_sale);

        let total_sale = opening_balance + card_sale + cash_sale;

        let today_sale = card_sale + cash_sale;

        let total_sale_final = parseFloat(opening_balance) + card_sale + cash_sale - balance;

        let drawer_difference = total_sale_final - opening_balance;

        total_sale = parseFloat(total_sale_final).toFixed(2);

        cash_sale = parseFloat(cash_sale).toFixed(2);

        card_sale = parseFloat(card_sale).toFixed(2);

        opening_balance = parseFloat(opening_balance).toFixed(2);

        var opening_balance_html = wkwcpos_price(opening_balance, currency_symbol);
        var cash_sale_html = wkwcpos_price(cash_sale, currency_symbol);
        var card_sale_html = wkwcpos_price(card_sale, currency_symbol);
        var total_sale_html = wkwcpos_price(total_sale, currency_symbol);
        drawer_difference = wkwcpos_price(parseFloat(drawer_difference), currency_symbol);

        var close_drawer = translation.close_drawer;
        var difference_between_closing_and_opening_Amount = translation.difference_between_closing_and_opening_Amount;
        var closing_drawer_detail = translation.closing_drawer_detail;
        var remarks = translation.remarks;
        var counted_drawer_amount = translation.counted_drawer_amount;
        var expected_amount_in_drawer = translation.expected_amount_in_drawer;
        var cash_sale_text = translation.today_cash_sale;
        var card_sale_text = translation.today_card_sale;
        var opening_amount = translation.opening_amount;
        var drawer_amount_details = translation.drawer_amount_details;
        var cash_balance = translation.cash_balance;
        let ttoday = new Date(Date.now()).toLocaleString().split(', ')[0];

        return (

            <div className="postabContainer pos-close-counter" id="pos-cashier-tab-1">

                <div className="pos-drawer-amount pos-dcalc" id="dcalc-drawer">

                    {applyFilters(SHOW_DRAWER_DETAILS_FILTER, true) &&

                        <ul>
                            <li>
                                <h2>{drawer_amount_details}</h2>
                            </li>

                            <li>
                                <h3>{opening_amount}</h3>
                                <h3>{opening_balance_html}</h3>

                            </li>

                            <li>
                                <h3>{cash_sale_text}</h3>
                                <h3>{cash_sale_html}</h3>
                            </li>

                            <li>
                                <h3>{card_sale_text}</h3>
                                <h3>{card_sale_html}</h3>
                            </li>

                            {applyFilters(COUNTER_ADD_NEW_ROW, '', database, currency_symbol)}

                            <li>
                                <h3>{expected_amount_in_drawer}</h3>
                                <h3>{applyFilters(COUNTER_MODIFY_EXPECTED_DRAWER_AMOUNT, total_sale_html, cash_sale, card_sale, database, currency_symbol)}</h3>
                            </li>
                        </ul>

                    }
                </div>

                <form method="POST" id="close-drawer-form" onSubmit={this.handleSubmit}>

                    <div className="pos-cdrawer-amount pos-dcalc" id="dcalc-cdrawer">

                        <ul>
                            <li>
                                <h2>{counted_drawer_amount}</h2>
                            </li>

                            <li>
                                <label>{remarks}</label>
                                <textarea name='drawer_note' id="edrawer-amt-remark" placeholder={cash_balance}></textarea>
                                {applyFilters(COUNTER_ADD_CUSTOM_FORM_FIELDS, '', translation, cash_balance, currency_symbol)}
                            </li>

                        </ul>

                        <input type="hidden" name="opening_balance" value={opening_balance} />
                        <input type="hidden" name="today_sale" value={today_sale} />
                        <input type="hidden" name="total_sale" value={total_sale} />
                        <input type="hidden" name="card_sale" value={card_sale} />
                        <input type="hidden" name="cash_sale" value={cash_sale} />
                        <input type="hidden" name="date" value={ttoday} />

                    </div>

                    <div className="pos-sale-history pos-dcalc" >

                        <ul>
                            <li>
                                <h2>{closing_drawer_detail}</h2>
                            </li>

                            <li>
                                <h3>{applyFilters(DRAWER_DIFFERENCE_TEXT_CHANGES, difference_between_closing_and_opening_Amount)}</h3>
                                <h5 className="drawer-diff">{applyFilters(DRAWER_DIFFERENCE_AMOUNT_CHANGES, drawer_difference)}</h5>
                            </li>

                            <li>
                                <button type="submit" className="close-drawer">{close_drawer}</button>
                            </li>

                        </ul>

                    </div>

                </form>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.list,
    cashier: state.cashier
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ SaveSaleHistoryToDB, getSaleHistoryWC }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseCounter);