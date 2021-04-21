import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewCustomer from './add/add.jsx';
import { updateDefaultCustomer, DeleteCustomer, loadAllCustomers } from '../../../../../actions/customers';
import { ApplyCustomerCoupon, RemoveCoupon } from '../../../../../actions/coupon';
import { translation } from '../../../../../translation.js';
import wkwcpos_variable from '../../../../../config';
import { applyFilters } from '@wordpress/hooks';
export const ADD_CUSTOM_FEILD_IN_DEFAULT_AFTER_EMAIL = 'wkwc_add_custom_field_in_default_after_email'

class DefaultCustomer extends Component {

    constructor(props) {

        super(props); 
        
        this.state = {
            get : ''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    componentWillMount(){
        
        this.setState({
            get: ''
        });

    }

    componentWillReceiveProps(prop){

        this.setState({
            get: ''
        }); 
        
    }

    handleAddClick() {

        this.setState({
            get: 'new'
        }); 
        
    }

    handleDeleteClick(e) {

        const { dispatch } = this.props; 

        let customers = this.props.customers;
        let history = this.props.history;
        
        var online = navigator.onLine;

        if (!online) {

			jQuery.confirm({
				title: translation.warning_text,
				content: translation.error_offline_customer,
				backgroundDismiss: function(){
					return 'buttonName'; // the button will handle it
				},
				Okay: {
					text: translation.okay_text,
					btnClass: 'btn-red'
				}
			});

			return;

		} else {

            if (jQuery(e.target).attr("id")) {

                var customer_id = jQuery(e.target).attr("id");

                let cust = customers.filter( obj => { 

                    if( customer_id == obj.id && obj.is_true == false && obj.default_customer != 1 ) {

                        return obj;
                    }

                } );

                if(cust.length > 0 ) {

                    jQuery.confirm({
                        title: translation.delete_customer_title_text,
                        content: translation.text_cust_delete,
                        buttons: {
                            delete: {
                                text: translation.delete_customer_title_text,
                                btnClass: 'btn-red',
                                action: function () {

                                    dispatch(DeleteCustomer(cust[0].id)).then((response) => {

                                        jQuery.confirm({
                                            title: translation.confirmation_text,
                                            icon: 'fa fa-question-circle',
                                            animation: 'scale',
                                            closeAnimation: 'scale',
                                            opacity: 0.5,
                                            content: translation.customer_delete_success_text,
                                            buttons: {
                                                'confirm': {
                                                    text: translation.okay_text,
                                                    btnClass: 'btn-blue',
                                                    action: function () {

                                                        history.push( {
                                                            pathname: wkwcpos_variable.HOME_URL + '/pos'
                                                        } );

                                                    },
                                                }
                                            }
                                        });
                                    
                                    });

                                }
                            },
                            later: function () {
                                // do nothing.
                            }
                        }

                    }); 

                }

            }

        }

    }

    handleEditClick(e) {

        this.setState({
            get: 'edit'
        });
    
    }

    handleClick(e) {

        const { dispatch } = this.props; 

        let customers = this.props.customers;

        let history = this.props.history;
        
        const cart = this.props.cart;

        const temp_code = cart.list[0] != undefined ? cart.list[0].cart_id : 0;

        let taxes = this.props.tax;
        
        if (jQuery(e.target).attr("id")) {
            
            var customer_id = jQuery(e.target).attr("id");

            const defaultCustomer = customers.filter( obj => {
                return obj.is_true == true;
            } );

            let defaultCustomerCouponCode = null;

            if( defaultCustomer.length > 0 ) {

                defaultCustomerCouponCode = defaultCustomer[0].coupons[0] != undefined ? defaultCustomer[0].coupons[0].code : null;
            }

            var customer = customers.filter( obj => {
                return customer_id == obj.id;
            } );

            dispatch(updateDefaultCustomer(customer, customers));

            const coupons = customer[0].coupons;
    
            var coup_tax = 0;

            var customerCouperCode = null;
            
            if( coupons != undefined && coupons.length > 0 && coupons[0] ) {

                taxes = Object.values(taxes)
                taxes.forEach(function (tax) {
                    if (coupons[0].type == 'fixed_cart') {
                        coup_tax = coupons[0].price - ((coupons[0].price * tax.rate) / (tax.rate + 1));
                    }
                });
                coupons[0].coup_tax = coup_tax;

                customerCouperCode = coupons[0];
                
            }

            if( defaultCustomer.length > 0 && defaultCustomer[0].id != customer[0].id ) {

                dispatch( ApplyCustomerCoupon( customerCouperCode ) ).then( (response) => {
                    dispatch( RemoveCoupon( temp_code, defaultCustomerCouponCode ) )
                } ).catch((error) => {
                    console.log( error )
                });

            }

            jQuery.confirm({
                title: translation.confirmation_text,
                icon: 'fa fa-question-circle',
                animation: 'scale',
                closeAnimation: 'scale',
                opacity: 0.5,
                content: translation.customer_update_success_text,
                buttons: {
                    'confirm': {
                        text: translation.okay_text,
                        btnClass: 'btn-blue',
                        action: function () {

                            history.push( {
                                pathname: wkwcpos_variable.HOME_URL + '/pos',
                            } );

                        },
                    }
                }
            }); 

        } 
        
    }

    render() {

        let def = this.props.defcustomer;
        let c_name = (def.last_name != 'null' && def.last_name != null)?def.first_name + ' ' + def.last_name : def.first_name; 
        var custom = applyFilters(ADD_CUSTOM_FEILD_IN_DEFAULT_AFTER_EMAIL, '', def)

        var edit_text = translation.edit_text;
        var delete_text = translation.delete_text;
        var add_customer_text = translation.add_customer_text;
        var change_customer_title_text = translation.change_customer_title_text;

        if( navigator.onLine == false && ( this.state.get == 'new' || this.state.get == 'edit' ) ) {

            jQuery.confirm({
				title: translation.warning_text,
				content: translation.error_offline_customer,
				backgroundDismiss: function(){
					return 'buttonName'; // the button will handle it
				},
				Okay: {
					text: translation.okay_text,
					btnClass: 'btn-red'
				}
			});

            let customers = this.props.customers;

            let myCustomer = customers.filter( (cust) => {
                return ( cust.is_true && cust.id == def.id ) || ( cust.id == def.id && cust.default_customer == 1 );
            });

            return (
                    
                <div>  

                    <div className="pos-vertical-center">
                        <img src={def.avatar_url} alt={c_name} />
                        <h3 className="customer-name">{c_name}</h3>
                        <h3 className="customer-phone">{def.billing.phone}</h3>
                        <h3 className="customer-email">{def.email}</h3>
                        { def.billing.address_1 &&
                            <h3 className="customer-address">{def.billing.address_1}</h3>
                        }
                        {custom}
                    </div>


                    <div className="pos-customer-action">
                        <button type="button" className="change-customer" id={def.id} onClick={((e) => this.handleClick(e))} >{change_customer_title_text}</button>
                        <div className="update-customer">
                            <button type="button" className="edit-pos-customer" id={def.id} onClick={((e) => this.handleEditClick(e))}><i className="fa fa-edit"></i>{edit_text}</button>
                            <button type="button" className={"delete-pos-customer " + (myCustomer.length > 0 ? 'faded-delete' : '')} id={def.id} onClick={((e) => this.handleDeleteClick(e))}><i className="fa fa-trash"></i>{delete_text}</button>
                        </div>
                    </div>
                    
                    <div className="pos-customer-add">
                        <button type="button" className="add-new-pos-customer" onClick={this.handleAddClick}>
                            <span className="fa fa-user-plus"></span>{add_customer_text}
                        </button>
                    </div> 
    
                </div>
            );

        } else if( this.state.get == 'new' ) {

            return <NewCustomer></NewCustomer>;

        } else if( this.state.get == 'edit' ) {

            return <NewCustomer def={def}></NewCustomer>;
        
        } else {

            let customers = this.props.customers;

            let myCustomer = customers.filter( (cust) => {
                return ( cust.is_true && cust.id == def.id ) || ( cust.id == def.id && cust.default_customer == 1 );
            });

            return (
                    
                <div>  

                    <div className="pos-vertical-center">
                        <img src={def.avatar_url} alt={c_name} />
                        <h3 className="customer-name">{c_name}</h3>
                        <h3 className="customer-phone">{def.billing.phone}</h3>
                        <h3 className="customer-email">{def.email}</h3>
                        { def.billing.address_1 &&
                            <h3 className="customer-address">{def.billing.address_1}</h3>
                        }
                        {custom}
                    </div>

                    <div className="pos-customer-action">
                        <button type="button" className="change-customer" id={def.id} onClick={((e) => this.handleClick(e))} >{change_customer_title_text}</button>
                        <div className="update-customer">
                            <button type="button" className="edit-pos-customer" id={def.id} onClick={((e) => this.handleEditClick(e))}><i className="fa fa-edit"></i>{edit_text}</button>
                            <button type="button" className={"delete-pos-customer " + (myCustomer.length > 0 ? 'faded-delete' : '')} id={def.id} onClick={((e) => this.handleDeleteClick(e))}><i className="fa fa-trash"></i>{delete_text}</button>
                        </div>
                    </div>
                    
                    <div className="pos-customer-add">
                        <button type="button" className="add-new-pos-customer" onClick={this.handleAddClick}>
                            <span className="fa fa-user-plus"></span>{add_customer_text}
                        </button>
                    </div> 
    
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    tax:state.tax.list,
    cart:state.cart,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ updateDefaultCustomer, DeleteCustomer, loadAllCustomers, ApplyCustomerCoupon, RemoveCoupon }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(DefaultCustomer);  
