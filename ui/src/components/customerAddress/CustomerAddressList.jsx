
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import styles from 'components/styles/appStyles.module.css';

import CustomerAddressListItem from './CustomerAddressListItem';


const renderEachAddress = (props) => {
    const {addressList} = props;

    if(addressList.length){
      return addressList.map((eachAddress,index) => {
          return <CustomerAddressListItem key={index} address={eachAddress}/>
      })
  }
  else{
    return <div  className={styles.message}>NO ADDRESS LIST FOUND FOR TIHIS CUSTOMER</div>
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "#A3E4D7",
  },
  inline: {
    display: 'inline',
  },
}));

export default function CustomerAddressList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {renderEachAddress(props)}
    </List>
  );
}
