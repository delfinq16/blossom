import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translation } from '../../../../../translation';
import { applyFilters } from '@wordpress/hooks';
import { wkwcpos_price } from '../../../../../currency-format';
export const MODIFY_SALE_HISTORY_COLUMNS = 'wkwcpos_modify_sale_history_column';
export const MODIFY_SALE_HISTORY_ROW_DATA = 'wkwcpos_modify_sale_history_row_data';
export const MODIFY_SALE_HISTORY_ROW_HTML = 'wkwcpos_modify_sale_history_row_html';

class SaleHistory extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        let orders = Array.from(this.props.orders);
        var currency_symbol = this.props.currency;
        var date = translation.date;
        var cash_sale = translation.cash_sale;
        var card_sale = translation.card_sale;
        var total_sale_text = translation.total_sale;
        var drawer_note_text = translation.drawer_note;

        const columns = applyFilters(MODIFY_SALE_HISTORY_COLUMNS, [
            {
                id: 'date',
                text: date,

            },
            {
                id: 'cash',
                text: cash_sale,

            },
            {
                id: 'card',
                text: card_sale,

            },
            {
                id: 'balance',
                text: total_sale_text,

            },
            {
                id: 'note',
                text: drawer_note_text,

            },
        ]);

        const saleHistoryRows = orders.map((order) => {

            var total_sale = parseFloat(order.closing_balance).toFixed(2) - parseFloat(order.opening_balance).toFixed(2);

            var closing_balance_html = wkwcpos_price(parseFloat(total_sale), currency_symbol);
            var cash_sale_html = wkwcpos_price(parseFloat(order.cash_sale), currency_symbol);
            var card_sale_html = wkwcpos_price(parseFloat(order.card_sale), currency_symbol);

            var drawer_note_html = order.drawer_note != undefined ? order.drawer_note : 'N/A';

            return (applyFilters(MODIFY_SALE_HISTORY_ROW_DATA, {
                id: order.id,
                date: order.date,
                cash: cash_sale_html,
                card: card_sale_html,
                balance: closing_balance_html,
                note: drawer_note_html,
            }, order));
        });

        const saleHistoryBody = saleHistoryRows.map((order) => {
            const html = (
                <tr key={order.id}>
                    <td>{order.date}</td>
                    <td>{order.cash}</td>
                    <td>{order.card}</td>
                    <td>{order.balance}</td>
                    <td>{order.note}</td>
                </tr>);

            return applyFilters(MODIFY_SALE_HISTORY_ROW_HTML, html, order, currency_symbol);

        });

        const saleHistoryHead = columns.map((order, index) => {

            return (<th key={index}>{order.text}</th>)
        });

        return (

            <div className="postabContainer" id="pos-cashier-tab-3">

                <div className="pos-order-list order-sale-history">

                    <table>
                        <thead>
                            <tr>
                                {saleHistoryHead}
                            </tr>
                        </thead>
                        <tbody>
                            {saleHistoryBody}
                        </tbody>
                    </table>
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    orders: state.sale.list,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleHistory);