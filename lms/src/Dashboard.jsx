import { CertificateCard, LiveClass, PersonalCourseCard, ProfileCard, SimpleCard } from "./Card";
import gita from './assets/gita.jpg'
import sample from './assets/sample.jpg'
import certificate from './assets/certificate.webp'
import { BsCameraVideo } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import liveClasses from './data/liveclass.json';

export function StudentDashboard({ userProfile = { name: 'Harish Yadav', email: 'hariyadav@gmail.com' } }) {
    const profileStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        minWidth: '250px',
        maxWidth: '20%',
        height: '400px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center'

    }

    const coursesStyle = {
        flex: '1',
        minWidth: '0'
    }

    return (
        <div style={{ padding: '1rem 0rem', display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0 }}>
                <div style={profileStyle}>
                    <h2>
                        My Profile
                    </h2>
                    <ProfileCard name={userProfile.name} email={userProfile.email} imageUrl={sample} />
                </div>
            </div>
            <div style={coursesStyle}>  <h2>
                Your Courses
            </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                    <PersonalCourseCard imageUrl={gita} title={'Introduction to Bhagavad Gita'} progress={30} subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' />
                </div>
                <div>
                    <h2>
                        Your Certificates
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <CertificateCard certificateUrl={certificate} />
                        <CertificateCard certificateUrl={certificate} />

                    </div>

                </div>
            </div>
        </div>
    );
}

export function InstructorDashboard({ userProfile = { name: 'Dev Narayan', email: 'devnarayan@learnix.com' } }) {
    const profileStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        minWidth: '250px',
        maxWidth: '20%',
        height: '400px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'center'

    }


    return (
        <div style={{ padding: '1rem 0rem', display: 'flex', gap: '2rem' }}>
            <div style={{ flexShrink: 0 }}>
                <div style={profileStyle}>
                    <h2>
                        My Profile
                    </h2>
                    <ProfileCard name={userProfile.name} email={userProfile.email} imageUrl={sample} />
                </div>
            </div>
            <div >
                <div >
                <h2>
                    Instructor's Dashboard
                </h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '0.9rem' }}>Total Courses</div>
                        <h3 style={{ fontSize: '27px', margin: '0.2rem 0', padding: '0' }}>42</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Currently active and published courses</p>
                    </SimpleCard>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '0.9rem' }}>Students Enrolled</div>
                        <h3 style={{ fontSize: '27px', margin: '0.2rem 0', padding: '0' }}>1,280</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Total Learners across all courses</p>
                    </SimpleCard>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '0.9rem' }}>Upcoming Live Sessions</div>
                        <h3 style={{ fontSize: '27px', margin: '0.2rem 0', padding: '0' }}>7</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Scheduled classes in the next 7 days</p>
                    </SimpleCard>
                </div></div>

                <div style={{margin:'2rem 0'}}>
                    <h2>Upcoming Live Class</h2>
                    <div style={{maxHeight:'50vh', overflowY:'auto', border:'1px solid #ddd', borderRadius:'8px', padding:'1rem', backgroundColor:'white'}}>
                        {liveClasses.map((liveClass, index) => (
                            <div key={index} style={{marginBottom:'1rem', borderBottom: index < liveClasses.length - 1 ? '1px solid #eee' : 'none', paddingBottom:'1rem'}}>
                                <LiveClass head={liveClass.title} date={liveClass.date} time={liveClass.time} />
                            </div>
                        ))}
                    </div>
                </div>

<div style={{margin:'2rem 0'}}>
                 <h2>
                    Quick Actions
                </h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '2rem',color:'#a2ad05ff'}}>+</div>
                        <h3 style={{ fontSize: '1rem', margin: '0.2rem 0', padding: '0' }}>Create New Course</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Start building a new spiritual learning journey</p>
                    </SimpleCard>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '2rem',color:'#a2ad05ff'}}>
                            <BsCameraVideo />

                        </div>
                        <h3 style={{ fontSize: '1rem', margin: '0.2rem 0', padding: '0' }}>Schedule a Session</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Organize live class and interactive events</p>
                    </SimpleCard>
                    <SimpleCard >
                        <div style={{ fontFamily: 'Merriweather, sans-serif', margin: '0 0 0.3rem 0', padding: '0', fontSize: '2rem',color:'#a2ad05ff'}}>
                            <FiBookOpen />

                        </div>
                        <h3 style={{ fontSize: '1rem', margin: '0.2rem 0', padding: '0' }}>View Course Reports</h3>
                        <p style={{ margin: '0', padding: '0', fontSize: '0.9rem' }}>Analyze student progress and course engagement</p>
                    </SimpleCard>
                    
                </div>
</div>

            </div>

        </div>


    );
}