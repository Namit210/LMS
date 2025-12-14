import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1px', color:'#73808dff', boxShadow:'0 0 10px rgba(0,0,0,0.1)'}}>
            <div style={{margin:'1rem'}}>Logo</div>
            <ul style={{display:'flex', listStyleType:'none', gap:'1rem', margin:'0'}}>
                <li><Link to="/" style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
                <li><Link to="/courses" style={{textDecoration:'none', color:'inherit'}}>Courses</Link></li>
            </ul>
            <div style={{margin:'1rem'}}><Link to="/login" style={{textDecoration:'none', color:'inherit'}}>Login</Link></div>
        </div>
    )
}