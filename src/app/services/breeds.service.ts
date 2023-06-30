import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getBreedList(): Observable<any> {
    return this.http.get("https://dog.ceo/api/breeds/list/all");
  }

  getBreedSubBreeds(breed: string): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/list`);
  }

  getBreedRandomImage(breed: string, sub_breed: string): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/${sub_breed}/images/random`);
  }

  getBreedSubBreedData(breed: string): Observable<any> {
    return this.getBreedSubBreeds(breed).pipe(
      switchMap(breeds => {
        let breedsData = breeds.message.reduce((acc: any, currentValue: string) => {
          return { 
            ...acc, 
            [currentValue]: this.getBreedRandomImage(breed, currentValue)
          }
        }, {}) 
        return forkJoin(breedsData)
      })
    )
  }
}
