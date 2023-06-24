import React from "react";

const Navbar = ({ barRef, lineRef, pieRef, doughnutRef }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#barChart" className="nav-link">
            Bar Chart
          </a>
        </li>
        <li className="nav-item">
          <a href="#lineChart" className="nav-link">
            Line Chart
          </a>
        </li>
        <li className="nav-item">
          <a href="#pieChart" className="nav-link">
            Pie Chart
          </a>
        </li>
        <li className="nav-item">
          <a href="#doughnutChart" className="nav-link">
            Doughnut Chart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
