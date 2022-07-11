import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams} from 'react-router-dom';
import moment from 'moment';

const FullDetails = () => {
    window.scrollTo(0,0);
 

    const {userID}=useParams();
    console.log(userID);
    const navigate =useNavigate();
    const[user, setUser] = useState(userID);

    const [fullName,setFullName]=useState('');
    const [date,setDate]=useState();
    const [hobbies,setHobbies]=useState('');
    const [languagesKnown,setLanguagesKnown]=useState('');
    const [address,setAddress]=useState('');
    const [maritialStatus,setMaritialStatus]=useState('');
    const [contactNO,setContactNO]=useState();
    const [emailID, setEmailID] = useState();
    const [batch, setBatch] = useState();
   
    const [gender,setGender]=useState("");
    useEffect(() => {
        axios.get(`http://localhost:8083/person/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         
         
         
     

         setFullName(rawdata[0].fullName);
         setDate( rawdata[0].date);
         setHobbies(rawdata[0].hobbies);
         setLanguagesKnown(rawdata[0].languagesKnown);
         setAddress(rawdata[0].address);
         setMaritialStatus(rawdata[0].maritialStatus);
         setContactNO(rawdata[0].contactNO);
         setGender(rawdata[0].gender);
         setEmailID(rawdata[0].emailID);
         setBatch(rawdata[0].batch);

        }).catch(err => console.log(err));
    },[]);
     
    const[person,setPerson]=useState([]);
        console.log(person);
    useEffect(() => {
        axios.get(`http://localhost:8083/edu/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setEducation(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[education,setEducation]=useState([]);

    console.log(education);
    useEffect(() => {
        axios.get(`http://localhost:8083/intern/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setIntern(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[intern,setIntern]=useState([]);

    console.log(intern);
    useEffect(() => {
        axios.get(`http://localhost:8083/project/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setProject(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[project,setProject]=useState([]);
    //=====
    const[status, setStatus] =useState("");
    const updateStatus = ( e) => {
        e.preventDefault();
        const data ={
            status:"complete"
        }

        axios.put(`http://localhost:8083/user/${userID}`,data)
        .then((res)=>{
                navigate("/thankyou")
        })
        .catch(err =>{
            console.error(err);
        })

    }
    //========

    useEffect(() => {
        axios.get(`http://localhost:8083/link/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setLink(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[link,setLink]=useState([]);

    console.log(link);
    


  return (
    <>  
     
    <h1>  Full Information </h1><br></br><br />
    <div className='container marginCenter'> <h3>1. Personal Details</h3></div>
   <br></br>
    <div className='marginCenter tableBox'>
   
            <form action="">
                 <input type="text" value={fullName} />
                 <input type="text" value={hobbies} />
                 <input type="text" value={maritialStatus} />
                 <input type="text" value={languagesKnown} />
                 <input type="text" value={address} />
                 <input type="text" value={contactNO} />
                 <input type="text" value={emailID} />
                 <input type="text" value={moment(date).format("YYYY-MMM-DD")} />
                 <input type="text" value={batch} />
                 <input type="text" value={gender} />
            </form>

      </div><br /><br />
 <div className='container marginCenter'> <h3>2. Educational Details</h3></div>
   <br></br>
      <div className='marginCenter tableBox'>
    <table>
    <tr>
      <th>Sr.NO</th>
      <th>Title</th>
      <th>Marks</th>
      <th>Startdate</th>
      <th>Enddate</th>
      
    </tr>
  {    education.map((row,index) => {
   const date=row.startDate
     const year=new Date(date)
     const date2=row.endDate
     const year2=new Date(date2)



    console.log(row);
return(
   
    <tr >
      <td>{index+1}</td>
      <td>{row.title}</td>
      <td>{row.marks} %</td>
      <td>{year.getFullYear()}</td>
      <td>{year2.getFullYear()}</td>
     
    </tr>


)
})}
</table>
</div> <br /><br />
<div className='container marginCenter'> <h3>3. Intership Details</h3></div>
   <br></br>
<div className='marginCenter tableBox'>
<table>
            <tr>
              <th>Sr.NO</th>
              <th>Company Name</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Role</th>
           
            </tr>
          {    intern.map((row,index) => {
          
        return(
           
            <tr >
              <td>{index+1}</td>
              <td>{row.companyName}</td>
              <td>{row.duration} </td>
              <td>{row.description}</td>
              <td>{row.role}</td>
             
            </tr>
   

        )
    })}
      </table>
      </div>
       <br /><br />
       <div className='container marginCenter'> <h3>4. Project Details</h3></div>
   <br></br>
      <div className='marginCenter tableBox'>
      <table>
            <tr>
              <th>Sr.NO</th>
              <th>Project Name</th>
              <th>Skills</th>
              <th>Description</th>
            
            </tr>
          {    project.map((row,index) => {
      
            console.log(row);
        return(
           
            <tr >
              <td>{index+1}</td>
              <td>{row.title}</td>
              <td>{row.skills} </td>
              <td>{row.description}</td>
              
            </tr>
   

        )
    })}
      </table>
      </div> <br /><br />
     
      <div className='container marginCenter'> <h3>5. Link Details</h3></div>
   <br></br>
      <div className='marginCenter tableBox'>
      <table>
            <tr>
             
              <th>Git Hub</th>
              <th>Facebook</th>
              <th>LinkedIn</th>
            
            </tr>
         
           {link.map(row => {
            return(
                <tr >
             
                <td>{row.git}</td>
                <td>{row.facebook} </td>
                <td>{row.linked}</td>
                
              </tr>
            )

           })}
           
   

        
    
      </table> 

      </div><br /><br />
    <div className='container marginCenter'>
       <button type='submit' className='submitBtn' onClick={updateStatus}>Submit</button>
       </div>
    </>
  )
}

export default FullDetails;