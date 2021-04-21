/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
const REVENUE_REPORT_FILTERS_FILTER = 'woocommerce_admin_revenue_report_filters';
const REVENUE_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_revenue_report_advanced_filters';

export const charts = applyFilters( REVENUE_REPORT_CHARTS_FILTER, [
	{
		key: 'gross_revenue',
		label: __( 'Gross Revenue', 'wc_pos' ),
		order: 'desc',
		orderby: 'gross_revenue',
		type: 'currency',
	},
	{
		key: 'coupons',
		label: __( 'Coupons', 'wc_pos' ),
		order: 'desc',
		orderby: 'coupons',
		type: 'currency',
	},
	{
		key: 'taxes',
		label: __( 'Taxes', 'wc_pos' ),
		order: 'desc',
		orderby: 'taxes',
		type: 'currency',
	},
	{
		key: 'net_revenue',
		label: __( 'Net Revenue', 'wc_pos' ),
		orderby: 'net_revenue',
		type: 'currency',
	},
	{
		key: 'refunds',
		label: __( 'Refunds', 'wc_pos' ),
		orderby: 'refunds',
		type: 'currency',
	},
] );

export const filters = applyFilters( REVENUE_REPORT_FILTERS_FILTER, [] );
export const advancedFilters = applyFilters( REVENUE_REPORT_ADVANCED_FILTERS_FILTER, {} );
