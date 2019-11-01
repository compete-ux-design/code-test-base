import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MatTabsModule,
            ReactiveFormsModule,
            HttpClientTestingModule,
            RouterTestingModule,
            BrowserAnimationsModule,
            FormsModule
        ],
      declarations: [ 
          TabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// Remove below for test.
  it(`should set the username as Boy when display name function is called with true`, () => {
    component.displayName(true);
    expect(component.flag).toEqual(true);
    expect(component.userName).toEqual('Boy');
  });

  it(`should set the username as Girl when display name function is called with false`, () => {
    component.displayName(false);
    expect(component.flag).toEqual(false);
    expect(component.userName).toEqual('Girl');
  });
});
