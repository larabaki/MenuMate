import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const SalataPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:79, name: 'Sezar Salata', price: '$125' },
    {id:80, name: 'Tavuklu Göbek Salata', price: '$150' },
    {id:81, name: 'Yıldız Şehriye Salata', price: '$100' },
    {id:82, name: 'Kabak Salatası', price: '$100' },
    {id:83, name: 'Dereotlu Cevizli Salata', price: '$100' },
    {id:84, name: 'Makarna Salatası', price: '$110' },
    {id:85, name: 'Fettuş Salatası', price: '$110' },
   
   
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

export default SalataPage;
