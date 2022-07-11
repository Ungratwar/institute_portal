import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate} from "react-router-dom"

 const Login = () => {
    window.scrollTo(0,0);
    const navigate = useNavigate();

    const[userdata,setUserdata]=useState([]);
    console.log(userdata);
        
    useEffect(() => {
        axios.get("http://localhost:8083/user")
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata);

        }).catch(err => console.log(err));
    },[]);

    const [emailID,setEmailID]= useState('');
    const [password,setPassword]= useState();
    
    console.log(emailID);
    console.log(password);
  
   const  submitHandler = (e) => {
        e.preventDefault();
        // const Logindata={
        //     emailID,password
        // }
        // console.log(Logindata);
        const loginUser = userdata.filter(row=>{
           
            if(row.emailID === emailID  &&  row.password === password){
               
               return row;
}
});
console.log(loginUser);
if(loginUser[0].userType == "admin"){
    navigate(`/admin`);
}else if(loginUser[0].userType == "user"){
    if(loginUser[0].status == "complete"){
        navigate(`/fulldetails/${loginUser[0]._id}`)
    }else{
        navigate(`/note/${loginUser[0]._id}`);
    }


   
}
else{
    alert("user not found");
}
   }
  return (
   <>
    <div className='marginCenter formBox'>
    <div className='container marginCenter'> <h1> Login Portal</h1></div>
   <br></br>
   <div>
    <form onSubmit={submitHandler} >
        <div>
            <input type="text" placeholder='Enter EmailID' onChange={ (e) => setEmailID(e.target.value)} value={emailID}  />
            <input type="text" placeholder='Enter Password' onChange={ (e) => setPassword(e.target.value)} value={password}  />
            <button className='submitBtn' type='submit'>Login</button>
        </div>
       
    </form>
    <button className='Nextbutton' onClick={()=>navigate("/signup")} >Signup</button>
    
   
   </div>
   </div>
   </>
  );
}
export default Login;