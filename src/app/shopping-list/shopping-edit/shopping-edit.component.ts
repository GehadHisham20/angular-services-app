import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef | null = null;
  @ViewChild('amountInput') amountInputRef: ElementRef | null = null;

  constructor(private ShoppingListService: ShoppingListService) {}

  addIngredient() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = this.amountInputRef?.nativeElement.value;
    this.ShoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
