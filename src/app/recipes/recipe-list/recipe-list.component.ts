import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 
    'https://rms.knorrwhatsfordinner.co.za/images/defaults/recipe.jpg')
  ];
    

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
