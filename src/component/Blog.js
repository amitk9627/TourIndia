import React from 'react'
import './BlogStyles.css'

export default function Blog(props) {
  return (
    <div>
      <div className='blog'>
        <h1>{props.heading}</h1>
        <div className='icon'>
            <div className='subIcon'><i class="fa-solid fa-calendar-days"></i>June 20, 2015</div>
            <div className='subIcon'><i class="fa-solid fa-user"></i>ThemeDelight </div>
            <div className='subIcon'><i class="fa-solid fa-pen"></i>Destinations,Wilderness </div>
            <div className='subIcon'><i class="fa-solid fa-tags"></i>Costa Rica</div>
            <div className='subIcon'><i class="fa-solid fa-comments"></i>2 Comments</div> 
        </div>
        <div>
            <img alt='blogImage' src={props.src} />
        </div>
        <div className='blog-text'>
        {props.text}
        </div>
        <div className='social-icon'>
            <div className='subSocialIcon'><i class="fa-brands fa-facebook-f"></i></div>
            <div className='subSocialIcon'><i class="fa-brands fa-twitter"></i></div>
            <div className='subSocialIcon'><i class="fa-brands fa-linkedin-in"></i></div>
            <div className='subSocialIcon'><i class="fa-brands fa-pinterest"></i></div>
            <div className='subSocialIcon'><i class="fa-brands fa-instagram"></i></div> 
        </div>
      </div>
    </div>
  )
}
