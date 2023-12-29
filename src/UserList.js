import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // .env dosyasındaki çevre değişkenini kullanarak URL 
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.get(`${apiUrl}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []); // Boş dizi, bu etkinin bileşen monte edildiğinde sadece bir kez çalışacağını belirtir.

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.RestorantAdi}</li> // 'name' yerine tablonuzdaki uygun sütun adını kullanın
        ))}
      </ul>
    </div>
  );
}

export default UserList;
