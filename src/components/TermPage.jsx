import { useState } from "react";
import TermSelector from "./TermSelector";
import { terms } from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <CourseList courses={courses} selection={selection} />
    </div>
  );
}

export default TermPage;

