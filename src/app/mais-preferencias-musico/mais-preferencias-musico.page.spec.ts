import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaisPreferenciasMusicoPage } from './mais-preferencias-musico.page';

describe('MaisPreferenciasMusicoPage', () => {
  let component: MaisPreferenciasMusicoPage;
  let fixture: ComponentFixture<MaisPreferenciasMusicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisPreferenciasMusicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaisPreferenciasMusicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
