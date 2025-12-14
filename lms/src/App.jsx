import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/login" element={<div>Admin Page</div>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
