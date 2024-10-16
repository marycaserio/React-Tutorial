import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import { useJsonQuery } from './utilities/fetch'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseForm from './components/CourseForm';
import { useDbData } from "./utilities/firebase";

const Main = () => {
  // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div> {<Banner title={data.title} />} {<TermPage courses={data.courses} />} </div>} />
      <Route path="/courseform" element={<CourseForm />} />
    </Routes>
  </BrowserRouter>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;