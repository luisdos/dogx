import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBreedInfoComponent } from './sub-breed-info.component';

describe('SubBreedInfoComponent', () => {
  let component: SubBreedInfoComponent;
  let fixture: ComponentFixture<SubBreedInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubBreedInfoComponent]
    });
    fixture = TestBed.createComponent(SubBreedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
