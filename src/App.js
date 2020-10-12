import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Componets Import
import Navbar from './Components/Navbar'
import Input from './Components/Input'
import Display from './Components/Display'

// API
import {CityProvider} from './API'
function App() {
  return (
    <CityProvider>
    <div className="App">
        <Navbar/>
        <div className="display-content">
        <Input/>
        <Display/>
        </div>
        
       
    </div>
    </CityProvider>
  );
}

export default App;
