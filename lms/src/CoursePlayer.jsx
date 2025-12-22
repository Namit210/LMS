import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import chaptersData from './data/chapter.json';
import MyButton from './MyButton';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { MdOndemandVideo, MdArticle, MdQuiz } from 'react-icons/md';

export default function CoursePlayer() {
    const { courseId } = useParams();
    const [currentChapter, setCurrentChapter] = useState(0);
    const [completedChapters, setCompletedChapters] = useState([]);

    const courseChapters = useMemo(() => {
        return chaptersData.courseId === courseId ? chaptersData.chapters : [];
    }, [courseId]);

    const markComplete = () => {
        if (!completedChapters.includes(currentChapter)) {
            setCompletedChapters([...completedChapters, currentChapter]);
        }
    };

    const goToNextChapter = () => {
        if (currentChapter < courseChapters.length - 1) {
            setCurrentChapter(currentChapter + 1);
        }
    };

    const goToPreviousChapter = () => {
        if (currentChapter > 0) {
            setCurrentChapter(currentChapter - 1);
        }
    };

    const currentChapterData = courseChapters[currentChapter];
    const progress = courseChapters.length > 0 ? (completedChapters.length / courseChapters.length) * 100 : 0;

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 80px)', backgroundColor: '#f5f5f5' }}>
            {/* Sidebar */}
            <div style={{
                width: '320px',
                backgroundColor: 'white',
                borderRight: '1px solid #ddd',
                overflowY: 'auto',
                padding: '1.5rem'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'Merriweather, serif', margin: '0 0 0.5rem 0' }}>
                        Course Content
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>
                        {completedChapters.length} of {courseChapters.length} chapters completed
                    </div>
                    <div style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '4px',
                        marginTop: '0.5rem',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: '#4caf50',
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {courseChapters.map((chapter, index) => (
                        <div
                            key={chapter.chapterId || index}
                            onClick={() => setCurrentChapter(index)}
                            style={{
                                padding: '1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                backgroundColor: currentChapter === index ? '#e3f2fd' : 'transparent',
                                border: currentChapter === index ? '2px solid #2196f3' : '1px solid #ddd',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}
                            onMouseEnter={(e) => {
                                if (currentChapter !== index) {
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentChapter !== index) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            {completedChapters.includes(index) ? (
                                <FaCheckCircle style={{ color: '#4caf50', fontSize: '1.2rem', flexShrink: 0 }} />
                            ) : (
                                <FaCircle style={{ color: '#ccc', fontSize: '1.2rem', flexShrink: 0 }} />
                            )}
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontWeight: currentChapter === index ? '600' : '500',
                                    fontSize: '0.95rem',
                                    fontFamily: 'Open Sans, sans-serif',
                                    marginBottom: '0.2rem'
                                }}>
                                    Chapter {index + 1}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: '#666',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {chapter.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {currentChapterData ? (
                    <>
                        {/* Content Area */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '2rem',
                            backgroundColor: 'white',
                            margin: '1.5rem',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem'
                                }}>
                                    Chapter {currentChapter + 1} of {courseChapters.length}
                                </div>

                                <h1 style={{
                                    fontFamily: 'Merriweather, serif',
                                    fontSize: '2.5rem',
                                    margin: '0 0 1rem 0',
                                    lineHeight: '1.3'
                                }}>
                                    {currentChapterData.title}
                                </h1>

                                {/* Video Player Placeholder */}
                                <div style={{
                                    width: '100%',
                                    height: '450px',
                                    backgroundColor: '#000',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {currentChapterData.imgUrl ? (
                                        <img
                                            src={currentChapterData.imgUrl}
                                            alt={currentChapterData.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{ textAlign: 'center', color: 'white' }}>
                                            <MdOndemandVideo style={{ fontSize: '4rem', marginBottom: '1rem' }} />
                                            <div style={{ fontSize: '1.2rem' }}>Video Player</div>
                                            <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
                                                Video content will be displayed here
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Chapter Description */}
                                <div style={{
                                    backgroundColor: '#f9f9f9',
                                    padding: '1.5rem',
                                    borderRadius: '8px',
                                    marginBottom: '2rem'
                                }}>
                                    <h3 style={{
                                        fontFamily: 'Merriweather, serif',
                                        margin: '0 0 1rem 0',
                                        fontSize: '1.3rem'
                                    }}>
                                        About this chapter
                                    </h3>
                                    <p style={{
                                        fontFamily: 'Open Sans, sans-serif',
                                        fontSize: '1rem',
                                        lineHeight: '1.8',
                                        color: '#444',
                                        margin: 0
                                    }}>
                                        {currentChapterData.desc}
                                    </p>
                                </div>

                                {/* Learning Resources */}
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{
                                        fontFamily: 'Merriweather, serif',
                                        margin: '0 0 1rem 0',
                                        fontSize: '1.3rem'
                                    }}>
                                        Learning Resources
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            backgroundColor: 'white',
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            cursor: 'pointer'
                                        }}>
                                            <MdArticle style={{ fontSize: '1.5rem', color: '#ff9800' }} />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>
                                                    Chapter Notes
                                                </div>
                                                <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                                    PDF - 2.4 MB
                                                </div>
                                            </div>
                                            <MyButton style={{ padding: '0.4rem 1rem' }}>Download</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Bar */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            backgroundColor: 'white',
                            borderTop: '1px solid #ddd',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <MyButton
                                onClick={goToPreviousChapter}
                                disabled={currentChapter === 0}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    opacity: currentChapter === 0 ? 0.5 : 1,
                                    cursor: currentChapter === 0 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                ← Previous
                            </MyButton>

                            <MyButton
                                onClick={markComplete}
                                color={completedChapters.includes(currentChapter) ? '#4caf50' : '#2196f3'}
                                style={{ padding: '0.75rem 2rem', fontWeight: '600' }}
                            >
                                {completedChapters.includes(currentChapter) ? '✓ Completed' : 'Mark as Complete'}
                            </MyButton>

                            <MyButton
                                onClick={goToNextChapter}
                                disabled={currentChapter === courseChapters.length - 1}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    opacity: currentChapter === courseChapters.length - 1 ? 0.5 : 1,
                                    cursor: currentChapter === courseChapters.length - 1 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Next →
                            </MyButton>
                        </div>
                    </>
                ) : (
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <h2>No content available</h2>
                            <p>This course doesn't have any chapters yet.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
