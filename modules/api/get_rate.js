const axios = require('axios');
const buildUrl = require('./build_url');
const getParsedData = require('./get_parsed_data');


async function getExchangeRate({ from, to}) {
    try {
        const response = await axios.get(buildUrl(from, to));
        return getParsedData(response.data);
    } catch (err) {
        console.error(err);
    }
}

module.exports = getExchangeRate;