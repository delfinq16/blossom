import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { translation } from '../../../../../../translation';
import ReactHtmlParser from 'react-html-parser';
import { applyFilters, doAction } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
export const ADD_CUSTOM_ORDER_DATA_BELOW_DATE = 'wkwcpos_add_custom_order_data_below_date';
export const ADD_AFTER_PRINT_INVOICE_BUTTON_FILTER = 'wkwcpos_add_after_print_invoice_button';
export const ADD_DATA_AFTER_TAX_IN_RECEIPT = 'wkwc_add_data_after_tax_in_receipt';
export const ADD_DATA_AFTER_TAX_IN_RECEIPT_CUSTOM = 'wkwcpos_add_data_after_tax_in_receipt_custom';
export const MODIFY_ORDER_DETAILS = "wkwc_modify_order_detials"
export const PERFORM_ACTION_AFTER_INVOICE_PRINT = "wkwcpos_perform_action_after_invoice_print";
export const UPDATE_POS_ORDER_SUB_TOTAL = 'wkwcpos_change_pos_sub_total';
export const wkwcpos_change_pos_total = 'wkwcpos_change_pos_total';
export const WANT_TO_PRINT_RECIEPT = 'wkwcpos_want_to_print_reciept';
export const CHANGE_LISTING_OF_PRODUCTS = 'wkwcpos_change_listing_of_products';
export const ADD_DATA_AFTER_BALANCE_IN_RECEIPT = 'wkwc_add_data_after_balance_in_receipt';

export const CHANGE_IN_ORDER = 'wkwcpos_change_in_orders';
class OrderShort extends Component {

    constructor(props) {

        super(props);

        this.GetHtml = this.GetHtml.bind(this);
        this.getInvoice = this.getInvoice.bind(this);
        this.handlePrintClick = this.handlePrintClick.bind(this);

        this.setupInvoiceSize = this.setupInvoiceSize.bind(this);
        this.openPrintWindow = this.openPrintWindow.bind(this);


        doAction(CHANGE_IN_ORDER, this);

    }

