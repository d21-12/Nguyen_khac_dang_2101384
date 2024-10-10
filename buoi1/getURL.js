import { parse } from 'url';
export const getPath = (req) => {
    return req.url;
};
export const getParamsURL = (req) => {
    return JSON.stringify(parse(req.url, true).query);
};