import { useNavigate, useLocation } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData';
import { parseTime, parseMeeting } from '../utilities/conflictList';

const compareTimes = (times) => {
  const [timeA, timeB] = times.split('-');
  return parseTime(timeA) < parseTime(timeB);
}

const validateData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return /(^$|(^(M|Tu|W|Th|F)+\s(2[0-3]|[01]?[0-9])\:([0-5][0-9])\-(2[0-3]|[01]?[0-9])\:([0-5][0-9])))/.test(val)
      ? val
        ? compareTimes(parseMeeting(val)[1])
          ? ''
          : 'starting time must be less than ending time'
        : ''
      : 'must be empty or a valid meeting (days and start-end, e.g., MWF 12:00-13:20)';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({ message, disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate('/')}>
        Cancel
      </button>
      {/* <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>
        Submit
      </button> */}
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseForm = () => {
  const location = useLocation();
  const { course } = location.state || {};

  const [state, change] = useFormData(validateData, course);

  const submit = (evt) => {
    evt.preventDefault();
    // TODO
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <h2 style={{textAlignVertical: "center", textAlign: "center", margin: "1em"}}>Edit Course</h2>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <ButtonBar message={null} disabled={true} />
    </form>
  );
};

export default CourseForm;

