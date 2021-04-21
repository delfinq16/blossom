var variable_array = apif_script.pos_tr;

const translations = {
        refund_text: variable_array.refund_text,
        empty_default_customer: variable_array.empty_default_customer,
        product_name_text: variable_array.product_name_text,
        quantity_text: variable_array.quantity_text,
        unit_price_text: variable_array.unit_price_text,
        total_price_text: variable_array.total_price_text,
        pay_text : variable_array.pay_text,
        discount_title_text: variable_array.discount_title_text,
        apply_text: variable_array.apply_text,
        pay_by_card_text: variable_array.pay_by_card_text,
        pay_by_cash_text: variable_array.pay_by_cash_text,
        payment_detail: variable_array.payment_detail,
        hold_cart_text : variable_array.hold_cart_text,
        error_no_category_order : variable_array.error_no_category_order,
        no_sync_orders : variable_array.no_sync_orders,
        order_date_heading_text : variable_array.order_date_heading_text,
        confirm_payment : variable_array.confirm_payment,
        generate_invoice : variable_array.generate_invoice,
        customer_text: variable_array.customer_text,
        order_text : variable_array.order_text,
        order_summary : variable_array.order_summary,
        subtotal_text : variable_array.subtotal_text,
        other_payment_title : variable_array.other_payment_title,
        clear : variable_array.clear,
        change : variable_array.change,
        tendered : variable_array.tendered,
        customer_name : variable_array.customer_name,
        customer_phone : variable_array.customer_phone,
        customer_email : variable_array.customer_email,
        address : variable_array.address,
        first_name : variable_array.first_name,
        last_name : variable_array.last_name,
        billing_email : variable_array.billing_email,
        address_1 : variable_array.address_1,
        address_2 : variable_array.address_2,
        country : variable_array.country,
        state : variable_array.state,
        city : variable_array.city,
        pincode : variable_array.pincode,
        phone : variable_array.phone,
        close_counter : variable_array.close_counter,
        today_cash : variable_array.today_cash,
        sale_history : variable_array.sale_history,
        total_sale : variable_array.total_sale,
        drawer_note : variable_array.drawer_note,
        cash_sale : variable_array.cash_sale,
        card_sale : variable_array.card_sale,
        date : variable_array.date,
        cash_balance : variable_array.cash_balance,
        drawer_amount_details : variable_array.drawer_amount_details,
        close_drawer : variable_array.close_drawer,
        difference_between_closing_and_opening_Amount : variable_array.difference_between_closing_and_opening_Amount,
        closing_drawer_detail : variable_array.closing_drawer_detail,
        remarks : variable_array.remarks,
        counted_drawer_amount : variable_array.counted_drawer_amount,
        expected_amount_in_drawer : variable_array.expected_amount_in_drawer,
        opening_amount : variable_array.opening_amount,
        payment_mode:variable_array.payment_mode,
        order_total : variable_array.order_total,
        time : variable_array.time,
        today_card_sale : variable_array.today_card_sale,
        today_cash_sale : variable_array.today_cash_sale,
        opening_drawer_amount : variable_array.opening_drawer_amount,
        reset: variable_array.reset,
        reset_cart : variable_array.reset_cart,
        orders : variable_array.orders,
        home : variable_array.home,
        cashier : variable_array.cashier,
        settings : variable_array.settings,
        customers : variable_array.customers,
        currency : variable_array.currency,
        warning_text : variable_array.warning_text,
        success_text : variable_array.success_text,
        cart_added_success_msg: variable_array.cart_added_success_msg,
        cart_deleted_success_msg: variable_array.cart_deleted_success_msg,
        already_products_in_cart_for_hold: variable_array.already_products_in_cart_for_hold,
        validated_text : variable_array.validated_text,
        order_note_enter_text : variable_array.order_note_enter_text,
        order_note_text : variable_array.order_note_text,
        order_heading_text : variable_array.order_heading_text,
        customer_heading_text : variable_array.customer_heading_text,
        text_empty_cart : variable_array.text_empty_cart,
        text_empty_hold : variable_array.text_empty_hold,
        discount_text : variable_array.discount_text,
        tax_text : variable_array.tax_text,
        tax_total_text : variable_array.tax_total_text,
        shipping_text : variable_array.shipping_text,
        balance_text : variable_array.balance_text,
        total_text : variable_array.total_text,
        payment_text : variable_array.payment_text,
        text_item_detail : variable_array.text_item_detail,
        cart_detail : variable_array.cart_detail,
        notice_text : variable_array.notice_text,
        coupon_text : variable_array.coupon_text,
        delete_text : variable_array.delete_text,
        add_customer_text : variable_array.add_customer_text,
        proceed_text : variable_array.proceed_text,
        order_notify_text : variable_array.order_notify_text,
        no_note_text : variable_array.no_note_text,
        err_text : variable_array.err_text,
        cancel_btn_text : variable_array.cancel_btn_text,
        coupon_validate_text : variable_array.coupon_validate_text,
        product_validate_text : variable_array.product_validate_text,
        select_category_text : variable_array.select_category_text,
        list_category_text : variable_array.list_category_text,
        currency_not_availabel_txt : variable_array.currency_not_availabel_txt,
        pos_currency_text : variable_array.pos_currency_text,
        form_field_validate : variable_array.form_field_validate,
        updating_account_text : variable_array.updating_account_text,
        account_update_success_text : variable_array.account_update_success_text,
        customer_update_success_text : variable_array.customer_update_success_text,
        customer_delete_success_text : variable_array.customer_delete_success_text,
        customer_added_success_text: variable_array.customer_added_success_text,
        setting_update_success_text : variable_array.setting_update_success_text,
        confirmation_text : variable_array.confirmation_text,
        create_new_customer_text : variable_array.create_new_customer_text,
        update_existing_customer_text : variable_array.update_existing_customer_text,
        drawer_text : variable_array.drawer_text,
        drawer_closed_text : variable_array.drawer_closed_text,
        closing_drawer_text : variable_array.closing_drawer_text,
        drawer_validate_text : variable_array.drawer_validate_text,
        delete_customer_title_text : variable_array.delete_customer_title_text,
        deleting_customer_title_text : variable_array.deleting_customer_title_text,
        save_customer_text : variable_array.save_customer_text,
        search_order_text : variable_array.search_order_text,
        printInvoice_text : variable_array.printInvoice_text,
        sale_summary_text : variable_array.sale_summary_text,
        sub_total_text : variable_array.sub_total_text,
        unit_text : variable_array.unit_text,
        processing_order_text : variable_array.processing_order_text,
        error_coupon_offline : variable_array.error_coupon_offline,
        currency_code : "",
        user_login : 0,
        page : 0,
        searching_product_text : variable_array.searching_product_text,
        error_load_products : variable_array.error_load_products,
        text_loading_populars : variable_array.text_loading_populars,
        error_load_populars : variable_array.error_load_populars,
        text_loading_orders : variable_array.text_loading_orders,
        error_load_orders : variable_array.error_load_orders,
        text_loading_customers : variable_array.text_loading_customers,
        error_load_customers : variable_array.error_load_customers,
        error_offline_customer : variable_array.error_offline_customer,
        error_offline_account : variable_array.error_offline_account,
        text_loading_categories : variable_array.text_loading_categories,
        error_load_categories : variable_array.error_load_categories,
        text_loading : variable_array.text_loading,
        button_upload : variable_array.button_upload,
        text_product_options : variable_array.text_product_options,
        error_keyword : variable_array.error_keyword,
        error_products : variable_array.error_products,
        text_online_mode : variable_array.text_online_mode,
        error_enter_online : variable_array.error_enter_online,
        text_offline_mode : variable_array.text_offline_mode,
        error_no_category_product : variable_array.error_no_category_product,
        error_no_customer : variable_array.error_no_customer,
        text_select_customer : variable_array.text_select_customer,
        error_customer_add : variable_array.error_customer_add,
        text_remove_customer : variable_array.text_remove_customer,
        error_checkout : variable_array.error_checkout,
        text_balance_due : variable_array.text_balance_due,
        text_order_success : variable_array.text_order_success,
        text_sync_order : variable_array.text_sync_order,
        sync_process_text : variable_array.sync_process_text,
        sync_success_text : variable_array.sync_success_text,
        text_sync_single_order : variable_array.text_sync_single_order,
        text_no_orders : variable_array.text_no_orders,
        order_note_empty : variable_array.order_note_empty,
        error_sync_orders : variable_array.error_sync_orders,
        text_another_cart : variable_array.text_another_cart,
        text_cart_deleted : variable_array.text_cart_deleted,
        text_current_deleted : variable_array.text_current_deleted,
        text_cart_empty : variable_array.text_cart_empty,
        text_cart_add : variable_array.text_cart_add,
        text_option_required : variable_array.text_option_required,
        text_product_not_added : variable_array.text_product_not_added,
        text_no_quantity : variable_array.text_no_quantity,
        cash_payment_title : variable_array.cash_payment_title,
        text_all_products : variable_array.text_all_products,
        invalid_percentage : variable_array.invalid_percentage,
        invalid_discount : variable_array.invalid_discount,
        coupon_code_enter_text : variable_array.coupon_code_enter_text,
        apply_coupon_text : variable_array.apply_coupon_text,
        applying_coupon_text : variable_array.applying_coupon_text,
        coupon_applied_text : variable_array.coupon_applied_text,
        barcode_enter_text : variable_array.barcode_enter_text,
        add_product_add : variable_array.add_product_add,
        add_product_name : variable_array.add_product_name,
        add_product_price : variable_array.add_product_price,
        add_product_quantity : variable_array.add_product_quantity,
        offline_text : variable_array.offline_text,
        online_text : variable_array.online_text,
        coupon_offline_notification : variable_array.coupon_offline_notification,
        coupon_remove_notification : variable_array.coupon_remove_notification,
        coupon_remove_error_notification : variable_array.coupon_remove_error_notification,
        text_search : variable_array.text_search,
        text_option_notifier : variable_array.text_option_notifier,
        low_stock : 10,
        text_low_stock : variable_array.text_low_stock,
        text_special_price : variable_array.text_special_price,
        text_cust_delete : variable_array.text_cust_delete,
        change_customer_text : variable_array.change_customer_text,
        change_customer_title_text : variable_array.change_customer_title_text,
        okay_text : variable_array.okay_text,
        add_text : variable_array.add_text,
        confirm_logout_text : variable_array.confirm_logout_text,
        logout_heading : variable_array.logout_heading,
        invalid_paid_amt : variable_array.invalid_paid_amt,
        button_cart : variable_array.add_to_cart,
        text_loading_shipping_cost : variable_array.text_loading_shipping_cost,
        error_no_orders : variable_array.error_no_orders,
        validate_product_quantity : variable_array.validate_product_quantity,
        validate_product_price : variable_array.validate_product_price,
        validate_product_name_len : variable_array.validate_product_name_len,
        customer_name_empty_validation : variable_array.customer_name_empty_validation,
        customer_phone_empty_validation : variable_array.customer_phone_empty_validation,
        customer_email_empty_validation : variable_array.customer_email_empty_validation,
        customer_phone_type_validation : variable_array.customer_phone_type_validation,
        customer_phone_valid_validation : variable_array.customer_phone_valid_validation,
        customer_email_valid_validation : variable_array.customer_email_valid_validation,
        customer_city_valid_validation : variable_array.customer_city_valid_validation,
        customer_pincode_valid_validation: variable_array.customer_pincode_valid_validation,
        customer_billing_email_valid_validation : variable_array.customer_billing_email_valid_validation,
        edit_text : variable_array.edit_text,
        pos_first_name_empty_validation : variable_array.pos_first_name_empty_validation,
        pos_last_name_empty_validation : variable_array.pos_last_name_empty_validation,
        pos_email_empty_validation : variable_array.pos_email_empty_validation,
        pos_email_valid_validation : variable_array.pos_email_valid_validation,
        pos_old_pswd_empty_validation : variable_array.pos_old_pswd_empty_validation,
        pos_new_pswd_empty_validation : variable_array.pos_new_pswd_empty_validation,
        pos_cnf_pswd_empty_validation : variable_array.pos_cnf_pswd_empty_validation,
        pos_cnf_pswd_same_validation : variable_array.pos_cnf_pswd_same_validation,
        split_payment_text : variable_array.split_payment_text,
        account_settings : variable_array.account_settings,
        other_settings : variable_array.other_settings,
        email_text : variable_array.email_text,
        previous_password : variable_array.previous_password,
        new_password : variable_array.new_password,
        confirm_password : variable_array.confirm_password,
        update_account : variable_array.update_account,
        select_currency : variable_array.select_currency,
        select_language : variable_array.select_language,
        english : variable_array.english,
        save_settings : variable_array.save_settings,
        select_invoice_printer : variable_array.select_invoice_printer,
        only_letters : variable_array.only_letters,
        order_note_text : variable_array.order_note_text,
        note_text : variable_array.note_text,
        hold_sale : variable_array.hold_sale,
        offline_sale : variable_array.offline_sale,
        sync_orders : variable_array.sync_orders,
        cash_text : variable_array.cash_text,
        card_text : variable_array.card_text,
        reloading_text : variable_array.reloading_text,
        loading_categories_text : variable_array.loading_categories_text,
        loading_countries_text : variable_array.loading_countries_text,
        loading_states_text : variable_array.loading_states_text,
        loading_currencies : variable_array.loading_currencies,
        loading_sale_text : variable_array.loading_sale_text,
        upadting_manager_text : variable_array.upadting_manager_text,
        loading_tax_text : variable_array.loading_tax_text,
        grand_total_text : variable_array.grand_total_text,
        is: variable_array.is,
        are: variable_array.are,
        remove_not_valid_products: variable_array.remove_not_valid_products

};   

export const translation = translations; 