import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chip3Page } from './chip3.page';

describe('Chip3Page', () => {
  let component: Chip3Page;
  let fixture: ComponentFixture<Chip3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chip3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chip3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
