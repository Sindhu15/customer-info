import React, { useState, useEffect } from 'react';
import CustomersList from 'components/customers/CustomersList';
import CustomerAddressList from 'components/customerAddress/CustomerAddressList';
import styles from 'components/styles/appStyles.module.css';

const renderLoader = () => <div>Loading</div>;

const renderCustomers = (props) =>
{ 
    const {customersList, customerAddresses, selectedCustomerId, fetchCustomerAddressList} = props;

    const selectedCustomerAddressList = selectedCustomerId ? customerAddresses[selectedCustomerId] : [];

    return (<div className={styles.containers} >
                <div className={styles.customersList}>
                    <div className={styles.header}>CUSTOMERS LIST</div>
                    <CustomersList  customers={customersList}
                                    selectedCustomerId={selectedCustomerId}
                                    fetchCustomerAddressList={fetchCustomerAddressList}
                                    />
                </div>
                <div className={styles.arrow}> >>> </div>
                    {
                        (selectedCustomerId)
                        ?
                        <div  className={styles.addressList}>
                            <div className={styles.header}>ADDRESS DETAILS OF THE SELECTED CUSTOMER</div>
                            <CustomerAddressList 
                                    addressList={selectedCustomerAddressList}
                                    selectedCustomerId= {selectedCustomerId}/>
                        </div>
                        :
                        <div className={styles.noCustomerMessageContainer}>
                            <div className={styles.message}>SELECT A CUSTOMER TO VIEW THE ADDRESS LIST</div>
                        </div>

                    }
             
            </div>);
}


const LandingPage = (props) => {
    const [isFecthing, setFetchingState] = useState(true);
    
    useEffect(() => {
        setFetchingState(!props.isCustomersFetched);
    }, [props]);
 

    if(isFecthing === true){
        return renderLoader();
    }

    return renderCustomers(props);
}

export default LandingPage;