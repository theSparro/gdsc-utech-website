import React from 'react'
import downArrow from '../images/down_arrow.png'

// import the CSS
import './styles/registrationpage.scss'

// functional component
function RegistrationPage() {

    // renders the page
    return (
       <div className="RegistrationPage">
           {/* Heading of the page */}
           <h1>How to Register</h1>
            <div className="sub">
                To join the club, Please complete the following steps
            </div>
            <div className="subHead">
                 <h2>Join Community Platform</h2>
            </div>
            <div className="p">
                Visit the link below and click the "Join" to become a member and be notified of our events.
            </div>
            <div className='link'><a href="#">Click Here</a></div>
            <div className='arrow'><img src={downArrow} id='down-arr' alt="" width={80}/></div>
            <div className="subHead2">
                <h2>Fill Out Our Survey</h2>
            </div>
            <div className="p">
                Complete the form below. You may join our Whatsapp group with the link provided on submission
            </div>
            <div className="link"><a href="#">Fill Out Form</a></div>
            <div className='arrow'><img src={downArrow} id='down-arr' alt="" width={80}/></div>
            <div className="subHead2">
                <h2>Welcome To The Party</h2>
            </div>
       </div>
    )
}

export default RegistrationPage