// src/app/App.jsx
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const AnimalsPage = lazy(() => import("../pages/AnimalsPage.jsx"));
const ContactPage = lazy(() => import("../pages/ContactPage.jsx"));
const AdoptionFormPage = lazy(() => import("../pages/AdoptionFormPage.jsx"));
const CareersPage = lazy(() => import("../pages/CareersPage.jsx"));
const VolunteerPage = lazy(() => import("../pages/VolunteerPage.jsx"));
const StoriesPage = lazy(() => import("../pages/StoriesPage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<HomePage title="Welcome to Furever Friends Rescue" />}
            />
            <Route path="about" element={<AboutPage title="About Us" />} />
            <Route
              path="animals"
              element={<AnimalsPage title="Available Animals" />}
            />
            <Route
              path="contact"
              element={<ContactPage title="Contact Us" />}
            />

            {/* Adoption */}
            <Route path="adoption" element={<AdoptionFormPage />} />
            <Route path="adoption/:animalName" element={<AdoptionFormPage />} />

            {/* Careers + Volunteering */}
            <Route
              path="careers"
              element={
                <CareersPage title="Join the Circus (of Cuddles and Chaos) at Furever Friends Rescue!" />
              }
            />
            <Route
              path="volunteer"
              element={<VolunteerPage title="Volunteer with Us" />}
            />

            {/* Stories */}
            <Route
              path="stories"
              element={<StoriesPage title="Adoption Stories" />}
            />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
