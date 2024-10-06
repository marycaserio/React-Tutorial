import Course from './Course';
import './CourseList.css'
import { terms } from "./TermSelector";

const CourseList = ({courses, selection}) => (
  <div className="course-list justify-content-center">
    { (Object.values(courses).filter((course) => course.term === terms[selection])).map((course) => <Course course={course} />) }
  </div>
);

export default CourseList;