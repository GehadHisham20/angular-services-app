import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedReicpeDetails!: Recipe;

  constructor(private RecipeService: RecipeService) {}

  ngOnInit(): void {
    this.RecipeService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedReicpeDetails = recipe)
    );
  }
}
