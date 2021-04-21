import React, { Component } from 'react';
import { translation } from '../../../../../translation';
import { applyFilters } from '@wordpress/hooks';
import database from '../../../../../database';
import { wkwcpos_price } from '../../../../../currency-format';
import { __ } from '@wordpress/i18n';

export const TAB_MODIFY_TODAY_CASH_AMOUNT = 'wkwcpos_tab_modify_today_cash_amount';
export const COUNTER_FILTER_ORDER_CUSTOM_FIELD_BASED = 'wkwcpos_counter_filter_order_custom_field_based';


class TodayCash extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let orders = Array.from(this.props.orders);

        orders = applyFilters(COUNTER_FILTER_ORDER_CUSTOM_FIELD_BASED, orders);

        let currency_symbol = this.props.currency;

        var symbol_position = 'L';

        var opening_balance = parseFloat(0);

        if (localStorage && localStorage.cashdrawer) {

            var drawerAmt = JSON.parse(localStorage.cashdrawer);

            opening_balance = drawerAmt['initialAmount'].initialAmount;

        }

        if (orders.length > 0) {

            var order_row = orders.map((order) => {
                var order_html = order.order_html;

                var order_id = '#' + order.order_id;

                if (order.order_type == 'offline') {
                    order_html = wkwcpos_price(parseFloat(order_html), currency_symbol);
                    order_id = order.order_id;
                }

                // order['order_type'] = 'offline';

                return (
                    <tr key={order.order_id}>
                        <td>{order_id}</td>
                        <td>{order.order_date}</td>
                        <td dangerouslySetInnerHTML={{ __html: order_html }}></td>
                        <td>{order.payment_title}</td>
                    </tr>
                )
            });

        } else {

            var order_row = <tr>
                <td><span className="no-orders"><i className="fa fa-warning"></i>&nbsp;{__("We didn't find any orders for today", 'wc_pos')}</span></td>
            </tr>
        }

        var cash_sale = 0

        var card_sale = 0

        orders.forEach(function (key, value) {

            let cardPay = key.cardPay;
            let cashPay = key.cashPay;
            card_sale = card_sale + parseFloat(cardPay);
            cash_sale = cash_sale + parseFloat(cashPay);

        });

        cash_sale = isNaN(cash_sale) ? parseFloat(0).toFixed(2) : parseFloat(cash_sale).toFixed(2);

        card_sale = isNaN(card_sale) ? parseFloat(0).toFixed(2) : parseFloat(card_sale).toFixed(2);

        var opening_balance_html = wkwcpos_price(opening_balance, currency_symbol);
        var cash_sale_html = wkwcpos_price(cash_sale, currency_symbol);
        var card_sale_html = wkwcpos_price(card_sale, currency_symbol);

        var opening_drawer_amount = translation.opening_drawer_amount;
        var today_cash_sale = translation.today_cash_sale;
        var today_card_sale = translation.today_card_sale;
        var order_heading_text = translation.order_heading_text;
        var time = translation.time;
        var payment_mode = translation.payment_mode;
        var order_total = translation.order_total;

        return (

            <div className="postabContainer" id="pos-cashier-tab-2">

                <div className="pos-drawer-bal" id="bal-drawer">

                    <div className="opening-balance pos-bal">
                        <h3>{opening_drawer_amount}</h3>
                        <span className="opening-darwer">{opening_balance_html}</span>
                    </div>

                    <div className="current-cash-bal pos-bal">
                        <h3>{today_cash_sale}</h3>
                        <span className="cash-balance">{applyFilters(TAB_MODIFY_TODAY_CASH_AMOUNT, cash_sale_html, database, currency_symbol)}</span>
                    </div>

                    <div className="current-card-bal pos-bal">
                        <h3>{today_card_sale}</h3>
                        <span className="card-balance">{card_sale_html}</span>
                    </div>

                </div>

                <div className="pos-cday-cash pos-table" id="pos-ctable">

                    <table>

                        <thead>
                            <tr>
                                <th>{order_heading_text}</th>
                                <th>{time}</th>
                                <th>{order_total}</th>
                                <th>{payment_mode}</th>
                            </tr>
                        </thead>

                        <tbody>
                            {order_row}
                        </tbody>

                    </table>

                </div>

            </div>

        );
    }
}

export default TodayCash;