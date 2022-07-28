/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {
	getFirestore,
	collection,
	getDocs,
	deleteDoc,
    doc,
    query,
	updateDoc,
	Timestamp,
	addDoc,
    orderBy,
} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import PrimaryButton from './../../components/PrimaryButton'
import { useRef } from 'react'

function AdminEventPage() {
	const eventForm = useRef(HTMLFormElement)
	const editEventSubmitBtn = useRef()
	let [events, setEvents] = useState([
		{
			id: '',
			dedicatedPageLink: '',
			description: '',
			startDate: '',
			startTime: '',
			endDate: '',
			eventLink: '',
			shortTitle: '',
			title: '',
			videoLink: '',
		},
	])
	let [selectedEvent, setSelectedEvent] = useState({
		id: '',
		dedicatedPageLink: '',
		description: '',
		startDate: '',
		startTime: '',
		endDate: '',
		eventLink: '',
		shortTitle: '',
		title: '',
		videoLink: '',
	})

	const firestore = getFirestore()
	const eventCollection = collection(firestore, 'events/')

	useEffect(() => {
		getEvents()
	}, [])

	/**
	 * A hacky way to convert the firestore date to a value that can be used in <input type="datetime-local">
	 * because javascript Dates are retarded
	 * @param {Date} date input date
	 */
	const dateToDateTimeString = (date) => {
		let month =
			date.getMonth() < 10
				? `0${date.getMonth() + 1}`
				: date.getMonth() + 1
		let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
		let hour =
			date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
		let minute =
			date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

		let dateString = `${date.getFullYear()}-${month}-${day}T${hour}:${minute}:00`
		console.log(dateString)
		return dateString
	}

	const getEvents = async () => {
		let list = []

		try {
			let result = await getDocs(query(eventCollection, orderBy('startDate', 'desc')))
			result.forEach((doc) => {
				// 2022-06-09T22:00:00.000
				list.push({
					id: doc.id,
					dedicatedPageLink: doc.data().dedicatedPageLink,
					description: doc.data().description,
					startDate: dateToDateTimeString(
						doc.data().startDate.toDate()
					),
					endDate: dateToDateTimeString(
						doc.data().endDate.toDate()
					),
					startTime: doc
						.data()
						.startDate.toDate()
						.toLocaleTimeString('en-US', {
							hour: '2-digit',
							minute: '2-digit',
							hour12: true,
						}),
					eventLink: doc.data().eventLink,
					shortTitle: doc.data().shortTitle,
					title: doc.data().title,
					videoLink: doc.data().videoLink,
				})
			})
		} catch (e) {
			alert(e.message)
		}

		setEvents(list)
	}

	const deleteEvent = async (event) => {
		try {
			if (window.confirm('Delete this event?')) {
				await deleteDoc(doc(firestore, eventCollection, event.id))
				setEvents(events.filter((x) => x.id !== event.id))
			}
		} catch (err) {
			alert(err.message)
		}
	}

	const formSubmit = async (e) => {
		e.preventDefault()

		try {
			let newDoc = {
				title: e.target[0].value,
				shortTitle: e.target[1].value,
				description: e.target[2].value,
				startDate: Timestamp.fromDate(new Date(e.target[3].value)),
				endDate: Timestamp.fromDate(new Date(e.target[4].value)),
				eventLink: e.target[5].value,
				videoLink: e.target[6].value,
				dedicatedPageLink: e.target[7].value,
			}

			if (selectedEvent) {
				// update existing event
				await updateDoc(doc(eventCollection, selectedEvent.id), newDoc)
			} else {
				// create new event
				await addDoc(eventCollection, newDoc)
			}

			$('#editEventModal').modal('hide')
			alert('SUCCESS')
			eventForm.current.reset()
			getEvents()
		} catch (err) {
			alert(err.message)
			console.log(err)
		}
	}

	return (
		<div
			className="tab-pane fade show active"
			id="pills-events"
			role="tabpanel"
			aria-labelledby="pills-events-tab">
			Add or remove events. <Link to="/events">Go to events page</Link>
			<p style={{ float: 'right' }}>
				<PrimaryButton
					data-bs-toggle="modal"
					data-bs-target="#editEventModal"
					text={<i className="bi bi-plus" />}
					color="blue"
					onClick={() => {
						setSelectedEvent(null)
						eventForm.current.reset()
					}}
				/>
			</p>
			<br />
			<br />
			{events.map((event, key) => (
				<div className="event-tile" key={key}>
					<h4 className="title">{event.title}</h4>
					<p className="date">
						<b>{new Date(event.startDate).toDateString()}</b> to{' '}
						<b>{new Date(event.endDate).toDateString()}</b>
					</p>
					<p className="time">@ {event.startTime}</p>

					<button
						className="edit-btn"
						data-bs-toggle="modal"
						data-bs-target="#editEventModal"
                        onClick={() => {
                            eventForm.current.reset()
                            setSelectedEvent(event)
                        }}>
						Edit
					</button>
					<button
						className="del-btn"
						onClick={() => deleteEvent(event)}>
						Delete
					</button>
				</div>
			))}
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="editEventModal"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="staticBackdropLabel">
								{selectedEvent ? 'Edit Event' : 'New event'}
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form
                                ref={eventForm}
                                autoComplete="on"
								onSubmit={(e) => formSubmit(e)}>
								<div className="mb-3">
									<label className="form-label">
										Title *
									</label>
									<input
										className="form-control"
										defaultValue={selectedEvent?.title}
										required
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">
										Short title *
									</label>
									<input
										className="form-control"
                                        defaultValue={selectedEvent?.shortTitle}
                                        maxLength={40}
										required
									/>
									<div className="form-text">
										a shorter version of the title for small
										cards
									</div>
								</div>
								<div className="mb-3">
									<label className="form-label">
										Description *
									</label>
									<input
										className="form-control"
										defaultValue={
											selectedEvent?.description
										}
										required
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">
										Start Date *
									</label>
									<input
										type="datetime-local"
										className="form-control"
										defaultValue={selectedEvent?.startDate}
										required
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">
										End Date *
									</label>
									<input
										type="datetime-local"
										className="form-control"
										defaultValue={selectedEvent?.endDate}
										required
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">
										RSVP Link *
									</label>
									<input
										type="url"
										className="form-control"
										defaultValue={selectedEvent?.eventLink}
										placeholder="https://gdsc.community.dev/"
										required
									/>
									<div className="form-text">
										DSC platform link to RSVP
									</div>
								</div>
								<div className="mb-3">
									<label className="form-label">
										Video Link
									</label>
									<input
										type="url"
										className="form-control"
										defaultValue={selectedEvent?.videoLink}
										placeholder="eg: https://youtu.be/TuszwdwJwBY"
									/>
									<div className="form-text">
										youtube or other video recording
									</div>
								</div>
								<label className="form-label">
									Dedicated Page Link
								</label>
								<div className="input-group mb-3">
									<span
										className="input-group-text"
										id="basic-addon3">
										cursortech.club/
									</span>
									<input
										className="form-control"
										defaultValue={
											selectedEvent?.dedicatedPageLink
										}
										placeholder="my-event"
									/>
									<div className="form-text">
										For events that have a dedicated page on
										this website
									</div>
								</div>
								<input
									ref={editEventSubmitBtn}
									type="submit"
									hidden
								/>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									editEventSubmitBtn.current.click()
								}}>
								{selectedEvent ? 'Update' : 'Post'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminEventPage
