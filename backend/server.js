const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 9000;

const pathToFrontend = path.join(`${__dirname}/../frontend`) // ezt majd betenni

app.use(express.json()); 

app.get('/', (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`)); //itt szolgaljuk ki az index.html
}),

app.use('/public', express.static(`${__dirname}/../frontend/public`)); //public mappa kiszolg

app.get('/image-list', (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/../frontend/data.json`)); 
});


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})