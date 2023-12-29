import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const KahvaltiPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:42, name: 'Tek Kişilik Serpme Kahvaltı ', price: '$150' },
    {id:43, name: 'İki Kişilik Serpme Kahvaltı ', price: '$300' },
    {id:44, name: 'Omlet', price: '$90' },
    {id:45, name: 'Sucuklu Yumurta', price: '$80' },
    {id:46, name: 'Krep Tabağı', price: '$120' },
    {id:47,name: 'Menemen', price: '$120' },
    {id:48, name: 'Kuymak', price: '$120' },
    {id:49, name: 'Poğaça (Adet)', price: '$15' },
    {id:50, name: 'Biberli Dereotlu Sandviç', price: '$70' },
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

export default KahvaltiPage;
