import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChpwPage } from './chpw.page';

describe('ChpwPage', () => {
  let component: ChpwPage;
  let fixture: ComponentFixture<ChpwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChpwPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChpwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
