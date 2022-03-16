import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeupdateComponent } from './homeupdate.component';

describe('HomeupdateComponent', () => {
  let component: HomeupdateComponent;
  let fixture: ComponentFixture<HomeupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
