import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaricettePage } from './listaricette.page';

describe('ListaricettePage', () => {
  let component: ListaricettePage;
  let fixture: ComponentFixture<ListaricettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaricettePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaricettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
