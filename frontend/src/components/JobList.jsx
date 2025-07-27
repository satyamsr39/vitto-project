import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import FilterBar from './FilterBar';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({ location: '', jobType: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/jobs') // change to your backend endpoint
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  useEffect(() => {
    const { location, jobType } = filters;
    const filtered = jobs.filter(job =>
      (!location || job.location === location) &&
      (!jobType || job.jobType === jobType)
    );
    setFilteredJobs(filtered);
  }, [filters, jobs]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <button
          onClick={() => navigate('/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Job
        </button>
      </div>

      <FilterBar jobs={jobs} onFilterChange={setFilters} />

      <div className="mt-6 grid gap-4">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
