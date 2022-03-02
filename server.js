const express = require('express');

const bookData = require('./books.json');

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

console.log("HELLO!");

app.get('/', (req, res) => {
    res.send("<b><h1>HELLO! WELCOME TO MY WEBSITE</h1></b>");
})

app.get('/books', (req, res) => {
    //console.log(req.query)
    res.send("<b><h1>HERE ARE BOOKS!</h1></b>");
})

app.get('/book', (req, res) => {
    res.sendFile(__dirname + '/books.html');
})

app.get('/api/listbooks', (req, res) => {

    res.json(bookData);
})

app.get('*', (req, res) => {
    res.status(404).send("<b><h1>404 NOT FOUND</h1></b>");
})




app.listen(PORT, () => {
    console.log("LISTENING ON PORT 3001")
})



