import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const DenizPage = () => {
    const { cart, addToCart, removeFromCart } = useCart();
    
  const pizzas = [
    {id:10, name: 'Karides Tava', price: '$315' },
    {id:11, name: 'Karides Güveç', price: '$312' },
    {id:12,name: 'Veloute ', price: '$110' },
    {id:13, name: 'Kalamar Tava', price: '$315' },
    {id:14, name: 'Beluga', price: '$190' },
    {id:15, name: 'Ahtapot Izgara', price: '$400' },
    {id:16, name: 'Deniz Tarağı', price: '$280' },
    {id:17, name: 'Hamsi Buğlama', price: '$310' },
    {id:18, name: 'Levrek  Marin', price: '$400' },
    
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

export default DenizPage;
