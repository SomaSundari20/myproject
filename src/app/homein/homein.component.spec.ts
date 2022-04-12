import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinComponent } from './homein.component';

describe('HomeinComponent', () => {
  let component: HomeinComponent;
  let fixture: ComponentFixture<HomeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
