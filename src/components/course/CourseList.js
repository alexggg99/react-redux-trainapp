import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';


const CourseList = ({courses}) => {
    return (
      <table className="table">
        <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Length</th>
        </tr>
        </thead>
        <tbody>
          {courses.map(course => <CourseListRow key={course.id} course={course}></CourseListRow>)}
        </tbody>
      </table>
    );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;


