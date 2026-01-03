import { Routes, Route } from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRoute from "./components/auth/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEventForm from "./pages/admin/AdminEventForm";
import EditEvent from "./pages/admin/EditEvent";
import AdminEventMedia from "./pages/admin/AdminEventMedia";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin routes - keep outside MainLayout for different theme */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
        <Route path="/admin/events/new" element={<AdminEventForm />} />
        <Route path="/admin/events/edit/:id" element={
          <AdminRoute>
            <EditEvent />
          </AdminRoute>
        } />
        <Route path="/admin/media" element={
          <AdminRoute>
            <AdminEventMedia />
          </AdminRoute>
        } />
      </Routes>
    </MainLayout>
  );
}

export default App;
