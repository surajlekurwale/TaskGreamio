import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <style>
        {`
          .navbar {
            background-color: #2D3748;
            color: white;
            padding: 16px;
          }
          .navbar ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          .navbar li {
            display: flex;
            align-items: center;
          }
          .navbar img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 8px;
          }
          .navbar a {
            color: white;
            text-decoration: none;
            margin: 0 16px;
            transition: color 0.3s ease;
            font-weight: 500;
          }
          .navbar a:hover {
            color: #B2E0F0; /* Lighter color on hover for better UX */
          }
          .navbar .logo {
            font-weight: bold;
            font-size: 24px;
          }
        `}
      </style>
      <ul>
        <li>
          <img 
            src="https://as1.ftcdn.net/v2/jpg/01/58/47/02/1000_F_158470254_nfhPgmYdjLmUUKT9q2AhwLXr9Rg2eSzH.jpg" 
            alt="Logo" 
          />
          <a href="/" className="logo">Logo</a>
        </li>
        <li>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
