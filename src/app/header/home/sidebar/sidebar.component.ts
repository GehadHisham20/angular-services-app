import { SubscribeService } from './../../../Services/subscribe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private subscribeService: SubscribeService) {}

  onSubscribe() {
    this.subscribeService.OnSubscribeClicked('weekly');
  }
}
