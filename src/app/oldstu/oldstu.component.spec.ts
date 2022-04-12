import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldstuComponent } from './oldstu.component';

describe('OldstuComponent', () => {
  let component: OldstuComponent;
  let fixture: ComponentFixture<OldstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldstuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
