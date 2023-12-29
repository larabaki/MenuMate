import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrderConfirmationPage from './OrderConfirmationPage';
import App from './App';
import AdminLoginPage from './AdminLoginPage';

import PizzaPage from './pizzaPage';
import MakarnaPage from './makarnaPage';
import HamburgerPage from './hamburgerPage'; 
import TavukPage from './tavukPage';
import SalataPage from './salataPage';
import AnaYemekPage from './anayemekPage';
import TatliPage from './tatliPage';
import DenizUPage from './denizPage';
import PidePage from './pidePage';
import KahvaltiPage from './kahvaltiPage';
import İcecekPage from './iceceklerPage';

import './index.css';
import { useNavigate } from 'react-router-dom';
import ChefPage from './ChefPage';
import OrderPage from './OrderPage';
import AdminMenuPage from './AdminMenuPage';


const rootElement = document.getElementById('root');
// createRoot ile bir root oluşturun
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/makarna" element={<MakarnaPage />} />
        <Route path="/hamburger" element={<HamburgerPage/>} />
        <Route path="/tavuk" element={<TavukPage/>} />
        <Route path="/salata" element={<SalataPage/>} />
        <Route path="/anayemek" element={<AnaYemekPage/>} />
        <Route path="/tatli" element={<TatliPage/>} />
        <Route path="/deniz" element={<DenizUPage/>} />
        <Route path="/kahvalti" element={<KahvaltiPage/>} />
        <Route path="/pide" element={<PidePage/>} />
        <Route path="/icecekler" element={<İcecekPage/>} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/chef-screen" element={<ChefPage/>} />
        <Route path="/order/:tableNumber" element={<OrderPage />} /> 
        <Route path="/admin-menu" element={<AdminMenuPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  
);
