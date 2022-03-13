var initialExchangeRate = 360;
var costPrice = 10000;
var currentExchangeRate = 280;

var changeInExchangeRate = currentExchangeRate - initialExchangeRate;
var percentageChangeInExchangeRate = (changeInExchangeRate / initialExchangeRate) * 100;

var newExchangeRateInPercent = 100 + percentageChangeInExchangeRate;

console.log('PERCENTAGE CHANGE IN EXCHANGE RATE:', percentageChangeInExchangeRate);

var sellingPrice = (newExchangeRateInPercent / 100) * costPrice;

console.log('selling price', sellingPrice);
