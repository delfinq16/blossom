import React, { Component } from 'react';
import './buttons.less';
import { __ } from '@wordpress/i18n';

class Buttons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addElement: false,
        };
    }

    handleClick = () => {
        this.setState({
            addElement: !this.state.addElement,
        });
    }

    resetDefaultInvoice = () => {

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

        let invoiceData = `

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

        invoiceData = eval('`'+invoiceData+'`');

        document.querySelector( '.wkwcpos-invoice-wrapper-container' ).innerHTML = invoiceData;

        this.props.setElement('');

        document.querySelector( '.wkwcpos-invoice-wrapper' ).addEventListener( 'click', e => {
            if ( e.target.classList.contains( 'wkwcpos-invoice-editable' ) ) {
                if ( e.target.classList.contains( 'wkwcpos-invoice-edit' ) ) {
                    e.target.classList.remove( 'wkwcpos-invoice-edit' );
                    this.props.setElement('');
                } else {
                    document.querySelectorAll( '.wkwcpos-invoice-editable' ).forEach( editableElement => {
                        if ( editableElement.classList.contains( 'wkwcpos-invoice-edit' ) ) {
                            editableElement.classList.remove( 'wkwcpos-invoice-edit' );
                        }
                    } );
                    e.target.classList.add( 'wkwcpos-invoice-edit' );
                    this.props.setElement(e.target);
                }
            }
        } );

    }

    handleAddElement = e => {
        const element = this.props.element;
        const nodeName = e.target.closest('li').getAttribute( 'data-element' );

        const newElement = document.createElement( nodeName );

        newElement.classList.add( 'wkwcpos-invoice-editable' );

        if ( nodeName == 'IMG' ) {
            newElement.src = nodeName;
        } else if ( nodeName != 'HR' ) {
            newElement.innerHTML = nodeName;
        }

        element.insertAdjacentElement( 'afterend', newElement );
        this.setState({
            addElement: ! this.state.addElement,
        }, () => {
            document.querySelectorAll( '.wkwcpos-invoice-editable' ).forEach( editableElement => {
                if ( editableElement.classList.contains( 'wkwcpos-invoice-edit' ) ) {
                    editableElement.classList.remove( 'wkwcpos-invoice-edit' );
                }
            } );
            newElement.classList.add( 'wkwcpos-invoice-edit' );
            this.props.setElement( newElement );
        });
    }

    render() {
        return (
            <div className="wkwcpos-button-wrapper">
                <span className="add-element" onClick={this.handleClick} >+</span>
                <button className="reset-invoice button button-primary" onClick={this.resetDefaultInvoice} >{__( 'Reset Default', 'wc_pos' )}</button>

                { this.state.addElement ? 
                    (this.props.editElement && this.props.element ?
                        <div className="wkwcpos-add-element-wrapper">
                            <h3>{__( 'Element', 'wc_pos' )}</h3>
                            <hr />
                            <ul>
                                <li data-element="H1" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H1</span><br /><span>{__( 'Heading 1', 'wc_pos' )}</span></li>
                                <li data-element="H2" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H2</span><br /><span>{__( 'Heading 2', 'wc_pos' )}</span></li>
                                <li data-element="H3" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H3</span><br /><span>{__( 'Heading 3', 'wc_pos' )}</span></li>
                                <li data-element="H4" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H4</span><br /><span>{__( 'Heading 4', 'wc_pos' )}</span></li>
                                <li data-element="H5" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H5</span><br /><span>{__( 'Heading 5', 'wc_pos' )}</span></li>
                                <li data-element="H6" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">H6</span><br /><span>{__( 'Heading 6', 'wc_pos' )}</span></li>
                                <li data-element="IMG" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">IMG</span><br /><span>{__( 'Image', 'wc_pos' )}</span></li>
                                <li data-element="P" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">P</span><br /><span>{__( 'Paragraph', 'wc_pos' )}</span></li>
                                <li data-element="HR" onClick={ e => this.handleAddElement(e) }><span className="wkwcpos-element-icon">HR</span><br /><span>{__( 'Horizontal Ruler', 'wc_pos' )}</span></li>
                            </ul>
                        </div>
                    :
                        <div className="wkwcpos-add-element-wrapper">
                            <p>{__( 'Select element first in the invoice to add new element next to it.', 'wc_pos' )}</p>
                        </div>
                    )
                : ''}
            </div>
        );
    }
}

export default Buttons;