import React from 'react';

const MenuCard = ({ image, name, price, description }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-card-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="menu-card-actions">
        <span className="price">{price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;