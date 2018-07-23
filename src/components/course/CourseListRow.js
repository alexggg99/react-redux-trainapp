import React, {PropTypes} from 'react';
import {Link} from "react-router";

const CourseListRow = ({course}) => {
  return (
    <tr>
      <th scope="row"><a href={course.watchHref} target="_blank">Watch</a></th>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.protoTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;