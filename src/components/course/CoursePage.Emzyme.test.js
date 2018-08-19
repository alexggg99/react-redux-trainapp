import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ManageCoursePage from './ManageCoursePage';

function setup() {
  let props = {
    courses: [],
    createCourse: () => {}
  };

  return shallow(<ManageCoursePage  {...props}/>)
}

describe('ManageCoursePage via Enzyme', () => {

  it('renders input and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('Courses');
    expect(wrapper.find('input').value()).toEqual('Add Course');
    expect(wrapper.find('CourseList').length).toBe(1);
  });

});
