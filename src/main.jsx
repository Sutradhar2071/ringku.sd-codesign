import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// ✅ Import project details pages
import WhereIsItDetails from "../src/pages/projectsDetails/WhereIsItDetails";
import PlantCareDetails from "../src/pages/projectsDetails/PlantCareDetails";
import JobTrackDetails from "../src/pages/projectsDetails/JobTrackDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },

      // ✅ Project details routes
      { path: "projects/whereisit", Component: WhereIsItDetails },
      { path: "projects/plantcare", Component: PlantCareDetails },
      { path: "projects/jobtrack", Component: JobTrackDetails },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
