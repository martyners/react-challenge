export const formatDollarsToCents = (value) => {
  value = String(value).replace(/[^\d-+.-]/g, '');
  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3);
  }

  return value ? Math.round(parseFloat(value) * 100) : 0;
};


export const formatCentsToDollars = (value) => {
  var efekt = String(value).replace(/[^\d-+.-]/g, '');
 
  var parsed = parseFloat(efekt / 100).toFixed(2);
  
  return parsed;
};
