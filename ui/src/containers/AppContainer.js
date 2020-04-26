import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCustomersList, fetchCustomerAddressList} from 'actions/apiActions/customerApiActions';
import LandingPage from 'components/landing/LandingPage';


class AppContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomersList();
    }

    render() {
        return <LandingPage {...this.props}/>;
    }
}

const mapStateToProps = state => ({
    customersList: state.customers.customersList,
    isCustomersFetched: state.customers.isCustomersFetched,
    customerAddresses: state.customerAddresses,
    selectedCustomerId: state.customers.selectedCustomerId
});

const mapDispatchToProps = {
    fetchCustomersList,
    fetchCustomerAddressList
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
