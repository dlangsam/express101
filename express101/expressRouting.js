const express = require('express');
const app = express();

app.all('/', (req, res)=> {
    res.send(`<h1>Welcome to the homepage</h1>`)
})



app.listen(3333);
console.log("Listing on 3333");