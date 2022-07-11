import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';

const Note = () => {
  window.scrollTo(0,0);

  const {userID}= useParams();

  const navigate =useNavigate();




  return (
    <>
      <div  className='marginCenter formBox'>
      <h1>* Require information:-</h1>
      <li>Note (Please fill information carefully).</li>
        <li>About your educational details.
        </li>
        <li> Your internship details.
        </li>
        <li> Your personaldetails.</li>
        <li> If you have done projects then project details</li>
        <li>Your Github, facebook, Linkedin profile links </li><br />
        <button className='submitBtn' onClick={()=>{navigate(`/personaldetails/${userID}`)}}>Start journey</button>
      </div>
      
    </>
  )
}

export default Note
