import React, { Component } from 'react';

import Buttons from './components/buttons/buttons.jsx';
import Invoice from './components/invoice/invoice.jsx';
import EditElement from './components/editElement/editElement.jsx';
import './App.less';
import { __ } from '@wordpress/i18n';

class App extends Component {

    constructor(props) {
        super(props);

        const queryString = window.location.search;
        const urlParams   = new URLSearchParams(queryString);
        const posUser     = urlParams.get('pos_user');
        const posOrder    = urlParams.get('pos_order');

        const editable = ! posUser && ! posOrder;

        this.state = {
            editElement: 0,
            element: '',
            editable : editable,
        };
    }

    componentDidMount() {
        if ( this.state.editable ) {
            document.querySelector( '.wkwcpos-invoice-wrapper' ).addEventListener( 'click', e => {
                if ( e.target.classList.contains( 'wkwcpos-invoice-editable' ) ) {
                    if ( e.target.classList.contains( 'wkwcpos-invoice-edit' ) ) {
                        e.target.classList.remove( 'wkwcpos-invoice-edit' );
                        this.setElementInState('');
                    } else {
                        document.querySelectorAll( '.wkwcpos-invoice-editable' ).forEach( editableElement => {
                            if ( editableElement.classList.contains( 'wkwcpos-invoice-edit' ) ) {
                                editableElement.classList.remove( 'wkwcpos-invoice-edit' );
                            }
                        } );
                        e.target.classList.add( 'wkwcpos-invoice-edit' );
                        this.setElementInState(e.target);
                    }
                }
            } );
        }
    }

    setElementInState = (element = '') => {
        if ( element ) {
            this.setState({
                editElement: 1,
                element : element,
            });
        } else {
            this.setState({
                editElement: 0,
                element : element,
            });
        }
    }

    handleSave = () => {
        const invoiceHtml = document.querySelector( '.wkwcpos-invoice-wrapper-container' ).innerHTML;

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const invoiceId = urlParams.get('id');

        fetch( wkwcposInvoiceObj.api_admin_ajax, {
            method: 'POST',
            headers: new Headers( {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            } ),
            body: `action=wkwcpos_save_invoice&nonce=${wkwcposInvoiceObj.pos_api_nonce}&id=${invoiceId}&invoice_html=${invoiceHtml}`,
        })
        .then( response => response.ok ? response.json() : false )
        .then(response => {

            if ( response.success ) {
                const URL = window.location.href + '&invoice_saved=true';
                window.location.href = URL;
            }

        } )
        .catch((err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.editable ? "wkwcpos-invoice-container editable" : 'wkwcpos-invoice-container'}>
                    { this.state.editable ?
                        <Buttons editElement={this.state.editElement} element={this.state.element} setElement={this.setElementInState} />
                    : ''}
                    <Invoice />
                    {this.state.editElement && this.state.element ? <EditElement element={this.state.element} setElement={this.setElementInState} /> : ''}
                </div>
                <br />
                { this.state.editable ?
                <input type="button" class="button button-primary" value={__( 'Save', 'wc_pos' )} onClick={this.handleSave} />
                : ''}
            </React.Fragment>
        );
    }
}

export default App;