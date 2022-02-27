import React from 'react';
import { formatCentsToDollars } from 'utils';

export const Money = ({ inCents, inZloty }) => {
  if (inCents) {
    return <>${formatCentsToDollars(inCents).toFixed(2)} </>;
  } else {
    return <> {formatCentsToDollars(inZloty)} PLN </>;
  }
};
