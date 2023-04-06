import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import restaurantImage from "../images/restauranfood.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${restaurantImage})` }}>
        <div className="headerContainer">
          <h1>Little lemon restaurant</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
