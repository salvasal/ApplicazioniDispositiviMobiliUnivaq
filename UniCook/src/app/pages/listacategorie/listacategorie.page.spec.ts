import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacategoriePage } from './listacategorie.page';

describe('ListacategoriePage', () => {
  let component: ListacategoriePage;
  let fixture: ComponentFixture<ListacategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
