import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const HamburgerPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  
  const pizzas = [
    {id:19, name: 'Angus Hamburger', price: '$150' },
    {id:20, name: 'Bufalo Burger', price: '$120' },
    {id:21, name: 'Islak Hamburger', price: '$70' },
    {id:22, name: 'Çizburger', price: '$100' },
    {id:23, name: 'Boca Burger', price: '$120' },
    {id:24, name: 'Biber Burger', price: '$110' },
    {id:25, name: 'Tereyağlı Hamburger', price: '$140' },
    {id:26, name: 'Spesiyal Burgerimiz', price: '$180' },

  ];

  return (
    <div className="pizza-page">
      <div className="menu-list">
        {pizzas.map((pizza, index) => (
          <div key={index} className="menu-item">
            {pizza.name} <span>{pizza.price}</span>
            <button onClick={() => addToCart(pizza)}>Sepete Ekle</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Sepetim</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} ({item.quantity} adet) - Fiyat: {item.price}
            <button onClick={() => removeFromCart(item.id)} className="remove-button">Kaldır</button>
          </div>
        ))}
        <div>
          Toplam Ücretiniz: $
          {cart.reduce((total, currentItem) => total + (currentItem.quantity * parseFloat(currentItem.price.replace('$', ''))), 0).toFixed(2)}
        </div>
        <Link to="/order-confirmation" className="confirm-button">Siparişimi Onayla</Link>
      </div>
    </div>
  );
};

export default HamburgerPage;
