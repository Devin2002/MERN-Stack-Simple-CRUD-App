import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  // --- Images list ---
  const images = [
    "https://picsum.photos/1000/400?random=1",
    "https://picsum.photos/1000/400?random=2",
    "https://picsum.photos/1000/400?random=3",
  ];

  const [current, setCurrent] = useState(0);

  // --- Auto change effect ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4s interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Home Page</h2>

      {/* Static intro paragraph */}
      <p className="intro-text">
        Our website is built to deliver the best user experience with modern
        design and smooth functionality. We aim to provide useful resources and
        a seamless browsing experience for all our visitors.
      </p>

      {/* Slider container */}
      <div className="slider">
        <img
          key={current}
          src={images[current]}
          alt="slider"
          className="slider-img slide"
        />
      </div>
    </div>
  );
}

export default Home;
