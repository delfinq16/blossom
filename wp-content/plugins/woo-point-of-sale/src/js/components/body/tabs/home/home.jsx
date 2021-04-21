import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product/product.jsx';
import { bindActionCreators } from 'redux';

import { checkLoginUser, setDrawerAmount } from './../../../../actions/login';
import { getAllCustomersWC } from './../../../../actions/customers';
import { getAllOrdersWC } from './../../../../actions/orders';
import { taxAccount } from './../../../../actions/tax';
import { getInvoiceTemplate } from './../../../../actions/invoice';
import { getAllCategories } from './../../../../actions/categories'; 
import { getSaleHistoryWC } from './../../../../actions/sale';
import { getAllProducts } from './../../../../actions/products';
import { getAllCartProducts } from './../../../../actions/cart';
import { getCurrentCart } from './../../../../actions/currentcart';
import { getAllDiscountWC } from './../../../../actions/discount';
import { getAllCouponWC } from './../../../../actions/coupon';
import { getAllHoldCartProducts } from './../../../../actions/hold';

import wkwcpos_variable from '../../../../config';
import { Link } from 'react-router-dom';
export const CHANGE_NUMBER_OF_PRODUCT_LIST_PER_ROW = 'wkwcpos_change_number_of_product_list_per_row'
export const CHANGE_WIDTH_PRODUCT_TILE = 'wkwcpos_change_width_product_tile'
export const CHANGE_HEIGHT_PRODUCT_TILE = 'wkwcpos_change_height_product_tile'

import './less/home.less';
import ReactHtmlParser from 'react-html-parser';
import { LoadCategoryProducts } from '../../../../actions/products';
import { translation } from '../../../../translation.js';
import LazyLoad from 'react-lazyload';
import { FixedSizeGrid as Grid } from 'react-window';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

class Home extends Component {

