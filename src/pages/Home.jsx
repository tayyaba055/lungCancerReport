import { useState, useEffect } from "react";

const Home = () => {
  const images = ["/assets/carousel-a.jpg", "/assets/carousel-b.jpg"];

  const texts = [
    "Unleash the Power of Tomorrow's Connectivity Today.",
    "Empower Success with Future-Ready Solutions.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image index
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh]  overflow-hidden">
      {/* Image 1 - Current Image */}
      <img
        src={images[index]}
        alt="Home Banner"
        className="absolute w-full h-full object-cover transition-opacity duration-10000 opacity-100"
      />

      {/* Image 2 - Next Image */}
      <img
        src={images[(index + 1) % images.length]}
        alt="Home Banner"
        className="absolute w-full h-full object-cover transition-opacity duration-10000 opacity-0"
        style={{
          opacity: 1,
          transitionDelay: "5s", // Delay the next image's fade-in until the current one has fully faded out
        }}
      />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        {texts[index]}
      </div>
    </div>
  );
};

export default Home;
