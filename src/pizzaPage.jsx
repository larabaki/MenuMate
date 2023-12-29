import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart';

const PizzaPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const pizzas = [
    {id:70, name: 'Spesiyal Pizzamız', price: '$150' },
    {id:71, name: 'Eko Sucuklu Pizza', price: '$120' },
    {id:72, name: 'Margarita Pizza', price: '$120' },
    {id:73, name: 'White Pizza', price: '$110' },
    {id:74, name: '4 Peynirli Pizza', price: '$160' },
    {id:75, name: 'Barbekü Tavuklu Pizza', price: '$150' },
    {id:76, name: 'Supreme Pizza', price: '$100' },
    {id:77, name: 'Pepperoni Pizza', price: '$130' },
    {id:78, name: 'Gennaro Pizza', price: '$160' },

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

export default PizzaPage;
