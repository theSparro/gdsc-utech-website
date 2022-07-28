import React from 'react'
import downArrow from '../images/down_arrow.png'
import emoji from '../images/emoji.png'

// import the CSS
import './styles/registrationpage.scss'

// functional component
function RegistrationPage() {
	// renders the page
	return (
		<div className="RegistrationPage">
			<h2>How to Register</h2>
			<div className="sub">
				To join the club, Please complete the following steps
			</div>

			<div className="subHead">
				<h3>
					<i id="dot" className="bi bi-circle-fill"></i>
					Join Community Platform
				</h3>
				<p id="text">
					Visit the link below and click the "Join" to become a member
					and be notified of our events.
				</p>

				<a
					target="_blank"
					rel="noopener"
					href="https://gdsc.community.dev/university-of-technology/">
					Click Here
				</a>

				<br />

				<img src={downArrow} id="down-arr" alt="" width={50} />
			</div>

			<div className="subHead">
				<h3>
					<i id="dot" className="bi bi-circle-fill"></i>
					Fill Out Our Survey
				</h3>
				<p id="text">
					Complete the form below. You may join our Whatsapp group
					with the link provided on submission
				</p>
				<a
					target="_blank"
					rel="noopener"
					href="https://docs.google.com/forms/d/e/1FAIpQLSdukiMgRDsVNczSyKYMNEf78uc3821sDreEzkTDfoxirf5GcA/viewform">
					Fill Out Form
				</a>

				<br />

				<img src={downArrow} id="down-arr" alt="" width={50} />
			</div>

			<br />

			<div className="subHead">
				<h3>
					<i id="dot" className="bi bi-circle-fill"></i>
					Welcome To The Party <img id="emoji" src={emoji} alt="" />
				</h3>
			</div>

			<br />
			<br />
		</div>
	)
}

export default RegistrationPage
