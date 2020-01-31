import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chip4Page } from './chip4.page';

describe('Chip4Page', () => {
  let component: Chip4Page;
  let fixture: ComponentFixture<Chip4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chip4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chip4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
