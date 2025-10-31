import React, { useEffect, useState } from "react";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Basic password state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const correctPassword = "admin123"; // <-- change this to your preferred password

  // 🔐 Handle password submit
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect password!");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return; // Only fetch if logged in

    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);

        if (Array.isArray(data.messages)) {
          setMessages(data.messages);
        } else {
          console.error("Unexpected response format:", data);
          setMessages([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setError("Failed to load messages");
        setLoading(false);
      });
  }, [isAuthenticated]);

  // 🔒 Show login page first
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0B1120] text-white">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Admin Login</h2>
        <form onSubmit={handleLogin} className="bg-blue-900 p-8 rounded-lg shadow-lg w-80 text-center">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded text-black"
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
            Login
          </button>
          {loginError && <p className="text-red-400 mt-3">{loginError}</p>}
        </form>
      </div>
    );
  }

  // ✅ Show dashboard if logged in
  if (loading) return <p className="text-center text-gray-300 mt-10">Loading messages...</p>;
  if (error) return <p className="text-center text-red-400 mt-10">{error}</p>;

  return (
    <section className="py-16 text-center text-white bg-[#0B1120] min-h-screen">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Messages Dashboard</h2>
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="min-w-full border border-blue-700 rounded-lg">
          <thead className="bg-blue-900 text-blue-200">
            <tr>
              <th className="px-4 py-2 border border-blue-700">Name</th>
              <th className="px-4 py-2 border border-blue-700">Email</th>
              <th className="px-4 py-2 border border-blue-700">Message</th>
              <th className="px-4 py-2 border border-blue-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-gray-400">
                  No messages yet.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg._id} className="hover:bg-blue-950 transition">
                  <td className="px-4 py-2 border border-blue-700">{msg.name}</td>
                  <td className="px-4 py-2 border border-blue-700">{msg.email}</td>
                  <td className="px-4 py-2 border border-blue-700 text-left">{msg.message}</td>
                  <td className="px-4 py-2 border border-blue-700">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
