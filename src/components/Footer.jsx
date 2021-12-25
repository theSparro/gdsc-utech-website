import React from 'react'
import './styles/footer.scss'
import logo from '../images/gdsc_logo.png'

function Footer() {
    return (
        <div className='Footer'>
            <img src= {logo} alt="" width= '40px'/>
            <p>Google Developer Student Clubs</p>
            <a href="https://www.instagram.com/gdsc.utechja/" target='_blank'>Instagram</a>
            <a href="https://www.youtube.com/channel/UC0cRuVUPTC15W3GXAZ79V2Q" target='_blank'>YouTube</a>
            <a href="https://github.com/gdsc-utech" target='_blank'>GitHub</a>
            <a href="https://gdsc.community.dev/university-of-technology/" target='_blank'>Community</a>
        </div>
    )
}

export default Footer
