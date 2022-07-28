import PrimaryButton from '../../components/PrimaryButton.jsx'
import { useEffect, useState, useRef } from 'react'
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth'

// import css styles
import '../styles/adminpage.scss'
import AdminEventPage from './AdminEventPage.jsx'
import AdminProjectPage from './AdminProjectPage.jsx'
import AdminTeamPage from './AdminTeamPage'

function AdminPage() {
	const emailInput = useRef()
	const passwordInput = useRef()
	let [loggedIn, setLoggedIn] = useState(false)

	const auth = getAuth()

	useEffect(() => {
		let unsubscribe = onAuthStateChanged(auth, (user) => {
			// logged in
			if (user != null) setLoggedIn(true)
			// not logged in
			else setLoggedIn(false)
		})

		return () => {
			unsubscribe()
		}
	}, [auth])

	const login = async (e) => {
		e.preventDefault()

		try {
			await signInWithEmailAndPassword(
				auth,
				emailInput.current.value,
				passwordInput.current.value
			)
		} catch (err) {
			alert(err)
		}
	}

	return (
		<div className="AdminPage">
			<span className="restricted">FOR CORE TEAM MEMBERS ONLY</span>
			{loggedIn && (
				<button
					style={{ float: 'right' }}
					onClick={() => signOut(auth)}>
					logout
				</button>
			)}

			<br />
			<br />

			<h2 id="title">Admin Console</h2>
			<p id="line"></p>
			<br />

			{/* A conditional statement. If the user is not logged in, then the login form will be displayed. */}
			{!loggedIn && (
				<div className="container">
					<form className="login" onSubmit={(ev) => login(ev)}>
						<h3>Login</h3>

						<div className="mb-3">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label">
								Username
							</label>
							<input
								required
								ref={emailInput}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label">
								Password
							</label>
							<input
								required
								ref={passwordInput}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<PrimaryButton text="LOGIN" color="blue" />
					</form>
				</div>
			)}

			{loggedIn && (
				<div className="content">
					<ul
						className="nav nav-tabs mb-3"
						id="pills-tab"
						role="tablist">
						<li className="nav-item" role="presentation">
							<button
								className="nav-link active"
								id="pills-events-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-events"
								type="button"
								role="tab"
								aria-controls="pills-home"
								aria-selected="true">
								Manage Events
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button
								className="nav-link"
								id="pills-projects-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-projects"
								type="button"
								role="tab"
								aria-controls="pills-profile"
								aria-selected="false">
								Manage Projects
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button
								className="nav-link"
								id="pills-team-tab"
								data-bs-toggle="pill"
								data-bs-target="#pills-team"
								type="button"
								role="tab"
								aria-controls="pills-contact"
								aria-selected="false">
								Manage Team
							</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<AdminEventPage />
						<AdminProjectPage />
						<AdminTeamPage />
					</div>
				</div>
			)}
		</div>
	)
}

export default AdminPage
