import React from 'react'
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import '../component/MainStyles.css'
import WaterBoat from '../image/waterBoat.jpg'

export default function Service() {
  return (
    <div>
      <Navbar />
      <Main
        cName="service-main-image-text" 
        mainImg={`${WaterBoat}`}
        title="service"
      />
    </div>
  )
}
