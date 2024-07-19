import React, { useState } from 'react'

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const[role, setRole] = useState("");
    

    const handleOnSubmit =(e) =>{
        e.PreventDefault();
        const details = {email, password}
    }
  return (
    <div className='formSigninContainer'>
      <form onSubmit={handleOnSubmit} className='form' >
        <h1>Sign Up</h1>
        <input
          className='inputform'
          type="text"
          placeholder="First name"
          name="firstname"
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
        />
        <input
          className='inputform'
          type="text"
          placeholder="Last name"
          name="last name"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
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

        <select className='inputform'>
            <option className='optioninput' value="Admin">Admin</option>
            <option className='optioninput' value="Member">Member</option>
        </select>


        <button className='formButton'>Sign Up</button>
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

export default SignUp