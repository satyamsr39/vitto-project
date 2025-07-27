// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobForm from './components/JobForm';
import JobList from './components/jobList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
