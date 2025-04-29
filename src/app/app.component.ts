import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'max-course-project';
  currentTab = 'recipe';

  onNavigationChange(tab: string) {
    this.currentTab = tab;
  }
}
