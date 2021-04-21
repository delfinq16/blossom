/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n'; 
import {
	Component,
	Fragment
} from '@wordpress/element';
import {
	getAllowedIntervalsForQuery
} from '@woocommerce/date';

import classNames from 'classnames';
import {
	uniqCharts
} from './config';
import ChartBlock from './block';

import {
	SectionHeader
} from '@woocommerce/components';

import {
	IconButton,
	NavigableMenu,
	SelectControl
} from '@wordpress/components';

import Gridicon from 'gridicons';

import './style.less';

class DashboardCharts extends Component {

	constructor(props) {
		super( ...arguments );

		this.state = {
			chartType: props.userPrefChartType || 'line',
			interval: props.userPrefChartInterval || 'day',
		};
	}

	handleTypeToggle(chartType) {

		return () => {

			this.setState({
				chartType
			});

		};
	}

	setInterval = interval => {
		this.setState( { interval } );
	};

	renderIntervalSelector() {

		const allowedIntervals = getAllowedIntervalsForQuery( this.props.query );
		if ( ! allowedIntervals || allowedIntervals.length < 1 ) {
			return null;
		}

		const intervalLabels = {
			hour: __( 'By hour', 'wc_pos' ),
			day: __( 'By day', 'wc_pos' ),
			week: __( 'By week', 'wc_pos' ),
			month: __( 'By month', 'wc_pos' ),
			quarter: __( 'By quarter', 'wc_pos' ),
			year: __( 'By year', 'wc_pos' ),
		};

		return (
			<SelectControl
				className="woocommerce-chart__interval-select"
				value={ this.state.interval }
				options={ allowedIntervals.map( allowedInterval => ( {
					value: allowedInterval,
					label: intervalLabels[ allowedInterval ],
				} ) ) }
				onChange={ this.setInterval }
			/>
		);
	}

	render() {

		const {
			hiddenBlocks,
			path,
			title
		} = this.props;
		const {
			chartType,
			interval
		} = this.state;

		const query = {
			...this.props.query,
			chartType,
			interval
		};  

		return (
			<Fragment>
				<div className="woocommerce-dashboard__dashboard-charts">
					<SectionHeader
						title={ title || __( 'Charts', 'wc_pos' ) } 
						className={ 'has-interval-select' }
					>
						{ this.renderIntervalSelector() }
						<NavigableMenu
							className="woocommerce-chart__types"
							orientation="horizontal"
							role="menubar"
						>
							<IconButton
								className={ classNames( 'woocommerce-chart__type-button', {
									'woocommerce-chart__type-button-selected':
										! query.chartType || query.chartType === 'line',
								} ) }
								icon={ <Gridicon icon="line-graph" /> }
								title={ __( 'Line chart', 'wc_pos' ) }
								aria-checked={ query.chartType === 'line' }
								role="menuitemradio"
								tabIndex={ query.chartType === 'line' ? 0 : -1 }
								onClick={ this.handleTypeToggle( 'line' ) }
							/>
							<IconButton
								className={ classNames( 'woocommerce-chart__type-button', {
									'woocommerce-chart__type-button-selected': query.chartType === 'bar',
								} ) }
								icon={ <Gridicon icon="stats-alt" /> }
								title={ __( 'Bar chart', 'wc_pos' ) }
								aria-checked={ query.chartType === 'bar' }
								role="menuitemradio"
								tabIndex={ query.chartType === 'bar' ? 0 : -1 }
								onClick={ this.handleTypeToggle( 'bar' ) }
							/>
						</NavigableMenu>
					</SectionHeader>
					<div className="woocommerce-dashboard__columns">
						{ uniqCharts.map( chart => {
							return hiddenBlocks.includes( chart.endpoint + '_' + chart.key ) ? null : (
								<ChartBlock
									charts={ [ chart ] }
									endpoint={ chart.endpoint }
									key={ chart.endpoint + '_' + chart.key }
									path={ path }
									query={ query }
								/>
							);
						} ) }
					</div>
				</div>
			</Fragment>
		);
	}
}

export default DashboardCharts;
