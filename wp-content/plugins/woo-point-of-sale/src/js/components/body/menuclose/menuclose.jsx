import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeMenu } from '../../../actions/menu';
import './less/menuclose.less';

class MenuClose extends Component {

    constructor(props) {

        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        const { dispatch } = this.props;
        
        if (this.props.sideMenuVisible) {

            dispatch(closeMenu());

        }

    }

    render() {

        const menu_visble = this.props.sideMenuVisible;

        let cssClass = '';

        if( menu_visble ) {
            cssClass = 'posmenu-active';
        }

        return (

            <div className={"overlay-to-activate-close " + cssClass} onClick={this.handleClick}></div>

        );

    }
}

const mapStateToProps = state => ({
    sideMenuVisible: state.sideMenuVisible
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ closeMenu }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(MenuClose);
