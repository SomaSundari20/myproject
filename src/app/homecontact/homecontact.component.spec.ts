import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontactComponent } from './homecontact.component';

describe('HomecontactComponent', () => {
  let component: HomecontactComponent;
  let fixture: ComponentFixture<HomecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
