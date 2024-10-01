const Course = (course) => (
  <div>
    <p>{course.term} CS {course.number}: {course.title}</p>
  </div>
);

const CourseList = (courses) => (
  <div>
    { Object.values(courses).map((course) => Course(course)) }
  </div>
);

export default CourseList;