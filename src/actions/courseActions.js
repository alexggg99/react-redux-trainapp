import courseApi from '../api/mockCourseApi';

export function createCourseSuccess(course) {
  return {type: 'CREATE_COURSE_SUCCESS', course: course};
}

export function updatedCourseSuccess(course) {
  return {type: 'UPDATE_COURSE_SUCCESS', course: course};
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updatedCourseSuccess(course)) :
      dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw (error);
    })
  };
}
