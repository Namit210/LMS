import MyButton from "./MyButton";
import FormSection from "./FormSection";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

export default function CreateCourse(){

    const [chapters, setChapters] = useState([{ id: 1, name: '', description: '' }]);
    const [liveSessions, setLiveSessions] = useState([{ id: 1, date: '', time: '', meetingLink: '' }]);

    const addChapter = () => {
        const newChapter = { id: Date.now(), name: '', description: '' };
        setChapters([...chapters, newChapter]);
    };

    const removeChapter = (id) => {
        if (chapters.length > 1) {
            setChapters(chapters.filter(chapter => chapter.id !== id));
        }
    };

    const addLiveSession = () => {
        const newSession = { id: Date.now(), date: '', time: '', meetingLink: '' };
        setLiveSessions([...liveSessions, newSession]);
    };

    const removeLiveSession = (id) => {
        if (liveSessions.length > 1) {
            setLiveSessions(liveSessions.filter(session => session.id !== id));
        }
    };

    const labelStyle = { fontFamily: 'Merriweather, serif', fontSize: '1rem', fontWeight: 'normal', margin: '0' };
    const inputStyle = { padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ddd', fontFamily: 'Open Sans, sans-serif', outline: 'none', width: '100%' };

    return(
        <div style={{padding:'0 10%'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
                          <h1>Create New Course</h1>
                          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'35%'}}>
                          <MyButton >
                            Save Draft
                          </MyButton>
                          <MyButton>
                            Preview
                          </MyButton>
                          <MyButton color={'#c7c400ff'}>
                            Publish Course
                          </MyButton>
                          </div>
                      </div>


        <FormSection title="Course Details">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={labelStyle}>Course Title</label>
                <input type="text" placeholder="Enter course title" style={inputStyle} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={labelStyle}>Course Description</label>
                <textarea placeholder="Enter course description" rows="5" style={inputStyle} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <label style={labelStyle}>Course Image URL</label>
                <input type="text" placeholder="Enter image URL" style={inputStyle} />
            </div>
        </FormSection>

        <FormSection title="Chapters">
            {chapters.map((chapter, index) => (
                <div key={chapter.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontFamily: 'Merriweather, serif', margin: '0' }}>Chapter {index + 1}</h3>
                        {chapters.length > 1 && (
                            <button 
                                onClick={() => removeChapter(chapter.id)}
                                style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                                <FaTrash /> Remove
                            </button>
                        )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem' }}>
                        <label style={labelStyle}>Chapter Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter chapter name" 
                            style={inputStyle}
                            value={chapter.name}
                            onChange={(e) => {
                                const updatedChapters = chapters.map(ch => 
                                    ch.id === chapter.id ? { ...ch, name: e.target.value } : ch
                                );
                                setChapters(updatedChapters);
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <label style={labelStyle}>Chapter Description</label>
                        <textarea 
                            placeholder="Enter chapter description" 
                            rows="3" 
                            style={inputStyle}  
                            value={chapter.description}
                            onChange={(e) => {
                                const updatedChapters = chapters.map(ch => 
                                    ch.id === chapter.id ? { ...ch, description: e.target.value } : ch
                                );
                                setChapters(updatedChapters);
                            }}
                        />
                    </div>
                </div>
            ))}

            <MyButton 
                onClick={addChapter}
                color='#4caf50'
                style={{ 
             
                    width:'fit-content'
                }}
            >
                <FaPlus /> Add Chapter
            </MyButton>
        </FormSection>

        <FormSection title="Course Resources">
            <div style={{ display: 'flex', gap: '0.3rem' , alignItems:'center', justifyContent:'flex-end'}}>
                <MyButton  style={{padding:'0.5rem 1rem'}}>
                    <MdOutlineFileUpload/>
                    Upload
                    </ MyButton>
            </div>
        </FormSection>

        <FormSection title='Schedule Live Sessions'>
            {liveSessions.map((session, index) => (
                <div key={session.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontFamily: 'Merriweather, serif', margin: '0' }}>Session {index + 1}</h3>
                        {liveSessions.length > 1 && (
                            <button 
                                onClick={() => removeLiveSession(session.id)}
                                style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                                <FaTrash /> Remove
                            </button>
                        )}
                    </div>

                    <div style={{display:'flex', gap:'1.5rem', alignItems:'flex-start', flexWrap:'wrap'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: '1', minWidth: '200px' }}>
                            <label style={labelStyle}>Date</label>
                            <input 
                                type="date" 
                                style={inputStyle}
                                value={session.date}
                                onChange={(e) => {
                                    const updatedSessions = liveSessions.map(s => 
                                        s.id === session.id ? { ...s, date: e.target.value } : s
                                    );
                                    setLiveSessions(updatedSessions);
                                }}
                            />   
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: '1', minWidth: '150px' }}>
                            <label style={labelStyle}>Time</label>
                            <input 
                                type="time" 
                                style={inputStyle}
                                value={session.time}
                                onChange={(e) => {
                                    const updatedSessions = liveSessions.map(s => 
                                        s.id === session.id ? { ...s, time: e.target.value } : s
                                    );
                                    setLiveSessions(updatedSessions);
                                }}
                            />   
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: '2', minWidth: '250px' }}>
                            <label style={labelStyle}>Meeting Link</label>
                            <input 
                                type="text" 
                                placeholder="Enter meeting link" 
                                style={inputStyle}
                                value={session.meetingLink}
                                onChange={(e) => {
                                    const updatedSessions = liveSessions.map(s => 
                                        s.id === session.id ? { ...s, meetingLink: e.target.value } : s
                                    );
                                    setLiveSessions(updatedSessions);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <MyButton 
                onClick={addLiveSession}
                color='#4caf50'
                style={{ 
                    width:'fit-content'
                }}
            >
                <FaPlus /> Add Session
            </MyButton>
        </FormSection>
        <div style={{ display: 'flex', gap: '0.3rem' , alignItems:'center', justifyContent:'flex-end'}}>
                <MyButton  style={{padding:'0.5rem 1rem'}}>
                    Save Draft
                    </ MyButton>
                <MyButton  style={{padding:'0.5rem 1rem'}}>
                    Preview
                    </ MyButton>
                <MyButton  color='#c7c400ff' style={{padding:'0.5rem 1rem'}}>
                    Publish Course
                    </ MyButton>
            </div>
        </div>
    )
}