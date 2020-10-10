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
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="display_section">
            <Input/>
            </div>
          
            <div className="display_section">
            <Display/>
            </div>
          
          </div>
          <div className="col-md-2"></div>
        </div>
       
    </div>
    </CityProvider>
  );
}

export default App;
