import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService) {
    this.recipes = this.RecipeService.getRecipes();
  }

  onSelectRecipe(recipe: Recipe) {
    this.RecipeService.recipeSelected.emit(recipe);
  }
}
