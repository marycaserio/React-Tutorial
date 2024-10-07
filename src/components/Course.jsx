const Course = ({course, selectedList, toggleSelected}) => (
  <div className="card m-1 p2" onClick={() => toggleSelected(course)}>
    <div className="card-body" style={{ backgroundColor: selectedList.includes(course) ? "#E4E0EE" : "white" }}>
      <h5 className="card-title">{course.term} CS {course.number}</h5>
      <p className="card-text">{course.title}</p>
    </div>
    <div className="card-footer" style={{ backgroundColor: selectedList.includes(course) ? "#B6ACD1" : "whitesmoke" }}>
        <p className="card-text">{course.meets}</p>
    </div>
  </div>
);

export default Course;