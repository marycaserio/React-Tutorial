import { Link } from 'react-router-dom';

const Course = ({course, selectedList, toggleSelected, conflictList}) => (
  <div className="card m-1 p2" onClick={() => toggleSelected(course)}>
    <div className="card-body" style={{ backgroundColor: selectedList.includes(course) ? "#E4E0EE" : conflictList.includes(course) ? "lightgray" : "white" }}>
      <div className="d-flex justify-content-between">
        <h5 className="card-title">{course.term} CS {course.number}</h5>
        <Link to={`/courseform`} state={{ course }}>
          <button className="bi bi-pencil-square float-end" style={{ backgroundColor: "transparent", border: "transparent"}}></button>
        </Link>
      </div>
      <p className="card-text">{course.title}</p>
    </div>
    <div className="card-footer" style={{ backgroundColor: selectedList.includes(course) ? "#B6ACD1" : conflictList.includes(course) ? "darkgray" : "whitesmoke" }}>
        <p className="card-text">{course.meets}</p>
    </div>
  </div>
);

export default Course;