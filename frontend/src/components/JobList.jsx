export default function JobList({ jobs }) {
  if (!jobs.length)
    return (
      <p className="text-center text-gray-500 text-lg mt-8">
        🚫 No jobs available.
      </p>
    );

  return (
    <div className="space-y-6 ">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <div className=" mb-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              {job.jobRole}
            </h2>
            <span className="text-sm text-gray-400 mt-1 md:mt-0">
              {job.date}
            </span>
          </div>

          <div className="text-gray-600 text-md mb-1">
            <span className="font-medium">{job.company}</span> — {job.location}
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
              {job.jobType}
            </span>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">{job.description}</p>
        </div>
      ))}
    </div>
  );
}
