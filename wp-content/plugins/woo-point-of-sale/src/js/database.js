import Dexie from 'dexie';
import { applyFilters } from '@wordpress/hooks';

export const DATABASE_ADD_TABLES_FILTER = 'wkwcpos_add_database_tables';
export const DATABASE_MODIFY_TABLES_FILTER = 'wkwcpos_modify_database_tables';

const database = new Dexie("pos");

const tables = {
  pos_temp : 'id',
  pos_currency : '++id, shortcode, symbol, code, is_default',
  pos_customers : 'id,first_name,last_name,email,username,billing,shipping,avatar_url,is_true',
  pos_orders : 'id,order_id,balance,cart_subtotal,coupons,total_refund ,order_date,email,billing,discount,currency,order_total,order_html,order_notes,products,payment_mode,tax_lines,tendered,order_type,cashPay,cardPay,cashPay_html, cardPay_html, offline_id',
  pos_cart : 'id,cart_id,cart',
  pos_sale : 'id,opening_balance,closing_balance,drawer_note,card_sale,cash_sale,date, user_card, user_cash',
  pos_discount : 'id,cart_id, discount',
  pos_coupon : 'id,cart_id,coupon',
  pos_holds : 'id,note,date,time,cart_id',
  pos_products : 'product_id,sku,categories,price,special,stock,tax,tax_label,title,variations,price_html,type',
  pos_remove_id : 'id', 
  pos_tax : 'id,compound,label,rate,shipping',
  pos_invoice : 'id, invoice_html',
  pos_categories : '++id, cat_id, name',
  pos_current_cart : 'id, cart_id'
}

database.version(1).stores( applyFilters( DATABASE_ADD_TABLES_FILTER, tables ) );

applyFilters(DATABASE_MODIFY_TABLES_FILTER, database);

// Put some data into it
database.pos_temp.put({id: 0}).then (function(){

  // Then when data is stored, read from it
  return database.pos_temp.get(0);

}).then(function (current_cart) {

}).catch(function(error) {
    // Finally don't forget to catch any error
    // that could have happened anywhere in the
    // code blocks above.
    alert ("Ooops: " + error);
});

export default database;