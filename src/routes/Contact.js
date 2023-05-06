import React from 'react'
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import '../component/MainStyles.css'
import MountainCloud from '../image/mountainsCloud.jpg'
import Footer from '../component/Footer';
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Main
        cName="contact-main-image-text" 
        mainImg={`${MountainCloud}`}
        title="contact"
      />
      <Footer />
    </div>
  )
}
