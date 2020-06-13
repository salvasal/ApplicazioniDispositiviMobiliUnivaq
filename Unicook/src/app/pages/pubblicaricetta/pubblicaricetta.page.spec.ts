import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PubblicaricettaPage } from './pubblicaricetta.page';

describe('PubblicaricettaPage', () => {
  let component: PubblicaricettaPage;
  let fixture: ComponentFixture<PubblicaricettaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubblicaricettaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PubblicaricettaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
