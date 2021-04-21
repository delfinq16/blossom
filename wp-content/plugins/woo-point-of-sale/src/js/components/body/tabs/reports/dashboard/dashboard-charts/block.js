/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components'; 

/**
 * Internal dependencies
 */
import ReportChart from './../../analytics/components/report-chart';
import './block.less';

class ChartBlock extends Component {

	render() {
		const { charts, endpoint, path, query } = this.props; 
		
		if ( ! charts || ! charts.length ) {
			return null;
		} 
		
		return (
			<div
				role="presentation"
				className="woocommerce-dashboard__chart-block-wrapper" 
			>
				<Card
					className="woocommerce-dashboard__chart-block woocommerce-analytics__card"
					title={ charts[ 0 ].label }
				> 
					<ReportChart
						endpoint={ endpoint }
						query={ query }
						interactiveLegend={ false }
						legendPosition="bottom"
						path={ path }
						selectedChart={ charts[ 0 ] }
						showHeaderControls={ false }
					/>
				</Card>
			</div>
		);
	}
}

ChartBlock.propTypes = {
	charts: PropTypes.array,
	endpoint: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	query: PropTypes.object.isRequired,
};

export default ChartBlock;
