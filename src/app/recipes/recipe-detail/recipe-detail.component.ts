import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe; // "!:" Tell TypeScript “don’t worry, Angular will assign this later.”
  id!: number;

  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  addToShoppingList() {
    this.RecipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.recipe = this.RecipeService.getRecipeById(params['id']);
    });
  }
}
