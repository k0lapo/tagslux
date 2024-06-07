// src/data/products.js
const products = [
  {
    id: 1,
    name: 'Hope',
    price: '45,000',
    image: '/black front.png',
    backImage: '/black back.png',
    sizes: ['L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000', image: '/black front.png' },
      { name: 'White', hex: '#fffff', image: '/white.png' },
      { name: 'Pink', hex: '#E600BB', image: '/deeppink.png' },
      { name: 'Coffee Brown', hex: '#533316', image: '/coffeebrown.png' },
    ],
  },
  {
    id: 2,
    name: 'Chavelle',
    price: '45,000',
    image: '/Chavelle black.png',
    sizes: ['L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#fff', image: '/Chavelle white.png' },
      { name: 'Black', hex: '#000000', image: '/Chavelle black.png' },
    ],
  },
  {
    id: 3,
    name: 'Zephyrus',
    price: '45,000',
    image: '/zeph-black front.png',
    backImage: '/zeph-black back.png',
    sizes: ['L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000', image: '/zeph-black front.png' },
      { name: 'Wash Grey', hex: '#5E6168', image: '/zeph-gray front.png' },
    ],
  },
  {
    id: 4,
    name: 'Nocturnal',
    price: '45,000',
    image: '/nocturnal black front.png',
    backImage: '/nocturnal black back.png',
    sizes: ['L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000', image: '/nocturnal black front.png' },
      { name: 'White', hex: '#fff', image: '/nocturnal white.png' },
      { name: 'Army Green', hex: '#49501F', image: '/noc-army front.png' },
    ],
  },
  {
    id: 5,
    name: 'Picante',
    price: '45,000',
    image: '/pic-black front.png',
    backImage: '/pic-black back.png',
    sizes: ['L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000', image: '/pic-black front.png' },
      { name: 'White', hex: '#fff', image: '/pic-white front.png' },
      { name: 'Army Green', hex: '#49501F', image: '/pic-green front.png' },
    ],
  },
];

export default products;
