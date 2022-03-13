interface ApiInterface {
    getExchangeRate(from: string, to: string): ExchangeResponse;
}