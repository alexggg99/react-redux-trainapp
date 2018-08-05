import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm'
import  CourseList from './CourseList'

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    debugger;
    this.state = {
      course: Object.assign({}, this.props.course),
      error: {}
    }
  }

  render() {
    // const course = this.props.course;
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          allAuthors={[]}
          errors={this.state.error}
          loading={false}
        />
      </div>
    );
  }
}

ManageCoursePage.protoTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  let course = { id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};
  return {
    course: course
  }
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);


