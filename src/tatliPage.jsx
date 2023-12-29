import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const TatliPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:86, name: 'Çikolatalı Donut (Adet)', price: '$30' },
    {id:87, name: 'Çilekli  Donut (Adet)', price: '$30' },
    {id:88, name: 'Limonlu Donut (Adet)', price: '$30' },
    {id:89, name: 'Çikolata Soslu Waffle', price: '$150' },
    {id:90, name: 'Tiramisu', price: '$110' },
    {id:91, name: 'Karamel Soslu Trileçe', price: '$100' },
    {id:92, name: 'Çikolatalı Sufle', price: '$150' },
    {id:93, name: 'Kestaneli Magnolia', price: '$120' },
    {id:94, name: 'Panna Cotta', price: '$110' },
    {id:95, name: 'San Sebastian Cheesecake', price: '$130' },
    {id:96, name: 'Profiterol', price: '$120' },
    {id:97, name: 'Karamel Bowl', price: '$80' },
   
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
export default TatliPage;
