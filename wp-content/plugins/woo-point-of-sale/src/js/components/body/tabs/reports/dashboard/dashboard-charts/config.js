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
	charts as ordersCharts
} from './../../analytics/report/orders/config';
import {
	charts as productsCharts
} from './../../analytics/report/products/config';
import {
	charts as revenueCharts
} from './../../analytics/report/revenue/config';
import {
	charts as couponsCharts
} from './../../analytics/report/coupons/config';
import {
	charts as taxesCharts
} from './../../analytics/report/taxes/config';
import {
	charts as paymentsCharts
} from './../../analytics/report/payments/config';

const REPORTS_CHARTS_FILTER = 'wkwcpos_reports_charts_filter';

const charts = {
	revenue: revenueCharts,
	orders: ordersCharts,
	products: productsCharts,
	coupons: couponsCharts,
	taxes: taxesCharts,
	payments: paymentsCharts, 
};

const defaultCharts = [
	{
		label: __( 'Gross Revenue', 'wc_pos' ),
		report: 'revenue',
		key: 'gross_revenue',
	},
	{
		label: __( 'Net Revenue', 'wc_pos' ),
		report: 'revenue',
		key: 'net_revenue',
	},
	{
		label: __( 'Orders', 'wc_pos' ),
		report: 'orders',
		key: 'orders_count',
	},
	{
		label: __( 'Average Order Value', 'wc_pos' ),
		report: 'orders',
		key: 'avg_order_value',
	},
	{
		label: __( 'Items Sold', 'wc_pos' ),
		report: 'products',
		key: 'items_sold',
	},
	{
		label: __( 'Refunds', 'wc_pos' ),
		report: 'revenue',
		key: 'refunds',
	},
	{
		label: __( 'Discounted Orders', 'wc_pos' ),
		report: 'coupons',
		key: 'orders_count',
	},
	{
		label: __( 'Gross discounted', 'wc_pos' ),
		report: 'coupons',
		key: 'amount',
	},
	{
		label: __( 'Total Tax', 'wc_pos' ),
		report: 'taxes',
		key: 'total_tax',
	},
	{
		label: __( 'Order Tax', 'wc_pos' ),
		report: 'taxes',
		key: 'order_tax',
	},
	{
		label: __('Cash Payments', 'wc_pos'),
		report: 'payments',
		key: 'cash_amount',
	},
	{
		label: __('Other Payments', 'wc_pos'),
		report: 'payments',
		key: 'card_amount',
	}
];

export const uniqCharts = applyFilters(
	REPORTS_CHARTS_FILTER,
	defaultCharts.map( chartDef => ( {
		...charts[ chartDef.report ].find( chart => chart.key === chartDef.key ),
		label: chartDef.label,
		endpoint: chartDef.report,
	} ) )
);
