const JobCard = ({ job }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-semibold">{job.jobRole}</h2>
    <p className="text-gray-700">{job.company}</p>
    <p>{job.location} • {job.jobType}</p>
    <p className="text-sm mt-2">{job.description}</p>
    <p className="text-xs text-gray-500 mt-1">{new Date(job.date).toDateString()}</p>
  </div>
);

export default JobCard;
