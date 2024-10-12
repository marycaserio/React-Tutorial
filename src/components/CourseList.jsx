import Course from './Course';
import './Courses.css'
import { terms } from './TermSelector';

const CourseList = ({courses, selection, selectedList, toggleSelected, conflictList}) => (
  <div className="course-list justify-content-center">
    { (Object.values(courses).filter((course) => course.term === terms[selection])).map((course) => <Course course={course} courses={courses} selectedList={selectedList} toggleSelected={toggleSelected} conflictList={conflictList}/>) }
  </div>
);

export default CourseList;