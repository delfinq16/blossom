/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const STOCK_REPORT_FILTERS_FILTER = 'woocommerce_admin_stock_report_filters';
const STOCK_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_stock_report_advanced_filters';

export const showDatePicker = false;

export const filters = applyFilters( STOCK_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'wc_pos' ),
		staticParams: [],
		param: 'type',
		showFilters: () => true,
		filters: [
			{ label: __( 'All Products', 'wc_pos' ), value: 'all' },
			{ label: __( 'Out of Stock', 'wc_pos' ), value: 'outofstock' },
			{ label: __( 'Low Stock', 'wc_pos' ), value: 'lowstock' },
			{ label: __( 'In Stock', 'wc_pos' ), value: 'instock' },
			{ label: __( 'On Backorder', 'wc_pos' ), value: 'onbackorder' },
		],
	},
] );

export const advancedFilters = applyFilters( STOCK_REPORT_ADVANCED_FILTERS_FILTER, {} );
