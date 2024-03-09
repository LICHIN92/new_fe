import React from 'react'
import './Loader.css'
function Loader() {
    return (
        <div className='loader-container'> 
            <div className='position-relative spinner-container'>
                <img src="https://cdn.pixabay.com/animation/2023/11/14/18/29/18-29-42-564_512.gif" height={'30px'} alt="" />
            </div>
            <div className='spinner'></div>
        </div>
    )
}

export default Loader