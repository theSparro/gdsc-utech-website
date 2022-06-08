// THIS FILE IS THE STARTING POINT OF OUR WEB APP
// include packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import $ from 'jquery';
import './_globals.scss';

// include the website pages and components
import ScrollToTop from './helpers/ScrollToTop'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import ProjectsPage from './pages/ProjectsPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminPage from './pages/AdminPage';

// workaround to ensure jquery is accessible by Bootstrap
window.jQuery = $;
window.$ = $;
global.jQuery = $;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ZKBfp-YmzjBtZGrxfDXJRIPZC-kToa0",
  authDomain: "gdsc-utech-website.firebaseapp.com",
  projectId: "gdsc-utech-website",
  storageBucket: "gdsc-utech-website.appspot.com",
  messagingSenderId: "900945433840",
  appId: "1:900945433840:web:6eb741f8eac6c6982cde35",
  measurementId: "G-N528B1PVEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>

    {/* Routing:
     * Routes for our app are defined here
     * eg. gdscutechja.com/ would load the homepage
     * eg. gdscutechja.com/events would load the events page
     */}
    
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar /> 
      
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/events' element={ <EventPage/> }/>
        <Route path='/projects' element={ <ProjectsPage/> }/>
        <Route path='/register' element={ <RegistrationPage/> }/>
        <Route path='/admin/console' element={ <AdminPage/> }/>
        <Route path='*' element={ <h1>404. Page not found</h1> }/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