    getInvoice(order = '') {

        let logo_invoice = '${logo_invoice}';
        let outlet_name = '${outlet_name}';
        let order_id = '${order_id}';
        let order_date = '${order_date}';
        let customer_fname = '${customer_fname}';
        let customer_lname = '${customer_lname}';
        let outlet_address = '${outlet_address}';
        let outlet_city = '${outlet_city}';
        let outlet_state = '${outlet_state}';
        let outlet_country = '${outlet_country}';
        let outlet_postcode = '${outlet_postcode}';
        let pos_user_phone = '${pos_user_phone}';
        let pos_user_email = '${pos_user_email}';

        let pro_name = '${pro_name}';
        let pro_quantity = '${pro_quantity}';
        let pro_unit_price = '${pro_unit_price}';
        let pro_total = '${pro_total}';

        let sub_total = '${sub_total}';
        let tax_title = '${tax_title}';
        let order_tax = '${order_tax}';
        let coupon_name = '${coupon_name}';
        let coupon_amount = '${coupon_amount}';
        let order_discount = '${order_discount}';
        let order_total = '${order_total}';
        let cashpay_amount = '${cashpay_amount}';
        let other_payment_text = '${other_payment_text}';
        let otherpay_amount = '${otherpay_amount}';
        let order_change = '${order_change}';

        let cashier_name = '${cashier_name}';

        logo_invoice = apif_script.logged_in.logo_invoice;

        if (apif_script.logged_in.outlet_data) {
            const outlet = apif_script.logged_in.outlet_data;
            outlet_name = outlet.outlet_name;
            outlet_address = outlet.outlet_address;
            outlet_city = outlet.outlet_city;
            outlet_state = outlet.outlet_state;
            outlet_country = outlet.outlet_country;
            outlet_postcode = outlet.outlet_postcode;
        }

        if (apif_script.logged_in.pos_user_phone) {
            pos_user_phone = apif_script.logged_in.pos_user_phone;
        }

        if (order) {
            if (order.order_type == 'online') {
                order_id = '#' + order.order_id;
                order_date = order.order_date;
                customer_fname = order.billing.fname;
                customer_lname = order.billing.lname;
                sub_total = order.cart_subtotal;
                order_discount = order.discount;
                order_total = order.order_html;
                cashpay_amount = order.cashPay > 0 ? order.cashPay_html : 'N/A';
                otherpay_amount = order.cardPay > 0 ? order.cardPay_html : 'N/A';
                other_payment_text = order.cardPay > 0 ? order.payment_title : __('Other Payments', 'wc_pos');
                order_change = order.balance;

                pro_name = '';
                pro_unit_price = '';
                pro_quantity = '';
                pro_total = '';

                order.products.forEach((pro, i) => {

                    pro_name += `<p>${pro.product_name}</p>`;
                    pro_unit_price += `<p>${pro.product_unit_price}</p>`;
                    pro_quantity += `<p>${pro.qty}</p>`;
                    pro_total += `<p>${pro.product_total_price}</p>`;

                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.keys(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }
                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.values(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }

                });

                const order_tax_lines = order.tax_lines;

                tax_title = '';
                order_tax = '';

                if (order_tax_lines.length > 0) {

                    order_tax_lines.forEach((tax) => {
                        tax_title += `<p>${__('Tax', 'wc_pos')}(${tax.title})</p>`;
                        order_tax += `<p>${tax.total}</p>`;
                    });

                }
                var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT_CUSTOM, '', order);
                if (customAfterTax) {

                    order.coupons = customAfterTax;
                }

                const coupons = order.coupons;




                coupon_name = '';
                coupon_amount = '';

                Object.keys(coupons).forEach((i, val) => {
                    coupon_name += `<p>${__('Coupon', 'wc_pos')}(${i})</p>`;
                    if (coupons[i]) {
                        coupon_amount += `<p>${coupons[i]}</p>`;
                    }

                });

            } else if (order.order_type == 'offline') {
                let currency = order.currency;

                let currency_code = currency.symbol;
                order_id = order.order_id;

                let date = new Date(order.order_date).toDateString();
                date = date.split(' ').slice(0, 4).join(' ');
                order_date = date;

                customer_fname = order.billing.first_name;
                customer_lname = order.billing.last_name;
                sub_total = wkwcpos_price(order.cart_subtotal, currency_code);

                let discount = order.discount;

                if (Object.keys(discount).length > 0) {
                    if (discount.type == 'fixed') {
                        var totaldiscount = wkwcpos_price(-parseFloat(discount.amount), currency_code);
                    } else {
                        var totaldiscount = wkwcpos_price(-parseFloat(discount.amount * order.cart_subtotal / 100), currency_code);
                    }
                } else {
                    var totaldiscount = wkwcpos_price(parseFloat(0), currency_code);
                }

                order_discount = totaldiscount;
                order_total = wkwcpos_price(parseFloat(order.order_html), currency_code);
                cashpay_amount = order.cashPay > 0 ? wkwcpos_price(parseFloat(order.cashPay), currency_code) : 'N/A';
                otherpay_amount = order.cardPay > 0 ? wkwcpos_price(parseFloat(order.cardPay), currency_code) : 'N/A';
                other_payment_text = order.cardPay > 0 ? order.payment_title : __('Other Payments', 'wc_pos');

                var balance = order.tendered - order.order_html;
                order_change = wkwcpos_price(parseFloat(balance), currency_code);

                pro_name = '';
                pro_unit_price = '';
                pro_quantity = '';
                pro_total = '';

                let productInlineDiscount = [];

                order.products.forEach((pro, i) => {

                    if (pro.uf < pro.special) {
                        productInlineDiscount.push({
                            slug: pro.slug,
                            discount: (pro.special - pro.uf) * pro.quantity
                        });
                    }

                    pro_name += `<p>${pro.name}</p>`;
                    pro_unit_price += `<p>${wkwcpos_price(pro.uf, currency_code)}</p>`;
                    pro_quantity += `<p>${pro.quantity}</p>`;
                    pro_total += `<p>${wkwcpos_price(pro.uf_total, currency_code)}</p>`;

                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.keys(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }
                    if (pro.product_meta_data) {
                        pro_name += `<p>${Object.values(pro.product_meta_data)}</p>`;
                        pro_unit_price += '<br />';
                        pro_quantity += '<br />';
                        pro_total += '<br />';
                    }

                });

                const order_tax_lines = order.tax_lines;

                if (order_tax_lines.length == undefined) {

                    order_tax_lines = Object.keys(order_tax_lines).map(function (key) {
                        order_tax_lines[key].id = Number(key);
                        return [order_tax_lines[key]];
                    });
                    order_tax_lines = order_tax_lines[0];
                }

                tax_title = '';
                order_tax = '';

                if (order_tax_lines.length > 0) {
                    order_tax_lines.forEach((tax) => {
                        tax_title += `<p>${__('Tax', 'wc_pos')}(${tax.label})</p>`;
                        order_tax += `<p>${wkwcpos_price(parseFloat(tax.rate * order.cart_subtotal / 100), currency_code)}</p>`;
                    });
                }

                coupon_name = '';
                coupon_amount = '';

                if (order.coupons && order.coupons.length > 0) {
                    order.coupons.forEach((coupon) => {
                        coupon_name += `<p>${__('Coupon', 'wc_pos')}(${coupon.code})</p>`;
                        coupon_amount += `<p>${wkwcpos_price(coupon.price, currency_code)}</p>`;
                    });
                }

                if (productInlineDiscount && productInlineDiscount.length > 0) {
                    productInlineDiscount.forEach((product) => {
                        coupon_name += `<p>${__('Coupon', 'wc_pos')}(${product.slug})</p>`;
                        coupon_amount += `<p>${wkwcpos_price(product.discount, currency_code)}</p>`;
                    });
                }
            }

        }

