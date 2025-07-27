import { useState, useEffect } from 'react';
import JobList from './components/JobList';
import AddJobForm from './components/AddJobform';
import JobFilter from './components/JobFilter';

const API_URL = 'http://localhost:3000/jobs';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ location: '', jobType: '' });

 const fetchJobs = async () => {
  const query = new URLSearchParams();

  if (filters.jobType) {
    query.append('type', filters.jobType);
  }

  // Don't include location if jobType is 'remote'
  if (filters.jobType.toLowerCase() !== 'remote' && filters.location) {
    query.append('location', filters.location);
  }

  const res = await fetch(`${API_URL}?${query.toString()}`);
  const data = await res.json();
  setJobs(data);
};


  const addJob = async (job) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    if (res.ok) fetchJobs(); // Refresh list
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  return (
     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎯 Job Board</h1>
        <div className="space-y-8">
          <AddJobForm onAdd={addJob} />
          <JobFilter onFilterChange={setFilters} />
          <JobList jobs={jobs} />
        </div>
      </div>
    </div>
  );
}

export default App;
