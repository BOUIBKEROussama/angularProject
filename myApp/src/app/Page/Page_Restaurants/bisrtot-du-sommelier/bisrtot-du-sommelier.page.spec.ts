import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BisrtotDuSommelierPage } from './bisrtot-du-sommelier.page';

describe('BisrtotDuSommelierPage', () => {
  let component: BisrtotDuSommelierPage;
  let fixture: ComponentFixture<BisrtotDuSommelierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisrtotDuSommelierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BisrtotDuSommelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
