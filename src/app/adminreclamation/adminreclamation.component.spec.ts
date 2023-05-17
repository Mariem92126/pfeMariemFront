import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreclamationComponent } from './adminreclamation.component';

describe('AdminreclamationComponent', () => {
  let component: AdminreclamationComponent;
  let fixture: ComponentFixture<AdminreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
