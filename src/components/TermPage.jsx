import { useState } from 'react';
import TermSelector from './TermSelector';
import { terms } from './TermSelector';
import CourseList from './CourseList';
import Modal from './Modal';
import CoursePlan from './CoursePlan';

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [selectedList, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleSelected = (item) => setSelected(
    selectedList.includes(item)
    ? selectedList.filter(x => x !== item)
    : [...selectedList, item]
  );

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false); 

  return (
    <div>
      <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <button className="ms-auto btn btn-dark float-end" onClick={openModal} style={{backgroundColor: "#4E2A84"}}>
          Course Plan
        </button>
        <Modal open={open} close={closeModal}>
          <CoursePlan courses={courses} selectedList={selectedList} />
        </Modal>
      </div>
      <CourseList courses={courses} selection={selection} selectedList={selectedList} toggleSelected={toggleSelected} />
    </div>
  );
}

export default TermPage;

