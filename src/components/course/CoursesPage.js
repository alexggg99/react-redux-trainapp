import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions';
import  CourseList from './CourseList'

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const courses = this.props.courses;
      return (
        <div>
          <h1>Courses</h1>
          <CourseList courses={courses}></CourseList>
        </div>
      );
    }
}

CoursesPage.protoTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


