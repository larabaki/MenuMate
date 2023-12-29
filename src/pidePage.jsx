import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const PidePage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:61, name: 'Kuşbaşılı Pide', price: '$160' },
    {id:62, name: 'Pastırmalı Pide', price: '$150' },
    {id:63,name: 'Ispanaklı Pide', price: '$120' },
    {id:64, name: 'Karışık Pide', price: '$170' },
    {id:65, name: 'Sucuklu Pide', price: '$150' },
    {id:66, name: 'Kavurmalı Pide', price: '$180' },
    {id:67, name: 'Lahmacun (Adet)', price: '$50' },
    {id:68, name: 'Kıymalı Pide', price: '$180' },
    {id:69, name: 'Peynirli Pide', price: '$150' },
   
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

export default PidePage;
