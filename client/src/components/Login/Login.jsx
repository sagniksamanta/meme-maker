import { Button, Container, Paper } from '@material-ui/core';
import React from 'react';

const Login = () => {
  return (<>
      <Container component="main" maxWidth='xs'>
        <Paper elevation={3}>
            <form>
                <Button>Sign on</Button>
            </form>
        </Paper>
      </Container>
  </>)
};

export default Login;
