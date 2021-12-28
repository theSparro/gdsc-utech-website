import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import projectsImage from '../images/projects_robot.png'
import gdscLogo from '../images/gdsc_logo.png'
import PrimaryButton from '../components/PrimaryButton'

// import the CSS
import './styles/homepage.scss'
import './styles/projectspage.scss'

// functional component
function HomePage() {
    const navigate = useNavigate()

    // renders the page
    return (
        <div>
            <div className='ProjectsDivType1'>
                <div className="cover-section">
                    <div className='hero'>
                        <div className='left'>
                            <img id='hero-img' src={projectsImage} alt="" />
                        </div>

                        <div className="right">
                            <h2>Projects & Resources</h2>
                            <h4>Take a look at the cool stuff we’re doing</h4>
                            <br />
                            <PrimaryButton onClick={() => window.open("https://github.com/gdsc-utech", "_blank")} text="View Github" color="blue" />
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                </div>
            </div>
            
            <div className='ProjectsDivType2'>
                <h4>Software Development Projects</h4>
                <div class="row">
                    <div class="column">
                        <div className='column-content'>
                            <img className='resource-img' src={gdscLogo} alt="" />
                            <h5 className='resource-text' >GDSC Website</h5>
                            <div className='technologies'>
                                <div class="rounded-corner-box">Reactjs</div>
                                <div class="rounded-corner-box">Firebase</div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div className='column-content'>
                            <img className='resource-img resource-img-special1' src={projectsImage} alt="" />
                            <h5 className='resource-text' >Manager.io Automation</h5>
                            <div className='technologies'>
                                <div class="rounded-corner-box">Python</div>
                                <div class="rounded-corner-box">Manager.io</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   

            <div className='ProjectsDivType2'>
                <h4 className='project-page-header'>Resources & Tutorials</h4>
                <a href="" className='resource'>flutter google login</a><br /><br />
                <a href="" className='resource'>firebase authentication</a><br /><br />
                <a href="" className='resource'>flutter apps</a><br /><br />
            </div>        
        </div>
    )
}

export default HomePage
