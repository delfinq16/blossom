/** @format */
/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { applyFilters } from '@wordpress/hooks';
import { getHistory } from '@wkwcpos/navigation';


/**
 * Internal dependencies
 */
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import wkwcpos_variable from './config';
import Customer from './components/body/tabs/customer/customer.jsx';
import Pay from './components/body/tabs/pay/pay.jsx';
import Cashier from './components/body/tabs/cashier/cashier.jsx';
import Order from './components/body/tabs/order/order.jsx';
import Settings from './components/body/tabs/settings/settings.jsx';
import Home from './components/body/tabs/home/home.jsx';
import Reports from './components/body/tabs/reports/report.jsx';
import NotFound from './components/notfound/notfound.jsx';

export const PAGES_FILTER = 'wkwcpos_pages_list';

window.posStore = store;

export function getPages() {

	const pages = [
		{
			name: 'Customers',
			path: '/pos/customers',
			component: Customer
		},
		{
			name: 'Home',
			path: '/pos',
			component: Home
		},
		{
			name: 'Category',
			path: '/pos/category/:cid',
			component: Home
		},
		{
			name: 'Cashier',
			path: '/pos/cashier',
			component: Cashier
		},
		{
			name: 'Cashier Drawer',
			path: '/pos/cashier/tab/drawer',
			component: Cashier
		},
		{
			name: 'Cashier Today',
			path: '/pos/cashier/tab/today',
			component: Cashier
		},
		{
			name: 'Cashier Sale',
			path: '/pos/cashier/tab/sale',
			component: Cashier
		},
		{
			name: 'Orders',
			path: '/pos/orders',
			component: Order
		},
		{
			name: 'Hold Sale',
			path: '/pos/orders/tab/hold',
			component: Order
		},
		{
			name: 'Offline Sale',
			path: '/pos/orders/tab/offline',
			component: Order
		},
		{
			name: 'Order History',
			path: '/pos/orders/tab/history',
			component: Order
		},
		{
			name: 'Reports',
			path: '/pos/reports',
			component: Reports
		},
		{
			name: 'Settings',
			path: '/pos/settings',
			component: Settings
		},
		{
			name: 'Account Settings',
			path: '/pos/settings/tab/account',
			component: Settings
		},
		{
			name: 'Other Settings',
			path: '/pos/settings/tab/other',
			component: Settings
		},
		{
			name: 'Pay',
			path: '/pos/pay',
			component: Pay
		}

	];

	return applyFilters( PAGES_FILTER, pages );
}

document.addEventListener("DOMContentLoaded", () => {

	ReactDOM.render(
	<Provider store={store}>
		<Router history={ getHistory() }>
			<Switch>

				{ getPages().map( page => {

					return (
						<Route
							key={ wkwcpos_variable.HOME_URL + page.path }
							path={ wkwcpos_variable.HOME_URL + page.path }
							exact
							name = { page.name }
							render={ props => <App page={ page } { ...props } /> }
						/>
					);

				} ) }

				<Route component={NotFound} />

			</Switch>
		</Router>
	</Provider>
	,document.getElementById('app'));

});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();