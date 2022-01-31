import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import useStyles from './styles';
import memer from '../../image/4-2-yao-ming-meme-png.png';

const NavBar = () => {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/');
    setUser(null);
  }
  return (
    <>
      <AppBar position="relative" className={classes.appBar} >
        {!user ? (
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant='h3' align='center'>
              Home
            </Typography>
            <img className={classes.image} src={memer} alt="altText" height="60" />
          </div>) : (
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/dashboard" className={classes.heading} variant='h3' align='center'>
              Dashboard
            </Typography>
            <img className={classes.image} src={memer} alt="altText" height="60" />
          </div>
        )}

        <Toolbar className={classes.toolbar}>
          {user ? (
            <>
              <div className={classes.profile}>
                <Typography component={Link} to="/templates" className={classes.heading} variant='h6' align='center'>
                  Templates
                </Typography>
                <Typography component={Link} to="/posts" className={classes.heading} variant='h6' align='center'>
                  Posts
                </Typography>
                <Avatar className={classes.purple} alt={user.result.firstName} src={user.result.imageUrl}>{user.result.firstName.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.firstName}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>
            </>
          ) : (
            <Button component={Link} to="/login" variant="contained" color="primary" >Sign In</Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;
