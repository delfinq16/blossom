import React, { Component } from 'react'; 
import { translation } from '../../../../../../translation';
import ReactHtmlParser from 'react-html-parser';
import { applyFilters } from '@wordpress/hooks';
export const ADD_DATA_AFTER_TAX_IN_SUMMARY = 'wkwc_add_data_after_tax_in_summary';
export const MODIFY_ORDER_DETAILS = "wkwc_modify_order_detials"

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
            var coupon_text = translation.coupon_text;
            var cash_payment_text = translation.cash_text;
            var card_payment_text = translation.card_text;
            var refund_text = translation.refund_text;

            if( this.state.order) {
                var order = this.state.order;
                order = order.order;
            } else {

                var order = this.props.order;

            }
            order = applyFilters( MODIFY_ORDER_DETAILS, order );
            var paymentMode = order.payment_title;

            var cashPay_text = '';

            var cardPay_text = '';

            if( order.cashPay > 0 ) {

                cashPay_text =  <li><h4>{cash_payment_text}</h4><span dangerouslySetInnerHTML={{__html:order.cashPay_html}}></span></li>

            }

            if( order.cardPay > 0 ) {

                cardPay_text =  <li><h4>{paymentMode}</h4><span dangerouslySetInnerHTML={{__html:order.cardPay_html}}></span></li>

            }

            var order_tax_lines = order.tax_lines;

            if( order_tax_lines.length > 0 ) {

                var oTax = order_tax_lines.map( (tax) => {
                    
                    return <li key={tax.id}><h4>{tax_text}({tax.title})</h4><span dangerouslySetInnerHTML={{__html:tax.total}}></span></li>
                });

            } else {

                var oTax = '';
            }

            var order_refund = ''

            if(order.total_refund != undefined && order.total_refund != '0'){
                order_refund = <ul className="order-refund">
                                    <li>
                                        <h4 className="refund-heading">{refund_text}</h4>
                                        <span>{ReactHtmlParser(order.currency)}{order.total_refund}</span>
                                    </li> 
                                </ul>
            
            }
            var coupons = order.coupons;
 
            if( coupons ) {

                var coupon_html = [];

                jQuery.each( coupons, ( i, coupon) => {
                    
                    coupon_html.push(
                        <div key={i}>
                            <h4>{coupon_text}<span>({i})</span></h4>
                            <div className="coupon-amt">
                                <span dangerouslySetInnerHTML={{__html:coupon}}></span>
                            </div>
                        </div>
                    );
                });

            } else {

                var coupon_html = '';

            } 
            var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_SUMMARY, '', order);

            let products = order.products;

            const orderproducts = products.map( (pro, i) => {
                
                return(

                    <li key={i}>
                        <div className="order-product-wrap">
                            <h4>{pro.product_name}</h4>
                            <strong>{pro.product_meta_data ? Object.keys(pro.product_meta_data): "" }</strong> 
                            <p className="order-product-meta"> {pro.product_meta_data ?Object.values(pro.product_meta_data) : ""}</p>
                            <span className="order-product-quantity">{pro.qty} {unit_text}</span>
                        </div>
                        <span dangerouslySetInnerHTML={{__html: pro.product_total_price }}></span>
                    </li>
                );  
            }); 

            return(

                <div className="pos-sale-summary">

                    <div className="sale-summary-head">
                    
                        <h3> {order_summary} </h3>

                    </div>

                    <div className="sale-summary-products">

                        <ul>{orderproducts}</ul>

                    </div>

                    <div className="sale-summary-calculate-subtotal">
                        <ul>
                            <li><h4>{subtotal_text}</h4> <span dangerouslySetInnerHTML={{__html: order.cart_subtotal }}></span></li>
                            {oTax}
                            <li><h4>{discount_text}</h4><span dangerouslySetInnerHTML={{__html:order.discount}}></span></li>
                            {customAfterTax}  
                            <li> 
                                {coupon_html}
                            </li>   
                        </ul>

                    </div>
                    <div className="sale-summary-calculate-total">
                        <ul>
                            <li>
                                <h4>{total_text} </h4><span dangerouslySetInnerHTML={{__html:order.order_html}}></span>
                            </li>
                            {cashPay_text}
                            {cardPay_text}

                        </ul>
                        <ul className="order-balance">

                            <li>
                                <h4>{balance_text} </h4>
                                <span dangerouslySetInnerHTML={{__html: order.balance }}></span>
                            </li>
                            
                        </ul>
                        {order_refund}   
                    </div>

                </div>
            )
           

        }
}
  
export default OrderSummary;