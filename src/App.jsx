import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Track from './pages/Track';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About/>} />
          <Route path ='/Track' element={<Track/>} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;