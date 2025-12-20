import { Link } from "react-router-dom";

export default function SideBar({active}){
     const listItemStyle ={
        listStyleType:'none',
        color:' #e6e7ebff',
        fontFamily:'Open Sans, Serif',
        lineHeight:'1.8rem',
        cursor: 'pointer',
        padding: '0.75rem 1rem',
        borderRadius: '5px',
        transition: 'all 0.2s ease'
    }

    const sidebarStyle={
        position: 'fixed',
        top: '60px',
        left: active ? '0' : '-250px',
        width:'220px',
        height: 'calc(100vh - 60px)',
        backgroundColor:'#1a1a1a',
        color:'white', 
        padding:'1.5rem 0.5rem',
        transition:'left 0.3s ease-in-out',
        boxShadow: active ? '2px 0 10px rgba(0, 0, 0, 0.3)' : 'none',
        zIndex: 999,
        overflow: 'auto'
    }
    
    return(
        <div style={sidebarStyle}>
            <ul style={{listStyleType:'none', padding:'0', margin:'0'}}>
<Link to='/dashboard' style={{textDecoration:'none'}}>
                <li style={listItemStyle} 
                    onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#4a9eff';}}
                    onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#e6e7ebff';}}>
                        
                    Dashboard
                        
                </li></Link>
                <li style={listItemStyle}
                    onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#2a2a2a'; e.currentTarget.style.color = '#4a9eff';}}
                    onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#e6e7ebff';}}>
                    My Courses
                </li>
            </ul>
        </div>
    )
}