import React from 'react'
import eventCardImage from "../images/event_card.png"

// import the CSS
import './styles/eventcard.scss'


function EventCard(props) {

    return (
        <div className='EventCard'>
                <span>
                    <img id="eventcard-img" src={eventCardImage} alt="" />
                    <h2 id="title">{props.title}</h2>
                </span>
        </div>
    )
}

export default EventCard
