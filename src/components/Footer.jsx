import React from 'react'
import './styles/footer.scss'
import logo from '../images/gdsc_logo.png'

function Footer() {
	return (
		<div className="Footer">
			<img src={logo} alt="" width="40px" />
			<p>Google Developer Student Clubs</p>
			<a
				href="https://discord.gg/PmpsEKJn3j"
				rel="noreferrer"
				target="_blank">
				Discord
			</a>
			<a
				href="https://www.instagram.com/gdsc.utechja/"
				rel="noreferrer"
				target="_blank">
				Instagram
			</a>
			<a
				href="https://www.youtube.com/channel/UC0cRuVUPTC15W3GXAZ79V2Q"
				rel="noreferrer"
				target="_blank">
				YouTube
			</a>
			<a
				href="https://github.com/gdsc-utech"
				rel="noreferrer"
				target="_blank">
				GitHub
			</a>
			<a
				href="https://gdsc.community.dev/university-of-technology/"
				rel="noreferrer"
				target="_blank">
				Community
			</a>
		</div>
	)
}

export default Footer
