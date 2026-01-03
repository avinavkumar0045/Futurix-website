import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) navigate("/admin");
    else alert(error.message);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a002b]">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 p-8 rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold">Admin Login</h2>

        <input
          className="w-full p-2 rounded bg-black/40"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 rounded bg-black/40"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-cyan-500 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
