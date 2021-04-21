import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import OrderList from './list/list.jsx';
import OrderShort from './short/short.jsx';
import OrderSummary from './summary/summary.jsx';
import { loadSearchedOrder } from '../../../../../actions/orders';
import { translation } from '../../../../../translation.js';
import { FixedSizeList as List } from "react-window";
import { __ } from '@wordpress/i18n';

class SaleHistory extends Component {

    constructor(props) {
        
        super(props);

        const { dispatch } = props;

        this.setSearch = this.setSearch.bind(this);

        this.state = {
            first : ''
        }

        dispatch( loadSearchedOrder( '', props.orders ) );

        this.handleChange = this.handleChange.bind(this);
    }

    
    setSearch(e) { 

        const { dispatch } = this.props;

        dispatch( loadSearchedOrder( e.target.value, this.props.orders ) );

    }

    handleChange(firstOrder) {
    
        this.setState( { first: firstOrder } );
    }

    render() {

        let horders = Array.from(this.props.sorder);

        horders.sort((a,b) => (a.order_id < b.order_id) ? 1 : ((b.order_id < a.order_id) ? -1 : 0));

        let orders = horders.filter( (order) => {

            if( order.order_id.toString().indexOf("#") == -1 ) {

                return order; 

            }

        } );

        if( this.state.first ) {

            var defaultOrder = this.state.first;

        } else {
            
            var defaultOrder = orders.filter((def,i) => {

                if( i==0) {
                
                    return def;
                }

            });

        }

        const order_short = defaultOrder.map( (ord,i) => {

            return <OrderShort key={i} order={ord}></OrderShort>
        
        });

        const order_summary = defaultOrder.map((sum, i) => {

            return <OrderSummary key={i} order={sum}></OrderSummary> 
        });   
        var search_order_text = translation.search_order_text;

        const empty_customer_list = <span className="no-result"><i className="fa fa-warning"></i>{__("We didn't find any results.", 'wc_pos' )}</span>;

        var image_url = apif_script.assets + '/images/no-product.png';

        var error_no_category_order = translation.error_no_category_order;

        var listProducts = <div className="no-pos-orders"><img src={image_url} /><span className="no-order-result"><i className="fa fa-warning"></i>{ error_no_category_order }</span></div>;

        const Row = ({ index, style }) => (
            <div className={index % 2 ? "wkwcpos-list-item-even" : "wkwcpos-list-item-even"} style={style}>
                <OrderList key={orders[index].order_id} onSelectOrder={this.handleChange} order={orders[index]} style={style}></OrderList>
            </div>
        );

        return (

            <div className="order-section">

                <div className="pos-order-list">

                    <div className="pos-order-search">

                            <span className="fa fa-search"></span>

                            <input 
                                type="search" 
                                name="pos-order-search" 
                                id="pos-order-search"
                                placeholder={search_order_text} 
                                onChange={this.setSearch}
                                autoComplete="off"
                            />
                    </div>

                    {
                        orders.length < 1 ? empty_customer_list :
                        <List
                            className="wkwcpos-list dropdownlist-order"
                            height={500}
                            itemCount={orders.length}
                            itemSize={60}
                        >
                            {Row}
                        </List>
                    }

                </div>

                <div id="order-main-summary">

                    { orders.length < 1 ? listProducts : order_short }

                    { orders.length < 1 ? '' : order_summary }

                </div>
            </div>
        )

    }
}

const mapStateToProps = state => ({ 
    orders:state.orders.list,
    sorder:state.orders.sorder,
    currency:state.currency.default,
});

function mapDispatchToProps(dispatch) {
    return Object.assign( { dispatch }, bindActionCreators( { loadSearchedOrder }, dispatch ) );
}

export default connect( mapStateToProps, mapDispatchToProps )(SaleHistory);