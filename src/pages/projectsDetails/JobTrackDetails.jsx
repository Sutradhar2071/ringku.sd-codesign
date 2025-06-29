import React from "react";

const JobTrackDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold text-primary">JobTrack - Job Listing App</h1>
      <p className="text-base-content">
        A mid-level job listing app with authentication and filter options.
      </p>
      <ul className="list-disc list-inside text-base-content">
        <li>Filter jobs by category</li>
        <li>Job details modal with Apply button</li>
        <li>Login/Register with Firebase</li>
        <li>Clean UI with TailwindCSS</li>
        <li>Local data-based listing</li>
      </ul>
      <div className="flex gap-4">
        <a href="https://job-tracker-by-partho1.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-outline btn-primary">Live</a>
        <a href="https://github.com/Sutradhar2071/job-track" target="_blank" rel="noreferrer" className="btn btn-outline btn-secondary">GitHub</a>
      </div>
    </div>
  );
};

export default JobTrackDetails;