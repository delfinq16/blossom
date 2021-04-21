import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyFilters } from '@wordpress/hooks';

import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Loader from './components/loader/loader.jsx';

import './App.less';
import { getSessionIDAuthentication } from './actions/authentication';
import { getAllCurrencyWC } from './actions/currency';

export const SHOW_HEADER_FILTER = 'wkwcpos_show_header';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const { dispatch } = this.props;

        if( this.props.history.action == 'POP' ) {
            dispatch( getSessionIDAuthentication() ).then( (res) => {
                dispatch( getAllCurrencyWC() );
            } );
        } else {
            dispatch( getAllCurrencyWC() );
        }

    }

    render() {

        let currency = this.props.currency;
        
        if( Object.keys( currency.list ).length <= 0 ) {
            return <Loader></Loader>;
        } else {
            return ( 
                <div className='pos-dashboard'> 
                    <div className="pos-height-full">
                        <div className="pos-dashboard-wrapper">
                            {
                                applyFilters( SHOW_HEADER_FILTER, true, this ) ? 
                                <Header { ...this.props }></Header>
                                : ''
                            }
                            <Body { ...this.props }></Body>
                            <Loader></Loader>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

const mapStateToProps = state => ({
    currency:state.currency
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch });
}

export default connect( mapStateToProps, mapDispatchToProps )(App);