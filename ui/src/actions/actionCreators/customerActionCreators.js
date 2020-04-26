export const setCustomersList = (payload) => {
    return {
        type: 'SET_CUSTOMERS_LIST',
        payload
    };
}

export const setCustomersListFetchedFlag = (flag) => {
    return {
        type: 'SET_CUSTOMERS_LIST_FETCHED',
        flag
    };
}

export const setCustomerAddresses = (payload) => {
    return {
        type: 'SET_CUSTOMER_ADDRESSES',
        payload
    }
}

export const setSelectedCustomerId = (payload) => {
    return {
        type: 'SET_SELECTED_CUSTOMER',
        payload
    }
}