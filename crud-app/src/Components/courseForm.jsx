import React from 'react';

const CourseForm = (props) => {
    return(
        <form className='Cform' onSubmit={props.AddCourse}>
            <input type="text" placeholder='Enter your course name...'  value = {props.current} onChange={props.UpdateCourse}/>
            <button>Add course</button>
        </form>
    )
}

export default CourseForm