import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontratComponent } from './admincontrat.component';

describe('AdmincontratComponent', () => {
  let component: AdmincontratComponent;
  let fixture: ComponentFixture<AdmincontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
