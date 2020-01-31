import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfscrlPage } from './infscrl.page';

describe('InfscrlPage', () => {
  let component: InfscrlPage;
  let fixture: ComponentFixture<InfscrlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfscrlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfscrlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
