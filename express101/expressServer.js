const express = require('express');
const app = express();

app.all('*', (req, res)=> {
    res.send(`<h1>This is homepage</h1>`);
})

app.listen(3333);