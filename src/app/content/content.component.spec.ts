import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentComponent } from './content.component';
import { DebugElement } from '@angular/core';

describe('ContentComponent', () => {
  let fixture: ComponentFixture<ContentComponent>;
  let appElement: DebugElement;
  let component: ContentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ContentComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    appElement = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(appElement).toBeTruthy();
  });
});
