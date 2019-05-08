// import * as React from 'react';

function fieldReducer(fieldValue: any = '🍔', fieldName: string) {
  switch (fieldName) {
    case 'boil_volume':
      return 'TODO';
    case 'food_pairing':
      return 'TODO';
    case 'ingredients':
      return 'TODO';
    case 'method':
      return 'TODO';
    case 'volume':
      return 'TODO';
    default:
      return fieldValue;
  }
}

export default fieldReducer;
