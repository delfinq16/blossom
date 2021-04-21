import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import ReactDOM from 'react-dom';
import { translation } from '../../../../../../translation';
import ReactHtmlParser from 'react-html-parser';
import { applyFilters } from '@wordpress/hooks';
import { wkwcpos_price } from '../../../../../../currency-format';
export const ADD_CUSTOM_ORDER_DATA_BELOW_DATE = 'wkwcpos_add_custom_order_data_below_date';
export const ADD_DATA_AFTER_TAX_IN_RECEIPT = 'wkwc_add_data_after_tax_in_receipt';
export const ADD_DATA_AFTER_BALANCE_IN_RECEIPT = 'wkwc_add_data_after_balance_in_receipt';


class OrderShort extends Component {

    constructor(props) {
        
        super(props); 

        this.GetHtml = this.GetHtml.bind(this);
        this.handlePrintClick = this.handlePrintClick.bind(this);
        this.setupInvoiceSize = this.setupInvoiceSize.bind(this);
        this.openPrintWindow = this.openPrintWindow.bind(this);

    }

    handlePrintClick(e, order_id) {
        
        var order = this.props.order; 
        
        if( order.order_id == order_id ) {

            var invoiceHtml = this.GetHtml(order);
            var styles = this.setupInvoiceSize();

            ReactDOM.render( 
                invoiceHtml, 
                document.getElementById('invoice-body')  
            );
            
            this.openPrintWindow(jQuery("#invoice-print").html(), styles);
        }

    }

    openPrintWindow(printContents, style) {

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                
            var printWindow = window.open("", "PRINT", "height=400,width=600");
            printWindow.document.write("<link media='all' href='" + apif_script.assets + "/css/min/invoice.min.css?ver=1.0.7' type='text/css' rel='stylesheet'>");
            printWindow.document.write("<html><head><title></title>" + style);

            printWindow.document.write("</head><body>");
            printWindow.document.write(printContents);
            printWindow.document.write("</body></html>");
            printWindow.document.close(); // necessary for IE >= 10
            printWindow.focus(); // necessary for IE >= 10*-/

            printWindow.addEventListener("load", function () {
                
                setTimeout(() => {
                    printWindow.print();
                }, 500);
            }, true);

        }else{

            var frame1 = document.createElement('iframe');
    
            frame1.name = "frame1";
        
            document.body.appendChild(frame1);
        
            var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

            frameDoc.document.open();
            
            frameDoc.document.write("<link media='all' href='" + apif_script.assets + "/css/min/invoice.min.css?ver=1.0.7' type='text/css' rel='stylesheet'>");
            
            frameDoc.document.write("<html><head><title></title>" + style);

            frameDoc.document.write("</head><body>");
            
            frameDoc.document.write(printContents);
            
            frameDoc.document.write("</body></html>");
            
            frameDoc.document.close(); // necessary for IE >= 10
            
            setTimeout(() => {
                
                window.frames["frame1"].focus();
                
                window.frames["frame1"].print();

                document.body.removeChild(frame1);

            }, 100);
        }

