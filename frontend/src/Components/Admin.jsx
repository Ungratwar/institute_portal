import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const{userID}=useParams();
    const[person,setPerson]=useState([]);
    const navigate = useNavigate();
         
    useEffect(() => {
        axios.get(`http://localhost:8083/person`)
        .then(async(res) =>{
            const rawdata= await res.data;
            console.log(rawdata);
            setPerson(rawdata);

        }).catch(err => console.log(err));
    },[]);

        
    const[name,setName]= useState("All");
    const[all,setAll]= useState("");

  
    console.log(name);
   
       const StudentName = person.filter(row => {
        
        if(name == "All" ){
          return(
            row
          )
        }
        else if(name == ""){
          return(
            row
          )
        }
        else{
         return(
              row.fullName == name
          );
        }
       })
  
  return (
  <>
  <h1>Admin Portal</h1><br /><br /><br />
  <div className='container marginCenter'>
    <input type="text" onChange={e => setName(e.target.value)} value={name}  placeholder='SearchBar' />
  </div><br /><br />
  <div className='marginCenter tableBox'>
      <table>
            <tr>
              <th>Sr.NO</th>
              <th>Full Name</th>
              <th>Batch</th>
              <th>Contact NO.</th>
              <th>View Details</th>
            
            </tr>
          {
           
           StudentName.map((row,index) => {
                console.log(row);
                return(
                    <tr>
              <td>{index+1}</td>
              <td>{row.fullName}</td>
              <td>{row.batch}</td>
              <td>{row.contactNO}</td>
              <td><button className='submitBtn' onClick={()=>navigate(`/studentdetails/${row.userID}`)}>View Details</button></td>
            </tr>
                )
            })
          }
      </table> <br /><br />
      </div>

      
  </>
  )
}

export default Admin;