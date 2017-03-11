import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcheckComponent } from './clientcheck.component';

describe('ClientcheckComponent', () => {
  let component: ClientcheckComponent;
  let fixture: ComponentFixture<ClientcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
