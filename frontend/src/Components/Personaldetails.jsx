import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const Personaldetails = () => {
    window.scrollTo(0,0);

    const {userID}= useParams();

    const navigate =useNavigate();
    const[userdata,setUserdata]=useState([]);
    
    const[user, setUser] = useState(userID);
    const [emailId, setEmailID] = useState();
const [batchno, setBatch] = useState();
    console.log(userdata.emailID);
        
    useEffect(() => {
        axios.get(`http://localhost:8083/user/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata[0]);
         setEmailID(rawdata[0].emailID);
         setBatch(rawdata[0].batch)

        }).catch(err => console.log(err));
    },[]);


console.log(emailId);


    const [fullName,setFullName]=useState('');
    const [date,setDate]=useState();
    const [hobbies,setHobbies]=useState('');
    const [languagesKnown,setLanguagesKnown]=useState('');
    const [address,setAddress]=useState('');
    const [maritialStatus,setMaritialStatus]=useState('');
    const [contactNO,setContactNO]=useState();
   
    const [gender,setGender]=useState("");
   
    
    
    const PersonaldetailsHandler = (e) => {
        e.preventDefault();
        
        setEmailID(userdata.emailID);
        setBatch(userdata.batch);
    // console.log(emailID);

        const Persondetailsdata={
            fullName,date,hobbies,languagesKnown,address,maritialStatus,contactNO,
            emailID : emailId,
            userID,
            batch : batchno,
            gender
        }
        console.log(Persondetailsdata);
        axios.post("http://localhost:8083/person",Persondetailsdata)
             alert(`New data added...!`)
            setFullName("");
            setDate("");
            setHobbies("");
            setLanguagesKnown("");
            setAddress("");
            setMaritialStatus("");
            setContactNO("");
            setEmailID("");
            setGender("");
            setBatch("");

            navigate(`/educationdetails/${userID}`)
            // window.location.reload();
    }


  return (
    <>
        <div className='FormContainer'>
    

                <form onSubmit={PersonaldetailsHandler}>
                    <div className='marginCenter formBox' >
                    <label htmlFor='title' >Enter Fullname </label>
                <input type="text" placeholder='Fname Mname Lname' onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <label htmlFor='title' >Enter Gender </label>
                <input type="text" placeholder='Ex: Male/Female' onChange={(e) => setGender(e.target.value)} value={gender} />
                <label htmlFor='title' >Date OF Birth </label>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                <label htmlFor='title' >Enter Hobbies </label>
                <input type="text" placeholder='ex: Cricket, Watching Movies' onChange={(e) => setHobbies(e.target.value)} value={hobbies} />
                <label htmlFor='title' >Enter Languages </label>
                <input type="text" placeholder='ex: Marathi, Hindi' onChange={(e) => setLanguagesKnown(e.target.value)} value={languagesKnown} />
                <label htmlFor='title' >Enter Address </label>
                <input type="text" placeholder='ex: Anand Nagar Pune'  onChange={(e) => setAddress(e.target.value)} value={address}/>
                <label htmlFor='title' >Enter MaritialStatus </label>
                <input type="text" placeholder='ex: Married / Unamrried' onChange={(e) => setMaritialStatus(e.target.value)} value={maritialStatus} />
                <label htmlFor='title' >Contact NO.</label>
                <input type="number" placeholder='Enter ContactNO' onChange={(e) => setContactNO(e.target.value)} value={contactNO} />
                <label htmlFor='title' >Email </label>
                <input type="email" disabled value={emailId} />
                <label htmlFor='title' >Batch NO.</label>
                <input type="number" disabled value={batchno} />

                <button className='Nextbutton' type='submit'>Next</button>
        
                </div>
        
                </form>
                
                
            

            


</div>
    </>
  )
}

export default Personaldetails;