    constructor(props) {

        super(props);

        this.state = {
            cid : '',
            categoryProductsLoaded : false
        }

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount( ) {

        const { dispatch } = this.props;

        if( this.props.history.action == 'POP' ) {

            dispatch(getSaleHistoryWC());
            dispatch(getCurrentCart());
            dispatch(checkLoginUser());
            dispatch(getAllCategories());
            dispatch(getAllOrdersWC());
            dispatch(getAllCustomersWC());
            dispatch(taxAccount()); 
            dispatch(getAllProducts()); 
            dispatch(getAllDiscountWC());
            dispatch(getAllCouponWC());
            dispatch(getAllCartProducts());
            dispatch(getAllHoldCartProducts());
            dispatch(setDrawerAmount());
            dispatch(getInvoiceTemplate()); 


        } else {

            dispatch(getSaleHistoryWC());
            dispatch(getCurrentCart());
            dispatch(checkLoginUser());
            dispatch(getAllCategories());
            dispatch(getAllOrdersWC());
            dispatch(getAllCustomersWC());
            dispatch(taxAccount()); 
            dispatch(getAllProducts()); 
            dispatch(getAllDiscountWC());
            dispatch(getAllCouponWC());
            dispatch(getAllCartProducts());
            dispatch(getAllHoldCartProducts());
            dispatch(getInvoiceTemplate()); 

        }

    }

    componentDidUpdate() {

        const { dispatch } = this.props;
        var pos_products = this.props.products.list;

        const cid = this.props.match.params.cid != undefined ? ( this.props.match.params.cid == 'all' ? 0 : this.props.match.params.cid ) : 0;

        if( pos_products && ( cid != this.state.cid || !this.state.categoryProductsLoaded ) ) {

            if( cid ) {

                this.setState({
                    cid: cid,
                    categoryProductsLoaded: true
                }, () => {
                    dispatch( LoadCategoryProducts( cid, pos_products ) );
                });

            } else {

                this.setState({
                    cid: cid,
                    categoryProductsLoaded: true
                }, () => {
                    dispatch( LoadCategoryProducts( cid, pos_products ) );
                });

            }

        }

    }

    handleClick(e) {

        var categories = this.props.categories;

        let history = this.props.history;

        let category_id = jQuery(e.target).data("category-id");

        if( category_id == '-1' ) {

            jQuery('.categoryProduct').removeClass('onfocus');

            jQuery.dialog({

                title: translation.select_category_text,

                height: '500',

                content: function(){

					this.setContent("list_category_text");

						if( categories ) {

							var category_html = '';

							jQuery.each(categories, function (i, val) {

                                category_html += '<div class="categories-list-popup">';

                                category_html += '<label class="categoryProduct cursor" category-id="' + val.cat_id + '">' + ReactHtmlParser(val.name) + '</label>';

								if (val.child != undefined) {

                                    category_html += '<button class="btn btn-default eCategory"><i class="fa fa-chevron-down"></i></button>';

                                    category_html += '<div class="form-group sub-cat" style="display:none">';

                                    jQuery.each(val.child, function (ii, vall) {

                                        category_html += '<div>';

                                        category_html += '<label class="categoryProduct cursor" category-id="' + vall.cat_id + '">' +ReactHtmlParser(vall.name) + '</label>';

                                        category_html += '</div>';

                                    });

                                    category_html += '</div>';

                                }

                                category_html += '</div>';

							});
						}

						if( !category_html ) {

							category_html = "<span>"+translation.error_load_categories+"</span>";

						}

						return category_html;
				},
				onContentReady: function(){

                    jQuery(document).on("click", ".categoryProduct", function(){

                        category_id = jQuery(this).attr("category-id");

                        history.push( {
                            pathname: wkwcpos_variable.HOME_URL + '/pos/category/' + category_id,
                        } );

						jQuery(".jconfirm").remove();

                    });
                    jQuery(document).off('click', '.eCategory');
                    jQuery(document).on('click', '.eCategory', function () {

                        if (jQuery(this).children().hasClass('fa-chevron-down')) {
                            jQuery(this).children().removeClass('fa-chevron-down');
                            jQuery(this).children().addClass('fa-chevron-up');
                            jQuery(this).next().slideDown();
                        } else if (jQuery(this).children().hasClass('fa-chevron-up')) {
                            jQuery(this).children().removeClass('fa-chevron-up');
                            jQuery(this).children().addClass('fa-chevron-down');
                            jQuery(this).next().slideUp();
                        };

                    });
				},
				columnClass: 'small',
                backgroundDismiss: true,
			});

        }

    }

    render() {

        var products = '';
        var mainProducts = this.props.products;
        var searchText = mainProducts.s;

        var categoryText = this.props.match.params.cid != undefined && this.props.match.params.cid > 0 ? this.props.match.params.cid : '';

        if( searchText) {
            products = Array.from(mainProducts.sproducts);
        } else if( categoryText ) {
            products = Array.from(mainProducts.cproducts);
        } else {
            products = Array.from(mainProducts.list);
		}
		
		let cC = 6;
		let sW = window.innerWidth;

		if ( sW > 1600 ) {
			cC = 7;
		} else if ( sW > 1500 && sW < 1600 ) {
			cC = 6;
		} else if ( sW > 1300 && sW < 1500 ) {
			cC = 5;
		} else if ( sW > 1024 && sW < 1301 ) {
			cC = 4;
		} else {
			cC = 3;
        }
        
        cC = applyFilters(CHANGE_NUMBER_OF_PRODUCT_LIST_PER_ROW, cC, sW);

		var pA = [];
		var ii = 1;
		var jj = 0;
		let cR;

		products.forEach( (item, index) => {
			cR = cC + 1;
			if (ii%cR==0) {
				ii = 1;
				jj++;
			}
			if ( Array.isArray(pA[jj]) && pA[jj].length ) {
				pA[jj].push(item);
			} else {
				pA[jj] = [item];
			}
			ii++;
		});

        let currency = this.props.currency;
        let current_cart = this.props.current_cart;
        var custom_var = Array.from(currency.default);

        var currency_symbol = custom_var.map( (element) => {
            return element.symbol;
        })

        let categories = Array.from(this.props.categories);
        categories = categories.splice(0, 4);

        const categories_list = categories.map( (val, i) => {

            let categoryClass = 'wkwcpos-tabs';
            if( val.cat_id == this.state.cid ) {
                categoryClass += ' pos-active';
            }

            return( <Link key={i} className={categoryClass} to={ wkwcpos_variable.HOME_URL + '/pos/category/' + val.cat_id}>{ReactHtmlParser(val.name)}</Link> );

        });

        var image_url = apif_script.assets + '/images/no-product.png';

        let allCategoryClass = 'wkwcpos-tabs';
        if( 0 == this.state.cid ) {
            allCategoryClass += ' pos-active';
		}
		
		const Cell = ({ columnIndex, rowIndex, style }) => {
            if ( undefined != pA[rowIndex][columnIndex] ) {
                return (
                    <div
                    className={
                        columnIndex % 2
                        ? rowIndex % 2 === 0
                            ? 'wkwcpos-grid-item-odd'
                            : 'wkwcpos-grid-item-even'
                        : rowIndex % 2
                            ? 'wkwcpos-grid-item-odd'
                            : 'wkwcpos-grid-item-even'
                    }
                    style={style}
                    >
                        <LazyLoad 
                            once={true}
                            key={columnIndex}
                            overflow
                            height={200}
                        >
                            <Product key={columnIndex} cart={current_cart} currency_symbol={currency_symbol} product={pA[rowIndex][columnIndex]}></Product>
                        </LazyLoad>
                    </div>
                )
            } else {
                return '';
            }
        };

        if( this.props.products.isFetching == 1 ) {
            if( document.querySelector('.ongoing-process') ) {
                document.querySelector('.ongoing-process').style.display = 'block';
            }
        }

        return (

            <div className="pos-tabContent pos-body-wrap" id="pos-home">

                <div className="pos-categories">

                    <nav className="pos-categories-header">
                        <nav>
                            <Link className={allCategoryClass} to={ wkwcpos_variable.HOME_URL + '/pos/category/all'}>{ __( 'All', 'wc_pos' ) }</Link>
                            {categories_list}
                        </nav>
                        <ul>
                            <li className="explore-more" onClick={this.handleClick}><span data-category-id="-1" className="fa fa-external-link"></span></li>
                        </ul>
                    </nav>

                </div>

                <div className="ongoing-process"></div>

				{
                    products.length > 0 ?
                    <Grid
                        className="wkwcpos-grid pos-main-wrapper"
                        columnCount={cC}
                        columnWidth={applyFilters(CHANGE_WIDTH_PRODUCT_TILE, 160)}
                        height={window.innerHeight}
                        rowCount={pA.length}
                        rowHeight={applyFilters(CHANGE_HEIGHT_PRODUCT_TILE, 240)}
                        width={1000}
                    >
                        {Cell}
                    </Grid> : <div className="no-products"><img src={image_url} /><span className="no-result"><i className="fa fa-warning"></i>{ translation.error_no_category_product }</span></div>
                }

            </div>

        );
    }
}

const mapStateToProps = state => ({
    products:state.products,
    currency:state.currency,
    categories:state.categories.list,
    current_cart:state.current_cart,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ LoadCategoryProducts, getCurrentCart,checkLoginUser, getAllCategories, getAllCustomersWC, taxAccount, getAllProducts, getAllOrdersWC, getAllDiscountWC, getAllCouponWC, getSaleHistoryWC, getAllCartProducts, getAllHoldCartProducts, setDrawerAmount }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);
