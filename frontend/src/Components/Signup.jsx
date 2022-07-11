import React from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from "axios";


 const Signup = () => {
    window.scrollTo(0,0);

 const navigate =useNavigate();

    const [emailID,setEmailID]= useState('');
    const [password,setPassword]= useState('');
    const [userType ,setUserType]= useState('user');
    const [batch,setBatch] = useState();
    const[status,setStatus] = useState("incomplete")
   
    console.log(emailID);
    console.log(password);
    console.log(batch);
    console.log(userType)

   const Signuphandler = (e) => {
    e.preventDefault();
    const Signupdata={
        emailID,password,batch,userType,status 
        
    }
    console.log(Signupdata);
     axios.post("http://localhost:8083/user", Signupdata)
      

     alert(`New user added...!`);
   

   navigate("/login")
    setEmailID("");
    setPassword("");
    setBatch("");
    setUserType("");
    window.location.reload();

   }

  return (
   <>
   <div>
    <form onSubmit={Signuphandler}>
    <div className='marginCenter formBox'>
            <input type="email" placeholder='Enter EmailID' onChange={ (e) => setEmailID(e.target.value)} value={emailID}  />
            <input type="password" placeholder='Enter Password' onChange={ (e) => setPassword(e.target.value)} value={password}  />
            <input type="number" placeholder='Enter Batch Number' onChange={ (e) => setBatch(e.target.value)} value={batch}  />
           
            <button className='submitBtn' type='submit'>Signup</button>
        </div><br />

    </form>
   </div>
   
   
   </>
  )
}

export default Signup;
