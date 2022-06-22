import React, {Component} from 'react';


class CourseList extends Component{
state = {
    isEdit:false
}
    renderCourse = () => {
        return(
            <li className='Lform'>
                   <span>{this.props.details.name}</span>
                   <button onClick={this.toggleState}>Edit Course</button>
                   <button onClick={() => this.props.DeleteCourse(this.props.index)}>Delete Course</button>
                </li>
        )
    }
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.EditCourse(this.props.index,this.input.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return(
            <form className='Update' onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) =>{this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit:!isEdit
        })
    }
    render(){
        let {isEdit} = this.state;
        return(
            <React.Fragment>
                {isEdit ? this.renderUpdateForm():this.renderCourse()}
            </React.Fragment>
        )
    }
}

export default CourseList;