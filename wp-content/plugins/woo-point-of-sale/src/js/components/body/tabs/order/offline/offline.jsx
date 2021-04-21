import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import OrderList from './list/list.jsx';
import OrderShort from './short/short.jsx';
import OrderSummary from './summary/summary.jsx';
import { getAllOrdersWC } from '../../../../../actions/orders';
import database from '../../../../../database';
import { translation } from '../../../../../translation.js';
import wkwcpos_variable from './../../../../../config';
import { POSPostRequest } from './../../../../../hash';
import { FixedSizeList as List } from "react-window";
import { __ } from '@wordpress/i18n';
import { doAction } from '@wordpress/hooks';
export const AFTER_CREATING_ORDER_ACTION = 'wkwcpos_action_after_creating_order';

class OfflineSale extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            first : '', 
            orders : '',
            s : ''
        }

        this.handleChange = this.handleChange.bind(this);

        this.setSearch = this.setSearch.bind(this);  

        this.syncAllOrders = this.syncAllOrders.bind(this);

        this.syncOfflineOrders = this.syncOfflineOrders.bind(this);       
    }

    setSearch(e) { 

        var fakeorders = Array.from(this.props.orders);

        let first = this.state.first;

        var orderData = this.state.orders;

        if( e.target.value ) {

            orderData = fakeorders.filter( (order) => {

                if( order.order_type == 'offline' && ( order.order_id.toString().indexOf(e.target.value) != -1 || order.email.toString().indexOf(e.target.value) != -1 ) ) {
                    return order;
                }
        
            });
        }

        this.setState({
            first : first,
            orders : orderData,
            s : e.target.value
        });

    }
        
    handleChange(firstOrder) {
    
        this.setState( { first: firstOrder } );
    }
    
    syncAllOrders() {
    
        const {dispatch} = this.props;

        if( navigator.onLine ) {

            var fakeorders = Array.from(this.props.orders);

            var orderData = fakeorders.filter( (order) => {

                if( order.order_type == 'offline' ) {
                    
                    return order;
                }
        
            });

            if( orderData.length > 0) {

                let result = this.syncOfflineOrders(orderData).then((orders)=>{

                    if( orders ) {

                        dispatch(getAllOrdersWC());
                            
                        jQuery.confirm({
    
                            title: translation.success_text,
    
                            content: translation.sync_success_text,
    
                            backgroundDismiss: function(){
    
                                return 'buttonName'; // the button will handle it
    
                            },
    
                        });
        
                    }
                });

            }
            else{

                jQuery.confirm({
                    title: translation.warning_text,
                    content: translation.no_sync_orders,
                    backgroundDismiss: function(){
                        return 'buttonName'; // the button will handle it
                    },
                });

            }
            
        } else {

            jQuery.confirm({
				title: translation.warning_text,
				content: translation.error_sync_orders,
				backgroundDismiss: function(){
					return 'buttonName'; // the button will handle it
				},
			});

			return;
        }
    }

    syncOfflineOrders (pos_orders) {
        
        const postData = {
            orders: JSON.stringify( pos_orders )
        };
        
        return new Promise( (resolve, reject) => {

            document.querySelector( '#loading-text' ).innerHTML = translation.sync_process_text;
        
            document.querySelector( '#loader' ).style.display = 'block';

            POSPostRequest( wkwcpos_variable.WK_CREATE_OFFLINE_ORDER_ENDPOINT, postData ).then((json) => {
        
                document.querySelector( '#loader' ).style.display = 'none';
        
                if( json.length > 0 ) {

                    doAction( AFTER_CREATING_ORDER_ACTION, json, database );
                        
                    let ids = json.map( (j) => {

                        return j.fake_id;

                    });

                    var final_orders = json.map( (j) => {

                        delete j.fake_id;
                        return j;

                    });

                    database.pos_orders.bulkDelete(ids).then((res) => {

                        database.pos_orders.bulkPut(final_orders).then((rsult) => {

                            resolve(json) 

                        }); 

                    }); 

                }

            } );

        } );

    }
    
    render() {

            if( this.state.s ) {

                var orders = this.state.orders;

            } else {
                
                let horders = Array.from(this.props.orders); 
            
                horders.sort((a,b) => (a.order_id < b.order_id) ? 1 : ((b.order_id < a.order_id) ? -1 : 0));

                var orders = horders.filter( (order) => {

                    if( order.order_id.toString().indexOf("#") > -1 ) {

                        return order; 

                    }

                } );
            }           
  
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
            
            var sync_orders = translation.sync_orders;
            var search_order_text = translation.search_order_text;
            var image_url = apif_script.assets + '/images/no-product.png';
            var error_no_category_order = translation.error_no_category_order;

            var listProducts = <div className="no-pos-orders"><img src={image_url} /><span className="no-order-result"><i className="fa fa-warning"></i>{ error_no_category_order }</span></div>

            const empty_offline_orders_list = <span className="no-result"><i className="fa fa-warning"></i>{__("We didn't find any results", 'wc_pos' )}</span>;

            const Row = ({ index, style }) => (
                <div className={index % 2 ? "wkwcpos-list-item-even" : "wkwcpos-list-item-even"} style={style}>
                    <OrderList key={orders[index].order_id} onSelectOrder={this.handleChange} order={orders[index]} style={style}></OrderList>
                </div>
            );

            return (

                <div className="offline-section">
                
                    <div className="order-section">
                        
                        <div className="pos-order-list">

                            <div className="pos-sync-orders">
                                <button className="sync-orders" id="sync-orders" onClick={this.syncAllOrders}>{sync_orders}</button>
                            </div>

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
                                orders.length < 1 ? empty_offline_orders_list :
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
                
                </div> 
            );
        }
}

const mapStateToProps = state => ({ 
    orders:state.orders.list,
    sorder:state.orders.sorder,
});

function mapDispatchToProps(dispatch) {
    return Object.assign( { dispatch }, bindActionCreators( { getAllOrdersWC }, dispatch ) );
}
 
export default connect( mapStateToProps, mapDispatchToProps )(OfflineSale); 