import React, { Component } from 'react';

class Loader extends Component {

    render() {

        return ( 
            <div className="modal" id="loader">
                <div className="cp-spinner cp-flip"></div>
                <div className="progress hide">
                    <div className="progress-bar progress-bar-dan"></div>
                </div>
                <div id="loading-text" className="hide"></div>
                <div id="error-text"></div>
            </div>
        );
    }
}

export default Loader;