        return true;
	}

    setupInvoiceSize( ) { 

        var printer = this.props.printers;
        
        var sprinter = printer.default;

		var style_rules = [];

		if( sprinter ) {

			switch (sprinter) {

				case 'a3': 
					style_rules.push(" @page { size: A3;margin: 20mm;} ");
					var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
			 		break;

				case 'a4': 
					style_rules.push(" @page { size: A4;margin: 20mm; } ");
					var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
				 	break;

				case 'a5': 
					style_rules.push(" @page { size: A5; margin: 10mm;} ");
					var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
					break;

				case 'a6': 
					style_rules.push(" @page { size: A6; margin: 10mm;} ");
					var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
					break;

				case 'T88V': 
					style_rules.push(" @page {size: 58mm 120mm; }  ");
					var style = '<style type="text/css">' + '.invoice-head, .invoice-body, .invoice-footer{ width:70mm;}' + style_rules.join("\n") + "</style>";
                     jQuery( ".invoice-head, .invoice-body, .invoice-footer" ).css("font-size","14px;");
					break;
				default:
					break;

			}

			return style;
		}

	}    


    GetHtml( order ) {

        var paymentMode = order.payment_title;

        let products = order.products;
        let currency = order.currency;
        var tax_text = translation.tax_text;

        let currency_code = currency.symbol;

        let customers = Array.from(this.props.customers);
        
        let customer_id = order.email;

        let customer = customers.filter( (cust) => {

            return cust.id == customer_id;
        });

        customer = customer[0];
        
        let date = new Date(order.order_date).toDateString();
            
        date = date.split(' ').slice(0, 4).join(' ');

        var order_tax_lines = order.tax_lines;
            
        let discount = order.discount;
            
        if( order_tax_lines.length > 0 ) {

            var oTax = order_tax_lines.map( (tax) => {
                            
                return <tr key={tax.id}><td>&nbsp;</td><td>&nbsp;</td><td className="sub-total">{tax_text}({tax.label})</td><td><span>{ wkwcpos_price(parseFloat(tax.rate * order.cart_subtotal / 100), currency_code)}</span></td></tr>
            });

        } else {

            var oTax = '';
        }

        const orderproducts = products.map( (pro, i) => {
            var product_total = wkwcpos_price(pro.uf_total, currency_code);

            return (

                <tr className="border_bottom" key={i} >
                    <td className="product-name">{pro.name}
                       <br/>
                       <p className="order-product-meta-heading">{pro.product_meta_data ? Object.keys(pro.product_meta_data) : ""}</p>
                        <p className="order-product-meta"> {pro.product_meta_data ? Object.values(pro.product_meta_data) : ""}</p>
                    </td>
                    <td className="product-quantity">{pro.quantity}</td>
                    <td className="product-unit-price">
                        <span dangerouslySetInnerHTML={{ __html: pro.product_unit_price }}></span>
                    </td>
                    <td className="product-total-price">
                        <span dangerouslySetInnerHTML={{ __html: product_total }}></span>
                    </td>
                </tr>
            )  
        });


        var balance =  order.tendered - order.order_html ;
            
        var subtotal = wkwcpos_price(order.cart_subtotal, currency_code);
        
        var balance = wkwcpos_price(parseFloat(balance), currency_code);
        
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

        var customData = applyFilters(ADD_CUSTOM_ORDER_DATA_BELOW_DATE, '', order);
        var order_text = translation.order_text;
        var date_text = translation.date;
        var subtotal_text = translation.subtotal_text;
        var total_text = translation.total_text;
        var discount_text = translation.discount_text;
        var balance_text = translation.balance_text;
        var customer_text = translation.customer_text;
        var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT, '', order);

        var customAfterBalance = applyFilters(ADD_DATA_AFTER_BALANCE_IN_RECEIPT, '', order);
        
        var cash_payment_text = translation.cash_payment_title;
        return (<div>

            <div className="pos-order-short">

                <div className="pos-order-sect">

                    <p>{order_text} - {order.order_id}</p>

                    <p className="date">{date_text}: {date}</p>
                   
                </div>
                <div className="pos-sumarry-customer">
                    <p className="customer-name">{customer_text}</p>
                    <p className="customer-name">{order.billing.first_name} {order.billing.last_name}</p>
                    <p className="custom-data">{customData}</p>
                </div>

            </div>

            <div className="pos-sale-summary">
                <div className="sale-summary-products">
                    <table className="order-product-wrap">
                        <thead className="border_bottom">
                            <tr>
                                <th className="product-name">
                                    {translation.product_name_text}
                                                </th>
                                <th className="product-quantity">
                                    {translation.quantity_text}
                                                </th>
                                <th className="product-unit-price">
                                    {translation.unit_price_text}
                                                </th>
                                <th className="product-total-price">
                                    {translation.total_price_text}
                                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderproducts}

                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className="sub-total">{subtotal_text}</td>
                                <td dangerouslySetInnerHTML={{ __html: subtotal }}></td>
                            </tr>
                            {oTax}
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className="sub-total">{discount_text}</td>
                                <td><span>{totaldiscount}</span></td>
                            </tr>
                            {customAfterTax}
                        </tbody>
                    </table>
                </div>
                
                    <div className="sale-summary-calculate-total">
                        <ul>
                            <li>
                                <h4>{total_text}</h4><span dangerouslySetInnerHTML={{__html: cart_total }}></span>
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
                        {customAfterBalance}
                    </div>

                </div>

        </div>);
        
    }
 

    render() { 

            let order = this.props.order;
            
            let customers = Array.from(this.props.customers);
          
            let customer_id = order.email;

            let customer = customers.filter( (cust) => {

                    return cust.id == customer_id;
            });

            customer = customer[0];  

            let date = new Date(order.order_date).toDateString();
            
            date = date.split(' ').slice(0, 4).join(' ');
            

            var order_heading_text = translation.order_heading_text;
            var order_date_heading_text = translation.order_date_heading_text;
            var order_note_text = translation.order_note_text;
            var customer_text = translation.customer_text;
            var printInvoice_text = translation.printInvoice_text;

            return(

                <div className="pos-order-short">
                    
                    <div className="pos-order-sect">

                        <h3>{order_heading_text}</h3>

                        <h2>{order.order_id}</h2>
                        
                        <h3>{order_date_heading_text}</h3>
                        <h4>
                            <i className="fa fa-calendar"></i>&nbsp;{date}
                        </h4>
                    </div>

                    <div className="pos-sumarry-customer">

                        <h3>{customer_text}</h3>
                        <h2>{ customer != undefined ? customer.billing.first_name + ' ' + customer.billing.last_name : '' }</h2>
                    </div>

                    { order.order_note ? 
                    <div className="order-short-note">
                        
                        <h3>{order_note_text}</h3>

                        <ol>
                        <li>
                                <p>{ ReactHtmlParser(order.order_note) }</p>
                        </li>
                        </ol>
                        
                    </div> : "" }

                    <div className="pos-order-invoice">

                        <button type="button" className="print-invoice" onClick={((e) => this.handlePrintClick(e, order.order_id))}>
                            <i className="fa fa-print"></i>&nbsp;{printInvoice_text}
                        </button>

                    </div>
            
                </div> 
            )


        }
}

const mapStateToProps = state => ({ 
    orders:state.orders.list, 
    customers:state.customers.list,
    printers:state.printers
});

function mapDispatchToProps(dispatch) {
    return Object.assign( { dispatch }, bindActionCreators( { }, dispatch ) );
}

export default connect( mapStateToProps, mapDispatchToProps )(OrderShort);