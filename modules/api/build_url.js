require('dotenv').config();

function buildUrl(from, to) {
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${process.env.API_KEY}`;
    return url;
}

module.exports = buildUrl;