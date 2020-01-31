import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilemanagerPage } from './filemanager.page';

describe('FilemanagerPage', () => {
  let component: FilemanagerPage;
  let fixture: ComponentFixture<FilemanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilemanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilemanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
