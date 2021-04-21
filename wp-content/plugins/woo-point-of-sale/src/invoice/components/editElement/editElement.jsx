import React, { Component } from 'react';
import { __ } from '@wordpress/i18n';
import './editElement.less';
import { applyFilters } from '@wordpress/hooks';

class EditElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            element: this.props.element,
            elementStyle: this.props.element.style,
        };
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.element != this.props.element ) {
            this.setState({
                element: this.props.element
            });
        }
    }

    handleRemoveElement = element => {
        element.remove();
        this.props.setElement();
    }

    handleChange = (element, e, cssStyle) => {

        const withoutPixelProperties = [ 'fontWeight', 'color', 'textAlign', 'borderStyle', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderBottomColor' ];

        if ( cssStyle == 'innerHTML' ) {
            element.innerHTML = e.target.value;
        } else if ( cssStyle == 'src' ) {
            element.src = e.target.value;
        } else {
            if ( withoutPixelProperties.includes( cssStyle ) ) {
                element.style[ cssStyle ] = e.target.value;
            } else {
                element.style[ cssStyle ] = e.target.value + 'px';
            }
        }
        this.setState({
            element: element,
            elementStyle: element.style,
        });
    }

    validatePixels = value => {
        return value.replace( 'px', '' );
    }

    componentToHex = c => {
        var hex = Number(c).toString(16);
        return hex.length < 2 ? "0" + hex : hex;
    }

    rgbToHex = rgb => {

        rgb = rgb.replace( 'rgb(', '' );
        rgb = rgb.replace( ')', '' );
        rgb = rgb.split( ', ' );

        const r = rgb[0];
        const g = rgb[1];
        const b = rgb[2];

        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    render() {

        if ( ! this.state.element ) {
            return '';
        }

        const element      = this.state.element;
        const label        = element.innerHTML;
        const elementStyle = window.getComputedStyle( element );

        const nodeName = element.nodeName;

        return (
            <React.Fragment>
                <div className="wkwcpos-edit-element-wrapper">
                    <h3>{nodeName + ' ' + __( 'Element Properties', 'wc_pos' )}</h3>
                    { nodeName == 'IMG' ? 
                        <label>{__( 'Link', 'wc_pos' )}
                            <input type="text" value={element.src} onChange={ e => this.handleChange(element, e, 'src')} />
                        </label>
                    : ( nodeName == 'HR' ? '' :
                        <label>{__( 'Label', 'wc_pos' )}
                            <input type="text" value={label} onChange={ e => this.handleChange(element, e, 'innerHTML')} />
                        </label>
                    )}
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>{__( 'Font Size (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={this.validatePixels(elementStyle.fontSize)} onChange={ e => this.handleChange(element, e, 'fontSize')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Font Weight', 'wc_pos' )}
                                        <input type="number" step="100" min="100" max="900" value={this.validatePixels(elementStyle.fontWeight)} onChange={ e => this.handleChange(element, e, 'fontWeight')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Color', 'wc_pos' )}
                                        <input type="color" value={this.rgbToHex(elementStyle.color)} onChange={ e => this.handleChange(element, e, 'color')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Line Height (px)', 'wc_pos' )}
                                        <input type="number" step="0.1" min="0" value={this.validatePixels(elementStyle.lineHeight)} onChange={ e => this.handleChange(element, e, 'lineHeight')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Width (px)', 'wc_pos' )}
                                        <input type="number" min="0" step="1" value={parseInt(this.validatePixels(this.state.elementStyle.width ? this.state.elementStyle.width : elementStyle.width))} onChange={ e => this.handleChange(element, e, 'width')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Height (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={parseInt(this.validatePixels(this.state.elementStyle.height ? this.state.elementStyle.height : elementStyle.height))} onChange={ e => this.handleChange(element, e, 'height')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Padding Left (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={this.validatePixels(elementStyle.paddingLeft)} onChange={ e => this.handleChange(element, e, 'paddingLeft')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Padding Right (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={this.validatePixels(elementStyle.paddingRight)} onChange={ e => this.handleChange(element, e, 'paddingRight')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Padding Top (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={this.validatePixels(elementStyle.paddingTop)} onChange={ e => this.handleChange(element, e, 'paddingTop')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Padding Bottom (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={this.validatePixels(elementStyle.paddingBottom)} onChange={ e => this.handleChange(element, e, 'paddingBottom')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Margin Left (px)', 'wc_pos' )}
                                        <input type="number" value={this.validatePixels(elementStyle.marginLeft)} onChange={ e => this.handleChange(element, e, 'marginLeft')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Margin Right (px)', 'wc_pos' )}
                                        <input type="number" value={this.validatePixels(elementStyle.marginRight)} onChange={ e => this.handleChange(element, e, 'marginRight')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Margin Top (px)', 'wc_pos' )}
                                        <input type="number" value={this.validatePixels(elementStyle.marginTop)} onChange={ e => this.handleChange(element, e, 'marginTop')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Margin Bottom (px)', 'wc_pos' )}
                                        <input type="number" value={this.validatePixels(elementStyle.marginBottom)} onChange={ e => this.handleChange(element, e, 'marginBottom')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Text Align', 'wc_pos' )}
                                        <select  value={this.validatePixels(elementStyle.textAlign)} onChange={ e => this.handleChange(element, e, 'textAlign')}>
                                            <option value="left">{__( 'Left', 'wc_pos' )}</option>
                                            <option value="right">{__( 'Right', 'wc_pos' )}</option>
                                            <option value="center">{__( 'Center', 'wc_pos' )}</option>
                                        </select>
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Border Style (px)', 'wc_pos' )}
                                        <select  value={this.validatePixels(elementStyle.borderStyle)} onChange={ e => this.handleChange(element, e, 'borderStyle')}>
                                            <option value="none">{__( 'None', 'wc_pos' )}</option>
                                            <option value="solid">{__( 'Solid', 'wc_pos' )}</option>
                                            <option value="dashed">{__( 'Dashed', 'wc_pos' )}</option>
                                            <option value="dotted">{__( 'Dotted', 'wc_pos' )}</option>
                                            <option value="double">{__( 'Double', 'wc_pos' )}</option>
                                            <option value="groove">{__( 'Groove', 'wc_pos' )}</option>
                                            <option value="ridge">{__( 'Ridge', 'wc_pos' )}</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Border Left Color', 'wc_pos' )}
                                        <input type="color" value={this.rgbToHex(elementStyle.borderLeftColor)} onChange={ e => this.handleChange(element, e, 'borderLeftColor')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Border Right Color', 'wc_pos' )}
                                        <input type="color" value={this.rgbToHex(elementStyle.borderRightColor)} onChange={ e => this.handleChange(element, e, 'borderRightColor')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Border Top Color', 'wc_pos' )}
                                        <input type="color" value={this.rgbToHex(elementStyle.borderTopColor)} onChange={ e => this.handleChange(element, e, 'borderTopColor')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Border Bottom Color', 'wc_pos' )}
                                    <input type="color" value={this.rgbToHex(elementStyle.borderBottomColor)} onChange={ e => this.handleChange(element, e, 'borderBottomColor')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Border Left Width (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={parseInt(this.validatePixels(this.state.elementStyle.borderLeftWidth ? this.state.elementStyle.borderLeftWidth : elementStyle.borderLeftWidth))} onChange={ e => this.handleChange(element, e, 'borderLeftWidth')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Border Right Width (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={parseInt(this.validatePixels(this.state.elementStyle.borderRightWidth ? this.state.elementStyle.borderRightWidth : elementStyle.borderRightWidth))} onChange={ e => this.handleChange(element, e, 'borderRightWidth')} />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>{__( 'Border Top Width (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={parseInt(this.validatePixels(this.state.elementStyle.borderTopWidth ? this.state.elementStyle.borderTopWidth : elementStyle.borderTopWidth))} onChange={ e => this.handleChange(element, e, 'borderTopWidth')} />
                                    </label>
                                </td>
                                <td>
                                    <label>{__( 'Border Bottom Width (px)', 'wc_pos' )}
                                        <input type="number" min="0" value={parseInt(this.validatePixels(this.state.elementStyle.borderBottomWidth ? this.state.elementStyle.borderBottomWidth : elementStyle.borderBottomWidth))} onChange={ e => this.handleChange(element, e, 'borderBottomWidth')} />
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="button" className="button button-secondary" value={__( 'Remove', 'wc_pos')} onClick={e => this.handleRemoveElement(element)} />
                </div>
                <div className="wkwcpos-predefined-element-wrapper">
                    <h3>{__( 'Pre-defined Variables', 'wc_pos' )}</h3>
                    <ul>
                        <li><strong>{'${outlet_name}'} - </strong>{ __( 'Outlet Name', 'wc_pos' ) }</li>
                        <li><strong>{'${outlet_address}'} - </strong>{ __( 'Outlet Address', 'wc_pos' ) }</li>
                        <li><strong>{'${outlet_city}'} - </strong>{ __( 'Outlet City', 'wc_pos' ) }</li>
                        <li><strong>{'${outlet_state}'} - </strong>{ __( 'Outlet State', 'wc_pos' ) }</li>
                        <li><strong>{'${outlet_country}'} - </strong>{ __( 'Outlet Country', 'wc_pos' ) }</li>
                        <li><strong>{'${outlet_postcode}'} - </strong>{ __( 'Outlet Postcode', 'wc_pos' ) }</li>
                        <li><strong>{'${customer_fname}'} - </strong>{ __( 'Customer First Name', 'wc_pos' ) }</li>
                        <li><strong>{'${customer_lname}'} - </strong>{ __( 'Customer Last Name', 'wc_pos' ) }</li>
                        <li><strong>{'${cashier_name}'} - </strong>{ __( 'Cashier/POS user name', 'wc_pos' ) }</li>
                        <li><strong>{'${pos_user_phone}'} - </strong>{ __( 'POS User\'s phone number', 'wc_pos' ) }</li>
                        <li><strong>{'${pos_user_email}'} - </strong>{ __( 'POS User\'s email', 'wc_pos' ) }</li>
                        <li><strong>{'${order_id}'} - </strong>{ __( 'Order ID', 'wc_pos' ) }</li>
                        <li><strong>{'${order_date}'} - </strong>{ __( 'Order Date', 'wc_pos' ) }</li>
                        <li><strong>{'${tax_title}'} - </strong>{ __( 'Order Tax Title', 'wc_pos' ) }</li>
                        <li><strong>{'${order_tax}'} - </strong>{ __( 'Order Tax Amount', 'wc_pos' ) }</li>
                        <li><strong>{'${coupon_name}'} - </strong>{ __( 'Order Coupon Name', 'wc_pos' ) }</li>
                        <li><strong>{'${coupon_amount}'} - </strong>{ __( 'Order Coupon Amount', 'wc_pos' ) }</li>
                        <li><strong>{'${order_discount}'} - </strong>{ __( 'Order Discount', 'wc_pos' ) }</li>
                        <li><strong>{'${sub_total}'} - </strong>{ __( 'Order Subtotal', 'wc_pos' ) }</li>
                        <li><strong>{'${order_total}'} - </strong>{ __( 'Order Total', 'wc_pos' ) }</li>
                        <li><strong>{'${cashpay_amount}'} - </strong>{ __( 'Order Cashpay Amount', 'wc_pos' ) }</li>
                        <li><strong>{'${otherpay_amount}'} - </strong>{ __( 'Order Other Pay Amount', 'wc_pos' ) }</li>
                        <li><strong>{'${other_payment_text}'} - </strong>{ __( 'Order Other Payment title', 'wc_pos' ) }</li>
                        <li><strong>{'${order_change}'} - </strong>{ __( 'Order Change', 'wc_pos' ) }</li>
                        <li><strong>{'${pro_name}'} - </strong>{ __( 'Order Product Name', 'wc_pos' ) }</li>
                        <li><strong>{'${pro_quantity}'} - </strong>{ __( 'Order Product Quantity', 'wc_pos' ) }</li>
                        <li><strong>{'${pro_unit_price}'} - </strong>{ __( 'Order Product Unit Price', 'wc_pos' ) }</li>
                        <li><strong>{'${pro_total}'} - </strong>{ __( 'Order Product Total Price', 'wc_pos' ) }</li>
                        {applyFilters( 'wkwcpos_add_new_invoice_variables', '' )}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default EditElement;