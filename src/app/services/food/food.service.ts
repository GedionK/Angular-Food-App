import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Doro Wet(ዶሮ ወጥ)',
        cookTime: '40-60',
        price: 20,
        favorite: true,
        origins: ['All Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['SlowFood', 'Lunch','Dinner'],
      },
      {
        id: 2,
        name: 'BeyeAynetu(በየአይነቱ)',
        price: 10,
        cookTime: '10-20',
        favorite: true,
        origins: ['All Ethiopia'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Kitfo(ክትፎ)',
        price: 35,
        cookTime: '10-25',
        favorite: false,
        origins: ['Gurage'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Lunch','Dinner'],
      },
      {
        id: 4,
        name: 'Chechebesa(ጨጨብሳ)',
        price: 20,
        cookTime: '15-20',
        favorite: true,
        origins: ['Oromia'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Breakfast'],
      },
      {
        id: 5,
        name: 'Tibes(ጥብስ)',
        price: 20,
        cookTime: '20-25',
        favorite: false,
        origins: ['All Ethiopia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['FastFood', 'Lunch', 'Breakfast','Dinner'],
      },
      {
        id: 6,
        name: 'Firfir(ፍርፍር)',
        price: 15,
        cookTime: '20-30',
        favorite: false,
        origins: ['All Ethiopia'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Breakfast'],
      },
    ];
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Breakfast', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'Dinner', count: 3 },
    ];
  }
}
