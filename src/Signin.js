import React, { useState } from 'react'
import './Signin.css';


function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleOnSubmit =(e) =>{
        e.PreventDefault();
        const details = {email, password}

        fetch("http://localhost:5050/crackit/v1/auth/authenticate",
        {
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(details)
        }
    )
    }
  return (
     <div className='formSigninContainer'>
      <form onSubmit={handleOnSubmit} className='form' >
        <h1>Sign in</h1>
        <input
          className='inputform'
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          className='inputform'
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className='formButton'>Sign In</button>
      </form>
      <div>{email}</div>
      <div>{password}</div>

      <div className='swizz'>
            <h3>SwizzSoft</h3>
            <p>Swift.soft.secure and secure</p>
      </div>
    </div>
   
  )
}

export default Signin