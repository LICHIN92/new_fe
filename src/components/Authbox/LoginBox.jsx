import React, { useState } from 'react'
import '../Authbox/Loginbox.css'
import Custominput from '../Common/Custom/Custominput'
import axios from 'axios'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'
import { useNavigate } from 'react-router-dom'
function LoginBox({setBoxtype}) {
  const [LoginData,setLoginData]=useState({})
  const handleChange=(e)=>{
    setLoginData({...LoginData,[e.target.name]:e.target.value})
  }
  const navigate=useNavigate()
  const dologin=()=>{
    axios.post('http://localhost:5000/auth/dologin',LoginData)
        .then((res)=>{
      successToast(res.message)
      localStorage.setItem('token',res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.userdata));
      navigate('/home')
    }).catch((err)=>{
      console.log(err);
      ErrorToast(err.response.data.message || 'something went wrong')
    })
  }
  return (
    < div className='d-flex flex-column '>
      <div className=' mt-3'>

        <Custominput label={'Email'} type={'email'} name={'email'} value={LoginData.email} onchange={handleChange}/>
      </div>
      <div className=' mt-3'>
      <Custominput label={'Password'} type={'password'} name={'password'} value={LoginData.password} onchange={handleChange}/>

      </div>
      <button className= 'common-button align-self-center mt-3' onClick={dologin}>Login</button>
<p className='account mt-3 align-self-center'>Don't have an Account <i onClick={()=>setBoxtype("signin")}>Sign up here</i></p>
    </div>
  )
}

export default LoginBox