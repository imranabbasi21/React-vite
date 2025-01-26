import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Header.css'; // Your CSS file for styling

// Sample components for routes
const Home = () => <div></div>;
const NewCar = () => <div>New Car Page</div>;
const Inspeq = () => <div>Inspeq Page</div>;
const MembershipForm = () => <div>Membership Form Page</div>;

const HeaderFun = () => {
  return (
    <Router>
      <div className="mainHeader">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <a href="/">
              <img
                className="KiaLogo"
                src="https://avatars.mds.yandex.net/i?id=ebde237600a3286e746fd304014f182a07630505-9863357-images-thumbs&ref=rim&n=33&w=356&h=200"
                alt="Kia Logo"
              />
            </a>
          </div>
          <nav className="nav-container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new-car">New Car</Link></li>
              <li><Link to="/inspeq">Inspeq</Link></li>
              <li><Link to="/membership-form">Membership Form</Link></li>
            </ul>
          </nav>
          <form className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </header>

        {/* Main Content Section */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-car" element={<NewCar />} />
            <Route path="/inspeq" element={<Inspeq />} />
            <Route path="/membership-form" element={<MembershipForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default HeaderFun;
