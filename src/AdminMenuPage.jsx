import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.css'

const categories = [
  { id: 'burgers', name: 'Hamburgers', items: ['Boca Burger', 'Biber Burger'] },
  { id: 'salads', name: 'Salads', items: ['Greek Salad', 'Caesar Salad'] },
  // ... other categories
];

const AdminMenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const addItem = () => {
    console.log('Ekleme işlemi');
    // Burada ekleme işlemi için mantık 
  };

  const deleteItem = () => {
    console.log('Silme işlemi');
    // Burada silme işlemi için mantık 
  };

  const editItem = () => {
    console.log('Düzenleme işlemi');
    // Burada düzenleme işlemi için mantık 
  };

  const handleClickCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="admin-menu-page">
      <header>
        <Link to="/chef-screen" className="chef-button">Şef Ekranı</Link>
      </header>
      <h1>"Restoran" MenuMate</h1>
      <div className="menu-categories">
        {categories.map((category) => (
          <button 
            key={category.id} 
            onClick={() => handleClickCategory(category.id)}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
          >
            
            {category.name}
          </button>
        ))}
       <button onClick={addItem} className="menu-action-addButton">Ekle</button>
      </div> 
      <div className="menu-items">
        {activeCategory && categories.find(c => c.id === activeCategory).items.map((item) => (
          <div key={item} className="menu-item">
            {item}
            <div className="menu-actions">
        <button onClick={deleteItem} className="menu-action-button">Sil</button>
        <button onClick={editItem} className="menu-action-button">Düzenle</button>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenuPage;
