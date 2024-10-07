import { useState } from "react";
import TermSelector from "./TermSelector";
import { terms } from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);

  const [selectedList, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selectedList.includes(item)
    ? selectedList.filter(x => x !== item)
    : [...selectedList, item]
  );

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <CourseList courses={courses} selection={selection} selectedList={selectedList} toggleSelected={toggleSelected} />
    </div>
  );
}

export default TermPage;

