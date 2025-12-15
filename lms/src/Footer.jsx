import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer(){

    const listItemStyle ={
        listStyleType:'none',
        color:' #565D6DFF',
        fontFamily:'Open Sans, Serif',
        lineHeight:'1.8rem'
    }

    return(
        <div style={{display:'flex', justifyContent:'space-around', padding:'2rem', backgroundColor:'#f2f2f2', marginTop:'2rem'}}>
            <div>Learnix Logo</div>
            <div>
                <h3 style={{fontFamily:'Merriweather'}}>Quick Links</h3>
                <ul style={{padding:'0'}}>
                    <li style={listItemStyle}><Link to='/' style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
                    <li style={listItemStyle}><Link to='/courses' style={{textDecoration:'none', color:'inherit'}}>Courses</Link></li>
                    <li style={listItemStyle}><Link to='/about' style={{textDecoration:'none', color:'inherit'}}>About Us</Link></li>
                    <li style={listItemStyle}><Link to='/contact' style={{textDecoration:'none', color:'inherit'}}>Contact</Link></li>
                </ul>
            </div>
            <div style={{textAlign:'center'}}>
                <h3 style={{fontFamily:'Merriweather,serif'}}>Connect With Us</h3>
                <FaFacebook style={{marginRight:'1rem', color:'#3b5998', cursor:'pointer'}} size={24}/>
                <FaTwitter style={{marginRight:'1rem', color:'#00acee', cursor:'pointer'}} size={24}/>
                <FaInstagram style={{color:'#C13584', cursor:'pointer'}} size={24}/>
                </div>
            <div>
            <h3>Legal</h3>
            <ul style={{padding:'0'}}>
                    <li style={listItemStyle}><Link to='/policy' style={{textDecoration:'none', color:'inherit'}}>Privacy Policy</Link></li>
                    <li style={listItemStyle}><Link to='/tos' style={{textDecoration:'none', color:'inherit'}}>Terms Of Service</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}