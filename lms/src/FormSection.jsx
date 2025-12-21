export default function FormSection({ title, children }) {
    return (
        <div style={{ boxShadow: '0 0 10px rgba(26, 22, 22, 0.25)', borderRadius: '8px', marginBottom: '2rem', background: 'transparent' }}>
            <div>
                <h2 style={{ fontFamily: 'Merriweather, serif', marginBottom: '0.5rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(26, 22, 22, 0.1)', padding: '1rem' }}>
                    {title}
                </h2>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1.5rem 2rem', borderRadius: '8px' }}>
                {children}
            </form>
        </div>
    );
}
