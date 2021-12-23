import React from 'react'
import eventCardImage from "../images/event_card.png"
// import the CSS
import './styles/eventcard.scss'


function EventCard(props) {

    return (
        <div className='EventCard'>
            <div>
                <img id="eventcard-img" src={eventCardImage} alt="" />
                <h2 id="title">{props.title}</h2>
            </div>
        </div>
    )
}

export default EventCard
