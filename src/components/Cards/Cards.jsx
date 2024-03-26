import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'
function Cards( {court}) {
    const navigate=useNavigate()
    return (
        <div className='card' onClick={()=>navigate('/courts/courtsdetails/'+court._id)}>
           
           {court.courtPics && court.courtPics.length > 0 && (
        court.courtPics[0].type.startsWith('image/') ? (
          <img src={`http://localhost:5000/assets/${court?.courtPics?.[0]?.name}`} alt="" />
        ) : (
          <video src={`http://localhost:5000/assets/${court?.courtPics[0]?.name}`} />
        )
      )}

            <div className='card-content'>
                <h2>{court.name}</h2>
                <p>
                    {court.type} <br />
                    {court.location}</p>
            </div>
        </div>
    )
}

export default Cards