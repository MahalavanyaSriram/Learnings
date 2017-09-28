import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
    "id": 0,
    "product": "Shoes",
    "department": "Home",
    "productName": "Handmade Granite Pants",
    "price": "592.00",
    "productMaterial": "Metal",
    "color": "fuchsia"
  },
  {
    "id": 1,
    "product": "Soap",
    "department": "Kids",
    "productName": "Generic Steel Pizza",
    "price": "844.00",
    "productMaterial": "Steel",
    "color": "lavender"
  },
  {
    "id": 2,
    "product": "Salad",
    "department": "Kids",
    "productName": "Incredible Frozen Towels",
    "price": "726.00",
    "productMaterial": "Rubber",
    "color": "red"
  },
  {
    "id": 3,
    "product": "Fish",
    "department": "Clothing",
    "productName": "Licensed Granite Shoes",
    "price": "561.00",
    "productMaterial": "Metal",
    "color": "yellow"
  },
  {
    "id": 4,
    "product": "Keyboard",
    "department": "Clothing",
    "productName": "Generic Steel Chair",
    "price": "886.00",
    "productMaterial": "Frozen",
    "color": "black"
  },
  {
    "id": 5,
    "product": "Chips",
    "department": "Tools",
    "productName": "Tasty Frozen Soap",
    "price": "681.00",
    "productMaterial": "Metal",
    "color": "gold"
  }
    ];
    return {products};
  }
}
