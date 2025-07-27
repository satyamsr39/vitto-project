// src/components/JobForm.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function JobForm() {
  const [form, setForm] = useState({
    jobRole: '',
    company: '',
    location: '',
    jobType: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        navigate('/');
      } else {
        const errData = await res.json();
        setError(errData.error || 'Failed to add job. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
            <Link to="/" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                &larr; Back to Jobs
            </Link>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Post a New Job
            </h1>
            <p className="mt-2 text-lg text-slate-600">
              Fill out the form below to post a new job listing on our board.
            </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-slate-900/5 sm:rounded-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Role */}
            <div>
              <label htmlFor="jobRole" className="block text-sm font-semibold leading-6 text-slate-900">
                Job Role
              </label>
              <input
                id="jobRole" name="jobRole" placeholder="e.g. Frontend Developer"
                value={form.jobRole} onChange={handleChange} required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-slate-900">
                Company
              </label>
              <input
                id="company" name="company" placeholder="e.g. Acme Inc."
                value={form.company} onChange={handleChange} required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold leading-6 text-slate-900">
                Location
              </label>
              <input
                id="location" name="location" placeholder="e.g. New York, NY or Remote"
                value={form.location} onChange={handleChange} required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
            {/* Job Type */}
            <div>
              <label htmlFor="jobType" className="block text-sm font-semibold leading-6 text-slate-900">
                Job Type
              </label>
              <select
                id="jobType" name="jobType" value={form.jobType} onChange={handleChange} required
                className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <option value="">Select a type...</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-slate-900">
              Job Description
            </label>
            <textarea
              id="description" name="description" placeholder="Describe the role, responsibilities, etc."
              value={form.description} onChange={handleChange} required
              rows={6}
              className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4 border-t border-slate-900/10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;
