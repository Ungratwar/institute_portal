
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from 'react'; 

const User = () => {
    const {userID}=useParams();

    const[userdata,setUserdata]=useState([]);
    console.log(userdata);
        
    useEffect(() => {
        axios.get(`http://localhost:8083/user/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata);

        }).catch(err => console.log(err));
    },[]);
  return (
   <>
    <h1>Hii user {userdata.emailID}</h1>
    
   
   </>
  )
}

export default User;