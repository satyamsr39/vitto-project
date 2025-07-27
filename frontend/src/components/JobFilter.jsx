export default function JobFilter({ onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prev => ({ ...prev, [name]: value }));
  };

  return (
   <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-4 items-start md:items-end">
  <div className="w-full md:w-1/3">
    <label className="block text-sm font-medium text-gray-600 mb-1">Job Type</label>
    <select name="jobType" onChange={handleChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">All Types</option>
      <option value="Remote">Remote</option>
      <option value="Onsite">Onsite</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>

  <div className="w-full md:w-2/3">
    <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
    <input name="location" onChange={handleChange} placeholder="Search by location"
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
</div>

  );
}
