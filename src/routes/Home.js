import React from 'react';
import Navbar from '../component/Navbar';
import MountainRiver from '../image/mountainRiver.jpg';
import '../component/MainStyles.css';
import Main from '../component/Main';
import Destinations from '../component/Destinations';
import '../component/DestinationStyles.css';
import Kedarnath from '../image/Kedarnath.jpg';
import IndiaAmritsar from '../image/india-amritsar.jpg';
import Trip from '../component/Trip';
import '../component/TripStyles.css';
import Footer from '../component/Footer';



export default function Home() {
  return (<>
    <div>
      <Navbar />
     
      <Main
        cName="home-main-image-text"
        mainImg={`${MountainRiver}`}
        title="Namaste India"
        text="choose Your Favouite destinations"
        url="/"
        btnText="Travel plans"
        btnClass="show"
      />
      <Destinations 
        title="Popular Destinations"
        subTitle="Tours give you the opportunity to see a lot, within a time frame"
        cdesContainer="des-container"
        cSubContainer="des-text"
        containerHeading="Epic of india"
        subTextP={`The tourist sector in India is rapidly growing today. Many regions, 
        including those where tourists were previously prohibited, are now 
        open to domestic visitors. There are still some parts of India 
        that have only lately been discovered and are now open to tourists. 
        There is no such thing as a "off-season" in most tourist areas. 
        As a result of this considerable increase, Indian travel blogs 
        around the internet have created a list of crucial travel recommendations. 
        There are numerous travel advice for various places of India."`}
        cImage="image"
        image1={`${Kedarnath}`}
        image2={`${Kedarnath}`}
      />
      <Destinations 
      title="Historic Places"
      subTitle="Tours give you the opportunity to see a lot, within a time frame"
        cdesContainer="des-container-reverse"
        cSubContainer="des-text"
        containerHeading="Epic of india"
        subTextP={`The tourist sector in India is rapidly growing today. Many regions, 
        including those where tourists were previously prohibited, are now 
        open to domestic visitors. There are still some parts of India 
        that have only lately been discovered and are now open to tourists. 
        There is no such thing as a "off-season" in most tourist areas. 
        As a result of this considerable increase, Indian travel blogs 
        around the internet have created a list of crucial travel recommendations. 
        There are numerous travel advice for various places of India."`}
        cImage="image"
        image1={`${IndiaAmritsar}`}
        image2={`${IndiaAmritsar}`}
      />

     {/* trip */}
     <Trip />

     <Footer />


    </div>
    </>
  )
}