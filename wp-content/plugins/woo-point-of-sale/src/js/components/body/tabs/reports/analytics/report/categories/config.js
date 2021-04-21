/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
// import { getCategoryLabels } from 'lib/async-requests';
import { getCategoryLabels } from '../../../../../../../lib/async-requests';

const CATEGORY_REPORT_CHARTS_FILTER = 'woocommerce_admin_category_report_charts';
const CATEGORY_REPORT_FILTERS_FILTER = 'woocommerce_admin_category_report_filters';
const CATEGORY_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_category_report_advanced_filters';

export const charts = applyFilters( CATEGORY_REPORT_CHARTS_FILTER, [
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

export const filters = applyFilters( CATEGORY_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'wc_pos' ),
		staticParams: [],
		param: 'filter',
		showFilters: () => true,
		filters: [
			{ label: __( 'All Categories', 'wc_pos' ), value: 'all' },
			{
				label: __( 'Single Category', 'wc_pos' ),
				value: 'select_category',
				chartMode: 'item-comparison',
				subFilters: [
					{
						component: 'Search',
						value: 'single_category',
						chartMode: 'item-comparison',
						path: [ 'select_category' ],
						settings: {
							type: 'categories',
							param: 'categories',
							getLabels: getCategoryLabels,
							labels: {
								placeholder: __( 'Type to search for a category', 'wc_pos' ),
								button: __( 'Single Category', 'wc_pos' ),
							},
						},
					},
				],
			},
			{
				label: __( 'Comparison', 'wc_pos' ),
				value: 'compare-categories',
				chartMode: 'item-comparison',
				settings: {
					type: 'categories',
					param: 'categories',
					getLabels: getCategoryLabels,
					labels: {
						helpText: __( 'Check at least two categories below to compare', 'wc_pos' ),
						placeholder: __( 'Search for categories to compare', 'wc_pos' ),
						title: __( 'Compare Categories', 'wc_pos' ),
						update: __( 'Compare', 'wc_pos' ),
					},
				},
			},
		],
	},
] );

export const advancedFilters = applyFilters( CATEGORY_REPORT_ADVANCED_FILTERS_FILTER, {} );
