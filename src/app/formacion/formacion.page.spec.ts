import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionPage } from './formacion.page';

describe('FormacionPage', () => {
  let component: FormacionPage;
  let fixture: ComponentFixture<FormacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
