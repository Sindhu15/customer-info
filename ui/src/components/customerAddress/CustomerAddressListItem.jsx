import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const CustomerAddressListItem = (props) => {
    const {address} = props;
    const classes = useStyles();

    return (
        <div>
            <ListItem alignItems="flex-start">    
              <ListItemText
                primary={address.flat+ ',' + address.city}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      <div>{address.state}</div>
                      <div>{address.country}</div>
                      <div>{address.pincode}</div>
                    </Typography>
                  </React.Fragment>
                }
              />
        </ListItem>
        <Divider variant="middle"/>
        <Divider variant="middle"/>
      </div>

    );
}

export default CustomerAddressListItem;