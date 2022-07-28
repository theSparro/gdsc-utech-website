/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {
	getFirestore,
	collection,
	getDocs,
	query,
	orderBy,
} from 'firebase/firestore'
// import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'

// import css styles
import './styles/eventpage.scss'
// import { useNavigate } from 'react-router-dom'

// functional component
function EventPage() {
	let eventType = {
		dedicatedPageLink: '',
		description: '',
		startDate: Date,
		endDate: Date,
		eventLink: '',
		shortTitle: '',
		title: '',
		videoLink: '',
	}
	const firestore = getFirestore()
	const eventCollection = collection(firestore, 'events/')
	let [allEvents, setAllEvents] = useState([eventType])
	let [upcomingEvents, setUpcomingEvents] = useState([eventType])

	useEffect(() => {
		getEvents()
	}, [])

	const getEvents = async () => {
		setAllEvents([])
		setUpcomingEvents([])
		try {
			let result = await getDocs(
				query(eventCollection, orderBy('startDate', 'desc'))
			)
			result.forEach((doc) => {
				let eventObj = {
					dedicatedPageLink: doc.data().dedicatedPageLink,
					description: doc.data().description,
					startDate: doc.data().startDate.toDate(),
					endDate: doc.data().endDate.toDate(),
					eventLink: doc.data().eventLink,
					shortTitle: doc.data().shortTitle,
					title: doc.data().title,
					videoLink: doc.data().videoLink,
				}

				if (doc.data().startDate.toDate() > Date.now())
					setUpcomingEvents((old) => [...old, eventObj])
				else setAllEvents((old) => [...old, eventObj])
			})
		} catch (e) {
			console.log(e)
		}
	}

	// renders the page
	return (
		<div className="EventPage">
			<br />
			<h1>Our Events</h1>
			<br />
			<section className="upcoming">
				<h4 className="section-head">Upcoming</h4>

				<div className="list">
					{upcomingEvents.length === 0 && (
						<div className="event-box">No upcoming events</div>
					)}
					{upcomingEvents.map((event, i) => (
						<div className="event-box" key={i}>
							<div className="left">
								<EventCard title={event.shortTitle} />
							</div>

							<div className="right">
								<h2>{event.title}</h2>
								<h4>{event.startDate.toLocaleString()}</h4>
								<br />
								<p>{event.description}</p>
								<PrimaryButton
									onClick={() =>
										window.open(event.eventLink, '_blank')
									}
									text="RSVP"
									color="green"
								/>
							</div>
						</div>
					))}
				</div>
				<br />
				<br />
			</section>

			<section className="previous">
				<h4 className="section-head">Past Events</h4>

				{allEvents.map((event, i) => (
					<EventCard
						key={i}
						title={event.shortTitle}
						link={event.eventLink}
					/>
				))}
			</section>

			<div className="community">
				<a
					id="gdsc-page"
					target="_blank"
					href="https://gdsc.community.dev/university-of-technology"
					rel="noreferrer">
					View Events On Our Community Page
				</a>
			</div>
		</div>
	)
}

export default EventPage
