import React, { useState } from 'react';

function Intro() {
    // const [count, setCount] = useState(0)
  
    const showPopup = () => {
      alert("Button submitted");
    }
      const profile = {
        name: 'Imran Abbasi',
        job: 'React Web Developer',
        bio: 'A passionate developer who loves building React web apps.',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=6cca0de5884e51152f929e020731af78aa4c69ba-5315583-images-thumbs&n=13',  
        contact: 'imranabbasi21@gmail.com',
        location: 'Karachi, Pakistan',
      };
    
    return (
      <>  
        {/* <h1>Salam, my first demo is ready</h1> */}
      <div className="profile-card">
        <img src={profile.imageUrl} alt="Profile" className="profile-image" />
        <h2>{profile.name}</h2>
        <h3>{profile.job}</h3>
        <p>{profile.bio}</p>
        <div className="contact">
          <p><i className="fa-regular fa-envelope"></i> <strong>Email:</strong> {profile.contact}</p>
          <p><i className="fa-solid fa-location-dot"></i><strong> Location:</strong> {profile.location}</p>
        </div>
          <hr />
          <div className="socialIcons">
          <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter"></i></a>
          <a href=""><i className="fa-brands fa-square-instagram"></i> </a>
          </div>
      </div>
        <p className='zoom-paragraph'><strong>Fast Build Time: </strong>Vite provides extremely fast build and hot module replacement (HMR) for React apps.</p>
        <p className='zoom-paragraph'><strong>Modern Tooling: </strong>It uses ES modules for faster development and optimized bundling.</p>
        <p className='zoom-paragraph'><strong>Easy Setup: </strong>Vite simplifies React project setup with minimal configuration.</p>
        
          <button onClick={showPopup}> Button</button>
      </>
    )
  }

  export default Intro;