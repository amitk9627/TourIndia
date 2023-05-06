import React from 'react'
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import '../component/MainStyles.css'
import TeaGarden from "../image/tea-garden.jpg"
import Footer from '../component/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <Main
        cName="about-main-image-text" 
        mainImg={`${TeaGarden}`}
        title="about"
      />
      <Footer />
    </div>

  )
}
