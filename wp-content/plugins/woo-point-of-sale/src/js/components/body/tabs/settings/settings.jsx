import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateDefaultCurrency, getAllCurrencyWC } from '../../../../actions/currency';
import { UpdateDefaultPrinterWC } from '../../../../actions/printers';
import { SaveManager } from '../../../../actions/settings';
import { translation } from '../../../../translation';
import './less/settings.less';
import { checkLoginUser } from '../../../../actions/login';
import wkwcpos_variable from '../../../../config';
import { Link } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

class Settings extends Component {

    constructor(props) {

        super(props); 

        this.state = {
            currency: props.currency,
            fields: {
                'pos-user-fname' : '',
                'pos-user-lname' : '',
                'pos-user-email' : '',
                'pos-user-ppwd' : '',
                'pos-user-npwd' : '',
                'pos-user-cpwd' : '',
            },
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.contactSubmit = this.contactSubmit.bind(this);
        this.settingsSubmit = this.settingsSubmit.bind(this);
    }

    componentDidMount( ) {

        const { dispatch } = this.props;

        dispatch(getAllCurrencyWC());
        dispatch(checkLoginUser());

    }
    
    componentWillReceiveProps(pos) {

        let user = pos.user;

        this.setState({ 
            fields : {
                "pos-user-fname" : user.first_name, 
                "pos-user-lname" : user.last_name, 
                "pos-user-email" : user.email, 
            },
            code : 'USD',
        });
    }

    contactSubmit(e) { 

        e.preventDefault();

        var online = navigator.onLine;

        if (!online) {

			jQuery.confirm({
                title: translation.warning_text,
                content: translation.error_offline_account,
                backgroundDismiss: function(){
                    return 'buttonName'; // the button will handle it
                },
                Okay: {
                    text: translation.okay_text,
                    btnClass: 'btn-red'
                }
            });

            return;

		} else {

            const { dispatch } = this.props;

            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
            var pos_first_name_empty_validation = translation.pos_first_name_empty_validation;
            var pos_last_name_empty_validation = translation.pos_last_name_empty_validation;
            var pos_new_pswd_empty_validation = translation.pos_new_pswd_empty_validation;
            var pos_old_pswd_empty_validation = translation.pos_old_pswd_empty_validation;
            var pos_cnf_pswd_empty_validation = translation.pos_cnf_pswd_empty_validation;
            var pos_cnf_pswd_same_validation = translation.pos_cnf_pswd_same_validation;

            //old password
            if(fields["pos-user-ppwd"]){

                if(!fields["pos-user-npwd"]){
                    formIsValid = false;
                    errors["pos-user-npwd"] = pos_new_pswd_empty_validation;
                }

                //confirm password
                if(!fields["pos-user-cpwd"]){
                    formIsValid = false;
                    errors["pos-user-cpwd"] = pos_cnf_pswd_empty_validation;
                }

                if (fields["pos-user-npwd"] && fields["pos-user-cpwd"] && fields["pos-user-npwd"] != fields["pos-user-cpwd"]){
                    formIsValid = false;
                    errors["pos-user-cpwd"] = pos_cnf_pswd_same_validation;
                }
            }

            if (fields["pos-user-npwd"]) {

                if (!fields["pos-user-ppwd"]) {
                    formIsValid = false;
                    errors["pos-user-ppwd"] = pos_old_pswd_empty_validation;
                }

                //confirm password
                if (!fields["pos-user-cpwd"]) {
                    formIsValid = false;
                    errors["pos-user-cpwd"] = pos_cnf_pswd_empty_validation;
                }

            }

            if (fields["pos-user-cpwd"]) {

                if (!fields["pos-user-npwd"]) {
                    formIsValid = false;
                    errors["pos-user-ppwd"] = pos_old_pswd_empty_validation;
                }

                //confirm password
                if (!fields["pos-user-npwd"]) {
                    formIsValid = false;
                    errors["pos-user-npwd"] = pos_cnf_pswd_empty_validation;
                }
                
            }

            //new password
            this.setState({errors: errors});

            if( formIsValid ) {
            
                dispatch( SaveManager(fields) ); 

            } 

        }

    }

    handleChange(e){   

        let fields = this.state.fields;

        fields[e.target.name] = e.target.value;        

        this.setState({fields});
    }

    settingsSubmit(e, form_data ) {

        const { dispatch } = this.props;

        let oldDefaultCode = this.props.currency.default;
        let currencylist = this.props.currency.list;

        e.preventDefault();

        if( form_data ) {

            jQuery.each( form_data, (i,val) => {

                if( val.name != undefined ) {

                    switch (val.name) {

                        case "printer":

                            dispatch( UpdateDefaultPrinterWC(val.value) ); 

                            break;

                        case "currency":

                            let defCu = currencylist.filter( (curr) => {
                                return curr.code ==  val.value;
                            }) 
                           
                            let newDefaultCode = {
                                symbol : defCu[0].symbol,
                                code : defCu[0].shortcode,
                            };

                            dispatch( UpdateDefaultCurrency(oldDefaultCode,newDefaultCode));

                        break;

                        default:
                            break;
                    }
                }
            });

        }

    }

    render() {

        let user = this.props.user;
        let currency = this.props.currency;
        let printers = this.props.printers;
        let data = [];
        let printer_list = [];
        let selectedText = '';  
        var first_name = user.first_name ? user.first_name : this.state.fields["pos-user-fname"];
        var first_name_text = translation.first_name;
        var last_name_text = translation.last_name;
        var account_settings = translation.account_settings;
		var other_settings = translation.other_settings;
		var email_text = translation.email_text;
		var previous_password = translation.previous_password;
		var new_password = translation.new_password;
		var confirm_password = translation.confirm_password;
		var update_account = translation.update_account;
		var select_currency = translation.select_currency;
		var select_language = translation.select_language;
		var english = translation.english;
		var save_settings = translation.save_settings;
        var select_invoice_printer = translation.select_invoice_printer;
        var profile_pic = '';

        const pageName = this.props.page.name;

        let accountSettingsTabClass = 'wkwcpos-tabs';
        let otherSettingsTabClass = 'wkwcpos-tabs';

        switch( pageName ) {

            case 'Settings':
            case 'Account Settings':
                accountSettingsTabClass += ' pos-active';
                break;
            case 'Other Settings':
                otherSettingsTabClass += ' pos-active';
                break;
        }

        if(user.profile_pic == '' ){

            profile_pic = apif_script.assets + "/images/17241-200.png"
        }
        else{

            profile_pic = user.profile_pic
        }

        var last_name = user.last_name ? user.last_name : this.state.fields["pos-user-lname"];

        var email = user.email ? user.email : this.state.fields["pos-user-email"];

        if( currency != undefined && Object.keys(currency).length > 0 ) {

            var defaultCode = currency.default; 
            defaultCode = Object.values(defaultCode)

            if( defaultCode.length != undefined && defaultCode.length > 0 ) {
                defaultCode = defaultCode[0].code;
            }

            jQuery.each( currency.list, function( i, val ) {
                if (val.shortcode == defaultCode || val.is_default) {

                    if (selectedText == '' && val.is_default){

                        selectedText = val.shortcode;

                    } else{

                        selectedText = defaultCode;

                    }

                } 

                data.push(<option key={i} value={val.code} dangerouslySetInnerHTML={{__html:val.shortcode}}></option>); 

            });

        }

        if( printers != undefined && Object.keys(printers).length > 0 ) {
            
            var defaultPrinter = printers.default; 

            jQuery.each( printers.list, function( i, val ) {
            
                printer_list.push(<option key={i} value={Object.keys(val)[0]} dangerouslySetInnerHTML={{__html:Object.values(val)[0]}}></option>); 

            });

        }

        return (

            <div className="pos-settings pos-tabContent" id="pos-settings">

                <div className="pos-tab-wrap">

                    <div className="pos-tab-head">

                        <Link className={accountSettingsTabClass} to={ wkwcpos_variable.HOME_URL + '/pos/settings/tab/account'}>{account_settings}</Link>

                        <Link className={otherSettingsTabClass} to={ wkwcpos_variable.HOME_URL + '/pos/settings/tab/other'}>{other_settings}</Link>

                        <Link className="float-right" to={ wkwcpos_variable.HOME_URL + '/pos'}><span className="fa fa-close" id="close-customer-list"></span></Link>

                    </div>

                    { currency.isFetching ? ( pageName == 'Settings' || pageName == 'Account Settings' ) ? 
                        <div className="postabContainer" id="account-setting-tab">

                            <div className="pos-setting-box">

                                <div className="pos-vertical-center">

                                    <img alt="pos cashier" src={profile_pic} srcSet={profile_pic} className="avatar avatar-96 photo" height="96" width="96" />

                                    <form id="save-pos-user-edit" onSubmit={((e) => this.contactSubmit(e))}>

                                        <div>
                                            <label htmlFor="pos-user-fname">{first_name_text}</label>
                                            <input id="pos-user-fname" type="text" name="pos-user-fname" autoComplete="true" defaultValue={first_name} onChange={((e) => this.handleChange( e ))} />
                                            <span className="error">{this.state.errors["pos-user-fname"]}</span>
                                            <label htmlFor="pos-user-lname">{last_name_text}</label>
                                            <input id="pos-user-lname" type="text" name="pos-user-lname" autoComplete="true" defaultValue={last_name} onChange={((e) => this.handleChange(e))} />
                                            <span className="error">{this.state.errors["pos-user-lname"]}</span>
                                            <label htmlFor="pos-user-email">{email_text}</label>
                                            <input type="text" id="pos-user-email" name="pos-user-email" autoComplete="true" onChange={((e) => this.handleChange(e))} defaultValue={email} disabled/>
                                            <span className="error">{this.state.errors["pos-user-email"]}</span>
                                            <label htmlFor="pos-user-ppwd">{previous_password}</label>
                                            <input id="pos-user-ppwd" name="pos-user-ppwd" placeholder={ __( "Previous Password", 'wc_pos' )} autoComplete="true" type="password" onChange={((e) => this.handleChange(e))} defaultValue={this.state.fields["pos-user-ppwd"]} />
                                            <span className="error">{this.state.errors["pos-user-ppwd"]}</span>
                                            <label htmlFor="pos-user-npwd">{new_password}</label>
                                            <input id="pos-user-npwd" name="pos-user-npwd" placeholder={ __( "New Password", 'wc_pos' )} type="password" autoComplete="true" onChange={((e) => this.handleChange(e))} defaultValue={this.state.fields["pos-user-npwd"]} />
                                            <span className="error">{this.state.errors["pos-user-npwd"]}</span>
                                            <label htmlFor="pos-user-cpwd">{confirm_password}</label>
                                            <input id="pos-user-cpwd" name="pos-user-cpwd" placeholder={ __( "Confirm Password", 'wc_pos' )} autoComplete="true" type="password" onChange={((e) => this.handleChange(e))} defaultValue={this.state.fields["pos-user-cpwd"]} />
                                            <span className="error">{this.state.errors["pos-user-cpwd"]}</span>
                                        </div>

                                        <div className="pos-user-save">

                                            <button type="submit" className="save-pos-user"><i className="fa fa-edit"></i>{update_account}</button>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    :

                    <div className="postabContainer" id="other-setting-tab">

                            <div className="pos-setting-box">

                            <form id="save-pos-settings" onSubmit={((e) => this.settingsSubmit( e, jQuery("#save-pos-settings").serializeArray()))}>

                                <div className="form-group">
                                    <label className="control-label" htmlFor="input-langauge">{select_language}</label>
                                    <select className="form-control" name="language" id="input-language">
                                        <option value="en-gb" defaultValue="selected">{english}</option>
                                    </select>

                                </div>
                                
                                <div className="form-group" id="select-currency">
                                
                                    <label className="control-label" htmlFor="input-currency">{select_currency}</label>

                                    <select className="form-control" name="currency" defaultValue={selectedText} id="input-currency">

                                        {data}

                                    </select>

                                </div>

                                <div className="form-group" id="select-printer">

                                    <label className="control-label" htmlFor="input-printer">{select_invoice_printer}</label>

                                    <select className="form-control" name="printer" defaultValue={defaultPrinter} id="input-printer">

                                        {printer_list}

                                    </select>

                                </div>
                                
                                <div className="pos-save-settings">

                                    <button type="submit" className="save-pos-settings"><i className="fa fa-user-plus"></i>{save_settings}</button>

                                </div>

                            </form>

                        </div>

                    </div>

                    : ''}

                </div>

            </div>

        );
    }
}

const mapStateToProps = state => ({ 
    user: state.cashier,
    currency: state.currency,
    printers: state.printers,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ SaveManager, UpdateDefaultCurrency, UpdateDefaultPrinterWC }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(Settings);

