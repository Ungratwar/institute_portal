import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Link = () => {

    window.scrollTo(0,0);
    const {userID}= useParams();
    const navigate =useNavigate();
    const[user, setUser] = useState(userID);
    const [git, setGit]= useState("");
    const[facebook, setFacebook]= useState("");
    const [linked, setLinked]= useState("");
    console.log(userID);
    const submitHandler = (e) => {
        e.preventDefault();
        const LinkData = {
            git,facebook,linked,userID
        }
        axios.post("http://localhost:8083/link",LinkData)
        setFacebook("");
        setGit("");
        setLinked("")
        navigate(`/fulldetails/${userID}`);
    }

  return (
   <> <h1></h1>
   <form onSubmit={submitHandler}>
   <div className='marginCenter formBox'>
   <label htmlFor="title" className="ttl">Git Hub Link </label>
              <input type="text"  onChange={e => setGit(e.target.value)} value={git} /> 
             <label htmlFor="title" className="ttl">Facebook Link </label>
              <input type="text"  onChange={e => setFacebook(e.target.value)} value={facebook} /> 
             <label htmlFor="title" className="ttl">LinkedIn Link </label>
              <input type="text"  onChange={e => setLinked(e.target.value)} value={linked} /> 
             <button className='Nextbutton' type='submit'>Next</button>

</div>
   </form>

   </>
  )
}

export default Link;