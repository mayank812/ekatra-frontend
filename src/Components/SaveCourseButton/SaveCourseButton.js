import React from 'react';
import './saveCourseButton.css';


const SaveCourseButton = ({ onButtonSubmit }) => {
    return (
        <button type='submit' onClick={onButtonSubmit} className='saveCourseBtn' >Save Course</button>
    )
}

export default SaveCourseButton;