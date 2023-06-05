function convertCurrency(amount, fromCurrency, toCurrency) { 
  const exchangeRate = getExchangeRate(fromCurrency, toCurrency); 
  const convertedAmount = exchangeRate * amount; 
  return convertedAmount; 
} 
 
function getExchangeRate(fromCurrency, toCurrency) { 
  const exchangeRates = { 
    USD: 1.2, 
    EUR: 0.86, 
    GBP: 0.8, 
    JPY: 127.9, 
  }; 
  return exchangeRates[toCurrency] / exchangeRates[fromCurrency]; 
} 
 
const amount = 10; 
const fromCurrency = "USD"; 
const toCurrency = "EUR"; 
 
const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency); 
console.log(convertedAmount);