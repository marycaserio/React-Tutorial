import Course from './Course';
import './Courses.css'
import { terms } from './TermSelector';

const CourseList = ({courses, selection, selectedList, toggleSelected, conflictList}) => (
  <div className="course-list justify-content-center">
    { (Object.entries(courses).filter(([key, course]) => course.term === terms[selection])).map(([key, course]) => <Course courseKey={key} course={course} courses={courses} selectedList={selectedList} toggleSelected={toggleSelected} conflictList={conflictList}/>) }
  </div>
);

export default CourseList;