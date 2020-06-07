import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacategoriePage } from './listacategorie.page';

describe('ListacategoriePage', () => {
  let component: ListacategoriePage;
  let fixture: ComponentFixture<ListacategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
