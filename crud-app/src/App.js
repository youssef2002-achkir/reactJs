import React, {Component} from 'react'
import CourseForm from './Components/courseForm'
import CourseList from './Components/courseList'
class App extends Component{
  state = {
    courses : [
      {name:"HTML"},
      {name:"CSS"},
      {name:"JS"}
    ],
    current: ''
  }

  updateCourse = (e) =>{
    this.setState({
      current: e.target.value
    })
  }
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current !== '') courses.push({name: current});
    this.setState({
      courses,
      current:''

    })
  }
//delete course

deleteCourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })
}

//edit course
editCourse = (index, newValue) =>{
  let courses = this.state.courses;
  let course  = courses[index];
  course['name'] = newValue;
  this.setState({
    courses
  })
}
 render(){
   const {courses} = this.state;
   const courselist = courses.map((course,index) => {
     return <CourseList details = {course} key = {index} index={index} update={this.handleChange} DeleteCourse = {this.deleteCourse} EditCourse = {this.editCourse}/>
   })
    return(
      <section className = "App">
        <h2>Add Courses</h2>
        <CourseForm current = {this.state.current} UpdateCourse = {this.updateCourse} AddCourse={this.addCourse}/>
        <ul>{courselist}</ul>
      </section>
    )
  }
  
}
export default App;
