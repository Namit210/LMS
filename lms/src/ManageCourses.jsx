import { FaPlus } from "react-icons/fa";
import courses from './data/coursedata.json'
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
export default function ManageCourses(){

    const createButtonStyle={
        display:'flex',
        alignItems:'center',
        gap:'0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#ff924aff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontFamily: 'Open Sans, sans-serif'
    }

    const inputStyle = {
        padding: '0.6rem 1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '0.95rem',
        fontFamily: 'Open Sans, sans-serif',
        flex: '1',
        outline: 'none'
    }

    const selectStyle = {
        padding: '0.6rem 1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '0.95rem',
        fontFamily: 'Open Sans, sans-serif',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'white'
    }

    const clearButtonStyle = {
        padding: '0.6rem 1rem',
        backgroundColor: 'transparent',
        color: '#666',
        border: '1px solid #ddd',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.95rem',
        fontFamily: 'Open Sans, sans-serif',
        transition: 'all 0.2s ease'
    }

    return(
        <div style={{padding:'0 10%'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem'}}>
                <h1>Manage Courses</h1>
                <button style={createButtonStyle}>
                 <FaPlus />
                 Create New Course
                </button>
            </div>
            <div style={{display:'flex',alignItems:'center', marginBottom:'1rem',boxShadow:'0 2px 5px rgba(0,0,0,0.08)', padding:'1.2rem', borderRadius:'8px', gap:'1rem', backgroundColor:'white'}}>
                <FiFilter style={{fontSize:'1.3rem', color:'#666', flexShrink:'0'}}/>
                <input type="text" placeholder="Search courses..." style={inputStyle}/>
                <select name="Instructor" id="" style={selectStyle}>
                    <option value="all">All Instructors</option>
                    <option value="Instructor 1">Instructor 1</option>
                    <option value="Instructor 2">Instructor 2</option>
                    <option value="Instructor 3">Instructor 3</option>
                </select>
                <button style={clearButtonStyle} 
                    onMouseEnter={(e) => {e.target.style.backgroundColor = '#f5f5f5'; e.target.style.borderColor = '#999';}}
                    onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.borderColor = '#ddd';}}>
                    Clear Filters
                </button>
            </div>
            <div style={{maxHeight:'70vh', overflowY:'auto', border:'1px solid #ddd', borderRadius:'8px'}}>
                <table style={{width:'100%', borderCollapse:'collapse'}}>
                    <thead style={{position:'sticky', top:'0', backgroundColor:'#f5f5f5', zIndex:'1'}}>
                    <tr>
                        <th style={{textAlign:'left', padding:'0.75rem', borderBottom:'2px solid #ddd'}}>Course Title</th>
                        <th style={{textAlign:'left', padding:'0.75rem', borderBottom:'2px solid #ddd'}}>Instructor</th>
                        <th style={{textAlign:'left', padding:'0.75rem', borderBottom:'2px solid #ddd'}}>Enrolled Students</th>
                        <th style={{textAlign:'left', padding:'0.75rem', borderBottom:'2px solid #ddd'}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((course, index) => (
                        <tr key={index} style={{borderBottom:'1px solid #eee'}}>
                            <td style={{padding:'0.75rem'}}>{course.title}</td>
                            <td style={{padding:'0.75rem'}}>{course.Instructor}</td>
                            <td style={{padding:'0.75rem'}}>{course['enrolled-std']}</td>
                            <td style={{padding:'0.75rem', display:'flex'}}>
                                <button style={{marginRight:'0.5rem', padding:'0.3rem 0.8rem', backgroundColor:'#ebeaeaff', color:'#000000ff', borderRadius:'4px',border:'none',cursor:'pointer', display:'flex', alignItems:'center', gap:'0.3rem'}}>
                                    <GoPencil />
                                    Edit</button>
                                <button style={{padding:'0.3rem 0.8rem', backgroundColor:'#f44336', color:'white', border:'none', borderRadius:'4px', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.3rem'}}>
                                    <RiDeleteBinLine />
                                    Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}