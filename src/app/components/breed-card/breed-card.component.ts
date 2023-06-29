import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListState } from 'src/app/models/list-state-model';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.scss'],
})
export class BreedCardComponent {
  @Input() breedName = "";
  @Input() breedData: any;
  @Input() state?: ListState;
  stateType = ListState;

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigateByUrl(`/detail/${this.breedName}`, { state: this.breedData });
  }
}
