import React from 'react'
import "./MainStyles.css"
export default function Main(props) {
  return (<>
    <div className={props.cName}>
        <img alt='mainImage' src={props.mainImg} />
        <div className='main-text'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass} target='_blank'>{props.btnText}</a>
        </div>
    </div>

    
    </>
  )
}