        if (apif_script.logged_in.pos_user) {
            pos_user_email = apif_script.logged_in.pos_user.data.user_email;
            cashier_name = apif_script.logged_in.pos_user.data.display_name;
        }

        let invoiceData = '';

        if (this.props.invoice && this.props.invoice != "0") {
            invoiceData = this.props.invoice;
        } else {

            invoiceData = `

                <style>
                    .wkwcpos-invoice-wrapper {
                        padding: 10px;
                        background-color: #fff;
                        border-radius: 2px;
                        grid-area: second;
                    }
                    .wkwcpos-invoice-wrapper * {
                        padding: 0;
                        margin: 0;
                    }
                    .wkwcpos-invoice-wrapper .invoice-header, .wkwcpos-invoice-wrapper .invoice-footer .footer-details {
                        text-align: center;
                    }
                    .wkwcpos-invoice-wrapper .invoice-header img {
                        width: 50px;
                        margin: 10px 0;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details {
                        width: 100%;
                        display: inline-block;
                    }
                    .wkwcpos-invoice-wrapper .order-details, .wkwcpos-invoice-wrapper .outlet-details {
                        width: 50%;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details .order-details {
                        float: left;
                    }
                    .wkwcpos-invoice-wrapper .invoice-details .outlet-details {
                        float: right;
                        text-align: right;
                    }
                    .wkwcpos-invoice-wrapper .product-details {
                        margin: 15px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table {
                        border-collapse: collapse;
                        width: 100%;
                        text-align: center;
                    }
                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td {
                        padding: 3px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table th, .wkwcpos-invoice-wrapper .product-details table td p {
                        padding: 3px 0;
                    }
                    .wkwcpos-invoice-wrapper .product-details table thead, .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(1) {
                        border-style: dashed;
                        border-width: 3px 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(3) {
                        border-style: dashed;
                        border-width: 0 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(1), .wkwcpos-invoice-wrapper .product-details table tbody:nth-of-type(2) tr:last-child td:nth-last-of-type(2) {
                        border-style: dashed;
                        border-width: 0 0 3px;
                        border-color: #ddd;
                    }
                    .wkwcpos-invoice-wrapper hr {
                        width: 35%;
                        margin: 10px auto 7px;
                        border-style: dashed;
                        border-width: 3px 0;
                        border-top-color: #ddd;
                        border-bottom-color: #fafafa;
                    }
                </style>

                <div class="wkwcpos-invoice-wrapper">

                    <div class="invoice-header wkwcpos-invoice-editable">
                        <p class="wkwcpos-invoice-editable">Tax Invoice/Bill of Supply</p>
                        <img src="${logo_invoice}" class="wkwcpos-invoice-editable" />
                        <h3 class="wkwcpos-invoice-editable">${outlet_name}</h3>
                    </div>

                    <div class="invoice-details">
                        <div class="order-details">
                            <p class="wkwcpos-invoice-editable">Order - ${order_id}</p>
                            <p class="wkwcpos-invoice-editable">Date : ${order_date}</p>
                            <p class="wkwcpos-invoice-editable">Customer : ${customer_fname} ${customer_lname}</p>
                        </div>
                        <div class="outlet-details">
                            <p class="wkwcpos-invoice-editable">${outlet_address}</p>
                            <p class="wkwcpos-invoice-editable">${outlet_city} ${outlet_state}</p>
                            <p class="wkwcpos-invoice-editable">Tel No: ${pos_user_phone}</p>
                        </div>
                    </div>

                    <div class="product-details">
                        <table>
                            <thead>
                                <tr>
                                    <th class="wkwcpos-invoice-editable">Product Name</th>
                                    <th class="wkwcpos-invoice-editable">Unit Price</th>
                                    <th class="wkwcpos-invoice-editable">Quantity</th>
                                    <th class="wkwcpos-invoice-editable">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable">${pro_name}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_unit_price}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_quantity}</td>
                                    <td class="wkwcpos-invoice-editable">${pro_total}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">SubTotal</td>
                                    <td class="wkwcpos-invoice-editable">${sub_total}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${tax_title}</td>
                                    <td class="wkwcpos-invoice-editable">${order_tax}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Discount</td>
                                    <td class="wkwcpos-invoice-editable">${order_discount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${coupon_name}</td>
                                    <td class="wkwcpos-invoice-editable">${coupon_amount}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Total</td>
                                    <td class="wkwcpos-invoice-editable">${order_total}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Cash Payment</td>
                                    <td class="wkwcpos-invoice-editable">${cashpay_amount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">${other_payment_text}</td>
                                    <td class="wkwcpos-invoice-editable">${otherpay_amount}</td>
                                </tr>
                                <tr>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable"></td>
                                    <td class="wkwcpos-invoice-editable">Change</td>
                                    <td class="wkwcpos-invoice-editable">${order_change}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="invoice-footer">
                        <p class="wkwcpos-invoice-editable">Cashier: ${cashier_name}</p>
                        <div class="footer-details">
                            <p class="wkwcpos-invoice-editable">${outlet_name}</p>
                            <p class="wkwcpos-invoice-editable">Tel No: ${pos_user_phone}</p>
                            <p class="wkwcpos-invoice-editable">Email: ${pos_user_email}</p>
                            <hr class="wkwcpos-invoice-editable" />
                            <p class="wkwcpos-invoice-editable">Have a nice day</p>
                        </div>
                    </div>
                </div>`;
        }

