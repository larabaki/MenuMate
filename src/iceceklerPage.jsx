import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const IceceklerPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
 
  const icecekler = [
    {id:27, name: 'Coca Cola Light', price: '$50' },
    {id:28, name: 'Coca Cola Zero', price: '$50' },
    {id:29, name: 'Ice-Tea Şeftali', price: '$50' },
    {id:30, name: 'Ice-Tea Mango', price: '$50' },
    {id:31, name: 'Ice-Tea Limon', price: '$50' },
    {id:32, name: 'Su', price: '$20' },
    {id:33, name: 'Fanta', price: '$50' },
    {id:34, name: 'Ayran', price: '$30' },
    {id:35, name: 'Sprite', price: '$50' },
    {id:36, name: 'Vişneli Meyve Suyu', price: '$30' },
    {id:37, name: 'Karışık Meyve Suyu', price: '$30' },
    {id:38, name: 'Şeftali Meyve Suyu', price: '$30' },
    {id:39, name: 'Kayısı Meyve Suyu', price: '$30' },
    {id:40, name: 'Ice Latte', price: '$80' },
    {id:41, name: 'Ice Mocha', price: '$80' },
  ];

  return (
    <div className="pizza-page">
      <div className="menu-list">
        {icecekler.map((icecekler, index) => (
          <div key={index} className="menu-item">
            {icecekler.name} <span>{icecekler.price}</span>
            <button onClick={() => addToCart(icecekler)}>Sepete Ekle</button>
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

export default IceceklerPage;
