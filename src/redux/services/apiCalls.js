// API
import axios from 'axios';
import {handleNewsData} from '../../controllers/dataHandler'
let Parser = require('rss-parser');

const apiEndpoint = 'https://index-api.bitcoin.com/api/v0'
const newsEndpoint = 'https://news.bitcoin.com/feed/'

export async function getBCHHistoryPrices() {
    const result = await axios.get(`${apiEndpoint}/cash/history`)
    const prices = result.data;
    return prices;
}
export async function getCurrentBCHPrice() {
    const result = await axios.get(`${apiEndpoint}/cash/price/usd`)
    const {price} = result.data;
    return price;
}

export async function getNewsFeed(){
    let parser = new Parser();
    let feed = await parser.parseURL(newsEndpoint);
    return handleNewsData(feed);
}