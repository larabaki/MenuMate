import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const TavukPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  
  const pizzas = [
    {id:98, name: 'Tavuklu Sultan Kebabı', price: '$250' },
    {id:99, name: 'Köri Soslu Tavuk', price: '$220' },
    {id:100, name: 'Tavuk Sote', price: '$210' },
    {id:101, name: 'Tavuk Çökertme', price: '$255' },
    {id:102, name: 'Tavuk Tantuni', price: '$180' },
    {id:103, name: 'Çıtır Tavuk', price: '$130' },
    {id:104, name: 'Tavuk Şiş', price: '$240' },
    {id:105, name: 'Tavuk Döner', price: '$110' },
    {id:106, name: 'Beşamel Soslu Tavuk', price: '$210' },
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


export default TavukPage;
