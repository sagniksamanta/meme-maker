import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyles from './styles';
import memer from '../../image/4-2-yao-ming-meme-png.png';

const NavBar = () => {
  const classes = useStyles();

  const user = {
    result : {
      name: null
    }
  };
  
  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
          <img src={memer} alt="altText" height="35" />
          <Typography className={classes.heading} component={Link} to="/" variant="h5">
            MEME
          </Typography>
          <img src={memer} alt="altText" height="35" />
        </div>
        <Toolbar className={classes.toolbar}>
                    {user.result.name ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/login" variant="contained" color="primary" >Sign In</Button>
                    )}
                </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;
