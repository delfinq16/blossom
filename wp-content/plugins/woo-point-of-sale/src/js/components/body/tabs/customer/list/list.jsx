import React, { Component } from 'react';  
import { applyFilters } from '@wordpress/hooks';
export const ADD_CUSTOM_FEILD_IN_LIST_AFTER_EMAIL = 'wkwc_add_custom_field_in_list_after_email'

class CustomerList extends Component {

    constructor(props) {

        super(props); 
        
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        let customers = this.props.customers;
        let customer_id = jQuery(event.target).closest("li").attr("id");
        var customer = customers.filter( obj => {
            return customer_id == obj.id;
        } ); 

        this.props.onSelectCustomer(customer, 'born');

    }

    render() {

        let customer = this.props.customer;

        var customData = applyFilters(ADD_CUSTOM_FEILD_IN_LIST_AFTER_EMAIL, '', customer);
        return (        

            <li id={customer.id} onClick={((e) => this.handleClick(e))}>
                <span>{customer.first_name}</span>
                <span><i className="fa fa-envelope"></i>{customer.email}</span>
                { customer.billing.address_1 != '' && 
                    <span><i className="fa fa-map-marker"></i>{customer.billing.address_1}</span>
                }
                {customData}
            </li>
        );
    }
}

export default CustomerList;  
