const initialState = {
    customersList: [],
    isCustomersFetched: false,
    selectedCustomerId: null
};

const customers = ( state = initialState, action={}) => {
    switch (action.type) {
        case 'SET_CUSTOMERS_LIST':
            return Object.assign({},state, {customersList: action.payload})
        case 'SET_CUSTOMERS_LIST_FETCHED':
            return Object.assign({},state, {isCustomersFetched: action.flag})
        case 'SET_SELECTED_CUSTOMER':
            return Object.assign({},state,{selectedCustomerId: action.payload})
        default:
            return state;
    }
};

export default customers;

