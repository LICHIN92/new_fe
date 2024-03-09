import React, { useState } from 'react'
import '../Authbox/Loginbox.css'
import Custominput from '../Common/Custom/Custominput'
import axios from 'axios'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'

function SignuoBox({ setBoxtype }) {

  const [signupData, setSignupData] = useState({})
  const handleChange = (e) => {
    setSignupData({...signupData, [e.target.name]: e.target.value })
    // console.log(signupData);
  }
  // const dosignup = () => {
  //   if (signupData.password === signupData.confirmpassword) {
  //     axios.post('http://localhost:5000/auth/dosignup', signupData)

  //     // axios({
  //     //   method:'POST',
  //     //   url:process.env.REACT_BASE_APP_URL+'/auth/dosignup',
  //     //   data:signupData
  //     // })
  //     .then((res)=>{
  //       successToast(res.response.data.message)
  //       console.log('ok');
  //       setBoxtype('login')
  //     })
  //    .catch((err)=>{
  //       console.log(err);
  //       // debugger
  //       ErrorToast(err?.response?.data.message || 'something went wrong')
  //     }) 
  //   } else {
  //     alert('wrong')
  //     console.log(signupData.password,signupData.confirmpassword);
  //     ErrorToast('password mismatch')
  //   }

  // }
  const dosignup=()=>{
    if(signupData.password===signupData.confirmpassword){
      axios.post('http://localhost:5000/auth/dosignup',signupData)
      .then((resp)=>{
        alert('ok')
        setBoxtype('login')
      }).catch((err)=>{
        alert(err)
      })
    }
  }
  return (
    <div className=' d-flex flex-column '>
      <div className="mt-3">
        <Custominput name={'firstname'} type={'text'} label={'First Name'} value={signupData.firstname} onchange={handleChange} />

      </div>
      <div className="mt-3">
        <Custominput name={'lastname'} type={'text'} label={'Last Name'} value={signupData.lastname} onchange={handleChange} />

      </div>
      <div className="mt-4">
        <Custominput name={'email'} type={'email'} label={'Email'} value={signupData.email} onchange={handleChange} />

      </div>
      <div className="mt-4">
        <Custominput name={'mobile'} type={'number'} label={'Mobile Number'} value={signupData.mobile} onchange={handleChange} />

      </div>
      <div className="mt-4">
        <Custominput name={'password'} type={'password'} label={'Password'} value={signupData.password} onchange={handleChange} />

      </div>
      <div className="mt-4">
        <Custominput name={'confirmpassword'} type={'password'} label={'Confirm-Password'} onchange={handleChange} />

      </div>
      <button className='common-button align-self-center mt-4' onClick={dosignup}> Sign up</button>
      <p className='account align-self-center mt-3'>Already have an Account <i onClick={() => setBoxtype('login')} >Login here</i></p>
    </div>
  )
}

export default SignuoBox