import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  constructor(private subscribeService: SubscribeService) {}

  onSubscribe() {
    this.subscribeService.OnSubscribeClicked('yearly');
  }
}
