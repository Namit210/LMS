import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Courses from './Courses.jsx'
import SideBar from './Sidebar.jsx'
import { useState } from "react"
import { InstructorDashboard, StudentDashboard } from './Dashboard.jsx'
import Login from './Login.jsx'
import ManageCourses from './ManageCourses.jsx'
import CreateCourse from './CreateCourse.jsx'
import CourseDesc from './CourseDesc.jsx'
import SignUp from './SignUp.jsx'
import CoursePlayer from './CoursePlayer.jsx'
import MyLearning from './MyLearning.jsx'
import Profile from './Profile.jsx'
import gita from './assets/gita.jpg'

function App() {

  const [showNav,setShowNav]= useState(false);
  // Role: 'student' or 'instructor' - In production, this would come from auth context
  const [userRole, setUserRole] = useState('instructor'); // Default to student

  // Centralized user profile data
  const userProfiles = {
    student: {
      name: 'Harish Yadav',
      email: 'hariyadav@gmail.com',
      phone: '+91 98765 43210',
      bio: 'Passionate learner seeking spiritual growth and inner peace through ancient wisdom.',
      location: 'Mumbai, India',
      joined: 'January 2024'
    },
    instructor: {
      name: 'Dev Narayan',
      email: 'devnarayan@learnix.com',
      phone: '+91 98765 12345',
      bio: 'Experienced spiritual instructor with 15+ years of teaching Vedic philosophy and meditation techniques.',
      location: 'Rishikesh, India',
      joined: 'March 2020',
      expertise: 'Bhagavad Gita, Meditation, Yoga Philosophy',
      students: '2,450',
      courses: '12',
      rating: '4.9'
    }
  };

  const currentUserProfile = userProfiles[userRole];

  return (
    <>
    <BrowserRouter>
    <NavBar showNav={showNav} setShowNav={setShowNav}/>
    <SideBar active={showNav} userRole={userRole}/>
    <div style={{width:'100%'}}>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/course/:courseId" element={<CoursePlayer />} />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/profile" element={<Profile userRole={userRole} userProfile={currentUserProfile} />} />
        <Route path="/about" element={<div style={{padding:'2rem'}}>About page</div>} />
        <Route path="/contact" element={<div style={{padding:'2rem'}}>Contact page</div>} />
        <Route path="/policy" element={<div style={{padding:'2rem'}}>Privacy Policy</div>} />
        <Route path="/tos" element={<div style={{padding:'2rem'}}>Terms Of Service</div>} />
        <Route path="/student-dashboard" element={<StudentDashboard userProfile={currentUserProfile} />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard userProfile={currentUserProfile} />} />
        <Route path="/manage" element={<ManageCourses />} />
        <Route path="/create" element={< CreateCourse/>} />
        <Route path="/coursedesc" element={< CourseDesc title='Introduction to the Bhagavad Gita' desc='sample description of the course' imgUrl={gita}  id='course123'/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
      
    </>
  )
}

export default App
