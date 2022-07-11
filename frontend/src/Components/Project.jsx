import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const Project = () => {
    window.scrollTo(0,0);

    const {userID}=useParams();
    const navigate =useNavigate();
          
    useEffect(() => {
        axios.get(`http://localhost:8083/project/${userID}`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
         setUserdata(rawdata);

        }).catch(err => console.log(err));
    },[]);
     
    const[userdata,setUserdata]=useState([]);

    console.log(userdata);
    const[skills, setSkills] = useState("");
    const[title, setTitle] = useState("");
    const[user, setUser] = useState(userID);
  
    const[description, setDescription] = useState("");
    //-------
    const deleteHandler = () => {
        axios.delete(`http://localhost:8083/project/${userID}`)
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
        const projectdata =  {
            title,
            skills,
             description,
             userID

        }
        console.log(projectdata);
        axios.post("http://localhost:8083/project",projectdata)
        alert("Data Added");
        setSkills("");
        setTitle("");
        setDescription("");
        window.location.reload();
    }
  return (
    <>
    <div className='FormContainer'>
      
    <form   onSubmit={submitHandler} >
    <div className='marginCenter formBox'>
    <label htmlFor="title" className="ttl">Enter Project Name </label>
        <input type="text" placeholder="Ex: ToDo list" onChange={e => setTitle(e.target.value)} value={title} required/> 
       
        <label htmlFor="title" className="ttl">Enter Skills Used </label>
        <textarea type="text" placeholder="Ex: HTML-5, React" onChange={e => setSkills(e.target.value)} value={skills} required> </textarea>
   
        <label htmlFor="title" className="ttl">Enter Description Of Project </label>
        <textarea type="text" placeholder="Ex: Project Details" onChange={e => setDescription(e.target.value)} value={description}></textarea> 
      
            
                <button className='Addbutton' type='submit'>Add</button>
            
        
      </div>
        
    </form>
    </div><br /><br />
    <div className='marginCenter tableBox'>

    <table>
            <tr>
              <th>Sr.NO</th>
              <th>Project Name</th>
              <th>Skills</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          {    userdata.map((row,index) => {
      
            console.log(row);
        return(
           
            <tr >
              <td>{index+1}</td>
              <td>{row.title}</td>
              <td>{row.skills} </td>
              <td>{row.description}</td>
              <td><button  className='Nextbutton' onClick={deleteHandler}>Delete</button></td>
            </tr>
   

        )
    })}
      </table> <br /><br />
      <button className='Nextbutton' onClick={()=>navigate(`/link/${userID}`)}>Next</button>
      </div>
    
     
    
      
    </>
  )

}

export default Project
