import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextProvider/Auth";
import { PATIENT, DOCTOR } from "../utils/constants/userTypes.js";

const Login = ({ setIsLoggedIn }) => {
  const { role, setRole } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formRole, setFormRole] = useState(PATIENT);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRole(formRole);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#94b9ff] via-violet-400 to-[#67c5d3]">
      <div className="px-8 py-6 mt-4 w-1/3 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <label className="block">Role</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id={PATIENT}
                  name="role"
                  value={PATIENT}
                  checked={formRole === PATIENT}
                  onChange={(e) => setFormRole(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="patient" className="mr-4">
                  Patient
                </label>
                <input
                  type="radio"
                  id={DOCTOR}
                  name="role"
                  value={DOCTOR}
                  checked={formRole === DOCTOR}
                  onChange={(e) => setFormRole(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="doctor">Doctor</label>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
