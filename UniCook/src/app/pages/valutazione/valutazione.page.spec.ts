import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazionePage } from './valutazione.page';

describe('ValutazionePage', () => {
  let component: ValutazionePage;
  let fixture: ComponentFixture<ValutazionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazionePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
