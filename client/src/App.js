import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

