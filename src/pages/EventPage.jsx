import React from 'react'
import EventCard from '../components/EventCard.jsx'

// functional component
function EventPage() {

    // renders the page
    return (
        <div className='EventPage'>
            <h1>Our Events</h1>
            <section>
                <div>
                    <h2>Upcoming</h2>
                </div>
            </section>
            <section>
                    <h2>Previous Events</h2>
                    <EventCard title="Intro To Machine Learning"/>
            </section>
        </div>
    )
}

export default EventPage
