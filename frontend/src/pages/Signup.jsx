import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 👇 Sending data to backend API (port 8000)
      const response = await axios.post("http://localhost:8000/api/signup", {
        
        name,
        email,
        password,
      });

      console.log("Server Response:", response.data);
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
      alert(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt="Modern Furniture Setup"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex justify-center items-center md:w-1/2 w-full p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create your account
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Join{" "}
            <span className="font-semibold text-gray-800">Furnixar</span> and
            explore stylish, modern furniture for your dream home.
          </p>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label
                className="block text-gray-600 text-sm mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-yellow-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-600 text-sm mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-yellow-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-600 text-sm mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-yellow-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold text-white transition ${
                loading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
