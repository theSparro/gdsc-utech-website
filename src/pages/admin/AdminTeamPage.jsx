import React from 'react'
import { getFirestore, collection } from 'firebase/firestore'

function AdminTeamPage() {
	const firestore = getFirestore()
	const teamCollection = collection(firestore, 'core_teams')

	return (
		<div
			className="tab-pane fade"
			id="pills-team"
			role="tabpanel"
			aria-labelledby="pills-team-tab"></div>
	)
}

export default AdminTeamPage
