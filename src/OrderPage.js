import React, { useState } from 'react'; // useState hook'unu import edin
import { useParams } from 'react-router-dom';
import './App.css';
import { useCart } from './useCart'; // useCart hook'u

const OrderPage = () => {
  const { tableNumber } = useParams();
  const { cart, addToCart, removeFromCart } = useCart(); // useCart hook'unu çağırın
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleOrderCompletion = () => {
    console.log('Sipariş tamamlandı olarak işaretlendi.');
    setConfirmationMessage('Onayınız iletiliyor...');
    setTimeout(() => { 
      setConfirmationMessage('Sipariş tamamlandı olarak işaretlendi.');
    }, 2000); // 2 saniye sonra mesajı güncelle
  };

  return (
    <div className="order-page-container">
      <h1>Masa {tableNumber} Siparişleri</h1>
      <div className="order-list">
        {cart.map((order, index) => ( // orders yerine cart kullanın
          <div key={index} className="order-item">
            <span className="item-name">{order.name}</span> {/* 'item' yerine 'name' kullanın */}
            <span className="item-quantity">{order.quantity}</span>
          
          </div>
        ))}
      </div>
      <button className="completion-button" onClick={handleOrderCompletion}>
        Sipariş Tamamlandı Olarak İşaretle
      </button>
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
};

export default OrderPage;
