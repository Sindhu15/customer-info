import {setCustomersList, 
        setCustomersListFetchedFlag,
        setCustomerAddresses,
        setSelectedCustomerId
    } from 'actions/actionCreators/customerActionCreators';

import apis from 'constants/apis';

export const fetchCustomersList = () => async (dispatch,getState) => {
    const oldState = getState();
    if(!oldState.isCustomersFetched){

        const fetchReponse = await fetch(apis.FETCH_CUSTOMERS);
        const customersLsit = await fetchReponse.json();
        
        dispatch(setCustomersList(customersLsit));
        dispatch(setCustomersListFetchedFlag(true));
    } 
}


export const fetchCustomerAddressList = (customerId) => async (dispatch,getState) => {
    
    const oldState = getState().customerAddresses;
    
    // fetch only if the address in not fetched for the customer already
    if (!oldState[customerId]){
        const fetchReponse = await fetch(apis.FETCH_CUSTOMER_ADDRESS.replace('customerId', customerId));
        const customerAddresses = await fetchReponse.json();
        
        dispatch(setCustomerAddresses({
            customerId,
            customerAddresses
        }));

        dispatch(setSelectedCustomerId(customerId));
    }

    dispatch(setSelectedCustomerId(customerId));
}


