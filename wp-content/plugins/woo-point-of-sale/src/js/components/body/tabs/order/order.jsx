import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SaleHistory from './history/history.jsx';
import HoldSale from './hold/hold.jsx';
import OfflineSale from './offline/offline.jsx';
import './less/order.less';
import { translation } from '../../../../translation.js';

import { getCurrentCart } from '../../../../actions/currentcart';
import { checkLoginUser } from '../../../../actions/login';
import { getAllOrdersWC } from '../../../../actions/orders';
import { taxAccount } from '../../../../actions/tax';
import { getAllDiscountWC } from '../../../../actions/discount';
import { getAllCartProducts } from '../../../../actions/cart';
import { getAllHoldCartProducts } from '../../../../actions/hold';
import wkwcpos_variable from '../../../../config';
import { Link } from 'react-router-dom';

class Order extends Component {

    constructor(props) {

        super(props);
        
        // This binding is necessary to make `this` work in the callback
        this.getTabComponent = this.getTabComponent.bind(this);
    }

    componentDidMount( ) {

        const { dispatch } = this.props;

        dispatch(getCurrentCart());
        dispatch(checkLoginUser());
        dispatch(getAllOrdersWC());
        dispatch(taxAccount()); 
        dispatch(getAllDiscountWC());
        dispatch(getAllCartProducts());
        dispatch(getAllHoldCartProducts());

    }

    getTabComponent( pageName ) {

        switch( pageName ) {

            case 'Orders':
            case 'Order History':
                return <SaleHistory></SaleHistory>;
            case 'Hold Sale':
                return <HoldSale {...this.props}></HoldSale>;
            case 'Offline Sale':
                return <OfflineSale></OfflineSale>;
        }

    }

    render() {

        var hold_sale = translation.hold_sale;
        var offline_sale = translation.offline_sale;
        var sale_history = translation.sale_history;

        const pageName = this.props.page.name;

        let orderHistoryTabClass = 'wkwcpos-tabs';
        let holdSaleTabClass = 'wkwcpos-tabs';
        let offlineSaleTabClass = 'wkwcpos-tabs';

        switch( pageName ) {

            case 'Orders':
            case 'Order History':
                orderHistoryTabClass += ' pos-active';
                break;
            case 'Hold Sale':
                holdSaleTabClass += ' pos-active';
                break;
            case 'Offline Sale':
                offlineSaleTabClass += ' pos-active';
                break;
        }

        return ( 

            <div className="pos-tabContent pos-order" id="pos-order">

                <div className="pos-tab-wrap">

                    <div className="pos-tab-head">

                        <Link className={orderHistoryTabClass} to={ wkwcpos_variable.HOME_URL + '/pos/orders/tab/history'}>{sale_history}</Link>

                        <Link className={holdSaleTabClass} to={ wkwcpos_variable.HOME_URL + '/pos/orders/tab/hold'}>{hold_sale}</Link>

                        <Link className={offlineSaleTabClass} to={ wkwcpos_variable.HOME_URL + '/pos/orders/tab/offline'}>{offline_sale}</Link>

                        <Link className="float-right" to={ wkwcpos_variable.HOME_URL + '/pos'}><span className="fa fa-close" id="close-order-sale-tab"></span></Link>

                    </div>

                    <div className="postabContainer" id="pos-order-tab">

                        {this.getTabComponent(pageName)}

                    </div>

                </div>

            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign( { dispatch }, bindActionCreators( {  }, dispatch ) );
}

export default connect( mapDispatchToProps )(Order);