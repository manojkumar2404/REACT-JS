import React from 'react'
import { useState } from 'react';
// import './Registration.css';
import { useNavigate } from 'react-router-dom';
import firebaseApp from './firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default function Registration() {

    const [data, setdata] = useState([]);
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let nav = useNavigate();

    const auth = getAuth(firebaseApp);

    const register = async ()=>{
      try {
        await createUserWithEmailAndPassword(auth,email,password);
        nav('/product');
      } catch (error) {
        console.log(error)
      }   
    }

    

  return (
    <div>
        <form className="form-container">
      <h1>Registration Form</h1>
  <div className="form-group">
  username :<input type="text" placeholder="Enter your username" value={username} onChange={(e)=>setusername(e.target.value)} />
  </div>

  <div className="form-group">
  email :<input type="email"  placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)} />
  </div>

  <div className="form-group">
  password :<input type="password"  placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)} />
  </div>

  <div className="form-group">
    <button  type="button" onClick={()=>register()}>Registration</button>
  </div>
</form>

    </div>
  )
}
