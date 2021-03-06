import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, errorAjaxCall} from './ajaxActions';

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
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updatedCourseSuccess(course)) :
      dispatch(createCourseSuccess(course));
    }).catch(error => {
      debugger;
      dispatch(errorAjaxCall());
      throw (error);
    })
  };
}
