import React from 'react'
import './Home.css'
import CusNavBar from '../../components/Common/CusNavBar/CusNavBar'
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel'
import Block from '../../components/Blocks/Block'
import UspBlock from '../../components/UspBlocks/UspBlock'
function Home() {
  return (
    <div>
        <CusNavBar/>
<CustomCarousel/>
<Block/>
<UspBlock/>
    </div>
  )
}

export default Home