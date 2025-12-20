import { Link } from "react-router-dom"

export default function NavBar({showNav, setShowNav}){

    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.1rem', color:'#73808dff', boxShadow:'0 0 10px rgba(0,0,0,0.1)', backgroundColor:'white', position:'sticky', top:'0', zIndex:1000}}>
            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <button onClick={()=>setShowNav(!showNav)} style={{background:'none', border:'none', cursor:'pointer', fontSize:'1.5rem', color:'#73808dff'}}>
                    {showNav ? '✕' : '☰'}
                </button>
                <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Learnix</span>
            </div>
            <ul style={{display:'flex', listStyleType:'none', gap:'1rem', margin:'0'}}>
                <li><Link to="/" style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
                <li><Link to="/courses" style={{textDecoration:'none', color:'inherit'}}>Courses</Link></li>
            </ul>
            <div style={{margin:'1rem'}}><Link to="/login" style={{textDecoration:'none', color:'inherit'}}>Login</Link></div>
        </div>
    )
}