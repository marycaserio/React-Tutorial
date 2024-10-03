import Course from './Course';
import './CourseList.css'

const CourseList = (courses) => (
  <div className="course-list justify-content-center">
    { Object.values(courses).map((course) => Course(course)) }
  </div>
);

export default CourseList;