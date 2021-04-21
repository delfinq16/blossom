/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const PAYMENT_REPORT_CHARTS_FILTER = 'woocommerce_admin_payment_report_charts';
const PAYMENT_REPORT_FILTERS_FILTER = 'woocommerce_admin_payment_report_filters';
const PAYMENT_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_payment_report_advanced_filters';

export const charts = applyFilters(PAYMENT_REPORT_CHARTS_FILTER, [
	{
		key: 'cash_amount',
		label: __( 'Cash Payment', 'wc_pos' ),
		order: 'desc',
		orderby: 'cash_amount',
		type: 'currency',
	},
	{
		key: 'card_amount',
		label: __('Cash Payment', 'wc_pos'),
		order: 'desc',
		orderby: 'cash_amount',
		type: 'currency',
	},
] );

export const filters = applyFilters(PAYMENT_REPORT_FILTERS_FILTER, []);
export const advancedFilters = applyFilters(PAYMENT_REPORT_ADVANCED_FILTERS_FILTER, {});
