import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroImage from '../images/team_hero.png'
import gdscLogo from '../images/gdsc_logo.png'
import downArrow from '../images/down_arrow.png'
import PrimaryButton from '../components/PrimaryButton'
// import the CSS
import './styles/homepage.scss'

// functional component
function HomePage() {
	const navigate = useNavigate()

	// renders the page
	return (
		<div className="HomePage">
			<div className="cover-section">
				<div className="hero">
					<div className="left">
						<img id="hero-img" src={heroImage} alt="" />
					</div>

					<div className="right">
						<img id="gdsc-logo" src={gdscLogo} alt="" />

						<h2>Google Developer Student Club</h2>
						<h4>University of Technology, Jamaica</h4>
						<br />
						<PrimaryButton
							onClick={() => navigate('/register')}
							text="Register"
							color="blue"
						/>
					</div>
				</div>

				<br />
				<br />
				<br />

				<a href="#about">
					<img src={downArrow} id="down-arr" alt="" />
				</a>
			</div>

			<div className="about" id="about">
				<h2 id="title">About Us</h2>

				<br />
				<iframe
					src="https://www.youtube.com/embed/sYRGuDwVu-4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>

				<br />
				<br />

				<p id="text">
					At GDSC UTech we aim to prepare students for the workforce
					in a practical and <br />
					engaging manner. With the guidance of Google advisors and
					experts, we aim to have <br />
					our student members bridge the gap between theory and
					practice and apply what <br />
					they learn as soon as possible.
					<br />
					<br />
					We are bound by the value of creativity, diversity of
					character and thought, <br />
					and the drive to make a positive impact.
				</p>
			</div>

			<div className="cta">
				<PrimaryButton
					onClick={() => navigate('/register')}
					text="Join The Club"
					color="red"
				/>
				<br /> <br />
				<Link id="link" to={'/events'}>
					View Our Events
				</Link>
			</div>

			<div className="more">
				<h2 id="title">
					Learn about <br /> Developer Student Clubs
				</h2>

				<iframe
					width="400"
					height="315"
					src="https://www.youtube.com/embed/earTjC0iSjg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
			</div>

			<br />
			<br />
			<br />
		</div>
	)
}

export default HomePage
