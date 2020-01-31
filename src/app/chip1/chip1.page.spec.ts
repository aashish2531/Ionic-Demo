import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chip1Page } from './chip1.page';

describe('Chip1Page', () => {
  let component: Chip1Page;
  let fixture: ComponentFixture<Chip1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chip1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chip1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
