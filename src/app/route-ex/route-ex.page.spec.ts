import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouteExPage } from './route-ex.page';

describe('RouteExPage', () => {
  let component: RouteExPage;
  let fixture: ComponentFixture<RouteExPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteExPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouteExPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
