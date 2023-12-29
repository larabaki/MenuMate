import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const OrderPage = () => {
  const { tableNumber } = useParams();
  const [orders, setOrders] = useState([
    { item: 'Cheeseburger', quantity: 1 },
    { item: 'Coca-Cola', quantity: 3 },
    { item: 'Moğol Bifteği', quantity: 2 },
    { item: 'Pizza Spesiyal', quantity: 1 }
  ]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleOrderCompletion = () => {
    console.log('Sipariş tamamlandı olarak işaretlendi.');
    setConfirmationMessage('Onayınız iletiliyor...');
    // İşlem sonrası yapılacak işlemler, örneğin bir API çağrısı
    // ve sonra mesajı güncelleyebilirsiniz
    setTimeout(() => { // Bu kısım yalnızca simülasyon içindir, gerçek bir API çağrısı ile değiştirilmelidir.
      setConfirmationMessage('Sipariş tamamlandı olarak işaretlendi.');
    }, 2000); // 2 saniye sonra mesajı güncelle
  };

  return (
    <div className="order-page-container">
      <h1>Masa {tableNumber} Siparişleri</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <span className="item-name">{order.item}</span>
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
