import { useState } from 'react';
import sample from './assets/sample.jpg';
import MyButton from './MyButton';
import { FaEdit, FaCamera } from 'react-icons/fa';

export default function Profile({ userRole = 'student', userProfile }) {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');
    
    // Use userProfile from props if provided, otherwise use default data
    const defaultData = userProfile || (userRole === 'instructor' 
        ? {
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
        : {
            name: 'Harish Yadav',
            email: 'hariyadav@gmail.com',
            phone: '+91 98765 43210',
            bio: 'Passionate learner seeking spiritual growth and inner peace through ancient wisdom.',
            location: 'Mumbai, India',
            joined: 'January 2024'
        });

    const [profileData, setProfileData] = useState(defaultData);

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add save logic here
        console.log('Saved profile:', profileData);
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        fontFamily: 'Open Sans, sans-serif',
        outline: 'none'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: '600',
        color: '#333',
        fontFamily: 'Merriweather, serif'
    };

    const tabStyle = (isActive) => ({
        padding: '1rem 2rem',
        border: 'none',
        backgroundColor: isActive ? 'white' : 'transparent',
        color: isActive ? '#2196f3' : '#666',
        borderBottom: isActive ? '3px solid #2196f3' : '3px solid transparent',
        cursor: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        fontWeight: isActive ? '600' : '500',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem 0' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Profile Header Card */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '2rem',
                    marginBottom: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={sample}
                            alt="Profile"
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid #2196f3'
                            }}
                        />
                        <button style={{
                            position: 'absolute',
                            bottom: '5px',
                            right: '5px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#2196f3',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}>
                            <FaCamera />
                        </button>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1 style={{
                            fontFamily: 'Merriweather, serif',
                            fontSize: '2rem',
                            margin: '0 0 0.5rem 0'
                        }}>
                            {profileData.name}
                        </h1>
                        <p style={{
                            fontFamily: 'Open Sans, sans-serif',
                            color: '#666',
                            margin: '0 0 0.5rem 0',
                            fontSize: '1rem'
                        }}>
                            {profileData.email}
                        </p>
                        <p style={{
                            fontFamily: 'Open Sans, sans-serif',
                            color: '#999',
                            margin: 0,
                            fontSize: '0.9rem'
                        }}>
                            {userRole === 'instructor' ? 'Instructor' : 'Student'} • Member since {profileData.joined}
                        </p>
                        
                        {/* Instructor Stats */}
                        {userRole === 'instructor' && (
                            <div style={{
                                display: 'flex',
                                gap: '2rem',
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px'
                            }}>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2196f3', fontFamily: 'Merriweather, serif' }}>
                                        {profileData.courses}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#666', fontFamily: 'Open Sans, sans-serif' }}>
                                        Courses
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2196f3', fontFamily: 'Merriweather, serif' }}>
                                        {profileData.students}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#666', fontFamily: 'Open Sans, sans-serif' }}>
                                        Students
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2196f3', fontFamily: 'Merriweather, serif' }}>
                                        {profileData.rating}⭐
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#666', fontFamily: 'Open Sans, sans-serif' }}>
                                        Rating
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <MyButton
                        onClick={() => setIsEditing(!isEditing)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <FaEdit /> {isEditing ? 'Cancel' : 'Edit Profile'}
                    </MyButton>
                </div>

                {/* Tabs */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '12px 12px 0 0',
                    display: 'flex',
                    borderBottom: '1px solid #ddd',
                    overflow: 'hidden'
                }}>
                    <button
                        onClick={() => setActiveTab('personal')}
                        style={tabStyle(activeTab === 'personal')}
                    >
                        Personal Information
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        style={tabStyle(activeTab === 'security')}
                    >
                        Security
                    </button>
                    <button
                        onClick={() => setActiveTab('preferences')}
                        style={tabStyle(activeTab === 'preferences')}
                    >
                        Preferences
                    </button>
                </div>

                {/* Tab Content */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '0 0 12px 12px',
                    padding: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    {activeTab === 'personal' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                ) : (
                                    <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                                        {profileData.name}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label style={labelStyle}>Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                ) : (
                                    <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                                        {profileData.email}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label style={labelStyle}>Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={profileData.phone}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                ) : (
                                    <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                                        {profileData.phone}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label style={labelStyle}>Location</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="location"
                                        value={profileData.location}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                ) : (
                                    <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                                        {profileData.location}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label style={labelStyle}>Bio</label>
                                {isEditing ? (
                                    <textarea
                                        name="bio"
                                        value={profileData.bio}
                                        onChange={handleChange}
                                        rows="4"
                                        style={inputStyle}
                                    />
                                ) : (
                                    <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}>
                                        {profileData.bio}
                                    </div>
                                )}
                            </div>

                            {/* Instructor-specific fields */}
                            {userRole === 'instructor' && (
                                <div>
                                    <label style={labelStyle}>Areas of Expertise</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="expertise"
                                            value={profileData.expertise}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            placeholder="e.g., Bhagavad Gita, Meditation, Yoga"
                                        />
                                    ) : (
                                        <div style={{ padding: '0.75rem 0', fontSize: '1rem', fontFamily: 'Open Sans, sans-serif' }}>
                                            {profileData.expertise}
                                        </div>
                                    )}
                                </div>
                            )}

                            {isEditing && (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <MyButton onClick={handleSave} color="#4caf50" style={{ flex: 1, padding: '0.75rem' }}>
                                        Save Changes
                                    </MyButton>
                                    <MyButton onClick={() => setIsEditing(false)} style={{ flex: 1, padding: '0.75rem', backgroundColor: '#f44336' }}>
                                        Cancel
                                    </MyButton>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>Current Password</label>
                                <input type="password" placeholder="Enter current password" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>New Password</label>
                                <input type="password" placeholder="Enter new password" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Confirm New Password</label>
                                <input type="password" placeholder="Confirm new password" style={inputStyle} />
                            </div>
                            <MyButton color="#2196f3" style={{ padding: '0.75rem', marginTop: '1rem' }}>
                                Update Password
                            </MyButton>
                        </div>
                    )}

                    {activeTab === 'preferences' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={labelStyle}>Email Notifications</label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" defaultChecked />
                                        <span style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            {userRole === 'instructor' ? 'Student enrollments and questions' : 'Course updates and announcements'}
                                        </span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" defaultChecked />
                                        <span style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            {userRole === 'instructor' ? 'Course performance analytics' : 'New course recommendations'}
                                        </span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="checkbox" />
                                        <span style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                            {userRole === 'instructor' ? 'Platform updates for instructors' : 'Promotional emails'}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>Language Preference</label>
                                <select style={inputStyle}>
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Sanskrit</option>
                                </select>
                            </div>
                            {userRole === 'instructor' && (
                                <div>
                                    <label style={labelStyle}>Profile Visibility</label>
                                    <select style={inputStyle}>
                                        <option>Public - Visible to all students</option>
                                        <option>Private - Only enrolled students</option>
                                        <option>Hidden - Not searchable</option>
                                    </select>
                                </div>
                            )}
                            <MyButton color="#2196f3" style={{ padding: '0.75rem', marginTop: '1rem' }}>
                                Save Preferences
                            </MyButton>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
