import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const Intern = () => {
    window.scrollTo(0,0);
    const {userID}=useParams();
    const navigate =useNavigate();
         
    useEffect(() => {
        axios.get(`http://localhost:8083/intern/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[userdata,setUserdata]=useState([]);

    console.log(userdata);
    //-------
    const deleteHandler = () => {
        axios.delete(`http://localhost:8083/intern/${userID}`)
        .then( res =>{
            alert("Data deleted..!!");
            

        })
        .catch(err => {
            alert(err);
        })
        window.location.reload();
        
    }
    //-------


    const[companyName, setCompanyName] = useState("");
    const[role, setRole] = useState("");
    const[duration, setDuration] = useState("");
    const[description, setDescription] = useState("");
    const[user, setUser] = useState(userID);
    const submitHandler = (e) => {
        e.preventDefault();
        const internData =  {
            companyName,
            duration,
            description,
            role,
            userID

        }
        console.log(internData);
        axios.post("http://localhost:8083/intern",internData)
        alert("Data Added")
        setCompanyName("");
        setDuration("");
        setDescription("");
        setRole("");
        window.location.reload();

    }
  return (
    < >
    
     <div className="FormContainer">

    <form  onSubmit={submitHandler} >
    <div className='marginCenter formBox'>
        <label htmlFor="title" className="ttl">Company Name </label>
        <input type="text" placeholder="Ex: Addvic Pvt." onChange={e => setCompanyName(e.target.value)} value={companyName} required/>
        <label htmlFor="title" className="ttl">Enter Role </label>
        <input type="text" placeholder="Ex: Full Stack Dev." onChange={e => setRole(e.target.value)} value={role} required/>
        <label htmlFor="title" className="ttl">Enter Duration </label>
        <input type="text" placeholder="Ex: 2 Months, 6 Months" onChange={e => setDuration(e.target.value)} value={duration} required/>
        <label htmlFor="title" className="ttl">Enter Description </label>
        <textarea type="text" placeholder="Ex: Technology like React,HTML-5" onChange={e => setDescription(e.target.value)} value={description}></textarea>
 
         
                <button  className='Addbutton' type='submit'>Add</button>
     
      </div>
       
    </form>
    </div><br /><br />
    <div className='marginCenter tableBox'>
    <table>
            <tr>
              <th>Sr.NO</th>
              <th>Company Name</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          {    userdata.map((row,index) => {
          
        return(
           
            <tr >
              <td>{index+1}</td>
              <td>{row.companyName}</td>
              <td>{row.duration} </td>
              <td>{row.description}</td>
              <td>{row.role}</td>
              <td><button  className='Nextbutton' onClick={deleteHandler}>Delete</button></td>
            </tr>
   

        )
    })}
      </table> <br />
      <button className='Nextbutton' onClick={()=>navigate(`/project/${userID}`)}>Next</button>
      </div>
   
  
      
    </>
  )
}

export default Intern
