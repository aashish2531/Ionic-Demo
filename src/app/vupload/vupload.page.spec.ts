import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VuploadPage } from './vupload.page';

describe('VuploadPage', () => {
  let component: VuploadPage;
  let fixture: ComponentFixture<VuploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
