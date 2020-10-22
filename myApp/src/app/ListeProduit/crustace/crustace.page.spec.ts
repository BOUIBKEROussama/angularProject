import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrustacePage } from './crustace.page';

describe('CrustacePage', () => {
  let component: CrustacePage;
  let fixture: ComponentFixture<CrustacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrustacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrustacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
