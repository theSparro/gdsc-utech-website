import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import projectsImage from '../images/projects_img.png'
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
            <div className='HomePage'>
                <div className="cover-section">
                    <div className='hero'>
                        <div className='left'>
                            <img id='hero-img' src={projectsImage} alt="" />
                        </div>

                        <div className="right">
                            <h2 className="projects-header-text-blue">Projects & Resources</h2>
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
            
            <div className='ProjectPage'>
                <section className='previous'>
                    <h4 className='project-page-header'>Software Development Projects</h4>
                    <div class="row">
                        <div class="column">
                            <div className='column-content'>
                                <img className='resource-img' src={gdscLogo} alt="" />
                                <h5 className='resource-text' >GDSC Website</h5>
                                <div className='circle-center'>
                                    <div class="circle">Reactjs</div>
                                    <div class="circle">Firebase</div>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div className='column-content'>
                                <img className='resource-img' src={projectsImage} alt="" />
                                <h5 className='resource-text' >Manager.io Automation</h5>
                                <div className='circle-center'>
                                    <div class="circle">Python</div>
                                    <div class="circle">Python</div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="column">

                        </div> */}
                    </div>
                </section>
            </div>   

            <div className='ProjectPage'>
                <section className='previous'>
                    <h4 className='project-page-header'>Resources & Tutorials</h4>
                    <a href="" className='resource'>flutter google login</a><br /><br />
                    <a href="" className='resource'>firebase authentication</a><br /><br />
                    <a href="" className='resource'>flutter apps</a><br /><br />
                </section>
            </div>        
        </div>
    )
}

//  <div className='project-box'>
//                         <div className='left'>
//                         <ProjectCard title="Intro to Machine Learning" />
                    
//                     </div>
//                     </div>
//                     <h4 className='project-page-2-header'>Software Development Projects</h4>
//                     <ProjectCard title="Intro To Machine Learning" link="https://youtu.be/OYhFIx8EYpM" />
//                     <ProjectCard title="Intro To GitHub" link="https://youtu.be/TuszwdwJwBY" />
//                 </div >

//     <div className='previous'>
//         <h3 className='section-head'>Resources & Tutorials</h3>

//         <a href="">flutter google login</a><br />
//         <a href="">firebase authentication</a><br />
//         <a href="">flutter apps</a><br />
//     </div>
//             </div >

export default HomePage
