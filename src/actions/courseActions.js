import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return {type: 'CREATE_COURSE', course: course};
}

export function loadCoursesSuccess(courses) {
  return {type: 'LOAD_COURSES_SUCCESS', courses: courses};
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}
