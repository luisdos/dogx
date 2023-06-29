import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreedsService } from 'src/app/services/breeds.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  breed?: string;
  subBreeds: {[key: string]: any} = {};
  constructor(private route: ActivatedRoute, private router: Router, private breedsService: BreedsService) { }


  ngOnInit() {
    this.breed = this.route.snapshot.paramMap.get('breed') || "";
    this.breedsService.getBreedSubBreedData(this.breed).subscribe((data: any) => {
      this.subBreeds = data;
    })
  }
}
