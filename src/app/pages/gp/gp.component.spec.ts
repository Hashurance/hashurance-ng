import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpComponent } from './gp.component';

describe('GpComponent', () => {
  let component: GpComponent;
  let fixture: ComponentFixture<GpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
