import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".hero-subtext",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="hero-text text-5xl md:text-6xl font-bold mb-4">
          Elevate Your Space with Modern Furniture
        </h1>
        <p className="hero-subtext text-lg md:text-xl mb-8 text-gray-200">
          Discover stylish designs crafted for comfort and elegance.
        </p>
        <button className="hero-btn px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
