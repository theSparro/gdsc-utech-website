import React from 'react'
// import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'

// import css styles
import './styles/eventpage.scss'

// functional component
function EventPage() {
	// renders the page
	return (
		<div className="EventPage">
			<br />
			<h1>Our Events</h1>
			<br />
			<section className="upcoming">
				<h3 className="section-head">Upcoming</h3>
				<div className="event-box">
					<div className="left">
						<EventCard title="Intro to Machine Learning" />
					</div>

					<div className="right">
						<h2>Introduction to Machine Learning</h2>
						<h4>20/01/2022 - 3PM</h4>
						<br />
						<p>
							This event will give a clear explanation of Machine
							Learning, and its importance in predictions.
							<br />
							The speaker will demonstrate, and students will use
							Python to build a model from scratch.
						</p>
						<PrimaryButton
							onClick={() => console.log('test')}
							text="RSVP"
							color="green"
						/>
					</div>
				</div>
				<br />
				<br />
			</section>

			<section className="previous">
				<h3 className="section-head">Previous Events</h3>

				<EventCard
					title="Intro To Machine Learning"
					link="https://youtu.be/OYhFIx8EYpM"
				/>
				<EventCard
					title="Intro To GitHub"
					link="https://youtu.be/TuszwdwJwBY"
				/>
				<EventCard
					title="Intro To Firebase"
					link="https://youtu.be/RBuNQAmDDU0"
				/>
				<EventCard
					title="Intro To Flutter"
					link="https://youtu.be/JgsZDxuQLzY"
				/>
				<EventCard
					title="Design Thinking"
					link="https://youtu.be/OuXAgXLe8Hs"
				/>
				<EventCard
					title="Career Talk"
					link="https://youtu.be/aXnY375U6BI"
				/>
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
