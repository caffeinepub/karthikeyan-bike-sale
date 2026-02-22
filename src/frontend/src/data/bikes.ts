export interface Bike {
  id: string;
  name: string;
  image: string;
  price: number;
  color: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
    type: string;
  };
}

export const bikes: Bike[] = [
  {
    id: 'red-sport',
    name: 'Red Thunder Sport',
    image: '/assets/generated/bike-red-sport.dim_800x600.png',
    price: 185000,
    color: 'red',
    specs: {
      engine: '200cc',
      power: '25 HP',
      weight: '148 kg',
      type: 'Sport'
    }
  },
  {
    id: 'black-sport',
    name: 'Black Phantom Elite',
    image: '/assets/generated/bike-black-sport.dim_800x600.png',
    price: 195000,
    color: 'black',
    specs: {
      engine: '250cc',
      power: '30 HP',
      weight: '155 kg',
      type: 'Sport'
    }
  },
  {
    id: 'white-sport',
    name: 'White Lightning Pro',
    image: '/assets/generated/bike-white-sport.dim_800x600.png',
    price: 175000,
    color: 'white',
    specs: {
      engine: '180cc',
      power: '22 HP',
      weight: '142 kg',
      type: 'Sport'
    }
  }
];
