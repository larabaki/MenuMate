import React, { useState } from 'react';

const OrderConfirmationPage = () => {
  const [sepet, setSepet] = useState(() => {
    const localData = localStorage.getItem('sepet');
    return localData ? JSON.parse(localData) : [];
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const totalPrice = sepet.reduce((total, item) => total + (item.quantity * parseFloat(item.price.replace('$', ''))), 0).toFixed(2);

  // Siparişi onaylayan fonksiyon
  const confirmOrder = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="order-confirmation">
      <h1>Sipariş Onayı</h1>
      {!isConfirmed ? (
        <>
          <ul>
            {sepet.map((item, index) => (
              <li key={index}>
                {item.name} ( Adet: {item.quantity}) - Fiyat: {item.price}
              </li>
            ))}
          </ul>
          <div className="total-price">
            Toplam Ücretiniz: ${totalPrice}
          </div>
          
          <button id="confirm-button" onClick={confirmOrder}>Onayla</button>
        </>
      ) : (
        <div id="confirmation-message">
            Siparişiniz Onaylanmıştır.<br />
            Siparişiniz Şefimize İletilmiştir.<br />
            Bizi Tercih Ettiğiniz için Teşekkürler.
</div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
