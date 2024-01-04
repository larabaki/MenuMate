import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.css'

const categories = [
    { id: 'hamburger', name: 'Hamburgers', items: ['Classic Burger', 'Cheese Burger', 'Veggie Burger', 'Bufalo Burger','Çizburger'] },
    { id: 'salads', name: 'Salads', items: ['Sezar Salata', 'Kabak Salatası', 'Dereotlu Cevizli Salata','Fettuş Salatası'] },
    { id: 'chicken', name: 'Chicken', items: ['Grilled Chicken', 'Chicken Wrap', 'Chicken Caesar Salad'] },
    { id: 'pizza', name: 'Pizza', items: ['Pepperoni Pizza', 'Margherita Pizza', 'Hawaiian Pizza'] },
    { id: 'maindishes', name: 'Main Dishes', items: ['Pazı Curry', 'Bal Kabağı Sinkonta', 'Tavuk Piccata','Fried Rice','Patates Püreli Karides','Hindistan Cevizli Sütlü Kuru Fasulye'] },
    { id: 'pasta', name: 'Pasta', items: ['Spaghetti Bolognese', 'Penne Arrabiata', 'Fettuccine Alfredo'] },
    { id: 'desserts', name: 'Desserts', items: ['Cheesecake', 'Brownie', 'Ice Cream'] },
    { id: 'seafood', name: 'Seafood', items: ['Karides Tava', 'Karides Güveç', 'Veloute','Ahtapot Izgara','Deniz Tarağı'] },
    { id: 'pide', name: 'Pide & Lahmacun', items: ['Kuşbaşılı Pide', 'Lahmacun', 'Pastırmalı Pide','Sucuklu Pide','Kaşarlı Pide','Kıymalı Pide'] },
    { id: 'breakfast', name: 'Breakfast', items: ['Full English Breakfast', 'Pancakes', 'Omelette'] },
    { id: 'drinks', name: 'Drinks', items: ['Sprite', 'Ayran', 'Şeftali Meyve Suyu','Karışık Meyve Suyu','Ice-Tea Mango','Ice-Tea Şeftali','Ice-Tea Limon'] }
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
