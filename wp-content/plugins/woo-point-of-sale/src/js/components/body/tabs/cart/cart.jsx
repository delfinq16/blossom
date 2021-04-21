import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProduct from './products/list.jsx';
import CartTotal from './total/total.jsx';

import './less/cart.less';
import { addToCart} from '../../../../actions/cart';
import { translation } from '../../../../translation.js';
import { Link } from 'react-router-dom';
import { applyFilters } from '@wordpress/hooks';

import wkwcpos_variable from '../../../../config';
export const COUNTER_MODIFY_CART_ACTIONS = 'wkwcpos_modify_cart_actions';
export const CART_IS_MODIFICATION_ALLOWED = 'wkwcpos_cart_is_modification_allowed';
export const UPDATE_KEY_VALUE_AND_QUANTITY = 'wkwcpos_update_key_value_and_quantity';
export const UPDATE_VIRTUAL_PRODUCT_DETAILS = 'wkwcpos_update_virtual_product_details'


class Cart extends Component {

    constructor(props) {

        super(props);
        this.handleBarcodeLiClick = this.handleBarcodeLiClick.bind(this);
        this.handleCustomClick = this.handleCustomClick.bind(this);
    }

    handleCustomClick(event){

        const { dispatch } = this.props;
        let current_cart = this.props.current_cart;
        let tax = this.props.tax.list;
        var error = '';
        jQuery.confirm({
            title: translation.add_product_add,
            content:'<div class= custom-product> <div class="form-group"><label>'+translation.add_product_name+'</label><input type="text" id="pro-name"  placeholder="'+translation.add_product_name+'" class="form-control" autofocus ></div><div class="form-group"><label>'+translation.add_product_price+'</label><input type="text" id="pro-price" placeholder="'+translation.add_product_price+'" class="form-control"></div></div>',
            buttons: {

                apply : {
                    text: translation.add_text,
                    btnClass: 'btn-red',
                    action: function() {
                        var pro_name = this.$content.find('input#pro-name').val().trim();
                            var pro_price = this.$content.find('input#pro-price').val().trim();

                            if(pro_name.length < 3){
                            jQuery.alert({
                            content: translation.validate_product_name_len,
                            type: 'red'
                            });
                            return false;
                        }
                        else if (pro_price.length == '') {
                                jQuery.alert({
                                    content: translation.validate_product_price,
                                    type: 'red'
                                });
                                return false;
                            }
                        else if(isNaN(pro_price.trim()) || parseFloat(pro_price) < 0){
                            jQuery.alert({
                            content: translation.validate_product_price,
                            type: 'red'
                            });
                            return false;
                        }
                        else{

                            let product_tax = 0;

                            if(apif_script.logged_in.tax_display_cart == 'excl'){

                                if(apif_script.logged_in.tax_type == 'yes'){
                        
                                    let tax_rate = 0;
                            
                                    jQuery.each(tax, (i, val) => {
                            
                                        if (val.rate) {
                                            tax_rate = tax_rate + val.rate
                                        }
                            
                                    });
                            
                                    var real_price  = ((pro_price * 100) / (100 + tax_rate))
                            
                                    product_tax =  pro_price - real_price;
                            
                                    pro_price = real_price;
                                    
                                }else{
    
                                    jQuery.each(tax, (i, val) => {
    
                                        if (val.rate) {
                                            product_tax = product_tax + ( pro_price * val.rate / 100 );
                                        }
        
                                    });
                                }

                            }else{

                                if(apif_script.logged_in.tax_type != 'yes'){

                                    jQuery.each(tax, (i, val) => {
        
                                        if (val.rate) {
                                            product_tax = product_tax + ( pro_price * val.rate / 100 );
                                        }
        
                                    });

                                    pro_price = parseFloat(parseFloat(pro_price) + parseFloat(product_tax));

                                    product_tax = 0;
                                }
                            }

                            var virtual_product = {
                                product_name:pro_name,
                                product_price:pro_price,
                                product_tax: product_tax,
                            };

                            virtual_product = applyFilters(UPDATE_VIRTUAL_PRODUCT_DETAILS, virtual_product, this.props)

                            dispatch( addToCart(current_cart, virtual_product, false) );

                        }

                    }

                },

                cancel : function() {


                }

            }

        });

    }

