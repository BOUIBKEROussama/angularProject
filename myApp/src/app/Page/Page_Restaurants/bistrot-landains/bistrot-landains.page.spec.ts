import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotLandainsPage } from './bistrot-landains.page';

describe('BistrotLandainsPage', () => {
  let component: BistrotLandainsPage;
  let fixture: ComponentFixture<BistrotLandainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotLandainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotLandainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
