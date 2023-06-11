function convertCurrency(price, currency) {
  return currency === 'USD'
    ? `${price} USD`
    : currency === 'Euro'
    ? (price * 0.93).toFixed(2) + ' Euro'
    : currency === 'GBP'
    ? (price * 0.8).toFixed(2) + ' GBP'
    : null;
}
export { convertCurrency };
