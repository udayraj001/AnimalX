import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Destination from "./Destination";
import Tour from "./Tour";
import Footer from "../Footer/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  
  const media = [
    { type: "image", src: "https://i.pinimg.com/564x/e5/b3/33/e5b3331b0c23ca1e4b9d73e6bfa249d5.jpg" },
    { type: "image", src: "https://i.pinimg.com/564x/28/85/29/288529c362f521af7c15e23fa8619395.jpg" },
    { type: "image", src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/8f/91/fb/caption.jpg?w=1600&h=1100&s=1" } // Replace with your actual video URL
  ];

  // State to keep track of the current media index
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    // Set up the interval to change the media every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 10000); // 10000 ms = 10 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [media.length]);

  // Determine the current media type and source
  const currentMedia = media[currentMediaIndex];
  const isImage = currentMedia.type === "image";

  return (
    <>
    <Navbar/>
      <Hero
        cName="hero"
        heroImg={isImage ? currentMedia.src : null} // Use the current image URL if it's an image
        heroVideo={!isImage ? currentMedia.src : null} // Use the current video URL if it's a video
        title="Your Journey, Our Passion!"
        text="Discover More, Explore More, Be More with AnimalX!"
        btnText="Set Plan"
        btnClass="show"
        url="/pricing"
      />
      <Destination />
      <Tour />
      <Footer />
    </>
  );
};

export default Home;
