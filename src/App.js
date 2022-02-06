import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';
import Login from './componants/Login';
import Signup from './componants/Signup';
import User from './componants/User';
import Meme_gallery from './componants/Meme_gallery';
import Meme_templates from './componants/Meme_templates';
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
          <Route exact path="/user" element={<User/>}/>
          <Route exact path="/meme_gallery" element={<Meme_gallery/>}/>
          <Route exact path="/meme_templates" element={<Meme_templates/>}/>
          
    </Routes>
    

  
      
    </>
  
  );
}

export default App;
