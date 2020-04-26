import React from 'react';
import CustomerListItem from './CustomerListItem';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: "100%",
    },
  });


const headerStyle = () => {
    return {background: "#EAFAF1"}
}

const getTableHeader = () => {
    return (<TableHead>
            <TableRow style={headerStyle()}>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Sex</TableCell>
            </TableRow>
         </TableHead>);
}

  
const getCustomerItemRows = (props) =>{
    const {customers} = props;
    return customers.map((eachCustomer) => {
        return <CustomerListItem 
                        key={eachCustomer.id}
                        {...eachCustomer}
                        selectedCustomerId={props.selectedCustomerId}
                        fetchCustomerAddressList={props.fetchCustomerAddressList}
                        />
    })
}
  

const CustomersList = (props) => {      
    const classes = useStyles();
 
    return (<TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {getTableHeader()}
                <TableBody>
                    {getCustomerItemRows(props)}
                </TableBody>
            </Table>
        </TableContainer>);
}

export default CustomersList;