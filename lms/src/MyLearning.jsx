import { PersonalCourseCard } from './Card';
import gita from './assets/gita.jpg';
import { useState } from 'react';

export default function MyLearning() {
    const [filter, setFilter] = useState('all');

    // Mock data - replace with real data from API
    const enrolledCourses = [
        { id: 1, imageUrl: gita, title: 'Introduction to Bhagavad Gita', progress: 65, subtitle: 'Explore the timeless wisdom of the Bhagavad Gita', category: 'in-progress' },
        { id: 2, imageUrl: gita, title: 'Meditation for Inner Peace', progress: 30, subtitle: 'Learn meditation techniques for peace', category: 'in-progress' },
        { id: 3, imageUrl: gita, title: 'The Art of Kirtan', progress: 100, subtitle: 'Master the art of devotional chanting', category: 'completed' },
        { id: 4, imageUrl: gita, title: 'Vedic Philosophy', progress: 10, subtitle: 'Introduction to ancient wisdom', category: 'in-progress' },
        { id: 5, imageUrl: gita, title: 'Yoga Fundamentals', progress: 100, subtitle: 'Complete yoga basics course', category: 'completed' },
    ];

    const filteredCourses = filter === 'all' 
        ? enrolledCourses 
        : enrolledCourses.filter(course => course.category === filter);

    const stats = {
        total: enrolledCourses.length,
        inProgress: enrolledCourses.filter(c => c.category === 'in-progress').length,
        completed: enrolledCourses.filter(c => c.category === 'completed').length,
    };

    const filterButtonStyle = (isActive) => ({
        padding: '0.6rem 1.5rem',
        border: isActive ? '2px solid #2196f3' : '1px solid #ddd',
        backgroundColor: isActive ? '#e3f2fd' : 'white',
        color: isActive ? '#1976d2' : '#666',
        borderRadius: '25px',
        cursor: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '0.95rem',
        fontWeight: isActive ? '600' : '500',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={{ padding: '2rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    fontFamily: 'Merriweather, serif',
                    fontSize: '2.5rem',
                    margin: '0 0 0.5rem 0'
                }}>
                    My Learning
                </h1>
                <p style={{
                    fontFamily: 'Open Sans, sans-serif',
                    color: '#666',
                    fontSize: '1.1rem',
                    margin: 0
                }}>
                    Continue your spiritual journey
                </p>
            </div>

            {/* Stats Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
            }}>
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #e3f2fd'
                }}>
                    <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '0.5rem',
                        fontFamily: 'Open Sans, sans-serif'
                    }}>
                        Total Enrolled
                    </div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#2196f3',
                        fontFamily: 'Merriweather, serif'
                    }}>
                        {stats.total}
                    </div>
                </div>

                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #fff3e0'
                }}>
                    <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '0.5rem',
                        fontFamily: 'Open Sans, sans-serif'
                    }}>
                        In Progress
                    </div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#ff9800',
                        fontFamily: 'Merriweather, serif'
                    }}>
                        {stats.inProgress}
                    </div>
                </div>

                <div style={{
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #e8f5e9'
                }}>
                    <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '0.5rem',
                        fontFamily: 'Open Sans, sans-serif'
                    }}>
                        Completed
                    </div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4caf50',
                        fontFamily: 'Merriweather, serif'
                    }}>
                        {stats.completed}
                    </div>
                </div>
            </div>

            {/* Filter Buttons */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <span style={{
                    fontFamily: 'Open Sans, sans-serif',
                    color: '#666',
                    fontWeight: '500'
                }}>
                    Filter by:
                </span>
                <button
                    onClick={() => setFilter('all')}
                    style={filterButtonStyle(filter === 'all')}
                    onMouseEnter={(e) => {
                        if (filter !== 'all') e.target.style.backgroundColor = '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                        if (filter !== 'all') e.target.style.backgroundColor = 'white';
                    }}
                >
                    All Courses ({stats.total})
                </button>
                <button
                    onClick={() => setFilter('in-progress')}
                    style={filterButtonStyle(filter === 'in-progress')}
                    onMouseEnter={(e) => {
                        if (filter !== 'in-progress') e.target.style.backgroundColor = '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                        if (filter !== 'in-progress') e.target.style.backgroundColor = 'white';
                    }}
                >
                    In Progress ({stats.inProgress})
                </button>
                <button
                    onClick={() => setFilter('completed')}
                    style={filterButtonStyle(filter === 'completed')}
                    onMouseEnter={(e) => {
                        if (filter !== 'completed') e.target.style.backgroundColor = '#f5f5f5';
                    }}
                    onMouseLeave={(e) => {
                        if (filter !== 'completed') e.target.style.backgroundColor = 'white';
                    }}
                >
                    Completed ({stats.completed})
                </button>
            </div>

            {/* Course Cards */}
            {filteredCourses.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredCourses.map((course) => (
                        <PersonalCourseCard
                            key={course.id}
                            imageUrl={course.imageUrl}
                            title={course.title}
                            progress={course.progress}
                            subtitle={course.subtitle}
                        />
                    ))}
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '12px',
                    border: '2px dashed #ddd'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                    }}>
                        📚
                    </div>
                    <h3 style={{
                        fontFamily: 'Merriweather, serif',
                        fontSize: '1.5rem',
                        margin: '0 0 0.5rem 0',
                        color: '#333'
                    }}>
                        No courses found
                    </h3>
                    <p style={{
                        fontFamily: 'Open Sans, sans-serif',
                        color: '#666',
                        margin: 0
                    }}>
                        Try adjusting your filters or enroll in new courses
                    </p>
                </div>
            )}
        </div>
    );
}
