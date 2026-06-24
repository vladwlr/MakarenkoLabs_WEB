const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.send('Лабораторна робота 3. Макаренко Владислав, 303-ТН.');
});

app.listen(PORT, () => {
    console.log(`Calculator is running: http://localhost:${PORT}`);
});
