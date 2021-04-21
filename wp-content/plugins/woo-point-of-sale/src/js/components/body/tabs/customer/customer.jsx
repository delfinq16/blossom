import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadSearchCustomers } from '../../../../actions/customers';
import DefaultCustomer from './default/default.jsx';
import CustomerList from './list/list.jsx';
import './less/customer.less';

import { checkLoginUser } from '../../../../actions/login';
import { getAllCustomersWC } from '../../../../actions/customers';
import { taxAccount } from '../../../../actions/tax';
import { getAllCartProducts } from '../../../../actions/cart';
import { getCurrentCart } from '../../../../actions/currentcart';
import { getAllDiscountWC } from '../../../../actions/discount';
import { getAllCouponWC } from '../../../../actions/coupon';
import { getAllCountriesWC } from '../../../../actions/countries';
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from "react-window";
import { applyFilters } from '@wordpress/hooks';
export const CHANGE_HEIGHT_IN_LIST_AFTER_EMAIL = 'wkwc_change_height_in_list_after_email'

import wkwcpos_variable from '../../../../config';
import { __ } from '@wordpress/i18n';

class Customer extends Component {

    constructor(props) {

        super(props); 

        this.state = {
            cust : '',
            born : '',
        }

        // This binding is necessary to make `this` work in the callback
        this.setSearch = this.setSearch.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
    }

    componentDidMount( ) {

        const { dispatch } = this.props;

        dispatch(getCurrentCart());
        dispatch(checkLoginUser());
        dispatch(getAllCustomersWC());
        dispatch(taxAccount()); 
        dispatch(getAllDiscountWC());
        dispatch(getAllCountriesWC()); 
        dispatch(getAllCouponWC());
        dispatch(getAllCartProducts());

    }

    handleCustomerChange(customer, born) {

        this.setState( { cust: customer, born : born } );
    }

    setSearch(e) { 

        const { dispatch } = this.props; 

        dispatch(loadSearchCustomers(e.target.value, this.props.customers,this.props.default)); 

    }

    render() {

        var customers = Array.from(this.props.sCustomers);

        if( this.state.cust.length > 0 ) {

            var born = this.state.born;

            var defaultCust = Array.from(this.state.cust);

        } else {

            var born = '';

            var defaultCust = Array.from(this.props.default);

        } 

        const default_customer = defaultCust.map( (cust,i) => (
            <DefaultCustomer key={i} customers={this.props.customers} born={born} defcustomer={cust} history={this.props.history}></DefaultCustomer>
        ));

        const empty_customer_list = <span className="no-result"><i className="fa fa-warning"></i>{__("We didn't find any results, Try checking the spelling and search again.", 'wc_pos' )}</span>;

        const Row = ({ index, style }) => (
            <div className={index % 2 ? "wkwcpos-list-item-even" : "wkwcpos-list-item-even"} style={style}>
                <CustomerList key={index} customer={customers[index]} onSelectCustomer={this.handleCustomerChange}  customers={this.props.customers}></CustomerList>
            </div>
        );

        var row_height = applyFilters(CHANGE_HEIGHT_IN_LIST_AFTER_EMAIL, 84);

        return (

            <div className="pos-tabContent pos-customers" id="pos-customer">

                <div className="pos-customer-head">

                    <h3>{__( 'Customers', 'wc_pos' )}</h3>

                    <Link className="float-right" to={ wkwcpos_variable.HOME_URL + '/pos'}><span className="fa fa-close" id="close-customer-list"></span></Link>

                </div>

                <div className="pos-customer-list">

                    <div className="pos-customer-search">

                        <span className="fa fa-search"></span>
                        <input type="search" name="pos-customer-search" id="pos-customer-search" placeholder={__("Search customer by name, email", 'wc_pos' )} onChange={this.setSearch} autoComplete="off" />

                    </div>

                    {
                        customers.length > 0 ?

                        <List
                            className="wkwcpos-list dropdownlist-cust"
                            height={500}
                            itemCount={customers.length}
                            itemSize={row_height}
                        >
                            {Row}
                        </List>

                        : empty_customer_list
                    }

                </div>

                <div className="pos-customer-edit">

                    {default_customer}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    customers:state.customers.list,
    default:state.customers.default,
    searchText:state.customers.s,
    sCustomers:state.customers.scustomer
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ loadSearchCustomers  }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(Customer);  
