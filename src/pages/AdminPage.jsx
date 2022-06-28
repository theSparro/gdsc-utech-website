import PrimaryButton from '../components/PrimaryButton.jsx'
import { useEffect, useState, useRef } from 'react'
import {getFirestore, collection, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

// import css styles
import './styles/adminpage.scss'
import { Link } from 'react-router-dom'

function AdminPage() {
    const emailInput = useRef()
    const passwordInput = useRef()
    let [loggedIn, setLoggedIn] = useState(false)
    let [events, setEvents] = useState([])

    const auth = getAuth()
    const firestore = getFirestore()

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (user) => {
            // logged in
            if (user != null)
                setLoggedIn(true)
            // not logged in
            else
                setLoggedIn(false)
        })

        // get the events

        return () => { unsubscribe() }
    }, [])
    
    const login = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, emailInput.current.value, passwordInput.current.value)
        }
        catch (err) {
            alert(err)
        }
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
            {loggedIn && <button style={{ float: 'right' }} onClick={() => signOut(auth)}>logout</button>}
        
            <br />
            <br />

            <h2 id='title'>Admin Console</h2>
            <p id='line'></p>
            <br />
            
            {/* A conditional statement. If the user is not logged in, then the login form will be displayed. */}
            {!loggedIn &&
                <div className="container">
                    <form className="login" onSubmit={(ev) => login(ev)}>
                        <h3>Login</h3>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input required ref={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input required ref={passwordInput} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <PrimaryButton text='LOGIN' color='blue'/>
                    </form>
                </div>
            }

            {(loggedIn || true) &&
                <div className="content">
                    <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Manage Events</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-projects" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Manage Projects</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-team-tab" data-bs-toggle="pill" data-bs-target="#pills-team" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Manage Team</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
                            Add or remove events. <Link to='/events'>Go to events page</Link>
                            <p style={{float: 'right'}}>
                                <PrimaryButton onClick={() => { }} text={<i className='bi bi-plus'/>} color='blue' />
                            </p>

                            <br /><br />

                            <div className="event-tile">
                                <h4 className="title">Intro to flutter</h4>
                                <p className="date">2/4/2022 - 4/4/2022</p>
                                <p className="time">3:00 PM</p>

                                <button className='edit-btn'>Edit</button>
                                <button className='del-btn'>Delete</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-projects" role="tabpanel" aria-labelledby="pills-projects-tab">
                            Add or remove events. <Link to='/projects'>Go to projects page</Link>
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