import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { openMenu, closeMenu } from '../../../actions/menu';
import database from '../../../database';
import { getAllCurrencyWC } from '../../../actions/currency'
import { getAllCustomersWC } from '../../../actions/customers';
import { getAllOrdersWC } from '../../../actions/orders';
import { taxAccount } from '../../../actions/tax';
import { getInvoiceTemplate } from '../../../actions/invoice';
import { getAllCategories } from '../../../actions/categories'; 
import { getSaleHistoryWC } from '../../../actions/sale';
import { getAllProducts } from '../../../actions/products';
import { getAllCartProducts, clearIndexDB } from '../../../actions/cart';
import { getCurrentCart } from '../../../actions/currentcart';
import { getAllDiscountWC } from '../../../actions/discount';
import { getAllCouponWC } from '../../../actions/coupon';
import { getAllHoldCartProducts } from '../../../actions/hold';
import { getAllCountriesWC } from '../../../actions/countries';
import { getSessionIDAuthentication } from '../../../actions/authentication';
import wkwcpos_variable from '../../../config';

import  './less/menu.less'; 
import { translation } from '../../../translation';
import { applyFilters, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const MENUS_FILTER = 'wkwcpos_menus_list';
export const RESET_ACTION = 'wkwcpos_reset_action';
export const ACTION = 'wkwcpos_example_action';
export const AUTHENTICATE_CART_RESET_REQUEST = 'wkwcpos_authenticate_cart_reset_request';
export const ADD_MENUS_BEFORE_SETTINGS_FILTER = 'wkwcpos_add_menus_before_settings';

class Menu extends Component {

    constructor(props) {

        doAction( ACTION );

        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleLiClick = this.handleLiClick.bind(this);
        this.getMenus = this.getMenus.bind(this);
    }

    handleClick() {

        const { dispatch } = this.props;
        
        if (this.props.sideMenuVisible) {

            dispatch(closeMenu());

        } else {

            dispatch(openMenu());

        }

    }

    handleLiClick(event, action) {

        event.preventDefault();

        const { dispatch } = this.props;
        let current_cart = this.props.current_cart;

        let targetVal = jQuery(event.target).data('target');
        
        if (action && action == 'cart' && targetVal != undefined && targetVal == '#pos-cart-reset' ) {
            {
                {
                    applyFilters(AUTHENTICATE_CART_RESET_REQUEST, true, this.props, translation)
                    &&
                        dispatch(clearIndexDB(current_cart)).then( (res) => {
                            dispatch(getAllCartProducts());
                            dispatch(getAllDiscountWC());                        
                            dispatch(getAllCouponWC());
                        } );
                }
            }
            

        } else if( targetVal != undefined && targetVal == '#pos-reset') {

            jQuery('#loading-text').text(translation.reloading_text);

            jQuery('#loader').show();

            database.table('pos_sale').clear().then((result)=>{

                database.table('pos_customers').clear().then((result)=>{

                    database.table('pos_products').clear().then((result)=>{

                        database.table('pos_categories').clear().then((result)=>{

                            database.table('pos_remove_id').clear().then((result)=>{

                                database.table('pos_holds').clear().then((result)=>{

                                    database.table('pos_coupon').clear().then((result)=>{

                                        database.table('pos_discount').clear().then((result)=>{

                                            database.table('pos_currency').clear().then((result)=>{

                                                database.table('pos_cart').clear().then((result)=>{

                                                    database.table('pos_current_cart').clear().then((result)=>{

                                                        database.table('pos_temp').clear().then((result)=>{

                                                            database.table('pos_tax').clear().then((result)=>{
                                                                database.table('pos_invoice').clear().then((result)=>{

                                                                    database.table('pos_orders').where('order_type').equals('online').delete().then((result)=>{

                                                                        doAction( RESET_ACTION, database, this.props );

                                                                        if( this.props.page.name == 'Home' ) {

                                                                            dispatch(getSessionIDAuthentication()).then( (res) => {

                                                                                dispatch(getAllCurrencyWC());
                                                                                dispatch(getSaleHistoryWC());
                                                                                dispatch(getCurrentCart());
                                                                                dispatch(getAllCategories());
                                                                                dispatch(getAllOrdersWC()); 
                                                                                dispatch(getAllCustomersWC());
                                                                                dispatch(taxAccount()); 
                                                                                dispatch(getAllProducts()); 
                                                                                dispatch(getAllDiscountWC());
                                                                                dispatch(getAllCountriesWC()); 
                                                                                dispatch(getAllCouponWC());
                                                                                dispatch(getAllCartProducts());
                                                                                dispatch(getAllHoldCartProducts());

                                                                                dispatch(getInvoiceTemplate()); 

                                                                                jQuery('#loader').hide();

                                                                            } );

                                                                        } else {

                                                                            this.props.history.push( {
                                                                                pathname: wkwcpos_variable.HOME_URL + '/pos'
                                                                            } );

                                                                        }

                                                                    });
                                                                });
                                                            });

                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }

        this.handleClick();

    }

    getMenus() {

        let homeMenuClass = 'wkwcpos-menu-list';
        let customersMenuClass = 'wkwcpos-menu-list';
        let cashierMenuClass = 'wkwcpos-menu-list';
        let ordersMenuClass = 'wkwcpos-menu-list';
        let reportsMenuClass = 'wkwcpos-menu-list';

        if( this.props.page.name != undefined ) {

            switch( this.props.page.name ) {

                case 'Home':
                case 'Category':
                    homeMenuClass += ' pos-active';
                    break;
                case 'Customers':
                    customersMenuClass += ' pos-active';
                    break;
                case 'Cashier':
                case 'Cashier Drawer':
                case 'Cashier Today':
                case 'Cashier Sale':
                    cashierMenuClass += ' pos-active';
                    break;
                case 'Orders':
                case 'Hold Sale':
                case 'Offline Sale':
                case 'Order History':
                    ordersMenuClass += ' pos-active';
                    break;
                case 'Reports':
                    reportsMenuClass += ' pos-active';
                    break;

            }

        }

        const orders = translation.orders;
        const cashier = translation.cashier;
        const home = translation.home;
        const customers = translation.customers;

        const menus = [
            {
                to: wkwcpos_variable.HOME_URL + '/pos',
                classname: homeMenuClass,
                icon_classname: 'fa fa-home',
                text: home
            },
            {
                to: wkwcpos_variable.HOME_URL + '/pos/customers',
                classname: customersMenuClass,
                icon_classname: 'fa fa-address-book',
                text: customers
            },
            {
                to: wkwcpos_variable.HOME_URL + '/pos/cashier',
                classname: cashierMenuClass,
                icon_classname: 'fa fa-user',
                text: cashier
            },
            {
                to: wkwcpos_variable.HOME_URL + '/pos/orders',
                classname: ordersMenuClass,
                icon_classname: 'fa fa-file',
                text: orders
            },
            {
                to: wkwcpos_variable.HOME_URL + '/pos/reports',
                classname: reportsMenuClass,
                icon_classname: 'fa fa-tachometer',
                text: __( 'Reports', 'wc_pos' )
            },
        ];

        return applyFilters( MENUS_FILTER, menus, this, wkwcpos_variable );

    }

    render() {

        let user = this.props.user;

        let is_visble = this.props.sideMenuVisible;
        var css_class = '';
        if( is_visble ) {
            css_class = 'menu-reveil';
        }

        let logout_url = apif_script.logout_url;
        
        var reset = translation.reset;
        var reset_cart = translation.reset_cart;
        var cashier = translation.cashier;
        var settings = translation.settings;
        var profile_pic = '';

        if(user.profile_pic == '' ){

            profile_pic = apif_script.assets + "/images/17241-200.png"
        }
        else{

            profile_pic = user.profile_pic
        }

        let settingsMenuClass = 'wkwcpos-menu-list';
        let resetMenuClass = 'wkwcpos-menu-list';
        let logoutMenuClass = 'wkwcpos-menu-list';

        const menusListHTML = this.getMenus().map( menu => {
            return (
                <Link className={menu.classname} key={menu.to} onClick={this.handleClick} to={menu.to}><span className={menu.icon_classname}></span>{menu.text}</Link>
            );
        } );

        if( this.props.page.name != undefined ) {

            switch( this.props.page.name ) {

                case 'Settings':
                case 'Account Settings':
                case 'Other Settings':
                    settingsMenuClass += ' pos-active';
                    break;

            }

        }

        return (

            <div className={"outside-menu pos-height-full "+css_class}>

                <div className="pos-left-wrap pos-height-full">

                    <div className="menu-cashier">

                        <button onClick={this.handleClick}> <i className="fa fa-close"></i></button>

                        <i> <img alt="pos cashier" src={profile_pic} srcSet={profile_pic} className="avatar avatar-96 photo" height="150" width="150" /> </i>
                        <p>{user.first_name}</p>
                        <span>({cashier})</span>

                    </div>

                    <nav>

                        {menusListHTML}

                        {applyFilters( ADD_MENUS_BEFORE_SETTINGS_FILTER, '', this )}

                        <Link className={settingsMenuClass} onClick={this.handleClick} to={ wkwcpos_variable.HOME_URL + '/pos/settings'}><span className="fa fa-wrench"></span>{settings}</Link>

                        <Link className={resetMenuClass} data-target="#pos-reset" to={wkwcpos_variable.HOME_URL + '/pos'} onClick={((e) => this.handleLiClick(e))} ><span className="fa fa-undo reset-system"></span>{reset}</Link>

                        <Link className={resetMenuClass} data-target="#pos-cart-reset" to={wkwcpos_variable.HOME_URL + '/pos'} onClick={((e) => this.handleLiClick(e, 'cart'))} ><span className="fa fa-window-restore reset-system"></span>{reset_cart}</Link>

                        <a className={logoutMenuClass} href={logout_url}><span className="fa fa-sign-out"></span>{__( 'Logout', 'wc_pos' )}</a>

                    </nav>

                </div>

            </div>

        );
    }
}
  

const mapStateToProps = state => ({
    user:state.cashier,
    sideMenuVisible: state.sideMenuVisible,
    current_cart: state.current_cart,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ closeMenu, openMenu, clearIndexDB, getAllCurrencyWC,getAllCountriesWC, getCurrentCart, getAllCategories, getAllCustomersWC, taxAccount, getAllProducts, getAllOrdersWC, getAllDiscountWC, getAllCouponWC, getSaleHistoryWC, getAllCartProducts, getAllHoldCartProducts }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps ) (Menu);
