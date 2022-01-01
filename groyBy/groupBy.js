const groupBy = require('array.prototype.groupby');

const items = [
    {
      type: 'fruit',
      value: '🍎',
    },
    {
      type: 'fruit',
      value: '🍇',
    },
    {
      type: 'fruit',
      value: '🍊',
    },
    {
      type: 'vegetable',
      value: '🥦',
    },
    {
      type: 'vegetable',
      value: '🥕',
    },
    {
      type: 'vegetable',
      value: '🌶️',
    },
  ];

const parity = (x) => x.type === 'fruit' ? 'Fruta' : 'Vegetal';

let results = groupBy(items, (x) => parity(x));

console.log(typeof results['Fruta']);
console.log(results['Vegetal']);