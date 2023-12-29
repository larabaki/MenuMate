import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const AnaYemekPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  
  const pizzas = [
    {id:1, name: 'Pazı Curry', price: '$110' },
    {id:2,name: 'Bal Kabağı Sinkonta', price: '$150' },
    {id:3, name: 'Tavuk Piccata', price: '$130' },
    {id:4, name: 'Fried Rice', price: '$60' },
    {id:5, name: 'Patates Püreli Karides', price: '$160' },
    {id:6, name: 'Hindistan Cevizli Sütlü Kuru Fasulye', price: '$80' },
    {id:7, name: 'Tavuk Tikka Masala', price: '$70' },
    {id:8, name: 'Zürbiye', price: '$145' },
    {id:9,name: 'Moğol Bifteği', price: '$90' },
  
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

export default AnaYemekPage;
