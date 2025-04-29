import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() changeCurrentTab = new EventEmitter<string>();

  onClickNavigation(tab: string) {
    this.changeCurrentTab.emit(tab);
  }
}
