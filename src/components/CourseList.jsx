import Course from './Course';
import './Courses.css'
import { terms } from "./TermSelector";

const CourseList = ({courses, selection, selectedList, toggleSelected}) => (
  <div className="course-list justify-content-center">
    { (Object.values(courses).filter((course) => course.term === terms[selection])).map((course) => <Course course={course} selectedList={selectedList} toggleSelected={toggleSelected}/>) }
  </div>
);

export default CourseList;