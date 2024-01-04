const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Kullanıcı adınız
  host: 'localhost', // Host adresi
  database: 'MenuMate', // Veritabanı adı
  password: '123123', // Şifreniz
  port: 5432, // PostgreSQL portu (varsayılan 5432)
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Veritabanına bağlanılamadı', err.stack);
  }
  console.log('Veritabanına başarıyla bağlanıldı');
  // Burada veritabanı sorgularınızı çalıştırabilirsiniz.
  // Örnek sorgu:
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Sorgu çalıştırılırken bir hata oluştu', err.stack);
    }
    console.log(result.rows);
  });
});
