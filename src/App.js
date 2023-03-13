import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import NavbarNew from './components/Navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavbarNew className='navbarnew'/>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movie />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;