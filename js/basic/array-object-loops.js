/** Arrays, Object and Loops */
const fruits = ['Banana', 'Ananas', 'Jackfruit', 'Melon'];
const products = [
  {
    id: 1,
    name: 'Bamboo Shoe Rack',
    description: 'Small and elegant shoe rack.',
    tags: ['bamboo', 'rack', 'shoe'],
    inStock: true,
  },
  {
    id: 2,
    name: 'HP Mini Computer',
    description: 'Low powered mini computer.',
    tags: ['low powered', 'mini', 'computer'],
    inStock: false,
  },
  {
    id: 3,
    name: 'Edifier Bluetooth Headset',
    description: 'A crisp and realiable headset.',
    tags: ['bluetooth', 'headset', 'computer'],
    inStock: true,
  },
  {
    id: 4,
    name: 'LG Gaming Monitor',
    description: 'Affordable gaming monitor.',
    tags: ['screen', 'screen', 'computer'],
    inStock: false,
  },
];

/** Access single item from array. */
console.log('Access single item in array: ', fruits[0]);
console.log('Access single item in multi array: ', products[2].tags[0]);
console.log('Access single item in object: ', products[1].name);

console.log('Object Keys: ', Object.keys(products[0]));
console.log('Object Value: ', Object.values(products[2]));
console.log('Object Entries: ', Object.entries(products[3]));

for (let fruit of fruits) {
  console.log('For loop: ', fruit);
}

/** Array functions, forEach, map, filter, reduce */
fruits.forEach((fruit) => {
  console.log('For each: ', fruit);
});

const productsMap = products
  .map((product) => {
    if (product.inStock === true) {
      return product.name;
    }
  })
  .filter((element) => element !== undefined);

console.log('Array Map and Filter', productsMap);
