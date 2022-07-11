import React from 'react'
import {Routes, Route} from "react-router-dom";
import Educationdetails from './Components/Educationdetails';
import Project from "./Components/Project";
import Intern from "./Components/Intern";
import Login from "./Components/Login";
import Personaldetails from './Components/Personaldetails';
import Signup from './Components/Signup';
import User from './Components/User';
import Admin from './Components/Admin';
import FullDetails from './Components/FullDetails';
import Link from './Components/Link';
import Note from './Components/Note';
import Studentdetails from './Components/Studentdetails';
import ThankYou from './Components/ThankYou';


 const Routing = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/thankyou" element={<ThankYou/>}></Route>
        <Route exact path="/studentdetails/:userID" element={<Studentdetails/>}></Route>
        <Route exact path="/fulldetails/:userID" element={<FullDetails/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/user/:userID" element={<User/>}></Route>
        <Route exact path="/admin" element={<Admin/>}></Route>
        <Route exact path="/note/:userID" element={<Note/>}></Route>
        <Route exact path="/link/:userID" element={<Link/>}></Route>
        <Route exact path="/personaldetails/:userID" element={<Personaldetails/>}></Route>
        <Route exact path="/project/:userID" element={<Project/>}></Route>
        <Route exact path="/educationdetails/:userID" element={<Educationdetails/>}></Route>
        <Route exact path='/intern/:userID' element={<Intern/>}></Route>
        



    </Routes>
    
    
    
    </>
  )
}
export default Routing;
