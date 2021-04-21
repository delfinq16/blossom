import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openMenu, closeMenu } from '../../actions/menu';

import './less/header.less';
import { LoadSearchedProducts } from '../../actions/products';
import { translation } from '../../translation';
import { Link } from 'react-router-dom';
import wkwcpos_variable from '../../config';
import { applyFilters } from '@wordpress/hooks';
import database from '../../database';
import { addToCart } from '../../actions/cart';

import { __ } from '@wordpress/i18n';

export const STATE_TO_PROPS_HEADER_FILTER = 'wkwcpos_modify_state_to_props_in_header';
export const DISPATCH_TO_PROPS_HEADER_FILTER = 'wkwcpos_modify_dispatch_to_props_in_header';
export const CUSTOM_HEADER_DATA_ACTION = 'wkwcpos_add_data_header';
export const SHOW_HEADER_CONTENTS_FILTER = 'wkwcpos_show_header_contents';

class Header extends Component {

    constructor(props) {

        super(props);

        this.state = {
            s : '',
            onlineOfflineInfo: ''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        const { dispatch } = this.props;

        if (this.props.sideMenuVisible) {
            dispatch(closeMenu());
        } else {
            dispatch(openMenu());
        }

    }

    handleSearch(e) {

        const { dispatch } = this.props;

        this.setState({ s: e.target.value });

        var search_keyword = e.target.value.toLowerCase();

        let products = [];

        products = this.props.products;

        if (products.length > 0) {
            dispatch(LoadSearchedProducts(search_keyword, products));
        }

    }

    render() {

        let self = this;
        let s = this.state.s; 
        var status_button = jQuery('#mode');
        var status_button_class = status_button.attr('class'); 

        window.addEventListener('online', function(e) {

            if(status_button_class == 'online' && self.state.onlineOfflineInfo != 'online'){

                self.setState( {
                    onlineOfflineInfo: 'online'
                }, () => {

                    jQuery.confirm({
                        title: translation.online_text,
                        content: translation.text_online_mode,
                        autoClose: 'confirm|3000',
                        escapeKey: 'cancelAction',
                        buttons: {
                            confirm: {
                                btnClass: 'btn-red',
                                text: translation.okay_text,
                                action: function () {
                                }
                            },
                        }
                    });

                } );
            }

            status_button.attr("class","online");
            status_button.html('<i class="fa fa-wifi"></i>');

        }, false);

        window.addEventListener('offline', function(e) {

            if( status_button_class == 'online' && self.state.onlineOfflineInfo != 'offline' ) {

                self.setState( {
                    onlineOfflineInfo: 'offline'
                }, () => {

                    jQuery.confirm({
                        title: translation.offline_text,
                        content: translation.text_offline_mode,
                        autoClose: 'confirm|3000',
                        escapeKey: 'cancelAction',
                        buttons: {
                            confirm: {
                                btnClass: 'btn-red',
                                text: translation.okay_text,
                                action: function () {
                                
                                }
                            },
                        }
                    });

                } );

            }

            status_button.attr("class","offline");

            status_button.html('<i class="fa fa-plane"></i>');

        }, false );

        let statusButtonClass = 'offline';
        let statusButtonHTML = <i class="fa fa-plane"></i>;
        if( window.navigator.onLine ) {
            statusButtonClass = 'online';
            statusButtonHTML = <i class="fa fa-wifi"></i>;
        }

        return (

            <header className="pos-head-wrap">

                {
                    applyFilters( SHOW_HEADER_CONTENTS_FILTER, true, this ) ?

                    <React.Fragment>

                        <div className="pos-nav-actions">

                            <a className="pos-hamburger-menu" href="#"></a>

                        </div>

                        <button onClick={this.handleClick}><i className="fa fa-bars" aria-hidden="true"></i></button>

                        {applyFilters(CUSTOM_HEADER_DATA_ACTION, '', this.props, translation, database )}
                        
                        <div className="side-wrap">

                            <div className="search-product">

                                <input type="search" name="search-pos-product" defaultValue={s} id="search-pos-product" onKeyUp={this.handleSearch} placeholder={ __( 'Search product', 'wc_pos' ) + '...' } autoComplete="off" />
                                <span className="fa fa-barcode"></span>

                            </div>

                            <ul>
                                <li id="trigger-orders"><Link to={ wkwcpos_variable.HOME_URL + '/pos/orders/tab/offline'}><i className="fa fa-refresh" ></i></Link></li>
                                <li id="mode" className={statusButtonClass}>{statusButtonHTML}</li>
                            </ul>

                        </div>
                    </React.Fragment>
                    : ''
                }

            </header>
        );
    }
}

const mapStateToProps = state => ( applyFilters( STATE_TO_PROPS_HEADER_FILTER, {
    products: state.products.list,
    current_cart: state.current_cart,
}, state ));

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators( applyFilters( DISPATCH_TO_PROPS_HEADER_FILTER, { closeMenu, openMenu, LoadSearchedProducts, addToCart }, dispatch ), dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )( Header );