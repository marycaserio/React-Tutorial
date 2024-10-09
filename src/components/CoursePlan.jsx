import Course from './Course';
import './Courses.css'

const CoursePlan = ({courses, selectedList}) => (
  selectedList.length === 0
  ? <div>
    <p>No selected courses. Click a course card to select it.</p>
  </div>
  : <div className="course-list justify-content-center">
    { (Object.values(courses).filter((course) => selectedList.includes(course))).map((course) => <Course course={course} selectedList={selectedList}/>) }
  </div>
);

export default CoursePlan;