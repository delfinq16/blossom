/** @format */
/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import {
	getCouponLabels,
	getProductLabels
} from './../../../../../../../lib/async-requests';

const { orderStatuses } = wcSettings;

const ORDERS_REPORT_CHARTS_FILTER = 'woocommerce_admin_orders_report_charts';
const ORDERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_orders_report_filters';
const ORDERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_orders_report_advanced_filters';

export const charts = applyFilters( ORDERS_REPORT_CHARTS_FILTER, [
	{
		key: 'orders_count',
		label: __( 'Orders Count', 'wc_pos' ),
		type: 'number',
	},
	{
		key: 'net_revenue',
		label: __( 'Net Revenue', 'wc_pos' ),
		order: 'desc',
		orderby: 'net_total',
		type: 'currency',
	},
	{
		key: 'avg_order_value',
		label: __( 'Average Order Value', 'wc_pos' ),
		type: 'currency',
	},
	{
		key: 'avg_items_per_order',
		label: __( 'Average Items Per Order', 'wc_pos' ),
		order: 'desc',
		orderby: 'num_items_sold',
		type: 'average',
	},
] );

export const filters = applyFilters( ORDERS_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'wc_pos' ),
		staticParams: [ 'chart' ],
		param: 'filter',
		showFilters: () => true,
		filters: [
			{ label: __( 'All Orders', 'wc_pos' ), value: 'all' },
			{ label: __( 'Advanced Filters', 'wc_pos' ), value: 'advanced' },
		],
	},
] );

/*eslint-disable max-len*/
export const advancedFilters = applyFilters( ORDERS_REPORT_ADVANCED_FILTERS_FILTER, {
	title: _x(
		'Orders Match {{select /}} Filters',
		'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
		'wc_pos'
	),
	filters: {
		status: {
			labels: {
				add: __( 'Order Status', 'wc_pos' ),
				remove: __( 'Remove order status filter', 'wc_pos' ),
				rule: __( 'Select an order status filter match', 'wc_pos' ),
				/* translators: A sentence describing an Order Status filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
				title: __( '{{title}}Order Status{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select an order status', 'wc_pos' ),
			},
			rules: [
				{
					value: 'is',
					/* translators: Sentence fragment, logical, "Is" refers to searching for orders matching a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Is', 'order status', 'wc_pos' ),
				},
				{
					value: 'is_not',
					/* translators: Sentence fragment, logical, "Is Not" refers to searching for orders that don\'t match a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Is Not', 'order status', 'wc_pos' ),
				},
			],
			input: {
				component: 'SelectControl',
				options: Object.keys( orderStatuses ).map( key => ( {
					value: key,
					label: orderStatuses[ key ],
				} ) ),
			},
		},
		product: {
			labels: {
				add: __( 'Products', 'wc_pos' ),
				placeholder: __( 'Search products', 'wc_pos' ),
				remove: __( 'Remove products filter', 'wc_pos' ),
				rule: __( 'Select a product filter match', 'wc_pos' ),
				/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
				title: __( '{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select products', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Includes', 'products', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Excludes', 'products', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'products',
				getLabels: getProductLabels,
			},
		},
		coupon: {
			labels: {
				add: __( 'Coupon Codes', 'wc_pos' ),
				placeholder: __( 'Search coupons', 'wc_pos' ),
				remove: __( 'Remove coupon filter', 'wc_pos' ),
				rule: __( 'Select a coupon filter match', 'wc_pos' ),
				/* translators: A sentence describing a Coupon filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
				title: __( '{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select coupon codes', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to orders including a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Includes', 'coupon code', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
					label: _x( 'Excludes', 'coupon code', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'coupons',
				getLabels: getCouponLabels,
			},
		},
		customer_type: {
			labels: {
				add: __( 'Customer Type', 'wc_pos' ),
				remove: __( 'Remove customer filter', 'wc_pos' ),
				rule: __( 'Select a customer filter match', 'wc_pos' ),
				/* translators: A sentence describing a Customer filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
				title: __( '{{title}}Customer is{{/title}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select a customer type', 'wc_pos' ),
			},
			input: {
				component: 'SelectControl',
				options: [
					{ value: 'new', label: __( 'New', 'wc_pos' ) },
					{ value: 'returning', label: __( 'Returning', 'wc_pos' ) },
				],
				defaultOption: 'new',
			},
		},
		refunds: {
			labels: {
				add: __( 'Refunds', 'wc_pos' ),
				remove: __( 'Remove refunds filter', 'wc_pos' ),
				rule: __( 'Select a refund filter match', 'wc_pos' ),
				title: __( '{{title}}Refunds{{/title}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select a refund type', 'wc_pos' ),
			},
			input: {
				component: 'SelectControl',
				options: [
					{ value: 'all', label: __( 'All', 'wc_pos' ) },
					{ value: 'partial', label: __( 'Partially refunded', 'wc_pos' ) },
					{ value: 'full', label: __( 'Fully refunded', 'wc_pos' ) },
					{ value: 'none', label: __( 'None', 'wc_pos' ) },
				],
				defaultOption: 'all',
			},
		},
	},
} );
/*eslint-enable max-len*/
