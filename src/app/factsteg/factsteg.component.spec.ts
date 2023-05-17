import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactstegComponent } from './factsteg.component';

describe('FactstegComponent', () => {
  let component: FactstegComponent;
  let fixture: ComponentFixture<FactstegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactstegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactstegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
