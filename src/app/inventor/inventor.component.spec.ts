import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorComponent } from './inventor.component';

describe('InventorComponent', () => {
  let component: InventorComponent;
  let fixture: ComponentFixture<InventorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorComponent]
    });
    fixture = TestBed.createComponent(InventorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
