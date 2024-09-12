import express from 'express';
import dotenv from 'dotenv/config';
import { getPath, getParamsURL } from './getURL.js'; // Import the functions from getURL.js
import viewEngine from './viewEngine.js'; // Import the view engine setup

const app = express();
const port = process.env.PORT || 3000; // Use a default port if .env is not configured

// Set up the view engine
viewEngine(app);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/about', (req, res) => {
    res.send('Hello world. Page about');
});

function getCurrentDate() {
    return new Date().toString();
}

app.get('/date', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(getCurrentDate() + "<br/>");
    res.end();
});

// Add the /geturl route
app.get('/geturl', (req, res) => {
    const path = getPath(req);
    const params = getParamsURL(req);
    res.send(`Path: ${path} <br/> Params: ${params}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.get('/ejs', (req, res) => {
    res.render("test");
});
app.get('/', (req, res) => {
    res.render("home");
});
app.get('/about', (req, res) => {
    res.render("about");
});
