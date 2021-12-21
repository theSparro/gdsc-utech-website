import React from 'react'
import heroImage from '../images/team_hero.png'
import gdscLogo from '../images/gdsc_logo.png'
import downArrow from '../images/down_arrow.png'
// import the CSS
import './styles/homepage.scss'

// functional component
function HomePage() {

    // renders the page
    return (
        <div className='HomePage'>

            <div className="cover-section">
                <div className='hero'>
                    <div className='left'>
                        <img id='hero-img' src={heroImage} alt="" />
                    </div>

                    <div className="right">
                        <img id='gdsc-logo' src={gdscLogo} alt="" />

                        <h2>Google Developer Student Club</h2>
                        <h4>University of Technology, Jamaica</h4>
                        <br />
                        {/** to be replaced with PrimaryButton component */}
                        <button>Register</button>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <img src={downArrow} id='down-arr' alt="" />
            </div>
            
        </div>
    )
}

export default HomePage
