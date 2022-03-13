function getParsedData(response) {
    const payload = response['Realtime Currency Exchange Rate'];
    const responseObject = {
        from: new CurrencyModel({
            name: payload['2. From_Currency Name'],
            symbol: payload['1. From_Currency Code']
        }),
        to: new CurrencyModel({
            name: payload['4. To_Currency Name'],
            symbol: payload['3. To_Currency Code']
        }),
        exchangeRate: parseFloat(payload['5. Exchange Rate']),
    }
    return responseObject.exchangeRate;
}

function CurrencyModel({ name, symbol }) {
    this.name = name;
    this.symbol = symbol;
};

module.exports = getParsedData;
