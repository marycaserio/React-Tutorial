import { useNavigate, useLocation } from 'react-router-dom';
import { useFormData } from '../utilities/useFormData'; // Custom hook

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

  const [state, change] = useFormData(null, course);

  const submit = (evt) => {
    evt.preventDefault();
    // TODO
  };

  return (
    <form onSubmit={submit}>
      <h2 style={{textAlignVertical: "center", textAlign: "center", margin: "1em"}}>Edit Course</h2>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <ButtonBar message={null} disabled={true} />
    </form>
  );
};

export default CourseForm;

