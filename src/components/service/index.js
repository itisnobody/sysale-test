export default class ShampooService {
  data = [
    {
      id: 1,
      name: 'Шампунь',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      fresh: true,
      variants: [{
          sku: 1,
          price: 200,
          color: 'black',
          volume: 100,
          inventory: 9
        },
        {
          sku: 2,
          price: 250,
          color: 'read',
          volume: 200,
          inventory: 9
        },
        {
          sku: 3,
          price: 300,
          color: 'green',
          volume: 300,
          inventory: 9
        }],
      images: [
        'img/1/image23.jpg',
        'img/1/image24.jpg'
      ]
    },
    {
      id: 2,
      name: 'Шампунь',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      fresh: true,
      variants: [{
          sku: 1,
          price: 200,
          color: 'black',
          volume: 100,
          inventory: 9
        },
        {
          sku: 2,
          price: 250,
          color: 'read',
          volume: 200,
          inventory: 9
        },
        {
          sku: 3,
          price: 300,
          color: 'green',
          volume: 300,
          inventory: 9
        }],
      images: [
        'img/2/image23.jpg',
        'img/2/image24.jpg'
      ]
    },
    {
      id: 3,
      name: 'Шампунь',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      fresh: true,
      variants: [{
          sku: 1,
          price: 200,
          color: 'black',
          volume: 100,
          inventory: 9
        },
        {
          sku: 2,
          price: 250,
          color: 'read',
          volume: 200,
          inventory: 9
        },
        {
          sku: 3,
          price: 300,
          color: 'green',
          volume: 300,
          inventory: 9
        }],
      images: [
        'img/3/image23.jpg',
        'img/3/image24.jpg'
      ]
    }
  ];

  getShampoos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
        // reject(new Error('something went wrong'))
      }, 1000);
    });
  }
};