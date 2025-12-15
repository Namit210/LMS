import { CourseCard } from './Card.jsx'
import gita from './assets/gita.jpg'

export default function Courses() {
    return (
        <div style={{ padding: '0 8rem' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Merriweather, serif', fontSize: '2.5rem', marginBottom: '1rem' }}>Courses Catalog</h1>
            <div style={{ fontFamily: 'Merriweather, serif', fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>All Courses</div>
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
    )
}