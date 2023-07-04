import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="ajaykoli-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
