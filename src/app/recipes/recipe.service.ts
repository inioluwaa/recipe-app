import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
