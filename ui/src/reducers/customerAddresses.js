const initialState = {};

const customerAddresses = ( state = initialState, action={}) => {
    switch (action.type) {
        case 'SET_CUSTOMER_ADDRESSES':
            return Object.assign({},state, {[action.payload.customerId]: action.payload.customerAddresses})
        default:
            return state;
    }
};

export default customerAddresses;

