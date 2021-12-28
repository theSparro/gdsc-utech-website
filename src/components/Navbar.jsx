import React from 'react'
import { NavLink } from 'react-router-dom'
import gdscLogo from "../images/gdsc_logo.png"
import './styles/navbar.scss'

function Navbar() {
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink
                        to="/"
                        
                        className="navbar-brand"                       
                        >
                        <img className="gdsc-logo" src={gdscLogo} alt="logo" width = "50"/>    
                        <span> GDSC UTECH</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto w-100 justify-content-end" >
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    
                                    className={({isActive}) =>
                                        "nav-link" + (!isActive ? " unselected" : " active")
                                    }                        
                                    >   
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="events"
                                    
                                    className={({isActive}) =>
                                        "nav-link" + (!isActive ? " unselected" : " active")
                                    }                        
                                    >
                                    Events
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="projects"
                                    
                                    className={({isActive}) =>
                                        "nav-link" + (!isActive ? " unselected" : " active")
                                    }                        
                                    >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="register"
                                    
                                    className={({isActive}) =>
                                        "nav-link" + (!isActive ? " unselected" : " active")
                                    }                        
                                    >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
