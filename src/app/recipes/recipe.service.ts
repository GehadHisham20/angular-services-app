import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private ShoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/08/Recipe.jpg',
      [new Ingredient('Meat', 20), new Ingredient('Frensh Fries', 10)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test',
      'https://www.healthbenefitstimes.com/glossary/wp-content/uploads/2020/08/Recipe.jpg',
      [new Ingredient('Chicken', 30), new Ingredient('Fish', 25)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.ShoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
}
