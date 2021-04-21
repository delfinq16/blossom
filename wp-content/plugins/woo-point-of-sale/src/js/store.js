import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import cashier from './reducers/login';
import currency from './reducers/currency';
import tax from './reducers/tax';
import invoice from './reducers/invoice';
import sideMenuVisible from './reducers/menu'; 
import categories from './reducers/categories'; 
import customers from './reducers/customers'; 
import products from './reducers/products'; 
import cart from './reducers/cart';
import sale from './reducers/sale';
import countries from './reducers/countries';
import current_cart from './reducers/currentcart'; 
import orders from './reducers/orders'; 
import discount from './reducers/discount'; 
import coupon from './reducers/coupon'; 
import hold from './reducers/hold'; 
import printers from './reducers/printers'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyFilters } from '@wordpress/hooks';

import { createStateSyncMiddleware } from 'redux-state-sync';

export const DEFAULT_STATE_FILTER = 'wkwcpos_modify_default_states';
export const REDUCERS_FILTER = 'wkwcpos_modify_reducers';

const printer_list = [
  { a3: 'A3 Printer' },
  { a4: 'A4 Printer' },
  { T88V: 'Epson TM-T88V Thermal Printer' },
  { a5: 'A5 Printer' },
  { a6: 'A6 Printer' },
];

const defaultPrinter = 'a4';

const printersDefaultData = {
  list : printer_list,
  isFetching : 1,
  default : defaultPrinter
}

const defaultState = {

  cashier : {
    first_name : '',
    last_name : '',
    email : '',
    isLoggedIn : false,
    isFetching : 0,
    cashier_id : '',
    profile_pic : '',
    logout_url : ''
  },
  categories : {
    list : '',
    isFetching : 0, 
  },
  currency : {
    list : '',
    isFetching : 0,
    default:'' 
  },
  countries : {
    list : '',
    isFetching : 0, 
  },
  printers : printersDefaultData,
  tax : {
    list : '',
    isFetching : 0, 
  },
  invoice : '',
  products : {
    list : '',
    isFetching : 0,
    s : '',
    sproducts : '',
    category : '',
    cproducts : ''  
  },
  customers : {
    list : '',
    isFetching : 0,
    default : 0,
    s : '',
    scustomer : '' 
  },
  orders : {
    list : '',
    isFetching : 0, 
    s : '',
    sorder:'' 
  },
  cart : {
    list : '',
    isFetching : 0,
    total : ''
  },
  discount : {
    list : '',
    isFetching : 0,
  }, 
  coupon : {
    list : '',
    isFetching : 0,
  },
  hold :{
    list : '',
    isFetching : 1
  },
  sale : {
    list : '',
    isFetching : 1
  },
  sideMenuVisible : false,
  current_cart : 0
  
};

let reducers = { 
  sideMenuVisible,
  current_cart,
  currency,
  customers,
  categories,
  tax,
  invoice,
  countries,
  cashier,
  products,
  orders,
  printers,
  discount, 
  coupon,
  cart,
  hold,
  sale
}; 

const rootReducer = combineReducers( applyFilters( REDUCERS_FILTER, reducers ) );

const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  // blacklist: ['TOGGLE_TODO'],
};

const middlewares = [createStateSyncMiddleware(config)];

const store = createStore(
  rootReducer,  
  applyFilters( DEFAULT_STATE_FILTER, defaultState ),
  composeWithDevTools(
    applyMiddleware(thunk, ...middlewares))
);

export default store;