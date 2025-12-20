import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Courses from './Courses.jsx'
import SideBar from './Sidebar.jsx'
import { useState } from "react"
import { StudentDashboard } from './Dashboard.jsx'

function App() {

  const [showNav,setShowNav]= useState(false);

  return (
    <>
    <BrowserRouter>
    <NavBar showNav={showNav} setShowNav={setShowNav}/>
    <SideBar active={showNav}/>
    <div style={{width:'100%'}}>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<div style={{padding:'2rem', textAlign:'center'}}>Login Page</div>} />
        <Route path="/about" element={<div style={{padding:'2rem'}}>About page</div>} />
        <Route path="/contact" element={<div style={{padding:'2rem'}}>Contact page</div>} />
        <Route path="/policy" element={<div style={{padding:'2rem'}}>Privacy Policy</div>} />
        <Route path="/tos" element={<div style={{padding:'2rem'}}>Terms Of Service</div>} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
