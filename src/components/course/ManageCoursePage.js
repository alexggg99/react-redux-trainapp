import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import  * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      error: {},
      saving: false
    }
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!nextProps.course) {
      this.setState({course: { id: "", title: "", watchHref: "", authorId: "", length: "", category: ""}});
      return;
    }
    if (nextProps.course.id != this.props.course.id){
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      })
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses')
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          errors={this.state.error}
          saving={this.state.saving}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//put react router into context
ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
}

function getCourseById(courses, courseId) {
  const course = courses.filter(course => course.id == courseId);
  if (course) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; //from the path `/course/:id`
  let course = { id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
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
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);


