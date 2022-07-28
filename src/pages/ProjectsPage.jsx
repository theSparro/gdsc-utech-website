import React from 'react'
import projectsImage from '../images/projects_robot.png'
import gdscLogo from '../images/gdsc_logo.png'
import PrimaryButton from '../components/PrimaryButton'
import ProjectCard from '../components/ProjectCard'

// import the CSS
import './styles/projectspage.scss'

// functional component
function ProjectsPage() {
	// renders the page
	return (
		<div className="ProjectsPage">
			<div className="cover-section">
				<div className="hero">
					<div className="left">
						<img id="hero-img" src={projectsImage} alt="" />
					</div>

					<div className="right">
						<h2>Projects &amp; Resources</h2>
						<h4>Take a look at the cool stuff we're doing</h4>
						<br />
						<PrimaryButton
							onClick={() =>
								window.open(
									'https://github.com/gdsc-utech',
									'_blank'
								)
							}
							text="View Github"
							color="blue"
						/>
					</div>
				</div>
			</div>

			<div className="projects">
				<h4 id="title">Software Development Projects</h4>

				<div className="list">
					<ProjectCard
						image={gdscLogo}
						title="DSC Website"
						techStack={['ReactJs', 'Firebase']}
					/>
					<ProjectCard
						title="Manager.io Automation"
						techStack={['Python', 'Manager.io']}
					/>

					<i className="bi bi-arrow-right-circle-fill"></i>
				</div>
			</div>

			<div className="resources">
				<h4 id="title">Resources &amp; Tutorials</h4>

				<a
					target="_blank"
					href="https://github.com/gdsc-utech/Flutter-login-google">
					flutter google login
				</a>
				<br />
				<a
					target="_blank"
					href="https://github.com/gdsc-utech/firebase-auth-demo">
					firebase authentication
				</a>
				<br />
				<a
					target="_blank"
					href="https://www.youtube.com/watch?v=JgsZDxuQLzY&t=25s">
					flutter apps
				</a>
				<br />
			</div>
		</div>
	)
}

export default ProjectsPage
