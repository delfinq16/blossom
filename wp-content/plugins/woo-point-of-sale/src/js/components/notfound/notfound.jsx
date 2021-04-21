
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wkwcpos_variable from '../../config';
import './less/notfound.less';
import { __ } from '@wordpress/i18n';

export default class NotFound extends Component {

    render() {

        return(
            <div className="wkwcpos-not-found">
                <h1>4<span>0</span>4</h1>
                <h2>{__('YOU ARE LOST IN THE', 'wc_pos' )} <span>{__('SPACE', 'wc_pos' )}</span>!</h2>
                <p>{__('The page you are looking for doesn’t exist or have secretly escaped; head back to home and make a fresh move again.', 'wc_pos' )}</p>
                <Link className="button" to={wkwcpos_variable.HOME_URL + '/pos'}>{__('RETURN TO POS', 'wc_pos' )}</Link>
            </div>
        );

    }

}