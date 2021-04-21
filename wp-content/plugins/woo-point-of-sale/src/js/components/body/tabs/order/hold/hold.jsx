import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RemoveHoldData, getAllHoldCartProducts } from '../../../../../actions/hold';

import { GetAllCartDB, RemoveCart, getAllCartProducts } from '../../../../../actions/cart';
import { updateCurrentCart, getCurrentCart } from '../../../../../actions/currentcart';
import { translation } from '../../../../../translation.js';
import ReactHtmlParser from 'react-html-parser';
import { checkLoginUser } from '../../../../../actions/login';

import wkwcpos_variable from '../../../../../config';
import { __ } from '@wordpress/i18n';

class HoldSale extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartP: '',
        }

        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    componentDidMount( ) {

        const { dispatch } = this.props;

        dispatch(getCurrentCart());
        dispatch(checkLoginUser());
        dispatch(getAllCartProducts());
        dispatch(getAllHoldCartProducts());

        GetAllCartDB().then((res) => {

            this.setState({
                cartP: res
            });

        });
    }

    handleUpdateClick(e) {

        const { dispatch } = this.props;

        var cart_id = jQuery(e.target).attr("cart-id");

        var action = jQuery(e.target).data("action");

        var current_cart = this.props.current_cart;

        const cart_list = this.props.cart.list;

        const cart_contents = cart_list.length > 0 ? cart_list[0].cart : null;

        if (current_cart != cart_id && action) {

            if (action == 'delete') {

                jQuery.confirm({
                    title: translation.success_text,
                    content: translation.cart_deleted_success_msg,
                    autoClose: 'cancelAction|3000',
                    type: 'green',
                    escapeKey: 'cancelAction',
                    buttons: {
                        cancelAction: {
                            text: translation.cancel_btn_text,
                            btnClass: 'btn-green',
                        }
                    }
                });

                dispatch(RemoveCart(cart_id, ''));
                dispatch(RemoveHoldData(cart_id));
                dispatch(updateCurrentCart(current_cart));

            } else if (action == 'add') {

                if( cart_contents != null && cart_contents.length > 0 && current_cart == cart_list[0].cart_id ) {

                    jQuery.alert( translation.already_products_in_cart_for_hold );

                } else {

                    jQuery.confirm({
                        title: translation.success_text,
                        content: translation.cart_added_success_msg,
                        autoClose: 'cancelAction|3000',
                        type: 'green',
                        escapeKey: 'cancelAction',
                        buttons: {
                            cancelAction: {
                                text: translation.cancel_btn_text,
                                btnClass: 'btn-green',
                            }
                        }
                    });

                    dispatch(RemoveHoldData(cart_id));
                    dispatch(updateCurrentCart(cart_id));
                    dispatch(RemoveCart(current_cart, cart_id));

                    this.props.history.push( {
                        pathname: wkwcpos_variable.HOME_URL + '/pos',
                    } );

                }

            }

        }

    }

    render() {

        var cartP = this.state.cartP;

        var holds = this.props.holds;

        var current_cart = this.props.current_cart;

        if (holds.list.length > 0 && current_cart >= 0) {

            const holdTemplate = holds.list.map((element) => {

                var data = [];
                var cdata = [];

                if (element.cart_id != current_cart) {

                    jQuery.each(cartP, (i, car) => {

                        if (car.cart_id == element.cart_id) {

                            data = car.cart;
                        }

                    });
                    if (data.length > 0) {

                        jQuery.each(data, (ii, p) => {

                            cdata.push(
                                <tr key={ii}>
                                    <td>{ReactHtmlParser(p.name)}</td>
                                    <td>x</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            );

                        });

                    }

                    var text_item_detail = translation.text_item_detail;
                    var add_text = translation.add_text;
                    var delete_text = translation.delete_text;
                    var note_text = translation.note_text;

                    return (

                        <div className="order-display cursor" key={element.cart_id}>
                            <div className="order-detail">
                                <span className="hold-info">
                                    <i className="fa fa-info-circle"></i> {note_text}
                                </span>
                                <div className="datetimeorder">
                                    <div className="hold-time">{element.time}</div>
                                    <div className="hold-date">{element.date}</div>
                                </div>
                            </div>
                            <div className="hold-note">{element.note}</div>
                            <div className="item-detail">{text_item_detail}</div>
                            <div className="table-responsive table-order">
                                <table className="width-100">
                                    <tbody>{cdata}</tbody>
                                </table>
                            </div>
                            <div className="order-display-action">
                                <button className="add-hold" cart-id={element.cart_id} data-action="add" onClick={this.handleUpdateClick}>
                                    <i className="fa fa-cart-plus"></i>{add_text}
                                </button>
                                <button className="delete-hold" cart-id={element.cart_id} data-action="delete" onClick={this.handleUpdateClick}>
                                    <i className="fa fa-trash"></i>{delete_text}
                                </button>
                            </div>
                        </div>
                    );
                }

            });

            return (

                <div className="hold-section">

                    {holdTemplate}

                </div>
            );

        } else {

            return (

                <div className="hold-section">

                    <span className="no-hold-orders"><i className="fa fa-warning"></i>&nbsp;{ __( 'No orders on hold', 'wc_pos' )}</span>

                </div>
            );
        }

    }
}


const mapStateToProps = state => ({
    cart: state.cart,
    current_cart: state.current_cart,
    holds: state.hold
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ RemoveCart, RemoveHoldData, updateCurrentCart }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(HoldSale); 