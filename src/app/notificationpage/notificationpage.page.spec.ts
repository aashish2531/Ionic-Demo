import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationpagePage } from './notificationpage.page';

describe('NotificationpagePage', () => {
  let component: NotificationpagePage;
  let fixture: ComponentFixture<NotificationpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
