import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-600">Fine Furniture</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Discover stylish, comfortable, and high-quality furniture for your
          home. Start exploring our exclusive collections now!
        </p>

        <div className="flex flex-col space-y-3">
          <Link
            to="/login"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition"
          >
            Create an Account
          </Link>
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Fine Furniture. All rights reserved.
      </footer>
    </div>
  );
}
