import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-heading">Welcome To Diet Point</h1>
        <p className="hero-text">Discover healthy food options crafted for gym enthusiasts!</p>
        <div className="cards-container">
          <Card
            image="https://via.placeholder.com/150"
            title="Quinoa Power Bowl"
            description="Packed with proteins and vitamins, perfect post-workout meal."
          />
          <Card
            image="https://via.placeholder.com/150"
            title="Grilled Chicken & Veggies"
            description="Low in fat, high in nutrients for muscle recovery."
          />
          <Card
            image="https://via.placeholder.com/150"
            title="Berry Boost Smoothie Bowl"
            description="Antioxidant-rich for a refreshing start to your day."
          />
        </div>
        <Link to="/menu" className="hero-button">Explore Menu & Book a Table</Link>
      </section>
    </div>
  );
};

export default Home;
