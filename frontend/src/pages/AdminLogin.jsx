import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 🔹 If already logged in, redirect to /admin
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = "admin123"; // ✅ Change this to your own secret

    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true"); // Save login state
      navigate("/admin"); // Redirect to admin page
    } else {
      setError("Incorrect password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1120] text-white">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 text-black rounded mb-3"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-400 mt-3">{error}</p>}
    </div>
  );
}
