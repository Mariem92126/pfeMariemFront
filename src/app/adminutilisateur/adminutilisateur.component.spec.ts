import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminutilisateurComponent } from './adminutilisateur.component';

describe('AdminutilisateurComponent', () => {
  let component: AdminutilisateurComponent;
  let fixture: ComponentFixture<AdminutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminutilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
