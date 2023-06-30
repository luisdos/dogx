import { Component, Input } from '@angular/core';
import { ListState } from 'src/app/models/list-state-model';
import { BreedsService } from 'src/app/services/breeds.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {

  @Input() list: {[key: string]: any[]} = {};
  @Input() isLoading = true;
  @Input() searchText = "";
  listState: ListState = ListState.Loading;
  listStateType = ListState;
  breeds: {[key: string]: any[]} = {};
  filteredBreeds: {[key: string]: any[]} = {};

  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    setTimeout(() => { // Just to see the skeleton loader effect
      this.breedsService.getBreedList().subscribe((data: any) => {
        if(data.status == "success") {
          this.listState = ListState.Success;
          this.breeds = data.message;
          this.filteredBreeds = data.message;
        } else {
          this.listState = ListState.Error;
        }
      })
    }, 0);
  }

  onSearch(event: any) {
    const searchText = event.target.value;
    this.filteredBreeds = Object.keys(this.breeds)
      .filter((key) => key.includes(searchText))
      .reduce((cur, key) => { return Object.assign(cur, { [key]: this.breeds[key] })}, {});
  }
}
