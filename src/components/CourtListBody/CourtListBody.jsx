import React, { useState } from 'react'
import './CourtListBody.css'
import Cards from '../Cards/Cards'
import { useEffect } from 'react'
import AxiosInstance from '../../config/apicall'

function CourtListBody() {
  useEffect(() => {
    getAllCourtData()
  }, [])
  const [courtdata, setCourtData] = useState([])
  const getAllCourtData = () => {
    AxiosInstance({
      url: 'http://localhost:5000/users/getallcourtdata',
      // url: "/admin/createnewcourt",
      method: "get",
    }).then((resp) => {
      setCourtData(resp.data)
      console.log(courtdata);
    })
      .catch((err) => {

      })
  }
  return (
    <div className='court_list_body gap-2 d-flex flex-wrap justify-content-center overflow-y-auto'>
      {courtdata.map((court)=> (  <Cards court={court} /> ))}



    </div>
  )
}

export default CourtListBody