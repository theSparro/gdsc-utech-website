import React from 'react'
import { collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function AdminProjectPage() {
	const firestore = getFirestore()
	const projectCollection = collection(firestore, 'projects')

	return (
		<div
			className="tab-pane fade"
			id="pills-projects"
			role="tabpanel"
			aria-labelledby="pills-projects-tab">
			Add or remove events.{' '}
			<Link to="/projects">Go to projects page</Link>
		</div>
	)
}

export default AdminProjectPage
