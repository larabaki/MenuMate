// ChefPage.js
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChefPage = () => {
 const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // LocalStorage'dan kimlik doğrulama durumunu kontrol et
    const isAuth = localStorage.getItem("isChefAuthenticated") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  const handleLogin = () => {
    if (password === '123123') {
      setIsAuthenticated(true);
      localStorage.setItem("isChefAuthenticated", "true"); // Doğru şifre girildiğinde durumu localStorage'a kaydet
    } else {
      alert('Yanlış şifre!');
    }
  };
  const handleTableClick = (tableNumber) => {
    // Masa numarasına göre OrderPage bileşenine yönlendir
    navigate(`/order/${tableNumber}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h1 className="sefEkrani">MenuMate Şef Giriş Ekranı</h1>
        <input 
          type="password" 
          placeholder="Şifre" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    );
  }

  return (
    <div className="chef-container">
      <h1><center>Mevcut Siparişler</center></h1>
      
      {[...Array(8)].map((_, index) => (
        <div key={index} className="order-category">
          <button onClick={() => handleTableClick(index + 1)}>
            <img src={`/images/masa.jpg`} alt={`Masa ${index + 1}`}/>
            <h2>Masa {index + 1}</h2>
          </button>
        </div>
      ))}
     
    </div>
  );
};

export default ChefPage;
