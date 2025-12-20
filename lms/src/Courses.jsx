import { CourseCard } from './Card.jsx'
import gita from './assets/gita.jpg'
import { useEffect } from 'react'

export default function Courses() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Merriweather, serif', fontSize: '2.5rem', marginBottom: '2rem' }}>Courses Catalog</h1>

            <div style={{ maxWidth: '1200px', width: '80%' }}> 
            <div style={{ fontFamily: 'Merriweather, serif', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>All Courses</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
                <CourseCard imageUrl={gita} title='Introduction to Bhagavad Gita' subtitle='Explore the timeless wisdom of the Bhagavad Gita and its practical application' level='Beginner' />
            </div>
            </div>
        </div>
    )
}