        invoiceData = eval('`' + invoiceData + '`');

        return ReactHtmlParser(invoiceData);
    }

    handlePrintClick(e, order_id) {

        var order = this.props.order;

        if (order.order_id == order_id) {

            // var invoiceHtml = this.GetHtml(order);
            var invoiceHtml = this.getInvoice(order);

            var styles = this.setupInvoiceSize();

            ReactDOM.unmountComponentAtNode(document.getElementById('invoice-body'));

            ReactDOM.render(
                invoiceHtml,
                document.getElementById('invoice-body')
            );

            this.openPrintWindow(jQuery("#invoice-print").html(), styles);

        }

    }

    openPrintWindow(printContents, style) {

        var order = this.props.order;

        doAction(PERFORM_ACTION_AFTER_INVOICE_PRINT, order);

        if (applyFilters(WANT_TO_PRINT_RECIEPT, true, order)) {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                var printWindow = window.open("", "PRINT", "height=400,width=600");
                // printWindow.document.write("<link media='all' href='" + apif_script.assets + "/css/min/invoice.min.css?ver=1.0.7' type='text/css' rel='stylesheet'>");
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

            } else {

                var frame1 = document.createElement('iframe');

                frame1.name = "frame1";

                document.body.appendChild(frame1);

                var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;

                frameDoc.document.open();

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

        }


        return true;
    }

    setupInvoiceSize() {

        var printer = this.props.printers;

        var sprinter = printer.default;

        var style_rules = [];

        if (sprinter) {

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
                    jQuery(".invoice-head, .invoice-body, .invoice-footer").css("font-size", "14px;");
                    break;
                default:
                    break;

            }

            return style;
        }

    }

    GetHtml(order) {

        var paymentMode = order.payment_title;

        var cashPay_text = '';

        var cardPay_text = '';

        var cash_payment_text = translation.cash_text;

        if (order.cashPay > 0) {

            cashPay_text = <li><h4>{cash_payment_text}</h4><span dangerouslySetInnerHTML={{ __html: order.cashPay_html }}></span></li>;

        }

        if (order.cardPay > 0) {

            cardPay_text = <li><h4>{paymentMode}</h4><span dangerouslySetInnerHTML={{ __html: order.cardPay_html }}></span></li>;

        }

        let products = Array.from(order.products);

        var order_tax_lines = order.tax_lines;

        if (order_tax_lines.length > 0) {

            var oTax = order_tax_lines.map((tax) => {

                return <tr key={tax.id}><td>&nbsp;</td><td>&nbsp;</td><td className="sub-total">{__('Tax', 'wc_pos')}({tax.title})</td><td dangerouslySetInnerHTML={{ __html: tax.total }}></td></tr>;
            });

        } else {

            var oTax = '';
        }

        var coupons = order.coupons;

        if (coupons) {

            var coupon_html = [];

            jQuery.each(coupons, (i, coupon) => {

                coupon_html.push(
                    <tr key={i}>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>

                        <td className="sub-total">{__('Coupon', 'wc_pos')}<span>({i})</span></td>
                        <td className="coupon-amt">
                            <span dangerouslySetInnerHTML={{ __html: coupon }}></span>
                        </td>
                    </tr>
                );
            });

        } else {

            var coupon_html = '';

        }

        var orderproducts = products.map((pro, i) => {

            return (

                <tr className="border_bottom" key={i} >
                    <td className="product-name">
                        {pro.product_name}
                        <br />
                        <p className="order-product-meta-heading">{pro.product_meta_data ? Object.keys(pro.product_meta_data) : ""}</p>
                        <p className="order-product-meta"> {pro.product_meta_data ? Object.values(pro.product_meta_data) : ""}</p>
                    </td>
                    <td className="product-quantity">{pro.qty}</td>
                    <td className="product-unit-price">
                        <span dangerouslySetInnerHTML={{ __html: pro.product_unit_price }}></span>
                    </td>
                    <td className="product-total-price">
                        <span dangerouslySetInnerHTML={{ __html: pro.product_total_price }}></span>
                    </td>
                </tr>

            )
        });
        orderproducts = applyFilters(CHANGE_LISTING_OF_PRODUCTS, orderproducts, products);
        var customData = applyFilters(ADD_CUSTOM_ORDER_DATA_BELOW_DATE, '', order);
        var order_text = translation.order_text;
        var date_text = translation.date;
        var subtotal_text = translation.subtotal_text;
        var total_text = translation.total_text;
        var discount_text = translation.discount_text;
        var balance_text = translation.balance_text;
        var refund_text = translation.refund_text;
        var customer_text = translation.customer_text;
        let orderRefund = order.total_refund ?

            <ul className="order-balance">
                <li>
                    <h4>{refund_text} </h4>
                    <span>{ReactHtmlParser(order.currency)}{ReactHtmlParser(order.total_refund)}</span>
                </li>

            </ul> : '';

        var customAfterTax = applyFilters(ADD_DATA_AFTER_TAX_IN_RECEIPT, '', order);

        var customAfterBalance = applyFilters(ADD_DATA_AFTER_BALANCE_IN_RECEIPT, '', order);

        return (<div>

            <div className="pos-order-short">

                <div className="pos-order-sect">

                    <p>{order_text} - #{order.order_id}</p>

                    <p className="date">{date_text}: {order.order_date}</p>
                </div>
                <div className="pos-sumarry-customer">
                    <p className="customer-name">{customer_text}</p>
                    <p className="customer-name">{order.billing.fname} {order.billing.lname}</p>
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
                                <td dangerouslySetInnerHTML={applyFilters(UPDATE_POS_ORDER_SUB_TOTAL, { __html: order.cart_subtotal }, order)}></td>
                            </tr>
                            {oTax}
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td className="sub-total">{discount_text}</td>
                                <td dangerouslySetInnerHTML={{ __html: order.discount }}></td>
                            </tr>
                            {coupon_html}
                            {customAfterTax}
                        </tbody>
                    </table>
                </div>

                <div className="sale-summary-calculate-total">
                    <ul>
                        <li>
                            <h4>{total_text} </h4><span dangerouslySetInnerHTML={applyFilters(wkwcpos_change_pos_total, { __html: order.order_html }, order)}></span>
                        </li>
                        {cashPay_text}
                        {cardPay_text}

                    </ul>
                    <ul className="order-balance">

                        <li>
                            <h4>{balance_text} </h4>
                            <span dangerouslySetInnerHTML={{ __html: order.balance }}></span>
                        </li>

                    </ul>

                    {orderRefund}
                    {customAfterBalance}
                </div>
            </div>
        </div>);

    }

    render() {

        let order = this.props.order;
        order = applyFilters(MODIFY_ORDER_DETAILS, order);
        var order_heading_text = translation.order_heading_text;
        var order_date_heading_text = translation.order_date_heading_text;
        var order_note_text = translation.order_note_text;
        var customer_text = translation.customer_text;
        var printInvoice_text = translation.printInvoice_text;

        let notes = order.order_notes.map((note, i) => {

            return (
                <li key={i}>
                    <p>{ReactHtmlParser(note)}</p>
                </li>
            )
        });

        let customDataArr = [];
        let customData = applyFilters(ADD_CUSTOM_ORDER_DATA_BELOW_DATE, '', order);
        if (order.custom_data && order.custom_data.length > 0) {
            customDataArr = order.custom_data.map((data, i) => {
                return (
                    <p key={i}><strong>{data.label}: </strong>{data.value}</p>
                );
            });
        }

        return (

            <div className="pos-order-short">

                <div className="pos-order-sect">

                    {
                        order.offline_id ? <span><h3>{order_heading_text}</h3><h2>{__('Online:', 'wc_pos') + `#${order.order_id}`}</h2><h2>{__('Offline:', 'wc_pos') + order.offline_id}</h2></span> : <span><h3>{order_heading_text}</h3><h2>#{order.order_id}</h2></span>

                    }

                    <h3>{order_date_heading_text}</h3>
                    <h4>
                        <i className="fa fa-calendar"></i>&nbsp;{order.order_date}
                    </h4>
                    <p>{customData}</p>
                </div>

                <div className="pos-sumarry-customer">

                    <h3>{customer_text}</h3>
                    <h2>{order.billing.fname + ' ' + order.billing.lname}</h2>
                </div>

                {

                    customDataArr.length > 0 ?
                        <div className="order-extra-data">
                            <h3>{__('Extra Data', 'wc_pos')}</h3>
                            {customData}
                        </div>
                        :
                        ''
                }

                <div className="order-short-note">

                    <h3>{order_note_text}</h3>

                    <ol>{notes}</ol>

                </div>

                <div className="pos-order-invoice">

                    <button type="button" className="print-invoice" onClick={((e) => this.handlePrintClick(e, order.order_id))}>
                        <i className="fa fa-print"></i>&nbsp;{printInvoice_text}
                    </button>

                </div>

                <div className="pos-order-return" id="pos-order-return" data-orderid={order.order_id}></div>

                { applyFilters(ADD_AFTER_PRINT_INVOICE_BUTTON_FILTER, '', order)}

            </div>
        )

    }
}

const mapStateToProps = state => ({
    orders: state.orders.list,
    printers: state.printers,
    invoice: state.invoice
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderShort);