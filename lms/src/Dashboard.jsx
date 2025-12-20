import { CertificateCard, PersonalCourseCard, ProfileCard } from "./Card";
import gita from './assets/gita.jpg'
import sample from './assets/sample.jpg'
import certificate from './assets/certificate.webp'

export function StudentDashboard() {
    const profileStyle={
        border:'1px solid #ccc',
        borderRadius:'10px',
        padding:'1rem',
        minWidth:'250px',
        maxWidth:'20%',
        height:'400px',
        boxShadow:'0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center' 

    }

    const coursesStyle={
        flex: '1',
        minWidth: '0'
    }
    
    return (
        <div style={{ padding: '1rem 0rem', display:'flex', gap:'2rem'}}>
            <div style={{flexShrink: 0}}>
            <div style={profileStyle}>
                <h2>
                    My Profile
                    </h2>
                    <ProfileCard name="Harish Yadav" email="hariyadav@gmail.com" imageUrl={sample}/>
                </div>
            </div>
            <div style={coursesStyle}>  <h2>
                    Your Courses
                    </h2>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application'/>
                    </div>
                    <div>
                        <h2>
                    Your Certificates
                    </h2>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'1rem'}}>
                    <CertificateCard certificateUrl={certificate}/>
                    <CertificateCard certificateUrl={certificate}/>
                   
                    </div>

                    </div>
                    </div>
        </div>
    );
}

export function InstructorDashboard() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Instructor Dashboard</h1>
            <p>Welcome to your dashboard! Here you can create and manage your courses.</p>
        </div>
    );
}