import React from 'react'
import TripData from './TripData'
import './TripStyles.css';
import Taj from '../image/taj-mahal.jpg'
import Temple from '../image/temple1.jpg'
import UmnogRiverMeghalaya from '../image/umnog-river-meghalaya.jpg'

export default function Trip() {
    return (
        <div className='trip'>
            <h1>Recent trips</h1>
            <p>vbvmnbbkbvlbkvvklngmkrthshteahraehrgf</p>
            <div className='tripCard'>
                <TripData image={Taj} heading="Trip to Taj" text="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."/>
                <TripData image={Temple} heading="trip to temple" text="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal." />
                <TripData image={UmnogRiverMeghalaya} heading="trip tp meghalaya" text="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal." />
            </div>
        </div>
    )
}
