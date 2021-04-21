import React, { Component, Fragment } from 'react';

import Menu from './menu/menu.jsx';
import MenuClose from './menuclose/menuclose.jsx';
import Cart from './tabs/cart/cart.jsx';
import './less/body.less';
import { applyFilters } from '@wordpress/hooks';

export const SHOW_CART_FILTER = 'wkwcpos_pages_that_shows_cart';
export const SHOW_MENU_FILTER = 'wkwcpos_show_menu_filter';

class Body extends Component {

    constructor(props) {
        super(props);
        this.showCart = this.showCart.bind(this);

    }

    showCart() {

        const pageName = this.props.page.name;
        const showCartPages = applyFilters(SHOW_CART_FILTER, ['Home', 'Customers', 'Category'], this.props);

        return showCartPages.includes(pageName) ? (<Cart {...this.props} ></Cart>) : '';
    }

    render() {

        let containerClass = this.props.page.name ? this.props.page.name.toLowerCase() : '';
        return (
            <Fragment>
                { applyFilters(SHOW_MENU_FILTER, true, this) ?
                    <Fragment>
                        <Menu {...this.props}></Menu>
                        <MenuClose></MenuClose>
                    </Fragment>
                    : ''}
                <div className={"pos-body-wrapper container-" + containerClass}>
                    {React.createElement(this.props.page.component, this.props)}
                    {this.showCart()}
                </div>
            </Fragment>
        );

    }
}

export default Body;