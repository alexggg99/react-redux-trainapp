import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

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
    debugger;
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          errors={this.state.error}
          loading={false}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  debugger;
  let course = { id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  }
}

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);


