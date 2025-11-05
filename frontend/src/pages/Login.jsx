import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      console.log("Login Response:", response.data);

      // Show success alert
      alert("✅ Login successful!");

      // Optionally, save JWT token to localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to homepage or dashboard
      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error);
      alert(
        error.response?.data?.message ||
          "❌ Invalid credentials. Please try again."
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
          src="images1.jpg"
          alt="Modern Furniture Living Room"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex justify-center items-center md:w-1/2 w-full p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back!
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Buy & sell your exclusive products only on{" "}
            <span className="font-semibold text-gray-800">Furnixar</span>
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
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
                placeholder="********"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-yellow-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-yellow-600" />
                Remember Me
              </label>
              <a href="#" className="text-yellow-600 hover:underline">
                Forgot Password?
              </a>
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="text-yellow-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
