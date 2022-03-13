const api = require('../api');

const calculateSellingPrice = async ({ costPrice, data }) => {
    const initialExchangeRate = await api.getExchangeRate(data);
    const currentExchangeRate = 360;

    const changeInExchangeRate = currentExchangeRate - initialExchangeRate;
    const percentageChangeInExchangeRate = (changeInExchangeRate / initialExchangeRate) * 100;

    const newExchangeRateInPercent = 100 + percentageChangeInExchangeRate;

    const sellingPrice = (newExchangeRateInPercent / 100) * costPrice;

    console.log('selling price', sellingPrice);
}

module.exports = calculateSellingPrice;