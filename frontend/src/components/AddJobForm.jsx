import { useState } from 'react';

export default function AddJobForm({ onAdd }) {
  const [form, setForm] = useState({
    jobRole: '',
    company: '',
    location: '',
    jobType: 'Remote',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(v => !v.trim())) return alert('All fields required');
    onAdd(form);
    setForm({ jobRole: '', company: '', location: '', jobType: 'Remote', description: '' });
  };

  return (
   <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
  <h2 className="text-xl font-semibold text-gray-700">Add a New Job</h2>

  <input name="jobRole" value={form.jobRole} onChange={handleChange} placeholder="Job Role"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

  <input name="company" value={form.company} onChange={handleChange} placeholder="Company"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

  <input name="location" value={form.location} onChange={handleChange} placeholder="Location"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

  <select name="jobType" value={form.jobType} onChange={handleChange}
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option>Remote</option>
    <option>Onsite</option>
    <option>Hybrid</option>
  </select>

  <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

  <button type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-md shadow hover:from-blue-600 hover:to-indigo-600 transition">
    ➕ Add Job
  </button>
</form>

  );
}
