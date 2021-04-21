/** @format */
/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
// import { getCustomerLabels, getRequestByIdString } from 'lib/async-requests';
import { getCustomerLabels, getRequestByIdString } from '../../../../../../../lib/async-requests';
// import { NAMESPACE } from 'wc-api/constants';
import { NAMESPACE } from '../../../../../../../api/constants';

const CUSTOMERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_customers_report_filters';
const CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_customers_report_advanced_filters';

export const filters = applyFilters( CUSTOMERS_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'wc_pos' ),
		staticParams: [],
		param: 'filter',
		showFilters: () => true,
		filters: [
			{ label: __( 'All Customers', 'wc_pos' ), value: 'all' },
			{
				label: __( 'Single Customer', 'wc_pos' ),
				value: 'select_customer',
				chartMode: 'item-comparison',
				subFilters: [
					{
						component: 'Search',
						value: 'single_customer',
						chartMode: 'item-comparison',
						path: [ 'select_customer' ],
						settings: {
							type: 'customers',
							param: 'customers',
							getLabels: getCustomerLabels,
							labels: {
								placeholder: __( 'Type to search for a customer', 'wc_pos' ),
								button: __( 'Single Customer', 'wc_pos' ),
							},
						},
					},
				],
			},
			{ label: __( 'Advanced Filters', 'wc_pos' ), value: 'advanced' },
		],
	},
] );

