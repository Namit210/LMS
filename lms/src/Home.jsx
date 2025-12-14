import bgimage from './assets/sample.jpg'
import {CourseCard} from './Card.jsx'

export default function Home()
{
const headingStyle ={
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#000000ff',
    fontFamily: 'Merryweather, serif',
}

const pageStyle = {textAlign:'center', alignItems:'center', backgroundImage:`url(${bgimage})`, backgroundSize:'cover', height:'90vh', color:'#fff', display:'flex', flexDirection:'column', justifyContent:'center', gap:'1rem',
height:'70vh',
overflow:'hidden'
}
const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontFamily:'open-sans, sans-serif',
    backgroundColor: '#d4d13fff',
    color: '#000000ff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(26, 22, 22, 0.1)',
}

const subtitleStyle = {
    color: '#4e2d2dff',
    fontFamily: 'open-sans, sans-serif',
    lineHeight: '1.8rem'
}

const innerpageStyle = {
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '700px',
    margin: '0 auto'
}

const headingStyle2 = {
    fontSize: '2.3rem',
    fontWeight: 'bold',
    color: '#000000ff',
    fontFamily: 'Merryweather, serif',
    textAlign:'center',
    marginTop:'2rem'
}

const buttonStyle2 ={fontFamily:'open sans,serif', color:' #E6A64CFF', backgroundColor:'#FFFFFFFF', borderColor:'#E6A64CFF', borderRadius:'6px', fontSize:'14px', padding:'0.4rem'}
    return(
        <div>
        <div style={pageStyle}>
            <div style={innerpageStyle}>

        <div style={headingStyle}>Discover Inner Harmony through Ancient Wisdom.</div>
        <p style={subtitleStyle}>Learnix offers a peaceful and devotional platform to explore spiritual knowledge and  practices, guiding you towards a fulfilling life grounded in timeless traditions.</p>
        <button style={buttonStyle}>Browse All Courses</button>
            </div>
        </div>

        <div style={{textAlign:'center', margin:'5rem'}}>

            <div style={headingStyle2}>
                Our Featured Courses
            </div>
            <div style={{display:'flex', justifyContent:'center', gap:'1.5rem', flexWrap:'wrap', padding:'3rem'}}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            </div>
            <button style={buttonStyle2}>View All Courses</button>
        </div>
        </div>
    )
}