import PrimaryButton from '../components/PrimaryButton.jsx'
import { useEffect, useState, useRef } from 'react'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// import css styles
import './styles/adminpage.scss'

function AdminPage() {
    const emailInput = useRef()
    const passwordInput = useRef()
    let [events, setEvents] = useState()
    const auth = getAuth()
    const firestore = getFirestore()


    useEffect(() => {
        // get the events

    }, [])
    
    const login = () => {
        
    }

    const getEvents = () => {
        try {
            
        }
        catch (e) {
            alert(e.message)
        }
    }

    return (
        <div className='AdminPage'>
            <span className="restricted">FOR CORE TEAM MEMBERS ONLY</span>
            <br />
            <br />
            <h2 id='title'>Admin Console</h2>
            <p id='line'></p>
            <br />

            
            {auth.currentUser == null &&
                <div className="container">
                    <form className="login">
                        <h3>Login</h3>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input ref={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={passwordInput} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <PrimaryButton onClick={()=>{}} text='LOGIN' color='blue'/>
                    </form>
                </div>
            }

            {auth.currentUser != null || true &&
                <div className="content">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Events</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-projects" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Projects</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-team-tab" data-bs-toggle="pill" data-bs-target="#pills-team" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Team</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
                            {}
                        </div>
                        <div className="tab-pane fade" id="pills-projects" role="tabpanel" aria-labelledby="pills-projects-tab">

                        </div>
                        <div className="tab-pane fade" id="pills-team" role="tabpanel" aria-labelledby="pills-team-tab">

                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

export default AdminPage