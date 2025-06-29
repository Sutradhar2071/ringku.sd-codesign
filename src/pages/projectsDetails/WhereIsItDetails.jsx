import React from "react";

const WhereIsItDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold text-primary">WhereIsIt - Lost & Found</h1>
      <p className="text-base-content">
        A full-stack MERN app to help users post and find lost & found items. It includes secure auth, posting system, status update, and full CRUD operations.
      </p>
      <ul className="list-disc list-inside text-base-content">
        <li>JWT Authentication with Firebase</li>
        <li>Post Lost/Found items</li>
        <li>Update/Delete own posts</li>
        <li>Status update: Found / Resolved</li>
        <li>Search & sort items</li>
        <li>Dark/Light mode support</li>
        <li>Responsive UI with animations</li>
      </ul>
      <div className="flex gap-4">
        <a href="https://regal-speculoos-67aec5.netlify.app/" target="_blank" rel="noreferrer" className="btn btn-outline btn-primary">Live</a>
        <a href="https://github.com/Sutradhar2071/whereisit-client" target="_blank" rel="noreferrer" className="btn btn-outline btn-secondary">GitHub</a>
      </div>
    </div>
  );
};

export default WhereIsItDetails;