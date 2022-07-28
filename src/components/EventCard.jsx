import React from 'react'
import eventCardImage from '../images/event_card.png'

// import the CSS
import './styles/eventcard.scss'

function EventCard(props) {
	return (
		<div className="EventCard">
			<a target="_blank" rel="noreferrer" href={props.link}>
				<span>
					<img id="eventcard-img" src={eventCardImage} alt="" />
					<h2 id="title">{props.title}</h2>
				</span>
			</a>
		</div>
	)
}

export default EventCard
