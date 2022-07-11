import React from 'react';
import './App.css';

// import Routing from './Routing';
import {BrowserRouter} from 'react-router-dom'
import Login from './Components/Login';
import User from './Components/User';

import Routing from './Routing';
import FullDetails from './Components/FullDetails';




function App() {
  return (
    <>
    <BrowserRouter>
   {/* <FullDetails/> */}
    {/* <Project/> */}
    {/* <Intern/> */}
    {/* <Educationdetails/> */}
    {/* <Personaldetails/> */}
    <Routing/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
