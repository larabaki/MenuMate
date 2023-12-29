import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

document.addEventListener('DOMContentLoaded', () => {
  let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
  let sepetListesi = document.getElementById('sepetListesi');
  sepetListesi.innerHTML = ''; // Listenin her zaman boş başlamasını sağlar

  sepet.forEach(urun => {
      let li = document.createElement('li');
      li.textContent = urun.adi + ' - Adet: ' + urun.adet; // Örnek: "Makarna - Adet: 2"
      sepetListesi.appendChild(li);
  });
});

