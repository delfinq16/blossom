import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';



class OrderList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            order: ''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {

        let orders = this.props.orders;

        let order_id = jQuery(event.target).closest("li").attr("id");

        var order = orders.filter(obj => {
            return order_id == obj.id;
        });

        if (order) {
            this.props.onSelectOrder(order);
        }

    }



    render() {
        let order = this.props.order;


        return (

            <li id={order.order_id} onClick={((e) => this.handleClick(e))}>
                <span>#{order.order_id}</span>
                <span><i className="fa fa-calender"></i>{order.order_date}</span>
                <span>{ReactHtmlParser(order.order_html)}</span>
            </li>

        )

    }
}

const mapStateToProps = state => ({
    orders: state.orders.list,
});

export default connect(mapStateToProps)(OrderList);