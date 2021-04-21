import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CloseCounter from './counter/counter.jsx';
import TodayCash from './cash/cash.jsx';
import SaleHistory from './history/history.jsx';

import { translation } from '../../../../translation.js';
import { getSaleHistoryWC } from '../../../../actions/sale';
import { checkLoginUser } from '../../../../actions/login';
import wkwcpos_variable from '../../../../config';
import { Link } from 'react-router-dom';
import { applyFilters } from '@wordpress/hooks';

import './less/cashier.less';
import { getAllOrdersWC } from '../../../../actions/orders';
import database from '../../../../database.js';

export const CASHIER_TABS_FILTER = 'wkwcpos_cashier_modify_tabs';
export const CASHIER_ADD_NEW_COMPONENT_FILTER = 'wkwcpos_cashier_add_new_component';
export const CASHIER_ADD_CUSTOM_COMPONENT_FILTER = 'wkwcpos_cashier_add_custom_component';

class Cashier extends Component {

    constructor(props) {

        super(props);

        this.getTabComponent = this.getTabComponent.bind(this);
        this.getCashierTabLinks = this.getCashierTabLinks.bind(this);

    }

    componentDidMount() {

        const { dispatch } = this.props;

        dispatch(getAllOrdersWC());
        dispatch(getSaleHistoryWC());
        dispatch(checkLoginUser());

    }

    getTabComponent(pageName, currency_symbol, orders, today_orders) {
        if (applyFilters(CASHIER_ADD_CUSTOM_COMPONENT_FILTER, false, pageName)) {

            return applyFilters(CASHIER_ADD_NEW_COMPONENT_FILTER, '', pageName, currency_symbol, orders, today_orders, database);

        } else {

            switch (pageName) {

                case 'Cashier':
                case 'Cashier Drawer':
                    return <CloseCounter currency={currency_symbol} orders={orders}></CloseCounter>;
                case 'Cashier Today':
                    return <TodayCash orders={today_orders} currency={currency_symbol}></TodayCash>;
                case 'Cashier Sale':
                    return <SaleHistory currency={currency_symbol}></SaleHistory>;
            }

        }

    }

    getCashierTabLinks() {

        var sale_history = translation.sale_history;
        var today_cash = translation.today_cash;
        var close_counter = translation.close_counter;


        let drawerTabClass = 'wkwcpos-tabs';
        let todayTabClass = 'wkwcpos-tabs';
        let saleTabClass = 'wkwcpos-tabs';

        if (this.props.page.name != undefined) {

            switch (this.props.page.name) {

                case 'Cashier':
                case 'Cashier Drawer':
                    drawerTabClass += ' pos-active';
                    break;
                case 'Cashier Today':
                    todayTabClass += ' pos-active';
                    break;
                case 'Cashier Sale':
                    saleTabClass += ' pos-active';
                    break;

            }

        }

        const tabs = [
            {
                to: '/pos/cashier/tab/drawer',
                classname: drawerTabClass,
                text: close_counter
            },
            {
                to: '/pos/cashier/tab/today',
                classname: todayTabClass,
                text: today_cash
            },
            {
                to: '/pos/cashier/tab/sale',
                classname: saleTabClass,
                text: sale_history
            },
        ];

        return applyFilters(CASHIER_TABS_FILTER, tabs, this.props.page.name);

    }

    render() {

        let currency = this.props.currency;

        var currency_symbol = '';

        if (currency.length != undefined && currency.length > 0) {
            currency_symbol = currency[0].symbol;
        }

        let orders = Array.from(this.props.orders);

        var today = apif_script.logged_in.current_date;

        let today_orders = orders.filter((order) => {

            var dateOrder = order.order_date;

            // var date = new Date(Date.parse(order.order_date)).toDateString();

            // date = date.split(' ').slice(0, 4).join(' ');

            if (today.trim() == dateOrder.trim()) {

                return order;

            }

        });

        const pageName = this.props.page.name;

        const tabListHTML = this.getCashierTabLinks().map(tab => {

            return (
                <Link className={tab.classname} key={tab.to} to={wkwcpos_variable.HOME_URL + tab.to}>{tab.text}</Link>
            );
        });


        return (

            <div className="pos-tabContent" id="pos-cashier">

                <div className="pos-tab-wrap">

                    <div className="pos-tab-head">

                        {tabListHTML}

                        <Link className="float-right" to={wkwcpos_variable.HOME_URL + '/pos'}><span className="fa fa-close" id="close-order-sale-tab"></span></Link>

                    </div>

                    {this.getTabComponent(pageName, currency_symbol, orders, today_orders)}

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.list,
    currency: state.currency.default,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Cashier);