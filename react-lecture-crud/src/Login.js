import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import firebaseApp from './firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
    const [data, setdata] = useState([]);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let nav = useNavigate();

    const auth = getAuth(firebaseApp);

    const login = async ()=>{
      try {
        await signInWithEmailAndPassword(auth,email,password);
        nav('/product');
      } catch (error) {
        console.log(error)
      }   
    }
  return (
   <div className="form-container">
  <h1>Login</h1>
  <form >
    <div className="form-group">
    email: <input type="email"  placeholder="Enter your email" value={email} onChange={(e)=>setemail(e.target.value)} />
    </div>

    <div className="form-group">
    password: <input type="password"  placeholder="Enter your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    </div>

    <div className="form-group">
      <button type="button" onClick={()=>login()}>Login</button>
    </div>
  </form>
</div>

  )
}
