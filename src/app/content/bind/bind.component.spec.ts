import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BindComponent } from './bind.component';
import { MessageService } from '../messageService';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BindComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        BindComponent
      ],
      providers: [MessageService]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(BindComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
