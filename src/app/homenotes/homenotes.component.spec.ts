import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenotesComponent } from './homenotes.component';

describe('HomenotesComponent', () => {
  let component: HomenotesComponent;
  let fixture: ComponentFixture<HomenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
