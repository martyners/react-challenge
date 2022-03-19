import React from 'react';
import { formatCentsToDollars } from 'utils';

function displayPLusSign(inZloty) {
  if (typeof inZloty === 'string') {
    return "+";
  }
  return "";
}

export const Money = ({ inCents, inZloty }) => {
  if (inCents) {
    return <>${parseFloat(formatCentsToDollars(inCents)).toFixed(2)} </>;
  } else {
    return <> {displayPLusSign(inZloty) + parseFloat(formatCentsToDollars(inZloty)).toFixed(2)} PLN </>;
  }
};
