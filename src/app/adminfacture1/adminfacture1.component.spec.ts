import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminfacture1Component } from './adminfacture1.component';

describe('Adminfacture1Component', () => {
  let component: Adminfacture1Component;
  let fixture: ComponentFixture<Adminfacture1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminfacture1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminfacture1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
