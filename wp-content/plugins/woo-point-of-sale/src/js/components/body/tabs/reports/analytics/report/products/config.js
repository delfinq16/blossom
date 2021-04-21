/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import {
	getProductLabels,
	getVariationLabels
} from './../../../../../../../lib/async-requests';

const PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
const PRODUCTS_REPORT_FILTERS_FILTER = 'woocommerce_admin_products_report_filters';
const PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_products_report_advanced_filters';

export const charts = applyFilters( PRODUCTS_REPORT_CHARTS_FILTER, [
	{
		key: 'items_sold',
		label: __( 'Items Sold', 'wc_pos' ),
		order: 'desc',
		orderby: 'items_sold',
		type: 'number',
	},
	{
		key: 'net_revenue',
		label: __( 'Net Revenue', 'wc_pos' ),
		order: 'desc',
		orderby: 'net_revenue',
		type: 'currency',
	},
	{
		key: 'orders_count',
		label: __( 'Orders Count', 'wc_pos' ),
		order: 'desc',
		orderby: 'orders_count',
		type: 'number',
	},
] );

const filterConfig = {
	label: __( 'Show', 'wc_pos' ),
	staticParams: [],
	param: 'filter',
	showFilters: () => true,
	filters: [
		{ label: __( 'All Products', 'wc_pos' ), value: 'all' },
		{
			label: __( 'Single Product', 'wc_pos' ),
			value: 'select_product',
			chartMode: 'item-comparison',
			subFilters: [
				{
					component: 'Search',
					value: 'single_product',
					chartMode: 'item-comparison',
					path: [ 'select_product' ],
					settings: {
						type: 'products',
						param: 'products',
						getLabels: getProductLabels,
						labels: {
							placeholder: __( 'Type to search for a product', 'wc_pos' ),
							button: __( 'Single Product', 'wc_pos' ),
						},
					},
				},
			],
		},
		{
			label: __( 'Comparison', 'wc_pos' ),
			value: 'compare-products',
			chartMode: 'item-comparison',
			settings: {
				type: 'products',
				param: 'products',
				getLabels: getProductLabels,
				labels: {
					helpText: __( 'Check at least two products below to compare', 'wc_pos' ),
					placeholder: __( 'Search for products to compare', 'wc_pos' ),
					title: __( 'Compare Products', 'wc_pos' ),
					update: __( 'Compare', 'wc_pos' ),
				},
			},
		},
	],
};

const variationsConfig = {
	showFilters: query =>
		'single_product' === query.filter && !! query.products && query[ 'is-variable' ],
	staticParams: [ 'filter', 'products' ],
	param: 'filter-variations',
	filters: [
		{
			label: __( 'All Variations', 'wc_pos' ),
			chartMode: 'item-comparison',
			value: 'all',
		},
		{
			label: __( 'Comparison', 'wc_pos' ),
			chartMode: 'item-comparison',
			value: 'compare-variations',
			settings: {
				type: 'variations',
				param: 'variations',
				getLabels: getVariationLabels,
				labels: {
					helpText: __( 'Check at least two variations below to compare', 'wc_pos' ),
					placeholder: __( 'Search for variations to compare', 'wc_pos' ),
					title: __( 'Compare Variations', 'wc_pos' ),
					update: __( 'Compare', 'wc_pos' ),
				},
			},
		},
	],
};

export const filters = applyFilters( PRODUCTS_REPORT_FILTERS_FILTER, [
	filterConfig,
	variationsConfig,
] );

export const advancedFilters = applyFilters( PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER, {} );
