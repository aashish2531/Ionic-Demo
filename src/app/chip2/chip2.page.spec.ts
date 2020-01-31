import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chip2Page } from './chip2.page';

describe('Chip2Page', () => {
  let component: Chip2Page;
  let fixture: ComponentFixture<Chip2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chip2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
