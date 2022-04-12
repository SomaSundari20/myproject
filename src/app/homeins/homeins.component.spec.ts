import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinsComponent } from './homeins.component';

describe('HomeinsComponent', () => {
  let component: HomeinsComponent;
  let fixture: ComponentFixture<HomeinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
