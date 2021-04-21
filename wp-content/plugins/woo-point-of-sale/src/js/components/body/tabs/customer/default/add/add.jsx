import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SaveCustomer, loadAllCustomers } from '../../../../../../actions/customers';
import { getAllStatesWC } from '../../../../../../actions/countries';
import { translation } from '../../../../../../translation';
import { applyFilters } from '@wordpress/hooks';
export const ADD_CUSTOM_FEILD_IN_FORM_AFTER_EMAIL = 'wkwc_add_custom_field_in_form_after_email'
class NewCustomer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            cstates : false,
            fields: {
                'pos_customer_id' : '',
                'pos_customer_name' : '',
                'pos_customer_phone' : '',
                'pos_customer_email' : '',
                'pos_customer_fname' : '',
                'pos_customer_lname' : '',
                'pos_customer_address1' : '',
                'pos_customer_address2' : '',
                'pos_customer_bemail' : '',
                'pos_customer_bphone' : '',
                'pos_customer_country' : '',
                'pos_customer_state' : '',
                'pos_customer_city' : '',
                'pos_customer_pincode' : '',
            },
            errors: {}
        }

        // This binding is necessary to make `this` work in the callback
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    componentWillReceiveProps(prop) {
    }

    handleCountryChange(e){

        const {dispatch} = this.props;
        let fields = this.state.fields;

        let countriesObj = this.props.countries;

        if(e.target.value) {

            fields[e.target.name] = e.target.value;

            dispatch(getAllStatesWC(e.target.value,countriesObj)).then((cstates) => {

                let fields = this.state.fields;

                this.setState({
                    fields : fields,
                    cstates : cstates
                });

            });

        }

    }

    handleChange(e){

        let fields = this.state.fields;

        fields[e.target.name] = e.target.value;

        this.setState({fields});

    }

    componentDidMount(){

        const { dispatch } = this.props;

        let countries = this.props.countries;

        let states = countries.states;

        let fields = this.state.fields;

        let defaultCustomer = this.props.def;

        if( defaultCustomer != undefined ) {

            let customer_id = defaultCustomer.id;

            let name = defaultCustomer.first_name + ' ' + defaultCustomer.last_name;

            let phone = defaultCustomer.billing.phone;

            let email = defaultCustomer.email;

            let bemail = defaultCustomer.billing.email;

            let fname = defaultCustomer.billing.first_name;

            let lname = defaultCustomer.billing.last_name;

            let address1 = defaultCustomer.billing.address_1;

            let address2 = defaultCustomer.billing.address_2;

            let country = defaultCustomer.billing.country;

            let state = defaultCustomer.billing.state;

            let city = defaultCustomer.billing.city;

            let pincode = defaultCustomer.billing.pincode;

            fields['pos_customer_id'] = customer_id;
            fields['pos_customer_phone'] = phone;
            fields['pos_customer_name'] = name;
            fields['pos_customer_email'] = email;
            fields['pos_customer_bemail'] = bemail;
            fields['pos_customer_fname'] = fname;
            fields['pos_customer_lname'] = lname;
            fields['pos_customer_address1'] = address1;
            fields['pos_customer_address2'] = address2;
            fields['pos_customer_country'] = country;
            fields['pos_customer_state'] = state;
            fields['pos_customer_city'] = city;
            fields['pos_customer_pincode'] = pincode;

            dispatch(getAllStatesWC(country,countries)).then((cstates) => {

                this.setState({
                    fields : fields,
                    cstates : cstates
                });

            });

        } else {

            this.setState({
                fields:fields,
                cstates : states
            });
        }

    }

    handleSubmitClick(e){

        e.preventDefault();

        const { dispatch } = this.props;

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Customer Name
        if(!fields["pos_customer_name"]){
            formIsValid = false;
            errors["pos_customer_name"] = translation.customer_name_empty_validation;
        }

        //Last Name
        if(!fields["pos_customer_phone"]){
            formIsValid = false;
            errors["pos_customer_phone"] = translation.customer_phone_empty_validation;
        }

        if(typeof fields["pos_customer_phone"] !== "undefined"){

            if(!fields["pos_customer_phone"].match(/^\d+$/)){

                formIsValid = false;

                errors["pos_customer_phone"] = translation.customer_phone_type_validation;

            } else if( fields["pos_customer_phone"].length > 0 && fields["pos_customer_phone"].length < 10) {

                formIsValid = false;

                errors["pos_customer_phone"] = translation.customer_phone_valid_validation;
            }
        }

        //Email
        if(!fields["pos_customer_email"]){
            formIsValid = false;
            errors["pos_customer_email"] = translation.customer_email_empty_validation;
        }

        if(typeof fields["pos_customer_email"] !== "undefined"){
            let lastAtPos = fields["pos_customer_email"].lastIndexOf('@');
            let lastDotPos = fields["pos_customer_email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["pos_customer_email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["pos_customer_email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["pos_customer_email"] = translation.customer_email_valid_validation;
            }
        }

        if(fields["pos_customer_bemail"]){

            if(typeof fields["pos_customer_bemail"] !== "undefined"){
                let lastAtPos = fields["pos_customer_bemail"].lastIndexOf('@');
                let lastDotPos = fields["pos_customer_bemail"].lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["pos_customer_bemail"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["pos_customer_bemail"].length - lastDotPos) > 2)) {
                    formIsValid = false;
                    errors["pos_customer_bemail"] = translation.customer_billing_email_valid_validation;
                }
            }

        }

        this.setState({errors: errors});

        fields['pos_customer_id'] = jQuery("input[name='pos_customer_id']").val();

        var formData = jQuery("#new-customer").serializeArray();

        if( formIsValid ) {

            dispatch(SaveCustomer(formData, fields['pos_customer_id'])).then( (res) => {

                dispatch(loadAllCustomers());
                if (fields['pos_customer_id']){

                    jQuery.confirm({
                        title: translation.confirmation_text,
                        icon: 'fa fa-question-circle',
                        animation: 'scale',
                        closeAnimation : 'scale',
                        opacity: 0.5,
                        content: translation.customer_update_success_text,
                        buttons: {
                            'confirm': {
                                text: translation.okay_text,
                                btnClass: 'btn-blue',
                                action: function () {

                                },
                            }
                        }
                    });
                }
                else{
                    jQuery.confirm({
                        title: translation.confirmation_text,
                        icon: 'fa fa-question-circle',
                        animation: 'scale',
                        closeAnimation: 'scale',
                        opacity: 0.5,
                        content: translation.customer_added_success_text,
                        buttons: {
                            'confirm': {
                                text: translation.okay_text,
                                btnClass: 'btn-blue',
                                action: function () {

                                },
                            }
                        }
                    });
                }

            });

        }

    }

    render() {

        let defaultCustomer = this.props.def;

        let countriesObj = this.props.countries;
        let countries = countriesObj.countries;
        let defCountry = countriesObj.default;
        let states = this.state.cstates;

        var name = '';
        var phone = '';
        var email = '';
        var bemail = '';
        var bphone = '';
        var fname = '';
        var lname = '';
        var address1 = '';
        var address2 = '';
        var country = '';
        var state = '';
        var city = '';
        var pincode = '';
        var customer_id = '';
        var submit_btn = 'Save';
        let country_list = [];
        let state_list = [];

        if( defaultCustomer != undefined ) {

            customer_id = defaultCustomer.id;

            submit_btn = 'Update';
            name = (defaultCustomer.last_name != 'null' && defaultCustomer.last_name != null) ? defaultCustomer.first_name + ' ' + defaultCustomer.last_name : defaultCustomer.first_name;

            phone = defaultCustomer.billing.phone;

            bphone = defaultCustomer.billing.phone;

            email = defaultCustomer.email;

            bemail = defaultCustomer.billing.email;

            fname = defaultCustomer.billing.first_name;

            lname = defaultCustomer.billing.last_name;

            address1 = defaultCustomer.billing.address_1;

            address2 = defaultCustomer.billing.address_2;

            country = defaultCustomer.billing.country;

            state = defaultCustomer.billing.state;

            city = defaultCustomer.billing.city;

            pincode = defaultCustomer.billing.postcode;

            defCountry = defaultCustomer.billing.country;

        }

        jQuery.each( countries, (key, country) => {

            country_list.push(
                <option key={key} value={key}>{country}</option>
            );
        });

        jQuery.each( states, (key, st) => {

            state_list.push(
                <option key={key} value={key}>{st}</option>
            );

        });
        var customField = applyFilters(ADD_CUSTOM_FEILD_IN_FORM_AFTER_EMAIL, '', defaultCustomer );


        var customer_name = translation.customer_name;
        var customer_phone = translation.customer_phone;
        var customer_email = translation.customer_email;
        var address = translation.address;
        var first_name = translation.first_name;
        var last_name = translation.last_name;
        var billing_email = translation.billing_email;
        var address_1 = translation.address_1;
        var address_2 = translation.address_2;
        var country = translation.country;
        var state_text = translation.state;
        var city_text = translation.city;
        var pincode_text = translation.pincode;
        var customer_heading_text = translation.customer_heading_text;
        var submit_button_class = submit_btn+'-pos-customer';
        var submit_button_name = submit_btn+'-customer';
        return (

            <div className="pos-vertical-center">

                <form id="new-customer" onSubmit={((e) => this.handleSubmitClick(e))}>

                    <img src="//0.gravatar.com/avatar/91f376c4b36912e5075b6170d312eab5?s=96&d=mm&r=g" id="pos_customer_image" />

                    <input type="hidden" name="pos_customer_id" defaultValue={customer_id} />

                    <div className="customer-name">
                        <label htmlFor="pos_customer_name">{customer_name}<i>*</i></label>
                        <input type="text" name="pos_customer_name" id="pos_customer_name" defaultValue={name} onChange={((e) => this.handleChange( e ))} />
                        <span className="error">{this.state.errors["pos_customer_name"]}</span>
                    </div>

                    <div className="customer-phone">
                        <label htmlFor="pos_customer_phone">{customer_phone}<i>*</i></label>
                        <input type="text" name="pos_customer_phone" id="pos_customer_phone" defaultValue={phone} onChange={((e) => this.handleChange( e ))} />
                        <span className="error">{this.state.errors["pos_customer_phone"]}</span>
                    </div>

                    <div className="customer-email">
                        <label htmlFor="pos_customer_email">{customer_email}<i>*</i></label>
                        <input type="email" name="pos_customer_email" id="pos_customer_email" defaultValue={email} onChange={((e) => this.handleChange( e ))} />
                        <span className="error">{this.state.errors["pos_customer_email"]}</span>
                    </div>

                    {customField}


                    <h3 className="address-fields">{address}</h3>

                    <div className="address-group">

                        <div className="customer-fname">
                            <label htmlFor="pos_customer_fname">{first_name}</label>
                            <input type="text" name="pos_customer_fname" id="pos_customer_fname" defaultValue={fname} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_fname"]}</span>
                        </div>

                        <div className="customer-lname">
                            <label htmlFor="pos_customer_lname">{last_name}</label>
                            <input type="text" name="pos_customer_lname" id="pos_customer_lname" defaultValue={lname} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_lname"]}</span>
                        </div>

                        <div className="customer-bemail">
                            <label htmlFor="pos_customer_bemail">{billing_email}</label>
                            <input type="email" name="pos_customer_bemail" id="pos_customer_bemail" defaultValue={bemail} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_bemail"]}</span>
                        </div>

                        <div className="customer-address1">
                            <label htmlFor="pos_customer_address1">{address_1}</label>
                            <input type="text" name="pos_customer_address1" id="pos_customer_address1" defaultValue={address1} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_address1"]}</span>
                        </div>

                        <div className="customer-address2">
                            <label htmlFor="pos_customer_address2">{address_2}</label>
                            <input type="text" name="pos_customer_address2" id="pos_customer_address2" defaultValue={address2} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_address2"]}</span>
                        </div>

                        <div className="customer-country">
                            <label htmlFor="pos_customer_country">{country}</label>
                            <select name="pos_customer_country" id="pos_customer_country" defaultValue={defCountry} onChange={((e) => this.handleCountryChange( e ))}>
                                {country_list}
                            </select>

                            <span className="error">{this.state.errors["pos_customer_country"]}</span>
                        </div>

                        <div className="customer-state">
                            <label htmlFor="pos_customer_state">{state_text}</label>
                            { state_list.length > 0
                            ? <select name="pos_customer_state" id="pos_customer_state" defaultValue={state} onChange={((e) => this.handleChange( e ))}>
                                {state_list} </select>
                            : <input type="text" name="pos_customer_state" id="pos_customer_state" defaultValue={state} onChange={((e) => this.handleChange( e ))} />
                            }
                            <span className="error">{this.state.errors["pos_customer_state"]}</span>
                        </div>

                        <div className="customer-city">
                            <label htmlFor="pos_customer_city">{city_text}</label>
                            <input type="text" name="pos_customer_city" id="pos_customer_city" defaultValue={city} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_city"]}</span>
                        </div>

                        <div className="customer-pincode">
                            <label htmlFor="pos_customer_pincode">{pincode_text}</label>
                            <input type="text" name="pos_customer_pincode" id="pos_customer_pincode" defaultValue={pincode} onChange={((e) => this.handleChange( e ))} />
                            <span className="error">{this.state.errors["pos_customer_pincode"]}</span>
                        </div>

                    </div>

                    <div className="pos-customer-add">
                        <button type="submit" className={submit_button_class} name={submit_button_name}>
                            <i className="fa fa-save"></i>&nbsp;{submit_btn} {customer_heading_text}
                        </button>
                    </div>

                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    countries:state.countries.list,
});

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch }, bindActionCreators({ getAllStatesWC, SaveCustomer, loadAllCustomers }, dispatch));
}

export default connect( mapStateToProps, mapDispatchToProps )(NewCustomer);
