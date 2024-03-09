// Menu.js

import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  // Dummy data for categories and menu items
  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Breakfast'];
  const menuItems = [
    { id: 1, category: 'Appetizers', name: 'Spring Rolls', price: '$5.99', image: '' },
    { id: 2, category: 'Main Course', name: 'Chicken Alfredo', price: '$12.99', image: 'https://th.bing.com/th/id/OIP.TV0CNK9kOHq4f8XOokvQAQHaHQ?w=736&h=722&rs=1&pid=ImgDetMain' },
    { id: 3, category: 'Desserts', name: 'Chocolate Cake', price: '$7.99', image: 'https://th.bing.com/th/id/OIP.3qiOYdcpu2jl8G9ln1phLgHaE8?rs=1&pid=ImgDetMain' },
    { id: 4, category: 'Breakfast', name: 'Chocolate Cake', price: '$7.99', image: 'https://th.bing.com/th/id/OIP.3qiOYdcpu2jl8G9ln1phLgHaE8?rs=1&pid=ImgDetMain' },
    // Add more menu items as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenuItems = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-container">
      {/* Categories */}
      <div className="menu-categories">
        {categories.map((category) => (
          <div
            key={category}
            className={`category-box ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredMenuItems.map((item) => (
          <div key={item.id} className="menu-card">
            {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
            <div className="menu-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
