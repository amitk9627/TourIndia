import React from 'react'
import Navbar from '../component/Navbar';
import mountain from '../image/hills-g860579d9c_1920.jpg'
import '../component/MainStyles.css'
import Main from '../component/Main';
export default function Home() {
  return (
    <div>
      <Navbar />
     
      <Main
        cName="home-main-image-text"
        mainImg={`${mountain}`}
        title="Namaste India"
        text="choose Your Favouite destinations"
        url="/"
        btnText="Travel plans"
        btnClass="show"
      />


    </div>
  )
}
