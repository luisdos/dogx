import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-breed-info',
  templateUrl: './sub-breed-info.component.html',
  styleUrls: ['./sub-breed-info.component.scss']
})
export class SubBreedInfoComponent {
  @Input() imgSrc = "";
  @Input() breedName = "";

}
