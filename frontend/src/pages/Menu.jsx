import React from 'react';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const dishes = [
    { id: 1, name: 'Oatmeal Bowl', price: '$8', description: 'Healthy oatmeal with fruits and nuts.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Avocado Toast', price: '$10', description: 'Whole grain toast with avocado and spices.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Smoothie Bowl', price: '$9', description: 'Refreshing smoothie bowl with berries.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="menu">
      <section className="menu-section">
        <h2>Breakfast</h2>
        <div className="menu-cards">
          {dishes.map((dish) => (
            <MenuCard key={dish.id} {...dish} />
          ))}
        </div>
      </section>
      {/* Repeat for Lunch and Dinner */}
    </div>
  );
};

export default Menu;