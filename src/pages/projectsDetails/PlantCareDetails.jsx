import React from "react";

const PlantCareDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-4">
      <h1 className="text-3xl font-bold text-primary">Plant Care Tracker</h1>
      <p className="text-base-content">
        A plant management web app where users can add, view, update and delete plants. It supports reminders, sorting, and a clean UI experience.
      </p>
      <ul className="list-disc list-inside text-base-content">
        <li>Add/Update/Delete plants</li>
        <li>User-specific "My Plants" page</li>
        <li>Sorting by latest/oldest</li>
        <li>Dark/Light mode support</li>
        <li>Date-fns for date formatting</li>
        <li>Firebase Auth + Protected Routes</li>
      </ul>
      <div className="flex gap-4">
        <a href="https://plant-care-app-92575.web.app/" target="_blank" rel="noreferrer" className="btn btn-outline btn-primary">Live</a>
        <a href="https://github.com/Sutradhar2071/plant-client" target="_blank" rel="noreferrer" className="btn btn-outline btn-secondary">GitHub</a>
      </div>
    </div>
  );
};

export default PlantCareDetails;