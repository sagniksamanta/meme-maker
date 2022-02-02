import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
        {/* <Route path='/' exact element={<Home />} /> */}
        <Route path='/login' exact element={<Login />} />
        <Route path='/posts' exact element={<Posts />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

