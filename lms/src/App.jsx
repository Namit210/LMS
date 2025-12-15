import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Courses from './Courses.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/about" element={<div>About page</div>} />
        <Route path="/contact" element={<div>Contact page</div>} />
        <Route path="/policy" element={<div>Privacy Policy</div>} />
        <Route path="/tos" element={<div>Terms Of Service</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
