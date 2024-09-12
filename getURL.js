var url = import('url')
const getPath = (req) =>{
    return req.url;
}
const getParamsURL = (req) =>{
    return JSON.stringify((url.parse(req.url, true)).query);
}
moduledefaut ={getPath,getParamsURL}