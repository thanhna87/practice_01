import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucHanh01Component } from './thuc-hanh01.component';

describe('ThucHanh01Component', () => {
  let component: ThucHanh01Component;
  let fixture: ComponentFixture<ThucHanh01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThucHanh01Component]
    });
    fixture = TestBed.createComponent(ThucHanh01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
