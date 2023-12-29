import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const MakarnaPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:51, name: 'Fettucini Alfredo', price: '$150' },
    {id:52, name: 'Bolonez Soslu Makarna', price: '$120' },
    {id:53, name: 'Penne Alfredo', price: '$130' },
    {id:54, name: 'Pesto Soslu Makarna', price: '$130' },
    {id:55, name: 'Kremalı Körili Makarna', price: '$130' },
    {id:56, name: 'Mac And Cheese', price: '$130' },
    {id:57, name: 'Domatesli Burgu Makarna', price: '$110' },
    {id:58, name: 'Lazanya', price: '$300' },
    {id:59, name: 'Gnocchi', price: '$250' },
    {id:60, name: 'Napoliten Soslu Makarna', price: '$180' },
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

export default MakarnaPage;
