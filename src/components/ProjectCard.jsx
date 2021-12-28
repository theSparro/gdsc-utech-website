import React from 'react'

import projectsImage from '../images/projects_robot.png'
import './styles/projectcard.scss'

function ProjectCard({image, title, techStack}) {
    return (
        <div className='ProjectCard'>

            {image != null ?
                <img src={image} alt="" />
                :
                <img src={projectsImage} alt="" />
            }
            <h3>{ title }</h3>
            
            <div className='techlist'>
                {techStack.map((item, key) =>
                    <span key={key}>{ item }</span>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
