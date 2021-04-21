/** @format */
/**
 * External dependencies
 */
import { MINUTE } from '@fresh-data/framework';
import wkwcpos_variable from './../config';

export const NAMESPACE = wkwcpos_variable.HOME_URL + '/wp-json/pos/v1';

export const DEFAULT_REQUIREMENT = {
	timeout: 1 * MINUTE,
	freshness: 30 * MINUTE,
};

// WordPress & WooCommerce both set a hard limit of 100 for the per_page parameter
export const MAX_PER_PAGE = 100;

export const DEFAULT_ACTIONABLE_STATUSES = [ 'processing', 'on-hold', 'completed' ];

export const QUERY_DEFAULTS = {
	pageSize: 25,
	period: 'month',
	compare: 'previous_year',
};
