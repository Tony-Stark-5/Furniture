import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2020/05/03/08/32/living-room-5120006_1280.jpg')", // 🪑 realistic 3D furniture room
      }}
    >
      {/* dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* main content card */}
      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-10 max-w-lg w-full z-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow-lg">
          Welcome to <span className="text-blue-600">Fine Furniture</span>
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Discover modern, luxurious 3D-inspired furniture collections that
          bring life and elegance to your space.
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

      {/* footer */}
      <footer className="relative z-10 mt-10 text-sm text-gray-200">
        © {new Date().getFullYear()} Fine Furniture. All rights reserved.
      </footer>
    </div>
  );
}