       handleBarcodeLiClick(event) {
           var quantity = 1;
           const {
               dispatch
           } = this.props;
           let current_cart = this.props.current_cart;
           var props = this.props


           jQuery('#bar-code').val('');

           jQuery.confirm({
               title: translation.barcode_enter_text,
               content: '<div> <div class="form-group"><input autofocus type="text" id="bar-code" placeholder="' + translation.barcode_enter_text + '" class="form-control"></div></div>',
               onContentReady: function () {

                   var self = this;

                   jQuery("#bar-code").on('keyup', function (key) {
                       if (key.which == 13) {

                           var product = jQuery(this).val();

                           let str = product.toString();

                           var barcode_data = applyFilters(UPDATE_KEY_VALUE_AND_QUANTITY, {
                               key: str,
                               qty: quantity
                           }, props)

                           str = barcode_data.key

                           quantity = barcode_data.qty

                           var byBarcode = '';

                           if (str.startsWith("sku")) {
                               byBarcode = 'sku'

                               str = str.substring(3, str.length);
                           } else {
                               byBarcode = 'id'

                               str = str.substring(2, str.length);
                           }

                           dispatch(addToCart(current_cart, str, byBarcode, [], '', quantity));

                           jQuery(this).val('');

                       }

                   })

               },
               buttons: {
                   cancel: function () {

                   }
               }
           });
           setTimeout(function () {
               jQuery('#bar-code').focus();
           }, 500);

       }

    render() {
        let cart = Array.from(this.props.cart);
        let current_cart = this.props.current_cart;
        var cart_products = '';
        let currency = this.props.currency;
        var holds = this.props.holds;
        var custom_var = Array.from(currency.default);

        var hold_count = holds.list.length;

        var currency_symbol = custom_var.map( (element) => {
            return element.symbol;
        });

        if( cart.length > 0 ) {

            var cart_products_filtered = cart.filter((element) => {

                if( element.cart_id == current_cart ) {
    
                    if( element.cart.length > 0 ){
                        
                        return element;
                    }
    
                }
    
            }).map((elm) => { 
                return elm.cart;                
            });
            
            if(cart_products_filtered.length > 0 ) {

                cart_products = cart_products_filtered[0].map((response, i) => {
                    return(<CartProduct key={i} currency_symbol={currency_symbol} current_cart={current_cart} cartProducts={response} {...this.props}></CartProduct>);
    
                });
            }

        }

        return (

            <div className="pos-tabContent pos-cart-process pos-right-wrap" id="pos-cart">

                <div className="pos-cart-section">

                    <div className="cart-details">

                        <div className="cart-table-head">

                            <h3>{translation.cart_detail}</h3>

                            {applyFilters(CART_IS_MODIFICATION_ALLOWED, false, this.props)
                            ?
                                applyFilters(COUNTER_MODIFY_CART_ACTIONS, '', this.props, translation)
                            :
                                <React.Fragment>
                                    <Link className="show-hold-cart button" to={wkwcpos_variable.HOME_URL + '/pos/orders/tab/hold'}><i className="fa fa-pause"></i><span className="hold-count">{hold_count > 0 ? hold_count : ''}</span></Link>
                                    <button className="barcode-scan" onClick={this.handleBarcodeLiClick}><i className="fa fa-barcode" ></i></button>
                                    <button className="add-product" onClick={this.handleCustomClick}><i className="fa fa-plus"></i></button>
                                </React.Fragment> 
                            }

                        </div>

                        { 
                            cart_products_filtered != undefined && cart_products_filtered.length > 0 ?

                            <table className="cart-table">
                                <tbody>{cart_products}</tbody>
                            </table>
                            : ''
                        }


                    </div>

                    <CartTotal {...this.props}></CartTotal>

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({
    cart:state.cart.list,
    current_cart:state.current_cart,
    tax:state.tax,
    currency:state.currency,
    holds:state.hold,
    products:state.products,
});

export default connect( mapStateToProps)(Cart);
