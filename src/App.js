import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';
import Login from './componants/Login';
import Signup from './componants/Signup';
import { Routes , Route } from 'react-router-dom';





function App() {
  return (
    <>

    <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          
          
    </Routes>
    

  
      
    </>
  
  );
}

export default App;
