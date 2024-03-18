import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'
function Cards() {
    const navigate=useNavigate()
    return (
        <div className='card' onClick={()=>navigate('/courts/courtsdetails')}>
            <img src="https://img.freepik.com/premium-vector/concept-batsman-playing-cricket-raises-his-bat-after-scoring-full-century-championship_460848-4001.jpg" alt="" />
            <div className='card-content'>
                <h2>court name</h2>
                <p>
                    Location <br />
                    lets paly</p>
            </div>
        </div>
    )
}

export default Cards