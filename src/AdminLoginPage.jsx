import React, { useState } from 'react';
import './AdminLoginPage.css'; // Stiller için ayrı bir CSS dosyası
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123123');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Burada gerçek bir uygulamada API üzerinden doğrulama yapılacak
    if (username === 'admin' && password === '123123') { // Örnek doğrulama
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-menu'); // Menü yönetim sayfasına yönlendir
    } else {
      // Giriş bilgileri yanlış ise hata mesajı göster
      alert('Yanlış kullanıcı adı veya şifre!');
    }
  };


  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>"Restorant" MenuMate Admin Girişine Hoşgeldiniz.</h2>
        <h4 htmlFor="restaurantName">Restorantınıza ait admin bilgilerini giriniz.</h4>
      
        
        <label htmlFor="username">Admin Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Admin Şifresi:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Giriş Yap</button> {/* Buton metnini "Giriş Yap" yerine "Kaydet" olarak değiştirdik */}
      </form>
    </div>
  );
}

export default AdminLoginPage;
