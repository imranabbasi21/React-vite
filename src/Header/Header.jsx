import React from 'react';
import './Header.css'; // Your CSS file for styling

const Header = () => {
  return (
    <header className="header">
          <div className="logo">
            <a href="/">
              <img
                className="KiaLogo"
                // src="https://kia.car.com/assets/img/kia@2x.png"
                // alt="Kia Logo"
                  // src="https://logodix.com/logo/5396.png"
                  // alt="Kia Logo"
                  src="https://avatars.mds.yandex.net/i?id=ebde237600a3286e746fd304014f182a07630505-9863357-images-thumbs&ref=rim&n=33&w=356&h=200"
                  alt="Kia Logo"
              />
            </a>
          </div>
          <div className="nav-container">
            
              <ul>
                <li>Home</li>
                <li>New Car</li>
                <li>Inspeq</li>
                <li>MemberShip Form</li>
              </ul>
          </div>
          <form  className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
               
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>

          {/* <button className="toggle-btn" onClick={toggleMenu}>
            ☰
          </button> */}
        </header>
  );
};




export default Header;
