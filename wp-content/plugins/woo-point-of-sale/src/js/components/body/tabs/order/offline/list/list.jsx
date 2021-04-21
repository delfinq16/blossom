import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { wkwcpos_price } from '../../../../../../currency-format';

class OrderList extends Component {

    constructor(props) {
        
        super(props); 
        this.state = {
            order : ''
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

   
    handleClick(event) {
    
        let orders = this.props.orders;
        
        let order_id = jQuery(event.target).closest("li").attr("id");
        
        var order = orders.filter( obj => {
            return order_id == obj.id;
        } );
    
        if( order ) {

            this.props.onSelectOrder(order);

        }
          
    }

    render() { 

            let order = this.props.order;
            
            let currency = order.currency;
            
            let currency_code = currency.symbol;

            let date = new Date(order.order_date).toDateString();
            
            date = date.split(' ').slice(0, 4).join(' ');

            var cart_total = wkwcpos_price(parseFloat(order.order_html), currency_code);

            return(

                <li id={order.order_id} onClick={((e) => this.handleClick(e))}>
                    <span>{order.order_id}</span>
                    <span><i className="fa fa-calender"></i>{date}</span>
                    <span>{cart_total}</span>
                </li>   
            )
            
    }
}

const mapStateToProps = state => ({ 
    orders:state.orders.list, 
});
 
export default connect( mapStateToProps )(OrderList);
 