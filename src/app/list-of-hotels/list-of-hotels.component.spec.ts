import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHotelsComponent } from './list-of-hotels.component';

describe('ListOfHotelsComponent', () => {
  let component: ListOfHotelsComponent;
  let fixture: ComponentFixture<ListOfHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfHotelsComponent]
    });
    fixture = TestBed.createComponent(ListOfHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
