import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettexyzPage } from './recettexyz.page';

describe('RecettexyzPage', () => {
  let component: RecettexyzPage;
  let fixture: ComponentFixture<RecettexyzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettexyzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettexyzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
