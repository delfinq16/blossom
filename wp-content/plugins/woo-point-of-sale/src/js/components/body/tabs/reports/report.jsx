import React, { Component } from 'react'; 
import Dashboard from './dashboard/dashboard.jsx';

class Reports extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        return (
            <div className="woocommerce-layout__primary pos-tabContent pos-report" id="woocommerce-layout__primary">
                <div className="woocommerce-layout__main">
                    <Dashboard location={this.props.location}></Dashboard>
                </div>
            </div> 

        );
    }
}

export default Reports;
