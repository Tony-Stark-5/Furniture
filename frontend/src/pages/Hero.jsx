// Hero.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Hero() {
  const navigate = useNavigate();

  // Show toast on mount (optional)
  useEffect(() => {
    toast.success("🎉 Welcome to Furnixar!");
  }, []);

  // Inject inline CSS dynamically (same as your version)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body { font-family: 'Poppins', sans-serif; margin:0; background:white; }
      .navbar {
        display:flex; justify-content:space-between; align-items:center;
        padding:20px 60px; background:white; border-bottom:1px solid #eee;
      }
      .nav-links a {
        margin:0 10px; text-decoration:none; color:#222; font-weight:500;
      }
      .nav-links a:hover { color:#A0835B; }
      .hero {
        display:flex; justify-content:space-between; align-items:center;
        padding:80px; min-height:calc(100vh - 80px);
      }
      .hero-text { flex:1; padding-right:40px; }
      .hero-text h1 { font-size:48px; font-weight:700; margin-bottom:20px; }
      .hero-text p { color:#555; margin-bottom:30px; line-height:1.6; }
      .shop-btn {
        background:#A0835B; color:white; padding:12px 30px; border:none;
        font-size:16px; cursor:pointer; border-radius:6px;
      }
      .shop-btn:hover { background:#8b6c48; }
      .hero img { width:500px; border-radius:20px; box-shadow:0 4px 20px rgba(0,0,0,0.1); }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold">Furnixar</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>New Arrival Alert — Your Dream Furniture Awaits!</h1>
          <p>
            Discover our premium collection of sofas, tables, and home decor.
            Perfect blend of comfort and elegance for every space.
          </p>
          <button className="shop-btn" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>

        <img
          src="https://i.pinimg.com/736x/e4/76/3b/e4763b5945ea59ae8b7be88723773317.jpg"
          alt="Furniture"
        />
      </section>
    </>
  );
}