/*eslint-disable max-len*/
export const advancedFilters = applyFilters( CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER, {
	title: _x(
		'Customers Match {{select /}} Filters',
		'A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE',
		'wc_pos'
	),
	filters: {
		name: {
			labels: {
				add: __( 'Name', 'wc_pos' ),
				placeholder: __( 'Search', 'wc_pos' ),
				remove: __( 'Remove customer name filter', 'wc_pos' ),
				rule: __( 'Select a customer name filter match', 'wc_pos' ),
				/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Name{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select customer name', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to customer names including a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Includes', 'customer names', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to customer names excluding a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Excludes', 'customer names', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'customers',
				getLabels: getRequestByIdString( NAMESPACE + '/customers', customer => ( {
					id: customer.id,
					label: customer.name,
				} ) ),
			},
		},
		country: {
			labels: {
				add: __( 'Country', 'wc_pos' ),
				placeholder: __( 'Search', 'wc_pos' ),
				remove: __( 'Remove country filter', 'wc_pos' ),
				rule: __( 'Select a country filter match', 'wc_pos' ),
				/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Country{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select country', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to countries including a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Includes', 'countries', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to countries excluding a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Excludes', 'countries', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'countries',
				getLabels: async value => {
					const countries =
						( wcSettings.dataEndpoints && wcSettings.dataEndpoints.countries ) || [];

					const allLabels = countries.map( country => ( {
						id: country.code,
						label: decodeEntities( country.name ),
					} ) );

					const labels = value.split( ',' );
					return await allLabels.filter( label => {
						return labels.includes( label.id );
					} );
				},
			},
		},
		username: {
			labels: {
				add: __( 'Username', 'wc_pos' ),
				placeholder: __( 'Search customer username', 'wc_pos' ),
				remove: __( 'Remove customer username filter', 'wc_pos' ),
				rule: __( 'Select a customer username filter match', 'wc_pos' ),
				/* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select customer username', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Includes', 'customer usernames', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Excludes', 'customer usernames', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'usernames',
				getLabels: getCustomerLabels,
			},
		},
		email: {
			labels: {
				add: __( 'Email', 'wc_pos' ),
				placeholder: __( 'Search customer email', 'wc_pos' ),
				remove: __( 'Remove customer email filter', 'wc_pos' ),
				rule: __( 'Select a customer email filter match', 'wc_pos' ),
				/* translators: A sentence describing a customer email filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Email{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select customer email', 'wc_pos' ),
			},
			rules: [
				{
					value: 'includes',
					/* translators: Sentence fragment, logical, "Includes" refers to customer emails including a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Includes', 'customer emails', 'wc_pos' ),
				},
				{
					value: 'excludes',
					/* translators: Sentence fragment, logical, "Excludes" refers to customer emails excluding a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Excludes', 'customer emails', 'wc_pos' ),
				},
			],
			input: {
				component: 'Search',
				type: 'emails',
				getLabels: getRequestByIdString( NAMESPACE + '/customers', customer => ( {
					id: customer.id,
					label: customer.email,
				} ) ),
			},
		},
		orders_count: {
			labels: {
				add: __( 'No. of Orders', 'wc_pos' ),
				remove: __( 'Remove order filter', 'wc_pos' ),
				rule: __( 'Select an order count filter match', 'wc_pos' ),
				title: __(
					'{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}',
					'wc_pos'
				),
			},
			rules: [
				{
					value: 'max',
					/* translators: Sentence fragment, logical, "Less Than" refers to number of orders a customer has placed, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Less Than', 'number of orders', 'wc_pos' ),
				},
				{
					value: 'min',
					/* translators: Sentence fragment, logical, "More Than" refers to number of orders a customer has placed, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'More Than', 'number of orders', 'wc_pos' ),
				},
				{
					value: 'between',
					/* translators: Sentence fragment, logical, "Between" refers to number of orders a customer has placed, between two given integers. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Between', 'number of orders', 'wc_pos' ),
				},
			],
			input: {
				component: 'Number',
			},
		},
		total_spend: {
			labels: {
				add: __( 'Total Spend', 'wc_pos' ),
				remove: __( 'Remove total spend filter', 'wc_pos' ),
				rule: __( 'Select a total spend filter match', 'wc_pos' ),
				title: __( '{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
			},
			rules: [
				{
					value: 'max',
					/* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Less Than', 'total spend by customer', 'wc_pos' ),
				},
				{
					value: 'min',
					/* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'More Than', 'total spend by customer', 'wc_pos' ),
				},
				{
					value: 'between',
					/* translators: Sentence fragment, logical, "Between" refers to total spending by a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Between', 'total spend by customer', 'wc_pos' ),
				},
			],
			input: {
				component: 'Currency',
			},
		},
		avg_order_value: {
			labels: {
				add: __( 'AOV', 'wc_pos' ),
				remove: __( 'Remove average order value filter', 'wc_pos' ),
				rule: __( 'Select an average order value filter match', 'wc_pos' ),
				title: __( '{{title}}AOV{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
			},
			rules: [
				{
					value: 'max',
					/* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Less Than', 'average order value of customer', 'wc_pos' ),
				},
				{
					value: 'min',
					/* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */

					label: _x( 'More Than', 'average order value of customer', 'wc_pos' ),
				},
				{
					value: 'between',
					/* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Between', 'average order value of customer', 'wc_pos' ),
				},
			],
			input: {
				component: 'Currency',
			},
		},
		registered: {
			labels: {
				add: __( 'Registered', 'wc_pos' ),
				remove: __( 'Remove registered filter', 'wc_pos' ),
				rule: __( 'Select a registered filter match', 'wc_pos' ),
				/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Registered{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select registered date', 'wc_pos' ),
			},
			rules: [
				{
					value: 'before',
					/* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Before', 'date', 'wc_pos' ),
				},
				{
					value: 'after',
					/* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'After', 'date', 'wc_pos' ),
				},
				{
					value: 'between',
					/* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Between', 'date', 'wc_pos' ),
				},
			],
			input: {
				component: 'Date',
			},
		},
		last_active: {
			labels: {
				add: __( 'Last active', 'wc_pos' ),
				remove: __( 'Remove last active filter', 'wc_pos' ),
				rule: __( 'Select a last active filter match', 'wc_pos' ),
				/* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
				title: __( '{{title}}Last active{{/title}} {{rule /}} {{filter /}}', 'wc_pos' ),
				filter: __( 'Select registered date', 'wc_pos' ),
			},
			rules: [
				{
					value: 'before',
					/* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Before', 'date', 'wc_pos' ),
				},
				{
					value: 'after',
					/* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'After', 'date', 'wc_pos' ),
				},
				{
					value: 'between',
					/* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
					label: _x( 'Between', 'date', 'wc_pos' ),
				},
			],
			input: {
				component: 'Date',
			},
		},
	},
} );
/*eslint-enable max-len*/
