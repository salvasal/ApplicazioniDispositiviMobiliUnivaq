import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValutazionePage } from './valutazione.page';

describe('ValutazionePage', () => {
  let component: ValutazionePage;
  let fixture: ComponentFixture<ValutazionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValutazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
