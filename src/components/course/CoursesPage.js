import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions';
import  CourseList from './CourseList'
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const courses = this.props.courses;
      return (
        <div>
          <h1>Courses</h1>
          <input type="submit"
                 value="Add Course"
                 className="btn btn-primary margin-button-10"
                 onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={courses}></CourseList>
        </div>
      );
    }
}

CoursesPage.propTypes = {
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
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


