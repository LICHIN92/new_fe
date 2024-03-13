import React, { useState } from 'react'
import './Auth.css'
import footbalG from '@Assets/football-ground.avif'
import LoginBox from '../../components/Authbox/LoginBox'
import SignuoBox from '../../components/Authbox/SignuoBox'
function AuthPage() {
    const [Boxtype, setBoxtype] = useState('login')
    return (
        <div className='container-fluid d-flex flex-row justify-content-center align-items-center vh-100 vw-100 authpage'>
            <div className='row '>
                <div className=' col-sm-12 col-md-6 left-image p-2' style={{ backgroundImage: `url(${footbalG})` }}>
                    <p className='my-2'>Reserve your spot, create memories, and let the games begin!</p>
                </div>
                <div className='col-sm-12 col-md-6 right-side px-md-4'>

                    <h3 className=' w-100 text-center mt-4 mb-4'>
                        {Boxtype==='login'? 'Login':'Signup'}
                    </h3>
                    {Boxtype==='login'? <LoginBox setBoxtype={setBoxtype}/>:<SignuoBox setBoxtype={setBoxtype}/>}

                </div>
            </div>
        </div>
    )
}

export default AuthPage