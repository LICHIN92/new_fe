import React from 'react'
import './CourtListBody.css'
import Cards from '../Cards/Cards'
function CourtListBody() {
  return (
    <div className='court_list_body gap-2 d-flex flex-wrap justify-content-center overflow-y-auto'> 
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>

     </div>
  )
}

export default CourtListBody