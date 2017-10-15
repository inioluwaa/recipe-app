import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super tasty schnitzel - just awesome!',
      'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
