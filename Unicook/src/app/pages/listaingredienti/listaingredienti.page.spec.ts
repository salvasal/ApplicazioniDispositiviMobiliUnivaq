import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaingredientiPage } from './listaingredienti.page';

describe('ListaingredientiPage', () => {
  let component: ListaingredientiPage;
  let fixture: ComponentFixture<ListaingredientiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaingredientiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaingredientiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
