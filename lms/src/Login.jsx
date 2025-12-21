export default function Login() {
    const containerStyle = {
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: '2rem'
    }

    const inputStyle = {
        padding: '0.5rem',
        borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem'
    }
    return (
        <div style={containerStyle}>
            <div style={{ width: '30%', backgroundColor: '#e0ebf3ff', color: 'rgba(49, 59, 85, 1)', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', margin: '0 auto' }}>

                <div style={{textAlign:'center', marginBottom:'1.5rem'}}>

                <h2 style={{padding:'0', margin:'0 0 0.3rem 0'}}>
                    Login to Learnix
                </h2>
                <p style={{margin:'0', padding:'0'}}>Enter your credentials to continue your spiritual journey</p>
                </div>

                <form action="">
                    <div style={{ display: 'flex', flexDirection: 'column', gap:'0.5rem', marginTop: '1rem' }}>
                        <label htmlFor="email" style={{padding:'0', margin:'0.5rem 0 0.2rem 0'}}>Email</label>
                        <input type="email" placeholder="Email" style={inputStyle} id="email" />

                        <label htmlFor="pass" style={{margin:'0.5rem 0 0.2rem 0'}}>Password</label>
                        <input type="password" placeholder="Password" style={inputStyle} id="pass"/>
                        <button type="submit" style={{ padding: '0.75rem', borderRadius: '5px', border: 'none', backgroundColor: '#d4d13fff', color: '#000000ff', fontSize: '1rem', cursor: 'pointer', marginTop:'0.5rem' }}>Login</button>

                        <p style={{textAlign:'center'}}>Don't have an account <a href="">Sign Up</a> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}