import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-top">
        <div className="nav-top-links">
          <a href="#">About</a>
          <a href="#">Leadership</a>
          <a href="#">Giving Back</a>
          <a href="#">Press Center</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="nav-bottom">
        <div className="nav-left">
          <img
            className="nav-logo"
            src="http://www.tbccorp.com/Content/images/TBC-Corporation-Logo.png"
            alt="tbc logo" />
        </div>
        
        <div className="nav-right">
          <a href="#">Retail <br /> Brands</a>
          <a href="#">Franchise <br /> Brands</a>
          <a href="#">Tire <br /> Brands</a>
          <a href="#">Wholesale <br /> Brands</a>
          <a href="#">Fleet <br /> Services</a>
          <a href="#">Real <br /> Estate</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;