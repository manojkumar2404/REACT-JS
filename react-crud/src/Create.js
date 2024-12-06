import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate()

    const handlesubmit =(e)=>{
        e.preventDefault();
        // console.log("clicked!")
        axios.post('https://674d47ad54e1fca9290eee95.mockapi.io/crud',
            {
                name:name, 
                email:email
            })

            .then(()=>{
              setName("");
              setEmail("");
              history("/read")
            }).catch((error) => {
              console.error("Error creating data:", error);
            });
    }

  return (
    <div>
        <h2>Create</h2>
  <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div>
   
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>

    </div>
  )
} 

export default Create
 