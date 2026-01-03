import AdminEvents from "./AdminEvents";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white px-6 py-10">
      
      {/* Header */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">
          {/* Create Event */}
          <button
            onClick={() => navigate("/admin/events/new")}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-lg transition"
          >
            + Create Event
          </button>

          {/* Manage Media */}
          <button
            onClick={() => navigate("/admin/media")}
            className="bg-fuchsia-500 hover:bg-fuchsia-400 text-black font-semibold px-5 py-2 rounded-lg transition"
          >
            🖼 Manage Media
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <AdminEvents />
      </div>
    </div>
  );
}
