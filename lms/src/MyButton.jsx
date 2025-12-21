export default function MyButton({style,children,color, onClick}){
     const buttonStyle={
        padding: '0.5rem 0.8rem',
        fontSize: '0.9rem',
        fontFamily:'open-sans, sans-serif',
        color: '#000000ff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(26, 22, 22, 0.1)',
        marginLeft:'1rem',
        alignItems:'center',
        display:'flex',
        gap:'0.2rem',
        ...style
    }

    const colorButtonStyle={
        ...buttonStyle,
        backgroundColor: color,
        color:'white',
        justifyContent:'space-between',
        gap:'0.6rem'
    }

    const simpleButtonStyle={
        ...buttonStyle,
        backgroundColor:'transparent',
        border:'1px solid #ccc'
    }

    if(color){
         return(
        <button style={colorButtonStyle} onClick={onClick}>
            {children}
        </button>
    )

    }

    return(
        <button style={simpleButtonStyle} onClick={onClick}>
            {children}
        </button>
    )
}