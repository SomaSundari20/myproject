import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedocumentComponent } from './homedocument.component';

describe('HomedocumentComponent', () => {
  let component: HomedocumentComponent;
  let fixture: ComponentFixture<HomedocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
