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
	getCouponLabels
} from './../../../../../../../lib/async-requests';

const COUPON_REPORT_CHARTS_FILTER = 'woocommerce_admin_coupon_report_charts';
const COUPON_REPORT_FILTERS_FILTER = 'woocommerce_admin_coupon_report_filters';
const COUPON_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_coupon_report_advanced_filters';

export const charts = applyFilters( COUPON_REPORT_CHARTS_FILTER, [
	{
		key: 'orders_count',
		label: __( 'Discounted Orders', 'wc_pos' ),
		order: 'desc',
		orderby: 'orders_count',
		type: 'number',
	},
	{
		key: 'amount',
		label: __( 'Amount', 'wc_pos' ),
		order: 'desc',
		orderby: 'amount',
		type: 'currency',
	},
] );

export const filters = applyFilters( COUPON_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'wc_pos' ),
		staticParams: [],
		param: 'filter',
		showFilters: () => true,
		filters: [
			{ label: __( 'All Coupons', 'wc_pos' ), value: 'all' },
			{
				label: __( 'Single Coupon', 'wc_pos' ),
				value: 'select_coupon',
				chartMode: 'item-comparison',
				subFilters: [
					{
						component: 'Search',
						value: 'single_coupon',
						chartMode: 'item-comparison',
						path: [ 'select_coupon' ],
						settings: {
							type: 'coupons',
							param: 'coupons',
							getLabels: getCouponLabels,
							labels: {
								placeholder: __( 'Type to search for a coupon', 'wc_pos' ),
								button: __( 'Single Coupon', 'wc_pos' ),
							},
						},
					},
				],
			},
			{
				label: __( 'Comparison', 'wc_pos' ),
				value: 'compare-coupons',
				settings: {
					type: 'coupons',
					param: 'coupons',
					getLabels: getCouponLabels,
					labels: {
						title: __( 'Compare Coupon Codes', 'wc_pos' ),
						update: __( 'Compare', 'wc_pos' ),
						helpText: __( 'Check at least two coupon codes below to compare', 'wc_pos' ),
					},
				},
			},
		],
	},
] );

export const advancedFilters = applyFilters( COUPON_REPORT_ADVANCED_FILTERS_FILTER, {} );
