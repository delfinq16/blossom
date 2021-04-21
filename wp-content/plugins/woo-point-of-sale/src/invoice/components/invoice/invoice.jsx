import React from 'react';
import './invoice.less';
import { __ } from '@wordpress/i18n';

const Invoice = () => {

    function getInvoice( order = '' ) {

        let logo_invoice    = '${logo_invoice}';
        let outlet_name     = '${outlet_name}';
        let order_id        = '${order_id}';
        let order_date      = '${order_date}';
        let customer_fname  = '${customer_fname}';
        let customer_lname  = '${customer_lname}';
        let outlet_address  = '${outlet_address}';
        let outlet_city     = '${outlet_city}';
        let outlet_state    = '${outlet_state}';
        let outlet_country  = '${outlet_country}';
        let outlet_postcode = '${outlet_postcode}';
        let pos_user_phone  = '${pos_user_phone}';
        let pos_user_email  = '${pos_user_email}';

        let pro_name              = '${pro_name}';
        let pro_quantity          = '${pro_quantity}';
        let pro_unit_price        = '${pro_unit_price}';
        let pro_total             = '${pro_total}';

        let sub_total          = '${sub_total}';
        let tax_title          = '${tax_title}';
        let order_tax          = '${order_tax}';
        let coupon_name        = '${coupon_name}';
        let coupon_amount      = '${coupon_amount}';
        let order_discount     = '${order_discount}';
        let order_total        = '${order_total}';
        let cashpay_amount     = '${cashpay_amount}';
        let other_payment_text = '${other_payment_text}';
        let otherpay_amount    = '${otherpay_amount}';
        let order_change       = '${order_change}';

        let cashier_name = '${cashier_name}';

        logo_invoice = wkwcposInvoiceObj.invoice_data.logo_invoice;

        if ( wkwcposInvoiceObj.invoice_data.outlet ) {
            const outlet          = wkwcposInvoiceObj.invoice_data.outlet;
            outlet_name     = outlet.outlet_name;
            outlet_address  = outlet.outlet_address;
            outlet_city     = outlet.outlet_city;
            outlet_state    = outlet.outlet_state;
            outlet_country  = outlet.outlet_country;
            outlet_postcode = outlet.outlet_postcode;
        }

        if ( wkwcposInvoiceObj.invoice_data.pos_user_phone ) {
            pos_user_phone = wkwcposInvoiceObj.invoice_data.pos_user_phone;
        }

        if ( wkwcposInvoiceObj.invoice_data.pos_order ) {
            order              = wkwcposInvoiceObj.invoice_data.pos_order;
            order_id           = '#' + order.order_id;
            order_date         = order.order_date;
            customer_fname     = order.billing.fname;
            customer_lname     = order.billing.lname;
            sub_total          = order.cart_subtotal;
            order_discount     = order.discount;
            order_total        = order.order_html;
            cashpay_amount     = order.cashPay > 0 ? order.cashPay_html : 'N/A';
            otherpay_amount    = order.cardPay > 0 ? order.cardPay_html : 'N/A';
            other_payment_text = order.cardPay > 0 ? order.payment_title : __( 'Other Payments', 'wc_pos' );
            order_change       = order.balance;

            pro_name              = '';
            pro_unit_price        = '';
            pro_quantity          = '';
            pro_total             = '';

            order.products.forEach((pro, i) => {

                pro_name              += `<p>${pro.product_name}</p>`;
                pro_unit_price        += `<p>${pro.product_unit_price}</p>`;
                pro_quantity          += `<p>${pro.qty}</p>`;
                pro_total             += `<p>${pro.product_total_price}</p>`;

                if ( pro.product_meta_data ) {
                    pro_name       += `<p>${Object.keys(pro.product_meta_data)}</p>`;
                    pro_unit_price += '<br />';
                    pro_quantity   += '<br />';
                    pro_total      += '<br />';
                }
                if ( pro.product_meta_data ) {
                    pro_name       += `<p>${Object.values(pro.product_meta_data)}</p>`;
                    pro_unit_price += '<br />';
                    pro_quantity   += '<br />';
                    pro_total      += '<br />';
                }

            });

            const order_tax_lines = order.tax_lines;

            tax_title = '';
            order_tax = '';

            if (order_tax_lines.length > 0) {

                order_tax_lines.forEach((tax) => {
                    tax_title += `<p>${__( 'Tax', 'wc_pos' )}(${tax.title})</p>`;
                    order_tax += `<p>${tax.total}</p>`;
                });

            }

            const coupons = order.coupons;

            coupon_name = '';
            coupon_amount = '';

            Object.keys(coupons).forEach( (i) => {
                coupon_name += `<p>${__( 'Coupon', 'wc_pos' )}(${i})</p>`;
                coupon_amount += `<p>${coupons[i]}</p>`;
            } );

        }

        if ( wkwcposInvoiceObj.invoice_data.pos_user ) {
            pos_user_email = wkwcposInvoiceObj.invoice_data.pos_user.data.user_email;
            cashier_name   = wkwcposInvoiceObj.invoice_data.pos_user.data.display_name;
        }

        let invoiceData = '';

        if ( wkwcposInvoiceObj.invoice_html ) {
            invoiceData = wkwcposInvoiceObj.invoice_html;
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

        invoiceData = eval('`'+invoiceData+'`');

        return invoiceData;
    }

    return (
        <div className="wkwcpos-invoice-wrapper-container" dangerouslySetInnerHTML={{ __html: getInvoice() }}>
        </div>
    );
}

export default Invoice;