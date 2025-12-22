import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Sign up data:', formData);
        // Add your sign up logic here
    };

    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: '2rem'
    };

    const formBoxStyle = {
        width: '100%',
        maxWidth: '450px',
        backgroundColor: '#2b476bff',
        color: 'white',
        padding: '2.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        fontFamily: 'Open Sans, sans-serif',
        outline: 'none'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.3rem',
        fontWeight: '500',
        fontSize: '0.95rem'
    };

    const buttonStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#d4d13fff',
        color: '#000000ff',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={containerStyle}>
            <div style={formBoxStyle}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ padding: '0', margin: '0 0 0.5rem 0', fontSize: '2rem' }}>
                        Join Learnix
                    </h2>
                    <p style={{ margin: '0', padding: '0', fontSize: '0.95rem', opacity: '0.9' }}>
                        Start your spiritual learning journey today
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div>
                            <label htmlFor="name" style={labelStyle}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                style={inputStyle}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={labelStyle}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                style={inputStyle}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" style={labelStyle}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                style={inputStyle}
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                style={inputStyle}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="role" style={labelStyle}>I want to join as</label>
                            <select
                                id="role"
                                name="role"
                                style={inputStyle}
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            style={buttonStyle}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#c7c400ff'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#d4d13fff'}
                        >
                            Create Account
                        </button>

                        <p style={{ textAlign: 'center', margin: '0' }}>
                            Already have an account?{' '}
                            <Link to="/login" style={{ color: '#d4d13fff', textDecoration: 'none', fontWeight: '600' }}>
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
