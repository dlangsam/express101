const path = require('path');

const express = require('express');
const app = express();
app.use(express.static('public'));
app.all('/', (req, res)=> {
    console.log(path.join(__dirname + '/node.html')); 
    res.sendFile(path.join(__dirname + '/node.html'));
    //res.send(`<h1>This is homepage</h1>`);
})
app.all('*', (req, res)=> {
    res.send(`<h1>Not found</h1>`);
})
app.listen(3000);