import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import "./Educationdetails.css";

const Educationdetails = () => {
    window.scrollTo(0,0);

    const {userID}=useParams();
    const navigate =useNavigate();
       
    useEffect(() => {
        axios.get(`http://localhost:8083/edu/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[userdata,setUserdata]=useState([]);

    console.log(userdata);

    const[title, setTitle] = useState("");
    const[startDate, setStartDate] = useState();
    const[endDate, setEndDate] = useState();
    const[marks, setMarks] = useState();
    const[user, setUser] = useState(userID);
  
 //-------
 const deleteHandler = () => {
    axios.delete(`http://localhost:8083/edu/${userID}`)
    .then( res =>{
        alert("Data deleted..!!");
        

    })
    .catch(err => {
        alert(err);
    })
    window.location.reload();
    
}
//-------
    const submitHandler = (e) => {
        e.preventDefault();
        const eduData =  {
            title,
            marks,
            startDate,
            endDate,
            userID

        }
        console.log(eduData);
        axios.post("http://localhost:8083/edu",eduData)
        alert("Data Added..!!")
        setEndDate('');
        setMarks('');
        setStartDate("");
        setTitle("");
        window.location.reload();
        
    }
  return (
    <>
       <form   onSubmit={submitHandler} >
             <div className='marginCenter formBox'>  
              <label htmlFor="title" className="ttl">Title </label>
              <input type="text" placeholder='Ex: SSC, HSC, DEGREE' onChange={e => setTitle(e.target.value)} value={title} required/> 
        
              <label htmlFor="number" className="ttl">Enter Marks </label>
              <input type="number" placeholder='Ex: 89.20' onChange={e => setMarks(e.target.value)} value={marks}  required  />
           
              <label htmlFor="date" className="amt">From </label>
              <input type="date" name="startdate" onChange={e => setStartDate(e.target.value)} value={startDate} required/> 
           
              <label htmlFor="date" className="dt">To </label>
              <input type="date" name="enddate" onChange={e => setEndDate(e.target.value)} value={endDate}/> 
            
                <button  className='Addbutton' type='submit' >Add</button>
         
                </div>
           
          </form>
          
         <br /><br />
         <div className='marginCenter tableBox'>
          <table >
            <tr>
              <th>Sr.NO</th>
              <th>Title</th>
              <th>Marks</th>
              <th>Startdate</th>
              <th>Enddate</th>
              <th>Delete</th>
            </tr>
          {    userdata.map((row,index) => {
           const date=row.startDate
             const year=new Date(date)
             const date2=row.endDate
             const year2=new Date(date2)

        return(
           
            <tr >
              <td>{index+1}</td>
              <td>{row.title}</td>
              <td>{row.marks} %</td>
              <td>{year.getFullYear()}</td>
              <td>{year2.getFullYear()}</td>
              <td><button  className='Nextbutton' onClick={deleteHandler}>Delete</button></td>
            </tr>
   
        )
    })}
      </table> <br />
          <button className='Nextbutton' onClick={()=>navigate(`/intern/${userID}`)}>Next</button>
          </div>
          </>
  )
}

export default Educationdetails;
