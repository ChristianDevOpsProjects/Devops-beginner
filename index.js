const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.send('Hello from pipeline')
});

const Port = process.env.Port || 3000;
app.listen(Port, () => {
    console.log('app is running ${PORT}');
});