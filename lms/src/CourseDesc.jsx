import { useMemo } from 'react';
import chaptersData from './data/chapter.json';
import MyButton from './MyButton';

export default function CourseDesc({title,desc,imgUrl,id}){
const imageStyle={
    minWidth:'50%',
    maxHeight:'50vh',
    objectFit:'cover',
    display: 'block'

}

// Memoize chapter filtering for performance
const courseChapters = useMemo(() => {
    return chaptersData.courseId === id ? chaptersData.chapters : [];
}, [id]);

    return (
        <div style={{padding:'0 5%', maxWidth: '1400px', margin: '0 auto'}}>
                <h1 style={{ fontFamily: 'Merriweather, serif', marginBottom: '1.5rem' }}>
                    {title}
                    </h1>
            <div style={{display:'flex',gap:'1.5rem', border:'1px solid #ddd', borderRadius:'8px', overflow:'hidden', alignItems:'stretch', maxHeight:'50vh', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <img src={imgUrl} alt={`${title} course thumbnail`} style={imageStyle} loading="lazy" />
                <div  style={{fontFamily:'Open Sans, sans-serif', fontSize:'1rem', lineHeight:'1.6', textAlign:'justify', overflowY:'auto', padding:'1.5rem', flex:'1', minHeight:'0', scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1'}}>

                {desc}
                
                </div>
            </div>
            <h2 style={{ fontFamily: 'Merriweather, serif', marginTop: '2rem', marginBottom: '1rem' }}>Course Chapters</h2>
            <div style={{marginTop:'1rem'}}>
                {courseChapters.length > 0 ? (
                    courseChapters.map((chapter, index) => (
                        
                        <div 
                            key={chapter.chapterId || index} 
                            style={{border:'1px solid #ddd', padding:'1.5rem', borderRadius:'8px', marginBottom:'1rem', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', transition: 'box-shadow 0.3s ease', boxShadow: '0 1px 3px rgba(0,0,0,0.08)'}}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'}
                        >
                            <div style={{ flex: '1' }}>
                            <h3 style={{fontFamily:'Merriweather, serif', margin:'0 0 0.5rem 0', fontSize: '1.2rem'}}>Chapter {index + 1}: {chapter.title}</h3>
                            <p style={{fontFamily:'Open Sans, sans-serif', color:'#666', margin:'0', lineHeight: '1.5'}}>{chapter.desc}</p>
                            </div>
                            <MyButton style={{height:'fit-content', flexShrink: 0}} aria-label={`Open chapter: ${chapter.title}`}>Open</MyButton>
                        </div>
                       
                    ))
                ) : (
                    <div style={{textAlign: 'center', padding: '2rem', color: '#999', fontStyle: 'italic'}}>
                        No chapters available for this course yet. Check back soon!
                    </div>
                )}
            </div>

        </div>
    )
}