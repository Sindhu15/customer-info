import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from 'components/styles/appStyles.module.css';

const getBgColor = (props) => {
  const {selectedCustomerId, id} = props;
  if(id === selectedCustomerId){
    return {
      backgroundColor:'#A3E4D7'
    };
  }
}


 const CustomersListItem = (props) => {
    return (
            <TableRow key={props.id} 
                      style={getBgColor(props)} 
                      className={styles.cursor}
                      onClick= { () => props.fetchCustomerAddressList(props.id)}
              >
              <TableCell align="center">{props.id}</TableCell>
              <TableCell align="center">{props.name}</TableCell>
              <TableCell align="center">{props.age}</TableCell>
              <TableCell align="center">{props.sex}</TableCell>
            </TableRow>);
}

export default CustomersListItem;