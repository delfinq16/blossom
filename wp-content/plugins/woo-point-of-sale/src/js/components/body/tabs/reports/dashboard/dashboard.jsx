/** @format */
/**
 * External dependencies
 */
import React, { Component, Fragment } from 'react';

/**
 * Internal dependencies
 */
import './less/dashboard.less';
import DashboardCharts from './dashboard-charts';
import { parse } from 'qs';

import ReportFilters from './../analytics/components/report-filters'; 
// import { ReportFilters } from '@woocommerce/components'; 

class Dashboard extends Component {

	getQuery(searchString) {
		if (!searchString) {
			return {};
		}

		searchString = searchString.replace( '#/', '' );

		const search = searchString.substring(1);

		return parse(search);
	}

	render() {

		let query = {};

		if( this.props.location.search != undefined ) {
			query = this.getQuery(this.props.location.search);
		} else if( this.props.location.hash ) {
			query = this.getQuery(this.props.location.hash);
		}

		const path = "/";
		
		const hiddenBlocks = [];

		return (
			<Fragment>
				<ReportFilters query={query} path={path} />
				<DashboardCharts query={query} path={path} hiddenBlocks={hiddenBlocks}/> 
			</Fragment>
		);
	}
}

export default  Dashboard;
