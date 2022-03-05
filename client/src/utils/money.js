export const formatDollarsToCents = (value) => {
  value = String(value).replace(/[^\d-+.-]/g, '');
  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3);
  }

  return value ? Math.round(parseFloat(value) * 100) : 0;
};

export const formatCentsToDollars = (value) => {
  var efekt = String(value).replace(/[^\d-+.-]/g, '');
  const cents = parseFloat(efekt).toFixed(2);
  if (typeof value === 'string') {
    return cents ? '+' + cents / 100 : 0;
  }
  return cents ? +cents / 100 : 0;
};
