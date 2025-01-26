import React, { useState, useEffect } from 'react';
import './BannerSection.css';

// Banner data (images and text)
const bannerData = [
  {
    image: "https://cdn.carhp.com/images/news/featured_2024-kia-sorento-gets-striking-design-and-innovative-features-with-x-pro-trim_1707107679.png?mode=crop&amp;overlay=https://cdn.carhp.com/images/carhp_logo_white.png&amp;overlay_top=10&amp;overlay_left=10&amp;overlay_width_pct=0.1&amp;width=1260&amp;height=630",
    video: "https://www.toyota.com/content/dam/toyota/vehicles/2025/camry/mlp/welcome-mat/CAM_MY25_Desktop.mp4?wid=1920", 
    text: "Welcome to Our Car Dealership!"
  },
  {
    image: "https://avatars.mds.yandex.net/i?id=6d35f88bcc51ac9af4dd9412ee3ce09b640994e4-8351914-images-thumbs&n=13",
    text: "Explore New Cars with Great Offers"
  },
  {
    image: "https://avatars.mds.yandex.net/i?id=9a0729bfa6827c06f9e570122181affcc2a9bcb2-8497316-images-thumbs&n=13",
    text: "Join Our Membership for Exclusive Benefits"
  }
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll functionality: Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  return (
    <div className="banner-container">
      <div className="banner-slide">
        {/* Conditional rendering of image or video */}
        {bannerData[currentSlide].video ? (
          <video className="banner-video" autoPlay loop muted>
            <source src={bannerData[currentSlide].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="banner-image" style={{ backgroundImage: `url(${bannerData[currentSlide].image})` }} />
        )}
        
        <div className="banner-text">
          <h2>{bannerData[currentSlide].text}</h2>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        <button onClick={handlePrev} className="prev-btn">Prev</button>
        <button onClick={handleNext} className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default BannerSlider;
