

import React from 'react'

export default function Destinations(props) {
    return (
        <section>
            <div className='destination'>
                <h1>{props.title}</h1>
                <p>{props.subTitle}</p>

                <div className={props.cdesContainer}>
                    <div className={props.cSubContainer}>
                        <h2>{props.containerHeading}</h2>
                        <p>{props.subTextP}</p>
                    </div>
                    <div className={props.cImage}>
                        <img alt='india' src={props.image1}/>
                        <img alt='india' src={props.image2}/>
                    </div>
                </div>

            </div>
        </section>
    )
}
