import image from './assets/sample.jpg'

export function CourseCard({ title, content }) { 

    const imageStyle = {
        // height: '10rem',
        width: '100%'
        // padding:'0px    ',
        // margin:'0px'
    }

    const headingStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        fontFamily: 'Merryweather, serif',
        color: '#1a1a1a',
        margin: '0 0.4rem',
        lineHeight: '1.4',
        letterSpacing: '-0.02em'
    }

    const subtextStyle = {
        fontSize: '0.95rem',
        color: '#666',
        margin: '0 0.6rem',
        lineHeight: '1.6',
        fontFamily: 'Open Sans, sans-serif'
    }

    const buttonStyle = {
        padding: '0.5rem 1rem',
        backgroundColor: '#ffffffff',
        color: '#110404ff',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '0.5rem',
        width: '100%',
        boxShadow:' 0px 0px 0px #00000000, 0px 1px 3px #171a1f12',
        borderColor:' #DEE1E6FF',
        opacity:'1'
    }

    const tagStyle = {
        display: 'inline-block',
        padding: '0.2rem 0.5rem',
        backgroundColor: '',
        borderRadius: '4px',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        fontStyle: 'Open Sans, sans-serif',
        boxShadow:'0 1px 2px #504a4aff',
        color:'#504a4aff'
    }

    return(
<div style={{
    maxWidth:'20rem',
    textAlign:'center',
    border:'1px solid #ccc',
    borderRadius:'15px',
    padding:'0',
    boxShadow:'0 2px 5px rgba(0,0,0,0.1)',
    margin:'0',
    overflow:'hidden'
}}>
    <img src={image} alt="image" style={imageStyle} />
    <div>
    <div style={tagStyle}>Beginner</div>
    </div>
    <div style={headingStyle}>Introduction to Bhagavad Gita</div>

    <div style={{
        padding:'0.5rem'
    }}>

    <p style={subtextStyle}>Explore the timeless wisdom of the Bhagavad-gita and its practical application</p>
    <button style={buttonStyle}>View Course</button>
    </div>

</div>
    )
}