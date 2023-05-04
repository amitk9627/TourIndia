import React from 'react'
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import '../component/MainStyles.css'
import TeaGarden from "../image/tea-garden.jpg"

export default function About() {
  return (
    <div>
      <Navbar />
      <Main
        cName="about-main-image-text" 
        mainImg={`${TeaGarden}`}
        title="about"
      />
    </div>

    /* <Main
    cName="home-main-image-text"
    mainImg={`${mountain}`}
    title="Namaste India"
    text="choose Your Favouite destinations"
    url="/"
    btnText="Travel plans"
    btnClass="show"
    /> */


// <div className={props.cName}>
//         <img alt='mainImage' src={props.mainImg} />
//         <div className='main-text'>
//           <h1>{props.title}</h1>
//           <p>{props.text}</p>
//           <a href={props.url} className={props.btnClass} target='_blank'>{props.btnText}</a>
//         </div>
//     </div>
  )
}
