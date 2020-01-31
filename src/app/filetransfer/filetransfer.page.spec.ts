import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiletransferPage } from './filetransfer.page';

describe('FiletransferPage', () => {
  let component: FiletransferPage;
  let fixture: ComponentFixture<FiletransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiletransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiletransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
