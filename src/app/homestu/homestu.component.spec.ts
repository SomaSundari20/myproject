import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestuComponent } from './homestu.component';

describe('HomestuComponent', () => {
  let component: HomestuComponent;
  let fixture: ComponentFixture<HomestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
