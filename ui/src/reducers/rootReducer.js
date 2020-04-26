import { combineReducers } from 'redux';
import customers from './customers';
import customerAddresses from './customerAddresses';
export default combineReducers({
    customers,
    customerAddresses
});