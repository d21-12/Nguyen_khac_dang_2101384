import express from 'express'
import getHomePage from '../Controller/HomeController'
import aboutPage from '../Controller/AboutController'
import getContactPage from '../Controllers/ContactController'; 
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/contact', getContactPage);
    router.get('/date', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(getCurrentDate() + "<br/>");
        res.end();
    });
    router.get('/geturl', (req, res) => {
        const path = getPath(req);
        const params = getParamsURL(req);
        res.send(`Path: ${path} <br/> Params: ${params}`);
    });
    return app.use('/', router)
}
export default initWebRoute