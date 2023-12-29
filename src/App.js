import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Admin girişi yapıldıysa kontrol et
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    setIsAdminLoggedIn(adminLoggedIn === 'true'); // localStorage string kaydettiği için karşılaştırma yaparken 'true' stringi kullanılır
  }, []);

  const goToCategory = (category) => {
    navigate(`/${category}`);
  };

  const handleStartClick = () => {
    setShowMenu(true);
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
      <div className="mid-header-content">
          <h1>MenuMate</h1>
     </div>
      
      <Link to="/admin-login" className="admin-link">Admin Girişi</Link>
      </header>

      <div className="menu-category" onClick={() => goToCategory('hamburger')}>
        <img src="/images/hamburger.jpg" alt="Hamburger" className="menu-image" />
        <h2>Hamburger</h2>
      </div>
      <div className="menu-category" onClick={() => goToCategory('tavuk')}>
        <img src="/images/tavuk.jpg" alt="Tavuk" className="menu-image" />
        <h2>Tavuk</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('salata')}>
        <img src="/images/salata.jpg" alt="Salata" className="menu-image" />
        <h2>Salata</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('pizza')}>
        <img src="/images/pizza.jpg" alt="Pizza" className="menu-image" />
        <h2>Pizza</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('anayemek')}>
        <img src="/images/anaYemek.jpg" alt="Ana Yemek" className="menu-image" />
        <h2>Ana Yemek</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('makarna')}>
        <img src="/images/makarna.jpg" alt="Makarna" className="menu-image" />
        <h2>Makarna</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('tatli')}>
        <img src="/images/tatlı.jpg" alt="Tatlı" className="menu-image" />
        <h2>Tatlı</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('deniz')}>
        <img src="/images/denizUrunleri.jpg" alt="Deniz Ürünleri" className="menu-image" />
        <h2>Deniz Ürünleri</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('pide')}>
        <img src="/images/pide.jpg" alt="Pide & Lahmacun" className="menu-image" />
        <h2>Pide & Lahmacun</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('kahvalti')}>
        <img src="/images/kahvaltı.jpg" alt="Kahvaltı" className="menu-image" />
        <h2>Kahvaltı</h2>
      </div>

      <div className="menu-category" onClick={() => goToCategory('icecekler')}>
        <img src="/images/icecek.jpg" alt="İçecekler" className="menu-image" />
        <h2>İçecekler</h2>
      </div>
      </div>
  );
 
}

export default App;
