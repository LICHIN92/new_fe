import React from 'react'
import CusNavBar from '../../components/Common/CusNavBar/CusNavBar'
import CourtListBody from '../../components/CourtListBody/CourtListBody'

function CourtList() {
  return (
    <div className=' d-flex flex-column vh-100'>
       <CusNavBar/>
       <CourtListBody/>
    </div>
  )
}

export default CourtList