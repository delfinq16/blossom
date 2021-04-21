import React, { Component } from 'react'; 
import { translation } from '../../../../../../translation';
import { applyFilters } from '@wordpress/hooks';
import { wkwcpos_price } from '../../../../../../currency-format';
export const ADD_DATA_AFTER_TAX_IN_SUMMARY = 'wkwc_add_data_after_tax_in_summary'

class OrderSummary extends Component {

    constructor(props) {
        
        super(props); 

        this.state = {

            order : '',
        }

    }

    componentWillReceiveProps(newOrder) {

        this.setState({
            order: newOrder
        })
    }
 

    render() { 

            var unit_text = translation.unit_text;
            var tax_text = translation.tax_text;
            var order_summary = translation.order_summary;
            var subtotal_text = translation.subtotal_text;
            var total_text = translation.total_text;
            var discount_text = translation.discount_text;
            var balance_text = translation.balance_text;
            var cash_payment_text = translation.cash_text;
            var card_payment_text = translation.card_text;

            if( this.state.order) {

                var order = this.state.order;
                
                order = order.order;
                
            } else {

                var order = this.props.order;

            }

            var paymentMode = order.payment_title;

            let currency = order.currency;
            
            let currency_code = currency.symbol;

            var currency_position = 'L';
            
            var discount = order.discount;

            var order_tax_lines = order.tax_lines;

            if( order_tax_lines.length == undefined ) {

                order_tax_lines = Object.keys(order_tax_lines).map(function(key) {
                    order_tax_lines[key].id = Number(key);
                    return [order_tax_lines[key]];
                });
                order_tax_lines = order_tax_lines[0];
            }

            if( order_tax_lines.length > 0 ) {

                var oTax = order_tax_lines.map( (tax) => {

                    return <li key={tax.id}><h4>{tax_text}({tax.label})</h4><span>{wkwcpos_price(parseFloat(tax.rate * order.cart_subtotal / 100), currency_code)}</span></li>
                });

            } else {

                var oTax = '';
            }

            let products = order.products;


            const orderproducts = products.map( (pro, i) => {

                var product_total = wkwcpos_price(pro.uf_total, currency_code);

                return(

                    <li key={i}>
                        <div className="order-product-wrap">
                            <h4>{pro.name}</h4>
                            <strong>{pro.product_meta_data ? Object.keys(pro.product_meta_data) : ""}</strong>
                            <p className="order-product-meta"> {pro.product_meta_data ? Object.values(pro.product_meta_data) : ""}</p>
                            <span className="order-product-quantity">{pro.quantity} {unit_text}</span>
                        </div>
                        <span dangerouslySetInnerHTML={{__html: product_total }}></span>
                    </li>
                );  
            }); 

            var balance =  order.tendered - order.order_html ;
            
            var subtotal = wkwcpos_price(order.cart_subtotal, currency_code);
            
            var balance = wkwcpos_price(parseFloat( balance ), currency_code);
            
            if( Object.keys(discount).length > 0  ) {

                if(discount.type == 'fixed' ) {

                    var totaldiscount = wkwcpos_price(parseFloat(discount.amount), currency_code);

                } else {

                    // var totaldiscount = parseFloat(discount.amount).toFixed(2) + '%';
                    var totaldiscount = wkwcpos_price(parseFloat(discount.amount * order.cart_subtotal / 100), currency_code);

                }

            } else {

                var totaldiscount = wkwcpos_price(parseFloat(0), currency_code);

            }
            
            var cart_total = wkwcpos_price(parseFloat(order.order_html), currency_code);

            var cashPay = wkwcpos_price(parseFloat(order.cashPay), currency_code);

            var cardPay = wkwcpos_price(parseFloat(order.cardPay), currency_code);
            var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_SUMMARY, '', order);

            return(

                <div className="pos-sale-summary">

                    <div className="sale-summary-head">
                    
                        <h3> {order_summary}</h3>

                    </div>

                    <div className="sale-summary-products">

                        <ul>{orderproducts}</ul>

                    </div>

                    <div className="sale-summary-calculate-subtotal">
                        <ul>
                            <li><h4>{subtotal_text}</h4> <span dangerouslySetInnerHTML={{__html: subtotal }}></span></li>
                            {oTax}
                            <li><h4>{discount_text}</h4><span>{totaldiscount}</span></li>
                            
                        {customAfterTax}
                        </ul>
                    </div>
                    <div className="sale-summary-calculate-total">
                        <ul>
                            <li>
                                <h4>{total_text} </h4><span dangerouslySetInnerHTML={{__html: cart_total }}></span>
                            </li>
                            <li>
                                <h4>{order.cashPay > 0 ? cash_payment_text : "" }</h4>
                                <span> {order.cashPay > 0 ? cashPay : ""}</span>
                            </li>
                            <li>
                                <h4>{order.cardPay > 0 ? paymentMode : "" }</h4>
                                <span>{order.cardPay > 0 ? cardPay: ""}</span>
                            </li>
                            
                        </ul>
                        <ul className="order-balance">

                            <li>
                                <h4>{balance_text} </h4>
                                <span dangerouslySetInnerHTML={{__html: balance }}></span>
                            </li>
                            
                        </ul>
                    </div>

                </div>
            )
           

        }
}
  
export default OrderSummary;