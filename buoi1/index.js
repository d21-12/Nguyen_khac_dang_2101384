import http from 'http';
import { getPath, getParamsURL } from './getURL.js';
import getDate from './date.js';
import initWebRoute from './route/webRoute.js'
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.write(`${getDate()}<br>`);
    res.write(`${getPath(req)}<br>`);
    res.write(`${getParamsURL(req)}<br>`);
    res.write('hello ktpm0121, chúc bạn thành công với Nodejs');
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});