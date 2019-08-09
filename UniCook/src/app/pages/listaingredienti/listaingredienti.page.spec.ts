import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaingredientiPage } from './listaingredienti.page';

describe('ListaingredientiPage', () => {
  let component: ListaingredientiPage;
  let fixture: ComponentFixture<ListaingredientiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaingredientiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaingredientiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
